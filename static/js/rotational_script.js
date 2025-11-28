// --- Encyclopedic Theory Content (Armenian, Russian, English) ---
const theoryContent = {
    hy: `
        <!-- 1. CYLINDER -->
        <div class="theory-block">
            <h2>1. Գլան (Cylinder)</h2>
            <p><strong>Սահմանում.</strong> Ուղիղ գլանը մարմին է, որն առաջանում է ուղղանկյունը իր կողմերից մեկի շուրջ պտտելիս: Այն ուղիղը, որի շուրջ կատարվում է պտույտը, կոչվում է <em>գլանի առանցք</em>:</p>
            
            <h3>Հիմնական Տարրերը և Հատկությունները</h3>
            <ul>
                <li><strong>Հիմքեր.</strong> Առանցքին ուղղահայաց երկու հավասար շրջաններ:</li>
                <li><strong>Ծնորդներ.</strong> Հիմքերի շրջանագծերի համապատասխան կետերը միացնող հատվածներ: Դրանք զուգահեռ են առանցքին և հավասար են իրար:</li>
                <li><strong>Առանցքային Հատույթ.</strong> Առանցքով անցնող հարթությամբ հատույթը ուղղանկյուն է:</li>
            </ul>

            <h3>Բանաձևերի Արտածում</h3>
            <div class="formula-box">
                <p><strong>Կողմնային Մակերևույթի Մակերես.</strong> Գլանի փռվածքը ուղղանկյուն է, որի կողմերն են հիմքի շրջանագծի երկարությունը ($2\\pi R$) և բարձրությունը ($H$): <br> $$ S_{k} = 2\\pi R H $$</p>
                <p><strong>Լրիվ Մակերևույթի Մակերես.</strong> Գումարվում է երկու հիմքերի մակերեսները ($2 \\cdot \\pi R^2$): <br> $$ S_{l} = 2\\pi R H + 2\\pi R^2 = 2\\pi R(H+R) $$</p>
                <p><strong>Ծավալ.</strong> Հիմքի մակերեսի և բարձրության արտադրյալը (Կավալիերիի սկզբունքով): <br> $$ V = \\pi R^2 H $$</p>
            </div>
        </div>

        <!-- 2. CONE -->
        <div class="theory-block">
            <h2>2. Կոն (Cone)</h2>
            <p><strong>Սահմանում.</strong> Ուղիղ կոնը մարմին է, որն առաջանում է ուղղանկյուն եռանկյունը իր էջերից մեկի (առանցքի) շուրջ պտտելիս: Մյուս էջը գծում է կոնի հիմքը (շրջան), իսկ ներքնաձիգը՝ կողմնային մակերևույթը:</p>

            <h3>Հիմնական Տարրերը և Հատկությունները</h3>
            <ul>
                <li><strong>Գագաթ.</strong> Առանցքի և ծնորդների հատման կետը:</li>
                <li><strong>Ծնորդ ($l$).</strong> Գագաթը հիմքի շրջանագծի կետերին միացնող հատվածները: Բոլոր ծնորդները հավասար են:</li>
                <li><strong>Առանցքային Հատույթ.</strong> Առանցքով անցնող հարթությամբ հատույթը հավասարասրուն եռանկյուն է:</li>
            </ul>

            <h3>Բանաձևերի Արտածում</h3>
            <div class="formula-box">
                <p><strong>Կապը տարրերի միջև (Պյութագորաս).</strong> $$ l^2 = R^2 + H^2 $$</p>
                <p><strong>Կողմնային Մակերևույթի Մակերես.</strong> Կոնի փռվածքը շրջանային սեկտոր է, որի շառավիղը $l$ է, իսկ աղեղի երկարությունը՝ $2\\pi R$: <br> $$ S_{k} = \\frac{1}{2} l \\cdot (2\\pi R) = \\pi R l $$</p>
                <p><strong>Լրիվ Մակերևույթի Մակերես.</strong> $$ S_{l} = S_{k} + S_{h} = \\pi R l + \\pi R^2 = \\pi R (l + R) $$</p>
                <p><strong>Ծավալ.</strong> Հավասար է նույն հիմքով և բարձրությամբ գլանի ծավալի մեկ երրորդին: <br> $$ V = \\frac{1}{3}\\pi R^2 H $$</p>
            </div>
        </div>

        <!-- 3. FRUSTUM -->
        <div class="theory-block">
            <h2>3. Հատած Կոն (Frustum)</h2>
            <p><strong>Սահմանում.</strong> Հատած կոնը առաջանում է, երբ կոնը հատում ենք նրա հիմքին զուգահեռ հարթությամբ: Այն կարելի է դիտարկել նաև որպես ուղղանկյուն սեղանի պտույտ իր փոքր սրունքի (առանցքի) շուրջ:</p>

            <h3>Հիմնական Տարրերը</h3>
            <ul>
                <li><strong>Հիմքեր.</strong> Երկու զուգահեռ շրջաններ ($R$ և $r$ շառավիղներով):</li>
                <li><strong>Բարձրություն ($H$).</strong> Հիմքերի կենտրոնների հեռավորությունը:</li>
                <li><strong>Ծնորդ ($l$).</strong> Հիմքերի շրջանագծերը միացնող հատվածը կողմնային մակերևույթի վրա:</li>
            </ul>

            <h3>Բանաձևերի Արտածում</h3>
            <div class="formula-box">
                <p><strong>Կողմնային Մակերևույթի Մակերես.</strong> Դիտարկվում է որպես մեծ և փոքր կոնների կողմնային մակերևույթների տարբերություն: <br> $$ S_{k} = \\pi (R + r) l $$</p>
                <p><strong>Լրիվ Մակերևույթի Մակերես.</strong> $$ S_{l} = S_{k} + \\pi R^2 + \\pi r^2 $$</p>
                <p><strong>Ծավալ.</strong> $$ V = \\frac{1}{3}\\pi H (R^2 + r^2 + Rr) $$</p>
            </div>
        </div>

        <!-- 4. SPHERE -->
        <div class="theory-block">
            <h2>4. Գունդ և Գնդային Մակերևույթ (Sphere)</h2>
            <p><strong>Սահմանում.</strong> <em>Գնդային մակերևույթը (սֆերա)</em> տարածության այն բոլոր կետերի բազմությունն է, որոնք գտնվում են տրված կետից (կենտրոն) տրված հեռավորության (շառավիղ) վրա: <em>Գունդը</em> այն մարմինն է, որը սահմանափակված է գնդային մակերևույթով և ներառում է տարածության բոլոր այն կետերը, որոնց հեռավորությունը կենտրոնից փոքր է կամ հավասար շառավղին (≤ R)։ </p>

            <h3>Հատկություններ</h3>
            <ul>
                <li><strong>Հատույթներ.</strong> Գնդի ցանկացած հատույթ հարթությամբ շրջան է: Եթե հարթությունը անցնում է կենտրոնով, հատույթը կոչվում է <em>Մեծ շրջան</em>, հակառակ դեպքում՝ <em>Փոքր շրջան</em>։</li>
                <li><strong>Շոշափող հարթություն.</strong> Ուղղահայաց է շոշափման կետ տարված շառավղին:</li>
            </ul>

            <div class="formula-box">
                <p><strong>Մակերևույթի Մակերես.</strong> Հավասար է մեծ շրջանի քառապատիկ մակերեսին: <br> $$ S = 4\\pi R^2 $$</p>
                <p><strong>Ծավալ.</strong> $$ V = \\frac{4}{3}\\pi R^3 $$</p>
            </div>
            
            <h3>Գնդի Մասերը</h3>
            
            <div class="sub-theory">
                <h4>ա) Գնդային Սեգմենտ (Spherical Segment)</h4>
                <p>Գնդի այն մասը, որն առաջանում է գունդը հարթությամբ հատելիս։ Յուրաքանչյուր հատում ստեղծում է երկու սեգմենտ։</p>
                <div class="formula-box">
                    <p><strong>Մակերևույթի Մակերես.</strong> Կախված է միայն սեգմենտի $h$ բարձրությունից և գնդի $R$ շառավղից: <br> $$ S_{k} = 2\\pi R h $$</p>
                    <p><strong>Ծավալ.</strong> $$ V = \\pi h^2 (R - \\frac{h}{3}) $$</p>
                </div>
            </div>

            <div class="sub-theory">
                <h4>բ) Գնդային Սեկտոր (Spherical Sector)</h4>
                <p>Մարմին, որը ստացվում է գնդային սեգմենտից և այն կոնից, որի գագաթը գնդի կենտրոնն է, իսկ հիմքը՝ սեգմենտի հիմքը:</p>
                <div class="formula-box">
                    <p><strong>Ծավալ.</strong> Հավասար է սեկտորի մակերևույթի (սեգմենտի մասի) և գնդի շառավղի արտադրյալի մեկ երրորդին: <br> $$ V = \\frac{2}{3}\\pi R^2 h $$</p>
                </div>
            </div>

            <div class="sub-theory">
                <h4>գ) Գնդային Շերտ (Spherical Layer)</h4>
                <p>Գնդի այն մասը, որը պարփակված է երկու զուգահեռ հարթությունների միջև:</p>
                <div class="formula-box">
                    <p><strong>Կողմնային Մակերևույթի Մակերես (Գնդային գոտի).</strong> $$ S_{k} = 2\\pi R h $$</p>
                    <p><strong>Ծավալ.</strong> $$ V = \\frac{1}{6}\\pi h (3r_1^2 + 3r_2^2 + h^2) $$</p>
                </div>
            </div>

            <div class="sub-theory">
                <h4>դ) Գնդային Գոտի (Spherical Cap)</h4>
                <p>Գնդային մակերևույթի այն մասը, որը գտնվում է երկու զուգահեռ հատող հարթությունների միջև։</p>
                <div class="formula-box">
                    <p><strong>Մակերևույթի Մակերես.</strong> $$ S_{k} = 2\\pi R h $$</p>
                </div>
            </div>
        </div>
    `,
    ru: `
        <!-- 1. Цилиндр -->
        <div class="theory-block">
            <h2>1. Цилиндр</h2>
            <p><strong>Определение.</strong> Прямой круговой цилиндр — тело, получающееся при вращении прямоугольника вокруг одной из его сторон (оси).</p>
            <h3>Основные элементы и свойства</h3>
            <ul>
                <li><strong>Основания.</strong> Два равных и параллельных круга, центры которых лежат на оси цилиндра.</li>
                <li><strong>Образующие.</strong> Отрезки, соединяющие соответствующие точки кругов; они параллельны оси и равны между собой (высота H).</li>
                <li><strong>Сечение через ось.</strong> Прямоугольник.</li>
            </ul>
            <div class="formula-box">
                <p><strong>Площадь боковой поверхности:</strong> $$ S_{k} = 2\\pi R H $$</p>
                <p><strong>Полная площадь поверхности:</strong> $$ S_{l} = 2\\pi R(H+R) $$</p>
                <p><strong>Объем:</strong> $$ V = \\pi R^2 H $$</p>
            </div>
        </div>

        <!-- 2. Конус -->
        <div class="theory-block">
            <h2>2. Конус</h2>
            <p><strong>Определение.</strong> Прямой конус получается при вращении прямоугольного треугольника вокруг одного из катетов; вершина конуса — точка пересечения образующих.</p>
            <h3>Элементы</h3>
            <ul>
                <li><strong>Образующая (l).</strong> Отрезок от вершины до точки основания; для прямого конуса все образующие равны.</li>
                <li><strong>Сечение через ось.</strong> Равнобедренный треугольник.</li>
            </ul>
            <div class="formula-box">
                <p><strong>Соотношение (Пифагор):</strong> $$ l^2 = R^2 + H^2 $$</p>
                <p><strong>Площадь боковой поверхности:</strong> $$ S_{k} = \\pi R l $$</p>
                <p><strong>Полная площадь поверхности:</strong> $$ S_{l} = \\pi R (l + R) $$</p>
                <p><strong>Объем:</strong> $$ V = \\frac{1}{3}\\pi R^2 H $$</p>
            </div>
        </div>

        <!-- 3. Усечённый конус -->
        <div class="theory-block">
            <h2>3. Усечённый конус</h2>
            <p><strong>Определение.</strong> Часть конуса, ограниченная двумя параллельными плоскостями (или основанием и плоскостью, параллельной основанию).</p>
            <div class="formula-box">
                <p><strong>Площадь боковой поверхности:</strong> $$ S_{k} = \\pi (R + r) l $$</p>
                <p><strong>Полная площадь поверхности:</strong> $$ S_{l} = \\pi (R + r) l + \\pi R^2 + \\pi r^2 $$</p>
                <p><strong>Объем:</strong> $$ V = \\frac{1}{3}\\pi H (R^2 + r^2 + Rr) $$</p>
            </div>
        </div>

        <!-- 4. Сфера и шар -->
        <div class="theory-block">
            <h2>4. Сфера и шар</h2>
            <p><strong>Определение.</strong> Сфера — множество точек, равноудалённых от центра на расстояние R; шар — тело, ограниченное сферой.</p>
            <div class="formula-box">
                <p><strong>Площадь поверхности:</strong> $$ S = 4\\pi R^2 $$</p>
                <p><strong>Объем:</strong> $$ V = \\frac{4}{3}\\pi R^3 $$</p>
            </div>

            <h3>Части шара</h3>
            <div class="sub-theory">
                <h4>а) Сферический сегмент</h4>
                <p>Часть шара, отсекаемая секущей плоскостью; характеризуется высотой сегмента h.</p>
                <div class="formula-box">
                    <p><strong>Боковая площадь (полоса):</strong> $$ S_{k} = 2\\pi R h $$</p>
                    <p><strong>Полная площадь:</strong> $$ S_{l} = 2\\pi R h + \\pi r^2 $$</p>
                    <p><strong>Объем:</strong> $$ V = \\pi h^2 (R - \\frac{h}{3}) $$</p>
                </div>
            </div>

            <div class="sub-theory">
                <h4>б) Сферический сектор</h4>
                <p>Состоит из сегмента и соответствующего конуса, образованного центром сферы.</p>
                <div class="formula-box">
                    <p><strong>Объем:</strong> $$ V = \\frac{2}{3}\\pi R^2 h $$</p>
                </div>
            </div>

            <div class="sub-theory">
                <h4>в) Сферическая полоса (слой)</h4>
                <p>Часть шара между двумя параллельными плоскостями.</p>
                <div class="formula-box">
                    <p><strong>Боковая площадь:</strong> $$ S_{k} = 2\\pi R h $$</p>
                    <p><strong>Объем:</strong> $$ V = \\frac{1}{6}\\pi h (3r_1^2 + 3r_2^2 + h^2) $$</p>
                </div>
            </div>
        </div>
    `,
    en: `
        <!-- 1. Cylinder -->
        <div class="theory-block">
            <h2>1. Cylinder</h2>
            <p><strong>Definition.</strong> A right circular cylinder is the solid obtained by rotating a rectangle around one of its sides (the axis).</p>
            <h3>Main elements and properties</h3>
            <ul>
                <li><strong>Bases.</strong> Two equal parallel circles; their centers lie on the axis.</li>
                <li><strong>Generatrices.</strong> Line segments joining corresponding points on the circles; they are parallel to the axis and equal (height H).</li>
                <li><strong>Axial section.</strong> A rectangle through the axis.</li>
            </ul>
            <div class="formula-box">
                <p><strong>Lateral surface area:</strong> $$ S_{k} = 2\\pi R H $$</p>
                <p><strong>Total surface area:</strong> $$ S_{l} = 2\\pi R(H+R) $$</p>
                <p><strong>Volume:</strong> $$ V = \\pi R^2 H $$</p>
            </div>
        </div>

        <!-- 2. Cone -->
        <div class="theory-block">
            <h2>2. Cone</h2>
            <p><strong>Definition.</strong> A right circular cone is formed by rotating a right triangle about one of its legs; the slant (l) is the length of the generatrix.</p>
            <div class="formula-box">
                <p><strong>Relation (Pythagoras):</strong> $$ l^2 = R^2 + H^2 $$</p>
                <p><strong>Lateral surface area:</strong> $$ S_{k} = \\pi R l $$</p>
                <p><strong>Total surface area:</strong> $$ S_{l} = \\pi R (l + R) $$</p>
                <p><strong>Volume:</strong> $$ V = \\frac{1}{3}\\pi R^2 H $$</p>
            </div>
        </div>

        <!-- 3. Frustum -->
        <div class="theory-block">
            <h2>3. Frustum</h2>
            <p><strong>Definition.</strong> The frustum of a cone is the portion between two parallel planes cutting the cone (or between the base and a plane parallel to it).</p>
            <div class="formula-box">
                <p><strong>Lateral surface area:</strong> $$ S_{k} = \\pi (R + r) l $$</p>
                <p><strong>Total surface area:</strong> $$ S_{l} = \\pi (R + r) l + \\pi R^2 + \\pi r^2 $$</p>
                <p><strong>Volume:</strong> $$ V = \\frac{1}{3}\\pi H (R^2 + r^2 + Rr) $$</p>
            </div>
        </div>

        <!-- 4. Sphere -->
        <div class="theory-block">
            <h2>4. Sphere and Ball</h2>
            <p><strong>Definition.</strong> A sphere is the set of points at a fixed distance (radius) from a center; a ball is the solid bounded by the sphere.</p>
            <div class="formula-box">
                <p><strong>Surface area:</strong> $$ S = 4\\pi R^2 $$</p>
                <p><strong>Volume:</strong> $$ V = \\frac{4}{3}\\pi R^3 $$</p>
            </div>

            <h3>Spherical parts</h3>
            <div class="sub-theory">
                <h4>a) Spherical segment</h4>
                <p>The portion of a sphere cut off by a plane; described by segment height h.</p>
                <div class="formula-box">
                    <p><strong>Lateral area (zone):</strong> $$ S_{k} = 2\\pi R h $$</p>
                    <p><strong>Total area:</strong> $$ S_{l} = 2\\pi R h + \\pi r^2 $$</p>
                    <p><strong>Volume:</strong> $$ V = \\pi h^2 (R - \\frac{h}{3}) $$</p>
                </div>
            </div>

            <div class="sub-theory">
                <h4>b) Spherical sector</h4>
                <p>Formed by a spherical segment together with the cone having the sphere center as vertex.</p>
                <div class="formula-box">
                    <p><strong>Volume:</strong> $$ V = \\frac{2}{3}\\pi R^2 h $$</p>
                </div>
            </div>

            <div class="sub-theory">
                <h4>c) Spherical layer</h4>
                <p>The part of a sphere between two parallel planes.</p>
                <div class="formula-box">
                    <p><strong>Lateral area:</strong> $$ S_{k} = 2\\pi R h $$</p>
                    <p><strong>Total area:</strong> $$ S_{l} = 2\\pi R h + \\pi r_1^2 + \\pi r_2^2 $$</p>
                    <p><strong>Volume:</strong> $$ V = \\frac{1}{6}\\pi h (3r_1^2 + 3r_2^2 + h^2) $$</p>
                </div>
            </div>
        </div>
    `
};

