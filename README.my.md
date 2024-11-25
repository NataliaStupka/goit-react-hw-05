Створення/налаштування проекту:

1. New репозиторій(порожній) на github.com;
2. Клонуємо на комп
3. відкрити термінал, зайті в папку проекту(pwd - де знаходимось, cd -
   навігація(наприклад cd goit-react-hw-02), ls - список папок)
4. npm create vite@latest
5. .(створити проєкт у поточній папці) або назву (тоді створе нову папку)
6. React, JS + SWS (потім typescript)
7. npm install
8. npm run dev (Запустить проєкт)
9. ctrl + С (зупине сервер)
10. відкриваємо VScode
11. в index.html змінитит title з 'Vite + React' на свій
12. додати файл prettier
13. нормалізація стилів (npm i modern-normalize). В main.jsx імпортуємо стилі
    нормалізації (import "modern-normalize");
14. в файлі index.css, скид/додавання деяких глобальних стилів для елементів;
15. Перевірка якості коду: Розширення ESLint + налаштування файлу ESLint: Замінили вміст файлу eslint.config.js; Або 'точково':
<!-- rules: {
...
"react/prop-types": 0,
...
} -->
16. в файлі vite.config.js замінили вміст
17. npm i prop-types - для PropTypes;
18. npm i clsx - додавання декількох класів на елемент
<!--  -->
19. npm install axios (запит на бекенд замість fetch)
20. Formik(npm i formik) + yup(npm i yup) валідація;
21. npm install react-hot-toast ((сповіщення)). Toaster в main біля App

<!--h/w-5  -->

21. Маршрутизатор React (npm install react-router-dom);
22. Для правильної роботи додатка з маршрутизацією після розгортання на Vercel: файл налаштувань vercel.json в кореневу папку проекту. Вміст:
    {
    "rewrites": [
    {"source": "/(.*)", "destination": "/"}
    ]
    }

<!-- фільми з сервісу TMDB (https://www.themoviedb.org) -->
<!-- API Key: b16acf67b085ef63f730716a5f3f661c -->

<!-- Для роботи маршрутизатора *** -->

--- Виконання д/з #5 ---

- встановлено маршрутизатор react-router-dom

1. огортаємо в main App <BrowserRouter>
2. в App: <Routes><Route path='' element={}></Route></Routes>
3. src/pages (або src/vues)
4. щоб переходити при натисканні на movie, прописуємо шлях path="/:moviesId"
5. useParams - для MovieDetailsPage. Витягуємо moviesId
6. при пошуку, прописати в url що шукаємо - useSearchParams(). При перезавантаженні url не змінюється
   6.1. const [searchParams, setSearchParams] = useSearchParams();
   searchParams.set('query') - записує/запам'ятовує значення;
   const query = searchParams.get("query"); - витягує/використовує (цим можна замінити const [query, setQuery] = useState("");)
7. кнопка GoBack.
   const location = useLocation() - звідки переходимо;
   на <Link to='' state={location} />
   const goBackLink = useRef(location.state ?? "/movies"); - при перезагрузці Ref очищується, ?? поверне хочаб на початок;
   <Link to={goBackLink.current}>Go back</Link>
8. lazy (() => import('../')) завантажимо пізніше, те що відразу не потрібне; огорнути Suspense Routes
<Suspense fallback={<h2>Loading...</h2>}><Routes>...</Routes></Suspense>
   <!--  ------>

- npm install react-hot-toast (сповіщення);
- Loader - npm install react-loader-spinner --save;
- Modal - npm install react-modal

<!-- стилізація активного лінка  -->

buildLinkClass додати на <NavLink>

- NavLink автоматично навішує флаг isActive на кожне своє посилання;
  const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
  };
