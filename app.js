const projects = [
  { id: 'health', names: { az: 'Səhiyyə Nazirliyi', en: 'Ministry of Health', ru: 'Министерство здравоохранения' }, type: 'public', images: ['assets/health-01.jpg', 'assets/health-02.jpg', 'assets/health-03.jpg'] },
  { id: 'khankendi', names: { az: 'Xankəndi — Prezidentin xüsusi nümayəndəliyinin binası', en: 'Khankendi — Office of the Presidential Special Representative', ru: 'Ханкенди — здание специального представительства Президента' }, type: 'public', images: ['assets/khankendi-01.jpg', 'assets/khankendi-02.jpg', 'assets/khankendi-03.jpg', 'assets/khankendi-04.jpg', 'assets/khankendi-05.jpg', 'assets/khankendi-06.jpg'] },
  { id: 'employment', names: { az: 'Dövlət Məşğulluq Agentliyi', en: 'State Employment Agency', ru: 'Государственное агентство занятости' }, type: 'public', images: ['assets/employment-01.jpg', 'assets/employment-02.jpg'] },
  { id: 'defense', names: { az: 'Azərsilah', en: 'Azersilah', ru: 'Азерсилях' }, type: 'public', images: ['assets/azersilah-01.jpg', 'assets/azersilah-02.jpg', 'assets/azersilah-03.jpg', 'assets/azersilah-04.jpg', 'assets/azersilah-05.jpg', 'assets/azersilah-06.jpg', 'assets/azersilah-07.jpg', 'assets/azersilah-08.jpg', 'assets/azersilah-09.jpg', 'assets/azersilah-10.jpg', 'assets/azersilah-11.jpg', 'assets/azersilah-12.jpg', 'assets/azersilah-13.jpg'] },
  { id: 'socar', names: { az: 'SOCAR Downstream', en: 'SOCAR Downstream', ru: 'SOCAR Downstream' }, type: 'corporate', images: ['assets/socar-01.jpg', 'assets/socar-02.jpg', 'assets/socar-03.jpg', 'assets/socar-04.jpg', 'assets/socar-05.jpg', 'assets/socar-06.jpg', 'assets/socar-07.jpg', 'assets/socar-08.jpg', 'assets/socar-09.jpg', 'assets/socar-10.jpg', 'assets/socar-11.jpg', 'assets/socar-12.jpg', 'assets/socar-13.jpg'] },
  { id: 'finance', names: { az: 'Maliyyə Nazirliyi — Xəzinədarlıq', en: 'Ministry of Finance — Treasury', ru: 'Министерство финансов — Казначейство' }, type: 'public', images: ['assets/finance-01.jpg', 'assets/finance-02.jpg'] },
  { id: 'kurdamir', names: { az: 'Kürdəmir Rayon Prokurorluğu', en: 'Kurdamir District Prosecutor’s Office', ru: 'Кюрдамирская районная прокуратура' }, type: 'public', images: ['assets/kurdamir-01.jpg', 'assets/kurdamir-02.jpg', 'assets/kurdamir-03.jpg'] },
  { id: 'pirallahi', names: { az: 'Pirallahı Rayon Prokurorluğu', en: 'Pirallahi District Prosecutor’s Office', ru: 'Пираллахинская районная прокуратура' }, type: 'public', images: ['assets/pirallahi-01.jpg', 'assets/pirallahi-02.jpg', 'assets/pirallahi-03.jpg'] },
  { id: 'narimanov', names: { az: 'Nərimanov Rayon Prokurorluğu', en: 'Narimanov District Prosecutor’s Office', ru: 'Наримановская районная прокуратура' }, type: 'public', images: ['assets/narimanov-01.jpg', 'assets/narimanov-02.jpg', 'assets/narimanov-03.jpg', 'assets/narimanov-04.jpg'] },
  { id: 'sheki', names: { az: 'Şəki Rayon Prokurorluğu', en: 'Shaki District Prosecutor’s Office', ru: 'Шекинская районная прокуратура' }, type: 'public', images: ['assets/sheki-01.jpg', 'assets/sheki-02.jpg', 'assets/sheki-03.jpg'] },
  { id: 'qabala', names: { az: 'Qəbələ Rayon Prokurorluğu', en: 'Gabala District Prosecutor’s Office', ru: 'Габалинская районная прокуратура' }, type: 'public', images: ['assets/qabala-01.jpg', 'assets/qabala-02.jpg'] },
];