// --- Translations (UI Elements) ---
const translations = {
    hy: {
        nav_theory: "Տեսություն",
        nav_apps: "Կիրառություններ",
        nav_calc: "Հաշվիչ",
        nav_calc: "Հաշվիչ",
        nav_models: "Մոդելներ",
        nav_sphere: "🌐 Գունդ",
        theory_title: "Պտտական Մարմիններ",
        theory_intro: "Պտտական մարմինները երկրաչափության հիմնասյուներից են...",
        apps_title: "Օպտիմալ Կիրառություններ Կյանքում",
        apps_intro: "Ինչու՞ են առօրյա իրերը հենց այսպիսին?",
        calc_title: "Խելացի Հաշվիչ",
        calc_select: "Ընտրեք Մարմինը.",
        btn_calc: "Հաշվել",
        model_lab: "3D Լաբորատորիա",
        model_shape: "Մարմին:",
        model_color: "Գույն:",
        model_mode: "Ռեժիմ:",
        btn_wireframe: "Ցանցային / Հոծ",
        model_slice: "Հատում:",
        model_move: "Տեղաշարժ:",
        opt_cyl: "Գլան",
        opt_cone: "Կոն",
        opt_frustum: "Հատած Կոն",
        opt_sphere: "Գունդ",
        opt_segment: "Գնդային Սեգմենտ",
        opt_sector: "Գնդային Սեկտոր",
        opt_layer: "Գնդային Շերտ",
        opt_zone: "Գնդային Գոտի",
        info_slant: "Ծնորդ (l):",
        info_side_area: "$S_k$: ",
        info_total_area: "$S_l$: ",
        info_volume: "$V$: ",
        info_surface: "Մակերևույթի մակերես:"
        ,
        footer_copy: "&copy; 2025 «Պտտական Մարմիններ» Նախագիծ. Բոլոր իրավունքները պաշտպանված են.",
        footer_created: "Ստեղծված է Կարեն Պողոսյանի և Գրիշա Խումարյանի կողմից"
    },
    ru: {
        nav_theory: "Теория",
        nav_apps: "Применения",
        nav_calc: "Калькулятор",
        nav_calc: "Калькулятор",
        nav_models: "Модели",
        nav_sphere: "🌐 Сфера",
        theory_title: "Тела Вращения",
        theory_intro: "Тела вращения — классические объекты геометрии и физики...",
        apps_title: "Оптимальные Применения",
        apps_intro: "Почему повседневные вещи выглядят именно так?",
        calc_title: "Умный Калькулятор",
        calc_select: "Выберите Фигуру.",
        btn_calc: "Рассчитать",
        model_lab: "3D Лаборатория",
        model_shape: "Фигура:",
        model_color: "Цвет:",
        model_mode: "Режим:",
        btn_wireframe: "Каркас / Сплошной",
        model_slice: "Сечение:",
        model_move: "Перемещение:",
        opt_cyl: "Цилиндр",
        opt_cone: "Конус",
        opt_frustum: "Усеченный Конус",
        opt_sphere: "Сфера",
        opt_segment: "Сферический Сегмент",
        opt_sector: "Сферический Сектор",
        opt_layer: "Сферический Слой",
        opt_zone: "Сферический Пояс",
        info_slant: "Образующая (l):",
        info_side_area: "$S_k$: ",
        info_total_area: "$S_l$: ",
        info_volume: "$V$: ",
        info_surface: "Площадь поверхности:"
        ,
        footer_copy: '&copy; 2025 Проект "Тела Вращения". Все права защищены.',
        footer_created: "Создано: Карен Погосян и Гриша Хумарян"
    },
    en: {
        nav_theory: "Theory",
        nav_apps: "Applications",
        nav_calc: "Calculator",
        nav_calc: "Calculator",
        nav_models: "Models",
        nav_sphere: "🌐 Sphere",
        theory_title: "Solids of Revolution",
        theory_intro: "Solids of revolution are fundamental geometric objects...",
        apps_title: "Optimal Applications",
        apps_intro: "Why do everyday objects look like this?",
        calc_title: "Smart Calculator",
        calc_select: "Select Shape.",
        btn_calc: "Calculate",
        model_lab: "3D Laboratory",
        model_shape: "Shape:",
        model_color: "Color:",
        model_mode: "Mode:",
        btn_wireframe: "Wireframe / Solid",
        model_slice: "Slicing:",
        model_move: "Move:",
        opt_cyl: "Cylinder",
        opt_cone: "Cone",
        opt_frustum: "Frustum",
        opt_sphere: "Sphere",
        opt_segment: "Spherical Segment",
        opt_sector: "Spherical Sector",
        opt_layer: "Spherical Layer",
        opt_zone: "Spherical Zone",
        info_slant: "Slant (l):",
        info_side_area: "$S_k$: ",
        info_total_area: "$S_l$: ",
        info_volume: "$V$: ",
        info_surface: "Surface Area:"
        ,
        footer_copy: '&copy; 2025 "Rotational Solids" Project. All Rights Reserved.',
        footer_created: "Created by Karen Poghosyan and Grisha Khumaryan"
    }
};

