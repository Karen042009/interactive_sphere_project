// --- 1. Տեսարանի և հիմնական օբյեկտների ստեղծում ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

function setupScene() {
    scene.background = new THREE.Color(0x0f1419);
    scene.fog = new THREE.Fog(0x0f1419, 15, 40);

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.localClippingEnabled = false;

    const container = document.getElementById('canvas-container');
    container.appendChild(renderer.domElement);

    // Make the canvas focusable so OrbitControls can call focus() (improves keyboard support)
    // and ensure touch gestures are routed to the canvas rather than the browser.
    try {
        renderer.domElement.tabIndex = 0;
        renderer.domElement.style.touchAction = 'none';
    } catch (e) {
        // Some older browsers may throw, but this is non-critical.
        console.warn('Could not set canvas tabIndex/touchAction', e);
    }
}

// --- 2. Լուսավորություն ---
function setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffeedd, 1.5);
    directionalLight.position.set(10, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00d4ff, 0.7);
    pointLight.position.set(-10, -5, 5);
    scene.add(pointLight);
}

// --- 3. Կառավարում (Controls) ---
let controls = null;
function setupControls() {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2;
    controls.maxDistance = 20;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;
    camera.position.set(0, 1, 4.5); // Տեսախցիկը մի փոքր հեռացնենք
    controls.target.set(0, 0, 0);
}

// --- 4. Փոփոխականներ և օգնող ֆունկցիաներ ---
const sphereGroup = new THREE.Group();
scene.add(sphereGroup);

let initialSphereState = {};
let isSeparated = false;
const clippingPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);

// --- 5. Երկրաչափության և նյութի կառավարում ---

function getSphereMaterial(side = THREE.FrontSide) {
    const color = ui.colorPicker.value;
    const opacity = parseFloat(ui.opacitySlider.value);
    
    return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(color),
        metalness: 0.2,
        roughness: 0.5,
        opacity: opacity,
        transparent: opacity < 1,
        wireframe: ui.wireframeToggle.checked,
        emissive: new THREE.Color(color),
        emissiveIntensity: 0.1,
        side: side,
        clippingPlanes: renderer.localClippingEnabled ? [clippingPlane] : null,
        clipShadows: true,
    });
}

function updateMaterialProperties() {
    const newColor = new THREE.Color(ui.colorPicker.value);
    const newOpacity = parseFloat(ui.opacitySlider.value);
    const isWireframe = ui.wireframeToggle.checked;

    sphereGroup.traverse(child => {
        if (child.isMesh && child.material) {
            const mat = Array.isArray(child.material) ? child.material : [child.material];
            mat.forEach(m => {
                m.color.copy(newColor);
                if (m.emissive) m.emissive.copy(newColor);
                m.opacity = newOpacity;
                m.transparent = newOpacity < 1;
                m.wireframe = isWireframe;
                m.needsUpdate = true;
            });
        }
    });
}

function createSphere(preserveState = false) {
    if (!preserveState) {
        // Եթե վերականգնում ենք, պահպանում ենք նախնական կարգավորումները
        initialSphereState = {
            radius: parseFloat(ui.radiusSlider.value),
            color: ui.colorPicker.value,
            opacity: parseFloat(ui.opacitySlider.value),
            wireframe: ui.wireframeToggle.checked,
        };
    }
    
    sphereGroup.clear();
    isSeparated = false;
    
    const radius = initialSphereState.radius;
    const material = getSphereMaterial(THREE.DoubleSide);
    const geometry = new THREE.SphereGeometry(radius, 64, 64);
    
    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    sphereGroup.add(sphere);

    // Թարմացնել հատույթի սահիչի սահմանները
    ui.slicePosSlider.min = -radius;
    ui.slicePosSlider.max = radius;
    if (parseFloat(ui.slicePosSlider.value) > radius || parseFloat(ui.slicePosSlider.value) < -radius) {
        ui.slicePosSlider.value = 0;
        clippingPlane.constant = 0;
        document.getElementById('slice-value').textContent = '0.0';
    }
    updateMaterialProperties(); // Կիրառում ենք ընթացիկ կարգավորումները
}

// --- 6. Գործողություններ և Անիմացիաներ ---

function separateSphere() {
    if (isSeparated) return;
    isSeparated = true;
    sphereGroup.clear();

    const radius = initialSphereState.radius;
    const material = getSphereMaterial(THREE.DoubleSide);
    
    const capPhi = Math.PI / 3.5;
    const layerStartPhi = capPhi;
    const layerLengthPhi = Math.PI - 2 * capPhi;

    const layerGeom = new THREE.SphereGeometry(radius, 64, 64, 0, Math.PI * 2, layerStartPhi, layerLengthPhi);
    const sphereLayer = new THREE.Mesh(layerGeom, material.clone());

    const capTopGeom = new THREE.SphereGeometry(radius, 64, 64, 0, Math.PI * 2, 0, capPhi);
    const capTop = new THREE.Mesh(capTopGeom, material.clone());

    const capBottomGeom = new THREE.SphereGeometry(radius, 64, 64, 0, Math.PI * 2, Math.PI - capPhi, capPhi);
    const capBottom = new THREE.Mesh(capBottomGeom, material.clone());

    sphereGroup.add(sphereLayer, capTop, capBottom);
    animateSeparation(capTop, capBottom, radius);
}