const countries = {
  az: ['Qazaxıstan', 'Özbəkistan', 'Qırğızıstan', 'Rusiya', 'Səudiyyə Ərəbistanı', 'Seneqal', 'Fil Dişi Sahili', 'İtaliya', 'Polşa', 'Litva'],
  en: ['Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Russia', 'Saudi Arabia', 'Senegal', 'Côte d’Ivoire', 'Italy', 'Poland', 'Lithuania'],
  ru: ['Казахстан', 'Узбекистан', 'Кыргызстан', 'Россия', 'Саудовская Аравия', 'Сенегал', 'Кот-д’Ивуар', 'Италия', 'Польша', 'Литва'],
};

const copy = {
  az: {
    title: 'Panarea — İstehsal. Layihə. İxrac.', skip: 'Məzmunu keç', brandCaption: 'İSTEHSAL · LAYİHƏ · İXRAC', navCompany: 'Şirkət', navProduction: 'İstehsal', navHomeFurniture: 'Ev mebelləri', navProjects: 'Layihələr', navExport: 'İxrac', contactButton: 'Əlaqə saxla',
    heroEyebrow: 'AZƏRBAYCANDA İSTEHSAL · BEYNƏLXALQ İXRAC', heroTitle: 'İri layihələr üçün<br><em>sistemli istehsal.</em>', heroLead: 'Mebel istehsalını, layihələndirməni və quraşdırmanı vahid icra prosesində birləşdiririk.', heroButton: 'Layihələrimizi kəşf edin', heroIndex: 'İSTEHSALDAN LAYİHƏYƏ', heroDotsLabel: 'Ana səhifə şəkilləri', proofLabel: 'Panarea-nın əsas istiqamətləri', galleryDialogLabel: 'Layihə foto qalereyası', description: 'Panarea — sistemli mebel istehsalı, iri layihələrin icrası və ixrac təcrübəsi.', madeIn: 'MADE IN<br><strong>AZERBAIJAN</strong>', mapSvgLabel: 'Bakıdan ixrac ölkələrinə animasiyalı xəttlər göstərən dünya xəritəsi', productionAlt: 'Panarea təqdimatındakı istehsal sahəsinin fotosu', originLabel: 'BAKI · AZƏRBAYCAN',
    proof1Title: 'Sistemli istehsal', proof1Text: 'Planlı və koordinasiyalı istehsal prosesi', proof2Title: 'Kompleks layihələr', proof2Text: 'Layihələndirmədən quraşdırmaya qədər', proof3Title: 'İxrac təcrübəsi', proof3Text: 'Azərbaycan istehsalı mebel müxtəlif bazarlarda',
    mapEyebrow: 'PANAREA İXRAC XƏRİTƏSİ', mapTitle: 'Azərbaycandan<br><em>dünyaya.</em>', mapLead: 'İstehsalımızı və mebel həllərimizi əməkdaşlıq etdiyimiz ölkələrə çatdırırıq.', mapCountriesLabel: 'ƏMƏKDAŞLIQ COĞRAFİYASI', mapOrigin: 'İxracın başlanğıc nöqtəsi · Azərbaycan',
    aboutEyebrow: 'PANAREA HAQQINDA', aboutTitle: 'İstehsal miqyası.<br><em>Layihə intizamı.</em>', aboutText: 'Panarea Azərbaycanda panel və yumşaq mebel istehsalını beynəlxalq ixrac təcrübəsi ilə birləşdirən şirkətdir. Müasir istehsal sistemimiz seriyalı istehsal və fərdi sifarişləri çevik şəkildə həyata keçirməyə, hər layihədə keyfiyyət və etibarlı nəticə təmin etməyə imkan verir.', missionLabel: 'MİSSİYAMIZ', missionText: 'Hörmət və etibara əsaslanan əməkdaşlıqla müştərilərimiz üçün dəyər yaratmaq, rahat və funksional məkanlara töhfə vermək.', statCountries: 'ölkəyə ixrac', statFields: 'əsas istehsal istiqaməti<br>panel və yumşaq mebel', statProcess: 'layihə dövrü<br>istehsaldan quraşdırmaya',
    productionEyebrow: 'İSTEHSAL GÜCÜ', productionTitle: 'Keyfiyyət<br>prosesdən başlayır.', productionText: 'İstehsalımız xüsusi təchiz olunmuş avadanlıqlarla qurulub. HOMAG, SCM və NANXING istehsalı avadanlıqlardan istifadə edirik.', equipmentLabel: 'İstehsal avadanlıqları', partnersLabel: 'Sıx əməkdaşlıq etdiyimiz şirkətlər', productionCapacity: 'İstehsalımızda həm seriya, həm də individual sifarişləri həyata keçirmək üçün bütün şərait nəzərə alınıb.', productionLink: 'İstehsal imkanlarımız', productionPhotoLabel: 'İSTEHSAL SAHƏSİ',
    projectsEyebrow: 'İCRA ETDİYİMİZ İŞLƏR', projectsTitle: 'Seçilmiş <em>layihələr</em>', projectsIntro: 'Hər layihənin öz ehtiyacı var. Panarea məkanın funksiyasına uyğun mebel həllərini istehsal edir və quraşdırır.', projectsNote: 'Xankəndi və Azərsilah layihələrinin foto qalereyaları yeni görüntülərlə yenilənib.',
    homeEyebrow: 'YAŞAYIŞ MƏKANLARI ÜÇÜN', homeTitle: 'Ev <em>mebelləri</em>', homeLead: 'Yataq və qonaq otaqları üçün panel və yumşaq mebel həllərimiz.', homeBedroom: 'Yataq otağı mebeli', homeBedroomText: 'Rahatlıq və səliqəli saxlama üçün yataq, qarderob və tamamlayıcı mebel.', homeLiving: 'Qonaq otağı mebeli', homeLivingText: 'Məkanın ölçüsünə uyğun divan, kreslo və funksional saxlama həlləri.', homeSoft: 'Yumşaq mebel', homeSoftText: 'Fərdi ölçü və material seçimi ilə divan və kreslo modelləri.',
    capabilitiesEyebrow: 'MEBEL İSTEHSALI VƏ LAYİHƏ İCRASI', capabilitiesTitle: 'Bir tərəfdaş.<br><em>Vahid proses.</em>', capability1Title: 'Panel mebel', capability1Text: 'Ofis, inzibati və ictimai məkanlar üçün layihəyə uyğun həllər.', capability2Title: 'Yumşaq mebel', capability2Text: 'İclas, gözləmə və yaşayış məkanları üçün funksional rahatlıq.', capability3Title: 'Komplektləşdirmə', capability3Text: 'Planlama, istehsal, təchizat və quraşdırmanın əlaqəli icrası.',
    exportEyebrow: 'MADE IN AZERBAIJAN', exportTitle: 'Yerli istehsal.<br><em>Beynəlxalq miqyas.</em>', exportStat: '10 ixrac istiqaməti', exportText: 'Əməkdaşlıq etdiyimiz ölkələrin siyahısı yuxarıdakı xəritədə göstərilib.',
    contactEyebrow: 'NÖVBƏTİ LAYİHƏNİZ', contactTitle: 'Birlikdə<br><em>həyata keçirək.</em>', contactText: 'İri layihə və korporativ sifarişlər barədə danışaq.', footerTagline: 'Azərbaycan istehsalı.<br>İri layihələr üçün.', footerCopyright: '© PANAREA · Bütün hüquqlar qorunur',
    publicProject: 'Dövlət layihəsi', corporateProject: 'Korporativ layihə', photoCount: 'foto', gallery: 'LAYİHƏ QALEREYASI', projectInfo: 'LAYİHƏ MƏLUMATI', noPhotos: 'Bu layihənin qalereyası hazırlanır.', photosLater: 'Şəkillər təqdim ediləndə əlavə olunacaq.', noPhotoLabel: 'Foto qalereyası əlavə olunacaq', menuOpen: 'Menyunu aç', menuClose: 'Menyunu bağla', closeGallery: 'Qalereyanı bağla', previousImage: 'Əvvəlki şəkil', nextImage: 'Növbəti şəkil',
  },
  en: {
    title: 'Panarea — Production. Projects. Export.', skip: 'Skip to content', brandCaption: 'PRODUCTION · PROJECTS · EXPORT', navCompany: 'Company', navProduction: 'Production', navHomeFurniture: 'Home furniture', navProjects: 'Projects', navExport: 'Export', contactButton: 'Contact us',
    heroEyebrow: 'MADE IN AZERBAIJAN · EXPORTED WORLDWIDE', heroTitle: 'Systematic manufacturing<br><em>for major projects.</em>', heroLead: 'We bring furniture production, design and installation together in one coordinated process.', heroButton: 'Explore our projects', heroIndex: 'FROM PRODUCTION TO PROJECT', heroDotsLabel: 'Homepage images', proofLabel: 'Panarea’s core capabilities', galleryDialogLabel: 'Project photo gallery', description: 'Panarea — systematic furniture manufacturing, large-scale projects and exports.', madeIn: 'MADE IN<br><strong>AZERBAIJAN</strong>', mapSvgLabel: 'World map showing animated export routes from Baku', productionAlt: 'Production facility photograph from the Panarea presentation', originLabel: 'BAKU · AZERBAIJAN',
    proof1Title: 'Systematic manufacturing', proof1Text: 'A planned, coordinated production process', proof2Title: 'Turnkey projects', proof2Text: 'From design through installation', proof3Title: 'Export experience', proof3Text: 'Azerbaijani-made furniture for global markets',
    mapEyebrow: 'PANAREA EXPORT MAP', mapTitle: 'From Azerbaijan<br><em>to the world.</em>', mapLead: 'We deliver our manufacturing and furniture solutions to the countries we work with.', mapCountriesLabel: 'OUR INTERNATIONAL MARKETS', mapOrigin: 'Export origin · Azerbaijan',
    aboutEyebrow: 'ABOUT PANAREA', aboutTitle: 'Manufacturing scale.<br><em>Project discipline.</em>', aboutText: 'Panarea is an Azerbaijan-based manufacturer of panel and upholstered furniture with international export experience. Our modern production system supports both serial manufacturing and bespoke orders, with the flexibility to deliver consistent quality and dependable results.', missionLabel: 'OUR MISSION', missionText: 'To create value through respectful, trusted partnerships and contribute to comfortable, functional spaces for our clients.', statCountries: 'export markets', statFields: 'core manufacturing lines<br>panel and upholstered furniture', statProcess: 'project lifecycle<br>from production to installation',
    productionEyebrow: 'PRODUCTION CAPACITY', productionTitle: 'Quality begins<br>with the process.', productionText: 'Our production is set up with purpose-equipped machinery. We use equipment manufactured by HOMAG, SCM and NANXING.', equipmentLabel: 'Production equipment', partnersLabel: 'Companies we work closely with', productionCapacity: 'Our production is equipped to fulfil both serial production runs and individual orders.', productionLink: 'Our production capabilities', productionPhotoLabel: 'PRODUCTION FACILITY',
    projectsEyebrow: 'SELECTED WORK', projectsTitle: 'Selected <em>projects</em>', projectsIntro: 'Every project has its own requirements. Panarea designs, manufactures and installs furniture solutions for each space.', projectsNote: 'The Khankendi and Azersilah project galleries have been updated with new images.',
    homeEyebrow: 'FURNITURE FOR LIVING SPACES', homeTitle: 'Home <em>furniture</em>', homeLead: 'Panel and upholstered furniture solutions for bedrooms and living rooms.', homeBedroom: 'Bedroom furniture', homeBedroomText: 'Beds, wardrobes and complementary pieces designed for comfort and considered storage.', homeLiving: 'Living room furniture', homeLivingText: 'Sofas, armchairs and practical storage tailored to the dimensions of your space.', homeSoft: 'Upholstered furniture', homeSoftText: 'Sofa and armchair designs with individual sizing and material options.',
    capabilitiesEyebrow: 'FURNITURE MANUFACTURING & PROJECT DELIVERY', capabilitiesTitle: 'One partner.<br><em>One process.</em>', capability1Title: 'Panel furniture', capability1Text: 'Project-specific solutions for offices, public buildings and shared spaces.', capability2Title: 'Upholstered furniture', capability2Text: 'Functional comfort for meeting, reception and living spaces.', capability3Title: 'Full project fit-out', capability3Text: 'Coordinated planning, production, supply and installation.',
    exportEyebrow: 'MADE IN AZERBAIJAN', exportTitle: 'Local production.<br><em>International reach.</em>', exportStat: '10 export markets', exportText: 'The countries we work with are shown on the map above.',
    contactEyebrow: 'YOUR NEXT PROJECT', contactTitle: 'Let’s make it<br><em>happen together.</em>', contactText: 'Talk to us about large projects and corporate orders.', footerTagline: 'Made in Azerbaijan.<br>Built for major projects.', footerCopyright: '© PANAREA · All rights reserved',
    publicProject: 'Public-sector project', corporateProject: 'Corporate project', photoCount: 'photos', gallery: 'PROJECT GALLERY', projectInfo: 'PROJECT DETAILS', noPhotos: 'This project gallery is being prepared.', photosLater: 'Photos will be added when they are shared.', noPhotoLabel: 'Gallery photos to come', menuOpen: 'Open menu', menuClose: 'Close menu', closeGallery: 'Close gallery', previousImage: 'Previous image', nextImage: 'Next image',
  },
  ru: {
    title: 'Panarea — Производство. Проекты. Экспорт.', skip: 'Перейти к содержанию', brandCaption: 'ПРОИЗВОДСТВО · ПРОЕКТЫ · ЭКСПОРТ', navCompany: 'Компания', navProduction: 'Производство', navProjects: 'Проекты', navExport: 'Экспорт', contactButton: 'Связаться',
    heroEyebrow: 'ПРОИЗВОДСТВО В АЗЕРБАЙДЖАНЕ · ЭКСПОРТ', heroTitle: 'Системное производство<br><em>для крупных проектов.</em>', heroLead: 'Мы объединяем производство мебели, проектирование и монтаж в единый процесс.', heroButton: 'Наши проекты', heroIndex: 'ОТ ПРОИЗВОДСТВА К ПРОЕКТУ', heroDotsLabel: 'Изображения главной страницы', proofLabel: 'Основные направления Panarea', galleryDialogLabel: 'Фотогалерея проекта', description: 'Panarea — системное производство мебели, крупные проекты и экспорт.', madeIn: 'ПРОИЗВЕДЕНО В<br><strong>АЗЕРБАЙДЖАНЕ</strong>', mapSvgLabel: 'Карта мира с анимированными экспортными маршрутами из Баку', productionAlt: 'Фотография производственной площадки из презентации Panarea', originLabel: 'БАКУ · АЗЕРБАЙДЖАН',
    proof1Title: 'Системное производство', proof1Text: 'Плановый и скоординированный процесс', proof2Title: 'Комплексные проекты', proof2Text: 'От проектирования до монтажа', proof3Title: 'Опыт экспорта', proof3Text: 'Мебель азербайджанского производства для разных рынков',
    mapEyebrow: 'КАРТА ЭКСПОРТА PANAREA', mapTitle: 'Из Азербайджана<br><em>в мир.</em>', mapLead: 'Мы поставляем мебель и производственные решения в страны, с которыми сотрудничаем.', mapCountriesLabel: 'ГЕОГРАФИЯ СОТРУДНИЧЕСТВА', mapOrigin: 'Начало экспорта · Азербайджан',
    aboutEyebrow: 'О PANAREA', aboutTitle: 'Масштаб производства.<br><em>Точность проектов.</em>', aboutText: 'Panarea — азербайджанский производитель корпусной и мягкой мебели с опытом международного экспорта. Современная система производства позволяет выполнять как серийные, так и индивидуальные заказы, обеспечивая гибкость, стабильное качество и надёжный результат.', missionLabel: 'НАША МИССИЯ', missionText: 'Создавать ценность для клиентов на основе уважения и доверия, помогая формировать комфортные и функциональные пространства.', statCountries: 'стран экспорта', statFields: 'основных направления производства<br>корпусная и мягкая мебель', statProcess: 'цикл проекта<br>от производства до монтажа',
    productionEyebrow: 'ПРОИЗВОДСТВЕННЫЕ ВОЗМОЖНОСТИ', productionTitle: 'Качество начинается<br>с процесса.', productionText: 'Производство оснащено специализированным оборудованием. Мы используем станки производства HOMAG, SCM и NANXING.', equipmentLabel: 'Производственное оборудование', partnersLabel: 'Компании, с которыми тесно сотрудничаем', productionCapacity: 'Наши мощности позволяют выполнять как серийные, так и индивидуальные заказы.', productionLink: 'Наши производственные возможности', productionPhotoLabel: 'ПРОИЗВОДСТВЕННАЯ ПЛОЩАДКА',
    projectsEyebrow: 'ВЫПОЛНЕННЫЕ РАБОТЫ', projectsTitle: 'Избранные <em>проекты</em>', projectsIntro: 'У каждого проекта свои требования. Panarea проектирует, производит и устанавливает мебельные решения для разных пространств.', projectsNote: 'Обновлены фотогалереи проектов в Ханкенди и Azersilah.',
    homeEyebrow: 'МЕБЕЛЬ ДЛЯ ЖИЛЫХ ПРОСТРАНСТВ', homeTitle: 'Мебель <em>для дома</em>', homeLead: 'Корпусная и мягкая мебель для спален и гостиных.', homeBedroom: 'Мебель для спальни', homeBedroomText: 'Кровати, шкафы и дополнительные элементы для комфорта и хранения.', homeLiving: 'Мебель для гостиной', homeLivingText: 'Диваны, кресла и функциональные системы хранения по размерам помещения.', homeSoft: 'Мягкая мебель', homeSoftText: 'Диваны и кресла с индивидуальным подбором размеров и материалов.',
    capabilitiesEyebrow: 'ПРОИЗВОДСТВО МЕБЕЛИ И РЕАЛИЗАЦИЯ ПРОЕКТОВ', capabilitiesTitle: 'Один партнёр.<br><em>Единый процесс.</em>', capability1Title: 'Корпусная мебель', capability1Text: 'Решения по проекту для офисов, административных и общественных пространств.', capability2Title: 'Мягкая мебель', capability2Text: 'Функциональный комфорт для переговорных, приёмных и жилых помещений.', capability3Title: 'Комплексное оснащение', capability3Text: 'Согласованное планирование, производство, поставка и монтаж.',
    exportEyebrow: 'MADE IN AZERBAIJAN', exportTitle: 'Местное производство.<br><em>Международный масштаб.</em>', exportStat: '10 экспортных рынков', exportText: 'Страны, с которыми мы сотрудничаем, отмечены на карте выше.',
    contactEyebrow: 'ВАШ СЛЕДУЮЩИЙ ПРОЕКТ', contactTitle: 'Реализуем его<br><em>вместе.</em>', contactText: 'Обсудим крупные проекты и корпоративные заказы.', footerTagline: 'Произведено в Азербайджане.<br>Для крупных проектов.', footerCopyright: '© PANAREA · Все права защищены',
    publicProject: 'Государственный проект', corporateProject: 'Корпоративный проект', photoCount: 'фото', gallery: 'ГАЛЕРЕЯ ПРОЕКТА', projectInfo: 'О ПРОЕКТЕ', noPhotos: 'Галерея этого проекта готовится.', photosLater: 'Фотографии будут добавлены после получения.', noPhotoLabel: 'Фотогалерея будет добавлена', menuOpen: 'Открыть меню', menuClose: 'Закрыть меню', closeGallery: 'Закрыть галерею', previousImage: 'Предыдущее фото', nextImage: 'Следующее фото',
  },
};