let currentLang = 'hy';

// --- Navigation Logic ---
window.showPage = function (pageId) {
    if (pageId === 'sphere_link') {
        window.location.href = 'index.html';
        return;
    }
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
    });
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
        activePage.style.display = 'block';
    }
    if (pageId === 'models') {
        setTimeout(() => {
            const container = document.getElementById('canvas-container');
            if (camera && renderer && container) {
                const w = Math.max(240, container.clientWidth || window.innerWidth);
                const h = Math.max(240, container.clientHeight || (window.innerHeight - 140));
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
                renderer.setSize(w, h);
            }
        }, 100);
    }
};

// --- Language Logic ---
window.setLang = function (lang) {
    currentLang = lang;

    // Remove active class from language buttons - no longer needed as buttons replaced by dropdown

    // Sync dropdown selected option if it exists
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = lang;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    const theoryContainer = document.getElementById('theory-content');
    if (theoryContainer) {
        // Sanitize theory HTML to remove any accidental injected tokens like "info_slant:"
        let raw = theoryContent[lang] || theoryContent['hy'];
        raw = raw.replace(/\binfo_[a-zA-Z0-9_]*\s*:\s*"[^"]*"\s*,?/g, '');
        theoryContainer.innerHTML = raw;
    }

    renderApps();

    if (window.MathJax) {
        MathJax.typesetPromise();
    }

    // Update mobile nav dropdown and page padding after language change
    if (window.populateMobileNav) populateMobileNav();
    if (window.adjustPagePadding) adjustPagePadding();
};

// Toggle Mobile Menu
window.toggleMobileMenu = function () {
    const overlay = document.getElementById('mobileMenuOverlay');
    if (overlay) {
        overlay.classList.toggle('active');
    }
};

// Populate mobile nav list with localized labels
function populateMobileNav() {
    const list = document.getElementById('mobileMenuLinks');
    if (!list) return;
    list.innerHTML = '';

    // Define items with icons for better look
    const items = [
        { id: 'sphere_link', key: 'nav_sphere', icon: 'fa-globe' },
        { id: 'theory', key: 'nav_theory', icon: 'fa-book' },
        { id: 'applications', key: 'nav_apps', icon: 'fa-rocket' },
        { id: 'calculator', key: 'nav_calc', icon: 'fa-calculator' },
        { id: 'models', key: 'nav_models', icon: 'fa-cube' }
    ];

    items.forEach(item => {
        const li = document.createElement('li');
        const text = (translations[currentLang] && translations[currentLang][item.key]) ? translations[currentLang][item.key] : translations['en'][item.key];

        li.innerHTML = `<i class="fas ${item.icon}"></i> ${text}`;
        li.onclick = () => {
            showPage(item.id);
            toggleMobileMenu();
        };
        list.appendChild(li);
    });
}

// Adjust page top padding to account for navbar height (prevents overlap on mobile)
function adjustPagePadding() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    const h = Math.ceil(nav.getBoundingClientRect().height);
    document.querySelectorAll('.page').forEach(p => {
        p.style.paddingTop = (h + 16) + 'px';
    });
}

// --- Theme Logic ---
window.toggleTheme = function () {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);

    const icon = document.querySelector('.theme-btn i');
    icon.className = next === 'light' ? 'fas fa-moon' : 'fas fa-sun';

    // If on models page, re-init 3D to update grid color
    if (document.getElementById('models') && document.getElementById('models').classList.contains('active')) {
        // Remove old canvas and re-init
        const container = document.getElementById('canvas-container');
        if (container) {
            while (container.firstChild) container.removeChild(container.firstChild);
        }
        init3D();
        // ensure renderer fits after re-init
        setTimeout(handleResize, 120);
    }
};

