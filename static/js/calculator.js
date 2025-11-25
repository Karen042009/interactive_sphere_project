const calcShapes = {
    cylinder: {
        inputs: ['R', 'H'],
        calc: (R, H) => {
            const volCoeff = R * R * H;
            const areaLatCoeff = 2 * R * H;
            const areaTotalCoeff = 2 * R * (H + R);
            return {
                V: formatPi(volCoeff),
                S_lat: formatPi(areaLatCoeff),
                S_total: formatPi(areaTotalCoeff)
            };
        }
    },
    cone: {
        inputs: ['R', 'H'],
        calc: (R, H) => {
            const l = Math.sqrt(R * R + H * H);
            const volCoeff = (1 / 3) * R * R * H;
            const areaLatCoeff = R * l;
            const areaTotalCoeff = R * (l + R);
            return {
                l: l.toFixed(2),
                V: formatPi(volCoeff),
                S_lat: formatPi(areaLatCoeff),
                S_total: formatPi(areaTotalCoeff)
            };
        }
    },
    frustum: {
        inputs: ['R', 'r', 'H'],
        calc: (R, r, H) => {
            const l = Math.sqrt(Math.pow(R - r, 2) + H * H);
            const volCoeff = (1 / 3) * H * (R * R + r * r + R * r);
            const areaLatCoeff = (R + r) * l;
            const areaTotalCoeff = areaLatCoeff + R * R + r * r;
            return {
                l: l.toFixed(2),
                V: formatPi(volCoeff),
                S_lat: formatPi(areaLatCoeff),
                S_total: formatPi(areaTotalCoeff)
            };
        }
    },
    sphere: {
        inputs: ['R'],
        calc: (R) => {
            const volCoeff = (4 / 3) * Math.pow(R, 3);
            const areaCoeff = 4 * Math.pow(R, 2);
            return {
                V: formatPi(volCoeff),
                S: formatPi(areaCoeff)
            };
        }
    },
    segment: {
        inputs: ['R', 'h'],
        calc: (R, h) => {
            const volCoeff = Math.pow(h, 2) * (R - h / 3);
            const areaLatCoeff = 2 * R * h;
            return {
                V: formatPi(volCoeff),
                S_lat: formatPi(areaLatCoeff)
            };
        }
    },
    sector: {
        inputs: ['R', 'h'],
        calc: (R, h) => {
            const volCoeff = (2 / 3) * Math.pow(R, 2) * h;
            return {
                V: formatPi(volCoeff)
            };
        }
    },
    layer: {
        inputs: ['r1', 'r2', 'h'],
        calc: (r1, r2, h) => {
            const volCoeff = (1 / 6) * h * (3 * r1 * r1 + 3 * r2 * r2 + h * h);
            return {
                V: formatPi(volCoeff)
            };
        }
    },
    zone: {
        inputs: ['R', 'h'],
        calc: (R, h) => {
            const areaCoeff = 2 * R * h;
            return {
                S: formatPi(areaCoeff)
            };
        }
    }
};

function formatPi(val) {
    const rounded = parseFloat(val.toFixed(2));
    if (rounded === 0) return "0";
    if (rounded === 1) return "π";
    return `${rounded}π`;
}

const inputLabels = {
    R: 'label_radius',
    H: 'label_height',
    r: 'label_small_radius',
    h: 'label_height_part',
    r1: 'label_r1',
    r2: 'label_r2'
};

function initCalculator() {
    const shapeSelect = document.getElementById('shapeSelect');
    const calcBtn = document.getElementById('calcBtn');

    shapeSelect.addEventListener('change', updateInputs);
    calcBtn.addEventListener('click', performCalculation);

    updateInputs(); // Initial call
}

function updateInputs() {
    const shape = document.getElementById('shapeSelect').value;
    const container = document.getElementById('dynamicInputs');
    container.innerHTML = '';

    if (calcShapes[shape]) {
        calcShapes[shape].inputs.forEach(key => {
            const wrapper = document.createElement('div');
            wrapper.className = 'calc-group';

            const label = document.createElement('label');
            // We need to get the localized label. 
            // Since translations.js runs first, we can use getText if available, 
            // or just set data-i18n attribute and let the translation logic handle it.
            // But for dynamic content, we might need to trigger translation update.
            // Let's use data-i18n.
            label.setAttribute('data-i18n', inputLabels[key] || `label_${key}`);
            label.textContent = key; // Fallback

            const input = document.createElement('input');
            input.type = 'number';
            input.id = `input_${key}`;
            input.step = 'any';
            input.placeholder = '0';

            wrapper.appendChild(label);
            wrapper.appendChild(input);
            container.appendChild(wrapper);
        });

        // Trigger translation update for new elements
        if (typeof setLanguage === 'function') {
            const currentLang = localStorage.getItem('preferredLanguage') || 'hy';
            setLanguage(currentLang);
        } else if (window.translations) {
            // Fallback if setLanguage is not global
            const lang = document.documentElement.lang || 'hy';
            container.querySelectorAll('[data-i18n]').forEach(el => {
                const k = el.getAttribute('data-i18n');
                if (window.translations[lang] && window.translations[lang][k]) {
                    el.textContent = window.translations[lang][k];
                }
            });
        }
    }
}

function performCalculation() {
    const shape = document.getElementById('shapeSelect').value;
    const resultContainer = document.getElementById('calcResult');

    if (!calcShapes[shape]) return;

    const values = [];
    for (const key of calcShapes[shape].inputs) {
        const val = parseFloat(document.getElementById(`input_${key}`).value);
        if (isNaN(val)) {
            resultContainer.innerHTML = `<span style="color: #ff6b6b;" data-i18n="error_invalid_input">Խնդրում ենք մուտքագրել ճիշտ թվեր</span>`;
            // Re-translate error message
            const lang = document.documentElement.lang || 'hy';
            if (window.translations && window.translations[lang] && window.translations[lang]['error_invalid_input']) {
                resultContainer.querySelector('span').textContent = window.translations[lang]['error_invalid_input'];
            }
            return;
        }
        values.push(val);
    }

    const results = calcShapes[shape].calc(...values);

    let html = '';

    // Helper to translate result keys
    const resultKeys = {
        V: 'volume',
        S: 'surface_area',
        S_lat: 'lateral_surface',
        S_total: 'total_surface',
        l: 'slant_height'
    };

    for (const [key, val] of Object.entries(results)) {
        const labelKey = resultKeys[key] || key;
        const label = getText(labelKey) || key; // getText is defined in main.js, we might need to duplicate it or import it.
        // Since main.js is not loaded here, we define a local helper.

        html += `<div class="result-item"><span>${label}:</span> <span class="value">${val}</span></div>`;
    }

    resultContainer.innerHTML = html;
}

// Helper to get text (duplicated from main.js for independence)
function getText(key) {
    const lang = document.documentElement.lang || 'hy';
    if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    return key;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initCalculator);