function animateSeparation(top, bottom, radius) {
    const duration = 1500;
    const separationDistance = radius * 0.8;
    
    const animate = (obj, targetY) => {
        const start = { y: obj.position.y };
        const end = { y: targetY };
        const tween = new TWEEN.Tween(start)
            .to(end, duration)
            .easing(TWEEN.Easing.Cubic.Out)
            .onUpdate(() => {
                obj.position.y = start.y;
            })
            .start();
    };

    animate(top, separationDistance);
    animate(bottom, -separationDistance);
}

function animateIsolation(distance, axis = 'y') {
    const duration = 700;
    const children = sphereGroup.children.slice();
    
    children.forEach((child) => {
        const start = { val: child.position[axis] };
        const end = { val: child.position[axis] + distance };
        new TWEEN.Tween(start)
            .to(end, duration)
            .easing(TWEEN.Easing.Cubic.Out)
            .onUpdate(() => {
                child.position[axis] = start.val;
            })
            .start();
    });
}

// --- 7. Գնդի մասերի ցուցադրում ---

function showSphericalPart(part) {
    const radius = parseFloat(ui.radiusSlider.value);
    sphereGroup.clear();
    isSeparated = false;

    const material = getSphereMaterial(THREE.DoubleSide);
    const capMaterial = getSphereMaterial(THREE.FrontSide);
    capMaterial.transparent = false;

    switch (part) {
        case 'zone': {
            const startPhi = Math.PI / 3;
            const lengthPhi = Math.PI / 3;
            material.transparent = true;
            material.opacity = 0.3;
            material.wireframe = true;
            const geometry = new THREE.SphereGeometry(radius, 64, 64, 0, Math.PI * 2, startPhi, lengthPhi);
            sphereGroup.add(new THREE.Mesh(geometry, material));
            break;
        }
        case 'layer': {
            const startPhi = Math.PI / 3;
            const lengthPhi = Math.PI / 3;
            const geometry = new THREE.SphereGeometry(radius, 64, 64, 0, Math.PI * 2, startPhi, lengthPhi);
            sphereGroup.add(new THREE.Mesh(geometry, material));
            
            const r_top = radius * Math.sin(startPhi);
            const y_top = radius * Math.cos(startPhi);
            const capTopGeom = new THREE.CircleGeometry(r_top, 64);
            const capTop = new THREE.Mesh(capTopGeom, capMaterial);
            capTop.position.set(0, y_top, 0);
            capTop.rotation.x = Math.PI / 2;
            sphereGroup.add(capTop);

            const r_bottom = radius * Math.sin(startPhi + lengthPhi);
            const y_bottom = radius * Math.cos(startPhi + lengthPhi);
            const capBottomGeom = new THREE.CircleGeometry(r_bottom, 64);
            const capBottom = new THREE.Mesh(capBottomGeom, capMaterial.clone());
            capBottom.position.set(0, y_bottom, 0);
            capBottom.rotation.x = -Math.PI / 2;
            sphereGroup.add(capBottom);
            animateIsolation(radius * 0.5, 'y');
            break;
        }
        case 'segment': {
            const phiLength = Math.PI / 3;
            const y_base = radius * Math.cos(phiLength);
            const r_base = radius * Math.sin(phiLength);

            const geom = new THREE.SphereGeometry(radius, 64, 64, 0, Math.PI * 2, 0, phiLength);
            sphereGroup.add(new THREE.Mesh(geom, material));

            const capGeom = new THREE.CircleGeometry(r_base, 64);
            const capMesh = new THREE.Mesh(capGeom, capMaterial);
            capMesh.position.set(0, y_base, 0);
            capMesh.rotation.x = Math.PI / 2;
            sphereGroup.add(capMesh);
            animateIsolation(radius * 0.6, 'y');
            break;
        }
        case 'sector': {
            const phiLength = Math.PI / 3;
            const baseRadius = radius * Math.sin(phiLength);
            const y_base = radius * Math.cos(phiLength);

            const segmentGeom = new THREE.SphereGeometry(radius, 64, 64, 0, Math.PI * 2, 0, phiLength);
            sphereGroup.add(new THREE.Mesh(segmentGeom, getSphereMaterial(THREE.DoubleSide)));

            const coneGeom = new THREE.ConeGeometry(baseRadius, y_base, 64);
            const coneMesh = new THREE.Mesh(coneGeom, getSphereMaterial(THREE.FrontSide));
            coneMesh.position.y = y_base / 2;
            coneMesh.rotation.x = Math.PI;
            sphereGroup.add(coneMesh);
            animateIsolation(radius * 0.5, 'y');
            break;
        }
    }
}