// --- Applications Data (30 Items) ---
const appData = [
    {
        id: "soda", icon: "fa-wine-bottle",
        title: { hy: "1. Ըմպելիքի Տարա", en: "1. Soda Can", ru: "1. Банка" },
        desc: { hy: "Մակերեսի մինիմալացում", en: "Surface minimization", ru: "Минимизация поверхности" },
        content: {
            hy: `< p > <strong>Խնդիր.</strong> Տրված $V$ ծավալի դեպքում գտնել գլանի այնպիսի չափսեր, որոնց դեպքում լրիվ մակերևույթի մակերեսը(հետևաբար՝ նյութի ծախսը) կլինի նվազագույնը:</p >
            <p><strong>Մաթեմատիկական Արտածում.</strong></p>
            <div class="formula-box">
                <p>1. Ծավալի բանաձևից արտահայտենք բարձրությունը. $$ V = \\pi R^2 H \\implies H = \\frac{V}{\\pi R^2} $$</p>
                <p>2. Տեղադրենք մակերեսի բանաձևի մեջ. $$ S(R) = 2\\pi R^2 + 2\\pi R H = 2\\pi R^2 + \\frac{2V}{R} $$</p>
                <p>3. Գտնենք ածանցյալը և հավասարեցնենք զրոյի (էքստրեմումի պայման). $$ S'(R) = 4\\pi R - \\frac{2V}{R^2} = 0 $$ $$ 4\\pi R = \\frac{2V}{R^2} \\implies 2\\pi R^3 = V $$</p>
                <p>4. Տեղադրենք $V$-ի արժեքը. $$ 2\\pi R^3 = \\pi R^2 H \\implies 2R = H $$</p>
            </div>
            <p><strong>Եզրակացություն.</strong> Նյութի նվազագույն ծախսի համար գլանի տրամագիծը ($2R$) պետք է հավասար լինի բարձրությանը ($H$):</p>`,
            ru: `< p > <strong>Задача.</strong> Получить заданный объем с минимальным расходом алюминия.</p > <p><strong>Решение.</strong> Для оптимального цилиндра \\(H = 2R\\).</p>`,
            en: `< p > <strong>Problem.</strong> Minimize aluminum usage for a given volume.</p > <p><strong>Solution.</strong> For an optimal cylinder, \\(H = 2R\\).</p>`
        }
    },
    {
        id: "tank", icon: "fa-truck-moving",
        title: { hy: "2. Ցիստեռն", en: "2. Tanker", ru: "2. Цистерна" },
        desc: { hy: "Ճնշման բաշխում", en: "Pressure distribution", ru: "Распределение давления" },
        content: {
            hy: `< p > <strong>Ֆիզիկա և Երկրաչափություն.</strong> Ինչու՞ են ցիստեռնները գլանաձև, այլ ոչ թե ուղղանկյունանիստ:</p >
    <div class="formula-box">
        <p>1. <strong>Ճնշման Բաշխում.</strong> Հեղուկը կամ գազը ճնշում է գործադրում անոթի պատերի վրա բոլոր ուղղություններով: Գլանաձև մակերևույթի դեպքում առաջանում է այսպես կոչված «օղակային լարում» (Hoop Stress), որը հավասարաչափ է բաշխվում:</p>
        <p>$$ \\sigma = \\frac{Pr}{t} $$</p>
        <p>որտեղ $P$-ն ճնշումն է, $r$-ը՝ շառավիղը, $t$-ն՝ պատի հաստությունը:</p>
        <p>2. <strong>Անկյունների Բացակայություն.</strong> Ուղղանկյուն անոթների դեպքում անկյուններում առաջանում են ահռելի լարումներ (stress concentration), ինչը կպահանջեր շատ ավելի հաստ և ծանր մետաղ:</p>
        <p>3. <strong>Ծանրության Կենտրոն.</strong> Հաճախ օգտագործվում են էլիպսաձև հատույթով գլաններ՝ ծանրության կենտրոնը իջեցնելու և մեքենայի կայունությունը մեծացնելու համար:</p>
    </div>`,
            ru: `< p > <strong>Физика.</strong> Цилиндрическая форма равномерно распределяет давление жидкости.</p > `,
            en: `< p > <strong>Physics.</strong> The cylindrical shape distributes fluid pressure evenly.</p > `
        }
    },
    {
        id: "pen", icon: "fa-pen-nib",
        title: { hy: "3. Գնդիկավոր Գրիչ", en: "3. Ballpoint Pen", ru: "3. Шариковая Ручка" },
        desc: { hy: "Շփում և պտույտ", en: "Friction & Rotation", ru: "Трение и Вращение" },
        content: {
            hy: `< p > <strong>Ինժեներական Հրաշք.</strong> Գրիչի ծայրը փոքրիկ գունդ է(սովորաբար վոլֆրամի կարբիդից), որը կատարում է երկու ֆունկցիա՝ փակում է թանաքի ճանապարհը(չի թողնում չորանա) և պտտվելով տեղափոխում է այն թղթի վրա:</p >
    <div class="formula-box">
        <p><strong>Երկրաչափական Հատկություններ.</strong></p>
        <p>1. <strong>Հաստատուն Լայնություն.</strong> Գունդը միակ մարմինն է, որի պրոյեկցիան ցանկացած ուղղությամբ շրջան է: Սա թույլ է տալիս նրան ազատ պտտվել բնիկում (socket) ցանկացած ուղղությամբ:</p>
        <p>2. <strong>Մակերևույթի Մակերես.</strong> $$ S = 4\\pi R^2 $$ Գնդի մակերեսը ապահովում է թանաքի առավելագույն տեղափոխում մինիմալ չափսերի դեպքում:</p>
        <p>3. <strong>Սիմետրիա.</strong> Գունդն ունի կատարյալ սիմետրիա ($O(3)$ խումբ), ինչը նշանակում է, որ գրելու անկյունը նշանակություն չունի:</p>
    </div>`,
            ru: `< p > <strong>Механизм.</strong> Маленький шарик на конце ручки вращается от трения с бумагой, перенося чернила.</p > `,
            en: `< p > <strong>Mechanism.</strong> The small sphere at the tip rotates due to friction, transferring ink to the paper.</p > `
        }
    },
    {
        id: "cup", icon: "fa-glass-whiskey",
        title: { hy: "4. Չափիչ Բաժակ", en: "4. Measuring Cup", ru: "4. Мерный Стакан" },
        desc: { hy: "Ծավալի գծայնություն", en: "Volume Linearity", ru: "Линейность Объема" },
        content: {
            hy: `<p><strong>Մաթեմատիկա.</strong> Գլանի ծավալը որոշվում է $V = \\pi R^2 H$ բանաձևով: Քանի որ բաժակի հիմքի շառավիղը ($R$) հաստատուն է, հիմքի մակերեսը՝ $S = \\pi R^2$, նույնպես հաստատուն է ($k$):</p>
                 <p>Ստացվում է գծային կախվածություն՝ $$ V(H) = k \\cdot H $$</p>
                 <p>Սա նշանակում է, որ հեղուկի բարձրության յուրաքանչյուր 1 սմ փոփոխությունը համապատասխանում է ծավալի նույն քանակի փոփոխությանը, ինչը թույլ է տալիս օգտագործել հավասարաչափ սանդղակ:</p>`,
            ru: `<p><strong>Математика.</strong> Объем цилиндра $V = \\pi R^2 H$. Так как радиус $R$ постоянен, объем линейно зависит от высоты: $$ V \\sim H $$</p>
                 <p>Это свойство (линейность) позволяет наносить деления шкалы на равном расстоянии друг от друга, что невозможно для конических или сферических сосудов.</p>`,
            en: `<p><strong>Mathematics.</strong> The volume of a cylinder is $V = \\pi R^2 H$. Since the radius $R$ is constant, the volume is linearly proportional to the height: $$ V \\propto H $$</p>
                 <p>This linearity allows for a uniform scale on the measuring cup, where equal vertical increments represent equal volume increments.</p>`
        }
    },
    {
        id: "disposable", icon: "fa-coffee",
        title: { hy: "5. Մեկանգամյա Բաժակ", en: "5. Disposable Cup", ru: "5. Одноразовый Стакан" },
        desc: { hy: "Դասավորում (Stacking)", en: "Stacking", ru: "Складирование" },
        content: {
            hy: `<p><strong>Երկրաչափություն.</strong> Բաժակը հատած կոն է ($r_1 < r_2$):</p>
                 <p><strong>Դասավորում (Stacking).</strong> Երբ մի բաժակը դրվում է մյուսի մեջ, այն իջնում է մինչև կողմնային պատերը հպվեն: Իդեալական գլանների դեպքում ($r_1 = r_2$) դրանք կսահեին մինչև հատակ և կառաջացնեին վակուում, ինչը կդժվարացներ բաժանելը:</p>
                 <p>Հատած կոնի ծավալը՝ $$ V = \\frac{1}{3}\\pi h(R^2 + r^2 + Rr) $$</p>`,
            ru: `<p><strong>Геометрия.</strong> Форма усеченного конуса позволяет вкладывать стаканы друг в друга (штабелирование).</p>
                 <p>В отличие от цилиндров, конические стенки предотвращают заклинивание и образование вакуума между стаканами. Объем рассчитывается по формуле: $$ V = \\frac{1}{3}\\pi h(R^2 + r^2 + Rr) $$</p>`,
            en: `<p><strong>Geometry.</strong> The frustum shape allows for efficient stacking (nesting).</p>
                 <p>Unlike perfect cylinders, the tapered walls prevent vacuum lock and allow cups to stop at a precise height when stacked. Volume formula: $$ V = \\frac{1}{3}\\pi h(R^2 + r^2 + Rr) $$</p>`
        }
    },
    {
        id: "coins", icon: "fa-coins",
        title: { hy: "6. Մանրադրամներ", en: "6. Coins", ru: "6. Монеты" },
        desc: { hy: "Գլանային ստուգում", en: "Cylindrical Testing", ru: "Проверка Цилиндра" },
        content: {
            hy: `<p><strong>Գլանային Պարամետրեր.</strong> Ավտոմատները տարբերակում են մետաղադրամները՝ չափելով դրանց ֆիզիկական պարամետրերը, որոնք բնութագրում են գլանը:</p>
                 <ul>
                    <li><strong>Տրամագիծ ($2R$):</strong> Չափվում է օպտիկական սենսորներով:</li>
                    <li><strong>Հաստություն ($H$):</strong> Չափվում է անցքի չափսով:</li>
                    <li><strong>Զանգված ($m$):</strong> $m = \\rho V = \\rho \\cdot (\\pi R^2 H)$, որտեղ $\\rho$-ն մետաղի խտությունն է:</li>
                 </ul>`,
            ru: `<p><strong>Параметры Цилиндра.</strong> Торговые автоматы проверяют подлинность монет, измеряя:</p>
                 <ul>
                    <li><strong>Диаметр ($2R$) и Толщину ($H$):</strong> Геометрические размеры.</li>
                    <li><strong>Массу ($m$):</strong> Зависит от объема цилиндра и плотности сплава: $$ m = \\rho \\cdot \\pi R^2 H $$</li>
                 </ul>`,
            en: `<p><strong>Cylindrical Parameters.</strong> Vending machines validate coins by measuring:</p>
                 <ul>
                    <li><strong>Diameter ($2R$) & Thickness ($H$):</strong> Geometric constraints.</li>
                    <li><strong>Mass ($m$):</strong> Calculated from volume and density: $$ m = \\rho \\cdot \\pi R^2 H $$</li>
                 </ul>`
        }
    },
    {
        id: "lamp", icon: "fa-lightbulb",
        title: { hy: "7. Փողոցային Լամպ", en: "7. Street Lamp", ru: "7. Уличный Фонарь" },
        desc: { hy: "Լույսի ցրում", en: "Light Dispersion", ru: "Рассеивание Света" },
        content: {
            hy: `<p><strong>Գլանային Ոսպնյակ.</strong> Լամպի ապակին հաճախ ունենում է ուղղահայաց պրիզմաներ կամ գլանային մակերևույթ:</p>
                 <p>Սա թույլ է տալիս լույսը ցրել հորիզոնական ուղղությամբ (ճանապարհի երկայնքով)՝ չկորցնելով այն դեպի վեր կամ ներքև: Արդյունքում ստացվում է էլիպսաձև լուսավորված գոտի:</p>`,
            ru: `<p><strong>Цилиндрическая Линза.</strong> Стекло фонаря работает как линза, рассеивая свет преимущественно в горизонтальной плоскости.</p>
                 <p>Это позволяет освещать длинный участок дороги, а не просто круг под столбом.</p>`,
            en: `<p><strong>Cylindrical Lens.</strong> The glass cover acts as a cylindrical lens, dispersing light horizontally along the road path.</p>
                 <p>This creates an elliptical illumination pattern, maximizing efficiency for street lighting.</p>`
        }
    },
    {
        id: "nose", icon: "fa-plane",
        title: { hy: "8. Ինքնաթիռի Քիթ", en: "8. Airplane Nose", ru: "8. Нос Самолета" },
        desc: { hy: "Աերոդինամիկա", en: "Aerodynamics", ru: "Аэродинамика" },
        content: {
            hy: `<p><strong>Պտտական Պարաբոլոիդ.</strong> Ինքնաթիռի քիթը հաճախ ունի պարաբոլոիդի կամ էլիպսոիդի տեսք ($z = ax^2 + by^2$):</p>
                 <p>Այս ձևը ապահովում է օդի հոսքի սահուն շրջանցում (լամինար հոսք)՝ նվազագույնի հասցնելով ճակատային դիմադրությունը ($Drag$):</p>`,
            ru: `<p><strong>Параболоид Вращения.</strong> Форма носа описывается уравнением $$ z = c(x^2 + y^2) $$</p>
                 <p>Такая геометрия минимизирует аэродинамическое сопротивление на дозвуковых и сверхзвуковых скоростях.</p>`,
            en: `<p><strong>Paraboloid of Revolution.</strong> The nose shape often follows a parabolic curve $$ z = c(x^2 + y^2) $$</p>
                 <p>This geometry ensures laminar airflow and minimizes aerodynamic drag coefficient ($C_d$).</p>`
        }
    },
    {
        id: "lens", icon: "fa-eye",
        title: { hy: "9. Ոսպնյակ", en: "9. Lens", ru: "9. Линза" },
        desc: { hy: "Օպտիկա", en: "Optics", ru: "Оптика" },
        content: {
            hy: `<p><strong>Գնդային Սեգմենտներ.</strong> Ոսպնյակը երկրաչափորեն երկու գնդային սեգմենտների հատում է (ուռուցիկ ոսպնյակ):</p>
                 <p>Ոսպնյակի օպտիկական ուժը ($D$) կախված է այդ սեգմենտների շառավիղներից ($R_1, R_2$): $$ D = (n-1)(\\frac{1}{R_1} + \\frac{1}{R_2}) $$</p>`,
            ru: `<p><strong>Сферические Сегменты.</strong> Линза представляет собой пересечение двух шаровых сегментов.</p>
                 <p>Формула шлифовщика линз связывает радиусы кривизны ($R_1, R_2$) с фокусным расстоянием: $$ \\frac{1}{f} = (n-1)(\\frac{1}{R_1} + \\frac{1}{R_2}) $$</p>`,
            en: `<p><strong>Spherical Segments.</strong> A convex lens is geometrically the intersection of two spherical segments.</p>
                 <p>The Lens Maker's Equation relates the radii of curvature ($R_1, R_2$) to the focal length ($f$): $$ \\frac{1}{f} = (n-1)(\\frac{1}{R_1} + \\frac{1}{R_2}) $$</p>`
        }
    },
    {
        id: "silo", icon: "fa-warehouse",
        title: { hy: "10. Սիլոսային Հոր", en: "10. Silo", ru: "10. Силос" },
        desc: { hy: "Պահեստավորում", en: "Storage", ru: "Хранение" },
        content: {
            hy: `<p><strong>Բաղադրյալ Մարմին.</strong> Սիլոսը կազմված է գլանից (հիմնական ծավալ) և կոնից (հատակ):</p>
                 <p><strong>Ընդհանուր Ծավալ.</strong> $$ V_{total} = V_{cyl} + V_{cone} = \\pi R^2 H_{cyl} + \\frac{1}{3}\\pi R^2 H_{cone} $$</p>
                 <p>Կոնաձև հատակը ապահովում է հացահատիկի ինքնահոս բեռնաթափումը գրավիտացիայի ուժով:</p>`,
            ru: `<p><strong>Составное Тело.</strong> Силос состоит из цилиндра (хранение) и конуса (выгрузка).</p>
                 <p><strong>Общий Объем:</strong> $$ V = \\pi R^2 H_1 + \\frac{1}{3}\\pi R^2 H_2 $$</p>
                 <p>Угол конуса рассчитывается так, чтобы превышать угол трения зерна для свободного потока.</p>`,
            en: `<p><strong>Composite Solid.</strong> A silo combines a cylinder for maximum storage volume with a cone for discharge.</p>
                 <p><strong>Total Volume:</strong> $$ V = \\pi R^2 H_{cyl} + \\frac{1}{3}\\pi R^2 H_{cone} $$</p>
                 <p>The cone angle is designed to ensure mass flow of the granular material.</p>`
        }
    },
    {
        id: "bearing", icon: "fa-ring",
        title: { hy: "11. Առանցքակալ", en: "11. Ball Bearing", ru: "11. Подшипник" },
        desc: { hy: "Շփման նվազեցում", en: "Friction Reduction", ru: "Снижение Трения" },
        content: {
            hy: `<p><strong>Կետային Հպում.</strong> Իդեալական գունդը հարթությանը հպվում է միայն մեկ կետում:</p>
                 <p>Սա նշանակում է, որ շփման մակերեսը ձգտում է զրոյի, ինչը կտրուկ նվազեցնում է դիմադրությունը: Սահքի շփումը փոխարինվում է գլորման շփումով ($F_{roll} \\ll F_{slide}$):</p>`,
            ru: `<p><strong>Точечный Контакт.</strong> Сфера касается поверхности в одной точке (теоретически).</p>
                 <p>Это минимизирует площадь контакта и заменяет трение скольжения на трение качения, которое значительно меньше.</p>`,
            en: `<p><strong>Point Contact.</strong> A perfect sphere contacts a plane at a single point.</p>
                 <p>This minimizes contact area and substitutes sliding friction with rolling friction ($F_{roll} \\ll F_{slide}$), enabling smooth rotation.</p>`
        }
    },
    {
        id: "cooling", icon: "fa-industry",
        title: { hy: "12. Հովացման Աշտարակ", en: "12. Cooling Tower", ru: "12. Градирня" },
        desc: { hy: "Հիպերբոլոիդ", en: "Hyperboloid", ru: "Гиперболоид" },
        content: {
            hy: `<p><strong>Միախոռոչ Հիպերբոլոիդ.</strong> Նկարագրվում է հետևյալ հավասարմամբ՝ $$ \\frac{x^2+y^2}{a^2} - \\frac{z^2}{c^2} = 1 $$</p>
                 <p>Այս ձևը ստացվում է ուղիղ գծերի (արմատուրաների) պտույտով, ինչը հեշտացնում է կառուցումը: Նեղացող վզիկը արագացնում է օդի հոսքը (Վենտուրիի էֆեկտ):</p>`,
            ru: `<p><strong>Однополостный Гиперболоид.</strong> Уравнение поверхности: $$ \\frac{x^2+y^2}{a^2} - \\frac{z^2}{c^2} = 1 $$</p>
                 <p>Линейчатая поверхность: башню можно построить из прямых балок. Сужение создает тягу для охлаждения.</p>`,
            en: `<p><strong>One-sheeted Hyperboloid.</strong> Described by the equation: $$ \\frac{x^2+y^2}{a^2} - \\frac{z^2}{c^2} = 1 $$</p>
                 <p>It is a ruled surface, meaning it can be constructed with straight beams. The narrowing neck accelerates updraft (Venturi effect).</p>`
        }
    },
    {
        id: "dish", icon: "fa-satellite-dish",
        title: { hy: "13. Արբանյակային Ալեհավաք", en: "13. Satellite Dish", ru: "13. Спутниковая Тарелка" },
        desc: { hy: "Ազդանշանի կենտրոնացում", en: "Signal Focusing", ru: "Фокусировка Сигнала" },
        content: {
            hy: `<p><strong>Պարաբոլոիդի Օպտիկական Հատկությունը.</strong> Պարաբոլոիդի առանցքին զուգահեռ ընկնող բոլոր ճառագայթները անդրադառնալուց հետո անցնում են միևնույն կետով՝ ֆոկուսով ($F$):</p>
                 <p>Ֆոկուսային հեռավորությունը՝ $$ f = \\frac{R^2}{4h} $$</p>`,
            ru: `<p><strong>Свойство Параболоида.</strong> Все лучи, параллельные оси, собираются в фокусе.</p>
                 <p>Это позволяет усиливать слабый спутниковый сигнал в тысячи раз, концентрируя его на приемнике.</p>`,
            en: `<p><strong>Parabolic Reflection.</strong> All incoming rays parallel to the axis of symmetry are reflected to a single focal point ($F$).</p>
                 <p>Focal length formula: $$ f = \\frac{D^2}{16d} $$ where $D$ is diameter and $d$ is depth.</p>`
        }
    },
    {
        id: "piston", icon: "fa-car",
        title: { hy: "14. Մխոց (Շարժիչ)", en: "14. Piston", ru: "14. Поршень" },
        desc: { hy: "Հերմետիկություն", en: "Sealing", ru: "Герметичность" },
        content: {
            hy: `<p><strong>Իդեալական Գլան.</strong> Մխոցի և գլանի արանքը (բացակը) պետք է լինի միկրոմետրերի կարգի:</p>
                 <p>Գլանաձև մակերևույթը թույլ է տալիս օգտագործել օղակներ (piston rings), որոնք հավասարաչափ ճնշում են գործադրում պատերին՝ ապահովելով կոմպրեսիա:</p>`,
            ru: `<p><strong>Герметичность.</strong> Цилиндрическая форма позволяет использовать компрессионные кольца.</p>
                 <p>Они создают равномерное давление на стенки ($P = const$) по всей окружности, предотвращая прорыв газов.</p>`,
            en: `<p><strong>Sealing.</strong> The cylindrical geometry allows for the use of piston rings which exert uniform radial pressure.</p>
                 <p>This ensures a perfect seal essential for the thermodynamic cycle of the engine.</p>`
        }
    },
    {
        id: "fiber", icon: "fa-network-wired",
        title: { hy: "15. Օպտիկական Մանրաթել", en: "15. Optical Fiber", ru: "15. Оптоволокно" },
        desc: { hy: "Լրիվ անդրադարձում", en: "Total Reflection", ru: "Полное Отражение" },
        content: {
            hy: `<p><strong>Լրիվ Ներքին Անդրադարձում.</strong> Լույսը տարածվում է գլանաձև միջուկով՝ անդրադառնալով պատերից:</p>
                 <p>Անկման անկյունը ($\theta$) պետք է մեծ լինի կրիտիկական անկյունից՝ $$ \\theta > \\arcsin(\\frac{n_2}{n_1}) $$</p>`,
            ru: `<p><strong>Полное Внутреннее Отражение.</strong> Свет удерживается внутри цилиндрического волокна.</p>
                 <p>Условие: показатель преломления сердцевины ($n_1$) должен быть больше оболочки ($n_2$).</p>`,
            en: `<p><strong>Total Internal Reflection.</strong> Light travels through the cylindrical core by reflecting off the boundary.</p>
                 <p>Condition: The angle of incidence must exceed the critical angle $$ \\theta_c = \\arcsin(\\frac{n_{clad}}{n_{core}}) $$</p>`
        }
    },
    {
        id: "speaker", icon: "fa-volume-up",
        title: { hy: "16. Բարձրախոս", en: "16. Speaker", ru: "16. Динамик" },
        desc: { hy: "Ձայնի ուղղորդում", en: "Sound Direction", ru: "Направление Звука" },
        content: {
            hy: `<p><strong>Կոնաձև Դիֆուզոր.</strong> Կոնի կողմնային մակերեսը՝ $S = \\pi R l$:</p>
                 <p>Կոնաձև տեսքը թաղանթին տալիս է մեխանիկական կոշտություն, ինչը թույլ է տալիս նրան տատանվել որպես մեկ ամբողջություն (piston motion)՝ առանց դեֆորմացվելու:</p>`,
            ru: `<p><strong>Жесткость Конуса.</strong> Коническая форма предотвращает изгиб диффузора при быстрых колебаниях.</p>
                 <p>Это обеспечивает чистоту звука и эффективную передачу энергии от катушки к воздуху.</p>`,
            en: `<p><strong>Conical Diaphragm.</strong> The cone shape provides structural rigidity, allowing the diaphragm to move as a rigid piston.</p>
                 <p>This prevents modal breakup and distortion at high volumes.</p>`
        }
    },
    {
        id: "centrifuge", icon: "fa-dna",
        title: { hy: "17. Ցենտրիֆուգ", en: "17. Centrifuge", ru: "17. Центрифуга" },
        desc: { hy: "Նյութերի տարանջատում", en: "Separation", ru: "Разделение" },
        content: {
            hy: `<p><strong>Կենտրոնախույս Ուժ.</strong> Պտտվող գլանում մասնիկների վրա ազդող ուժը կախված է շառավղից ($r$) և անկյունային արագությունից ($\\omega$):</p>
                 <p>$$ F = m \\omega^2 r $$</p>
                 <p>Ավելի ծանր մասնիկները հավաքվում են գլանի պատերի մոտ (մեծ $r$), իսկ թեթևները՝ կենտրոնում:</p>`,
            ru: `<p><strong>Центробежная Сила.</strong> $$ F = m \\omega^2 r $$</p>
                 <p>Вращающийся цилиндр создает искусственную гравитацию, в тысячи раз превышающую земную, разделяя компоненты крови или изотопы.</p>`,
            en: `<p><strong>Centrifugal Force.</strong> Inside the rotating cylinder, particles experience a force $$ F = m \\omega^2 r $$</p>
                 <p>Denser particles migrate to the outer radius, effectively separating substances based on density.</p>`
        }
    },
    {
        id: "funnel", icon: "fa-filter",
        title: { hy: "18. Ձագար", en: "18. Funnel", ru: "18. Воронка" },
        desc: { hy: "Հոսքի կառավարում", en: "Flow Control", ru: "Управление Потоком" },
        content: {
            hy: `<p><strong>Հոսքի Արագացում.</strong> Ըստ անընդհատության հավասարման ($A_1 v_1 = A_2 v_2$), երբ կոնը նեղանում է, հեղուկի արագությունը մեծանում է:</p>
                 <p>Կոնաձև մակերևույթը սահուն կերպով ուղղորդում է հոսքը դեպի կենտրոն:</p>`,
            ru: `<p><strong>Уравнение Неразрывности.</strong> Сужение конуса увеличивает скорость потока: $$ v_{out} = v_{in} \\cdot (\\frac{R_{in}}{R_{out}})^2 $$</p>
                 <p>Гладкие стенки конуса минимизируют турбулентность.</p>`,
            en: `<p><strong>Fluid Dynamics.</strong> According to the continuity equation, as the cross-sectional area decreases in the cone, velocity increases.</p>
                 <p>The conical slope directs fluid to the center with minimal splashing.</p>`
        }
    },
    {
        id: "screw", icon: "fa-water",
        title: { hy: "27. Արքիմեդի Պտուտակ", en: "27. Archimedes Screw", ru: "27. Винт Архимеда" },
        desc: { hy: "Ջրի բարձրացում", en: "Water Lifting", ru: "Подъем Воды" },
        content: {
            hy: `<p><strong>Հելիկոիդ.</strong> Սա պտուտակաձև մակերևույթ է (Helicoid surface):</p>
                 <p>Պտտվելիս այն ստեղծում է փակ խոռոչներ ջրի համար, որոնք բարձրանում են վերև: Ջրի ծավալը մեկ պտույտում՝ $V \\approx \\pi (R^2 - r^2) \\cdot pitch$:</p>`,
            ru: `<p><strong>Винтовая Поверхность.</strong> Геликоид внутри трубы.</p>
                 <p>При вращении винта вода оказывается "запертой" в нижнем витке и механически поднимается вверх по спирали.</p>`,
            en: `<p><strong>Helicoid.</strong> A screw-shaped surface inside a cylinder.</p>
                 <p>Rotation traps pockets of water and translates them axially upwards. It's a positive displacement pump mechanism.</p>`
        }
    },
    {
        id: "pottery", icon: "fa-mug-hot",
        title: { hy: "28. Կավագործություն", en: "28. Pottery", ru: "28. Гончарство" },
        desc: { hy: "Պտտական մարմիններ", en: "Solids of Revolution", ru: "Тела Вращения" },
        content: {
            hy: `<p><strong>Պտտական Մարմիններ.</strong> Բրուտագործական անիվը պտտվում է հաստատուն արագությամբ:</p>
                 <p>Կավի ցանկացած կետ գծում է շրջանագիծ: Արդյունքում ստացված մարմնի ծավալը կարելի է հաշվել ինտեգրալով՝ $$ V = \\pi \\int f(x)^2 dx $$</p>`,
            ru: `<p><strong>Тела Вращения.</strong> Процесс создания керамики — это физическое воплощение математического вращения кривой вокруг оси.</p>
                 <p>Сила рук гончара формирует профиль $f(x)$, а вращение круга создает объем.</p>`,
            en: `<p><strong>Solids of Revolution.</strong> Pottery is the practical application of generating solids of revolution.</p>
                 <p>The potter shapes a profile curve $y=f(x)$, and the wheel's rotation creates a symmetric body with circular cross-sections.</p>`
        }
    },
    {
        id: "turbine", icon: "fa-fan",
        title: { hy: "29. Տուրբին", en: "29. Turbine", ru: "29. Турбина" },
        desc: { hy: "Էներգիայի փոխակերպում", en: "Energy Conversion", ru: "Преобразование Энергии" },
        content: {
            hy: `<p><strong>Աերոդինամիկա.</strong> Տուրբինի թիակները պտտվում են հեղուկի կամ գազի հոսքի ազդեցությամբ:</p>
                 <p>Պտտող մոմենտը՝ $\\tau = r \\times F$: Թիակների կորությունը (airfoil shape) օպտիմալացված է առավելագույն էներգիա ստանալու համար (Բեռնուլիի օրենք):</p>`,
            ru: `<p><strong>Вращающий Момент.</strong> Лопатки турбины преобразуют кинетическую энергию потока во вращение ротора.</p>
                 <p>Форма лопаток рассчитывается методами гидродинамики для максимизации КПД.</p>`,
            en: `<p><strong>Torque Generation.</strong> Fluid flow exerts force on the angled blades, creating torque $\\tau = r \\times F$.</p>
                 <p>The rotational energy is then converted into electricity by a generator attached to the shaft.</p>`
        }
    },
    {
        id: "capsule", icon: "fa-rocket",
        title: { hy: "30. Տիեզերանավ", en: "30. Space Capsule", ru: "30. Космическая Капсула" },
        desc: { hy: "Վայրէջք", en: "Re-entry", ru: "Вход в Атмосферу" },
        content: {
            hy: `<p><strong>Բութ Մարմին (Blunt Body).</strong> Տիեզերանավի հատակը գնդային սեգմենտ է ($R_{large}$):</p>
                 <p>Այս ձևը ստեղծում է հարվածային ալիք (shock wave), որը հեռու է պահում պլազման մակերևույթից՝ պաշտպանելով այրվելուց: Կոնաձև մասը ապահովում է աերոդինամիկ կայունություն:</p>`,
            ru: `<p><strong>Тупое Тело.</strong> Сферическое дно создает отошедшую ударную волну.</p>
                 <p>Это позволяет рассеивать 90% тепла в атмосферу, а не передавать его корпусу корабля. Коническая форма стабилизирует спуск.</p>`,
            en: `<p><strong>Blunt Body Theory.</strong> The spherical base creates a detached shock wave.</p>
                 <p>This dissipates most of the kinetic energy as heat into the air, protecting the capsule. The frustum shape ensures aerodynamic stability during hypersonic re-entry.</p>`
        }
    }
];