copy.ru.navHomeFurniture = 'Мебель для дома';

const heroSlides = [
  { src: 'assets/khankendi-03.jpg', alt: { az: 'Xankəndi layihəsində rəhbər otağının interyeri', en: 'Executive office interior from the Khankendi project', ru: 'Интерьер кабинета руководителя в проекте в Ханкенди' } },
  { src: 'assets/kurdamir-03.jpg', alt: { az: 'Kürdəmir Rayon Prokurorluğunda Heydər Əliyevin büstü olan zal', en: 'Hall with Heydar Aliyev bust at the Kurdamir District Prosecutor’s Office', ru: 'Зал с бюстом Гейдара Алиева в Кюрдамирской районной прокуратуре' } },
  { src: 'assets/pirallahi-01.jpg', alt: { az: 'Pirallahı Rayon Prokurorluğunun səliqəli interyeri', en: 'Neat interior at the Pirallahi District Prosecutor’s Office', ru: 'Интерьер Пираллахинской районной прокуратуры' } },
];

let currentLanguage = 'az';
let currentSlide = 0;
let slideTimer;
let activeProject = null;
let activeImage = 0;

const projectGrid = document.querySelector('#project-grid');
const galleryDialog = document.querySelector('#gallery-dialog');
const galleryTitle = document.querySelector('#gallery-title');
const galleryType = document.querySelector('#gallery-type');
const galleryImage = document.querySelector('#gallery-image');
const galleryEmpty = document.querySelector('#gallery-empty');
const galleryCount = document.querySelector('#gallery-count');
const galleryThumbs = document.querySelector('#gallery-thumbs');
const galleryArrows = document.querySelectorAll('.gallery-arrow');
const heroImage = document.querySelector('#hero-image');
const heroSlideNumber = document.querySelector('#hero-slide-number');
const heroDots = document.querySelector('#hero-dots');