// --- 8. UI (User Interface) ---
let ui = {};

function initializeUI() {
    ui.radiusSlider = document.getElementById('radius-slider');
    ui.colorPicker = document.getElementById('color-picker');
    ui.opacitySlider = document.getElementById('opacity-slider');
    ui.wireframeToggle = document.getElementById('wireframe-toggle');
    ui.autorotateToggle = document.getElementById('autorotate-toggle');
    ui.sliceBtn = document.getElementById('slice-btn');
    ui.separateBtn = document.getElementById('separate-btn');
    ui.resetBtn = document.getElementById('reset-btn');
    ui.slicingControls = document.getElementById('slicing-controls');
    ui.slicePosSlider = document.getElementById('slice-pos');
    ui.infoBtns = document.querySelectorAll('.info-btn');

    document.getElementById('radius-value').textContent = parseFloat(ui.radiusSlider.value).toFixed(1);
    document.getElementById('opacity-value').textContent = Math.round(parseFloat(ui.opacitySlider.value) * 100) + '%';
    document.getElementById('slice-value').textContent = parseFloat(ui.slicePosSlider.value).toFixed(1);

    setupEventListeners();
}

function setupEventListeners() {
    ui.radiusSlider.addEventListener('input', e => {
        const newRadius = parseFloat(e.target.value);
        initialSphereState.radius = newRadius;
        document.getElementById('radius-value').textContent = newRadius.toFixed(1);
        createSphere(true); // true-ն նշանակում է պահպանել state-ը և վերակառուցել
    });

    ui.colorPicker.addEventListener('input', updateMaterialProperties);
    ui.opacitySlider.addEventListener('input', e => {
        updateMaterialProperties();
        document.getElementById('opacity-value').textContent = Math.round(parseFloat(e.target.value) * 100) + '%';
    });
    ui.wireframeToggle.addEventListener('change', updateMaterialProperties);

    ui.autorotateToggle.addEventListener('change', e => {
        if (controls) controls.autoRotate = e.target.checked;
    });

    ui.sliceBtn.addEventListener('click', () => {
        renderer.localClippingEnabled = !renderer.localClippingEnabled;
        ui.sliceBtn.textContent = renderer.localClippingEnabled ? 'Հատույթ ✓' : '✂️ Հատույթ';
        ui.slicingControls.classList.toggle('hidden', !renderer.localClippingEnabled);
        createSphere(true);
    });

    ui.slicePosSlider.addEventListener('input', e => {
        clippingPlane.constant = parseFloat(e.target.value);
        document.getElementById('slice-value').textContent = parseFloat(e.target.value).toFixed(1);
    });

    ui.separateBtn.addEventListener('click', separateSphere);
    
    ui.infoBtns.forEach(btn => {
        btn.addEventListener('click', () => showSphericalPart(btn.dataset.part));
    });

    ui.resetBtn.addEventListener('click', () => {
        ui.radiusSlider.value = 1.5;
        ui.colorPicker.value = '#00d4ff';
        ui.opacitySlider.value = 1;
        ui.wireframeToggle.checked = false;
        ui.autorotateToggle.checked = true;
        
        document.getElementById('radius-value').textContent = '1.5';
        document.getElementById('opacity-value').textContent = '100%';
        
        renderer.localClippingEnabled = false;
        ui.sliceBtn.textContent = '✂️ Հատույթ';
        ui.slicingControls.classList.add('hidden');
        ui.slicePosSlider.value = 0;
        document.getElementById('slice-value').textContent = '0.0';

        if (controls) {
            controls.autoRotate = true;
            controls.reset();
        }
        
        createSphere(); // Վերականգնում ենք սկզբնական գունդը
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// --- 9. TWEEN.js Անիմացիոն գրադարանի ավելացում ---
const tweenScript = document.createElement('script');
tweenScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.umd.js';
document.body.appendChild(tweenScript);

// --- 10. Անիմացիայի ցիկլ (Render Loop) ---
function animate(time) {
    requestAnimationFrame(animate);
    
    if (controls) {
        controls.update(); // Սա թույլ է տալիս ինտերակտիվ պտտել մոդելը
    }
    
    if (window.TWEEN) {
        TWEEN.update(time);
    }
    
    renderer.render(scene, camera);
}

// --- 11. Սկզբնական կանչեր ---
function main() {
    setupScene();
    setupLighting();
    setupControls();
    initializeUI();
    createSphere(); 
    animate();
}

// DOM-ի բեռնվելուն սպասելուց հետո կանչում ենք main ֆունկցիան
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}