function renderApps() {
    const grid = document.getElementById('appGrid');
    if (!grid) return;
    grid.innerHTML = '';
    appData.forEach(app => {
        const title = app.title[currentLang] || app.title['en'];
        const desc = app.desc[currentLang] || app.desc['en'];
        grid.innerHTML += `
            <div class="app-card" onclick="openAppDetail('${app.id}')">
                <div class="app-card-img"><i class="fas ${app.icon}"></i></div>
                <div class="app-card-content"><h3>${title}</h3><p>${desc}</p></div>
            </div>
        `;
    });
}

window.openAppDetail = function (id) {
    const modal = document.getElementById('appModal');
    const body = document.getElementById('modalBody');
    const app = appData.find(a => a.id === id);
    const title = app.title[currentLang] || app.title['en'];
    const content = app.content[currentLang] || app.content['en'];
    body.innerHTML = `<h2>${title}</h2>${content}`;
    modal.style.display = 'flex';
    if (window.MathJax) MathJax.typesetPromise([body]);
};

window.closeAppDetail = function () {
    document.getElementById('appModal').style.display = 'none';
};

// --- Calculator Logic ---
// --- Calculator Logic ---
// Helper function to format with pi symbol and numerical value
function formatWithPi(symbolicExpr, numericalValue) {
    return `$$${symbolicExpr}$$<br><small style="opacity:0.75;">(≈ ${numericalValue.toFixed(4)})</small>`;
}