function renderProjects() {
  const text = copy[currentLanguage];
  projectGrid.innerHTML = projects.map((project) => {
    const title = project.names[currentLanguage];
    const firstImage = project.images[0];
    const imageBlock = firstImage
      ? `<div class="project-image"><img src="${firstImage}" alt="${title}" loading="lazy"><span class="project-arrow" aria-hidden="true">↗</span></div>`
      : `<div class="project-image placeholder"><span class="awaiting">${text.noPhotoLabel}</span><span class="project-arrow" aria-hidden="true">↗</span></div>`;
    const count = project.images.length
      ? `<span class="gallery-count">${project.images.length} ${text.photoCount} ↗</span>`
      : '<span class="gallery-count">↗</span>';
    const type = project.type === 'corporate' ? text.corporateProject : text.publicProject;
    return `<button class="project-card" type="button" data-project="${project.id}" aria-label="${title} — ${text.gallery}">
      ${imageBlock}
      <span class="project-card-body"><span class="project-card-title"><strong>${title}</strong><span class="project-meta">${type}</span></span>${count}</span>
    </button>`;
  }).join('');
}

function renderCountries() {
  document.querySelector('#export-country-list').innerHTML = countries[currentLanguage]
    .map((country, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span>${country}</li>`).join('');
}

function renderHeroDots() {
  heroDots.innerHTML = heroSlides.map((_, index) => `<button type="button" class="hero-dot${index === currentSlide ? ' active' : ''}" data-slide="${index}" aria-label="${index + 1}" aria-pressed="${index === currentSlide}"></button>`).join('');
}

function showHeroSlide(index) {
  currentSlide = (index + heroSlides.length) % heroSlides.length;
  const slide = heroSlides[currentSlide];
  heroImage.classList.add('fading');
  window.setTimeout(() => {
    heroImage.src = slide.src;
    heroImage.alt = slide.alt[currentLanguage];
    heroSlideNumber.textContent = String(currentSlide + 1).padStart(2, '0');
    heroImage.classList.remove('fading');
    renderHeroDots();
  }, 220);
}

function restartHeroTimer() {
  window.clearInterval(slideTimer);
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    slideTimer = window.setInterval(() => showHeroSlide(currentSlide + 1), 6500);
  }
}

function applyLanguage(language) {
  if (!copy[language]) return;
  currentLanguage = language;
  const text = copy[language];
  document.documentElement.lang = language;
  document.title = text.title;
  document.querySelector('meta[name="description"]').setAttribute('content', text.description);
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = text[node.dataset.i18n];
    if (value !== undefined) node.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((node) => {
    const value = text[node.dataset.i18nHtml];
    if (value !== undefined) node.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((node) => {
    const value = text[node.dataset.i18nAlt];
    if (value !== undefined) node.setAttribute('alt', value);
  });
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  });
  document.querySelector('#main-nav').setAttribute('aria-label', language === 'az' ? 'Əsas menyu' : language === 'en' ? 'Main navigation' : 'Главное меню');
  document.querySelector('.proof-strip').setAttribute('aria-label', text.proofLabel);
  document.querySelector('.language-picker').setAttribute('aria-label', language === 'az' ? 'Dil seçimi' : language === 'en' ? 'Choose language' : 'Выбор языка');
  document.querySelector('.hero-dots').setAttribute('aria-label', text.heroDotsLabel);
  document.querySelector('.world-map').setAttribute('aria-label', text.mapSvgLabel);
  document.querySelector('.origin-label').textContent = text.originLabel;
  document.querySelector('.menu-toggle').setAttribute('aria-label', document.querySelector('.menu-toggle').getAttribute('aria-expanded') === 'true' ? text.menuClose : text.menuOpen);
  document.querySelectorAll('.brand').forEach((brand) => brand.setAttribute('aria-label', `Panarea — ${text.navCompany}`));
  galleryDialog.setAttribute('aria-label', text.galleryDialogLabel);
  document.querySelector('.gallery-close').setAttribute('aria-label', text.closeGallery);
  document.querySelector('.gallery-arrow.previous').setAttribute('aria-label', text.previousImage);
  document.querySelector('.gallery-arrow.next').setAttribute('aria-label', text.nextImage);
  document.querySelector('#gallery-empty').firstChild.textContent = text.noPhotos;
  document.querySelector('#gallery-empty span').textContent = text.photosLater;
  renderProjects();
  renderCountries();
  renderHeroDots();
  heroImage.alt = heroSlides[currentSlide].alt[language];
  if (activeProject && galleryDialog.open) {
    galleryTitle.textContent = activeProject.names[language];
    galleryType.textContent = activeProject.images.length ? text.gallery : text.projectInfo;
    showGalleryImage();
  }
}

function showGalleryImage() {
  const images = activeProject.images;
  if (!images.length) {
    galleryImage.hidden = true;
    galleryEmpty.hidden = false;
    galleryArrows.forEach((arrow) => { arrow.hidden = true; });
    galleryCount.textContent = copy[currentLanguage].photosLater;
    galleryThumbs.replaceChildren();
    return;
  }
  galleryImage.hidden = false;
  galleryEmpty.hidden = true;
  galleryArrows.forEach((arrow) => { arrow.hidden = false; });
  galleryImage.src = images[activeImage];
  galleryImage.alt = `${activeProject.names[currentLanguage]} — ${activeImage + 1}`;
  galleryCount.textContent = `${String(activeImage + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
  galleryThumbs.innerHTML = images.map((src, index) => `<button class="gallery-thumb${index === activeImage ? ' active' : ''}" type="button" data-image-index="${index}" aria-label="${index + 1}" aria-current="${index === activeImage ? 'true' : 'false'}"><img src="${src}" alt="" loading="lazy"></button>`).join('');
}

function openGallery(project) {
  activeProject = project;
  activeImage = 0;
  galleryTitle.textContent = project.names[currentLanguage];
  galleryType.textContent = project.images.length ? copy[currentLanguage].gallery : copy[currentLanguage].projectInfo;
  galleryDialog.showModal();
  showGalleryImage();
}

function moveGallery(step) {
  if (!activeProject?.images.length) return;
  activeImage = (activeImage + step + activeProject.images.length) % activeProject.images.length;
  showGalleryImage();
}

applyLanguage('az');
restartHeroTimer();

projectGrid.addEventListener('click', (event) => {
  const card = event.target.closest('[data-project]');
  if (!card) return;
  const project = projects.find((item) => item.id === card.dataset.project);
  if (project) openGallery(project);
});
document.querySelector('.gallery-close').addEventListener('click', () => galleryDialog.close());
document.querySelector('.gallery-arrow.previous').addEventListener('click', () => moveGallery(-1));
document.querySelector('.gallery-arrow.next').addEventListener('click', () => moveGallery(1));
galleryThumbs.addEventListener('click', (event) => {
  const thumb = event.target.closest('[data-image-index]');
  if (!thumb) return;
  activeImage = Number(thumb.dataset.imageIndex);
  showGalleryImage();
});
galleryDialog.addEventListener('click', (event) => {
  if (event.target === galleryDialog) galleryDialog.close();
});
galleryDialog.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') moveGallery(1);
  if (event.key === 'ArrowLeft') moveGallery(-1);
});

heroDots.addEventListener('click', (event) => {
  const dot = event.target.closest('[data-slide]');
  if (!dot) return;
  showHeroSlide(Number(dot.dataset.slide));
  restartHeroTimer();
});
document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang);
    restartHeroTimer();
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuToggle.setAttribute('aria-label', expanded ? copy[currentLanguage].menuOpen : copy[currentLanguage].menuClose);
  mainNav.classList.toggle('open', !expanded);
});
mainNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', copy[currentLanguage].menuOpen);
  }
});