const calcShapes = {
    cylinder: {
        inputs: ['R', 'H'],
        calc: (R, H) => {
            const Sk_coef = 2 * R * H;
            const Sl_coef = 2 * R * (R + H);
            const V_coef = R ** 2 * H;

            return formatWithPi(`S_k = 2\\pi RH = ${Sk_coef.toFixed(2)}\\pi`, Sk_coef * Math.PI) + '<br>' +
                formatWithPi(`S_l = 2\\pi R(R + H) = ${Sl_coef.toFixed(2)}\\pi`, Sl_coef * Math.PI) + '<br>' +
                formatWithPi(`V = \\pi R^2H = ${V_coef.toFixed(2)}\\pi`, V_coef * Math.PI);
        }
    },
    cone: {
        inputs: ['R', 'H'],
        calc: (R, H) => {
            const l = Math.sqrt(R ** 2 + H ** 2);
            const Sk_coef = R * l;
            const Sl_coef = R * (R + l);
            const V_coef = (R ** 2 * H) / 3;

            return formatWithPi(`S_k = \\pi Rl = ${Sk_coef.toFixed(2)}\\pi`, Sk_coef * Math.PI) + '<br>' +
                formatWithPi(`S_l = \\pi R(R + l) = ${Sl_coef.toFixed(2)}\\pi`, Sl_coef * Math.PI) + '<br>' +
                formatWithPi(`V = \\frac{1}{3}\\pi R^2H = ${V_coef.toFixed(2)}\\pi`, V_coef * Math.PI);
        }
    },
    frustum: {
        inputs: ['R', 'r', 'H'],
        calc: (R, r, H) => {
            const l = Math.sqrt((R - r) ** 2 + H ** 2);
            const Sk_coef = (R + r) * l;
            const Sl_coef = (R + r) * l + R ** 2 + r ** 2;
            const V_coef = (H * (R ** 2 + r ** 2 + R * r)) / 3;

            return formatWithPi(`S_k = \\pi(R + r)l = ${Sk_coef.toFixed(2)}\\pi`, Sk_coef * Math.PI) + '<br>' +
                formatWithPi(`S_l = \\pi[(R+r)l + R^2 + r^2] = ${Sl_coef.toFixed(2)}\\pi`, Sl_coef * Math.PI) + '<br>' +
                formatWithPi(`V = \\frac{1}{3}\\pi H(R^2 + r^2 + Rr) = ${V_coef.toFixed(2)}\\pi`, V_coef * Math.PI);
        }
    },
    sphere: {
        inputs: ['R'],
        calc: (R) => {
            const S_coef = 4 * R ** 2;
            const V_coef = (4 * R ** 3) / 3;

            return formatWithPi(`S = 4\\pi R^2 = ${S_coef.toFixed(2)}\\pi`, S_coef * Math.PI) + '<br>' +
                formatWithPi(`V = \\frac{4}{3}\\pi R^3 = ${V_coef.toFixed(2)}\\pi`, V_coef * Math.PI);
        }
    },
    segment: {
        inputs: ['R', 'h'],
        calc: (R, h) => {
            const Sk_coef = 2 * R * h;
            const V_coef = h ** 2 * (R - h / 3);

            return formatWithPi(`S_k = 2\\pi Rh = ${Sk_coef.toFixed(2)}\\pi`, Sk_coef * Math.PI) + '<br>' +
                formatWithPi(`V = \\pi h^2(R - \\frac{h}{3}) = ${V_coef.toFixed(2)}\\pi`, V_coef * Math.PI);
        }
    },
    sector: {
        inputs: ['R', 'h'],
        calc: (R, h) => {
            const V_coef = (2 * R ** 2 * h) / 3;

            return formatWithPi(`V = \\frac{2}{3}\\pi R^2h = ${V_coef.toFixed(2)}\\pi`, V_coef * Math.PI);
        }
    },
    layer: {
        inputs: ['r1', 'r2', 'h'],
        calc: (r1, r2, h) => {
            const Sk_coef = 2 * Math.sqrt((r1 ** 2 + r2 ** 2) / 2) * h;
            const V_coef = (h * (3 * r1 ** 2 + 3 * r2 ** 2 + h ** 2)) / 6;

            return formatWithPi(`S_k \\approx ${Sk_coef.toFixed(2)}\\pi`, Sk_coef * Math.PI) + '<br>' +
                formatWithPi(`V = \\frac{1}{6}\\pi h(3r_1^2 + 3r_2^2 + h^2) = ${V_coef.toFixed(2)}\\pi`, V_coef * Math.PI);
        }
    },
    zone: {
        inputs: ['R', 'H'],
        calc: (R, H) => {
            const S_coef = 2 * R * H;

            return formatWithPi(`S_k = 2\\pi RH = ${S_coef.toFixed(2)}\\pi`, S_coef * Math.PI);
        }
    }
};

// Helper function to format with pi symbol and numerical value
const varDescriptions = {
    hy: {
        R: 'շառավիղ',
        H: 'բարձրություն',
        r: 'փոքր շառավիղ',
        r1: 'վերին շառավիղ',
        r2: 'ստորին շառավիղ',
        h: 'բարձրություն'
    },
    ru: {
        R: 'радиус',
        H: 'высота',
        r: 'малый радиус',
        r1: 'верхний радиус',
        r2: 'нижний радиус',
        h: 'высота'
    },
    en: {
        R: 'radius',
        H: 'height',
        r: 'small radius',
        r1: 'top radius',
        r2: 'bottom radius',
        h: 'height'
    }
};

// Helper function to parse mathematical expressions (supports π, sqrt, trig, log, etc.)
function parseExpression(expr) {
    if (!expr || expr.trim() === '') return NaN;
    try {
        let processedExpr = expr;

        // Replace π with Math.PI
        processedExpr = processedExpr.replace(/π/g, 'Math.PI').replace(/pi/gi, 'Math.PI');

        // Replace e (Euler's number) - be careful not to replace 'e' in function names
        processedExpr = processedExpr.replace(/\be\b/g, 'Math.E');

        // Replace √ with Math.sqrt
        processedExpr = processedExpr.replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)');
        processedExpr = processedExpr.replace(/√([0-9.]+)/g, 'Math.sqrt($1)');

        // Replace trigonometric functions
        processedExpr = processedExpr.replace(/sin\(/g, 'Math.sin(');
        processedExpr = processedExpr.replace(/cos\(/g, 'Math.cos(');
        processedExpr = processedExpr.replace(/tan\(/g, 'Math.tan(');
        processedExpr = processedExpr.replace(/asin\(/g, 'Math.asin(');
        processedExpr = processedExpr.replace(/acos\(/g, 'Math.acos(');
        processedExpr = processedExpr.replace(/atan\(/g, 'Math.atan(');

        // Replace logarithms
        processedExpr = processedExpr.replace(/ln\(/g, 'Math.log(');
        processedExpr = processedExpr.replace(/log\(/g, 'Math.log10(');

        // Replace absolute value |x| with Math.abs(x)
        processedExpr = processedExpr.replace(/\|([^|]+)\|/g, 'Math.abs($1)');

        // Replace power notation: x² → x**2, x³ → x**3
        processedExpr = processedExpr.replace(/([0-9a-zA-Z.)])\s*²/g, '$1**2');
        processedExpr = processedExpr.replace(/([0-9a-zA-Z.)])\s*³/g, '$1**3');

        // Replace factorial (simple implementation for small numbers)
        processedExpr = processedExpr.replace(/(\d+)!/g, (match, num) => {
            const n = parseInt(num);
            if (n > 170) return 'Infinity'; // Factorial overflow
            let result = 1;
            for (let i = 2; i <= n; i++) result *= i;
            return result;
        });

        // Safely evaluate
        const result = Function('"use strict"; return (' + processedExpr + ')')();
        return parseFloat(result);
    } catch (e) {
        console.error('Parse error:', e);
        return parseFloat(expr); // fallback to regular parsing
    }
}

window.updateCalcInputs = function () {
    const type = document.getElementById('shapeSelect').value;
    const container = document.getElementById('calcInputs');
    container.innerHTML = '';
    if (calcShapes[type]) {
        calcShapes[type].inputs.forEach((l, i) => {
            const desc = varDescriptions[currentLang][l] ? ` (${varDescriptions[currentLang][l]})` : '';
            container.innerHTML += `<label>${l}${desc}:</label><input type="text" inputmode="decimal" id="inp_${i}" placeholder="օր. 5, π, √2">`;
        });
    }
    document.getElementById('calcResult').innerHTML = '';
};

window.calculate = function () {
    const type = document.getElementById('shapeSelect').value;
    const inputs = calcShapes[type].inputs.map((_, i) => {
        const val = document.getElementById(`inp_${i}`).value;
        return parseExpression(val);
    });
    if (inputs.some(isNaN)) {
        document.getElementById('calcResult').innerHTML = '<p style="color: #ff5252;">⚠ Խնդրում ենք մուտքագրել վավեր թվեր</p>';
        return;
    }
    const result = calcShapes[type].calc(...inputs);
    document.getElementById('calcResult').innerHTML = result;
    // Render MathJax
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([document.getElementById('calcResult')]).catch((err) => console.error('MathJax error:', err));
    }
};

// --- 3D Logic ---
let scene, camera, renderer, currentMesh, controls, clippingPlane;
function init3D() {
    const container = document.getElementById('canvas-container');
    if (!container) return;
    scene = new THREE.Scene();
    // Set camera with temporary aspect; we'll update it after measuring container
    // Use a lower minimum so very small mobile viewports don't force incorrect aspect
    const cw = Math.max(240, container.clientWidth || window.innerWidth);
    const ch = Math.max(240, container.clientHeight || (window.innerHeight - 140));
    camera = new THREE.PerspectiveCamera(45, cw / ch, 0.1, 1000);
    camera.position.set(8, 8, 12);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    // Size renderer to container dimensions so it fits on mobile
    renderer.setSize(cw, ch);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.localClippingEnabled = true;
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    scene.add(new THREE.AmbientLight(0x404040, 1.5));
    const dl = new THREE.DirectionalLight(0xffffff, 1);
    dl.position.set(10, 20, 10);
    dl.castShadow = true;
    scene.add(dl);
    // Set grid color based on theme
    let gridColor, gridColor2;
    if (document.documentElement.getAttribute('data-theme') === 'light') {
        gridColor = 0x111111; // black
        gridColor2 = 0x333333;
    } else {
        gridColor = 0x888888; // gray
        gridColor2 = 0xcccccc;
    }
    scene.add(new THREE.GridHelper(20, 20, gridColor, gridColor2));
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    // Removed clipping plane to allow full Y movement
    clippingPlane = null;
    window.changeModel();
    animate();
}

// Resize handler to keep renderer/camera in sync with container size
function handleResize() {
    const container = document.getElementById('canvas-container');
    if (!container || !renderer || !camera) return;
    const w = Math.max(240, container.clientWidth);
    const h = Math.max(240, container.clientHeight || Math.max(window.innerHeight - 140, 300));
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}

window.addEventListener('resize', () => {
    // small debounce
    clearTimeout(window._resizeTimeout);
    window._resizeTimeout = setTimeout(() => {
        handleResize();
    }, 150);
});

function createMesh(geo, col) {
    // Properly dispose of existing mesh/group
    if (currentMesh) {
        scene.remove(currentMesh);
        if (currentMesh.type === 'Group') {
            // Dispose all geometries and materials in group
            currentMesh.traverse((child) => {
                if (child.isMesh) {
                    if (child.geometry) child.geometry.dispose();
                    if (child.material) child.material.dispose();
                }
            });
        } else {
            // Single mesh disposal
            if (currentMesh.geometry) currentMesh.geometry.dispose();
            if (currentMesh.material) currentMesh.material.dispose();
        }
    }
    const mat = new THREE.MeshPhongMaterial({
        color: col, side: THREE.DoubleSide, clippingPlanes: clippingPlane ? [clippingPlane] : [], clipShadows: true, shininess: 80
    });
    currentMesh = new THREE.Mesh(geo, mat);
    currentMesh.castShadow = true;
    currentMesh.receiveShadow = true;
    window.updatePosition();
    scene.add(currentMesh);
}

window.changeModel = function () {
    const type = document.getElementById('modelType').value;
    const col = document.getElementById('meshColor').value;
    const p = document.getElementById('dynamicParams');
    p.innerHTML = '';
    let geo;
    if (type === 'cylinder') {
        geo = new THREE.CylinderGeometry(2, 2, 4, 64);
        addSlider(p, 'R', 0.5, 5, 2, v => updateGeo('cyl', v, null));
        addSlider(p, 'H', 1, 10, 4, v => updateGeo('cyl', null, v));
    } else if (type === 'cone') {
        geo = new THREE.ConeGeometry(2, 4, 64);
        addSlider(p, 'R', 0.5, 5, 2, v => updateGeo('cone', v, null));
        addSlider(p, 'H', 1, 10, 4, v => updateGeo('cone', null, v));
    } else if (type === 'frustum') {
        geo = new THREE.CylinderGeometry(2, 4, 4, 64);
        addSlider(p, 'r_top', 0.1, 5, 2, v => updateGeo('frust', v, null, null));
        addSlider(p, 'r_bot', 0.1, 5, 4, v => updateGeo('frust', null, null, v));
        addSlider(p, 'H', 1, 10, 4, v => updateGeo('frust', null, v, null));
    } else if (type === 'sphere') {
        geo = new THREE.SphereGeometry(2, 64, 64);
        addSlider(p, 'R', 0.5, 5, 2, v => updateGeo('sph', v));
    } else if (type === 'segment') {
        // Spherical segment: partial sphere (cut by a plane)
        geo = new THREE.SphereGeometry(3, 64, 64, 0, Math.PI * 2, 0, Math.PI * 0.5);
        addSlider(p, 'R', 0.5, 5, 3, v => updateGeo('segment', v, null));
        addSlider(p, 'h', 0.1, 3, 1.5, v => updateGeo('segment', null, v));
    } else if (type === 'sector') {
        // Spherical sector: segment + cone from center - create group
        const R = 3, h = 1.5;
        const thetaLen = Math.PI * 0.5;
        const segGeo = new THREE.SphereGeometry(R, 64, 64, 0, Math.PI * 2, 0, thetaLen);
        const baseRadius = R * Math.sin(thetaLen);
        const coneHeight = R * Math.cos(thetaLen);
        const coneGeo = new THREE.ConeGeometry(baseRadius, R - coneHeight, 64);
        const group = new THREE.Group();
        const segMat = new THREE.MeshPhongMaterial({ color: col, side: THREE.DoubleSide, shininess: 80, wireframe: window._wireframeState || false });
        const coneMat = new THREE.MeshPhongMaterial({ color: col, side: THREE.DoubleSide, shininess: 80, wireframe: window._wireframeState || false });
        const segMesh = new THREE.Mesh(segGeo, segMat);
        const coneMesh = new THREE.Mesh(coneGeo, coneMat);
        coneMesh.rotation.x = Math.PI; // Point upward
        coneMesh.position.y = -(R - coneHeight) / 2; // Position so apex at origin, base at segment base
        group.add(coneMesh);
        group.add(segMesh);
        // For sector we use a group instead of single geometry
        if (currentMesh) {
            scene.remove(currentMesh);
            if (currentMesh.type === 'Group') {
                currentMesh.traverse((child) => {
                    if (child.isMesh) {
                        if (child.geometry) child.geometry.dispose();
                        if (child.material) child.material.dispose();
                    }
                });
            }
        }
        currentMesh = group;
        currentMesh.castShadow = true;
        scene.add(currentMesh);
        window.updatePosition();
        addSlider(p, 'R', 0.5, 5, 3, v => updateGeo('sector', v, null));
        addSlider(p, 'h', 0.1, 3, 1.5, v => updateGeo('sector', null, v));
        geo = null; // Skip normal mesh creation
    } else if (type === 'zone') {
        // Spherical zone: band between two planes
        geo = new THREE.SphereGeometry(3, 64, 64, 0, Math.PI * 2, Math.PI * 0.35, Math.PI * 0.3);
        addSlider(p, 'R', 0.5, 5, 3, v => updateGeo('zone', v, null));
        addSlider(p, 'H', 0.1, 2, 0.9, v => updateGeo('zone', null, v));
    } else if (type === 'layer') {
        // Spherical layer: band with top and bottom circles
        const R = 3, r1 = 2.5, r2 = 2.8, h = 2.4;
        const thetaStart = Math.PI * 0.3;
        const thetaLen = Math.PI * 0.4;
        const bandGeo = new THREE.SphereGeometry(R, 64, 64, 0, Math.PI * 2, thetaStart, thetaLen);
        const group = new THREE.Group();
        const bandMat = new THREE.MeshPhongMaterial({ color: col, side: THREE.DoubleSide, shininess: 80, wireframe: window._wireframeState || false });
        const bandMesh = new THREE.Mesh(bandGeo, bandMat);
        // Calculate circle positions based on sphere geometry
        const yTop = R * Math.cos(thetaStart);
        const yBottom = R * Math.cos(thetaStart + thetaLen);
        const rTop = R * Math.sin(thetaStart);
        const rBottom = R * Math.sin(thetaStart + thetaLen);
        const circleGeo1 = new THREE.CircleGeometry(rTop, 64);
        const circleGeo2 = new THREE.CircleGeometry(rBottom, 64);
        const circleMat = new THREE.MeshPhongMaterial({ color: col, side: THREE.DoubleSide, wireframe: window._wireframeState || false });
        const circle1 = new THREE.Mesh(circleGeo1, circleMat);
        const circle2 = new THREE.Mesh(circleGeo2, circleMat);
        circle1.rotation.x = -Math.PI / 2;
        circle1.position.y = yTop;
        circle2.rotation.x = -Math.PI / 2;
        circle2.position.y = yBottom;
        group.add(bandMesh);
        group.add(circle1);
        group.add(circle2);
        if (currentMesh) {
            scene.remove(currentMesh);
            if (currentMesh.type === 'Group') {
                currentMesh.traverse((child) => {
                    if (child.isMesh) {
                        if (child.geometry) child.geometry.dispose();
                        if (child.material) child.material.dispose();
                    }
                });
            }
        }
        currentMesh = group;
        currentMesh.castShadow = true;
        scene.add(currentMesh);
        window.updatePosition();
        addSlider(p, 'r1', 0.5, 5, 2.5, v => updateGeo('layer', v, null, null));
        addSlider(p, 'r2', 0.5, 5, 2.8, v => updateGeo('layer', null, v, null));
        addSlider(p, 'h', 0.1, 3, 2.4, v => updateGeo('layer', null, null, v));
        geo = null; // Skip normal mesh creation
    }
    // Add X, Y, Z position controls
    const posDiv = document.createElement('div');
    posDiv.style.marginTop = '18px';
    posDiv.innerHTML = '<label style="font-weight:bold;">Տեղաշարժ (Move):</label>';
    addSlider(posDiv, 'X', -5, 5, 0, v => updatePositionInput('x', v));
    addSlider(posDiv, 'Y', -5, 5, 0, v => updatePositionInput('y', v));
    addSlider(posDiv, 'Z', -5, 5, 0, v => updatePositionInput('z', v));
    p.appendChild(posDiv);
    // Info box for computed properties
    let infoBox = document.getElementById('modelInfoBox');
    if (!infoBox) {
        infoBox = document.createElement('div');
        infoBox.id = 'modelInfoBox';
        infoBox.style.marginTop = '18px';
        infoBox.style.background = 'rgba(255,255,255,0.08)';
        infoBox.style.padding = '12px 18px';
        infoBox.style.borderRadius = '10px';
        infoBox.style.fontSize = '1.05em';
        infoBox.style.lineHeight = '1.7';
        p.parentNode.insertBefore(infoBox, p.nextSibling);
    }
    // Store infoBox for later updates
    window._modelInfoBox = infoBox;
    if (geo) createMesh(geo, col); // Only create mesh if geo is not null
    // Set initial position
    updatePositionInput('x', 0);
    updatePositionInput('y', 0);
    updatePositionInput('z', 0);
    // Show initial info
    updateModelInfoBox();
};

// Update info box with computed properties
function updateModelInfoBox() {
    if (!window._modelInfoBox) return;
    const type = document.getElementById('modelType').value;
    const t = (translations[currentLang] || translations['en']);
    let html = '';
    if (type === 'cylinder') {
        const R = p1, H = p2;
        const S_side = 2 * Math.PI * R * H;
        const S_total = 2 * Math.PI * R * (H + R);
        const V = Math.PI * R * R * H;
        html = `<b>${t.info_side_area}</b> ${S_side.toFixed(3)}<br><b>${t.info_total_area}</b> ${S_total.toFixed(3)}<br><b>${t.info_volume}</b> ${V.toFixed(3)}`;
    } else if (type === 'cone') {
        const R = p1, H = p2;
        const l = Math.sqrt(R * R + H * H);
        const S_side = Math.PI * R * l;
        const S_total = Math.PI * R * (l + R);
        const V = (1 / 3) * Math.PI * R * R * H;
        html = `<b>${t.info_slant}</b> ${l.toFixed(3)}<br><b>${t.info_side_area}</b> ${S_side.toFixed(3)}<br><b>${t.info_total_area}</b> ${S_total.toFixed(3)}<br><b>${t.info_volume}</b> ${V.toFixed(3)}`;
    } else if (type === 'frustum') {
        const R = p1, r = p3, H = p2;
        const l = Math.sqrt((R - r) * (R - r) + H * H);
        const S_side = Math.PI * (R + r) * l;
        const S_total = S_side + Math.PI * R * R + Math.PI * r * r;
        const V = (1 / 3) * Math.PI * H * (R * R + r * r + R * r);
        html = `<b>${t.info_slant}</b> ${l.toFixed(3)}<br><b>${t.info_side_area}</b> ${S_side.toFixed(3)}<br><b>${t.info_total_area}</b> ${S_total.toFixed(3)}<br><b>${t.info_volume}</b> ${V.toFixed(3)}`;
    } else if (type === 'sphere') {
        const R = p1;
        const S = 4 * Math.PI * R * R;
        const V = (4 / 3) * Math.PI * R * R * R;
        html = `<b>${t.info_surface}</b> ${S.toFixed(3)}<br><b>${t.info_volume}</b> ${V.toFixed(3)}`;
    } else if (type === 'segment') {
        const R = p1, h = p2;
        const S_k = 2 * Math.PI * R * h;
        const V = Math.PI * h * h * (R - h / 3);
        html = `<b>$S_k$:</b> ${S_k.toFixed(3)}<br><b>$V$:</b> ${V.toFixed(3)}`;
    } else if (type === 'sector') {
        const R = p1, h = p2;
        const V = (2 / 3) * Math.PI * R * R * h;
        html = `<b>$V$:</b> ${V.toFixed(3)}`;
    } else if (type === 'zone') {
        const R = p1, H = p2;
        const S_k = 2 * Math.PI * R * H;
        html = `<b>$S_k$:</b> ${S_k.toFixed(3)}`;
    } else if (type === 'layer') {
        const r1 = p1, r2 = p2, h = p3;
        const S_k = 2 * Math.PI * Math.sqrt((r1 * r1 + r2 * r2) / 2) * h;
        const V = (1 / 6) * Math.PI * h * (3 * r1 * r1 + 3 * r2 * r2 + h * h);
        html = `<b>$S_k \\approx$:</b> ${S_k.toFixed(3)}<br><b>$V$:</b> ${V.toFixed(3)}`;
    }
    window._modelInfoBox.innerHTML = html;
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([window._modelInfoBox]).catch(() => { });
    }
}

// Store position state
let modelPos = { x: 0, y: 0, z: 0 };
function updatePositionInput(axis, value) {
    modelPos[axis] = value;
    window.updatePosition();
}
function addSlider(parent, label, min, max, val, cb) {
    const d = document.createElement('div');
    d.style.display = 'flex';
    d.style.alignItems = 'center';
    d.style.gap = '10px';
    d.innerHTML = `<label style="min-width:2.5em;">${label}</label>` +
        `<input type="range" min="${min}" max="${max}" step="0.01" value="${val}" style="flex:1;">` +
        `<input type="number" min="${min}" max="${max}" step="0.01" value="${val}" style="width:4em;">`;
    const range = d.querySelector('input[type=range]');
    const number = d.querySelector('input[type=number]');
    range.oninput = e => { number.value = range.value; cb(parseFloat(range.value)); };
    number.oninput = e => { range.value = number.value; cb(parseFloat(number.value)); };
    parent.appendChild(d);
}

let p1 = 2, p2 = 4, p3 = 4;
function updateGeo(t, v1, v2, v3) {
    if (v1 !== null) p1 = v1; if (v2 !== null) p2 = v2; if (v3 !== null) p3 = v3;
    let g;
    if (t === 'cyl') g = new THREE.CylinderGeometry(p1, p1, p2, 64);
    if (t === 'cone') g = new THREE.ConeGeometry(p1, p2, 64);
    if (t === 'frust') g = new THREE.CylinderGeometry(p1, p3, p2, 64);
    if (t === 'sph') g = new THREE.SphereGeometry(p1, 64, 64);
    if (t === 'segment') {
        // p1=R, p2=h; thetaLength based on h
        const thetaLen = Math.min(Math.PI, Math.acos(1 - p2 / p1));
        g = new THREE.SphereGeometry(p1, 64, 64, 0, Math.PI * 2, 0, thetaLen);
    }
    if (t === 'sector') {
        // Recreate group for sector
        if (currentMesh) {
            scene.remove(currentMesh);
            if (currentMesh.type === 'Group') {
                currentMesh.traverse((child) => {
                    if (child.isMesh) {
                        if (child.geometry) child.geometry.dispose();
                        if (child.material) child.material.dispose();
                    }
                });
            }
        }
        const group = new THREE.Group();
        const thetaLen = Math.min(Math.PI, Math.acos(1 - p2 / p1));
        const segGeo = new THREE.SphereGeometry(p1, 64, 64, 0, Math.PI * 2, 0, thetaLen);
        const baseRadius = p1 * Math.sin(thetaLen);
        const coneHeight = p1 * Math.cos(thetaLen);
        const actualConeHeight = p1 - coneHeight;
        const coneGeo = new THREE.ConeGeometry(baseRadius, actualConeHeight, 64);
        const col = document.getElementById('meshColor').value;
        const wf = window._wireframeState || false;
        const segMat = new THREE.MeshPhongMaterial({ color: col, side: THREE.DoubleSide, shininess: 80, wireframe: wf });
        const coneMat = new THREE.MeshPhongMaterial({ color: col, side: THREE.DoubleSide, shininess: 80, wireframe: wf });
        const segMesh = new THREE.Mesh(segGeo, segMat);
        const coneMesh = new THREE.Mesh(coneGeo, coneMat);
        coneMesh.rotation.x = Math.PI;
        coneMesh.position.y = -actualConeHeight / 2; // Apex at origin, base at segment
        group.add(coneMesh);
        group.add(segMesh);
        currentMesh = group;
        currentMesh.castShadow = true;
        scene.add(currentMesh);
        window.updatePosition();
        updateModelInfoBox();
        return;
    }
    if (t === 'zone') {
        // p1=R, p2=H (height of band); show a band in the middle
        const thetaStart = Math.PI / 2 - Math.asin(p2 / (2 * p1));
        const thetaLen = 2 * Math.asin(p2 / (2 * p1));
        g = new THREE.SphereGeometry(p1, 64, 64, 0, Math.PI * 2, thetaStart, thetaLen);
    }
    if (t === 'layer') {
        // Recreate group for layer
        if (currentMesh) {
            scene.remove(currentMesh);
            if (currentMesh.type === 'Group') {
                currentMesh.traverse((child) => {
                    if (child.isMesh) {
                        if (child.geometry) child.geometry.dispose();
                        if (child.material) child.material.dispose();
                    }
                });
            }
        }
        const group = new THREE.Group();
        const avgR = (p1 + p2) / 2;
        const bandHeight = p3;
        const thetaStart = Math.PI / 2 - Math.asin(bandHeight / (2 * avgR));
        const thetaLen = 2 * Math.asin(bandHeight / (2 * avgR));
        const bandGeo = new THREE.SphereGeometry(avgR, 64, 64, 0, Math.PI * 2, thetaStart, thetaLen);
        const col = document.getElementById('meshColor').value;
        const wf = window._wireframeState || false;
        const bandMat = new THREE.MeshPhongMaterial({ color: col, side: THREE.DoubleSide, shininess: 80, wireframe: wf });
        const bandMesh = new THREE.Mesh(bandGeo, bandMat);
        // Calculate actual positions based on sphere geometry
        const yTop = avgR * Math.cos(thetaStart);
        const yBottom = avgR * Math.cos(thetaStart + thetaLen);
        const rTop = avgR * Math.sin(thetaStart);
        const rBottom = avgR * Math.sin(thetaStart + thetaLen);
        const circleGeo1 = new THREE.CircleGeometry(rTop, 64);
        const circleGeo2 = new THREE.CircleGeometry(rBottom, 64);
        const circleMat = new THREE.MeshPhongMaterial({ color: col, side: THREE.DoubleSide, wireframe: wf });
        const circle1 = new THREE.Mesh(circleGeo1, circleMat);
        const circle2 = new THREE.Mesh(circleGeo2, circleMat);
        circle1.rotation.x = -Math.PI / 2;
        circle1.position.y = yTop;
        circle2.rotation.x = -Math.PI / 2;
        circle2.position.y = yBottom;
        group.add(bandMesh);
        group.add(circle1);
        group.add(circle2);
        currentMesh = group;
        currentMesh.castShadow = true;
        scene.add(currentMesh);
        window.updatePosition();
        updateModelInfoBox();
        return;
    }
    if (currentMesh) {
        if (currentMesh.geometry) {
            currentMesh.geometry.dispose();
            currentMesh.geometry = g;
        }
    }
    updateModelInfoBox();
}

window.updateMaterial = function () {
    if (currentMesh) {
        const newColor = document.getElementById('meshColor').value;
        if (currentMesh.type === 'Group') {
            currentMesh.traverse((child) => {
                if (child.isMesh && child.material) {
                    child.material.color.set(newColor);
                }
            });
        } else if (currentMesh.material) {
            currentMesh.material.color.set(newColor);
        }
    }
};
window.toggleWireframe = function () {
    if (currentMesh) {
        // Check if it's a group or single mesh
        if (currentMesh.type === 'Group') {
            // Get current state from first mesh
            let newState = true;
            currentMesh.traverse((child) => {
                if (child.isMesh && child.material) {
                    if (newState === true) {
                        newState = !child.material.wireframe;
                    }
                }
            });
            // Apply to all
            currentMesh.traverse((child) => {
                if (child.isMesh && child.material) {
                    child.material.wireframe = newState;
                }
            });
            window._wireframeState = newState;
        } else if (currentMesh.material) {
            currentMesh.material.wireframe = !currentMesh.material.wireframe;
            window._wireframeState = currentMesh.material.wireframe;
        }
    }
};
window.updateSlice = function () { clippingPlane.constant = parseFloat(document.getElementById('sliceLevel').value); };
window.updatePosition = function () {
    if (currentMesh) {
        currentMesh.position.x = modelPos.x;
        currentMesh.position.y = modelPos.y;
        currentMesh.position.z = modelPos.z;
    }
};

// Toggle visibility of the model UI panel (useful on small screens)
window.toggleModelUI = function (show) {
    const ui = document.querySelector('.model-ui');
    const openBtn = document.getElementById('openModelUI');
    if (!ui) return;
    if (typeof show === 'undefined') show = (ui.style.display === 'none');
    if (show) {
        ui.style.display = '';
        if (openBtn) openBtn.style.display = 'none';
    } else {
        ui.style.display = 'none';
        if (openBtn) openBtn.style.display = 'flex';
    }
    // ensure renderer updates after layout change
    setTimeout(() => { handleResize(); if (window.adjustPagePadding) adjustPagePadding(); }, 120);
};
function animate() { requestAnimationFrame(animate); controls.update(); renderer.render(scene, camera); }

window.onload = function () {
    setLang('hy');
    updateCalcInputs();
    init3D();

    // Ensure canvas sizes correctly after initial layout
    setTimeout(handleResize, 150);

    // Populate and wire language select
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', function () { setLang(this.value); });
    }

    // Populate mobile navigation and wire it
    if (window.populateMobileNav) populateMobileNav();
    const mobile = document.getElementById('mobileNav');
    if (mobile) {
        mobile.addEventListener('change', function () { showPage(this.value); });
    }

    // Ensure page padding accounts for navbar height
    setTimeout(() => { if (window.adjustPagePadding) adjustPagePadding(); }, 220);

    // Initialize model UI open/close state for mobile
    const openBtn = document.getElementById('openModelUI');
    const ui = document.querySelector('.model-ui');
    if (openBtn && ui) {
        if (window.innerWidth <= 900) {
            openBtn.style.display = (ui.style.display === 'none' || getComputedStyle(ui).display === 'none') ? 'flex' : 'none';
        } else {
            openBtn.style.display = 'none';
        }
    }

    // Keep canvas and layout in sync on resize
    window.addEventListener('resize', () => {
        clearTimeout(window._globalResizeTimeout);
        window._globalResizeTimeout = setTimeout(() => { handleResize(); if (window.adjustPagePadding) adjustPagePadding(); }, 150);
    });
    // Add a loaded class to body to trigger CSS entry animations
    setTimeout(() => {
        try { document.body.classList.add('loaded'); } catch (e) { }
    }, 220);

    // Stop the pulsing animation on the calculate button after a while
    setTimeout(() => {
        try { const btn = document.querySelector('.calc-btn'); if (btn) btn.style.animation = 'none'; } catch (e) { }
    }, 6000);
};
