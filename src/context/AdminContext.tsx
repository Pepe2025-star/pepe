import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/context/AdminContext.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=8e80e8f2"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/project/src/context/AdminContext.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=8e80e8f2"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const createContext = __vite__cjsImport3_react["createContext"]; const useContext = __vite__cjsImport3_react["useContext"]; const useReducer = __vite__cjsImport3_react["useReducer"]; const useEffect = __vite__cjsImport3_react["useEffect"];
const EMBEDDED_CONFIG = {
  "version": "2.1.0",
  "prices": {
    "moviePrice": 100,
    "seriesPrice": 300,
    "transferFeePercentage": 10,
    "novelPricePerChapter": 5
  },
  "deliveryZones": [
    {
      "name": "Santiago de Cuba > Vista Hermosa",
      "cost": 400,
      "id": 1759549448776,
      "createdAt": "2025-10-04T03:44:08.776Z",
      "updatedAt": "2025-10-04T03:44:08.776Z"
    },
    {
      "name": "Santiago de Cuba > Antonio Maceo",
      "cost": 400,
      "id": 1759549461376,
      "createdAt": "2025-10-04T03:44:21.376Z",
      "updatedAt": "2025-10-04T03:44:21.376Z"
    },
    {
      "name": "Santiago de Cuba > Centro de la ciudad",
      "cost": 250,
      "id": 1759549473488,
      "createdAt": "2025-10-04T03:44:33.488Z",
      "updatedAt": "2025-10-04T03:44:33.488Z"
    },
    {
      "name": "Santiago de Cuba > Versalles Hasta el Hotel",
      "cost": 500,
      "id": 1759549486736,
      "createdAt": "2025-10-04T03:44:46.736Z",
      "updatedAt": "2025-10-04T03:44:46.736Z"
    },
    {
      "name": "Santiago de Cuba > Carretera del Morro",
      "cost": 300,
      "id": 1759549499552,
      "createdAt": "2025-10-04T03:44:59.552Z",
      "updatedAt": "2025-10-04T03:44:59.552Z"
    },
    {
      "name": "Santiago de Cuba > Altamira",
      "cost": 400,
      "id": 1759549511664,
      "createdAt": "2025-10-04T03:45:11.664Z",
      "updatedAt": "2025-10-04T03:45:11.664Z"
    },
    {
      "name": "Santiago de Cuba > Cangrejitos",
      "cost": 350,
      "id": 1759549521424,
      "createdAt": "2025-10-04T03:45:21.424Z",
      "updatedAt": "2025-10-04T03:45:21.424Z"
    },
    {
      "name": "Santiago de Cuba > Trocha",
      "cost": 250,
      "id": 1759549534560,
      "createdAt": "2025-10-04T03:45:34.560Z",
      "updatedAt": "2025-10-04T03:45:34.560Z"
    },
    {
      "name": "Santiago de Cuba > Veguita de Galo",
      "cost": 300,
      "id": 1759549546912,
      "createdAt": "2025-10-04T03:45:46.912Z",
      "updatedAt": "2025-10-04T03:45:46.912Z"
    },
    {
      "name": "Santiago de Cuba > Plaza de Martes",
      "cost": 250,
      "id": 1759549558000,
      "createdAt": "2025-10-04T03:45:58.000Z",
      "updatedAt": "2025-10-04T03:45:58.000Z"
    },
    {
      "name": "Santiago de Cuba > Portuondo",
      "cost": 300,
      "id": 1759549569112,
      "createdAt": "2025-10-04T03:46:09.112Z",
      "updatedAt": "2025-10-04T03:46:09.112Z"
    },
    {
      "name": "Santiago de Cuba > Sta Barbara",
      "cost": 300,
      "id": 1759549580560,
      "createdAt": "2025-10-04T03:46:20.560Z",
      "updatedAt": "2025-10-04T03:46:20.560Z"
    },
    {
      "name": "Santiago de Cuba > Sueño",
      "cost": 250,
      "id": 1759549592112,
      "createdAt": "2025-10-04T03:46:32.112Z",
      "updatedAt": "2025-10-04T03:46:32.112Z"
    },
    {
      "name": "Santiago de Cuba > San Pedrito",
      "cost": 150,
      "id": 1759549603696,
      "createdAt": "2025-10-04T03:46:43.696Z",
      "updatedAt": "2025-10-04T03:46:43.696Z"
    },
    {
      "name": "Santiago de Cuba > Agüero",
      "cost": 100,
      "id": 1759549615848,
      "createdAt": "2025-10-04T03:46:55.848Z",
      "updatedAt": "2025-10-04T03:46:55.848Z"
    },
    {
      "name": "Santiago de Cuba > Distrito Jose Martí",
      "cost": 150,
      "id": 1759549627504,
      "createdAt": "2025-10-04T03:47:07.504Z",
      "updatedAt": "2025-10-04T03:47:07.504Z"
    },
    {
      "name": "Santiago de Cuba > Los Pinos",
      "cost": 200,
      "id": 1759549638272,
      "createdAt": "2025-10-04T03:47:18.272Z",
      "updatedAt": "2025-10-04T03:47:18.272Z"
    },
    {
      "name": "Santiago de Cuba > Quintero",
      "cost": 500,
      "id": 1759549649480,
      "createdAt": "2025-10-04T03:47:29.480Z",
      "updatedAt": "2025-10-04T03:47:29.480Z"
    },
    {
      "name": "Santiago de Cuba > 30 de noviembre bajo",
      "cost": 400,
      "id": 1759549660904,
      "createdAt": "2025-10-04T03:47:40.904Z",
      "updatedAt": "2025-10-04T03:47:40.904Z"
    },
    {
      "name": "Santiago de Cuba > Rajayoga",
      "cost": 600,
      "id": 1759549668800,
      "createdAt": "2025-10-04T03:47:48.800Z",
      "updatedAt": "2025-10-04T03:47:48.800Z"
    },
    {
      "name": "Santiago de Cuba > Pastorita",
      "cost": 600,
      "id": 1759549676760,
      "createdAt": "2025-10-04T03:47:56.760Z",
      "updatedAt": "2025-10-04T03:47:56.760Z"
    },
    {
      "name": "Santiago de Cuba > Vista Alegre",
      "cost": 300,
      "id": 1759549686896,
      "createdAt": "2025-10-04T03:48:06.896Z",
      "updatedAt": "2025-10-04T03:48:06.896Z"
    },
    {
      "name": "Santiago de Cuba > Caney",
      "cost": 1000,
      "id": 1759549696240,
      "createdAt": "2025-10-04T03:48:16.240Z",
      "updatedAt": "2025-10-04T03:48:16.240Z"
    },
    {
      "name": "Santiago de Cuba > Nuevo Vista Alegre",
      "cost": 100,
      "id": 1759549706888,
      "createdAt": "2025-10-04T03:48:26.888Z",
      "updatedAt": "2025-10-04T03:48:26.888Z"
    },
    {
      "name": "Santiago de Cuba > Marimón",
      "cost": 100,
      "id": 1759549715521,
      "createdAt": "2025-10-04T03:48:35.521Z",
      "updatedAt": "2025-10-04T03:48:35.521Z"
    },
    {
      "name": "Santiago de Cuba > Versalle Edificios",
      "cost": 800,
      "id": 1759549729736,
      "createdAt": "2025-10-04T03:48:49.736Z",
      "updatedAt": "2025-10-04T03:48:49.736Z"
    },
    {
      "name": "Santiago de Cuba > Ferreiro",
      "cost": 300,
      "id": 1759549738720,
      "createdAt": "2025-10-04T03:48:58.720Z",
      "updatedAt": "2025-10-04T03:48:58.720Z"
    },
    {
      "name": "Santiago de Cuba > 30 de noviembre altos",
      "cost": 500,
      "id": 1759549747952,
      "createdAt": "2025-10-04T03:49:07.952Z",
      "updatedAt": "2025-10-04T03:49:07.952Z"
    }
  ],
  "novels": [
    {
      "titulo": "Alaca",
      "genero": "Drama",
      "capitulos": 120,
      "año": 2024,
      "descripcion": "La vida de una joven se ve destrozada cuando le roban un riñón durante un violento secuestro, organizado por su rico padre biológico, que necesita un donante. Mientras busca respuestas, descubre el secreto que cambió su vida y se enfrenta a la traición de Kenan, el amor de su vida, cuyas complicadas lealtades ponen a prueba su vínculo.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/alaca2.jpg",
      "estado": "finalizada",
      "id": 1759547587158,
      "createdAt": "2025-10-04T03:13:07.158Z",
      "updatedAt": "2025-10-12T01:07:19.900Z"
    },
    {
      "titulo": "Salvaje (Yabani)",
      "genero": "Drama",
      "capitulos": 20,
      "año": 2023,
      "descripcion": "Salvaje novela turca, Yaman es un joven que ha vivido en las calles desde que tiene uso de razón. Ha tenido una vida dura, teniendo que luchar para sobrevivir y encontrar comida. Afortunadamente, siempre ha tenido a su lado tres amigos que se convirtieron en su familia, Cesur, Asi y Umut.\n\nSe cruzaron cuando eran apenas unos niños y a partir de ahí no se separaron. De manera inexplicable ninguno sabe nada de su pasado o porque están en la calle, sin importar su pasado o traumas decidieron confiar entre ellos y seguir adelante.\n\nLa gran preocupación del grupo es cumplir con el tratamiento de Umut, quien no puede caminar y el “Doctor milagro” es su única esperanza, pero el médico vive en el extranjero y ve a pocos pacientes una vez al año cuando llega al país. \n\nYaman cometerá el mayor error de su vida, entrando a una mansión que probablemente podría ser la de su familia, pero se le cae la cara de vergüenza ya que ha atacado a quien sería su hermano y apuñalado a su madre. Ahora su familia y la policía lo buscan.\n\nLa vida de Yaman comenzará a dar un giro inesperado cuando se cruce con Ates y su novia Ruya. Estos salían de un club nocturno. A partir de ahí una serie de eventos golpearán la vida de Yaman y lo llevarán al límite. Salvaje serie turca.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/yabani.jpg",
      "estado": "transmision",
      "id": 1759547831629,
      "createdAt": "2025-10-04T03:17:11.629Z",
      "updatedAt": "2025-10-12T01:11:41.187Z"
    },
    {
      "titulo": "El Turco",
      "genero": "Romance",
      "capitulos": 6,
      "año": 2024,
      "descripcion": "Tras ser traicionado y condenado a muerte, logra escapar y es curado por los aldeanos del pintoresco pueblo italiano de Moena, ubicado en los Alpes. A medida que se recupera, Balaban, al que apodan 'El Turco', se convierte en protector del pueblo, resistiendo las opresivas cargas impositivas de su señor feudal. Con el tiempo, la lucha se intensifica y, cuando un antiguo enemigo del protagonista, el implacable caballero Marco, aparece, comienza la batalla decisiva.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/el+turco.jpg",
      "estado": "finalizada",
      "id": 1759547886013,
      "createdAt": "2025-10-04T03:18:06.013Z",
      "updatedAt": "2025-10-12T01:09:31.363Z"
    },
    {
      "titulo": "Amar, donde el amor teje sus redes",
      "genero": "Romance",
      "capitulos": 90,
      "año": 2025,
      "descripcion": "Estrella Contreras, una madre soltera que lucha por criar a su hija Azul, regresa a su pueblo natal tras la muerte de su padre, donde conoce a Fabián Bravo, un padre viudo y pescador que lucha por recuperar la custodia de su hija Yazmín.",
      "pais": "México",
      "imagen": "https://f005.backblazeb2.com/file/120000/tvalacarta/amar+donde+el+amor+teje+sus+redes.jpg",
      "estado": "finalizada",
      "id": 1759548453473,
      "createdAt": "2025-10-04T03:27:33.473Z",
      "updatedAt": "2025-10-04T03:27:33.473Z"
    },
    {
      "titulo": "Amor en blanco y negro ES (Siyah Beyaz Ask)",
      "genero": "Romance",
      "capitulos": 64,
      "año": 2017,
      "descripcion": "Amor en Blanco y Negro novela turca es protagonizada por Ferhat Aslan, un joven que tiene un empleo que no todos pueden cumplir. Él es un asesino que trabaja para Namik, quien es su tío. Namik es el líder de los Emirham. La otra protagonista de esta serie es Asli Cinar, una neurocirujana que adora su empleo. Un día, no regresará a casa y será secuestrada por sus habilidades con el bisturí. Tendrá que salvarle la vida a un hombre al que Ferhat agredió. Sorprendida por los hechos, se convertirá en testigo de ese crimen, y reconocerá al infame Namik Emirham.\n\nSerá allí cuando Namik desarrolle desconfianza hacia la mujer, y es que además de ser un mafioso, es uno de los benefactores más importantes del hospital en dónde trabaja Asli. Namik le dará la misión a Ferhat de asesinar a la testigo, pero no podrá completarla, y le ofrecerá a Asli la opción de morir o contraer matrimonio con él. Resultará que el hermano de nuestra protagonista es policía, y está investigando casos de corrupción, en los que se incluye a los Emirham. Se llevará a cabo la boda, pero Namik jamás creerá que el amor floreció entre su sobrino y la neurocirujana.\n\nSeguirán con su matrimonio falso en Amor en Blanco y Negro serie turca, y poco a poco, Asli dejará de sentir miedo hacia Ferhat.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/amor+en+blanco+y+negro+2.jpg",
      "estado": "finalizada",
      "id": 1759548589366,
      "createdAt": "2025-10-04T03:29:49.366Z",
      "updatedAt": "2025-10-12T01:07:40.100Z"
    },
    {
      "titulo": "Amor perfecto",
      "genero": "Romance",
      "capitulos": 60,
      "año": 2023,
      "descripcion": "Amor perfecto novela brasileña, Mare es una joven visionaria, regresa a su pueblo natal en 1934 para tomar las riendas del hotel familiar. Sus sueños se ven truncados cuando su padre, cegado por los prejuicios, la obliga a casarse con Gaspar, un hombre malvado y sin escrúpulos. La ambición desmedida de Gilda, la madrastra de Mare, la lleva a conspirar con Gaspar para deshacerse de Leonel, el padre de Mare, y culpar a la joven de su muerte.\n\nMare es encarcelada injustamente y da a luz en la cárcel. Tras ocho años en prisión, finalmente cumple su condena en el año 1942, sale de prisión con un solo objetivo, vengarse de quienes la traicionaron y recuperar a su hijo perdido.\n\nEn su camino, Mare se reencuentra con Orlando, un médico que la amó en el pasado y que ahora está dispuesto a luchar por ella. Juntos, se enfrentan a los poderosos de Sao Jacinto. Mientras tanto Marcelino, es hijo de Orlando y Mare, se ha criado en un monasterio, a cargo de Fray León, quien se ha convertido en una figura paterna para el joven.\n\nGilda se ha convertido en una mujer poderosa e influyente, Mare hará todo en sus manos para recuperar su vida, reencontrarse con su hijo y vengarse de aquellos que le hicieron daño. Amor perfecto telenovela brasileña. ",
      "pais": "Brasil",
      "imagen": "https://f005.backblazeb2.com/file/120000/tvalacarta/e7dWk4egyN4MvtB1y1HROZIHI.jpeg",
      "estado": "finalizada",
      "id": 1759548723639,
      "createdAt": "2025-10-04T03:32:03.639Z",
      "updatedAt": "2025-10-04T03:32:03.639Z"
    },
    {
      "titulo": "Holding",
      "genero": "Drama",
      "capitulos": 20,
      "año": 2024,
      "descripcion": "La campeona mundial de apnea, Aydan Türker, se prepara para una nueva inmersión récord. Aydan no solo es una atleta exitosa; es una mujer emprendedora que ha entregado su corazón a los niños. Todos los ingresos que obtiene de su gran pasión, el buceo, los dedica a mantener en pie las escuelas que fundó, incluyendo aquellas que atienden a niños con necesidades educativas especiales. Uno de esos colegios le traerá a su vida a F?rat y al comisario Kerem. Uno de los principales patrocinadores de Aydan Türker es Alt?nordu Holding, uno de los grupos empresariales más grandes del país. Bajo el liderazgo de Osman Alt?nordu y con el impulso de sus hijas Ebru, Ceyda y Sema, la empresa crece día a día con una imagen impecable. Sin embargo, detrás de ese brillante rostro se esconden luchas de poder, conflictos familiares y un pasado oscuro. Como todo gran poder, Alt?nordu Holding también tiene grandes enemigos. Su adversario más peligroso es Mahir Beyo?lu, cómplice de aquel pasado oscuro. El viejo amigo y compañero de Osman, Zakir, tendrá que jugar con astucia para detener a Mahir. En medio de este caos, Osman descubre que padece una enfermedad incurable. Al borde de una ruptura total, se encuentra frente a la necesidad de enfrentarse al secreto mejor guardado de su vida: su hija, y con ello, a toda su familia. Para esa confrontación, Osman elige el mismo día en que Aydan romperá su nuevo récord. Ese día marcará el inicio de un viaje sin retorno para todos.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/120000/tvalacarta/holding.jpeg",
      "estado": "finalizada",
      "id": 1759548810927,
      "createdAt": "2025-10-04T03:33:30.927Z",
      "updatedAt": "2025-10-04T03:41:48.825Z"
    },
    {
      "titulo": "La realeza",
      "genero": "Romance",
      "capitulos": 8,
      "año": 2025,
      "descripcion": "'La realeza' presenta una historia romántica que trasciende clichés. La trama gira en torno al encuentro entre Sophia, una empresaria moderna, y Aviraaj, un príncipe con un legado en decadencia. Él posee una mansión ancestral que necesita ser restaurada, pero carece de los fondos necesarios. Ella ve en ese lugar la oportunidad perfecta para lanzar su nueva empresa. Así, ambos deciden colaborar, aunque sus diferencias culturales y personales amenazan con arruinar todo. \n\nEl encantador príncipe Aviraaj conoce a Sofía, una empresaria hecha a sí misma, y los mundos de la realeza y las startups chocan en una apasionada tormenta de romance y ambición",
      "pais": "India",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/la+realeza.jpg",
      "estado": "finalizada",
      "id": 1759548887343,
      "createdAt": "2025-10-04T03:34:47.343Z",
      "updatedAt": "2025-10-12T01:10:39.531Z"
    },
    {
      "titulo": "Valentina, mi amor especial",
      "genero": "Romance",
      "capitulos": 39,
      "año": 2024,
      "descripcion": "En Valentina, mi amor especial, Herrera encarna a una joven en el espectro autista, quien es un genio en el mundo de la tecnología. El papel masculino principal es interpretado por Mauricio Novoa, un actor mexicano en ascenso, conocido por sus actuaciones en las últimas telenovelas producidas en Miami.\n\nValentina ha crecido protegida de la sociedad por su madre adoptiva en el pequeño pueblo de Chiquilistlán, donde destacó académicamente. Mudarse a la gran ciudad de Guadalajara después de que su madre fallece en un accidente será muy difícil, ya que se enfrentará lo peor y lo mejor de la humanidad: se enamorará por primera vez, conocerá nuevos amigos, pero también la envidia y los celos de aquellos que eligen no aceptarla.",
      "pais": "México",
      "imagen": "https://f005.backblazeb2.com/file/120000/tvalacarta/valentina+mi+amor+especial.jpeg",
      "estado": "finalizada",
      "id": 1759549070923,
      "createdAt": "2025-10-04T03:37:50.923Z",
      "updatedAt": "2025-10-04T03:37:50.923Z"
    },
    {
      "titulo": "Bahar",
      "genero": "Drama",
      "capitulos": 109,
      "año": 2024,
      "descripcion": "Hace 20 años, se graduó de la facultad de medicina pero decidió ser ama de casa en lugar de seguir la carrera de medicina. Está casada con el exitoso cirujano Timur Yavuzoglu y ha dedicado su vida a su marido y a sus hijos. La aparentemente feliz familia Yavuzoglu está conmocionada por la enfermedad de Bahar. El médico de Bahar, Evren, está decidido a salvarla y dice que la única solución es un trasplante de hígado. ¡El único hígado compatible de la familia pertenece a Timur! Para la familia Yavuzoglu, que se somete a una prueba con un umbral importante, nada volverá a ser lo mismo…",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Bahar2.jpg",
      "estado": "transmision",
      "id": 1759906090446,
      "createdAt": "2025-10-08T06:48:10.446Z",
      "updatedAt": "2025-10-12T00:58:39.140Z"
    },
    {
      "titulo": "Amanecer",
      "genero": "Romance",
      "capitulos": 67,
      "año": 2025,
      "descripcion": "La telenovela gira en torno a Leonel Carranza (Fernando Colunga), un hombre que vive en Villa Escarlata y es propietario de la hacienda Montoro. Su rutina cambia por completo cuando su esposa (interpretada por Andrea Legarreta) y su mejor amigo desaparecen juntos, dejándolo lleno de ira y desilusión al punto de darlos por muertos, lo cual podría traerle graves consecuencias en el futuro.\n\nAunque intenta rehacer su vida, sufre una nueva tragedia: su hija Paulina pierde la vida en un incendio. Leonel jura vengarse, convencido de que no se trató de un accidente, sino de un acto provocado por la familia Palacios.\n\nPara saciar su sed de revancha, obliga a Alba Palacios (Livia Brito) a casarse con él. Ella accede al matrimonio con tal de apoyar a sus padres, quienes atraviesan una fuerte crisis económica.\n\nPronto, la joven se ve envuelta en una relación sin afecto y bajo las amenazas de Atocha (Ana Belena), la hermana de Leonel. Ella es una mujer despiadada y ambiciosa, que desea quedarse con la hacienda Montoro, sin importar las consecuencias.\n\nA medida que Alba intenta ganarse el respeto de los habitantes de Villa Escarlata y de la finca, Leonel comienza a cuestionar su odio, pues ella parece todo menos culpable de la tragedia que marcó su vida.\n\nLa tensión aumenta con la llegada de Sebastián Peñalosa (Daniel Elbittar), un médico que, bajo el argumento de atender la salud de Leonel, comienza a acercarse a Alba con una fijación peligrosa creando un tríangulo romántico muy potente. Además, él guarda un misterio que podría cambiar el rumbo de la protagonista.\n\nA lo largo de la trama, Leonel y Alba experimentarán una mezcla de dolor, deseo y confusión, que podría evolucionar en una conexión profunda, mientras que quienes los rodean intentarán alimentar el rencor entre ellos.",
      "pais": "México",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Amanecer+2.jpg",
      "estado": "transmision",
      "id": 1759906188156,
      "createdAt": "2025-10-08T06:49:48.156Z",
      "updatedAt": "2025-10-12T00:57:45.117Z"
    },
    {
      "titulo": "Amor y Esperanza",
      "genero": "Drama",
      "capitulos": 106,
      "año": 2022,
      "descripcion": "Cuenta la historia de Ali Tahir, quien nació en Tesalónica en 1893 y cayó mártir en Sakarya en 1921. Sin embargo, ocurrió un evento milagroso cuando Ali abrió los ojos nuevamente. Desde ese día ha vivido 100 años sin envejecer un solo día. Sin embargo, después de todo lo que ha pasado, Ali decide acabar con su vida. \n\nZeynep, que trabajó en condiciones difíciles en Edremit y se preparó para el examen universitario, finalmente se convirtió en la quinta en Turquía y ganó el departamento de derecho de la universidad de su elección. Zeynep, que sueña con mudarse a Estambul con su madre para ir a la universidad, desconoce la desgracia de su madre Gönül.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Amor+y+Esperanza.jpg",
      "estado": "transmision",
      "id": 1759906259323,
      "createdAt": "2025-10-08T06:50:59.323Z",
      "updatedAt": "2025-10-12T00:58:14.693Z"
    },
    {
      "titulo": "Corazón Negro",
      "genero": "Drama",
      "capitulos": 53,
      "año": 2024,
      "descripcion": "A una edad temprana, Sumru abandonó a sus gemelos recién nacidos sin ni siquiera llegar a tenerlos en sus brazos. Se mudó a Capadocia con su madre, Nihayet, donde se casó con Samet ?ansalan, un hombre rico y prominente en la industria del turismo de la ciudad. Tuvieron dos hijos. Samet también tenía un hijo llamado Cihan de su primer matrimonio.\n\nCriados en circunstancias difíciles, los gemelos, Nuh y Melek, alimentados por el odio hacia la madre que los abandonó, descubren la identidad de su madre. Llegan a Capadocia para reclamar lo que creen que les corresponde y enfrentarse a su madre. Sorprendida, Sumru lo niega todo, pero es consciente de que es solo cuestión de tiempo antes de que se revele el secreto que ha escondido. Las cosas también son complicadas en la mansión de los ?ansalan. La cuñada viuda de Sumru, Hikmet, vive en la mansión con su hija Sevilay. Su objetivo es casar a su hija con su sobrino Cihan y asegurar su futuro. Samet, también apoya este plan.\n\nMientras los gemelos persiguen lo que creen que les corresponde de su madre, Melek se cruza en el camino de Cihan, y Nuh encuentra a Sevilay. Desde el primer momento, Cihan se ve profundamente afectado por Melek y no puede sacársela de la cabeza, incluso cuando se encuentra al borde de un matrimonio forzado. Mientras tanto, Sevilay intenta oponerse al matrimonio por su cuenta, y se cruza en su camino Nuh.\n\nAunque Sumru intenta mantener a los hijos que rechazó alejados de su familia, Melek y Nuh gradualmente se infiltrarán tanto en la familia como en los corazones de Cihan y Sevilay. Mientras los problemas de salud de Samet preocupan a toda la familia, su viejo enemigo, Tahsin, espera en la sombra, listo para vengarse del pasado.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/corazon+negro+-+siyah+kalp.jpg",
      "estado": "transmision",
      "id": 1759994099585,
      "createdAt": "2025-10-09T07:14:59.585Z",
      "updatedAt": "2025-10-12T01:08:26.084Z"
    },
    {
      "titulo": "El olor de un niño",
      "genero": "Drama",
      "capitulos": 36,
      "año": 2017,
      "descripcion": "eyno, una joven enfermera en Ámsterdam queda embarazada del hombre al que ama, soñando con formar una familia feliz. Pero un momento de ira cambia su destino para siempre, alejándola de su hijo y entrelazando su vida con la poderosa familia Akba?, líder del sector energético en Turquía. Mientras los conflictos de poder y las tensiones familiares sacuden a los Akba?, Zeyno, marcada por la pérdida, se transforma en una mujer fuerte y decidida. Esta es la historia de una madre que lucha por recuperar a su hijo, de un hombre que enfrenta su conciencia, y de secretos que podrían cambiarlo todo.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/el+olor+de+un+ni%C3%B1o+2.jpg",
      "estado": "finalizada",
      "id": 1759994252937,
      "createdAt": "2025-10-09T07:17:32.937Z",
      "updatedAt": "2025-10-12T01:08:50.076Z"
    },
    {
      "titulo": "Velvet el nuevo imperio",
      "genero": "Drama",
      "capitulos": 38,
      "año": 2025,
      "descripcion": "“Velvet, el nuevo imperio” se centra en Ana Velázquez, una talentosa diseñadora mexicana que llega a la empresa de moda Velvet en Nueva York tras perder a su madre.\n\nAllí, se enamora de Alberto Márquez, heredero de la compañía, pero su relación se ve frustrada por intrigas y un matrimonio por conveniencia con Cristina Ortegui.\n\nEntonces, eventualmente, Alberto desaparece y Ana continúa su carrera mientras espera a su hijo.\n\nTres años después, resulta que el destino los reúne nuevamente. Así, superando mentiras y obstáculos, ambos recuperan su amor y fundan una nueva empresa que celebra el legado de Velvet y su futuro en familia...",
      "pais": "Estados Unidos",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Velvet+el+nuevo+imperio+2.jpg",
      "estado": "transmision",
      "id": 1760000176983,
      "createdAt": "2025-10-09T08:56:16.983Z",
      "updatedAt": "2025-10-12T01:06:34.820Z"
    },
    {
      "titulo": "Kuma la otra esposa",
      "genero": "Drama",
      "capitulos": 81,
      "año": 2025,
      "descripcion": "Una joven acusada injustamente de asesinato debe convertirse en la segunda esposa (Kuma) del hermano de la víctima. Ceylan es una hija amable y cumplidora, pero cuando su padre intenta venderla como segunda esposa o “kuma”, ella huye. En su camino se encuentra con Karan, un joven empresario adinerado que acoge a Ceylan bajo su protección. Ambos se enamoran, pero cuando Ceylan es acusada falsamente del asesinato del hermano de Karan, el amor se transforma en odio. Karan se casa con la viuda de su hermano fallecido y obliga a Ceylan a convertirse en su kuma. Atrapada en una casa donde todos la odian y sin poder regresar a casa, la única esperanza de Ceylan es demostrar su inocencia y, tal vez, recuperar el amor de Karan.\n\n“Kuma” te atrapa de inmediato con una historia impactante: Ceylan, una joven inocente, es acusada injustamente de un asesinato que no cometió. Para escapar de un destino cruel, se ve forzada a casarse con Karan, el hermano de la supuesta víctima, convirtiéndose en su segunda esposa. Desde el primer episodio, la telenovela te sumerge en un torbellino de emociones, donde la lucha por la verdad y la supervivencia se entrelazan. ¿Cómo logrará Ceylan probar su inocencia mientras enfrenta un matrimonio impuesto y un entorno lleno de rechazo?\n\nLa tensión sube cuando Ceylan entra en la vida de Karan y su primera esposa, Sema, quien la desprecia y la considera una rival. Los enfrentamientos entre ellas son solo la punta del iceberg: la familia guarda secretos oscuros que se revelan poco a poco, dejando más preguntas que respuestas. Cada capítulo te mantiene expectante, descubriendo las verdaderas intenciones de los personajes y las traiciones que acechan en cada esquina. ¿Qué enigmas saldrán a la luz y cómo cambiarán el rumbo de la vida de Ceylan?\n\n“Kuma” no solo es drama; también te ofrece una poderosa historia de amor y superación. Mientras Ceylan enfrenta hostilidad y desafíos, encuentra apoyo en los lugares más inesperados y comienza a florecer un romance que desafía todas las probabilidades. A lo largo de la serie, la ves transformarse de una mujer vulnerable a una luchadora decidida, lista para reclamar su lugar en el mundo. ¿Podrá el amor sobrevivir en un entorno tan hostil y llevará a Ceylan a encontrar su verdadera fuerza?\n\nCon los majestuosos paisajes del este de Turquía como telón de fondo, “Kuma” es un espectáculo visual que acompaña una narrativa emocionante. La telenovela combina temas profundos como la injusticia y la resiliencia con giros inesperados que te dejarán ansioso por el próximo episodio. Es una invitación a seguir el viaje de Ceylan hacia la redención, lleno de misterio, pasión y esperanza. Si buscas una historia que te haga sentir, reflexionar y mantenerte al borde del asiento, “Kuma” te está esperando para que descubras qué pasa después. ",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Kuma+La+otra+esposa.jpg",
      "estado": "transmision",
      "id": 1760000320843,
      "createdAt": "2025-10-09T08:58:40.843Z",
      "updatedAt": "2025-10-12T01:03:19.396Z"
    },
    {
      "titulo": "Cautiva por amor",
      "genero": "Drama",
      "capitulos": 70,
      "año": 2025,
      "descripcion": "Jazmín, secuestrada por el terrateniente Remigio Fuentes, sobrevive esclavitud y abusos. Años después, regresa al rancho buscando venganza a través de su hijo Fernando, pero conoce a Santiago, un peón que finge ser policía.",
      "pais": "México",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/cautiva+por+amor.jpg",
      "estado": "finalizada",
      "id": 1760022250390,
      "createdAt": "2025-10-09T15:04:10.390Z",
      "updatedAt": "2025-10-12T01:08:04.036Z"
    },
    {
      "titulo": "La chica del momento",
      "genero": "Romance",
      "capitulos": 21,
      "año": 2023,
      "descripcion": "La trama, ambientada en los años 50, gira en torno a Beatriz (Duda Santos, de Renacer), quien ha crecido creyendo que su madre Clarice (Carol Castro de Huérfanos de su tierra) la abandonó cuando tenía cuatro años. Pero 16 años después descubre el paradero de su madre y se entera de que no la abandonó sino que perdió la memoria en un accidente. Pero Beatriz también descubrirá que otra joven, Bia (Maisa), ha tomado su lugar e iniciará un viaje lleno de obstáculos y de reconciliación con el pasado.",
      "pais": "Brasil",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/la+chica+del+momento.jpg",
      "estado": "transmision",
      "id": 1760022506646,
      "createdAt": "2025-10-09T15:08:26.646Z",
      "updatedAt": "2025-10-12T01:09:52.979Z"
    },
    {
      "titulo": "La encrucijada",
      "genero": "Drama",
      "capitulos": 28,
      "año": 2025,
      "descripcion": "César Bravo vuelve de México, casi treinta años después, a la tierra donde nació cuando ya nadie se acuerda del apellido de su padre ni de las trágicas circunstancias que rodearon su muerte y la de sus abuelos. Aunque su aspecto de turista aventurero no lo delata, tiene muy claro a lo que viene.\n\nNo hallará paz hasta que no consiga hacer justicia y meter en la cárcel a Octavio Oramas, el hombre que se apropió de la historia familiar de su padre y de todo lo que le pertenecía para crear su propio imperio. Con lo que no cuenta César es que en su camino se cruzará Amanda Oramas, la niña de los ojos de su enemigo, de quien se enamorará perdidamente. Un cruce de caminos fortuito que marca un antes y un después en la vida de dos familias rivales. ¿Qué vencerá: el amor o la venganza?[",
      "pais": "España",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/La+encrucijada.jpg",
      "estado": "transmision",
      "id": 1760022601366,
      "createdAt": "2025-10-09T15:10:01.366Z",
      "updatedAt": "2025-10-12T01:03:45.252Z"
    },
    {
      "titulo": "Leyla",
      "genero": "Drama",
      "capitulos": 32,
      "año": 2024,
      "descripcion": "Después de perderlo todo, Leyla renació entre las sombras. La inocencia se quebró el día en que su padre cayó rendido ante los encantos de Nur, la mujer que alguna vez fingió cuidar de su familia… y que ahora, convertida en su madrastra, oculta más de un secreto detrás de su sonrisa. Cuando el amor ciega, la tragedia abre los ojos. Y Leyla lo aprendió demasiado tarde.\n\nAños más tarde, regresa bajo una nueva identidad. Nadie sospecha que esa talentosa chef llamada Ela es en realidad la hija que vio su hogar convertirse en ruinas. Ni siquiera Nur, quien ahora vive rodeada de lujos junto a su nuevo amante, una leyenda caída del fútbol. Pero el destino no olvida… y tampoco perdona.\n\nEl reencuentro con Civan —el hijo adoptivo de Nur y antiguo amor de infancia de Leyla— desata una tormenta de emociones, mentiras y heridas que jamás cerraron. A medida que las piezas del pasado empiezan a encajar, las preguntas se multiplican como cuchillos en la espalda:\n\n¿Puede la venganza sobrevivir al amor? ¿Quién es realmente víctima… y quién el verdadero villano? ¿Hasta dónde está dispuesta a llegar Leyla para hacer justicia… o para destruirse en el intento? En un juego de identidades, pasiones ocultas y verdades peligrosas… nadie sale ileso.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Leyla+Hayat.jpg",
      "estado": "transmision",
      "id": 1760022763950,
      "createdAt": "2025-10-09T15:12:43.950Z",
      "updatedAt": "2025-10-12T01:05:04.308Z"
    },
    {
      "titulo": "Manía de ti",
      "genero": "Drama",
      "capitulos": 111,
      "año": 2024,
      "descripcion": "Narra la historia de Luna (Moreira) y Viola (Gabz), dos chicas que se convierten en amigas cuando la segunda se instala en Angra dos Reis junto a su marido Mavi. Con el tiempo, Viola se destaca en la gastronomía, misma área de Luna y también se involucra con Rudá (Chay Suede), el hombre al que Luna ama. Años después, Viola se ha convertido en una éxitosa chef, mientras Luna perdió todo lo que tenía. Ambas rivales se unen para intentar liberar a Rudá de la cárcel, tras una trampa ocasionada por Mavi.",
      "pais": "Brasil",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/mania+de+ti2.jpg",
      "estado": "finalizada",
      "id": 1760022873950,
      "createdAt": "2025-10-09T15:14:33.950Z",
      "updatedAt": "2025-10-12T01:11:03.187Z"
    },
    {
      "titulo": "Monteverde",
      "genero": "Drama",
      "capitulos": 81,
      "año": 2025,
      "descripcion": "‘Monteverde’ es un melodrama donde los habitantes de este pequeño pueblo vivirán el amor, la traición y la redención mientras descubren el amor y la verdad.\n\nMonteverde' narra la vida de Carolina (África Zavala), que cambiará radicalmente al ser acusada de un fraude que cometió su marido. Por ello debe salir huyendo con su hijo Andrés (Juniel García) y adoptar la identidad de Celeste, su hermana melliza que es monja, para refugiarse en dicho pueblo, pero todo se complicará cuando conoce a Oscar León (Gabriel Soto).\n\nAlejandro Ibarra, Cynthia Klitbo, Mario Morán, Arturo Carmona, Marialicia Delgado, Oscar Bonfiglio, Fernanda Urdapilleta, Aldo Guerra, Ana Patricio Rojo, Christian Ramos, Ara Saldívar, Rodrigo Ríos, Juniel García, Manuel Riguezza, Marcela Guzmán, Ana Karen Parra, Ximena Martínez, Fernanda Bernal y Claudia Acosta complementan el reparto.",
      "pais": "México",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/monte+verde.jpg",
      "estado": "transmision",
      "id": 1760023005510,
      "createdAt": "2025-10-09T15:16:45.510Z",
      "updatedAt": "2025-10-12T01:15:11.459Z"
    },
    {
      "titulo": "El padre (Ben Bu Cihana)",
      "genero": "Drama",
      "capitulos": 224,
      "año": 2022,
      "descripcion": "Cezayir Türk, un asesino del servicio secreto que sirvió a su país, se venga de su hermano, quien fue saboteado. Empieza una nueva vida demostrando que murió por el bien del estado y la seguridad de su familia. A raíz de una lesión sufrida durante una de sus operaciones en el extranjero, conoce a Firuze, uno de los médicos sin fronteras. Aunque extraña a su esposa e hijos, en el fondo de su corazón sabe que volver con ellos es casi imposible; sin embargo, esta palabra no está en su vocabulario. Se enamora de Firuze para formar una familia; mientras tanto, queda expuesto y tiene que regresar a Estambul. Ni su familia secundaria lo sabe, ni la familia original, que lloró y rezó en su cementerio, siguió los recientes acontecimientos que le sucedieron. Estambul, por otro lado, no es el mismo lugar de donde partió. Hará todo lo posible por luchar contra las fuerzas extranjeras, aunque también deberá dividir su energía entre dos mujeres que lo aman.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/el+padre.jpeg",
      "estado": "finalizada",
      "id": 1760023297743,
      "createdAt": "2025-10-09T15:21:37.743Z",
      "updatedAt": "2025-10-12T01:09:15.667Z"
    },
    {
      "titulo": "Karsu",
      "genero": "Drama",
      "capitulos": 215,
      "año": 2025,
      "descripcion": "Karsu, el amor de madre nunca se rinde, una serie turca que cuenta la conmovedora historia de una madre resiliente a la que la vida la pone a prueba cuando cree perder a uno de sus hijos y  cuando sufre la infidelidad de su esposo. Un drama que describe la entereza de una mujer frente a las adversidades y que habla del carácter y valentía de una mujer que consigue ser  independiente para asegurar el bienestar de sus hijos. Una historia de lucha, sacrificio y esperanza.\n\nKarsu, no ha tenido una buena relación con su madre y decide alejarse de su familia para casarse con Reha, un hombre al que no ama, y en donde no encuentra felicidad, sin embargo, lucha por mantener su matrimonio por el bien de sus tres hijos.\n\nLas cosas para Karsu se volverán aún más dramáticas cuando, por un descuido de su madre, su hijo Kuzey desaparece,  debido a esto, la relación con su esposo se convierte en un total infierno, pues ahora el único propósito en su vida es encontrar a su hijo. Pasa el tiempo hasta que tres años después de búsqueda infructuosa, da con su paradero.  Ella, en su amor de madre, hace todo lo posible para traerlo de regreso a casa hasta que finalmente lo logra, pero esto hace que su hijo despierte una intensa ira en contra de ella, pues lo separa de Ozan, quien ha sido el hombre que lo ha cuidado durante estos tres años y a quien considera su padre. ¿Logrará ganarse el amor de su hijo?\n\nParalelo a esta situación, Karsu es engañada por su esposo, sufriendo una terrible decepción que la hace tomar la decisión de abandonar su hogar junto a sus hijos. Desesperada, sin tener un lugar a donde ir, se ve obligada a regresar a la casa de su madre, a quien no ve desde hace años, con el único deseo de reconstruir su vida.\n\nOzan se siente atraído por Karsu y su pasión va creciendo con el pasar de los días, a esto se suma al amor que siente por Kuzey, a quien ve como su hijo.\n\nLas cosas se complicarán más cuando Karsu conoce a Atilla, un mafioso que se presenta como escritor, y que  también se siente atraído por ella. Al mismo tiempo, su marido, Reha, de quien está intentando divorciarse, ha prometido hacerle la vida imposible, dejándola sin apoyo económico, además de negarse  a darle el divorcio. ¿Podrá  encontrar el amor?\n\nLa protagonista de esta historia vivirá un viaje de resiliencia y renovación, mientras enfrenta los desafíos de reconstruir su vida y dejar atrás un pasado agobiante.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Karsu%2C+La+Fuerza+de+Una+Madre.jpg",
      "estado": "transmision",
      "id": 1760023410453,
      "createdAt": "2025-10-09T15:23:30.453Z",
      "updatedAt": "2025-10-12T01:02:54.740Z"
    },
    {
      "titulo": "La esclava madre",
      "genero": "Drama",
      "capitulos": 125,
      "año": 2016,
      "descripcion": "Juliana es fruto de la violencia que su madre, Luena, sufrió durante la travesía oceánica a bordo de un navío mercante que tenía como mercancía esclavos. Al cumplir 18 años y conocer la verdad sobre su pasado, Juliana se jura a si misma que jamás dejará que un hombre blanco la toque. Es en ese preciso momento de desesperación que conoce al joven portugués Miguel, un viajante en búsqueda de respuestas sobre el misterio que involucra a la muerte de sus padres.\n\nMiguel será el gran amor de su vida, pero además despertará el interés de Maria Isabel, hija del coronel Custódio. Con la complicidad de su fiel y sarcástica mucama Esméria, Maria Isabel no medirá sus esfuerzos para perjudicar a Juliana, que jamás aceptará el desacato de una esclava.\n\nJuliana también enfrentará un obstáculo muy poderoso: el Comendador Almeida. Al casarse con Teresa por un acuerdo que permitiría sacar a su familia de la ruina financiera, Almeida se convierte en el nuevo señor del Ingenio del Sol. El casamiento de Teresa y Almeida fue el comienzo de una terrible etapa en la vida de Juliana, ya que su nuevo amo se quedará completamente obcecado por ella.\n\nJuliana y Miguel vivirán juntos una intensa historia de amor, y enfrentarán a enemigos poderosos y obstáculos aparentemente difíciles de sobrellevar, como el prejuicio de una época que vive a la sombra de la esclavitud.",
      "pais": "Brasil",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/la+esclava+madre.jpg",
      "estado": "transmision",
      "id": 1760023539558,
      "createdAt": "2025-10-09T15:25:39.558Z",
      "updatedAt": "2025-10-12T01:10:21.787Z"
    },
    {
      "titulo": "Carpinti",
      "genero": "Romance",
      "capitulos": 4,
      "año": 2025,
      "descripcion": "Tras recibir el corazón de Melike Alkan, Asli se adentra en un mundo de dolor, poder y amor prohibido, mientras todos se preguntan si la muerte de Melike fue accidente o asesinato.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Carpinti.jpeg",
      "estado": "transmision",
      "id": 1760118692800,
      "createdAt": "2025-10-10T17:51:32.800Z",
      "updatedAt": "2025-10-12T01:02:15.180Z"
    },
    {
      "titulo": "Betty la fea,la historia continúa",
      "genero": "Romance",
      "capitulos": 18,
      "año": 2024,
      "descripcion": "Betty la fea,la historia continua novela colombiana, Dos décadas después de conquistar el corazón de Armando Mendoza y transformar el mundo de la moda, Beatriz Pinzón Solano, mejor conocida como \"Betty la fea\", se enfrenta a nuevos desafíos en su vida personal y profesional.\n\nConvertida en una reconocida empresaria y diseñadora de moda, Betty lidera Ecomoda con mano firme, inspirando a las mujeres con sus creaciones y su visión innovadora. Sin embargo, su matrimonio con Armando, aunque lleno de amor, se ve amenazado por las inseguridades del pasado y la aparición de nuevos rivales en el mundo de los negocios.\n\nAl mismo tiempo, Betty debe lidiar con las nuevas generaciones en Ecomoda. Las jóvenes diseñadoras, influenciadas por las tendencias digitales y la cultura del influencer, desafían la visión tradicional de Betty sobre la moda, generando tensiones y debates en la empresa.\n\nEn medio de estos retos, Betty encuentra apoyo en sus fieles amigos, Marcela y Hugo, quienes la acompañan en sus aventuras y le ofrecen consejos sabios. Además, descubre nuevas aliadas en algunas de las jóvenes diseñadoras que, a pesar de sus diferencias, reconocen el talento y la experiencia de Betty. Betty la fea,la historia continúa telenovela colombiana.",
      "pais": "Colombia",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Betty+la+fea%2Cla+historia+contin%C3%BAa+2.png",
      "estado": "finalizada",
      "id": 1760119057180,
      "createdAt": "2025-10-10T17:57:37.180Z",
      "updatedAt": "2025-10-12T01:00:50.220Z"
    },
    {
      "titulo": "La Venganza de Analía 2",
      "genero": "Drama",
      "capitulos": 67,
      "año": 2025,
      "descripcion": "En una jugada maquiavélica, logra salir de la cárcel para volver a la política, su objetivo es claro: castigar a Analía y convertirse en el presidente de Colombia. Para evitar esto y proteger a los suyos, Analía pondrá en riesgo su vida y se enfrentará a Paulina Peña, aliada de Mejía y asesina profesional.",
      "pais": "Colombia",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Venganza-de-Analia-23.jpg",
      "estado": "finalizada",
      "id": 1760119856700,
      "createdAt": "2025-10-10T18:10:56.700Z",
      "updatedAt": "2025-10-12T01:07:05.252Z"
    },
    {
      "titulo": "Leke",
      "genero": "Romance",
      "capitulos": 30,
      "año": 2019,
      "descripcion": "Leke novela turca tiene como personaje principal a Yasemin, quien se mudó a Alemania y tuvo muchos altibajos. A pesar de ello, no tuvo miedo de embarcarse en una aventura. Lograría ingresar en la escuela de leyes, y deberá trabajar medio tiempo para pagar sus estudios.\n\nDescubriremos que tiene un hermano con discapacidad auditiva,y su única meta es lograr recibir la custodia del joven, quien ha tenido que crecer en un orfanato porque sus padres no quisieron hacerse cargo de él. Igualmente, está ahorrando dinero para costear la operación de su hermano. Conoceremos a otro personaje llamado Cem, quien es el mayor de dos hijos de una familia acaudalada. Su infancia fue traumática, ya que fue testigo de un incidente que hizo que sus padres se divorciaran. Ahora es un hombre talentoso para los negocios, pero su vida personal es otra. No confía fácilmente en las personas y tiene cierto recelo con las mujeres. Sin esperar conocerse, tanto Yasemin como Cem tendrán un encuentro que se producirá en un evento que organizó la compañía de este joven apuesto.\n\nNinguno buscaba este encuentro en Leke serie turca, el cual será el desencadenante de una serie de sucesos que debes descubrir.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Leke.jpg",
      "estado": "finalizada",
      "id": 1760120038067,
      "createdAt": "2025-10-10T18:13:58.067Z",
      "updatedAt": "2025-10-12T01:04:39.012Z"
    },
    {
      "titulo": "Manía de ti",
      "genero": "Drama",
      "capitulos": 111,
      "año": 2024,
      "descripcion": "Narra la historia de Luna (Moreira) y Viola (Gabz), dos chicas que se convierten en amigas cuando la segunda se instala en Angra dos Reis junto a su marido Mavi. Con el tiempo, Viola se destaca en la gastronomía, misma área de Luna y también se involucra con Rudá (Chay Suede), el hombre al que Luna ama. Años después, Viola se ha convertido en una éxitosa chef, mientras Luna perdió todo lo que tenía. Ambas rivales se unen para intentar liberar a Rudá de la cárcel, tras una trampa ocasionada por Mavi.",
      "pais": "Brasil",
      "imagen": "https://f005.backblazeb2.com/file/120000/tvalacarta/mania+de+ti2.jpg",
      "estado": "finalizada",
      "id": 1760120912035,
      "createdAt": "2025-10-10T18:28:32.035Z",
      "updatedAt": "2025-10-10T18:28:32.035Z"
    },
    {
      "titulo": "Mehmed Sultán de las Conquistas",
      "genero": "Acción",
      "capitulos": 15,
      "año": 2024,
      "descripcion": "En esta apasionante producción, nos adentramos en el corazón del Imperio otomano, en una época cargada de conquistas y luchas por la justicia, para ser testigos del viaje triunfal del joven sultán Mehmed II, cuya inteligencia y valentía lo guiarán en su camino hacia la grandeza.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Mehmed+Sultan+of+Conquests+2.jpg",
      "estado": "transmision",
      "id": 1760128599656,
      "createdAt": "2025-10-10T20:36:39.656Z",
      "updatedAt": "2025-10-12T01:05:32.420Z"
    },
    {
      "titulo": "Represalias",
      "genero": "Acción",
      "capitulos": 10,
      "año": 2024,
      "descripcion": "Ali Resat, un férreo hombre apegado a sus tradiciones, es liberado tras largos años en prisión gracias a una amnistía. Con la esperanza de reconciliarse con su hijo, quien lo desprecia, y con el deseo de hacer pagar a la mafia todo mal que le hizo, Ali Resat irá en busca de redención... y represalias.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Represalias.jpg",
      "estado": "transmision",
      "id": 1760129254327,
      "createdAt": "2025-10-10T20:47:34.327Z",
      "updatedAt": "2025-10-12T01:06:00.932Z"
    },
    {
      "titulo": "Lazos Rotos (Yalan)",
      "genero": "Drama",
      "capitulos": 95,
      "año": 2024,
      "descripcion": "Yalan novela turca, Melike, una mujer fuerte y resiliente, ha sacrificado 20 años de su vida en prisión para proteger a su hija Elif. Acusada injustamente de un crimen que no cometió, Melike ha soportado el dolor y la soledad con la esperanza de un futuro mejor para su pequeña.\n\nAl fin liberada, Melike regresa a un mundo que ya no reconoce. Su hija Elif ha crecido bajo la tutela de otras personas, y Melike debe luchar para recuperar su lugar en la vida de su hija.\n\nSin embargo, la verdad sobre el crimen que la llevó a prisión no tardará en salir a la luz. Melike se verá envuelta en una red de mentiras, engaños y traiciones que amenazan con destruir su vida y la de su hija.\n\nEn medio de la adversidad, Melike encontrará apoyo en Suna, una joven abogada idealista que cree en su inocencia. Juntas, lucharán por desenmascarar a los verdaderos culpables y restaurar el honor de Melike.\n\nA lo largo de su camino, Melike se enfrentará a poderosos enemigos que no se detendrán ante nada para silenciarla. Deberá utilizar su astucia, su valentía y su determinación para proteger a su hija y descubrir la verdad. Yalan serie turca.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Lazos+Rotos.jpg",
      "estado": "finalizada",
      "id": 1760129966562,
      "createdAt": "2025-10-10T20:59:26.562Z",
      "updatedAt": "2025-10-12T01:04:15.828Z"
    },
    {
      "titulo": "Destino roto",
      "genero": "Drama",
      "capitulos": 121,
      "año": 2022,
      "descripcion": "Melike, que sobrevivió en prisión durante 20 años por el bien de su hija, cayó en medio de una gran mentira cuando fue puesta en libertad. Todas las injusticias y el mal que se le han hecho salen al descubierto ante Melike.",
      "pais": "Turquía",
      "imagen": "https://f005.backblazeb2.com/file/tvalacartaplus/tvalacartaplus/Destino+roto.jpg",
      "estado": "finalizada",
      "id": 1760239390038,
      "createdAt": "2025-10-12T03:23:10.038Z",
      "updatedAt": "2025-10-12T03:23:10.038Z"
    }
  ],
  "settings": {
    "version": "2.1.0",
    "autoSync": true,
    "syncInterval": 300000,
    "enableNotifications": true,
    "maxNotifications": 100,
    "metadata": {
      "totalOrders": 0,
      "totalRevenue": 0,
      "lastOrderDate": "",
      "systemUptime": "2025-10-04T02:55:36.295Z"
    }
  }
};
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123"
};
const initialState = {
  isAuthenticated: false,
  prices: EMBEDDED_CONFIG.prices,
  deliveryZones: EMBEDDED_CONFIG.deliveryZones,
  novels: EMBEDDED_CONFIG.novels,
  notifications: [],
  syncStatus: {
    lastSync: (/* @__PURE__ */ new Date()).toISOString(),
    isOnline: true,
    pendingChanges: 0
  },
  systemConfig: EMBEDDED_CONFIG
};
function adminReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      if (action.payload.username === ADMIN_CREDENTIALS.username && action.payload.password === ADMIN_CREDENTIALS.password) {
        return { ...state, isAuthenticated: true };
      }
      return state;
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    case "UPDATE_PRICES":
      const updatedConfig = {
        ...state.systemConfig,
        prices: action.payload,
        lastExport: (/* @__PURE__ */ new Date()).toISOString()
      };
      return {
        ...state,
        prices: action.payload,
        systemConfig: updatedConfig,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };
    case "ADD_DELIVERY_ZONE":
      const newZone = {
        ...action.payload,
        id: Date.now(),
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      const configWithNewZone = {
        ...state.systemConfig,
        deliveryZones: [...state.systemConfig.deliveryZones, newZone],
        lastExport: (/* @__PURE__ */ new Date()).toISOString()
      };
      return {
        ...state,
        deliveryZones: [...state.deliveryZones, newZone],
        systemConfig: configWithNewZone,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };
    case "UPDATE_DELIVERY_ZONE":
      const updatedZones = state.deliveryZones.map(
        (zone) => zone.id === action.payload.id ? { ...action.payload, updatedAt: (/* @__PURE__ */ new Date()).toISOString() } : zone
      );
      const configWithUpdatedZone = {
        ...state.systemConfig,
        deliveryZones: updatedZones,
        lastExport: (/* @__PURE__ */ new Date()).toISOString()
      };
      return {
        ...state,
        deliveryZones: updatedZones,
        systemConfig: configWithUpdatedZone,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };
    case "DELETE_DELIVERY_ZONE":
      const filteredZones = state.deliveryZones.filter((zone) => zone.id !== action.payload);
      const configWithDeletedZone = {
        ...state.systemConfig,
        deliveryZones: filteredZones,
        lastExport: (/* @__PURE__ */ new Date()).toISOString()
      };
      return {
        ...state,
        deliveryZones: filteredZones,
        systemConfig: configWithDeletedZone,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };
    case "ADD_NOVEL":
      const newNovel = {
        ...action.payload,
        id: Date.now(),
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      const configWithNewNovel = {
        ...state.systemConfig,
        novels: [...state.systemConfig.novels, newNovel],
        lastExport: (/* @__PURE__ */ new Date()).toISOString()
      };
      return {
        ...state,
        novels: [...state.novels, newNovel],
        systemConfig: configWithNewNovel,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };
    case "UPDATE_NOVEL":
      const updatedNovels = state.novels.map(
        (novel) => novel.id === action.payload.id ? { ...action.payload, updatedAt: (/* @__PURE__ */ new Date()).toISOString() } : novel
      );
      const configWithUpdatedNovel = {
        ...state.systemConfig,
        novels: updatedNovels,
        lastExport: (/* @__PURE__ */ new Date()).toISOString()
      };
      return {
        ...state,
        novels: updatedNovels,
        systemConfig: configWithUpdatedNovel,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };
    case "DELETE_NOVEL":
      const filteredNovels = state.novels.filter((novel) => novel.id !== action.payload);
      const configWithDeletedNovel = {
        ...state.systemConfig,
        novels: filteredNovels,
        lastExport: (/* @__PURE__ */ new Date()).toISOString()
      };
      return {
        ...state,
        novels: filteredNovels,
        systemConfig: configWithDeletedNovel,
        syncStatus: { ...state.syncStatus, pendingChanges: state.syncStatus.pendingChanges + 1 }
      };
    case "ADD_NOTIFICATION":
      const notification = {
        ...action.payload,
        id: Date.now().toString(),
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        read: false
      };
      return {
        ...state,
        notifications: [notification, ...state.notifications].slice(0, state.systemConfig.settings.maxNotifications)
      };
    case "MARK_NOTIFICATION_READ":
      return {
        ...state,
        notifications: state.notifications.map(
          (notification2) => notification2.id === action.payload ? { ...notification2, read: true } : notification2
        )
      };
    case "CLEAR_NOTIFICATIONS":
      return {
        ...state,
        notifications: []
      };
    case "UPDATE_SYNC_STATUS":
      return {
        ...state,
        syncStatus: { ...state.syncStatus, ...action.payload }
      };
    case "LOAD_SYSTEM_CONFIG":
      return {
        ...state,
        prices: action.payload.prices,
        deliveryZones: action.payload.deliveryZones,
        novels: action.payload.novels,
        systemConfig: action.payload,
        syncStatus: { ...state.syncStatus, lastSync: (/* @__PURE__ */ new Date()).toISOString(), pendingChanges: 0 }
      };
    case "UPDATE_SYSTEM_CONFIG":
      const newSystemConfig = { ...state.systemConfig, ...action.payload };
      return {
        ...state,
        systemConfig: newSystemConfig
      };
    case "SYNC_STATE":
      return {
        ...state,
        ...action.payload,
        syncStatus: { ...state.syncStatus, lastSync: (/* @__PURE__ */ new Date()).toISOString(), pendingChanges: 0 }
      };
    default:
      return state;
  }
}
const AdminContext = createContext(void 0);
class RealTimeSyncService {
  listeners = /* @__PURE__ */ new Set();
  syncInterval = null;
  storageKey = "admin_system_state";
  configKey = "system_config";
  constructor() {
    this.initializeSync();
  }
  initializeSync() {
    window.addEventListener("storage", this.handleStorageChange.bind(this));
    this.syncInterval = setInterval(() => {
      this.checkForUpdates();
    }, 5e3);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        this.checkForUpdates();
      }
    });
  }
  handleStorageChange(event) {
    if ((event.key === this.storageKey || event.key === this.configKey) && event.newValue) {
      try {
        const newState = JSON.parse(event.newValue);
        this.notifyListeners(newState);
      } catch (error) {
        console.error("Error parsing sync data:", error);
      }
    }
  }
  checkForUpdates() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      const config = localStorage.getItem(this.configKey);
      if (stored) {
        const storedState = JSON.parse(stored);
        this.notifyListeners(storedState);
      }
      if (config) {
        const configData = JSON.parse(config);
        this.notifyListeners({ systemConfig: configData });
      }
    } catch (error) {
      console.error("Error checking for updates:", error);
    }
  }
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }
  broadcast(state) {
    try {
      const syncData = {
        ...state,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      localStorage.setItem(this.storageKey, JSON.stringify(syncData));
      localStorage.setItem(this.configKey, JSON.stringify(state.systemConfig));
      this.notifyListeners(syncData);
    } catch (error) {
      console.error("Error broadcasting state:", error);
    }
  }
  notifyListeners(data) {
    this.listeners.forEach((callback) => {
      try {
        callback(data);
      } catch (error) {
        console.error("Error in sync listener:", error);
      }
    });
  }
  destroy() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
    }
    window.removeEventListener("storage", this.handleStorageChange.bind(this));
    this.listeners.clear();
  }
}
export function AdminProvider({ children }) {
  _s();
  const [state, dispatch] = useReducer(adminReducer, initialState);
  const [syncService] = React.useState(() => new RealTimeSyncService());
  useEffect(() => {
    try {
      const storedConfig = localStorage.getItem("system_config");
      if (storedConfig) {
        const config = JSON.parse(storedConfig);
        dispatch({ type: "LOAD_SYSTEM_CONFIG", payload: config });
      }
      const stored = localStorage.getItem("admin_system_state");
      if (stored) {
        const storedState = JSON.parse(stored);
        dispatch({ type: "SYNC_STATE", payload: storedState });
      }
    } catch (error) {
      console.error("Error loading initial state:", error);
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("admin_system_state", JSON.stringify(state));
      localStorage.setItem("system_config", JSON.stringify(state.systemConfig));
      syncService.broadcast(state);
    } catch (error) {
      console.error("Error saving state:", error);
    }
  }, [state, syncService]);
  useEffect(() => {
    const unsubscribe = syncService.subscribe((syncedState) => {
      if (JSON.stringify(syncedState) !== JSON.stringify(state)) {
        dispatch({ type: "SYNC_STATE", payload: syncedState });
      }
    });
    return unsubscribe;
  }, [syncService, state]);
  useEffect(() => {
    return () => {
      syncService.destroy();
    };
  }, [syncService]);
  const login = (username, password) => {
    dispatch({ type: "LOGIN", payload: { username, password } });
    const success = username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
    if (success) {
      addNotification({
        type: "success",
        title: "Inicio de sesión exitoso",
        message: "Bienvenido al panel de administración",
        section: "Autenticación",
        action: "login"
      });
    }
    return success;
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    addNotification({
      type: "info",
      title: "Sesión cerrada",
      message: "Has cerrado sesión correctamente",
      section: "Autenticación",
      action: "logout"
    });
  };
  const updatePrices = (prices) => {
    dispatch({ type: "UPDATE_PRICES", payload: prices });
    addNotification({
      type: "success",
      title: "Precios actualizados",
      message: "Los precios se han actualizado y sincronizado automáticamente",
      section: "Precios",
      action: "update"
    });
    broadcastChange({ type: "prices", data: prices });
  };
  const addDeliveryZone = (zone) => {
    dispatch({ type: "ADD_DELIVERY_ZONE", payload: zone });
    addNotification({
      type: "success",
      title: "Zona de entrega agregada",
      message: `Se agregó la zona "${zone.name}" y se sincronizó automáticamente`,
      section: "Zonas de Entrega",
      action: "create"
    });
    broadcastChange({ type: "delivery_zone_add", data: zone });
  };
  const updateDeliveryZone = (zone) => {
    dispatch({ type: "UPDATE_DELIVERY_ZONE", payload: zone });
    addNotification({
      type: "success",
      title: "Zona de entrega actualizada",
      message: `Se actualizó la zona "${zone.name}" y se sincronizó automáticamente`,
      section: "Zonas de Entrega",
      action: "update"
    });
    broadcastChange({ type: "delivery_zone_update", data: zone });
  };
  const deleteDeliveryZone = (id) => {
    const zone = state.deliveryZones.find((z) => z.id === id);
    dispatch({ type: "DELETE_DELIVERY_ZONE", payload: id });
    addNotification({
      type: "warning",
      title: "Zona de entrega eliminada",
      message: `Se eliminó la zona "${zone?.name || "Desconocida"}" y se sincronizó automáticamente`,
      section: "Zonas de Entrega",
      action: "delete"
    });
    broadcastChange({ type: "delivery_zone_delete", data: { id } });
  };
  const addNovel = (novel) => {
    dispatch({ type: "ADD_NOVEL", payload: novel });
    addNotification({
      type: "success",
      title: "Novela agregada",
      message: `Se agregó la novela "${novel.titulo}" y se sincronizó automáticamente`,
      section: "Gestión de Novelas",
      action: "create"
    });
    broadcastChange({ type: "novel_add", data: novel });
  };
  const updateNovel = (novel) => {
    dispatch({ type: "UPDATE_NOVEL", payload: novel });
    addNotification({
      type: "success",
      title: "Novela actualizada",
      message: `Se actualizó la novela "${novel.titulo}" y se sincronizó automáticamente`,
      section: "Gestión de Novelas",
      action: "update"
    });
    broadcastChange({ type: "novel_update", data: novel });
  };
  const deleteNovel = (id) => {
    const novel = state.novels.find((n) => n.id === id);
    dispatch({ type: "DELETE_NOVEL", payload: id });
    addNotification({
      type: "warning",
      title: "Novela eliminada",
      message: `Se eliminó la novela "${novel?.titulo || "Desconocida"}" y se sincronizó automáticamente`,
      section: "Gestión de Novelas",
      action: "delete"
    });
    broadcastChange({ type: "novel_delete", data: { id } });
  };
  const addNotification = (notification) => {
    dispatch({ type: "ADD_NOTIFICATION", payload: notification });
  };
  const markNotificationRead = (id) => {
    dispatch({ type: "MARK_NOTIFICATION_READ", payload: id });
  };
  const clearNotifications = () => {
    dispatch({ type: "CLEAR_NOTIFICATIONS" });
    addNotification({
      type: "info",
      title: "Notificaciones limpiadas",
      message: "Se han eliminado todas las notificaciones del sistema",
      section: "Notificaciones",
      action: "clear"
    });
  };
  const exportSystemConfig = () => {
    try {
      addNotification({
        type: "info",
        title: "Exportación de configuración iniciada",
        message: "Generando archivo de configuración JSON...",
        section: "Sistema",
        action: "export_config_start"
      });
      const completeConfig = {
        ...state.systemConfig,
        version: "2.1.0",
        lastExport: (/* @__PURE__ */ new Date()).toISOString(),
        prices: state.prices,
        deliveryZones: state.deliveryZones,
        novels: state.novels,
        metadata: {
          ...state.systemConfig.metadata,
          totalOrders: state.systemConfig.metadata.totalOrders,
          totalRevenue: state.systemConfig.metadata.totalRevenue,
          lastOrderDate: state.systemConfig.metadata.lastOrderDate,
          systemUptime: state.systemConfig.metadata.systemUptime
        }
      };
      const configJson = JSON.stringify(completeConfig, null, 2);
      dispatch({
        type: "UPDATE_SYSTEM_CONFIG",
        payload: { lastExport: (/* @__PURE__ */ new Date()).toISOString() }
      });
      addNotification({
        type: "success",
        title: "Configuración exportada",
        message: "La configuración JSON se ha exportado correctamente",
        section: "Sistema",
        action: "export_config"
      });
      return configJson;
    } catch (error) {
      console.error("Error exporting system config:", error);
      addNotification({
        type: "error",
        title: "Error en la exportación de configuración",
        message: "No se pudo exportar la configuración JSON",
        section: "Sistema",
        action: "export_config_error"
      });
      return "";
    }
  };
  const exportCompleteSourceCode = async () => {
    try {
      addNotification({
        type: "info",
        title: "Exportación de código fuente iniciada",
        message: "Generando sistema completo con código fuente...",
        section: "Sistema",
        action: "export_source_start"
      });
      try {
        const { generateCompleteSourceCode } = await import("/src/utils/sourceCodeGenerator.ts");
        await generateCompleteSourceCode(state.systemConfig);
      } catch (importError) {
        console.error("Error importing source code generator:", importError);
        throw new Error("No se pudo cargar el generador de código fuente");
      }
      addNotification({
        type: "success",
        title: "Código fuente exportado",
        message: "El sistema completo se ha exportado como código fuente",
        section: "Sistema",
        action: "export_source"
      });
    } catch (error) {
      console.error("Error exporting source code:", error);
      addNotification({
        type: "error",
        title: "Error en la exportación de código",
        message: error instanceof Error ? error.message : "No se pudo exportar el código fuente completo",
        section: "Sistema",
        action: "export_source_error"
      });
      throw error;
    }
  };
  const importSystemConfig = (configJson) => {
    try {
      const config = JSON.parse(configJson);
      dispatch({ type: "LOAD_SYSTEM_CONFIG", payload: config });
      addNotification({
        type: "success",
        title: "Configuración importada",
        message: "La configuración del sistema se ha cargado correctamente",
        section: "Sistema",
        action: "import"
      });
      return true;
    } catch (error) {
      console.error("Error importing system config:", error);
      addNotification({
        type: "error",
        title: "Error en la importación",
        message: "No se pudo cargar la configuración del sistema",
        section: "Sistema",
        action: "import_error"
      });
      return false;
    }
  };
  const syncAllSections = async () => {
    try {
      addNotification({
        type: "info",
        title: "Sincronización completa iniciada",
        message: "Sincronizando todas las secciones del sistema...",
        section: "Sistema",
        action: "sync_all_start"
      });
      await new Promise((resolve) => setTimeout(resolve, 3e3));
      const updatedConfig = {
        ...state.systemConfig,
        lastExport: (/* @__PURE__ */ new Date()).toISOString(),
        prices: state.prices,
        deliveryZones: state.deliveryZones,
        novels: state.novels
      };
      dispatch({ type: "UPDATE_SYSTEM_CONFIG", payload: updatedConfig });
      window.dispatchEvent(new CustomEvent("admin_full_sync", {
        detail: {
          config: updatedConfig,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }
      }));
      addNotification({
        type: "success",
        title: "Sincronización completa exitosa",
        message: "Todas las secciones se han sincronizado correctamente",
        section: "Sistema",
        action: "sync_all"
      });
    } catch (error) {
      console.error("Error in full sync:", error);
      addNotification({
        type: "error",
        title: "Error en sincronización completa",
        message: "No se pudo completar la sincronización de todas las secciones",
        section: "Sistema",
        action: "sync_all_error"
      });
    }
  };
  const broadcastChange = (change) => {
    const changeEvent = {
      ...change,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      source: "admin_panel"
    };
    dispatch({
      type: "UPDATE_SYNC_STATUS",
      payload: {
        lastSync: (/* @__PURE__ */ new Date()).toISOString(),
        pendingChanges: Math.max(0, state.syncStatus.pendingChanges - 1)
      }
    });
    window.dispatchEvent(new CustomEvent("admin_state_change", {
      detail: changeEvent
    }));
  };
  const syncWithRemote = async () => {
    try {
      dispatch({ type: "UPDATE_SYNC_STATUS", payload: { isOnline: true } });
      addNotification({
        type: "info",
        title: "Sincronización iniciada",
        message: "Iniciando sincronización con el sistema remoto...",
        section: "Sistema",
        action: "sync_start"
      });
      await new Promise((resolve) => setTimeout(resolve, 2e3));
      dispatch({
        type: "UPDATE_SYNC_STATUS",
        payload: {
          lastSync: (/* @__PURE__ */ new Date()).toISOString(),
          pendingChanges: 0
        }
      });
      addNotification({
        type: "success",
        title: "Sincronización completada",
        message: "Todos los datos se han sincronizado correctamente",
        section: "Sistema",
        action: "sync"
      });
    } catch (error) {
      dispatch({ type: "UPDATE_SYNC_STATUS", payload: { isOnline: false } });
      addNotification({
        type: "error",
        title: "Error de sincronización",
        message: "No se pudo sincronizar con el servidor remoto",
        section: "Sistema",
        action: "sync_error"
      });
    }
  };
  const getAvailableCountries = () => {
    const countries = /* @__PURE__ */ new Set();
    state.novels.forEach((novel) => {
      if (novel.pais) {
        countries.add(novel.pais);
      }
    });
    const commonCountries = [
      "Cuba",
      "Turquía",
      "México",
      "Brasil",
      "Colombia",
      "Argentina",
      "España",
      "Estados Unidos",
      "Corea del Sur",
      "India",
      "Reino Unido",
      "Francia",
      "Italia",
      "Alemania",
      "Japón",
      "China",
      "Rusia"
    ];
    commonCountries.forEach((country) => countries.add(country));
    return Array.from(countries).sort();
  };
  const updateSystemConfig = (config) => {
    dispatch({ type: "UPDATE_SYSTEM_CONFIG", payload: config });
  };
  return /* @__PURE__ */ jsxDEV(
    AdminContext.Provider,
    {
      value: {
        state,
        login,
        logout,
        updatePrices,
        addDeliveryZone,
        updateDeliveryZone,
        deleteDeliveryZone,
        addNovel,
        updateNovel,
        deleteNovel,
        addNotification,
        markNotificationRead,
        clearNotifications,
        exportSystemConfig,
        importSystemConfig,
        exportCompleteSourceCode,
        syncWithRemote,
        broadcastChange,
        syncAllSections,
        getAvailableCountries,
        updateSystemConfig
      },
      children
    },
    void 0,
    false,
    {
      fileName: "/home/project/src/context/AdminContext.tsx",
      lineNumber: 1575,
      columnNumber: 5
    },
    this
  );
}
_s(AdminProvider, "8vPut2gZMBv2leXhW5aHjyCmb2k=");
_c = AdminProvider;
export function useAdmin() {
  _s2();
  const context = useContext(AdminContext);
  if (context === void 0) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
_s2(useAdmin, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
export { AdminContext };
var _c;
$RefreshReg$(_c, "AdminProvider");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/context/AdminContext.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/context/AdminContext.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBbWhESTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFuaERKLE9BQU9BLFNBQVNDLGVBQWVDLFlBQVlDLFlBQVlDLGlCQUFpQjtBQUl4RSxNQUFNQyxrQkFBa0I7QUFBQSxFQUN0QixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsSUFDZix5QkFBeUI7QUFBQSxJQUN6Qix3QkFBd0I7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsaUJBQWlCO0FBQUEsSUFDZjtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUFDO0FBQUEsRUFFSCxVQUFVO0FBQUEsSUFDUjtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFDUCxlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFDUCxlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFDUCxlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFDUCxlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFDUCxlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFDUCxlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFDUCxlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFDUCxlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFDUCxlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFDUCxlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixPQUFPO0FBQUEsTUFDUCxlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLGFBQWE7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QSxNQUNGO0FBQUEsTUFFQ2pFO0FBQUFBO0FBQUFBLElBekJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQTBCQTtBQUVKO0FBQUNDLEdBdGVlRixlQUFhO0FBQUFtRSxLQUFibkU7QUF3ZVQsZ0JBQVNvRSxXQUFXO0FBQUFDLE1BQUE7QUFDekIsUUFBTUMsVUFBVTVLLFdBQVd1RCxZQUFZO0FBQ3ZDLE1BQUlxSCxZQUFZcEgsUUFBVztBQUN6QixVQUFNLElBQUl5RixNQUFNLCtDQUErQztBQUFBLEVBQ2pFO0FBQ0EsU0FBTzJCO0FBQ1Q7QUFBQ0QsSUFOZUQsVUFBUTtBQVF4QixTQUFTbkg7QUFBZSxJQUFBa0g7QUFBQUksYUFBQUosSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwidXNlRWZmZWN0IiwiRU1CRURERURfQ09ORklHIiwiQURNSU5fQ1JFREVOVElBTFMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaW5pdGlhbFN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwicHJpY2VzIiwiZGVsaXZlcnlab25lcyIsIm5vdmVscyIsIm5vdGlmaWNhdGlvbnMiLCJzeW5jU3RhdHVzIiwibGFzdFN5bmMiLCJEYXRlIiwidG9JU09TdHJpbmciLCJpc09ubGluZSIsInBlbmRpbmdDaGFuZ2VzIiwic3lzdGVtQ29uZmlnIiwiYWRtaW5SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsInVwZGF0ZWRDb25maWciLCJsYXN0RXhwb3J0IiwibmV3Wm9uZSIsImlkIiwibm93IiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiY29uZmlnV2l0aE5ld1pvbmUiLCJ1cGRhdGVkWm9uZXMiLCJtYXAiLCJ6b25lIiwiY29uZmlnV2l0aFVwZGF0ZWRab25lIiwiZmlsdGVyZWRab25lcyIsImZpbHRlciIsImNvbmZpZ1dpdGhEZWxldGVkWm9uZSIsIm5ld05vdmVsIiwiY29uZmlnV2l0aE5ld05vdmVsIiwidXBkYXRlZE5vdmVscyIsIm5vdmVsIiwiY29uZmlnV2l0aFVwZGF0ZWROb3ZlbCIsImZpbHRlcmVkTm92ZWxzIiwiY29uZmlnV2l0aERlbGV0ZWROb3ZlbCIsIm5vdGlmaWNhdGlvbiIsInRvU3RyaW5nIiwidGltZXN0YW1wIiwicmVhZCIsInNsaWNlIiwic2V0dGluZ3MiLCJtYXhOb3RpZmljYXRpb25zIiwibmV3U3lzdGVtQ29uZmlnIiwiQWRtaW5Db250ZXh0IiwidW5kZWZpbmVkIiwiUmVhbFRpbWVTeW5jU2VydmljZSIsImxpc3RlbmVycyIsIlNldCIsInN5bmNJbnRlcnZhbCIsInN0b3JhZ2VLZXkiLCJjb25maWdLZXkiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxpemVTeW5jIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVN0b3JhZ2VDaGFuZ2UiLCJiaW5kIiwic2V0SW50ZXJ2YWwiLCJjaGVja0ZvclVwZGF0ZXMiLCJkb2N1bWVudCIsImhpZGRlbiIsImV2ZW50Iiwia2V5IiwibmV3VmFsdWUiLCJuZXdTdGF0ZSIsIkpTT04iLCJwYXJzZSIsIm5vdGlmeUxpc3RlbmVycyIsImVycm9yIiwiY29uc29sZSIsInN0b3JlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25maWciLCJzdG9yZWRTdGF0ZSIsImNvbmZpZ0RhdGEiLCJzdWJzY3JpYmUiLCJjYWxsYmFjayIsImFkZCIsImRlbGV0ZSIsImJyb2FkY2FzdCIsInN5bmNEYXRhIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRhdGEiLCJmb3JFYWNoIiwiZGVzdHJveSIsImNsZWFySW50ZXJ2YWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXIiLCJBZG1pblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJfcyIsImRpc3BhdGNoIiwic3luY1NlcnZpY2UiLCJ1c2VTdGF0ZSIsInN0b3JlZENvbmZpZyIsInVuc3Vic2NyaWJlIiwic3luY2VkU3RhdGUiLCJsb2dpbiIsInN1Y2Nlc3MiLCJhZGROb3RpZmljYXRpb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJzZWN0aW9uIiwibG9nb3V0IiwidXBkYXRlUHJpY2VzIiwiYnJvYWRjYXN0Q2hhbmdlIiwiYWRkRGVsaXZlcnlab25lIiwibmFtZSIsInVwZGF0ZURlbGl2ZXJ5Wm9uZSIsImRlbGV0ZURlbGl2ZXJ5Wm9uZSIsImZpbmQiLCJ6IiwiYWRkTm92ZWwiLCJ0aXR1bG8iLCJ1cGRhdGVOb3ZlbCIsImRlbGV0ZU5vdmVsIiwibiIsIm1hcmtOb3RpZmljYXRpb25SZWFkIiwiY2xlYXJOb3RpZmljYXRpb25zIiwiZXhwb3J0U3lzdGVtQ29uZmlnIiwiY29tcGxldGVDb25maWciLCJ2ZXJzaW9uIiwibWV0YWRhdGEiLCJ0b3RhbE9yZGVycyIsInRvdGFsUmV2ZW51ZSIsImxhc3RPcmRlckRhdGUiLCJzeXN0ZW1VcHRpbWUiLCJjb25maWdKc29uIiwiZXhwb3J0Q29tcGxldGVTb3VyY2VDb2RlIiwiZ2VuZXJhdGVDb21wbGV0ZVNvdXJjZUNvZGUiLCJpbXBvcnRFcnJvciIsIkVycm9yIiwiaW1wb3J0U3lzdGVtQ29uZmlnIiwic3luY0FsbFNlY3Rpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiY2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJzb3VyY2UiLCJNYXRoIiwibWF4Iiwic3luY1dpdGhSZW1vdGUiLCJnZXRBdmFpbGFibGVDb3VudHJpZXMiLCJjb3VudHJpZXMiLCJwYWlzIiwiY29tbW9uQ291bnRyaWVzIiwiY291bnRyeSIsIkFycmF5IiwiZnJvbSIsInNvcnQiLCJ1cGRhdGVTeXN0ZW1Db25maWciLCJfYyIsInVzZUFkbWluIiwiX3MyIiwiY29udGV4dCIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBZG1pbkNvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSlNaaXAgZnJvbSAnanN6aXAnO1xuXG4vLyBDT05GSUdVUkFDScOTTiBFTUJFQklEQSAtIEdlbmVyYWRhIGF1dG9tw6F0aWNhbWVudGVcbmNvbnN0IEVNQkVEREVEX0NPTkZJRyA9IHtcbiAgXCJ2ZXJzaW9uXCI6IFwiMi4xLjBcIixcbiAgXCJwcmljZXNcIjoge1xuICAgIFwibW92aWVQcmljZVwiOiA4MCxcbiAgICBcInNlcmllc1ByaWNlXCI6IDMwMCxcbiAgICBcInRyYW5zZmVyRmVlUGVyY2VudGFnZVwiOiAxMCxcbiAgICBcIm5vdmVsUHJpY2VQZXJDaGFwdGVyXCI6IDVcbiAgfSxcbiAgXCJkZWxpdmVyeVpvbmVzXCI6IFtcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYW50aWFnbyBkZSBDdWJhID4gVmlzdGEgSGVybW9zYVwiLFxuICAgICAgXCJjb3N0XCI6IDQwMCxcbiAgICAgIFwiaWRcIjogMTc1OTU0OTQ0ODc3NixcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0NDowOC43NzZaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDQ6MDguNzc2WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYW50aWFnbyBkZSBDdWJhID4gQW50b25pbyBNYWNlb1wiLFxuICAgICAgXCJjb3N0XCI6IDQwMCxcbiAgICAgIFwiaWRcIjogMTc1OTU0OTQ2MTM3NixcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0NDoyMS4zNzZaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDQ6MjEuMzc2WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYW50aWFnbyBkZSBDdWJhID4gQ2VudHJvIGRlIGxhIGNpdWRhZFwiLFxuICAgICAgXCJjb3N0XCI6IDI1MCxcbiAgICAgIFwiaWRcIjogMTc1OTU0OTQ3MzQ4OCxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0NDozMy40ODhaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDQ6MzMuNDg4WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYW50aWFnbyBkZSBDdWJhID4gVmVyc2FsbGVzIEhhc3RhIGVsIEhvdGVsXCIsXG4gICAgICBcImNvc3RcIjogNTAwLFxuICAgICAgXCJpZFwiOiAxNzU5NTQ5NDg2NzM2LFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ0OjQ2LjczNlpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0NDo0Ni43MzZaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNhbnRpYWdvIGRlIEN1YmEgPiBDYXJyZXRlcmEgZGVsIE1vcnJvXCIsXG4gICAgICBcImNvc3RcIjogMzAwLFxuICAgICAgXCJpZFwiOiAxNzU5NTQ5NDk5NTUyLFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ0OjU5LjU1MlpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0NDo1OS41NTJaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNhbnRpYWdvIGRlIEN1YmEgPiBBbHRhbWlyYVwiLFxuICAgICAgXCJjb3N0XCI6IDQwMCxcbiAgICAgIFwiaWRcIjogMTc1OTU0OTUxMTY2NCxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0NToxMS42NjRaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDU6MTEuNjY0WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYW50aWFnbyBkZSBDdWJhID4gQ2FuZ3Jlaml0b3NcIixcbiAgICAgIFwiY29zdFwiOiAzNTAsXG4gICAgICBcImlkXCI6IDE3NTk1NDk1MjE0MjQsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDU6MjEuNDI0WlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ1OjIxLjQyNFpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2FudGlhZ28gZGUgQ3ViYSA+IFRyb2NoYVwiLFxuICAgICAgXCJjb3N0XCI6IDI1MCxcbiAgICAgIFwiaWRcIjogMTc1OTU0OTUzNDU2MCxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0NTozNC41NjBaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDU6MzQuNTYwWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYW50aWFnbyBkZSBDdWJhID4gVmVndWl0YSBkZSBHYWxvXCIsXG4gICAgICBcImNvc3RcIjogMzAwLFxuICAgICAgXCJpZFwiOiAxNzU5NTQ5NTQ2OTEyLFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ1OjQ2LjkxMlpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0NTo0Ni45MTJaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNhbnRpYWdvIGRlIEN1YmEgPiBQbGF6YSBkZSBNYXJ0ZXNcIixcbiAgICAgIFwiY29zdFwiOiAyNTAsXG4gICAgICBcImlkXCI6IDE3NTk1NDk1NTgwMDAsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDU6NTguMDAwWlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ1OjU4LjAwMFpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2FudGlhZ28gZGUgQ3ViYSA+IFBvcnR1b25kb1wiLFxuICAgICAgXCJjb3N0XCI6IDMwMCxcbiAgICAgIFwiaWRcIjogMTc1OTU0OTU2OTExMixcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0NjowOS4xMTJaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDY6MDkuMTEyWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYW50aWFnbyBkZSBDdWJhID4gU3RhIEJhcmJhcmFcIixcbiAgICAgIFwiY29zdFwiOiAzMDAsXG4gICAgICBcImlkXCI6IDE3NTk1NDk1ODA1NjAsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDY6MjAuNTYwWlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ2OjIwLjU2MFpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2FudGlhZ28gZGUgQ3ViYSA+IFN1ZcOxb1wiLFxuICAgICAgXCJjb3N0XCI6IDI1MCxcbiAgICAgIFwiaWRcIjogMTc1OTU0OTU5MjExMixcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0NjozMi4xMTJaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDY6MzIuMTEyWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYW50aWFnbyBkZSBDdWJhID4gU2FuIFBlZHJpdG9cIixcbiAgICAgIFwiY29zdFwiOiAxNTAsXG4gICAgICBcImlkXCI6IDE3NTk1NDk2MDM2OTYsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDY6NDMuNjk2WlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ2OjQzLjY5NlpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2FudGlhZ28gZGUgQ3ViYSA+IEFnw7xlcm9cIixcbiAgICAgIFwiY29zdFwiOiAxMDAsXG4gICAgICBcImlkXCI6IDE3NTk1NDk2MTU4NDgsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDY6NTUuODQ4WlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ2OjU1Ljg0OFpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2FudGlhZ28gZGUgQ3ViYSA+IERpc3RyaXRvIEpvc2UgTWFydMOtXCIsXG4gICAgICBcImNvc3RcIjogMTUwLFxuICAgICAgXCJpZFwiOiAxNzU5NTQ5NjI3NTA0LFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ3OjA3LjUwNFpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0NzowNy41MDRaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNhbnRpYWdvIGRlIEN1YmEgPiBMb3MgUGlub3NcIixcbiAgICAgIFwiY29zdFwiOiAyMDAsXG4gICAgICBcImlkXCI6IDE3NTk1NDk2MzgyNzIsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDc6MTguMjcyWlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ3OjE4LjI3MlpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2FudGlhZ28gZGUgQ3ViYSA+IFF1aW50ZXJvXCIsXG4gICAgICBcImNvc3RcIjogNTAwLFxuICAgICAgXCJpZFwiOiAxNzU5NTQ5NjQ5NDgwLFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ3OjI5LjQ4MFpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0NzoyOS40ODBaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNhbnRpYWdvIGRlIEN1YmEgPiAzMCBkZSBub3ZpZW1icmUgYmFqb1wiLFxuICAgICAgXCJjb3N0XCI6IDQwMCxcbiAgICAgIFwiaWRcIjogMTc1OTU0OTY2MDkwNCxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0Nzo0MC45MDRaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDc6NDAuOTA0WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYW50aWFnbyBkZSBDdWJhID4gUmFqYXlvZ2FcIixcbiAgICAgIFwiY29zdFwiOiA2MDAsXG4gICAgICBcImlkXCI6IDE3NTk1NDk2Njg4MDAsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDc6NDguODAwWlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ3OjQ4LjgwMFpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2FudGlhZ28gZGUgQ3ViYSA+IFBhc3Rvcml0YVwiLFxuICAgICAgXCJjb3N0XCI6IDYwMCxcbiAgICAgIFwiaWRcIjogMTc1OTU0OTY3Njc2MCxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0Nzo1Ni43NjBaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDc6NTYuNzYwWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYW50aWFnbyBkZSBDdWJhID4gVmlzdGEgQWxlZ3JlXCIsXG4gICAgICBcImNvc3RcIjogMzAwLFxuICAgICAgXCJpZFwiOiAxNzU5NTQ5Njg2ODk2LFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ4OjA2Ljg5NlpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0ODowNi44OTZaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwibmFtZVwiOiBcIlNhbnRpYWdvIGRlIEN1YmEgPiBDYW5leVwiLFxuICAgICAgXCJjb3N0XCI6IDEwMDAsXG4gICAgICBcImlkXCI6IDE3NTk1NDk2OTYyNDAsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDg6MTYuMjQwWlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ4OjE2LjI0MFpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2FudGlhZ28gZGUgQ3ViYSA+IE51ZXZvIFZpc3RhIEFsZWdyZVwiLFxuICAgICAgXCJjb3N0XCI6IDEwMCxcbiAgICAgIFwiaWRcIjogMTc1OTU0OTcwNjg4OCxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0ODoyNi44ODhaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDg6MjYuODg4WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYW50aWFnbyBkZSBDdWJhID4gTWFyaW3Ds25cIixcbiAgICAgIFwiY29zdFwiOiAxMDAsXG4gICAgICBcImlkXCI6IDE3NTk1NDk3MTU1MjEsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDg6MzUuNTIxWlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ4OjM1LjUyMVpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2FudGlhZ28gZGUgQ3ViYSA+IFZlcnNhbGxlIEVkaWZpY2lvc1wiLFxuICAgICAgXCJjb3N0XCI6IDgwMCxcbiAgICAgIFwiaWRcIjogMTc1OTU0OTcyOTczNixcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0ODo0OS43MzZaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDg6NDkuNzM2WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIm5hbWVcIjogXCJTYW50aWFnbyBkZSBDdWJhID4gRmVycmVpcm9cIixcbiAgICAgIFwiY29zdFwiOiAzMDAsXG4gICAgICBcImlkXCI6IDE3NTk1NDk3Mzg3MjAsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDg6NTguNzIwWlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjQ4OjU4LjcyMFpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiU2FudGlhZ28gZGUgQ3ViYSA+IDMwIGRlIG5vdmllbWJyZSBhbHRvc1wiLFxuICAgICAgXCJjb3N0XCI6IDUwMCxcbiAgICAgIFwiaWRcIjogMTc1OTU0OTc0Nzk1MixcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzo0OTowNy45NTJaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDk6MDcuOTUyWlwiXG4gICAgfVxuICBdLFxuICBcIm5vdmVsc1wiOiBbXG4gICAge1xuICAgICAgXCJ0aXR1bG9cIjogXCJBbGFjYVwiLFxuICAgICAgXCJnZW5lcm9cIjogXCJEcmFtYVwiLFxuICAgICAgXCJjYXBpdHVsb3NcIjogMTIwLFxuICAgICAgXCJhw7FvXCI6IDIwMjQsXG4gICAgICBcImRlc2NyaXBjaW9uXCI6IFwiTGEgdmlkYSBkZSB1bmEgam92ZW4gc2UgdmUgZGVzdHJvemFkYSBjdWFuZG8gbGUgcm9iYW4gdW4gcmnDscOzbiBkdXJhbnRlIHVuIHZpb2xlbnRvIHNlY3Vlc3Rybywgb3JnYW5pemFkbyBwb3Igc3UgcmljbyBwYWRyZSBiaW9sw7NnaWNvLCBxdWUgbmVjZXNpdGEgdW4gZG9uYW50ZS4gTWllbnRyYXMgYnVzY2EgcmVzcHVlc3RhcywgZGVzY3VicmUgZWwgc2VjcmV0byBxdWUgY2FtYmnDsyBzdSB2aWRhIHkgc2UgZW5mcmVudGEgYSBsYSB0cmFpY2nDs24gZGUgS2VuYW4sIGVsIGFtb3IgZGUgc3UgdmlkYSwgY3V5YXMgY29tcGxpY2FkYXMgbGVhbHRhZGVzIHBvbmVuIGEgcHJ1ZWJhIHN1IHbDrW5jdWxvLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiVHVycXXDrWFcIixcbiAgICAgIFwiaW1hZ2VuXCI6IFwiaHR0cHM6Ly9mMDA1LmJhY2tibGF6ZWIyLmNvbS9maWxlL3R2YWxhY2FydGFwbHVzL3R2YWxhY2FydGFwbHVzL2FsYWNhMi5qcGdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwiZmluYWxpemFkYVwiLFxuICAgICAgXCJpZFwiOiAxNzU5NTQ3NTg3MTU4LFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjEzOjA3LjE1OFpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0xMlQwMTowNzoxOS45MDBaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0dWxvXCI6IFwiU2FsdmFqZSAoWWFiYW5pKVwiLFxuICAgICAgXCJnZW5lcm9cIjogXCJEcmFtYVwiLFxuICAgICAgXCJjYXBpdHVsb3NcIjogMjAsXG4gICAgICBcImHDsW9cIjogMjAyMyxcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJTYWx2YWplIG5vdmVsYSB0dXJjYSwgWWFtYW4gZXMgdW4gam92ZW4gcXVlIGhhIHZpdmlkbyBlbiBsYXMgY2FsbGVzIGRlc2RlIHF1ZSB0aWVuZSB1c28gZGUgcmF6w7NuLiBIYSB0ZW5pZG8gdW5hIHZpZGEgZHVyYSwgdGVuaWVuZG8gcXVlIGx1Y2hhciBwYXJhIHNvYnJldml2aXIgeSBlbmNvbnRyYXIgY29taWRhLiBBZm9ydHVuYWRhbWVudGUsIHNpZW1wcmUgaGEgdGVuaWRvIGEgc3UgbGFkbyB0cmVzIGFtaWdvcyBxdWUgc2UgY29udmlydGllcm9uIGVuIHN1IGZhbWlsaWEsIENlc3VyLCBBc2kgeSBVbXV0LlxcblxcblNlIGNydXphcm9uIGN1YW5kbyBlcmFuIGFwZW5hcyB1bm9zIG5pw7FvcyB5IGEgcGFydGlyIGRlIGFow60gbm8gc2Ugc2VwYXJhcm9uLiBEZSBtYW5lcmEgaW5leHBsaWNhYmxlIG5pbmd1bm8gc2FiZSBuYWRhIGRlIHN1IHBhc2FkbyBvIHBvcnF1ZSBlc3TDoW4gZW4gbGEgY2FsbGUsIHNpbiBpbXBvcnRhciBzdSBwYXNhZG8gbyB0cmF1bWFzIGRlY2lkaWVyb24gY29uZmlhciBlbnRyZSBlbGxvcyB5IHNlZ3VpciBhZGVsYW50ZS5cXG5cXG5MYSBncmFuIHByZW9jdXBhY2nDs24gZGVsIGdydXBvIGVzIGN1bXBsaXIgY29uIGVsIHRyYXRhbWllbnRvIGRlIFVtdXQsIHF1aWVuIG5vIHB1ZWRlIGNhbWluYXIgeSBlbCDigJxEb2N0b3IgbWlsYWdyb+KAnSBlcyBzdSDDum5pY2EgZXNwZXJhbnphLCBwZXJvIGVsIG3DqWRpY28gdml2ZSBlbiBlbCBleHRyYW5qZXJvIHkgdmUgYSBwb2NvcyBwYWNpZW50ZXMgdW5hIHZleiBhbCBhw7FvIGN1YW5kbyBsbGVnYSBhbCBwYcOtcy4gXFxuXFxuWWFtYW4gY29tZXRlcsOhIGVsIG1heW9yIGVycm9yIGRlIHN1IHZpZGEsIGVudHJhbmRvIGEgdW5hIG1hbnNpw7NuIHF1ZSBwcm9iYWJsZW1lbnRlIHBvZHLDrWEgc2VyIGxhIGRlIHN1IGZhbWlsaWEsIHBlcm8gc2UgbGUgY2FlIGxhIGNhcmEgZGUgdmVyZ8O8ZW56YSB5YSBxdWUgaGEgYXRhY2FkbyBhIHF1aWVuIHNlcsOtYSBzdSBoZXJtYW5vIHkgYXB1w7FhbGFkbyBhIHN1IG1hZHJlLiBBaG9yYSBzdSBmYW1pbGlhIHkgbGEgcG9saWPDrWEgbG8gYnVzY2FuLlxcblxcbkxhIHZpZGEgZGUgWWFtYW4gY29tZW56YXLDoSBhIGRhciB1biBnaXJvIGluZXNwZXJhZG8gY3VhbmRvIHNlIGNydWNlIGNvbiBBdGVzIHkgc3Ugbm92aWEgUnV5YS4gRXN0b3Mgc2Fsw61hbiBkZSB1biBjbHViIG5vY3R1cm5vLiBBIHBhcnRpciBkZSBhaMOtIHVuYSBzZXJpZSBkZSBldmVudG9zIGdvbHBlYXLDoW4gbGEgdmlkYSBkZSBZYW1hbiB5IGxvIGxsZXZhcsOhbiBhbCBsw61taXRlLiBTYWx2YWplIHNlcmllIHR1cmNhLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiVHVycXXDrWFcIixcbiAgICAgIFwiaW1hZ2VuXCI6IFwiaHR0cHM6Ly9mMDA1LmJhY2tibGF6ZWIyLmNvbS9maWxlL3R2YWxhY2FydGFwbHVzL3R2YWxhY2FydGFwbHVzL3lhYmFuaS5qcGdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwidHJhbnNtaXNpb25cIixcbiAgICAgIFwiaWRcIjogMTc1OTU0NzgzMTYyOSxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzoxNzoxMS42MjlaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMTJUMDE6MTE6NDEuMTg3WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIkVsIFR1cmNvXCIsXG4gICAgICBcImdlbmVyb1wiOiBcIlJvbWFuY2VcIixcbiAgICAgIFwiY2FwaXR1bG9zXCI6IDYsXG4gICAgICBcImHDsW9cIjogMjAyNCxcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJUcmFzIHNlciB0cmFpY2lvbmFkbyB5IGNvbmRlbmFkbyBhIG11ZXJ0ZSwgbG9ncmEgZXNjYXBhciB5IGVzIGN1cmFkbyBwb3IgbG9zIGFsZGVhbm9zIGRlbCBwaW50b3Jlc2NvIHB1ZWJsbyBpdGFsaWFubyBkZSBNb2VuYSwgdWJpY2FkbyBlbiBsb3MgQWxwZXMuIEEgbWVkaWRhIHF1ZSBzZSByZWN1cGVyYSwgQmFsYWJhbiwgYWwgcXVlIGFwb2RhbiAnRWwgVHVyY28nLCBzZSBjb252aWVydGUgZW4gcHJvdGVjdG9yIGRlbCBwdWVibG8sIHJlc2lzdGllbmRvIGxhcyBvcHJlc2l2YXMgY2FyZ2FzIGltcG9zaXRpdmFzIGRlIHN1IHNlw7FvciBmZXVkYWwuIENvbiBlbCB0aWVtcG8sIGxhIGx1Y2hhIHNlIGludGVuc2lmaWNhIHksIGN1YW5kbyB1biBhbnRpZ3VvIGVuZW1pZ28gZGVsIHByb3RhZ29uaXN0YSwgZWwgaW1wbGFjYWJsZSBjYWJhbGxlcm8gTWFyY28sIGFwYXJlY2UsIGNvbWllbnphIGxhIGJhdGFsbGEgZGVjaXNpdmEuXCIsXG4gICAgICBcInBhaXNcIjogXCJUdXJxdcOtYVwiLFxuICAgICAgXCJpbWFnZW5cIjogXCJodHRwczovL2YwMDUuYmFja2JsYXplYjIuY29tL2ZpbGUvdHZhbGFjYXJ0YXBsdXMvdHZhbGFjYXJ0YXBsdXMvZWwrdHVyY28uanBnXCIsXG4gICAgICBcImVzdGFkb1wiOiBcImZpbmFsaXphZGFcIixcbiAgICAgIFwiaWRcIjogMTc1OTU0Nzg4NjAxMyxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzoxODowNi4wMTNaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMTJUMDE6MDk6MzEuMzYzWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIkFtYXIsIGRvbmRlIGVsIGFtb3IgdGVqZSBzdXMgcmVkZXNcIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiUm9tYW5jZVwiLFxuICAgICAgXCJjYXBpdHVsb3NcIjogOTAsXG4gICAgICBcImHDsW9cIjogMjAyNSxcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJFc3RyZWxsYSBDb250cmVyYXMsIHVuYSBtYWRyZSBzb2x0ZXJhIHF1ZSBsdWNoYSBwb3IgY3JpYXIgYSBzdSBoaWphIEF6dWwsIHJlZ3Jlc2EgYSBzdSBwdWVibG8gbmF0YWwgdHJhcyBsYSBtdWVydGUgZGUgc3UgcGFkcmUsIGRvbmRlIGNvbm9jZSBhIEZhYmnDoW4gQnJhdm8sIHVuIHBhZHJlIHZpdWRvIHkgcGVzY2Fkb3IgcXVlIGx1Y2hhIHBvciByZWN1cGVyYXIgbGEgY3VzdG9kaWEgZGUgc3UgaGlqYSBZYXptw61uLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiTcOpeGljb1wiLFxuICAgICAgXCJpbWFnZW5cIjogXCJodHRwczovL2YwMDUuYmFja2JsYXplYjIuY29tL2ZpbGUvMTIwMDAwL3R2YWxhY2FydGEvYW1hcitkb25kZStlbCthbW9yK3RlamUrc3VzK3JlZGVzLmpwZ1wiLFxuICAgICAgXCJlc3RhZG9cIjogXCJmaW5hbGl6YWRhXCIsXG4gICAgICBcImlkXCI6IDE3NTk1NDg0NTM0NzMsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6Mjc6MzMuNDczWlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjI3OjMzLjQ3M1pcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0aXR1bG9cIjogXCJBbW9yIGVuIGJsYW5jbyB5IG5lZ3JvIEVTIChTaXlhaCBCZXlheiBBc2spXCIsXG4gICAgICBcImdlbmVyb1wiOiBcIlJvbWFuY2VcIixcbiAgICAgIFwiY2FwaXR1bG9zXCI6IDY0LFxuICAgICAgXCJhw7FvXCI6IDIwMTcsXG4gICAgICBcImRlc2NyaXBjaW9uXCI6IFwiQW1vciBlbiBCbGFuY28geSBOZWdybyBub3ZlbGEgdHVyY2EgZXMgcHJvdGFnb25pemFkYSBwb3IgRmVyaGF0IEFzbGFuLCB1biBqb3ZlbiBxdWUgdGllbmUgdW4gZW1wbGVvIHF1ZSBubyB0b2RvcyBwdWVkZW4gY3VtcGxpci4gw4lsIGVzIHVuIGFzZXNpbm8gcXVlIHRyYWJhamEgcGFyYSBOYW1paywgcXVpZW4gZXMgc3UgdMOtby4gTmFtaWsgZXMgZWwgbMOtZGVyIGRlIGxvcyBFbWlyaGFtLiBMYSBvdHJhIHByb3RhZ29uaXN0YSBkZSBlc3RhIHNlcmllIGVzIEFzbGkgQ2luYXIsIHVuYSBuZXVyb2NpcnVqYW5hIHF1ZSBhZG9yYSBzdSBlbXBsZW8uIFVuIGTDrWEsIG5vIHJlZ3Jlc2Fyw6EgYSBjYXNhIHkgc2Vyw6Egc2VjdWVzdHJhZGEgcG9yIHN1cyBoYWJpbGlkYWRlcyBjb24gZWwgYmlzdHVyw60uIFRlbmRyw6EgcXVlIHNhbHZhcmxlIGxhIHZpZGEgYSB1biBob21icmUgYWwgcXVlIEZlcmhhdCBhZ3JlZGnDsy4gU29ycHJlbmRpZGEgcG9yIGxvcyBoZWNob3MsIHNlIGNvbnZlcnRpcsOhIGVuIHRlc3RpZ28gZGUgZXNlIGNyaW1lbiwgeSByZWNvbm9jZXLDoSBhbCBpbmZhbWUgTmFtaWsgRW1pcmhhbS5cXG5cXG5TZXLDoSBhbGzDrSBjdWFuZG8gTmFtaWsgZGVzYXJyb2xsZSBkZXNjb25maWFuemEgaGFjaWEgbGEgbXVqZXIsIHkgZXMgcXVlIGFkZW3DoXMgZGUgc2VyIHVuIG1hZmlvc28sIGVzIHVubyBkZSBsb3MgYmVuZWZhY3RvcmVzIG3DoXMgaW1wb3J0YW50ZXMgZGVsIGhvc3BpdGFsIGVuIGTDs25kZSB0cmFiYWphIEFzbGkuIE5hbWlrIGxlIGRhcsOhIGxhIG1pc2nDs24gYSBGZXJoYXQgZGUgYXNlc2luYXIgYSBsYSB0ZXN0aWdvLCBwZXJvIG5vIHBvZHLDoSBjb21wbGV0YXJsYSwgeSBsZSBvZnJlY2Vyw6EgYSBBc2xpIGxhIG9wY2nDs24gZGUgbW9yaXIgbyBjb250cmFlciBtYXRyaW1vbmlvIGNvbiDDqWwuIFJlc3VsdGFyw6EgcXVlIGVsIGhlcm1hbm8gZGUgbnVlc3RyYSBwcm90YWdvbmlzdGEgZXMgcG9saWPDrWEsIHkgZXN0w6EgaW52ZXN0aWdhbmRvIGNhc29zIGRlIGNvcnJ1cGNpw7NuLCBlbiBsb3MgcXVlIHNlIGluY2x1eWUgYSBsb3MgRW1pcmhhbS4gU2UgbGxldmFyw6EgYSBjYWJvIGxhIGJvZGEsIHBlcm8gTmFtaWsgamFtw6FzIGNyZWVyw6EgcXVlIGVsIGFtb3IgZmxvcmVjacOzIGVudHJlIHN1IHNvYnJpbm8geSBsYSBuZXVyb2NpcnVqYW5hLlxcblxcblNlZ3VpcsOhbiBjb24gc3UgbWF0cmltb25pbyBmYWxzbyBlbiBBbW9yIGVuIEJsYW5jbyB5IE5lZ3JvIHNlcmllIHR1cmNhLCB5IHBvY28gYSBwb2NvLCBBc2xpIGRlamFyw6EgZGUgc2VudGlyIG1pZWRvIGhhY2lhIEZlcmhhdC5cIixcbiAgICAgIFwicGFpc1wiOiBcIlR1cnF1w61hXCIsXG4gICAgICBcImltYWdlblwiOiBcImh0dHBzOi8vZjAwNS5iYWNrYmxhemViMi5jb20vZmlsZS90dmFsYWNhcnRhcGx1cy90dmFsYWNhcnRhcGx1cy9hbW9yK2VuK2JsYW5jbyt5K25lZ3JvKzIuanBnXCIsXG4gICAgICBcImVzdGFkb1wiOiBcImZpbmFsaXphZGFcIixcbiAgICAgIFwiaWRcIjogMTc1OTU0ODU4OTM2NixcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzoyOTo0OS4zNjZaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMTJUMDE6MDc6NDAuMTAwWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIkFtb3IgcGVyZmVjdG9cIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiUm9tYW5jZVwiLFxuICAgICAgXCJjYXBpdHVsb3NcIjogNjAsXG4gICAgICBcImHDsW9cIjogMjAyMyxcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJBbW9yIHBlcmZlY3RvIG5vdmVsYSBicmFzaWxlw7FhLCBNYXJlIGVzIHVuYSBqb3ZlbiB2aXNpb25hcmlhLCByZWdyZXNhIGEgc3UgcHVlYmxvIG5hdGFsIGVuIDE5MzQgcGFyYSB0b21hciBsYXMgcmllbmRhcyBkZWwgaG90ZWwgZmFtaWxpYXIuIFN1cyBzdWXDsW9zIHNlIHZlbiB0cnVuY2Fkb3MgY3VhbmRvIHN1IHBhZHJlLCBjZWdhZG8gcG9yIGxvcyBwcmVqdWljaW9zLCBsYSBvYmxpZ2EgYSBjYXNhcnNlIGNvbiBHYXNwYXIsIHVuIGhvbWJyZSBtYWx2YWRvIHkgc2luIGVzY3LDunB1bG9zLiBMYSBhbWJpY2nDs24gZGVzbWVkaWRhIGRlIEdpbGRhLCBsYSBtYWRyYXN0cmEgZGUgTWFyZSwgbGEgbGxldmEgYSBjb25zcGlyYXIgY29uIEdhc3BhciBwYXJhIGRlc2hhY2Vyc2UgZGUgTGVvbmVsLCBlbCBwYWRyZSBkZSBNYXJlLCB5IGN1bHBhciBhIGxhIGpvdmVuIGRlIHN1IG11ZXJ0ZS5cXG5cXG5NYXJlIGVzIGVuY2FyY2VsYWRhIGluanVzdGFtZW50ZSB5IGRhIGEgbHV6IGVuIGxhIGPDoXJjZWwuIFRyYXMgb2NobyBhw7FvcyBlbiBwcmlzacOzbiwgZmluYWxtZW50ZSBjdW1wbGUgc3UgY29uZGVuYSBlbiBlbCBhw7FvIDE5NDIsIHNhbGUgZGUgcHJpc2nDs24gY29uIHVuIHNvbG8gb2JqZXRpdm8sIHZlbmdhcnNlIGRlIHF1aWVuZXMgbGEgdHJhaWNpb25hcm9uIHkgcmVjdXBlcmFyIGEgc3UgaGlqbyBwZXJkaWRvLlxcblxcbkVuIHN1IGNhbWlubywgTWFyZSBzZSByZWVuY3VlbnRyYSBjb24gT3JsYW5kbywgdW4gbcOpZGljbyBxdWUgbGEgYW3DsyBlbiBlbCBwYXNhZG8geSBxdWUgYWhvcmEgZXN0w6EgZGlzcHVlc3RvIGEgbHVjaGFyIHBvciBlbGxhLiBKdW50b3MsIHNlIGVuZnJlbnRhbiBhIGxvcyBwb2Rlcm9zb3MgZGUgU2FvIEphY2ludG8uIE1pZW50cmFzIHRhbnRvIE1hcmNlbGlubywgZXMgaGlqbyBkZSBPcmxhbmRvIHkgTWFyZSwgc2UgaGEgY3JpYWRvIGVuIHVuIG1vbmFzdGVyaW8sIGEgY2FyZ28gZGUgRnJheSBMZcOzbiwgcXVpZW4gc2UgaGEgY29udmVydGlkbyBlbiB1bmEgZmlndXJhIHBhdGVybmEgcGFyYSBlbCBqb3Zlbi5cXG5cXG5HaWxkYSBzZSBoYSBjb252ZXJ0aWRvIGVuIHVuYSBtdWplciBwb2Rlcm9zYSBlIGluZmx1eWVudGUsIE1hcmUgaGFyw6EgdG9kbyBlbiBzdXMgbWFub3MgcGFyYSByZWN1cGVyYXIgc3UgdmlkYSwgcmVlbmNvbnRyYXJzZSBjb24gc3UgaGlqbyB5IHZlbmdhcnNlIGRlIGFxdWVsbG9zIHF1ZSBsZSBoaWNpZXJvbiBkYcOxby4gQW1vciBwZXJmZWN0byB0ZWxlbm92ZWxhIGJyYXNpbGXDsWEuIFwiLFxuICAgICAgXCJwYWlzXCI6IFwiQnJhc2lsXCIsXG4gICAgICBcImltYWdlblwiOiBcImh0dHBzOi8vZjAwNS5iYWNrYmxhemViMi5jb20vZmlsZS8xMjAwMDAvdHZhbGFjYXJ0YS9lN2RXazRlZ3lONE12dEIxeTFIUk9aSUhJLmpwZWdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwiZmluYWxpemFkYVwiLFxuICAgICAgXCJpZFwiOiAxNzU5NTQ4NzIzNjM5LFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjMyOjAzLjYzOVpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzozMjowMy42MzlaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0dWxvXCI6IFwiSG9sZGluZ1wiLFxuICAgICAgXCJnZW5lcm9cIjogXCJEcmFtYVwiLFxuICAgICAgXCJjYXBpdHVsb3NcIjogMjAsXG4gICAgICBcImHDsW9cIjogMjAyNCxcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJMYSBjYW1wZW9uYSBtdW5kaWFsIGRlIGFwbmVhLCBBeWRhbiBUw7xya2VyLCBzZSBwcmVwYXJhIHBhcmEgdW5hIG51ZXZhIGlubWVyc2nDs24gcsOpY29yZC4gQXlkYW4gbm8gc29sbyBlcyB1bmEgYXRsZXRhIGV4aXRvc2E7IGVzIHVuYSBtdWplciBlbXByZW5kZWRvcmEgcXVlIGhhIGVudHJlZ2FkbyBzdSBjb3JhesOzbiBhIGxvcyBuacOxb3MuIFRvZG9zIGxvcyBpbmdyZXNvcyBxdWUgb2J0aWVuZSBkZSBzdSBncmFuIHBhc2nDs24sIGVsIGJ1Y2VvLCBsb3MgZGVkaWNhIGEgbWFudGVuZXIgZW4gcGllIGxhcyBlc2N1ZWxhcyBxdWUgZnVuZMOzLCBpbmNsdXllbmRvIGFxdWVsbGFzIHF1ZSBhdGllbmRlbiBhIG5pw7FvcyBjb24gbmVjZXNpZGFkZXMgZWR1Y2F0aXZhcyBlc3BlY2lhbGVzLiBVbm8gZGUgZXNvcyBjb2xlZ2lvcyBsZSB0cmFlcsOhIGEgc3UgdmlkYSBhIEY/cmF0IHkgYWwgY29taXNhcmlvIEtlcmVtLiBVbm8gZGUgbG9zIHByaW5jaXBhbGVzIHBhdHJvY2luYWRvcmVzIGRlIEF5ZGFuIFTDvHJrZXIgZXMgQWx0P25vcmR1IEhvbGRpbmcsIHVubyBkZSBsb3MgZ3J1cG9zIGVtcHJlc2FyaWFsZXMgbcOhcyBncmFuZGVzIGRlbCBwYcOtcy4gQmFqbyBlbCBsaWRlcmF6Z28gZGUgT3NtYW4gQWx0P25vcmR1IHkgY29uIGVsIGltcHVsc28gZGUgc3VzIGhpamFzIEVicnUsIENleWRhIHkgU2VtYSwgbGEgZW1wcmVzYSBjcmVjZSBkw61hIGEgZMOtYSBjb24gdW5hIGltYWdlbiBpbXBlY2FibGUuIFNpbiBlbWJhcmdvLCBkZXRyw6FzIGRlIGVzZSBicmlsbGFudGUgcm9zdHJvIHNlIGVzY29uZGVuIGx1Y2hhcyBkZSBwb2RlciwgY29uZmxpY3RvcyBmYW1pbGlhcmVzIHkgdW4gcGFzYWRvIG9zY3Vyby4gQ29tbyB0b2RvIGdyYW4gcG9kZXIsIEFsdD9ub3JkdSBIb2xkaW5nIHRhbWJpw6luIHRpZW5lIGdyYW5kZXMgZW5lbWlnb3MuIFN1IGFkdmVyc2FyaW8gbcOhcyBwZWxpZ3Jvc28gZXMgTWFoaXIgQmV5bz9sdSwgY8OzbXBsaWNlIGRlIGFxdWVsIHBhc2FkbyBvc2N1cm8uIEVsIHZpZWpvIGFtaWdvIHkgY29tcGHDsWVybyBkZSBPc21hbiwgWmFraXIsIHRlbmRyw6EgcXVlIGp1Z2FyIGNvbiBhc3R1Y2lhIHBhcmEgZGV0ZW5lciBhIE1haGlyLiBFbiBtZWRpbyBkZSBlc3RlIGNhb3MsIE9zbWFuIGRlc2N1YnJlIHF1ZSBwYWRlY2UgdW5hIGVuZmVybWVkYWQgaW5jdXJhYmxlLiBBbCBib3JkZSBkZSB1bmEgcnVwdHVyYSB0b3RhbCwgc2UgZW5jdWVudHJhIGZyZW50ZSBhIGxhIG5lY2VzaWRhZCBkZSBlbmZyZW50YXJzZSBhbCBzZWNyZXRvIG1lam9yIGd1YXJkYWRvIGRlIHN1IHZpZGE6IHN1IGhpamEsIHkgY29uIGVsbG8sIGEgdG9kYSBzdSBmYW1pbGlhLiBQYXJhIGVzYSBjb25mcm9udGFjacOzbiwgT3NtYW4gZWxpZ2UgZWwgbWlzbW8gZMOtYSBlbiBxdWUgQXlkYW4gcm9tcGVyw6Egc3UgbnVldm8gcsOpY29yZC4gRXNlIGTDrWEgbWFyY2Fyw6EgZWwgaW5pY2lvIGRlIHVuIHZpYWplIHNpbiByZXRvcm5vIHBhcmEgdG9kb3MuXCIsXG4gICAgICBcInBhaXNcIjogXCJUdXJxdcOtYVwiLFxuICAgICAgXCJpbWFnZW5cIjogXCJodHRwczovL2YwMDUuYmFja2JsYXplYjIuY29tL2ZpbGUvMTIwMDAwL3R2YWxhY2FydGEvaG9sZGluZy5qcGVnXCIsXG4gICAgICBcImVzdGFkb1wiOiBcImZpbmFsaXphZGFcIixcbiAgICAgIFwiaWRcIjogMTc1OTU0ODgxMDkyNyxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzozMzozMC45MjdaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMDRUMDM6NDE6NDguODI1WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIkxhIHJlYWxlemFcIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiUm9tYW5jZVwiLFxuICAgICAgXCJjYXBpdHVsb3NcIjogOCxcbiAgICAgIFwiYcOxb1wiOiAyMDI1LFxuICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIidMYSByZWFsZXphJyBwcmVzZW50YSB1bmEgaGlzdG9yaWEgcm9tw6FudGljYSBxdWUgdHJhc2NpZW5kZSBjbGljaMOpcy4gTGEgdHJhbWEgZ2lyYSBlbiB0b3JubyBhbCBlbmN1ZW50cm8gZW50cmUgU29waGlhLCB1bmEgZW1wcmVzYXJpYSBtb2Rlcm5hLCB5IEF2aXJhYWosIHVuIHByw61uY2lwZSBjb24gdW4gbGVnYWRvIGVuIGRlY2FkZW5jaWEuIMOJbCBwb3NlZSB1bmEgbWFuc2nDs24gYW5jZXN0cmFsIHF1ZSBuZWNlc2l0YSBzZXIgcmVzdGF1cmFkYSwgcGVybyBjYXJlY2UgZGUgbG9zIGZvbmRvcyBuZWNlc2FyaW9zLiBFbGxhIHZlIGVuIGVzZSBsdWdhciBsYSBvcG9ydHVuaWRhZCBwZXJmZWN0YSBwYXJhIGxhbnphciBzdSBudWV2YSBlbXByZXNhLiBBc8OtLCBhbWJvcyBkZWNpZGVuIGNvbGFib3JhciwgYXVucXVlIHN1cyBkaWZlcmVuY2lhcyBjdWx0dXJhbGVzIHkgcGVyc29uYWxlcyBhbWVuYXphbiBjb24gYXJydWluYXIgdG9kby4gXFxuXFxuRWwgZW5jYW50YWRvciBwcsOtbmNpcGUgQXZpcmFhaiBjb25vY2UgYSBTb2bDrWEsIHVuYSBlbXByZXNhcmlhIGhlY2hhIGEgc8OtIG1pc21hLCB5IGxvcyBtdW5kb3MgZGUgbGEgcmVhbGV6YSB5IGxhcyBzdGFydHVwcyBjaG9jYW4gZW4gdW5hIGFwYXNpb25hZGEgdG9ybWVudGEgZGUgcm9tYW5jZSB5IGFtYmljacOzblwiLFxuICAgICAgXCJwYWlzXCI6IFwiSW5kaWFcIixcbiAgICAgIFwiaW1hZ2VuXCI6IFwiaHR0cHM6Ly9mMDA1LmJhY2tibGF6ZWIyLmNvbS9maWxlL3R2YWxhY2FydGFwbHVzL3R2YWxhY2FydGFwbHVzL2xhK3JlYWxlemEuanBnXCIsXG4gICAgICBcImVzdGFkb1wiOiBcImZpbmFsaXphZGFcIixcbiAgICAgIFwiaWRcIjogMTc1OTU0ODg4NzM0MyxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzozNDo0Ny4zNDNaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMTJUMDE6MTA6MzkuNTMxWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIlZhbGVudGluYSwgbWkgYW1vciBlc3BlY2lhbFwiLFxuICAgICAgXCJnZW5lcm9cIjogXCJSb21hbmNlXCIsXG4gICAgICBcImNhcGl0dWxvc1wiOiAzOSxcbiAgICAgIFwiYcOxb1wiOiAyMDI0LFxuICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIkVuIFZhbGVudGluYSwgbWkgYW1vciBlc3BlY2lhbCwgSGVycmVyYSBlbmNhcm5hIGEgdW5hIGpvdmVuIGVuIGVsIGVzcGVjdHJvIGF1dGlzdGEsIHF1aWVuIGVzIHVuIGdlbmlvIGVuIGVsIG11bmRvIGRlIGxhIHRlY25vbG9nw61hLiBFbCBwYXBlbCBtYXNjdWxpbm8gcHJpbmNpcGFsIGVzIGludGVycHJldGFkbyBwb3IgTWF1cmljaW8gTm92b2EsIHVuIGFjdG9yIG1leGljYW5vIGVuIGFzY2Vuc28sIGNvbm9jaWRvIHBvciBzdXMgYWN0dWFjaW9uZXMgZW4gbGFzIMO6bHRpbWFzIHRlbGVub3ZlbGFzIHByb2R1Y2lkYXMgZW4gTWlhbWkuXFxuXFxuVmFsZW50aW5hIGhhIGNyZWNpZG8gcHJvdGVnaWRhIGRlIGxhIHNvY2llZGFkIHBvciBzdSBtYWRyZSBhZG9wdGl2YSBlbiBlbCBwZXF1ZcOxbyBwdWVibG8gZGUgQ2hpcXVpbGlzdGzDoW4sIGRvbmRlIGRlc3RhY8OzIGFjYWTDqW1pY2FtZW50ZS4gTXVkYXJzZSBhIGxhIGdyYW4gY2l1ZGFkIGRlIEd1YWRhbGFqYXJhIGRlc3B1w6lzIGRlIHF1ZSBzdSBtYWRyZSBmYWxsZWNlIGVuIHVuIGFjY2lkZW50ZSBzZXLDoSBtdXkgZGlmw61jaWwsIHlhIHF1ZSBzZSBlbmZyZW50YXLDoSBsbyBwZW9yIHkgbG8gbWVqb3IgZGUgbGEgaHVtYW5pZGFkOiBzZSBlbmFtb3JhcsOhIHBvciBwcmltZXJhIHZleiwgY29ub2NlcsOhIG51ZXZvcyBhbWlnb3MsIHBlcm8gdGFtYmnDqW4gbGEgZW52aWRpYSB5IGxvcyBjZWxvcyBkZSBhcXVlbGxvcyBxdWUgZWxpZ2VuIG5vIGFjZXB0YXJsYS5cIixcbiAgICAgIFwicGFpc1wiOiBcIk3DqXhpY29cIixcbiAgICAgIFwiaW1hZ2VuXCI6IFwiaHR0cHM6Ly9mMDA1LmJhY2tibGF6ZWIyLmNvbS9maWxlLzEyMDAwMC90dmFsYWNhcnRhL3ZhbGVudGluYSttaSthbW9yK2VzcGVjaWFsLmpwZWdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwiZmluYWxpemFkYVwiLFxuICAgICAgXCJpZFwiOiAxNzU5NTQ5MDcwOTIzLFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA0VDAzOjM3OjUwLjkyM1pcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0wNFQwMzozNzo1MC45MjNaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0dWxvXCI6IFwiQmFoYXJcIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiRHJhbWFcIixcbiAgICAgIFwiY2FwaXR1bG9zXCI6IDEwOSxcbiAgICAgIFwiYcOxb1wiOiAyMDI0LFxuICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIkhhY2UgMjAgYcOxb3MsIHNlIGdyYWR1w7MgZGUgbGEgZmFjdWx0YWQgZGUgbWVkaWNpbmEgcGVybyBkZWNpZGnDsyBzZXIgYW1hIGRlIGNhc2EgZW4gbHVnYXIgZGUgc2VndWlyIGxhIGNhcnJlcmEgZGUgbWVkaWNpbmEuIEVzdMOhIGNhc2FkYSBjb24gZWwgZXhpdG9zbyBjaXJ1amFubyBUaW11ciBZYXZ1em9nbHUgeSBoYSBkZWRpY2FkbyBzdSB2aWRhIGEgc3UgbWFyaWRvIHkgYSBzdXMgaGlqb3MuIExhIGFwYXJlbnRlbWVudGUgZmVsaXogZmFtaWxpYSBZYXZ1em9nbHUgZXN0w6EgY29ubW9jaW9uYWRhIHBvciBsYSBlbmZlcm1lZGFkIGRlIEJhaGFyLiBFbCBtw6lkaWNvIGRlIEJhaGFyLCBFdnJlbiwgZXN0w6EgZGVjaWRpZG8gYSBzYWx2YXJsYSB5IGRpY2UgcXVlIGxhIMO6bmljYSBzb2x1Y2nDs24gZXMgdW4gdHJhc3BsYW50ZSBkZSBow61nYWRvLiDCoUVsIMO6bmljbyBow61nYWRvIGNvbXBhdGlibGUgZGUgbGEgZmFtaWxpYSBwZXJ0ZW5lY2UgYSBUaW11ciEgUGFyYSBsYSBmYW1pbGlhIFlhdnV6b2dsdSwgcXVlIHNlIHNvbWV0ZSBhIHVuYSBwcnVlYmEgY29uIHVuIHVtYnJhbCBpbXBvcnRhbnRlLCBuYWRhIHZvbHZlcsOhIGEgc2VyIGxvIG1pc21v4oCmXCIsXG4gICAgICBcInBhaXNcIjogXCJUdXJxdcOtYVwiLFxuICAgICAgXCJpbWFnZW5cIjogXCJodHRwczovL2YwMDUuYmFja2JsYXplYjIuY29tL2ZpbGUvdHZhbGFjYXJ0YXBsdXMvdHZhbGFjYXJ0YXBsdXMvQmFoYXIyLmpwZ1wiLFxuICAgICAgXCJlc3RhZG9cIjogXCJ0cmFuc21pc2lvblwiLFxuICAgICAgXCJpZFwiOiAxNzU5OTA2MDkwNDQ2LFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA4VDA2OjQ4OjEwLjQ0NlpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0xMlQwMDo1ODozOS4xNDBaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0dWxvXCI6IFwiQW1hbmVjZXJcIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiUm9tYW5jZVwiLFxuICAgICAgXCJjYXBpdHVsb3NcIjogNjcsXG4gICAgICBcImHDsW9cIjogMjAyNSxcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJMYSB0ZWxlbm92ZWxhIGdpcmEgZW4gdG9ybm8gYSBMZW9uZWwgQ2FycmFuemEgKEZlcm5hbmRvIENvbHVuZ2EpLCB1biBob21icmUgcXVlIHZpdmUgZW4gVmlsbGEgRXNjYXJsYXRhIHkgZXMgcHJvcGlldGFyaW8gZGUgbGEgaGFjaWVuZGEgTW9udG9yby4gU3UgcnV0aW5hIGNhbWJpYSBwb3IgY29tcGxldG8gY3VhbmRvIHN1IGVzcG9zYSAoaW50ZXJwcmV0YWRhIHBvciBBbmRyZWEgTGVnYXJyZXRhKSB5IHN1IG1lam9yIGFtaWdvIGRlc2FwYXJlY2VuIGp1bnRvcywgZGVqw6FuZG9sbyBsbGVubyBkZSBpcmEgeSBkZXNpbHVzacOzbiBhbCBwdW50byBkZSBkYXJsb3MgcG9yIG11ZXJ0b3MsIGxvIGN1YWwgcG9kcsOtYSB0cmFlcmxlIGdyYXZlcyBjb25zZWN1ZW5jaWFzIGVuIGVsIGZ1dHVyby5cXG5cXG5BdW5xdWUgaW50ZW50YSByZWhhY2VyIHN1IHZpZGEsIHN1ZnJlIHVuYSBudWV2YSB0cmFnZWRpYTogc3UgaGlqYSBQYXVsaW5hIHBpZXJkZSBsYSB2aWRhIGVuIHVuIGluY2VuZGlvLiBMZW9uZWwganVyYSB2ZW5nYXJzZSwgY29udmVuY2lkbyBkZSBxdWUgbm8gc2UgdHJhdMOzIGRlIHVuIGFjY2lkZW50ZSwgc2lubyBkZSB1biBhY3RvIHByb3ZvY2FkbyBwb3IgbGEgZmFtaWxpYSBQYWxhY2lvcy5cXG5cXG5QYXJhIHNhY2lhciBzdSBzZWQgZGUgcmV2YW5jaGEsIG9ibGlnYSBhIEFsYmEgUGFsYWNpb3MgKExpdmlhIEJyaXRvKSBhIGNhc2Fyc2UgY29uIMOpbC4gRWxsYSBhY2NlZGUgYWwgbWF0cmltb25pbyBjb24gdGFsIGRlIGFwb3lhciBhIHN1cyBwYWRyZXMsIHF1aWVuZXMgYXRyYXZpZXNhbiB1bmEgZnVlcnRlIGNyaXNpcyBlY29uw7NtaWNhLlxcblxcblByb250bywgbGEgam92ZW4gc2UgdmUgZW52dWVsdGEgZW4gdW5hIHJlbGFjacOzbiBzaW4gYWZlY3RvIHkgYmFqbyBsYXMgYW1lbmF6YXMgZGUgQXRvY2hhIChBbmEgQmVsZW5hKSwgbGEgaGVybWFuYSBkZSBMZW9uZWwuIEVsbGEgZXMgdW5hIG11amVyIGRlc3BpYWRhZGEgeSBhbWJpY2lvc2EsIHF1ZSBkZXNlYSBxdWVkYXJzZSBjb24gbGEgaGFjaWVuZGEgTW9udG9ybywgc2luIGltcG9ydGFyIGxhcyBjb25zZWN1ZW5jaWFzLlxcblxcbkEgbWVkaWRhIHF1ZSBBbGJhIGludGVudGEgZ2FuYXJzZSBlbCByZXNwZXRvIGRlIGxvcyBoYWJpdGFudGVzIGRlIFZpbGxhIEVzY2FybGF0YSB5IGRlIGxhIGZpbmNhLCBMZW9uZWwgY29taWVuemEgYSBjdWVzdGlvbmFyIHN1IG9kaW8sIHB1ZXMgZWxsYSBwYXJlY2UgdG9kbyBtZW5vcyBjdWxwYWJsZSBkZSBsYSB0cmFnZWRpYSBxdWUgbWFyY8OzIHN1IHZpZGEuXFxuXFxuTGEgdGVuc2nDs24gYXVtZW50YSBjb24gbGEgbGxlZ2FkYSBkZSBTZWJhc3Rpw6FuIFBlw7FhbG9zYSAoRGFuaWVsIEVsYml0dGFyKSwgdW4gbcOpZGljbyBxdWUsIGJham8gZWwgYXJndW1lbnRvIGRlIGF0ZW5kZXIgbGEgc2FsdWQgZGUgTGVvbmVsLCBjb21pZW56YSBhIGFjZXJjYXJzZSBhIEFsYmEgY29uIHVuYSBmaWphY2nDs24gcGVsaWdyb3NhIGNyZWFuZG8gdW4gdHLDrWFuZ3VsbyByb23DoW50aWNvIG11eSBwb3RlbnRlLiBBZGVtw6FzLCDDqWwgZ3VhcmRhIHVuIG1pc3RlcmlvIHF1ZSBwb2Ryw61hIGNhbWJpYXIgZWwgcnVtYm8gZGUgbGEgcHJvdGFnb25pc3RhLlxcblxcbkEgbG8gbGFyZ28gZGUgbGEgdHJhbWEsIExlb25lbCB5IEFsYmEgZXhwZXJpbWVudGFyw6FuIHVuYSBtZXpjbGEgZGUgZG9sb3IsIGRlc2VvIHkgY29uZnVzacOzbiwgcXVlIHBvZHLDrWEgZXZvbHVjaW9uYXIgZW4gdW5hIGNvbmV4acOzbiBwcm9mdW5kYSwgbWllbnRyYXMgcXVlIHF1aWVuZXMgbG9zIHJvZGVhbiBpbnRlbnRhcsOhbiBhbGltZW50YXIgZWwgcmVuY29yIGVudHJlIGVsbG9zLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiTcOpeGljb1wiLFxuICAgICAgXCJpbWFnZW5cIjogXCJodHRwczovL2YwMDUuYmFja2JsYXplYjIuY29tL2ZpbGUvdHZhbGFjYXJ0YXBsdXMvdHZhbGFjYXJ0YXBsdXMvQW1hbmVjZXIrMi5qcGdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwidHJhbnNtaXNpb25cIixcbiAgICAgIFwiaWRcIjogMTc1OTkwNjE4ODE1NixcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wOFQwNjo0OTo0OC4xNTZaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMTJUMDA6NTc6NDUuMTE3WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIkFtb3IgeSBFc3BlcmFuemFcIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiRHJhbWFcIixcbiAgICAgIFwiY2FwaXR1bG9zXCI6IDEwNixcbiAgICAgIFwiYcOxb1wiOiAyMDIyLFxuICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIkN1ZW50YSBsYSBoaXN0b3JpYSBkZSBBbGkgVGFoaXIsIHF1aWVuIG5hY2nDsyBlbiBUZXNhbMOzbmljYSBlbiAxODkzIHkgY2F5w7MgbcOhcnRpciBlbiBTYWthcnlhIGVuIDE5MjEuIFNpbiBlbWJhcmdvLCBvY3VycmnDsyB1biBldmVudG8gbWlsYWdyb3NvIGN1YW5kbyBBbGkgYWJyacOzIGxvcyBvam9zIG51ZXZhbWVudGUuIERlc2RlIGVzZSBkw61hIGhhIHZpdmlkbyAxMDAgYcOxb3Mgc2luIGVudmVqZWNlciB1biBzb2xvIGTDrWEuIFNpbiBlbWJhcmdvLCBkZXNwdcOpcyBkZSB0b2RvIGxvIHF1ZSBoYSBwYXNhZG8sIEFsaSBkZWNpZGUgYWNhYmFyIGNvbiBzdSB2aWRhLiBcXG5cXG5aZXluZXAsIHF1ZSB0cmFiYWrDsyBlbiBjb25kaWNpb25lcyBkaWbDrWNpbGVzIGVuIEVkcmVtaXQgeSBzZSBwcmVwYXLDsyBwYXJhIGVsIGV4YW1lbiB1bml2ZXJzaXRhcmlvLCBmaW5hbG1lbnRlIHNlIGNvbnZpcnRpw7MgZW4gbGEgcXVpbnRhIGVuIFR1cnF1w61hIHkgZ2Fuw7MgZWwgZGVwYXJ0YW1lbnRvIGRlIGRlcmVjaG8gZGUgbGEgdW5pdmVyc2lkYWQgZGUgc3UgZWxlY2Npw7NuLiBaZXluZXAsIHF1ZSBzdWXDsWEgY29uIG11ZGFyc2UgYSBFc3RhbWJ1bCBjb24gc3UgbWFkcmUgcGFyYSBpciBhIGxhIHVuaXZlcnNpZGFkLCBkZXNjb25vY2UgbGEgZGVzZ3JhY2lhIGRlIHN1IG1hZHJlIEfDtm7DvGwuXCIsXG4gICAgICBcInBhaXNcIjogXCJUdXJxdcOtYVwiLFxuICAgICAgXCJpbWFnZW5cIjogXCJodHRwczovL2YwMDUuYmFja2JsYXplYjIuY29tL2ZpbGUvdHZhbGFjYXJ0YXBsdXMvdHZhbGFjYXJ0YXBsdXMvQW1vcit5K0VzcGVyYW56YS5qcGdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwidHJhbnNtaXNpb25cIixcbiAgICAgIFwiaWRcIjogMTc1OTkwNjI1OTMyMyxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wOFQwNjo1MDo1OS4zMjNaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMTJUMDA6NTg6MTQuNjkzWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIkNvcmF6w7NuIE5lZ3JvXCIsXG4gICAgICBcImdlbmVyb1wiOiBcIkRyYW1hXCIsXG4gICAgICBcImNhcGl0dWxvc1wiOiA1MyxcbiAgICAgIFwiYcOxb1wiOiAyMDI0LFxuICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIkEgdW5hIGVkYWQgdGVtcHJhbmEsIFN1bXJ1IGFiYW5kb27DsyBhIHN1cyBnZW1lbG9zIHJlY2nDqW4gbmFjaWRvcyBzaW4gbmkgc2lxdWllcmEgbGxlZ2FyIGEgdGVuZXJsb3MgZW4gc3VzIGJyYXpvcy4gU2UgbXVkw7MgYSBDYXBhZG9jaWEgY29uIHN1IG1hZHJlLCBOaWhheWV0LCBkb25kZSBzZSBjYXPDsyBjb24gU2FtZXQgP2Fuc2FsYW4sIHVuIGhvbWJyZSByaWNvIHkgcHJvbWluZW50ZSBlbiBsYSBpbmR1c3RyaWEgZGVsIHR1cmlzbW8gZGUgbGEgY2l1ZGFkLiBUdXZpZXJvbiBkb3MgaGlqb3MuIFNhbWV0IHRhbWJpw6luIHRlbsOtYSB1biBoaWpvIGxsYW1hZG8gQ2loYW4gZGUgc3UgcHJpbWVyIG1hdHJpbW9uaW8uXFxuXFxuQ3JpYWRvcyBlbiBjaXJjdW5zdGFuY2lhcyBkaWbDrWNpbGVzLCBsb3MgZ2VtZWxvcywgTnVoIHkgTWVsZWssIGFsaW1lbnRhZG9zIHBvciBlbCBvZGlvIGhhY2lhIGxhIG1hZHJlIHF1ZSBsb3MgYWJhbmRvbsOzLCBkZXNjdWJyZW4gbGEgaWRlbnRpZGFkIGRlIHN1IG1hZHJlLiBMbGVnYW4gYSBDYXBhZG9jaWEgcGFyYSByZWNsYW1hciBsbyBxdWUgY3JlZW4gcXVlIGxlcyBjb3JyZXNwb25kZSB5IGVuZnJlbnRhcnNlIGEgc3UgbWFkcmUuIFNvcnByZW5kaWRhLCBTdW1ydSBsbyBuaWVnYSB0b2RvLCBwZXJvIGVzIGNvbnNjaWVudGUgZGUgcXVlIGVzIHNvbG8gY3Vlc3Rpw7NuIGRlIHRpZW1wbyBhbnRlcyBkZSBxdWUgc2UgcmV2ZWxlIGVsIHNlY3JldG8gcXVlIGhhIGVzY29uZGlkby4gTGFzIGNvc2FzIHRhbWJpw6luIHNvbiBjb21wbGljYWRhcyBlbiBsYSBtYW5zacOzbiBkZSBsb3MgP2Fuc2FsYW4uIExhIGN1w7FhZGEgdml1ZGEgZGUgU3VtcnUsIEhpa21ldCwgdml2ZSBlbiBsYSBtYW5zacOzbiBjb24gc3UgaGlqYSBTZXZpbGF5LiBTdSBvYmpldGl2byBlcyBjYXNhciBhIHN1IGhpamEgY29uIHN1IHNvYnJpbm8gQ2loYW4geSBhc2VndXJhciBzdSBmdXR1cm8uIFNhbWV0LCB0YW1iacOpbiBhcG95YSBlc3RlIHBsYW4uXFxuXFxuTWllbnRyYXMgbG9zIGdlbWVsb3MgcGVyc2lndWVuIGxvIHF1ZSBjcmVlbiBxdWUgbGVzIGNvcnJlc3BvbmRlIGRlIHN1IG1hZHJlLCBNZWxlayBzZSBjcnV6YSBlbiBlbCBjYW1pbm8gZGUgQ2loYW4sIHkgTnVoIGVuY3VlbnRyYSBhIFNldmlsYXkuIERlc2RlIGVsIHByaW1lciBtb21lbnRvLCBDaWhhbiBzZSB2ZSBwcm9mdW5kYW1lbnRlIGFmZWN0YWRvIHBvciBNZWxlayB5IG5vIHB1ZWRlIHNhY8OhcnNlbGEgZGUgbGEgY2FiZXphLCBpbmNsdXNvIGN1YW5kbyBzZSBlbmN1ZW50cmEgYWwgYm9yZGUgZGUgdW4gbWF0cmltb25pbyBmb3J6YWRvLiBNaWVudHJhcyB0YW50bywgU2V2aWxheSBpbnRlbnRhIG9wb25lcnNlIGFsIG1hdHJpbW9uaW8gcG9yIHN1IGN1ZW50YSwgeSBzZSBjcnV6YSBlbiBzdSBjYW1pbm8gTnVoLlxcblxcbkF1bnF1ZSBTdW1ydSBpbnRlbnRhIG1hbnRlbmVyIGEgbG9zIGhpam9zIHF1ZSByZWNoYXrDsyBhbGVqYWRvcyBkZSBzdSBmYW1pbGlhLCBNZWxlayB5IE51aCBncmFkdWFsbWVudGUgc2UgaW5maWx0cmFyw6FuIHRhbnRvIGVuIGxhIGZhbWlsaWEgY29tbyBlbiBsb3MgY29yYXpvbmVzIGRlIENpaGFuIHkgU2V2aWxheS4gTWllbnRyYXMgbG9zIHByb2JsZW1hcyBkZSBzYWx1ZCBkZSBTYW1ldCBwcmVvY3VwYW4gYSB0b2RhIGxhIGZhbWlsaWEsIHN1IHZpZWpvIGVuZW1pZ28sIFRhaHNpbiwgZXNwZXJhIGVuIGxhIHNvbWJyYSwgbGlzdG8gcGFyYSB2ZW5nYXJzZSBkZWwgcGFzYWRvLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiVHVycXXDrWFcIixcbiAgICAgIFwiaW1hZ2VuXCI6IFwiaHR0cHM6Ly9mMDA1LmJhY2tibGF6ZWIyLmNvbS9maWxlL3R2YWxhY2FydGFwbHVzL3R2YWxhY2FydGFwbHVzL2NvcmF6b24rbmVncm8rLStzaXlhaCtrYWxwLmpwZ1wiLFxuICAgICAgXCJlc3RhZG9cIjogXCJ0cmFuc21pc2lvblwiLFxuICAgICAgXCJpZFwiOiAxNzU5OTk0MDk5NTg1LFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA5VDA3OjE0OjU5LjU4NVpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0xMlQwMTowODoyNi4wODRaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0dWxvXCI6IFwiRWwgb2xvciBkZSB1biBuacOxb1wiLFxuICAgICAgXCJnZW5lcm9cIjogXCJEcmFtYVwiLFxuICAgICAgXCJjYXBpdHVsb3NcIjogMzYsXG4gICAgICBcImHDsW9cIjogMjAxNyxcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJleW5vLCB1bmEgam92ZW4gZW5mZXJtZXJhIGVuIMOBbXN0ZXJkYW0gcXVlZGEgZW1iYXJhemFkYSBkZWwgaG9tYnJlIGFsIHF1ZSBhbWEsIHNvw7FhbmRvIGNvbiBmb3JtYXIgdW5hIGZhbWlsaWEgZmVsaXouIFBlcm8gdW4gbW9tZW50byBkZSBpcmEgY2FtYmlhIHN1IGRlc3Rpbm8gcGFyYSBzaWVtcHJlLCBhbGVqw6FuZG9sYSBkZSBzdSBoaWpvIHkgZW50cmVsYXphbmRvIHN1IHZpZGEgY29uIGxhIHBvZGVyb3NhIGZhbWlsaWEgQWtiYT8sIGzDrWRlciBkZWwgc2VjdG9yIGVuZXJnw6l0aWNvIGVuIFR1cnF1w61hLiBNaWVudHJhcyBsb3MgY29uZmxpY3RvcyBkZSBwb2RlciB5IGxhcyB0ZW5zaW9uZXMgZmFtaWxpYXJlcyBzYWN1ZGVuIGEgbG9zIEFrYmE/LCBaZXlubywgbWFyY2FkYSBwb3IgbGEgcMOpcmRpZGEsIHNlIHRyYW5zZm9ybWEgZW4gdW5hIG11amVyIGZ1ZXJ0ZSB5IGRlY2lkaWRhLiBFc3RhIGVzIGxhIGhpc3RvcmlhIGRlIHVuYSBtYWRyZSBxdWUgbHVjaGEgcG9yIHJlY3VwZXJhciBhIHN1IGhpam8sIGRlIHVuIGhvbWJyZSBxdWUgZW5mcmVudGEgc3UgY29uY2llbmNpYSwgeSBkZSBzZWNyZXRvcyBxdWUgcG9kcsOtYW4gY2FtYmlhcmxvIHRvZG8uXCIsXG4gICAgICBcInBhaXNcIjogXCJUdXJxdcOtYVwiLFxuICAgICAgXCJpbWFnZW5cIjogXCJodHRwczovL2YwMDUuYmFja2JsYXplYjIuY29tL2ZpbGUvdHZhbGFjYXJ0YXBsdXMvdHZhbGFjYXJ0YXBsdXMvZWwrb2xvcitkZSt1bituaSVDMyVCMW8rMi5qcGdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwiZmluYWxpemFkYVwiLFxuICAgICAgXCJpZFwiOiAxNzU5OTk0MjUyOTM3LFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA5VDA3OjE3OjMyLjkzN1pcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0xMlQwMTowODo1MC4wNzZaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0dWxvXCI6IFwiVmVsdmV0IGVsIG51ZXZvIGltcGVyaW9cIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiRHJhbWFcIixcbiAgICAgIFwiY2FwaXR1bG9zXCI6IDM4LFxuICAgICAgXCJhw7FvXCI6IDIwMjUsXG4gICAgICBcImRlc2NyaXBjaW9uXCI6IFwi4oCcVmVsdmV0LCBlbCBudWV2byBpbXBlcmlv4oCdIHNlIGNlbnRyYSBlbiBBbmEgVmVsw6F6cXVleiwgdW5hIHRhbGVudG9zYSBkaXNlw7FhZG9yYSBtZXhpY2FuYSBxdWUgbGxlZ2EgYSBsYSBlbXByZXNhIGRlIG1vZGEgVmVsdmV0IGVuIE51ZXZhIFlvcmsgdHJhcyBwZXJkZXIgYSBzdSBtYWRyZS5cXG5cXG5BbGzDrSwgc2UgZW5hbW9yYSBkZSBBbGJlcnRvIE3DoXJxdWV6LCBoZXJlZGVybyBkZSBsYSBjb21wYcOxw61hLCBwZXJvIHN1IHJlbGFjacOzbiBzZSB2ZSBmcnVzdHJhZGEgcG9yIGludHJpZ2FzIHkgdW4gbWF0cmltb25pbyBwb3IgY29udmVuaWVuY2lhIGNvbiBDcmlzdGluYSBPcnRlZ3VpLlxcblxcbkVudG9uY2VzLCBldmVudHVhbG1lbnRlLCBBbGJlcnRvIGRlc2FwYXJlY2UgeSBBbmEgY29udGluw7phIHN1IGNhcnJlcmEgbWllbnRyYXMgZXNwZXJhIGEgc3UgaGlqby5cXG5cXG5UcmVzIGHDsW9zIGRlc3B1w6lzLCByZXN1bHRhIHF1ZSBlbCBkZXN0aW5vIGxvcyByZcO6bmUgbnVldmFtZW50ZS4gQXPDrSwgc3VwZXJhbmRvIG1lbnRpcmFzIHkgb2JzdMOhY3Vsb3MsIGFtYm9zIHJlY3VwZXJhbiBzdSBhbW9yIHkgZnVuZGFuIHVuYSBudWV2YSBlbXByZXNhIHF1ZSBjZWxlYnJhIGVsIGxlZ2FkbyBkZSBWZWx2ZXQgeSBzdSBmdXR1cm8gZW4gZmFtaWxpYS4uLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiRXN0YWRvcyBVbmlkb3NcIixcbiAgICAgIFwiaW1hZ2VuXCI6IFwiaHR0cHM6Ly9mMDA1LmJhY2tibGF6ZWIyLmNvbS9maWxlL3R2YWxhY2FydGFwbHVzL3R2YWxhY2FydGFwbHVzL1ZlbHZldCtlbCtudWV2bytpbXBlcmlvKzIuanBnXCIsXG4gICAgICBcImVzdGFkb1wiOiBcInRyYW5zbWlzaW9uXCIsXG4gICAgICBcImlkXCI6IDE3NjAwMDAxNzY5ODMsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDlUMDg6NTY6MTYuOTgzWlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTEyVDAxOjA2OjM0LjgyMFpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0aXR1bG9cIjogXCJLdW1hIGxhIG90cmEgZXNwb3NhXCIsXG4gICAgICBcImdlbmVyb1wiOiBcIkRyYW1hXCIsXG4gICAgICBcImNhcGl0dWxvc1wiOiA4MSxcbiAgICAgIFwiYcOxb1wiOiAyMDI1LFxuICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIlVuYSBqb3ZlbiBhY3VzYWRhIGluanVzdGFtZW50ZSBkZSBhc2VzaW5hdG8gZGViZSBjb252ZXJ0aXJzZSBlbiBsYSBzZWd1bmRhIGVzcG9zYSAoS3VtYSkgZGVsIGhlcm1hbm8gZGUgbGEgdsOtY3RpbWEuIENleWxhbiBlcyB1bmEgaGlqYSBhbWFibGUgeSBjdW1wbGlkb3JhLCBwZXJvIGN1YW5kbyBzdSBwYWRyZSBpbnRlbnRhIHZlbmRlcmxhIGNvbW8gc2VndW5kYSBlc3Bvc2EgbyDigJxrdW1h4oCdLCBlbGxhIGh1eWUuIEVuIHN1IGNhbWlubyBzZSBlbmN1ZW50cmEgY29uIEthcmFuLCB1biBqb3ZlbiBlbXByZXNhcmlvIGFkaW5lcmFkbyBxdWUgYWNvZ2UgYSBDZXlsYW4gYmFqbyBzdSBwcm90ZWNjacOzbi4gQW1ib3Mgc2UgZW5hbW9yYW4sIHBlcm8gY3VhbmRvIENleWxhbiBlcyBhY3VzYWRhIGZhbHNhbWVudGUgZGVsIGFzZXNpbmF0byBkZWwgaGVybWFubyBkZSBLYXJhbiwgZWwgYW1vciBzZSB0cmFuc2Zvcm1hIGVuIG9kaW8uIEthcmFuIHNlIGNhc2EgY29uIGxhIHZpdWRhIGRlIHN1IGhlcm1hbm8gZmFsbGVjaWRvIHkgb2JsaWdhIGEgQ2V5bGFuIGEgY29udmVydGlyc2UgZW4gc3Uga3VtYS4gQXRyYXBhZGEgZW4gdW5hIGNhc2EgZG9uZGUgdG9kb3MgbGEgb2RpYW4geSBzaW4gcG9kZXIgcmVncmVzYXIgYSBjYXNhLCBsYSDDum5pY2EgZXNwZXJhbnphIGRlIENleWxhbiBlcyBkZW1vc3RyYXIgc3UgaW5vY2VuY2lhIHksIHRhbCB2ZXosIHJlY3VwZXJhciBlbCBhbW9yIGRlIEthcmFuLlxcblxcbuKAnEt1bWHigJ0gdGUgYXRyYXBhIGRlIGlubWVkaWF0byBjb24gdW5hIGhpc3RvcmlhIGltcGFjdGFudGU6IENleWxhbiwgdW5hIGpvdmVuIGlub2NlbnRlLCBlcyBhY3VzYWRhIGluanVzdGFtZW50ZSBkZSB1biBhc2VzaW5hdG8gcXVlIG5vIGNvbWV0acOzLiBQYXJhIGVzY2FwYXIgZGUgdW4gZGVzdGlubyBjcnVlbCwgc2UgdmUgZm9yemFkYSBhIGNhc2Fyc2UgY29uIEthcmFuLCBlbCBoZXJtYW5vIGRlIGxhIHN1cHVlc3RhIHbDrWN0aW1hLCBjb252aXJ0acOpbmRvc2UgZW4gc3Ugc2VndW5kYSBlc3Bvc2EuIERlc2RlIGVsIHByaW1lciBlcGlzb2RpbywgbGEgdGVsZW5vdmVsYSB0ZSBzdW1lcmdlIGVuIHVuIHRvcmJlbGxpbm8gZGUgZW1vY2lvbmVzLCBkb25kZSBsYSBsdWNoYSBwb3IgbGEgdmVyZGFkIHkgbGEgc3VwZXJ2aXZlbmNpYSBzZSBlbnRyZWxhemFuLiDCv0PDs21vIGxvZ3JhcsOhIENleWxhbiBwcm9iYXIgc3UgaW5vY2VuY2lhIG1pZW50cmFzIGVuZnJlbnRhIHVuIG1hdHJpbW9uaW8gaW1wdWVzdG8geSB1biBlbnRvcm5vIGxsZW5vIGRlIHJlY2hhem8/XFxuXFxuTGEgdGVuc2nDs24gc3ViZSBjdWFuZG8gQ2V5bGFuIGVudHJhIGVuIGxhIHZpZGEgZGUgS2FyYW4geSBzdSBwcmltZXJhIGVzcG9zYSwgU2VtYSwgcXVpZW4gbGEgZGVzcHJlY2lhIHkgbGEgY29uc2lkZXJhIHVuYSByaXZhbC4gTG9zIGVuZnJlbnRhbWllbnRvcyBlbnRyZSBlbGxhcyBzb24gc29sbyBsYSBwdW50YSBkZWwgaWNlYmVyZzogbGEgZmFtaWxpYSBndWFyZGEgc2VjcmV0b3Mgb3NjdXJvcyBxdWUgc2UgcmV2ZWxhbiBwb2NvIGEgcG9jbywgZGVqYW5kbyBtw6FzIHByZWd1bnRhcyBxdWUgcmVzcHVlc3Rhcy4gQ2FkYSBjYXDDrXR1bG8gdGUgbWFudGllbmUgZXhwZWN0YW50ZSwgZGVzY3VicmllbmRvIGxhcyB2ZXJkYWRlcmFzIGludGVuY2lvbmVzIGRlIGxvcyBwZXJzb25hamVzIHkgbGFzIHRyYWljaW9uZXMgcXVlIGFjZWNoYW4gZW4gY2FkYSBlc3F1aW5hLiDCv1F1w6kgZW5pZ21hcyBzYWxkcsOhbiBhIGxhIGx1eiB5IGPDs21vIGNhbWJpYXLDoW4gZWwgcnVtYm8gZGUgbGEgdmlkYSBkZSBDZXlsYW4/XFxuXFxu4oCcS3VtYeKAnSBubyBzb2xvIGVzIGRyYW1hOyB0YW1iacOpbiB0ZSBvZnJlY2UgdW5hIHBvZGVyb3NhIGhpc3RvcmlhIGRlIGFtb3IgeSBzdXBlcmFjacOzbi4gTWllbnRyYXMgQ2V5bGFuIGVuZnJlbnRhIGhvc3RpbGlkYWQgeSBkZXNhZsOtb3MsIGVuY3VlbnRyYSBhcG95byBlbiBsb3MgbHVnYXJlcyBtw6FzIGluZXNwZXJhZG9zIHkgY29taWVuemEgYSBmbG9yZWNlciB1biByb21hbmNlIHF1ZSBkZXNhZsOtYSB0b2RhcyBsYXMgcHJvYmFiaWxpZGFkZXMuIEEgbG8gbGFyZ28gZGUgbGEgc2VyaWUsIGxhIHZlcyB0cmFuc2Zvcm1hcnNlIGRlIHVuYSBtdWplciB2dWxuZXJhYmxlIGEgdW5hIGx1Y2hhZG9yYSBkZWNpZGlkYSwgbGlzdGEgcGFyYSByZWNsYW1hciBzdSBsdWdhciBlbiBlbCBtdW5kby4gwr9Qb2Ryw6EgZWwgYW1vciBzb2JyZXZpdmlyIGVuIHVuIGVudG9ybm8gdGFuIGhvc3RpbCB5IGxsZXZhcsOhIGEgQ2V5bGFuIGEgZW5jb250cmFyIHN1IHZlcmRhZGVyYSBmdWVyemE/XFxuXFxuQ29uIGxvcyBtYWplc3R1b3NvcyBwYWlzYWplcyBkZWwgZXN0ZSBkZSBUdXJxdcOtYSBjb21vIHRlbMOzbiBkZSBmb25kbywg4oCcS3VtYeKAnSBlcyB1biBlc3BlY3TDoWN1bG8gdmlzdWFsIHF1ZSBhY29tcGHDsWEgdW5hIG5hcnJhdGl2YSBlbW9jaW9uYW50ZS4gTGEgdGVsZW5vdmVsYSBjb21iaW5hIHRlbWFzIHByb2Z1bmRvcyBjb21vIGxhIGluanVzdGljaWEgeSBsYSByZXNpbGllbmNpYSBjb24gZ2lyb3MgaW5lc3BlcmFkb3MgcXVlIHRlIGRlamFyw6FuIGFuc2lvc28gcG9yIGVsIHByw7N4aW1vIGVwaXNvZGlvLiBFcyB1bmEgaW52aXRhY2nDs24gYSBzZWd1aXIgZWwgdmlhamUgZGUgQ2V5bGFuIGhhY2lhIGxhIHJlZGVuY2nDs24sIGxsZW5vIGRlIG1pc3RlcmlvLCBwYXNpw7NuIHkgZXNwZXJhbnphLiBTaSBidXNjYXMgdW5hIGhpc3RvcmlhIHF1ZSB0ZSBoYWdhIHNlbnRpciwgcmVmbGV4aW9uYXIgeSBtYW50ZW5lcnRlIGFsIGJvcmRlIGRlbCBhc2llbnRvLCDigJxLdW1h4oCdIHRlIGVzdMOhIGVzcGVyYW5kbyBwYXJhIHF1ZSBkZXNjdWJyYXMgcXXDqSBwYXNhIGRlc3B1w6lzLiBcIixcbiAgICAgIFwicGFpc1wiOiBcIlR1cnF1w61hXCIsXG4gICAgICBcImltYWdlblwiOiBcImh0dHBzOi8vZjAwNS5iYWNrYmxhemViMi5jb20vZmlsZS90dmFsYWNhcnRhcGx1cy90dmFsYWNhcnRhcGx1cy9LdW1hK0xhK290cmErZXNwb3NhLmpwZ1wiLFxuICAgICAgXCJlc3RhZG9cIjogXCJ0cmFuc21pc2lvblwiLFxuICAgICAgXCJpZFwiOiAxNzYwMDAwMzIwODQzLFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA5VDA4OjU4OjQwLjg0M1pcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0xMlQwMTowMzoxOS4zOTZaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0dWxvXCI6IFwiQ2F1dGl2YSBwb3IgYW1vclwiLFxuICAgICAgXCJnZW5lcm9cIjogXCJEcmFtYVwiLFxuICAgICAgXCJjYXBpdHVsb3NcIjogNzAsXG4gICAgICBcImHDsW9cIjogMjAyNSxcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJKYXptw61uLCBzZWN1ZXN0cmFkYSBwb3IgZWwgdGVycmF0ZW5pZW50ZSBSZW1pZ2lvIEZ1ZW50ZXMsIHNvYnJldml2ZSBlc2NsYXZpdHVkIHkgYWJ1c29zLiBBw7FvcyBkZXNwdcOpcywgcmVncmVzYSBhbCByYW5jaG8gYnVzY2FuZG8gdmVuZ2FuemEgYSB0cmF2w6lzIGRlIHN1IGhpam8gRmVybmFuZG8sIHBlcm8gY29ub2NlIGEgU2FudGlhZ28sIHVuIHBlw7NuIHF1ZSBmaW5nZSBzZXIgcG9saWPDrWEuXCIsXG4gICAgICBcInBhaXNcIjogXCJNw6l4aWNvXCIsXG4gICAgICBcImltYWdlblwiOiBcImh0dHBzOi8vZjAwNS5iYWNrYmxhemViMi5jb20vZmlsZS90dmFsYWNhcnRhcGx1cy90dmFsYWNhcnRhcGx1cy9jYXV0aXZhK3BvcithbW9yLmpwZ1wiLFxuICAgICAgXCJlc3RhZG9cIjogXCJmaW5hbGl6YWRhXCIsXG4gICAgICBcImlkXCI6IDE3NjAwMjIyNTAzOTAsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDlUMTU6MDQ6MTAuMzkwWlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTEyVDAxOjA4OjA0LjAzNlpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0aXR1bG9cIjogXCJMYSBjaGljYSBkZWwgbW9tZW50b1wiLFxuICAgICAgXCJnZW5lcm9cIjogXCJSb21hbmNlXCIsXG4gICAgICBcImNhcGl0dWxvc1wiOiAyMSxcbiAgICAgIFwiYcOxb1wiOiAyMDIzLFxuICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIkxhIHRyYW1hLCBhbWJpZW50YWRhIGVuIGxvcyBhw7FvcyA1MCwgZ2lyYSBlbiB0b3JubyBhIEJlYXRyaXogKER1ZGEgU2FudG9zLCBkZSBSZW5hY2VyKSwgcXVpZW4gaGEgY3JlY2lkbyBjcmV5ZW5kbyBxdWUgc3UgbWFkcmUgQ2xhcmljZSAoQ2Fyb2wgQ2FzdHJvIGRlIEh1w6lyZmFub3MgZGUgc3UgdGllcnJhKSBsYSBhYmFuZG9uw7MgY3VhbmRvIHRlbsOtYSBjdWF0cm8gYcOxb3MuIFBlcm8gMTYgYcOxb3MgZGVzcHXDqXMgZGVzY3VicmUgZWwgcGFyYWRlcm8gZGUgc3UgbWFkcmUgeSBzZSBlbnRlcmEgZGUgcXVlIG5vIGxhIGFiYW5kb27DsyBzaW5vIHF1ZSBwZXJkacOzIGxhIG1lbW9yaWEgZW4gdW4gYWNjaWRlbnRlLiBQZXJvIEJlYXRyaXogdGFtYmnDqW4gZGVzY3Vicmlyw6EgcXVlIG90cmEgam92ZW4sIEJpYSAoTWFpc2EpLCBoYSB0b21hZG8gc3UgbHVnYXIgZSBpbmljaWFyw6EgdW4gdmlhamUgbGxlbm8gZGUgb2JzdMOhY3Vsb3MgeSBkZSByZWNvbmNpbGlhY2nDs24gY29uIGVsIHBhc2Fkby5cIixcbiAgICAgIFwicGFpc1wiOiBcIkJyYXNpbFwiLFxuICAgICAgXCJpbWFnZW5cIjogXCJodHRwczovL2YwMDUuYmFja2JsYXplYjIuY29tL2ZpbGUvdHZhbGFjYXJ0YXBsdXMvdHZhbGFjYXJ0YXBsdXMvbGErY2hpY2ErZGVsK21vbWVudG8uanBnXCIsXG4gICAgICBcImVzdGFkb1wiOiBcInRyYW5zbWlzaW9uXCIsXG4gICAgICBcImlkXCI6IDE3NjAwMjI1MDY2NDYsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDlUMTU6MDg6MjYuNjQ2WlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTEyVDAxOjA5OjUyLjk3OVpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0aXR1bG9cIjogXCJMYSBlbmNydWNpamFkYVwiLFxuICAgICAgXCJnZW5lcm9cIjogXCJEcmFtYVwiLFxuICAgICAgXCJjYXBpdHVsb3NcIjogMjgsXG4gICAgICBcImHDsW9cIjogMjAyNSxcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJDw6lzYXIgQnJhdm8gdnVlbHZlIGRlIE3DqXhpY28sIGNhc2kgdHJlaW50YSBhw7FvcyBkZXNwdcOpcywgYSBsYSB0aWVycmEgZG9uZGUgbmFjacOzIGN1YW5kbyB5YSBuYWRpZSBzZSBhY3VlcmRhIGRlbCBhcGVsbGlkbyBkZSBzdSBwYWRyZSBuaSBkZSBsYXMgdHLDoWdpY2FzIGNpcmN1bnN0YW5jaWFzIHF1ZSByb2RlYXJvbiBzdSBtdWVydGUgeSBsYSBkZSBzdXMgYWJ1ZWxvcy4gQXVucXVlIHN1IGFzcGVjdG8gZGUgdHVyaXN0YSBhdmVudHVyZXJvIG5vIGxvIGRlbGF0YSwgdGllbmUgbXV5IGNsYXJvIGEgbG8gcXVlIHZpZW5lLlxcblxcbk5vIGhhbGxhcsOhIHBheiBoYXN0YSBxdWUgbm8gY29uc2lnYSBoYWNlciBqdXN0aWNpYSB5IG1ldGVyIGVuIGxhIGPDoXJjZWwgYSBPY3RhdmlvIE9yYW1hcywgZWwgaG9tYnJlIHF1ZSBzZSBhcHJvcGnDsyBkZSBsYSBoaXN0b3JpYSBmYW1pbGlhciBkZSBzdSBwYWRyZSB5IGRlIHRvZG8gbG8gcXVlIGxlIHBlcnRlbmVjw61hIHBhcmEgY3JlYXIgc3UgcHJvcGlvIGltcGVyaW8uIENvbiBsbyBxdWUgbm8gY3VlbnRhIEPDqXNhciBlcyBxdWUgZW4gc3UgY2FtaW5vIHNlIGNydXphcsOhIEFtYW5kYSBPcmFtYXMsIGxhIG5pw7FhIGRlIGxvcyBvam9zIGRlIHN1IGVuZW1pZ28sIGRlIHF1aWVuIHNlIGVuYW1vcmFyw6EgcGVyZGlkYW1lbnRlLiBVbiBjcnVjZSBkZSBjYW1pbm9zIGZvcnR1aXRvIHF1ZSBtYXJjYSB1biBhbnRlcyB5IHVuIGRlc3B1w6lzIGVuIGxhIHZpZGEgZGUgZG9zIGZhbWlsaWFzIHJpdmFsZXMuIMK/UXXDqSB2ZW5jZXLDoTogZWwgYW1vciBvIGxhIHZlbmdhbnphP1tcIixcbiAgICAgIFwicGFpc1wiOiBcIkVzcGHDsWFcIixcbiAgICAgIFwiaW1hZ2VuXCI6IFwiaHR0cHM6Ly9mMDA1LmJhY2tibGF6ZWIyLmNvbS9maWxlL3R2YWxhY2FydGFwbHVzL3R2YWxhY2FydGFwbHVzL0xhK2VuY3J1Y2lqYWRhLmpwZ1wiLFxuICAgICAgXCJlc3RhZG9cIjogXCJ0cmFuc21pc2lvblwiLFxuICAgICAgXCJpZFwiOiAxNzYwMDIyNjAxMzY2LFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA5VDE1OjEwOjAxLjM2NlpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0xMlQwMTowMzo0NS4yNTJaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0dWxvXCI6IFwiTGV5bGFcIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiRHJhbWFcIixcbiAgICAgIFwiY2FwaXR1bG9zXCI6IDMyLFxuICAgICAgXCJhw7FvXCI6IDIwMjQsXG4gICAgICBcImRlc2NyaXBjaW9uXCI6IFwiRGVzcHXDqXMgZGUgcGVyZGVybG8gdG9kbywgTGV5bGEgcmVuYWNpw7MgZW50cmUgbGFzIHNvbWJyYXMuIExhIGlub2NlbmNpYSBzZSBxdWVicsOzIGVsIGTDrWEgZW4gcXVlIHN1IHBhZHJlIGNhecOzIHJlbmRpZG8gYW50ZSBsb3MgZW5jYW50b3MgZGUgTnVyLCBsYSBtdWplciBxdWUgYWxndW5hIHZleiBmaW5nacOzIGN1aWRhciBkZSBzdSBmYW1pbGlh4oCmIHkgcXVlIGFob3JhLCBjb252ZXJ0aWRhIGVuIHN1IG1hZHJhc3RyYSwgb2N1bHRhIG3DoXMgZGUgdW4gc2VjcmV0byBkZXRyw6FzIGRlIHN1IHNvbnJpc2EuIEN1YW5kbyBlbCBhbW9yIGNpZWdhLCBsYSB0cmFnZWRpYSBhYnJlIGxvcyBvam9zLiBZIExleWxhIGxvIGFwcmVuZGnDsyBkZW1hc2lhZG8gdGFyZGUuXFxuXFxuQcOxb3MgbcOhcyB0YXJkZSwgcmVncmVzYSBiYWpvIHVuYSBudWV2YSBpZGVudGlkYWQuIE5hZGllIHNvc3BlY2hhIHF1ZSBlc2EgdGFsZW50b3NhIGNoZWYgbGxhbWFkYSBFbGEgZXMgZW4gcmVhbGlkYWQgbGEgaGlqYSBxdWUgdmlvIHN1IGhvZ2FyIGNvbnZlcnRpcnNlIGVuIHJ1aW5hcy4gTmkgc2lxdWllcmEgTnVyLCBxdWllbiBhaG9yYSB2aXZlIHJvZGVhZGEgZGUgbHVqb3MganVudG8gYSBzdSBudWV2byBhbWFudGUsIHVuYSBsZXllbmRhIGNhw61kYSBkZWwgZsO6dGJvbC4gUGVybyBlbCBkZXN0aW5vIG5vIG9sdmlkYeKApiB5IHRhbXBvY28gcGVyZG9uYS5cXG5cXG5FbCByZWVuY3VlbnRybyBjb24gQ2l2YW4g4oCUZWwgaGlqbyBhZG9wdGl2byBkZSBOdXIgeSBhbnRpZ3VvIGFtb3IgZGUgaW5mYW5jaWEgZGUgTGV5bGHigJQgZGVzYXRhIHVuYSB0b3JtZW50YSBkZSBlbW9jaW9uZXMsIG1lbnRpcmFzIHkgaGVyaWRhcyBxdWUgamFtw6FzIGNlcnJhcm9uLiBBIG1lZGlkYSBxdWUgbGFzIHBpZXphcyBkZWwgcGFzYWRvIGVtcGllemFuIGEgZW5jYWphciwgbGFzIHByZWd1bnRhcyBzZSBtdWx0aXBsaWNhbiBjb21vIGN1Y2hpbGxvcyBlbiBsYSBlc3BhbGRhOlxcblxcbsK/UHVlZGUgbGEgdmVuZ2FuemEgc29icmV2aXZpciBhbCBhbW9yPyDCv1F1acOpbiBlcyByZWFsbWVudGUgdsOtY3RpbWHigKYgeSBxdWnDqW4gZWwgdmVyZGFkZXJvIHZpbGxhbm8/IMK/SGFzdGEgZMOzbmRlIGVzdMOhIGRpc3B1ZXN0YSBhIGxsZWdhciBMZXlsYSBwYXJhIGhhY2VyIGp1c3RpY2lh4oCmIG8gcGFyYSBkZXN0cnVpcnNlIGVuIGVsIGludGVudG8/IEVuIHVuIGp1ZWdvIGRlIGlkZW50aWRhZGVzLCBwYXNpb25lcyBvY3VsdGFzIHkgdmVyZGFkZXMgcGVsaWdyb3Nhc+KApiBuYWRpZSBzYWxlIGlsZXNvLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiVHVycXXDrWFcIixcbiAgICAgIFwiaW1hZ2VuXCI6IFwiaHR0cHM6Ly9mMDA1LmJhY2tibGF6ZWIyLmNvbS9maWxlL3R2YWxhY2FydGFwbHVzL3R2YWxhY2FydGFwbHVzL0xleWxhK0hheWF0LmpwZ1wiLFxuICAgICAgXCJlc3RhZG9cIjogXCJ0cmFuc21pc2lvblwiLFxuICAgICAgXCJpZFwiOiAxNzYwMDIyNzYzOTUwLFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA5VDE1OjEyOjQzLjk1MFpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0xMlQwMTowNTowNC4zMDhaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0dWxvXCI6IFwiTWFuw61hIGRlIHRpXCIsXG4gICAgICBcImdlbmVyb1wiOiBcIkRyYW1hXCIsXG4gICAgICBcImNhcGl0dWxvc1wiOiAxMTEsXG4gICAgICBcImHDsW9cIjogMjAyNCxcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJOYXJyYSBsYSBoaXN0b3JpYSBkZSBMdW5hIChNb3JlaXJhKSB5IFZpb2xhIChHYWJ6KSwgZG9zIGNoaWNhcyBxdWUgc2UgY29udmllcnRlbiBlbiBhbWlnYXMgY3VhbmRvIGxhIHNlZ3VuZGEgc2UgaW5zdGFsYSBlbiBBbmdyYSBkb3MgUmVpcyBqdW50byBhIHN1IG1hcmlkbyBNYXZpLiBDb24gZWwgdGllbXBvLCBWaW9sYSBzZSBkZXN0YWNhIGVuIGxhIGdhc3Ryb25vbcOtYSwgbWlzbWEgw6FyZWEgZGUgTHVuYSB5IHRhbWJpw6luIHNlIGludm9sdWNyYSBjb24gUnVkw6EgKENoYXkgU3VlZGUpLCBlbCBob21icmUgYWwgcXVlIEx1bmEgYW1hLiBBw7FvcyBkZXNwdcOpcywgVmlvbGEgc2UgaGEgY29udmVydGlkbyBlbiB1bmEgw6l4aXRvc2EgY2hlZiwgbWllbnRyYXMgTHVuYSBwZXJkacOzIHRvZG8gbG8gcXVlIHRlbsOtYS4gQW1iYXMgcml2YWxlcyBzZSB1bmVuIHBhcmEgaW50ZW50YXIgbGliZXJhciBhIFJ1ZMOhIGRlIGxhIGPDoXJjZWwsIHRyYXMgdW5hIHRyYW1wYSBvY2FzaW9uYWRhIHBvciBNYXZpLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiQnJhc2lsXCIsXG4gICAgICBcImltYWdlblwiOiBcImh0dHBzOi8vZjAwNS5iYWNrYmxhemViMi5jb20vZmlsZS90dmFsYWNhcnRhcGx1cy90dmFsYWNhcnRhcGx1cy9tYW5pYStkZSt0aTIuanBnXCIsXG4gICAgICBcImVzdGFkb1wiOiBcImZpbmFsaXphZGFcIixcbiAgICAgIFwiaWRcIjogMTc2MDAyMjg3Mzk1MCxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wOVQxNToxNDozMy45NTBaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMTJUMDE6MTE6MDMuMTg3WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIk1vbnRldmVyZGVcIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiRHJhbWFcIixcbiAgICAgIFwiY2FwaXR1bG9zXCI6IDgxLFxuICAgICAgXCJhw7FvXCI6IDIwMjUsXG4gICAgICBcImRlc2NyaXBjaW9uXCI6IFwi4oCYTW9udGV2ZXJkZeKAmSBlcyB1biBtZWxvZHJhbWEgZG9uZGUgbG9zIGhhYml0YW50ZXMgZGUgZXN0ZSBwZXF1ZcOxbyBwdWVibG8gdml2aXLDoW4gZWwgYW1vciwgbGEgdHJhaWNpw7NuIHkgbGEgcmVkZW5jacOzbiBtaWVudHJhcyBkZXNjdWJyZW4gZWwgYW1vciB5IGxhIHZlcmRhZC5cXG5cXG5Nb250ZXZlcmRlJyBuYXJyYSBsYSB2aWRhIGRlIENhcm9saW5hICjDgWZyaWNhIFphdmFsYSksIHF1ZSBjYW1iaWFyw6EgcmFkaWNhbG1lbnRlIGFsIHNlciBhY3VzYWRhIGRlIHVuIGZyYXVkZSBxdWUgY29tZXRpw7Mgc3UgbWFyaWRvLiBQb3IgZWxsbyBkZWJlIHNhbGlyIGh1eWVuZG8gY29uIHN1IGhpam8gQW5kcsOpcyAoSnVuaWVsIEdhcmPDrWEpIHkgYWRvcHRhciBsYSBpZGVudGlkYWQgZGUgQ2VsZXN0ZSwgc3UgaGVybWFuYSBtZWxsaXphIHF1ZSBlcyBtb25qYSwgcGFyYSByZWZ1Z2lhcnNlIGVuIGRpY2hvIHB1ZWJsbywgcGVybyB0b2RvIHNlIGNvbXBsaWNhcsOhIGN1YW5kbyBjb25vY2UgYSBPc2NhciBMZcOzbiAoR2FicmllbCBTb3RvKS5cXG5cXG5BbGVqYW5kcm8gSWJhcnJhLCBDeW50aGlhIEtsaXRibywgTWFyaW8gTW9yw6FuLCBBcnR1cm8gQ2FybW9uYSwgTWFyaWFsaWNpYSBEZWxnYWRvLCBPc2NhciBCb25maWdsaW8sIEZlcm5hbmRhIFVyZGFwaWxsZXRhLCBBbGRvIEd1ZXJyYSwgQW5hIFBhdHJpY2lvIFJvam8sIENocmlzdGlhbiBSYW1vcywgQXJhIFNhbGTDrXZhciwgUm9kcmlnbyBSw61vcywgSnVuaWVsIEdhcmPDrWEsIE1hbnVlbCBSaWd1ZXp6YSwgTWFyY2VsYSBHdXptw6FuLCBBbmEgS2FyZW4gUGFycmEsIFhpbWVuYSBNYXJ0w61uZXosIEZlcm5hbmRhIEJlcm5hbCB5IENsYXVkaWEgQWNvc3RhIGNvbXBsZW1lbnRhbiBlbCByZXBhcnRvLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiTcOpeGljb1wiLFxuICAgICAgXCJpbWFnZW5cIjogXCJodHRwczovL2YwMDUuYmFja2JsYXplYjIuY29tL2ZpbGUvdHZhbGFjYXJ0YXBsdXMvdHZhbGFjYXJ0YXBsdXMvbW9udGUrdmVyZGUuanBnXCIsXG4gICAgICBcImVzdGFkb1wiOiBcInRyYW5zbWlzaW9uXCIsXG4gICAgICBcImlkXCI6IDE3NjAwMjMwMDU1MTAsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDlUMTU6MTY6NDUuNTEwWlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTEyVDAxOjE1OjExLjQ1OVpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0aXR1bG9cIjogXCJFbCBwYWRyZSAoQmVuIEJ1IENpaGFuYSlcIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiRHJhbWFcIixcbiAgICAgIFwiY2FwaXR1bG9zXCI6IDIyNCxcbiAgICAgIFwiYcOxb1wiOiAyMDIyLFxuICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIkNlemF5aXIgVMO8cmssIHVuIGFzZXNpbm8gZGVsIHNlcnZpY2lvIHNlY3JldG8gcXVlIHNpcnZpw7MgYSBzdSBwYcOtcywgc2UgdmVuZ2EgZGUgc3UgaGVybWFubywgcXVpZW4gZnVlIHNhYm90ZWFkby4gRW1waWV6YSB1bmEgbnVldmEgdmlkYSBkZW1vc3RyYW5kbyBxdWUgbXVyacOzIHBvciBlbCBiaWVuIGRlbCBlc3RhZG8geSBsYSBzZWd1cmlkYWQgZGUgc3UgZmFtaWxpYS4gQSByYcOteiBkZSB1bmEgbGVzacOzbiBzdWZyaWRhIGR1cmFudGUgdW5hIGRlIHN1cyBvcGVyYWNpb25lcyBlbiBlbCBleHRyYW5qZXJvLCBjb25vY2UgYSBGaXJ1emUsIHVubyBkZSBsb3MgbcOpZGljb3Mgc2luIGZyb250ZXJhcy4gQXVucXVlIGV4dHJhw7FhIGEgc3UgZXNwb3NhIGUgaGlqb3MsIGVuIGVsIGZvbmRvIGRlIHN1IGNvcmF6w7NuIHNhYmUgcXVlIHZvbHZlciBjb24gZWxsb3MgZXMgY2FzaSBpbXBvc2libGU7IHNpbiBlbWJhcmdvLCBlc3RhIHBhbGFicmEgbm8gZXN0w6EgZW4gc3Ugdm9jYWJ1bGFyaW8uIFNlIGVuYW1vcmEgZGUgRmlydXplIHBhcmEgZm9ybWFyIHVuYSBmYW1pbGlhOyBtaWVudHJhcyB0YW50bywgcXVlZGEgZXhwdWVzdG8geSB0aWVuZSBxdWUgcmVncmVzYXIgYSBFc3RhbWJ1bC4gTmkgc3UgZmFtaWxpYSBzZWN1bmRhcmlhIGxvIHNhYmUsIG5pIGxhIGZhbWlsaWEgb3JpZ2luYWwsIHF1ZSBsbG9yw7MgeSByZXrDsyBlbiBzdSBjZW1lbnRlcmlvLCBzaWd1acOzIGxvcyByZWNpZW50ZXMgYWNvbnRlY2ltaWVudG9zIHF1ZSBsZSBzdWNlZGllcm9uLiBFc3RhbWJ1bCwgcG9yIG90cm8gbGFkbywgbm8gZXMgZWwgbWlzbW8gbHVnYXIgZGUgZG9uZGUgcGFydGnDsy4gSGFyw6EgdG9kbyBsbyBwb3NpYmxlIHBvciBsdWNoYXIgY29udHJhIGxhcyBmdWVyemFzIGV4dHJhbmplcmFzLCBhdW5xdWUgdGFtYmnDqW4gZGViZXLDoSBkaXZpZGlyIHN1IGVuZXJnw61hIGVudHJlIGRvcyBtdWplcmVzIHF1ZSBsbyBhbWFuLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiVHVycXXDrWFcIixcbiAgICAgIFwiaW1hZ2VuXCI6IFwiaHR0cHM6Ly9mMDA1LmJhY2tibGF6ZWIyLmNvbS9maWxlL3R2YWxhY2FydGFwbHVzL3R2YWxhY2FydGFwbHVzL2VsK3BhZHJlLmpwZWdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwiZmluYWxpemFkYVwiLFxuICAgICAgXCJpZFwiOiAxNzYwMDIzMjk3NzQzLFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTA5VDE1OjIxOjM3Ljc0M1pcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0xMlQwMTowOToxNS42NjdaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0dWxvXCI6IFwiS2Fyc3VcIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiRHJhbWFcIixcbiAgICAgIFwiY2FwaXR1bG9zXCI6IDIxNSxcbiAgICAgIFwiYcOxb1wiOiAyMDI1LFxuICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIkthcnN1LCBlbCBhbW9yIGRlIG1hZHJlIG51bmNhIHNlIHJpbmRlLCB1bmEgc2VyaWUgdHVyY2EgcXVlIGN1ZW50YSBsYSBjb25tb3ZlZG9yYSBoaXN0b3JpYSBkZSB1bmEgbWFkcmUgcmVzaWxpZW50ZSBhIGxhIHF1ZSBsYSB2aWRhIGxhIHBvbmUgYSBwcnVlYmEgY3VhbmRvIGNyZWUgcGVyZGVyIGEgdW5vIGRlIHN1cyBoaWpvcyB5ICBjdWFuZG8gc3VmcmUgbGEgaW5maWRlbGlkYWQgZGUgc3UgZXNwb3NvLiBVbiBkcmFtYSBxdWUgZGVzY3JpYmUgbGEgZW50ZXJlemEgZGUgdW5hIG11amVyIGZyZW50ZSBhIGxhcyBhZHZlcnNpZGFkZXMgeSBxdWUgaGFibGEgZGVsIGNhcsOhY3RlciB5IHZhbGVudMOtYSBkZSB1bmEgbXVqZXIgcXVlIGNvbnNpZ3VlIHNlciAgaW5kZXBlbmRpZW50ZSBwYXJhIGFzZWd1cmFyIGVsIGJpZW5lc3RhciBkZSBzdXMgaGlqb3MuIFVuYSBoaXN0b3JpYSBkZSBsdWNoYSwgc2FjcmlmaWNpbyB5IGVzcGVyYW56YS5cXG5cXG5LYXJzdSwgbm8gaGEgdGVuaWRvIHVuYSBidWVuYSByZWxhY2nDs24gY29uIHN1IG1hZHJlIHkgZGVjaWRlIGFsZWphcnNlIGRlIHN1IGZhbWlsaWEgcGFyYSBjYXNhcnNlIGNvbiBSZWhhLCB1biBob21icmUgYWwgcXVlIG5vIGFtYSwgeSBlbiBkb25kZSBubyBlbmN1ZW50cmEgZmVsaWNpZGFkLCBzaW4gZW1iYXJnbywgbHVjaGEgcG9yIG1hbnRlbmVyIHN1IG1hdHJpbW9uaW8gcG9yIGVsIGJpZW4gZGUgc3VzIHRyZXMgaGlqb3MuXFxuXFxuTGFzIGNvc2FzIHBhcmEgS2Fyc3Ugc2Ugdm9sdmVyw6FuIGHDum4gbcOhcyBkcmFtw6F0aWNhcyBjdWFuZG8sIHBvciB1biBkZXNjdWlkbyBkZSBzdSBtYWRyZSwgc3UgaGlqbyBLdXpleSBkZXNhcGFyZWNlLCAgZGViaWRvIGEgZXN0bywgbGEgcmVsYWNpw7NuIGNvbiBzdSBlc3Bvc28gc2UgY29udmllcnRlIGVuIHVuIHRvdGFsIGluZmllcm5vLCBwdWVzIGFob3JhIGVsIMO6bmljbyBwcm9ww7NzaXRvIGVuIHN1IHZpZGEgZXMgZW5jb250cmFyIGEgc3UgaGlqby4gUGFzYSBlbCB0aWVtcG8gaGFzdGEgcXVlIHRyZXMgYcOxb3MgZGVzcHXDqXMgZGUgYsO6c3F1ZWRhIGluZnJ1Y3R1b3NhLCBkYSBjb24gc3UgcGFyYWRlcm8uICBFbGxhLCBlbiBzdSBhbW9yIGRlIG1hZHJlLCBoYWNlIHRvZG8gbG8gcG9zaWJsZSBwYXJhIHRyYWVybG8gZGUgcmVncmVzbyBhIGNhc2EgaGFzdGEgcXVlIGZpbmFsbWVudGUgbG8gbG9ncmEsIHBlcm8gZXN0byBoYWNlIHF1ZSBzdSBoaWpvIGRlc3BpZXJ0ZSB1bmEgaW50ZW5zYSBpcmEgZW4gY29udHJhIGRlIGVsbGEsIHB1ZXMgbG8gc2VwYXJhIGRlIE96YW4sIHF1aWVuIGhhIHNpZG8gZWwgaG9tYnJlIHF1ZSBsbyBoYSBjdWlkYWRvIGR1cmFudGUgZXN0b3MgdHJlcyBhw7FvcyB5IGEgcXVpZW4gY29uc2lkZXJhIHN1IHBhZHJlLiDCv0xvZ3JhcsOhIGdhbmFyc2UgZWwgYW1vciBkZSBzdSBoaWpvP1xcblxcblBhcmFsZWxvIGEgZXN0YSBzaXR1YWNpw7NuLCBLYXJzdSBlcyBlbmdhw7FhZGEgcG9yIHN1IGVzcG9zbywgc3VmcmllbmRvIHVuYSB0ZXJyaWJsZSBkZWNlcGNpw7NuIHF1ZSBsYSBoYWNlIHRvbWFyIGxhIGRlY2lzacOzbiBkZSBhYmFuZG9uYXIgc3UgaG9nYXIganVudG8gYSBzdXMgaGlqb3MuIERlc2VzcGVyYWRhLCBzaW4gdGVuZXIgdW4gbHVnYXIgYSBkb25kZSBpciwgc2UgdmUgb2JsaWdhZGEgYSByZWdyZXNhciBhIGxhIGNhc2EgZGUgc3UgbWFkcmUsIGEgcXVpZW4gbm8gdmUgZGVzZGUgaGFjZSBhw7FvcywgY29uIGVsIMO6bmljbyBkZXNlbyBkZSByZWNvbnN0cnVpciBzdSB2aWRhLlxcblxcbk96YW4gc2Ugc2llbnRlIGF0cmHDrWRvIHBvciBLYXJzdSB5IHN1IHBhc2nDs24gdmEgY3JlY2llbmRvIGNvbiBlbCBwYXNhciBkZSBsb3MgZMOtYXMsIGEgZXN0byBzZSBzdW1hIGFsIGFtb3IgcXVlIHNpZW50ZSBwb3IgS3V6ZXksIGEgcXVpZW4gdmUgY29tbyBzdSBoaWpvLlxcblxcbkxhcyBjb3NhcyBzZSBjb21wbGljYXLDoW4gbcOhcyBjdWFuZG8gS2Fyc3UgY29ub2NlIGEgQXRpbGxhLCB1biBtYWZpb3NvIHF1ZSBzZSBwcmVzZW50YSBjb21vIGVzY3JpdG9yLCB5IHF1ZSAgdGFtYmnDqW4gc2Ugc2llbnRlIGF0cmHDrWRvIHBvciBlbGxhLiBBbCBtaXNtbyB0aWVtcG8sIHN1IG1hcmlkbywgUmVoYSwgZGUgcXVpZW4gZXN0w6EgaW50ZW50YW5kbyBkaXZvcmNpYXJzZSwgaGEgcHJvbWV0aWRvIGhhY2VybGUgbGEgdmlkYSBpbXBvc2libGUsIGRlasOhbmRvbGEgc2luIGFwb3lvIGVjb27Ds21pY28sIGFkZW3DoXMgZGUgbmVnYXJzZSAgYSBkYXJsZSBlbCBkaXZvcmNpby4gwr9Qb2Ryw6EgIGVuY29udHJhciBlbCBhbW9yP1xcblxcbkxhIHByb3RhZ29uaXN0YSBkZSBlc3RhIGhpc3RvcmlhIHZpdmlyw6EgdW4gdmlhamUgZGUgcmVzaWxpZW5jaWEgeSByZW5vdmFjacOzbiwgbWllbnRyYXMgZW5mcmVudGEgbG9zIGRlc2Fmw61vcyBkZSByZWNvbnN0cnVpciBzdSB2aWRhIHkgZGVqYXIgYXRyw6FzIHVuIHBhc2FkbyBhZ29iaWFudGUuXCIsXG4gICAgICBcInBhaXNcIjogXCJUdXJxdcOtYVwiLFxuICAgICAgXCJpbWFnZW5cIjogXCJodHRwczovL2YwMDUuYmFja2JsYXplYjIuY29tL2ZpbGUvdHZhbGFjYXJ0YXBsdXMvdHZhbGFjYXJ0YXBsdXMvS2Fyc3UlMkMrTGErRnVlcnphK2RlK1VuYStNYWRyZS5qcGdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwidHJhbnNtaXNpb25cIixcbiAgICAgIFwiaWRcIjogMTc2MDAyMzQxMDQ1MyxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0wOVQxNToyMzozMC40NTNaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMTJUMDE6MDI6NTQuNzQwWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIkxhIGVzY2xhdmEgbWFkcmVcIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiRHJhbWFcIixcbiAgICAgIFwiY2FwaXR1bG9zXCI6IDEyNSxcbiAgICAgIFwiYcOxb1wiOiAyMDE2LFxuICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIkp1bGlhbmEgZXMgZnJ1dG8gZGUgbGEgdmlvbGVuY2lhIHF1ZSBzdSBtYWRyZSwgTHVlbmEsIHN1ZnJpw7MgZHVyYW50ZSBsYSB0cmF2ZXPDrWEgb2Nlw6FuaWNhIGEgYm9yZG8gZGUgdW4gbmF2w61vIG1lcmNhbnRlIHF1ZSB0ZW7DrWEgY29tbyBtZXJjYW5jw61hIGVzY2xhdm9zLiBBbCBjdW1wbGlyIDE4IGHDsW9zIHkgY29ub2NlciBsYSB2ZXJkYWQgc29icmUgc3UgcGFzYWRvLCBKdWxpYW5hIHNlIGp1cmEgYSBzaSBtaXNtYSBxdWUgamFtw6FzIGRlamFyw6EgcXVlIHVuIGhvbWJyZSBibGFuY28gbGEgdG9xdWUuIEVzIGVuIGVzZSBwcmVjaXNvIG1vbWVudG8gZGUgZGVzZXNwZXJhY2nDs24gcXVlIGNvbm9jZSBhbCBqb3ZlbiBwb3J0dWd1w6lzIE1pZ3VlbCwgdW4gdmlhamFudGUgZW4gYsO6c3F1ZWRhIGRlIHJlc3B1ZXN0YXMgc29icmUgZWwgbWlzdGVyaW8gcXVlIGludm9sdWNyYSBhIGxhIG11ZXJ0ZSBkZSBzdXMgcGFkcmVzLlxcblxcbk1pZ3VlbCBzZXLDoSBlbCBncmFuIGFtb3IgZGUgc3UgdmlkYSwgcGVybyBhZGVtw6FzIGRlc3BlcnRhcsOhIGVsIGludGVyw6lzIGRlIE1hcmlhIElzYWJlbCwgaGlqYSBkZWwgY29yb25lbCBDdXN0w7NkaW8uIENvbiBsYSBjb21wbGljaWRhZCBkZSBzdSBmaWVsIHkgc2FyY8Ohc3RpY2EgbXVjYW1hIEVzbcOpcmlhLCBNYXJpYSBJc2FiZWwgbm8gbWVkaXLDoSBzdXMgZXNmdWVyem9zIHBhcmEgcGVyanVkaWNhciBhIEp1bGlhbmEsIHF1ZSBqYW3DoXMgYWNlcHRhcsOhIGVsIGRlc2FjYXRvIGRlIHVuYSBlc2NsYXZhLlxcblxcbkp1bGlhbmEgdGFtYmnDqW4gZW5mcmVudGFyw6EgdW4gb2JzdMOhY3VsbyBtdXkgcG9kZXJvc286IGVsIENvbWVuZGFkb3IgQWxtZWlkYS4gQWwgY2FzYXJzZSBjb24gVGVyZXNhIHBvciB1biBhY3VlcmRvIHF1ZSBwZXJtaXRpcsOtYSBzYWNhciBhIHN1IGZhbWlsaWEgZGUgbGEgcnVpbmEgZmluYW5jaWVyYSwgQWxtZWlkYSBzZSBjb252aWVydGUgZW4gZWwgbnVldm8gc2XDsW9yIGRlbCBJbmdlbmlvIGRlbCBTb2wuIEVsIGNhc2FtaWVudG8gZGUgVGVyZXNhIHkgQWxtZWlkYSBmdWUgZWwgY29taWVuem8gZGUgdW5hIHRlcnJpYmxlIGV0YXBhIGVuIGxhIHZpZGEgZGUgSnVsaWFuYSwgeWEgcXVlIHN1IG51ZXZvIGFtbyBzZSBxdWVkYXLDoSBjb21wbGV0YW1lbnRlIG9iY2VjYWRvIHBvciBlbGxhLlxcblxcbkp1bGlhbmEgeSBNaWd1ZWwgdml2aXLDoW4ganVudG9zIHVuYSBpbnRlbnNhIGhpc3RvcmlhIGRlIGFtb3IsIHkgZW5mcmVudGFyw6FuIGEgZW5lbWlnb3MgcG9kZXJvc29zIHkgb2JzdMOhY3Vsb3MgYXBhcmVudGVtZW50ZSBkaWbDrWNpbGVzIGRlIHNvYnJlbGxldmFyLCBjb21vIGVsIHByZWp1aWNpbyBkZSB1bmEgw6lwb2NhIHF1ZSB2aXZlIGEgbGEgc29tYnJhIGRlIGxhIGVzY2xhdml0dWQuXCIsXG4gICAgICBcInBhaXNcIjogXCJCcmFzaWxcIixcbiAgICAgIFwiaW1hZ2VuXCI6IFwiaHR0cHM6Ly9mMDA1LmJhY2tibGF6ZWIyLmNvbS9maWxlL3R2YWxhY2FydGFwbHVzL3R2YWxhY2FydGFwbHVzL2xhK2VzY2xhdmErbWFkcmUuanBnXCIsXG4gICAgICBcImVzdGFkb1wiOiBcInRyYW5zbWlzaW9uXCIsXG4gICAgICBcImlkXCI6IDE3NjAwMjM1Mzk1NTgsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjUtMTAtMDlUMTU6MjU6MzkuNTU4WlwiLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI1LTEwLTEyVDAxOjEwOjIxLjc4N1pcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0aXR1bG9cIjogXCJDYXJwaW50aVwiLFxuICAgICAgXCJnZW5lcm9cIjogXCJSb21hbmNlXCIsXG4gICAgICBcImNhcGl0dWxvc1wiOiA0LFxuICAgICAgXCJhw7FvXCI6IDIwMjUsXG4gICAgICBcImRlc2NyaXBjaW9uXCI6IFwiVHJhcyByZWNpYmlyIGVsIGNvcmF6w7NuIGRlIE1lbGlrZSBBbGthbiwgQXNsaSBzZSBhZGVudHJhIGVuIHVuIG11bmRvIGRlIGRvbG9yLCBwb2RlciB5IGFtb3IgcHJvaGliaWRvLCBtaWVudHJhcyB0b2RvcyBzZSBwcmVndW50YW4gc2kgbGEgbXVlcnRlIGRlIE1lbGlrZSBmdWUgYWNjaWRlbnRlIG8gYXNlc2luYXRvLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiVHVycXXDrWFcIixcbiAgICAgIFwiaW1hZ2VuXCI6IFwiaHR0cHM6Ly9mMDA1LmJhY2tibGF6ZWIyLmNvbS9maWxlL3R2YWxhY2FydGFwbHVzL3R2YWxhY2FydGFwbHVzL0NhcnBpbnRpLmpwZWdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwidHJhbnNtaXNpb25cIixcbiAgICAgIFwiaWRcIjogMTc2MDExODY5MjgwMCxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0xMFQxNzo1MTozMi44MDBaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMTJUMDE6MDI6MTUuMTgwWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIkJldHR5IGxhIGZlYSxsYSBoaXN0b3JpYSBjb250aW7DumFcIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiUm9tYW5jZVwiLFxuICAgICAgXCJjYXBpdHVsb3NcIjogMTgsXG4gICAgICBcImHDsW9cIjogMjAyNCxcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJCZXR0eSBsYSBmZWEsbGEgaGlzdG9yaWEgY29udGludWEgbm92ZWxhIGNvbG9tYmlhbmEsIERvcyBkw6ljYWRhcyBkZXNwdcOpcyBkZSBjb25xdWlzdGFyIGVsIGNvcmF6w7NuIGRlIEFybWFuZG8gTWVuZG96YSB5IHRyYW5zZm9ybWFyIGVsIG11bmRvIGRlIGxhIG1vZGEsIEJlYXRyaXogUGluesOzbiBTb2xhbm8sIG1lam9yIGNvbm9jaWRhIGNvbW8gXFxcIkJldHR5IGxhIGZlYVxcXCIsIHNlIGVuZnJlbnRhIGEgbnVldm9zIGRlc2Fmw61vcyBlbiBzdSB2aWRhIHBlcnNvbmFsIHkgcHJvZmVzaW9uYWwuXFxuXFxuQ29udmVydGlkYSBlbiB1bmEgcmVjb25vY2lkYSBlbXByZXNhcmlhIHkgZGlzZcOxYWRvcmEgZGUgbW9kYSwgQmV0dHkgbGlkZXJhIEVjb21vZGEgY29uIG1hbm8gZmlybWUsIGluc3BpcmFuZG8gYSBsYXMgbXVqZXJlcyBjb24gc3VzIGNyZWFjaW9uZXMgeSBzdSB2aXNpw7NuIGlubm92YWRvcmEuIFNpbiBlbWJhcmdvLCBzdSBtYXRyaW1vbmlvIGNvbiBBcm1hbmRvLCBhdW5xdWUgbGxlbm8gZGUgYW1vciwgc2UgdmUgYW1lbmF6YWRvIHBvciBsYXMgaW5zZWd1cmlkYWRlcyBkZWwgcGFzYWRvIHkgbGEgYXBhcmljacOzbiBkZSBudWV2b3Mgcml2YWxlcyBlbiBlbCBtdW5kbyBkZSBsb3MgbmVnb2Npb3MuXFxuXFxuQWwgbWlzbW8gdGllbXBvLCBCZXR0eSBkZWJlIGxpZGlhciBjb24gbGFzIG51ZXZhcyBnZW5lcmFjaW9uZXMgZW4gRWNvbW9kYS4gTGFzIGrDs3ZlbmVzIGRpc2XDsWFkb3JhcywgaW5mbHVlbmNpYWRhcyBwb3IgbGFzIHRlbmRlbmNpYXMgZGlnaXRhbGVzIHkgbGEgY3VsdHVyYSBkZWwgaW5mbHVlbmNlciwgZGVzYWbDrWFuIGxhIHZpc2nDs24gdHJhZGljaW9uYWwgZGUgQmV0dHkgc29icmUgbGEgbW9kYSwgZ2VuZXJhbmRvIHRlbnNpb25lcyB5IGRlYmF0ZXMgZW4gbGEgZW1wcmVzYS5cXG5cXG5FbiBtZWRpbyBkZSBlc3RvcyByZXRvcywgQmV0dHkgZW5jdWVudHJhIGFwb3lvIGVuIHN1cyBmaWVsZXMgYW1pZ29zLCBNYXJjZWxhIHkgSHVnbywgcXVpZW5lcyBsYSBhY29tcGHDsWFuIGVuIHN1cyBhdmVudHVyYXMgeSBsZSBvZnJlY2VuIGNvbnNlam9zIHNhYmlvcy4gQWRlbcOhcywgZGVzY3VicmUgbnVldmFzIGFsaWFkYXMgZW4gYWxndW5hcyBkZSBsYXMgasOzdmVuZXMgZGlzZcOxYWRvcmFzIHF1ZSwgYSBwZXNhciBkZSBzdXMgZGlmZXJlbmNpYXMsIHJlY29ub2NlbiBlbCB0YWxlbnRvIHkgbGEgZXhwZXJpZW5jaWEgZGUgQmV0dHkuIEJldHR5IGxhIGZlYSxsYSBoaXN0b3JpYSBjb250aW7DumEgdGVsZW5vdmVsYSBjb2xvbWJpYW5hLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiQ29sb21iaWFcIixcbiAgICAgIFwiaW1hZ2VuXCI6IFwiaHR0cHM6Ly9mMDA1LmJhY2tibGF6ZWIyLmNvbS9maWxlL3R2YWxhY2FydGFwbHVzL3R2YWxhY2FydGFwbHVzL0JldHR5K2xhK2ZlYSUyQ2xhK2hpc3RvcmlhK2NvbnRpbiVDMyVCQWErMi5wbmdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwiZmluYWxpemFkYVwiLFxuICAgICAgXCJpZFwiOiAxNzYwMTE5MDU3MTgwLFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTEwVDE3OjU3OjM3LjE4MFpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0xMlQwMTowMDo1MC4yMjBaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0dWxvXCI6IFwiTGEgVmVuZ2FuemEgZGUgQW5hbMOtYSAyXCIsXG4gICAgICBcImdlbmVyb1wiOiBcIkRyYW1hXCIsXG4gICAgICBcImNhcGl0dWxvc1wiOiA2NyxcbiAgICAgIFwiYcOxb1wiOiAyMDI1LFxuICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIkVuIHVuYSBqdWdhZGEgbWFxdWlhdsOpbGljYSwgbG9ncmEgc2FsaXIgZGUgbGEgY8OhcmNlbCBwYXJhIHZvbHZlciBhIGxhIHBvbMOtdGljYSwgc3Ugb2JqZXRpdm8gZXMgY2xhcm86IGNhc3RpZ2FyIGEgQW5hbMOtYSB5IGNvbnZlcnRpcnNlIGVuIGVsIHByZXNpZGVudGUgZGUgQ29sb21iaWEuIFBhcmEgZXZpdGFyIGVzdG8geSBwcm90ZWdlciBhIGxvcyBzdXlvcywgQW5hbMOtYSBwb25kcsOhIGVuIHJpZXNnbyBzdSB2aWRhIHkgc2UgZW5mcmVudGFyw6EgYSBQYXVsaW5hIFBlw7FhLCBhbGlhZGEgZGUgTWVqw61hIHkgYXNlc2luYSBwcm9mZXNpb25hbC5cIixcbiAgICAgIFwicGFpc1wiOiBcIkNvbG9tYmlhXCIsXG4gICAgICBcImltYWdlblwiOiBcImh0dHBzOi8vZjAwNS5iYWNrYmxhemViMi5jb20vZmlsZS90dmFsYWNhcnRhcGx1cy90dmFsYWNhcnRhcGx1cy9WZW5nYW56YS1kZS1BbmFsaWEtMjMuanBnXCIsXG4gICAgICBcImVzdGFkb1wiOiBcImZpbmFsaXphZGFcIixcbiAgICAgIFwiaWRcIjogMTc2MDExOTg1NjcwMCxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0xMFQxODoxMDo1Ni43MDBaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMTJUMDE6MDc6MDUuMjUyWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIkxla2VcIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiUm9tYW5jZVwiLFxuICAgICAgXCJjYXBpdHVsb3NcIjogMzAsXG4gICAgICBcImHDsW9cIjogMjAxOSxcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJMZWtlIG5vdmVsYSB0dXJjYSB0aWVuZSBjb21vIHBlcnNvbmFqZSBwcmluY2lwYWwgYSBZYXNlbWluLCBxdWllbiBzZSBtdWTDsyBhIEFsZW1hbmlhIHkgdHV2byBtdWNob3MgYWx0aWJham9zLiBBIHBlc2FyIGRlIGVsbG8sIG5vIHR1dm8gbWllZG8gZGUgZW1iYXJjYXJzZSBlbiB1bmEgYXZlbnR1cmEuIExvZ3JhcsOtYSBpbmdyZXNhciBlbiBsYSBlc2N1ZWxhIGRlIGxleWVzLCB5IGRlYmVyw6EgdHJhYmFqYXIgbWVkaW8gdGllbXBvIHBhcmEgcGFnYXIgc3VzIGVzdHVkaW9zLlxcblxcbkRlc2N1YnJpcmVtb3MgcXVlIHRpZW5lIHVuIGhlcm1hbm8gY29uIGRpc2NhcGFjaWRhZCBhdWRpdGl2YSx5IHN1IMO6bmljYSBtZXRhIGVzIGxvZ3JhciByZWNpYmlyIGxhIGN1c3RvZGlhIGRlbCBqb3ZlbiwgcXVpZW4gaGEgdGVuaWRvIHF1ZSBjcmVjZXIgZW4gdW4gb3JmYW5hdG8gcG9ycXVlIHN1cyBwYWRyZXMgbm8gcXVpc2llcm9uIGhhY2Vyc2UgY2FyZ28gZGUgw6lsLiBJZ3VhbG1lbnRlLCBlc3TDoSBhaG9ycmFuZG8gZGluZXJvIHBhcmEgY29zdGVhciBsYSBvcGVyYWNpw7NuIGRlIHN1IGhlcm1hbm8uIENvbm9jZXJlbW9zIGEgb3RybyBwZXJzb25hamUgbGxhbWFkbyBDZW0sIHF1aWVuIGVzIGVsIG1heW9yIGRlIGRvcyBoaWpvcyBkZSB1bmEgZmFtaWxpYSBhY2F1ZGFsYWRhLiBTdSBpbmZhbmNpYSBmdWUgdHJhdW3DoXRpY2EsIHlhIHF1ZSBmdWUgdGVzdGlnbyBkZSB1biBpbmNpZGVudGUgcXVlIGhpem8gcXVlIHN1cyBwYWRyZXMgc2UgZGl2b3JjaWFyYW4uIEFob3JhIGVzIHVuIGhvbWJyZSB0YWxlbnRvc28gcGFyYSBsb3MgbmVnb2Npb3MsIHBlcm8gc3UgdmlkYSBwZXJzb25hbCBlcyBvdHJhLiBObyBjb25mw61hIGbDoWNpbG1lbnRlIGVuIGxhcyBwZXJzb25hcyB5IHRpZW5lIGNpZXJ0byByZWNlbG8gY29uIGxhcyBtdWplcmVzLiBTaW4gZXNwZXJhciBjb25vY2Vyc2UsIHRhbnRvIFlhc2VtaW4gY29tbyBDZW0gdGVuZHLDoW4gdW4gZW5jdWVudHJvIHF1ZSBzZSBwcm9kdWNpcsOhIGVuIHVuIGV2ZW50byBxdWUgb3JnYW5pesOzIGxhIGNvbXBhw7HDrWEgZGUgZXN0ZSBqb3ZlbiBhcHVlc3RvLlxcblxcbk5pbmd1bm8gYnVzY2FiYSBlc3RlIGVuY3VlbnRybyBlbiBMZWtlIHNlcmllIHR1cmNhLCBlbCBjdWFsIHNlcsOhIGVsIGRlc2VuY2FkZW5hbnRlIGRlIHVuYSBzZXJpZSBkZSBzdWNlc29zIHF1ZSBkZWJlcyBkZXNjdWJyaXIuXCIsXG4gICAgICBcInBhaXNcIjogXCJUdXJxdcOtYVwiLFxuICAgICAgXCJpbWFnZW5cIjogXCJodHRwczovL2YwMDUuYmFja2JsYXplYjIuY29tL2ZpbGUvdHZhbGFjYXJ0YXBsdXMvdHZhbGFjYXJ0YXBsdXMvTGVrZS5qcGdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwiZmluYWxpemFkYVwiLFxuICAgICAgXCJpZFwiOiAxNzYwMTIwMDM4MDY3LFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTEwVDE4OjEzOjU4LjA2N1pcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0xMlQwMTowNDozOS4wMTJaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0dWxvXCI6IFwiTWFuw61hIGRlIHRpXCIsXG4gICAgICBcImdlbmVyb1wiOiBcIkRyYW1hXCIsXG4gICAgICBcImNhcGl0dWxvc1wiOiAxMTEsXG4gICAgICBcImHDsW9cIjogMjAyNCxcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJOYXJyYSBsYSBoaXN0b3JpYSBkZSBMdW5hIChNb3JlaXJhKSB5IFZpb2xhIChHYWJ6KSwgZG9zIGNoaWNhcyBxdWUgc2UgY29udmllcnRlbiBlbiBhbWlnYXMgY3VhbmRvIGxhIHNlZ3VuZGEgc2UgaW5zdGFsYSBlbiBBbmdyYSBkb3MgUmVpcyBqdW50byBhIHN1IG1hcmlkbyBNYXZpLiBDb24gZWwgdGllbXBvLCBWaW9sYSBzZSBkZXN0YWNhIGVuIGxhIGdhc3Ryb25vbcOtYSwgbWlzbWEgw6FyZWEgZGUgTHVuYSB5IHRhbWJpw6luIHNlIGludm9sdWNyYSBjb24gUnVkw6EgKENoYXkgU3VlZGUpLCBlbCBob21icmUgYWwgcXVlIEx1bmEgYW1hLiBBw7FvcyBkZXNwdcOpcywgVmlvbGEgc2UgaGEgY29udmVydGlkbyBlbiB1bmEgw6l4aXRvc2EgY2hlZiwgbWllbnRyYXMgTHVuYSBwZXJkacOzIHRvZG8gbG8gcXVlIHRlbsOtYS4gQW1iYXMgcml2YWxlcyBzZSB1bmVuIHBhcmEgaW50ZW50YXIgbGliZXJhciBhIFJ1ZMOhIGRlIGxhIGPDoXJjZWwsIHRyYXMgdW5hIHRyYW1wYSBvY2FzaW9uYWRhIHBvciBNYXZpLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiQnJhc2lsXCIsXG4gICAgICBcImltYWdlblwiOiBcImh0dHBzOi8vZjAwNS5iYWNrYmxhemViMi5jb20vZmlsZS8xMjAwMDAvdHZhbGFjYXJ0YS9tYW5pYStkZSt0aTIuanBnXCIsXG4gICAgICBcImVzdGFkb1wiOiBcImZpbmFsaXphZGFcIixcbiAgICAgIFwiaWRcIjogMTc2MDEyMDkxMjAzNSxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0xMFQxODoyODozMi4wMzVaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMTBUMTg6Mjg6MzIuMDM1WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIk1laG1lZCBTdWx0w6FuIGRlIGxhcyBDb25xdWlzdGFzXCIsXG4gICAgICBcImdlbmVyb1wiOiBcIkFjY2nDs25cIixcbiAgICAgIFwiY2FwaXR1bG9zXCI6IDE1LFxuICAgICAgXCJhw7FvXCI6IDIwMjQsXG4gICAgICBcImRlc2NyaXBjaW9uXCI6IFwiRW4gZXN0YSBhcGFzaW9uYW50ZSBwcm9kdWNjacOzbiwgbm9zIGFkZW50cmFtb3MgZW4gZWwgY29yYXrDs24gZGVsIEltcGVyaW8gb3RvbWFubywgZW4gdW5hIMOpcG9jYSBjYXJnYWRhIGRlIGNvbnF1aXN0YXMgeSBsdWNoYXMgcG9yIGxhIGp1c3RpY2lhLCBwYXJhIHNlciB0ZXN0aWdvcyBkZWwgdmlhamUgdHJpdW5mYWwgZGVsIGpvdmVuIHN1bHTDoW4gTWVobWVkIElJLCBjdXlhIGludGVsaWdlbmNpYSB5IHZhbGVudMOtYSBsbyBndWlhcsOhbiBlbiBzdSBjYW1pbm8gaGFjaWEgbGEgZ3JhbmRlemEuXCIsXG4gICAgICBcInBhaXNcIjogXCJUdXJxdcOtYVwiLFxuICAgICAgXCJpbWFnZW5cIjogXCJodHRwczovL2YwMDUuYmFja2JsYXplYjIuY29tL2ZpbGUvdHZhbGFjYXJ0YXBsdXMvdHZhbGFjYXJ0YXBsdXMvTWVobWVkK1N1bHRhbitvZitDb25xdWVzdHMrMi5qcGdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwidHJhbnNtaXNpb25cIixcbiAgICAgIFwiaWRcIjogMTc2MDEyODU5OTY1NixcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0xMFQyMDozNjozOS42NTZaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMTJUMDE6MDU6MzIuNDIwWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIlJlcHJlc2FsaWFzXCIsXG4gICAgICBcImdlbmVyb1wiOiBcIkFjY2nDs25cIixcbiAgICAgIFwiY2FwaXR1bG9zXCI6IDEwLFxuICAgICAgXCJhw7FvXCI6IDIwMjQsXG4gICAgICBcImRlc2NyaXBjaW9uXCI6IFwiQWxpIFJlc2F0LCB1biBmw6lycmVvIGhvbWJyZSBhcGVnYWRvIGEgc3VzIHRyYWRpY2lvbmVzLCBlcyBsaWJlcmFkbyB0cmFzIGxhcmdvcyBhw7FvcyBlbiBwcmlzacOzbiBncmFjaWFzIGEgdW5hIGFtbmlzdMOtYS4gQ29uIGxhIGVzcGVyYW56YSBkZSByZWNvbmNpbGlhcnNlIGNvbiBzdSBoaWpvLCBxdWllbiBsbyBkZXNwcmVjaWEsIHkgY29uIGVsIGRlc2VvIGRlIGhhY2VyIHBhZ2FyIGEgbGEgbWFmaWEgdG9kbyBtYWwgcXVlIGxlIGhpem8sIEFsaSBSZXNhdCBpcsOhIGVuIGJ1c2NhIGRlIHJlZGVuY2nDs24uLi4geSByZXByZXNhbGlhcy5cIixcbiAgICAgIFwicGFpc1wiOiBcIlR1cnF1w61hXCIsXG4gICAgICBcImltYWdlblwiOiBcImh0dHBzOi8vZjAwNS5iYWNrYmxhemViMi5jb20vZmlsZS90dmFsYWNhcnRhcGx1cy90dmFsYWNhcnRhcGx1cy9SZXByZXNhbGlhcy5qcGdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwidHJhbnNtaXNpb25cIixcbiAgICAgIFwiaWRcIjogMTc2MDEyOTI1NDMyNyxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNS0xMC0xMFQyMDo0NzozNC4zMjdaXCIsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjUtMTAtMTJUMDE6MDY6MDAuOTMyWlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdHVsb1wiOiBcIkxhem9zIFJvdG9zIChZYWxhbilcIixcbiAgICAgIFwiZ2VuZXJvXCI6IFwiRHJhbWFcIixcbiAgICAgIFwiY2FwaXR1bG9zXCI6IDk1LFxuICAgICAgXCJhw7FvXCI6IDIwMjQsXG4gICAgICBcImRlc2NyaXBjaW9uXCI6IFwiWWFsYW4gbm92ZWxhIHR1cmNhLCBNZWxpa2UsIHVuYSBtdWplciBmdWVydGUgeSByZXNpbGllbnRlLCBoYSBzYWNyaWZpY2FkbyAyMCBhw7FvcyBkZSBzdSB2aWRhIGVuIHByaXNpw7NuIHBhcmEgcHJvdGVnZXIgYSBzdSBoaWphIEVsaWYuIEFjdXNhZGEgaW5qdXN0YW1lbnRlIGRlIHVuIGNyaW1lbiBxdWUgbm8gY29tZXRpw7MsIE1lbGlrZSBoYSBzb3BvcnRhZG8gZWwgZG9sb3IgeSBsYSBzb2xlZGFkIGNvbiBsYSBlc3BlcmFuemEgZGUgdW4gZnV0dXJvIG1lam9yIHBhcmEgc3UgcGVxdWXDsWEuXFxuXFxuQWwgZmluIGxpYmVyYWRhLCBNZWxpa2UgcmVncmVzYSBhIHVuIG11bmRvIHF1ZSB5YSBubyByZWNvbm9jZS4gU3UgaGlqYSBFbGlmIGhhIGNyZWNpZG8gYmFqbyBsYSB0dXRlbGEgZGUgb3RyYXMgcGVyc29uYXMsIHkgTWVsaWtlIGRlYmUgbHVjaGFyIHBhcmEgcmVjdXBlcmFyIHN1IGx1Z2FyIGVuIGxhIHZpZGEgZGUgc3UgaGlqYS5cXG5cXG5TaW4gZW1iYXJnbywgbGEgdmVyZGFkIHNvYnJlIGVsIGNyaW1lbiBxdWUgbGEgbGxldsOzIGEgcHJpc2nDs24gbm8gdGFyZGFyw6EgZW4gc2FsaXIgYSBsYSBsdXouIE1lbGlrZSBzZSB2ZXLDoSBlbnZ1ZWx0YSBlbiB1bmEgcmVkIGRlIG1lbnRpcmFzLCBlbmdhw7FvcyB5IHRyYWljaW9uZXMgcXVlIGFtZW5hemFuIGNvbiBkZXN0cnVpciBzdSB2aWRhIHkgbGEgZGUgc3UgaGlqYS5cXG5cXG5FbiBtZWRpbyBkZSBsYSBhZHZlcnNpZGFkLCBNZWxpa2UgZW5jb250cmFyw6EgYXBveW8gZW4gU3VuYSwgdW5hIGpvdmVuIGFib2dhZGEgaWRlYWxpc3RhIHF1ZSBjcmVlIGVuIHN1IGlub2NlbmNpYS4gSnVudGFzLCBsdWNoYXLDoW4gcG9yIGRlc2VubWFzY2FyYXIgYSBsb3MgdmVyZGFkZXJvcyBjdWxwYWJsZXMgeSByZXN0YXVyYXIgZWwgaG9ub3IgZGUgTWVsaWtlLlxcblxcbkEgbG8gbGFyZ28gZGUgc3UgY2FtaW5vLCBNZWxpa2Ugc2UgZW5mcmVudGFyw6EgYSBwb2Rlcm9zb3MgZW5lbWlnb3MgcXVlIG5vIHNlIGRldGVuZHLDoW4gYW50ZSBuYWRhIHBhcmEgc2lsZW5jaWFybGEuIERlYmVyw6EgdXRpbGl6YXIgc3UgYXN0dWNpYSwgc3UgdmFsZW50w61hIHkgc3UgZGV0ZXJtaW5hY2nDs24gcGFyYSBwcm90ZWdlciBhIHN1IGhpamEgeSBkZXNjdWJyaXIgbGEgdmVyZGFkLiBZYWxhbiBzZXJpZSB0dXJjYS5cIixcbiAgICAgIFwicGFpc1wiOiBcIlR1cnF1w61hXCIsXG4gICAgICBcImltYWdlblwiOiBcImh0dHBzOi8vZjAwNS5iYWNrYmxhemViMi5jb20vZmlsZS90dmFsYWNhcnRhcGx1cy90dmFsYWNhcnRhcGx1cy9MYXpvcytSb3Rvcy5qcGdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwiZmluYWxpemFkYVwiLFxuICAgICAgXCJpZFwiOiAxNzYwMTI5OTY2NTYyLFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTEwVDIwOjU5OjI2LjU2MlpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0xMlQwMTowNDoxNS44MjhaXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0dWxvXCI6IFwiRGVzdGlubyByb3RvXCIsXG4gICAgICBcImdlbmVyb1wiOiBcIkRyYW1hXCIsXG4gICAgICBcImNhcGl0dWxvc1wiOiAxMjEsXG4gICAgICBcImHDsW9cIjogMjAyMixcbiAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJNZWxpa2UsIHF1ZSBzb2JyZXZpdmnDsyBlbiBwcmlzacOzbiBkdXJhbnRlIDIwIGHDsW9zIHBvciBlbCBiaWVuIGRlIHN1IGhpamEsIGNhecOzIGVuIG1lZGlvIGRlIHVuYSBncmFuIG1lbnRpcmEgY3VhbmRvIGZ1ZSBwdWVzdGEgZW4gbGliZXJ0YWQuIFRvZGFzIGxhcyBpbmp1c3RpY2lhcyB5IGVsIG1hbCBxdWUgc2UgbGUgaGFuIGhlY2hvIHNhbGVuIGFsIGRlc2N1YmllcnRvIGFudGUgTWVsaWtlLlwiLFxuICAgICAgXCJwYWlzXCI6IFwiVHVycXXDrWFcIixcbiAgICAgIFwiaW1hZ2VuXCI6IFwiaHR0cHM6Ly9mMDA1LmJhY2tibGF6ZWIyLmNvbS9maWxlL3R2YWxhY2FydGFwbHVzL3R2YWxhY2FydGFwbHVzL0Rlc3Rpbm8rcm90by5qcGdcIixcbiAgICAgIFwiZXN0YWRvXCI6IFwiZmluYWxpemFkYVwiLFxuICAgICAgXCJpZFwiOiAxNzYwMjM5MzkwMDM4LFxuICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDI1LTEwLTEyVDAzOjIzOjEwLjAzOFpcIixcbiAgICAgIFwidXBkYXRlZEF0XCI6IFwiMjAyNS0xMC0xMlQwMzoyMzoxMC4wMzhaXCJcbiAgICB9XG4gIF0sXG4gIFwic2V0dGluZ3NcIjoge1xuICAgIFwidmVyc2lvblwiOiBcIjIuMS4wXCIsXG4gICAgXCJhdXRvU3luY1wiOiB0cnVlLFxuICAgIFwic3luY0ludGVydmFsXCI6IDMwMDAwMCxcbiAgICBcImVuYWJsZU5vdGlmaWNhdGlvbnNcIjogdHJ1ZSxcbiAgICBcIm1heE5vdGlmaWNhdGlvbnNcIjogMTAwLFxuICAgIFwibWV0YWRhdGFcIjoge1xuICAgICAgXCJ0b3RhbE9yZGVyc1wiOiAwLFxuICAgICAgXCJ0b3RhbFJldmVudWVcIjogMCxcbiAgICAgIFwibGFzdE9yZGVyRGF0ZVwiOiBcIlwiLFxuICAgICAgXCJzeXN0ZW1VcHRpbWVcIjogXCIyMDI1LTEwLTA0VDAyOjU1OjM2LjI5NVpcIlxuICAgIH1cbiAgfSxcbiAgXCJzeW5jU3RhdHVzXCI6IHtcbiAgICBcImxhc3RTeW5jXCI6IFwiMjAyNS0xMC0wNFQwMzo0OTowMy43MjlaXCIsXG4gICAgXCJpc09ubGluZVwiOiB0cnVlLFxuICAgIFwicGVuZGluZ0NoYW5nZXNcIjogMVxuICB9LFxuICBcImV4cG9ydERhdGVcIjogXCIyMDI1LTEwLTA0VDAzOjQ5OjEwLjk5MlpcIlxufTtcblxuLy8gQ1JFREVOQ0lBTEVTIERFIEFDQ0VTTyAoQ09ORklHVVJBQkxFUylcbmNvbnN0IEFETUlOX0NSRURFTlRJQUxTID0ge1xuICB1c2VybmFtZTogJ2FkbWluJyxcbiAgcGFzc3dvcmQ6ICdhZG1pbjEyMydcbn07XG5cbi8vIFR5cGVzXG5leHBvcnQgaW50ZXJmYWNlIFByaWNlQ29uZmlnIHtcbiAgbW92aWVQcmljZTogbnVtYmVyO1xuICBzZXJpZXNQcmljZTogbnVtYmVyO1xuICB0cmFuc2ZlckZlZVBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgbm92ZWxQcmljZVBlckNoYXB0ZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeVpvbmUge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvc3Q6IG51bWJlcjtcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdmVsIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0dWxvOiBzdHJpbmc7XG4gIGdlbmVybzogc3RyaW5nO1xuICBjYXBpdHVsb3M6IG51bWJlcjtcbiAgYcOxbzogbnVtYmVyO1xuICBkZXNjcmlwY2lvbj86IHN0cmluZztcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybmluZycgfCAnaW5mbyc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIHNlY3Rpb246IHN0cmluZztcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIHJlYWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3luY1N0YXR1cyB7XG4gIGxhc3RTeW5jOiBzdHJpbmc7XG4gIGlzT25saW5lOiBib29sZWFuO1xuICBwZW5kaW5nQ2hhbmdlczogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN5c3RlbUNvbmZpZyB7XG4gIHZlcnNpb246IHN0cmluZztcbiAgbGFzdEV4cG9ydDogc3RyaW5nO1xuICBwcmljZXM6IFByaWNlQ29uZmlnO1xuICBkZWxpdmVyeVpvbmVzOiBEZWxpdmVyeVpvbmVbXTtcbiAgbm92ZWxzOiBOb3ZlbFtdO1xuICBzZXR0aW5nczoge1xuICAgIGF1dG9TeW5jOiBib29sZWFuO1xuICAgIHN5bmNJbnRlcnZhbDogbnVtYmVyO1xuICAgIGVuYWJsZU5vdGlmaWNhdGlvbnM6IGJvb2xlYW47XG4gICAgbWF4Tm90aWZpY2F0aW9uczogbnVtYmVyO1xuICB9O1xuICBtZXRhZGF0YToge1xuICAgIHRvdGFsT3JkZXJzOiBudW1iZXI7XG4gICAgdG90YWxSZXZlbnVlOiBudW1iZXI7XG4gICAgbGFzdE9yZGVyRGF0ZTogc3RyaW5nO1xuICAgIHN5c3RlbVVwdGltZTogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkbWluU3RhdGUge1xuICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG4gIHByaWNlczogUHJpY2VDb25maWc7XG4gIGRlbGl2ZXJ5Wm9uZXM6IERlbGl2ZXJ5Wm9uZVtdO1xuICBub3ZlbHM6IE5vdmVsW107XG4gIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbltdO1xuICBzeW5jU3RhdHVzOiBTeW5jU3RhdHVzO1xuICBzeXN0ZW1Db25maWc6IFN5c3RlbUNvbmZpZztcbn1cblxudHlwZSBBZG1pbkFjdGlvbiA9IFxuICB8IHsgdHlwZTogJ0xPR0lOJzsgcGF5bG9hZDogeyB1c2VybmFtZTogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0gfVxuICB8IHsgdHlwZTogJ0xPR09VVCcgfVxuICB8IHsgdHlwZTogJ1VQREFURV9QUklDRVMnOyBwYXlsb2FkOiBQcmljZUNvbmZpZyB9XG4gIHwgeyB0eXBlOiAnQUREX0RFTElWRVJZX1pPTkUnOyBwYXlsb2FkOiBPbWl0PERlbGl2ZXJ5Wm9uZSwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCc+IH1cbiAgfCB7IHR5cGU6ICdVUERBVEVfREVMSVZFUllfWk9ORSc7IHBheWxvYWQ6IERlbGl2ZXJ5Wm9uZSB9XG4gIHwgeyB0eXBlOiAnREVMRVRFX0RFTElWRVJZX1pPTkUnOyBwYXlsb2FkOiBudW1iZXIgfVxuICB8IHsgdHlwZTogJ0FERF9OT1ZFTCc7IHBheWxvYWQ6IE9taXQ8Tm92ZWwsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnPiB9XG4gIHwgeyB0eXBlOiAnVVBEQVRFX05PVkVMJzsgcGF5bG9hZDogTm92ZWwgfVxuICB8IHsgdHlwZTogJ0RFTEVURV9OT1ZFTCc7IHBheWxvYWQ6IG51bWJlciB9XG4gIHwgeyB0eXBlOiAnQUREX05PVElGSUNBVElPTic7IHBheWxvYWQ6IE9taXQ8Tm90aWZpY2F0aW9uLCAnaWQnIHwgJ3RpbWVzdGFtcCc+IH1cbiAgfCB7IHR5cGU6ICdNQVJLX05PVElGSUNBVElPTl9SRUFEJzsgcGF5bG9hZDogc3RyaW5nIH1cbiAgfCB7IHR5cGU6ICdDTEVBUl9OT1RJRklDQVRJT05TJyB9XG4gIHwgeyB0eXBlOiAnVVBEQVRFX1NZTkNfU1RBVFVTJzsgcGF5bG9hZDogUGFydGlhbDxTeW5jU3RhdHVzPiB9XG4gIHwgeyB0eXBlOiAnU1lOQ19TVEFURSc7IHBheWxvYWQ6IFBhcnRpYWw8QWRtaW5TdGF0ZT4gfVxuICB8IHsgdHlwZTogJ0xPQURfU1lTVEVNX0NPTkZJRyc7IHBheWxvYWQ6IFN5c3RlbUNvbmZpZyB9XG4gIHwgeyB0eXBlOiAnVVBEQVRFX1NZU1RFTV9DT05GSUcnOyBwYXlsb2FkOiBQYXJ0aWFsPFN5c3RlbUNvbmZpZz4gfTtcblxuaW50ZXJmYWNlIEFkbWluQ29udGV4dFR5cGUge1xuICBzdGF0ZTogQWRtaW5TdGF0ZTtcbiAgbG9naW46ICh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBib29sZWFuO1xuICBsb2dvdXQ6ICgpID0+IHZvaWQ7XG4gIHVwZGF0ZVByaWNlczogKHByaWNlczogUHJpY2VDb25maWcpID0+IHZvaWQ7XG4gIGFkZERlbGl2ZXJ5Wm9uZTogKHpvbmU6IE9taXQ8RGVsaXZlcnlab25lLCAnaWQnIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0Jz4pID0+IHZvaWQ7XG4gIHVwZGF0ZURlbGl2ZXJ5Wm9uZTogKHpvbmU6IERlbGl2ZXJ5Wm9uZSkgPT4gdm9pZDtcbiAgZGVsZXRlRGVsaXZlcnlab25lOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgYWRkTm92ZWw6IChub3ZlbDogT21pdDxOb3ZlbCwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCc+KSA9PiB2b2lkO1xuICB1cGRhdGVOb3ZlbDogKG5vdmVsOiBOb3ZlbCkgPT4gdm9pZDtcbiAgZGVsZXRlTm92ZWw6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xuICBhZGROb3RpZmljYXRpb246IChub3RpZmljYXRpb246IE9taXQ8Tm90aWZpY2F0aW9uLCAnaWQnIHwgJ3RpbWVzdGFtcCc+KSA9PiB2b2lkO1xuICBtYXJrTm90aWZpY2F0aW9uUmVhZDogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGNsZWFyTm90aWZpY2F0aW9uczogKCkgPT4gdm9pZDtcbiAgZXhwb3J0U3lzdGVtQ29uZmlnOiAoKSA9PiBzdHJpbmc7XG4gIGltcG9ydFN5c3RlbUNvbmZpZzogKGNvbmZpZ0pzb246IHN0cmluZykgPT4gYm9vbGVhbjtcbiAgZXhwb3J0Q29tcGxldGVTb3VyY2VDb2RlOiAoKSA9PiB2b2lkO1xuICBzeW5jV2l0aFJlbW90ZTogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgYnJvYWRjYXN0Q2hhbmdlOiAoY2hhbmdlOiBhbnkpID0+IHZvaWQ7XG4gIHN5bmNBbGxTZWN0aW9uczogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgZ2V0QXZhaWxhYmxlQ291bnRyaWVzOiAoKSA9PiBzdHJpbmdbXTtcbiAgdXBkYXRlU3lzdGVtQ29uZmlnOiAoY29uZmlnOiBQYXJ0aWFsPFN5c3RlbUNvbmZpZz4pID0+IHZvaWQ7XG59XG5cbi8vIEluaXRpYWwgc3RhdGUgd2l0aCBlbWJlZGRlZCBjb25maWd1cmF0aW9uXG5jb25zdCBpbml0aWFsU3RhdGU6IEFkbWluU3RhdGUgPSB7XG4gIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gIHByaWNlczogRU1CRURERURfQ09ORklHLnByaWNlcyxcbiAgZGVsaXZlcnlab25lczogRU1CRURERURfQ09ORklHLmRlbGl2ZXJ5Wm9uZXMsXG4gIG5vdmVsczogRU1CRURERURfQ09ORklHLm5vdmVscyxcbiAgbm90aWZpY2F0aW9uczogW10sXG4gIHN5bmNTdGF0dXM6IHtcbiAgICBsYXN0U3luYzogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIGlzT25saW5lOiB0cnVlLFxuICAgIHBlbmRpbmdDaGFuZ2VzOiAwLFxuICB9LFxuICBzeXN0ZW1Db25maWc6IEVNQkVEREVEX0NPTkZJRyxcbn07XG5cbi8vIFJlZHVjZXJcbmZ1bmN0aW9uIGFkbWluUmVkdWNlcihzdGF0ZTogQWRtaW5TdGF0ZSwgYWN0aW9uOiBBZG1pbkFjdGlvbik6IEFkbWluU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnTE9HSU4nOlxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lID09PSBBRE1JTl9DUkVERU5USUFMUy51c2VybmFtZSAmJiBhY3Rpb24ucGF5bG9hZC5wYXNzd29yZCA9PT0gQURNSU5fQ1JFREVOVElBTFMucGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzQXV0aGVudGljYXRlZDogdHJ1ZSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlO1xuXG4gICAgY2FzZSAnTE9HT1VUJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlIH07XG5cbiAgICBjYXNlICdVUERBVEVfUFJJQ0VTJzpcbiAgICAgIGNvbnN0IHVwZGF0ZWRDb25maWcgPSB7XG4gICAgICAgIC4uLnN0YXRlLnN5c3RlbUNvbmZpZyxcbiAgICAgICAgcHJpY2VzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgbGFzdEV4cG9ydDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcmljZXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBzeXN0ZW1Db25maWc6IHVwZGF0ZWRDb25maWcsXG4gICAgICAgIHN5bmNTdGF0dXM6IHsgLi4uc3RhdGUuc3luY1N0YXR1cywgcGVuZGluZ0NoYW5nZXM6IHN0YXRlLnN5bmNTdGF0dXMucGVuZGluZ0NoYW5nZXMgKyAxIH1cbiAgICAgIH07XG5cbiAgICBjYXNlICdBRERfREVMSVZFUllfWk9ORSc6XG4gICAgICBjb25zdCBuZXdab25lOiBEZWxpdmVyeVpvbmUgPSB7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBpZDogRGF0ZS5ub3coKSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGNvbmZpZ1dpdGhOZXdab25lID0ge1xuICAgICAgICAuLi5zdGF0ZS5zeXN0ZW1Db25maWcsXG4gICAgICAgIGRlbGl2ZXJ5Wm9uZXM6IFsuLi5zdGF0ZS5zeXN0ZW1Db25maWcuZGVsaXZlcnlab25lcywgbmV3Wm9uZV0sXG4gICAgICAgIGxhc3RFeHBvcnQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGVsaXZlcnlab25lczogWy4uLnN0YXRlLmRlbGl2ZXJ5Wm9uZXMsIG5ld1pvbmVdLFxuICAgICAgICBzeXN0ZW1Db25maWc6IGNvbmZpZ1dpdGhOZXdab25lLFxuICAgICAgICBzeW5jU3RhdHVzOiB7IC4uLnN0YXRlLnN5bmNTdGF0dXMsIHBlbmRpbmdDaGFuZ2VzOiBzdGF0ZS5zeW5jU3RhdHVzLnBlbmRpbmdDaGFuZ2VzICsgMSB9XG4gICAgICB9O1xuXG4gICAgY2FzZSAnVVBEQVRFX0RFTElWRVJZX1pPTkUnOlxuICAgICAgY29uc3QgdXBkYXRlZFpvbmVzID0gc3RhdGUuZGVsaXZlcnlab25lcy5tYXAoem9uZSA9PlxuICAgICAgICB6b25lLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgICAgID8geyAuLi5hY3Rpb24ucGF5bG9hZCwgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfVxuICAgICAgICAgIDogem9uZVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbmZpZ1dpdGhVcGRhdGVkWm9uZSA9IHtcbiAgICAgICAgLi4uc3RhdGUuc3lzdGVtQ29uZmlnLFxuICAgICAgICBkZWxpdmVyeVpvbmVzOiB1cGRhdGVkWm9uZXMsXG4gICAgICAgIGxhc3RFeHBvcnQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGVsaXZlcnlab25lczogdXBkYXRlZFpvbmVzLFxuICAgICAgICBzeXN0ZW1Db25maWc6IGNvbmZpZ1dpdGhVcGRhdGVkWm9uZSxcbiAgICAgICAgc3luY1N0YXR1czogeyAuLi5zdGF0ZS5zeW5jU3RhdHVzLCBwZW5kaW5nQ2hhbmdlczogc3RhdGUuc3luY1N0YXR1cy5wZW5kaW5nQ2hhbmdlcyArIDEgfVxuICAgICAgfTtcblxuICAgIGNhc2UgJ0RFTEVURV9ERUxJVkVSWV9aT05FJzpcbiAgICAgIGNvbnN0IGZpbHRlcmVkWm9uZXMgPSBzdGF0ZS5kZWxpdmVyeVpvbmVzLmZpbHRlcih6b25lID0+IHpvbmUuaWQgIT09IGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIGNvbnN0IGNvbmZpZ1dpdGhEZWxldGVkWm9uZSA9IHtcbiAgICAgICAgLi4uc3RhdGUuc3lzdGVtQ29uZmlnLFxuICAgICAgICBkZWxpdmVyeVpvbmVzOiBmaWx0ZXJlZFpvbmVzLFxuICAgICAgICBsYXN0RXhwb3J0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5Wm9uZXM6IGZpbHRlcmVkWm9uZXMsXG4gICAgICAgIHN5c3RlbUNvbmZpZzogY29uZmlnV2l0aERlbGV0ZWRab25lLFxuICAgICAgICBzeW5jU3RhdHVzOiB7IC4uLnN0YXRlLnN5bmNTdGF0dXMsIHBlbmRpbmdDaGFuZ2VzOiBzdGF0ZS5zeW5jU3RhdHVzLnBlbmRpbmdDaGFuZ2VzICsgMSB9XG4gICAgICB9O1xuXG4gICAgY2FzZSAnQUREX05PVkVMJzpcbiAgICAgIGNvbnN0IG5ld05vdmVsOiBOb3ZlbCA9IHtcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgY29uc3QgY29uZmlnV2l0aE5ld05vdmVsID0ge1xuICAgICAgICAuLi5zdGF0ZS5zeXN0ZW1Db25maWcsXG4gICAgICAgIG5vdmVsczogWy4uLnN0YXRlLnN5c3RlbUNvbmZpZy5ub3ZlbHMsIG5ld05vdmVsXSxcbiAgICAgICAgbGFzdEV4cG9ydDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBub3ZlbHM6IFsuLi5zdGF0ZS5ub3ZlbHMsIG5ld05vdmVsXSxcbiAgICAgICAgc3lzdGVtQ29uZmlnOiBjb25maWdXaXRoTmV3Tm92ZWwsXG4gICAgICAgIHN5bmNTdGF0dXM6IHsgLi4uc3RhdGUuc3luY1N0YXR1cywgcGVuZGluZ0NoYW5nZXM6IHN0YXRlLnN5bmNTdGF0dXMucGVuZGluZ0NoYW5nZXMgKyAxIH1cbiAgICAgIH07XG5cbiAgICBjYXNlICdVUERBVEVfTk9WRUwnOlxuICAgICAgY29uc3QgdXBkYXRlZE5vdmVscyA9IHN0YXRlLm5vdmVscy5tYXAobm92ZWwgPT5cbiAgICAgICAgbm92ZWwuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgICAgICAgPyB7IC4uLmFjdGlvbi5wYXlsb2FkLCB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9XG4gICAgICAgICAgOiBub3ZlbFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbmZpZ1dpdGhVcGRhdGVkTm92ZWwgPSB7XG4gICAgICAgIC4uLnN0YXRlLnN5c3RlbUNvbmZpZyxcbiAgICAgICAgbm92ZWxzOiB1cGRhdGVkTm92ZWxzLFxuICAgICAgICBsYXN0RXhwb3J0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5vdmVsczogdXBkYXRlZE5vdmVscyxcbiAgICAgICAgc3lzdGVtQ29uZmlnOiBjb25maWdXaXRoVXBkYXRlZE5vdmVsLFxuICAgICAgICBzeW5jU3RhdHVzOiB7IC4uLnN0YXRlLnN5bmNTdGF0dXMsIHBlbmRpbmdDaGFuZ2VzOiBzdGF0ZS5zeW5jU3RhdHVzLnBlbmRpbmdDaGFuZ2VzICsgMSB9XG4gICAgICB9O1xuXG4gICAgY2FzZSAnREVMRVRFX05PVkVMJzpcbiAgICAgIGNvbnN0IGZpbHRlcmVkTm92ZWxzID0gc3RhdGUubm92ZWxzLmZpbHRlcihub3ZlbCA9PiBub3ZlbC5pZCAhPT0gYWN0aW9uLnBheWxvYWQpO1xuICAgICAgY29uc3QgY29uZmlnV2l0aERlbGV0ZWROb3ZlbCA9IHtcbiAgICAgICAgLi4uc3RhdGUuc3lzdGVtQ29uZmlnLFxuICAgICAgICBub3ZlbHM6IGZpbHRlcmVkTm92ZWxzLFxuICAgICAgICBsYXN0RXhwb3J0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5vdmVsczogZmlsdGVyZWROb3ZlbHMsXG4gICAgICAgIHN5c3RlbUNvbmZpZzogY29uZmlnV2l0aERlbGV0ZWROb3ZlbCxcbiAgICAgICAgc3luY1N0YXR1czogeyAuLi5zdGF0ZS5zeW5jU3RhdHVzLCBwZW5kaW5nQ2hhbmdlczogc3RhdGUuc3luY1N0YXR1cy5wZW5kaW5nQ2hhbmdlcyArIDEgfVxuICAgICAgfTtcblxuICAgIGNhc2UgJ0FERF9OT1RJRklDQVRJT04nOlxuICAgICAgY29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24gPSB7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgcmVhZDogZmFsc2UsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IFtub3RpZmljYXRpb24sIC4uLnN0YXRlLm5vdGlmaWNhdGlvbnNdLnNsaWNlKDAsIHN0YXRlLnN5c3RlbUNvbmZpZy5zZXR0aW5ncy5tYXhOb3RpZmljYXRpb25zKSxcbiAgICAgIH07XG5cbiAgICBjYXNlICdNQVJLX05PVElGSUNBVElPTl9SRUFEJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBub3RpZmljYXRpb25zOiBzdGF0ZS5ub3RpZmljYXRpb25zLm1hcChub3RpZmljYXRpb24gPT5cbiAgICAgICAgICBub3RpZmljYXRpb24uaWQgPT09IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICA/IHsgLi4ubm90aWZpY2F0aW9uLCByZWFkOiB0cnVlIH1cbiAgICAgICAgICAgIDogbm90aWZpY2F0aW9uXG4gICAgICAgICksXG4gICAgICB9O1xuXG4gICAgY2FzZSAnQ0xFQVJfTk9USUZJQ0FUSU9OUyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbm90aWZpY2F0aW9uczogW10sXG4gICAgICB9O1xuXG4gICAgY2FzZSAnVVBEQVRFX1NZTkNfU1RBVFVTJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzeW5jU3RhdHVzOiB7IC4uLnN0YXRlLnN5bmNTdGF0dXMsIC4uLmFjdGlvbi5wYXlsb2FkIH0sXG4gICAgICB9O1xuXG4gICAgY2FzZSAnTE9BRF9TWVNURU1fQ09ORklHJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcmljZXM6IGFjdGlvbi5wYXlsb2FkLnByaWNlcyxcbiAgICAgICAgZGVsaXZlcnlab25lczogYWN0aW9uLnBheWxvYWQuZGVsaXZlcnlab25lcyxcbiAgICAgICAgbm92ZWxzOiBhY3Rpb24ucGF5bG9hZC5ub3ZlbHMsXG4gICAgICAgIHN5c3RlbUNvbmZpZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIHN5bmNTdGF0dXM6IHsgLi4uc3RhdGUuc3luY1N0YXR1cywgbGFzdFN5bmM6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSwgcGVuZGluZ0NoYW5nZXM6IDAgfVxuICAgICAgfTtcblxuICAgIGNhc2UgJ1VQREFURV9TWVNURU1fQ09ORklHJzpcbiAgICAgIGNvbnN0IG5ld1N5c3RlbUNvbmZpZyA9IHsgLi4uc3RhdGUuc3lzdGVtQ29uZmlnLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN5c3RlbUNvbmZpZzogbmV3U3lzdGVtQ29uZmlnLFxuICAgICAgfTtcblxuICAgIGNhc2UgJ1NZTkNfU1RBVEUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBzeW5jU3RhdHVzOiB7IC4uLnN0YXRlLnN5bmNTdGF0dXMsIGxhc3RTeW5jOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksIHBlbmRpbmdDaGFuZ2VzOiAwIH1cbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIENvbnRleHQgY3JlYXRpb25cbmNvbnN0IEFkbWluQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QWRtaW5Db250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuLy8gUmVhbC10aW1lIHN5bmMgc2VydmljZVxuY2xhc3MgUmVhbFRpbWVTeW5jU2VydmljZSB7XG4gIHByaXZhdGUgbGlzdGVuZXJzOiBTZXQ8KGRhdGE6IGFueSkgPT4gdm9pZD4gPSBuZXcgU2V0KCk7XG4gIHByaXZhdGUgc3luY0ludGVydmFsOiBOb2RlSlMuVGltZW91dCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHN0b3JhZ2VLZXkgPSAnYWRtaW5fc3lzdGVtX3N0YXRlJztcbiAgcHJpdmF0ZSBjb25maWdLZXkgPSAnc3lzdGVtX2NvbmZpZyc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplU3luYygpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplU3luYygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIHRoaXMuaGFuZGxlU3RvcmFnZUNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnN5bmNJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tGb3JVcGRhdGVzKCk7XG4gICAgfSwgNTAwMCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsICgpID0+IHtcbiAgICAgIGlmICghZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgIHRoaXMuY2hlY2tGb3JVcGRhdGVzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0b3JhZ2VDaGFuZ2UoZXZlbnQ6IFN0b3JhZ2VFdmVudCkge1xuICAgIGlmICgoZXZlbnQua2V5ID09PSB0aGlzLnN0b3JhZ2VLZXkgfHwgZXZlbnQua2V5ID09PSB0aGlzLmNvbmZpZ0tleSkgJiYgZXZlbnQubmV3VmFsdWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gSlNPTi5wYXJzZShldmVudC5uZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKG5ld1N0YXRlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgc3luYyBkYXRhOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRm9yVXBkYXRlcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RvcmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5KTtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuY29uZmlnS2V5KTtcbiAgICAgIFxuICAgICAgaWYgKHN0b3JlZCkge1xuICAgICAgICBjb25zdCBzdG9yZWRTdGF0ZSA9IEpTT04ucGFyc2Uoc3RvcmVkKTtcbiAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoc3RvcmVkU3RhdGUpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ0RhdGEgPSBKU09OLnBhcnNlKGNvbmZpZyk7XG4gICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKHsgc3lzdGVtQ29uZmlnOiBjb25maWdEYXRhIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBmb3IgdXBkYXRlczonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3Vic2NyaWJlKGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMuYWRkKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5saXN0ZW5lcnMuZGVsZXRlKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGJyb2FkY2FzdChzdGF0ZTogQWRtaW5TdGF0ZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzeW5jRGF0YSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3luY0RhdGEpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuY29uZmlnS2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZS5zeXN0ZW1Db25maWcpKTtcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKHN5bmNEYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYnJvYWRjYXN0aW5nIHN0YXRlOicsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyhkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gc3luYyBsaXN0ZW5lcjonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN5bmNJbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN5bmNJbnRlcnZhbCk7XG4gICAgfVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgdGhpcy5oYW5kbGVTdG9yYWdlQ2hhbmdlLmJpbmQodGhpcykpO1xuICAgIHRoaXMubGlzdGVuZXJzLmNsZWFyKCk7XG4gIH1cbn1cblxuLy8gUHJvdmlkZXIgY29tcG9uZW50XG5leHBvcnQgZnVuY3Rpb24gQWRtaW5Qcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihhZG1pblJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IFtzeW5jU2VydmljZV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBuZXcgUmVhbFRpbWVTeW5jU2VydmljZSgpKTtcblxuICAvLyBMb2FkIHN5c3RlbSBjb25maWcgb24gc3RhcnR1cFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdG9yZWRDb25maWcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3lzdGVtX2NvbmZpZycpO1xuICAgICAgaWYgKHN0b3JlZENvbmZpZykge1xuICAgICAgICBjb25zdCBjb25maWcgPSBKU09OLnBhcnNlKHN0b3JlZENvbmZpZyk7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPQURfU1lTVEVNX0NPTkZJRycsIHBheWxvYWQ6IGNvbmZpZyB9KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3Qgc3RvcmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FkbWluX3N5c3RlbV9zdGF0ZScpO1xuICAgICAgaWYgKHN0b3JlZCkge1xuICAgICAgICBjb25zdCBzdG9yZWRTdGF0ZSA9IEpTT04ucGFyc2Uoc3RvcmVkKTtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU1lOQ19TVEFURScsIHBheWxvYWQ6IHN0b3JlZFN0YXRlIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGluaXRpYWwgc3RhdGU6JywgZXJyb3IpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vIFNhdmUgc3RhdGUgY2hhbmdlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWRtaW5fc3lzdGVtX3N0YXRlJywgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzeXN0ZW1fY29uZmlnJywgSlNPTi5zdHJpbmdpZnkoc3RhdGUuc3lzdGVtQ29uZmlnKSk7XG4gICAgICBzeW5jU2VydmljZS5icm9hZGNhc3Qoc3RhdGUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgc3RhdGU6JywgZXJyb3IpO1xuICAgIH1cbiAgfSwgW3N0YXRlLCBzeW5jU2VydmljZV0pO1xuXG4gIC8vIFJlYWwtdGltZSBzeW5jIGxpc3RlbmVyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBzeW5jU2VydmljZS5zdWJzY3JpYmUoKHN5bmNlZFN0YXRlKSA9PiB7XG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoc3luY2VkU3RhdGUpICE9PSBKU09OLnN0cmluZ2lmeShzdGF0ZSkpIHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU1lOQ19TVEFURScsIHBheWxvYWQ6IHN5bmNlZFN0YXRlIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB1bnN1YnNjcmliZTtcbiAgfSwgW3N5bmNTZXJ2aWNlLCBzdGF0ZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN5bmNTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgICB9O1xuICB9LCBbc3luY1NlcnZpY2VdKTtcblxuICAvLyBDb250ZXh0IG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbiAgY29uc3QgbG9naW4gPSAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPR0lOJywgcGF5bG9hZDogeyB1c2VybmFtZSwgcGFzc3dvcmQgfSB9KTtcbiAgICBjb25zdCBzdWNjZXNzID0gdXNlcm5hbWUgPT09IEFETUlOX0NSRURFTlRJQUxTLnVzZXJuYW1lICYmIHBhc3N3b3JkID09PSBBRE1JTl9DUkVERU5USUFMUy5wYXNzd29yZDtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICB0aXRsZTogJ0luaWNpbyBkZSBzZXNpw7NuIGV4aXRvc28nLFxuICAgICAgICBtZXNzYWdlOiAnQmllbnZlbmlkbyBhbCBwYW5lbCBkZSBhZG1pbmlzdHJhY2nDs24nLFxuICAgICAgICBzZWN0aW9uOiAnQXV0ZW50aWNhY2nDs24nLFxuICAgICAgICBhY3Rpb246ICdsb2dpbidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9HT1VUJyB9KTtcbiAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgdGl0bGU6ICdTZXNpw7NuIGNlcnJhZGEnLFxuICAgICAgbWVzc2FnZTogJ0hhcyBjZXJyYWRvIHNlc2nDs24gY29ycmVjdGFtZW50ZScsXG4gICAgICBzZWN0aW9uOiAnQXV0ZW50aWNhY2nDs24nLFxuICAgICAgYWN0aW9uOiAnbG9nb3V0J1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVByaWNlcyA9IChwcmljZXM6IFByaWNlQ29uZmlnKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX1BSSUNFUycsIHBheWxvYWQ6IHByaWNlcyB9KTtcbiAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgdGl0bGU6ICdQcmVjaW9zIGFjdHVhbGl6YWRvcycsXG4gICAgICBtZXNzYWdlOiAnTG9zIHByZWNpb3Mgc2UgaGFuIGFjdHVhbGl6YWRvIHkgc2luY3Jvbml6YWRvIGF1dG9tw6F0aWNhbWVudGUnLFxuICAgICAgc2VjdGlvbjogJ1ByZWNpb3MnLFxuICAgICAgYWN0aW9uOiAndXBkYXRlJ1xuICAgIH0pO1xuICAgIGJyb2FkY2FzdENoYW5nZSh7IHR5cGU6ICdwcmljZXMnLCBkYXRhOiBwcmljZXMgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkRGVsaXZlcnlab25lID0gKHpvbmU6IE9taXQ8RGVsaXZlcnlab25lLCAnaWQnIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0Jz4pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfREVMSVZFUllfWk9ORScsIHBheWxvYWQ6IHpvbmUgfSk7XG4gICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIHRpdGxlOiAnWm9uYSBkZSBlbnRyZWdhIGFncmVnYWRhJyxcbiAgICAgIG1lc3NhZ2U6IGBTZSBhZ3JlZ8OzIGxhIHpvbmEgXCIke3pvbmUubmFtZX1cIiB5IHNlIHNpbmNyb25pesOzIGF1dG9tw6F0aWNhbWVudGVgLFxuICAgICAgc2VjdGlvbjogJ1pvbmFzIGRlIEVudHJlZ2EnLFxuICAgICAgYWN0aW9uOiAnY3JlYXRlJ1xuICAgIH0pO1xuICAgIGJyb2FkY2FzdENoYW5nZSh7IHR5cGU6ICdkZWxpdmVyeV96b25lX2FkZCcsIGRhdGE6IHpvbmUgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRGVsaXZlcnlab25lID0gKHpvbmU6IERlbGl2ZXJ5Wm9uZSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9ERUxJVkVSWV9aT05FJywgcGF5bG9hZDogem9uZSB9KTtcbiAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgdGl0bGU6ICdab25hIGRlIGVudHJlZ2EgYWN0dWFsaXphZGEnLFxuICAgICAgbWVzc2FnZTogYFNlIGFjdHVhbGl6w7MgbGEgem9uYSBcIiR7em9uZS5uYW1lfVwiIHkgc2Ugc2luY3Jvbml6w7MgYXV0b23DoXRpY2FtZW50ZWAsXG4gICAgICBzZWN0aW9uOiAnWm9uYXMgZGUgRW50cmVnYScsXG4gICAgICBhY3Rpb246ICd1cGRhdGUnXG4gICAgfSk7XG4gICAgYnJvYWRjYXN0Q2hhbmdlKHsgdHlwZTogJ2RlbGl2ZXJ5X3pvbmVfdXBkYXRlJywgZGF0YTogem9uZSB9KTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVEZWxpdmVyeVpvbmUgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHpvbmUgPSBzdGF0ZS5kZWxpdmVyeVpvbmVzLmZpbmQoeiA9PiB6LmlkID09PSBpZCk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFX0RFTElWRVJZX1pPTkUnLCBwYXlsb2FkOiBpZCB9KTtcbiAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgdGl0bGU6ICdab25hIGRlIGVudHJlZ2EgZWxpbWluYWRhJyxcbiAgICAgIG1lc3NhZ2U6IGBTZSBlbGltaW7DsyBsYSB6b25hIFwiJHt6b25lPy5uYW1lIHx8ICdEZXNjb25vY2lkYSd9XCIgeSBzZSBzaW5jcm9uaXrDsyBhdXRvbcOhdGljYW1lbnRlYCxcbiAgICAgIHNlY3Rpb246ICdab25hcyBkZSBFbnRyZWdhJyxcbiAgICAgIGFjdGlvbjogJ2RlbGV0ZSdcbiAgICB9KTtcbiAgICBicm9hZGNhc3RDaGFuZ2UoeyB0eXBlOiAnZGVsaXZlcnlfem9uZV9kZWxldGUnLCBkYXRhOiB7IGlkIH0gfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkTm92ZWwgPSAobm92ZWw6IE9taXQ8Tm92ZWwsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnPikgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9OT1ZFTCcsIHBheWxvYWQ6IG5vdmVsIH0pO1xuICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICB0aXRsZTogJ05vdmVsYSBhZ3JlZ2FkYScsXG4gICAgICBtZXNzYWdlOiBgU2UgYWdyZWfDsyBsYSBub3ZlbGEgXCIke25vdmVsLnRpdHVsb31cIiB5IHNlIHNpbmNyb25pesOzIGF1dG9tw6F0aWNhbWVudGVgLFxuICAgICAgc2VjdGlvbjogJ0dlc3Rpw7NuIGRlIE5vdmVsYXMnLFxuICAgICAgYWN0aW9uOiAnY3JlYXRlJ1xuICAgIH0pO1xuICAgIGJyb2FkY2FzdENoYW5nZSh7IHR5cGU6ICdub3ZlbF9hZGQnLCBkYXRhOiBub3ZlbCB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVOb3ZlbCA9IChub3ZlbDogTm92ZWwpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfTk9WRUwnLCBwYXlsb2FkOiBub3ZlbCB9KTtcbiAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgdGl0bGU6ICdOb3ZlbGEgYWN0dWFsaXphZGEnLFxuICAgICAgbWVzc2FnZTogYFNlIGFjdHVhbGl6w7MgbGEgbm92ZWxhIFwiJHtub3ZlbC50aXR1bG99XCIgeSBzZSBzaW5jcm9uaXrDsyBhdXRvbcOhdGljYW1lbnRlYCxcbiAgICAgIHNlY3Rpb246ICdHZXN0acOzbiBkZSBOb3ZlbGFzJyxcbiAgICAgIGFjdGlvbjogJ3VwZGF0ZSdcbiAgICB9KTtcbiAgICBicm9hZGNhc3RDaGFuZ2UoeyB0eXBlOiAnbm92ZWxfdXBkYXRlJywgZGF0YTogbm92ZWwgfSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlTm92ZWwgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG5vdmVsID0gc3RhdGUubm92ZWxzLmZpbmQobiA9PiBuLmlkID09PSBpZCk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFX05PVkVMJywgcGF5bG9hZDogaWQgfSk7XG4gICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgIHRpdGxlOiAnTm92ZWxhIGVsaW1pbmFkYScsXG4gICAgICBtZXNzYWdlOiBgU2UgZWxpbWluw7MgbGEgbm92ZWxhIFwiJHtub3ZlbD8udGl0dWxvIHx8ICdEZXNjb25vY2lkYSd9XCIgeSBzZSBzaW5jcm9uaXrDsyBhdXRvbcOhdGljYW1lbnRlYCxcbiAgICAgIHNlY3Rpb246ICdHZXN0acOzbiBkZSBOb3ZlbGFzJyxcbiAgICAgIGFjdGlvbjogJ2RlbGV0ZSdcbiAgICB9KTtcbiAgICBicm9hZGNhc3RDaGFuZ2UoeyB0eXBlOiAnbm92ZWxfZGVsZXRlJywgZGF0YTogeyBpZCB9IH0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5vdGlmaWNhdGlvbiA9IChub3RpZmljYXRpb246IE9taXQ8Tm90aWZpY2F0aW9uLCAnaWQnIHwgJ3RpbWVzdGFtcCc+KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX05PVElGSUNBVElPTicsIHBheWxvYWQ6IG5vdGlmaWNhdGlvbiB9KTtcbiAgfTtcblxuICBjb25zdCBtYXJrTm90aWZpY2F0aW9uUmVhZCA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnTUFSS19OT1RJRklDQVRJT05fUkVBRCcsIHBheWxvYWQ6IGlkIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdDTEVBUl9OT1RJRklDQVRJT05TJyB9KTtcbiAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgdGl0bGU6ICdOb3RpZmljYWNpb25lcyBsaW1waWFkYXMnLFxuICAgICAgbWVzc2FnZTogJ1NlIGhhbiBlbGltaW5hZG8gdG9kYXMgbGFzIG5vdGlmaWNhY2lvbmVzIGRlbCBzaXN0ZW1hJyxcbiAgICAgIHNlY3Rpb246ICdOb3RpZmljYWNpb25lcycsXG4gICAgICBhY3Rpb246ICdjbGVhcidcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBleHBvcnRTeXN0ZW1Db25maWcgPSAoKTogc3RyaW5nID0+IHtcbiAgICB0cnkge1xuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICB0aXRsZTogJ0V4cG9ydGFjacOzbiBkZSBjb25maWd1cmFjacOzbiBpbmljaWFkYScsXG4gICAgICAgIG1lc3NhZ2U6ICdHZW5lcmFuZG8gYXJjaGl2byBkZSBjb25maWd1cmFjacOzbiBKU09OLi4uJyxcbiAgICAgICAgc2VjdGlvbjogJ1Npc3RlbWEnLFxuICAgICAgICBhY3Rpb246ICdleHBvcnRfY29uZmlnX3N0YXJ0J1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSBjb21wcmVoZW5zaXZlIHN5c3RlbSBjb25maWd1cmF0aW9uXG4gICAgICBjb25zdCBjb21wbGV0ZUNvbmZpZzogU3lzdGVtQ29uZmlnID0ge1xuICAgICAgICAuLi5zdGF0ZS5zeXN0ZW1Db25maWcsXG4gICAgICAgIHZlcnNpb246ICcyLjEuMCcsXG4gICAgICAgIGxhc3RFeHBvcnQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgcHJpY2VzOiBzdGF0ZS5wcmljZXMsXG4gICAgICAgIGRlbGl2ZXJ5Wm9uZXM6IHN0YXRlLmRlbGl2ZXJ5Wm9uZXMsXG4gICAgICAgIG5vdmVsczogc3RhdGUubm92ZWxzLFxuICAgICAgICBtZXRhZGF0YToge1xuICAgICAgICAgIC4uLnN0YXRlLnN5c3RlbUNvbmZpZy5tZXRhZGF0YSxcbiAgICAgICAgICB0b3RhbE9yZGVyczogc3RhdGUuc3lzdGVtQ29uZmlnLm1ldGFkYXRhLnRvdGFsT3JkZXJzLFxuICAgICAgICAgIHRvdGFsUmV2ZW51ZTogc3RhdGUuc3lzdGVtQ29uZmlnLm1ldGFkYXRhLnRvdGFsUmV2ZW51ZSxcbiAgICAgICAgICBsYXN0T3JkZXJEYXRlOiBzdGF0ZS5zeXN0ZW1Db25maWcubWV0YWRhdGEubGFzdE9yZGVyRGF0ZSxcbiAgICAgICAgICBzeXN0ZW1VcHRpbWU6IHN0YXRlLnN5c3RlbUNvbmZpZy5tZXRhZGF0YS5zeXN0ZW1VcHRpbWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICAvLyBHZW5lcmF0ZSBKU09OIGZpbGVcbiAgICAgIGNvbnN0IGNvbmZpZ0pzb24gPSBKU09OLnN0cmluZ2lmeShjb21wbGV0ZUNvbmZpZywgbnVsbCwgMik7XG5cbiAgICAgIC8vIFVwZGF0ZSBzeXN0ZW0gY29uZmlnIHdpdGggZXhwb3J0IHRpbWVzdGFtcFxuICAgICAgZGlzcGF0Y2goeyBcbiAgICAgICAgdHlwZTogJ1VQREFURV9TWVNURU1fQ09ORklHJywgXG4gICAgICAgIHBheWxvYWQ6IHsgbGFzdEV4cG9ydDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0gXG4gICAgICB9KTtcblxuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICB0aXRsZTogJ0NvbmZpZ3VyYWNpw7NuIGV4cG9ydGFkYScsXG4gICAgICAgIG1lc3NhZ2U6ICdMYSBjb25maWd1cmFjacOzbiBKU09OIHNlIGhhIGV4cG9ydGFkbyBjb3JyZWN0YW1lbnRlJyxcbiAgICAgICAgc2VjdGlvbjogJ1Npc3RlbWEnLFxuICAgICAgICBhY3Rpb246ICdleHBvcnRfY29uZmlnJ1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjb25maWdKc29uO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBleHBvcnRpbmcgc3lzdGVtIGNvbmZpZzonLCBlcnJvcik7XG4gICAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICB0aXRsZTogJ0Vycm9yIGVuIGxhIGV4cG9ydGFjacOzbiBkZSBjb25maWd1cmFjacOzbicsXG4gICAgICAgIG1lc3NhZ2U6ICdObyBzZSBwdWRvIGV4cG9ydGFyIGxhIGNvbmZpZ3VyYWNpw7NuIEpTT04nLFxuICAgICAgICBzZWN0aW9uOiAnU2lzdGVtYScsXG4gICAgICAgIGFjdGlvbjogJ2V4cG9ydF9jb25maWdfZXJyb3InXG4gICAgICB9KTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZXhwb3J0Q29tcGxldGVTb3VyY2VDb2RlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgIHRpdGxlOiAnRXhwb3J0YWNpw7NuIGRlIGPDs2RpZ28gZnVlbnRlIGluaWNpYWRhJyxcbiAgICAgICAgbWVzc2FnZTogJ0dlbmVyYW5kbyBzaXN0ZW1hIGNvbXBsZXRvIGNvbiBjw7NkaWdvIGZ1ZW50ZS4uLicsXG4gICAgICAgIHNlY3Rpb246ICdTaXN0ZW1hJyxcbiAgICAgICAgYWN0aW9uOiAnZXhwb3J0X3NvdXJjZV9zdGFydCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBJbXBvcnRhciBkaW7DoW1pY2FtZW50ZSBlbCBnZW5lcmFkb3IgZGUgY8OzZGlnbyBmdWVudGVcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZ2VuZXJhdGVDb21wbGV0ZVNvdXJjZUNvZGUgfSA9IGF3YWl0IGltcG9ydCgnLi4vdXRpbHMvc291cmNlQ29kZUdlbmVyYXRvcicpO1xuICAgICAgICBhd2FpdCBnZW5lcmF0ZUNvbXBsZXRlU291cmNlQ29kZShzdGF0ZS5zeXN0ZW1Db25maWcpO1xuICAgICAgfSBjYXRjaCAoaW1wb3J0RXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW1wb3J0aW5nIHNvdXJjZSBjb2RlIGdlbmVyYXRvcjonLCBpbXBvcnRFcnJvcik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc2UgcHVkbyBjYXJnYXIgZWwgZ2VuZXJhZG9yIGRlIGPDs2RpZ28gZnVlbnRlJyk7XG4gICAgICB9XG5cbiAgICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgdGl0bGU6ICdDw7NkaWdvIGZ1ZW50ZSBleHBvcnRhZG8nLFxuICAgICAgICBtZXNzYWdlOiAnRWwgc2lzdGVtYSBjb21wbGV0byBzZSBoYSBleHBvcnRhZG8gY29tbyBjw7NkaWdvIGZ1ZW50ZScsXG4gICAgICAgIHNlY3Rpb246ICdTaXN0ZW1hJyxcbiAgICAgICAgYWN0aW9uOiAnZXhwb3J0X3NvdXJjZSdcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBleHBvcnRpbmcgc291cmNlIGNvZGU6JywgZXJyb3IpO1xuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgdGl0bGU6ICdFcnJvciBlbiBsYSBleHBvcnRhY2nDs24gZGUgY8OzZGlnbycsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ05vIHNlIHB1ZG8gZXhwb3J0YXIgZWwgY8OzZGlnbyBmdWVudGUgY29tcGxldG8nLFxuICAgICAgICBzZWN0aW9uOiAnU2lzdGVtYScsXG4gICAgICAgIGFjdGlvbjogJ2V4cG9ydF9zb3VyY2VfZXJyb3InXG4gICAgICB9KTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpbXBvcnRTeXN0ZW1Db25maWcgPSAoY29uZmlnSnNvbjogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IEpTT04ucGFyc2UoY29uZmlnSnNvbik7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdMT0FEX1NZU1RFTV9DT05GSUcnLCBwYXlsb2FkOiBjb25maWcgfSk7XG4gICAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIHRpdGxlOiAnQ29uZmlndXJhY2nDs24gaW1wb3J0YWRhJyxcbiAgICAgICAgbWVzc2FnZTogJ0xhIGNvbmZpZ3VyYWNpw7NuIGRlbCBzaXN0ZW1hIHNlIGhhIGNhcmdhZG8gY29ycmVjdGFtZW50ZScsXG4gICAgICAgIHNlY3Rpb246ICdTaXN0ZW1hJyxcbiAgICAgICAgYWN0aW9uOiAnaW1wb3J0J1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW1wb3J0aW5nIHN5c3RlbSBjb25maWc6JywgZXJyb3IpO1xuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgdGl0bGU6ICdFcnJvciBlbiBsYSBpbXBvcnRhY2nDs24nLFxuICAgICAgICBtZXNzYWdlOiAnTm8gc2UgcHVkbyBjYXJnYXIgbGEgY29uZmlndXJhY2nDs24gZGVsIHNpc3RlbWEnLFxuICAgICAgICBzZWN0aW9uOiAnU2lzdGVtYScsXG4gICAgICAgIGFjdGlvbjogJ2ltcG9ydF9lcnJvcidcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzeW5jQWxsU2VjdGlvbnMgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGFkZE5vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgICAgdGl0bGU6ICdTaW5jcm9uaXphY2nDs24gY29tcGxldGEgaW5pY2lhZGEnLFxuICAgICAgICBtZXNzYWdlOiAnU2luY3Jvbml6YW5kbyB0b2RhcyBsYXMgc2VjY2lvbmVzIGRlbCBzaXN0ZW1hLi4uJyxcbiAgICAgICAgc2VjdGlvbjogJ1Npc3RlbWEnLFxuICAgICAgICBhY3Rpb246ICdzeW5jX2FsbF9zdGFydCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTaW11bGF0ZSBjb21wcmVoZW5zaXZlIHN5bmMgb2YgYWxsIHNlY3Rpb25zXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwMCkpO1xuXG4gICAgICAvLyBVcGRhdGUgYWxsIGNvbXBvbmVudHMgd2l0aCBjdXJyZW50IHN0YXRlXG4gICAgICBjb25zdCB1cGRhdGVkQ29uZmlnOiBTeXN0ZW1Db25maWcgPSB7XG4gICAgICAgIC4uLnN0YXRlLnN5c3RlbUNvbmZpZyxcbiAgICAgICAgbGFzdEV4cG9ydDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICBwcmljZXM6IHN0YXRlLnByaWNlcyxcbiAgICAgICAgZGVsaXZlcnlab25lczogc3RhdGUuZGVsaXZlcnlab25lcyxcbiAgICAgICAgbm92ZWxzOiBzdGF0ZS5ub3ZlbHMsXG4gICAgICB9O1xuXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfU1lTVEVNX0NPTkZJRycsIHBheWxvYWQ6IHVwZGF0ZWRDb25maWcgfSk7XG4gICAgICBcbiAgICAgIC8vIEJyb2FkY2FzdCBjaGFuZ2VzIHRvIGFsbCBjb21wb25lbnRzXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FkbWluX2Z1bGxfc3luYycsIHsgXG4gICAgICAgIGRldGFpbDogeyBcbiAgICAgICAgICBjb25maWc6IHVwZGF0ZWRDb25maWcsXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgfSBcbiAgICAgIH0pKTtcblxuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICB0aXRsZTogJ1NpbmNyb25pemFjacOzbiBjb21wbGV0YSBleGl0b3NhJyxcbiAgICAgICAgbWVzc2FnZTogJ1RvZGFzIGxhcyBzZWNjaW9uZXMgc2UgaGFuIHNpbmNyb25pemFkbyBjb3JyZWN0YW1lbnRlJyxcbiAgICAgICAgc2VjdGlvbjogJ1Npc3RlbWEnLFxuICAgICAgICBhY3Rpb246ICdzeW5jX2FsbCdcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBmdWxsIHN5bmM6JywgZXJyb3IpO1xuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgdGl0bGU6ICdFcnJvciBlbiBzaW5jcm9uaXphY2nDs24gY29tcGxldGEnLFxuICAgICAgICBtZXNzYWdlOiAnTm8gc2UgcHVkbyBjb21wbGV0YXIgbGEgc2luY3Jvbml6YWNpw7NuIGRlIHRvZGFzIGxhcyBzZWNjaW9uZXMnLFxuICAgICAgICBzZWN0aW9uOiAnU2lzdGVtYScsXG4gICAgICAgIGFjdGlvbjogJ3N5bmNfYWxsX2Vycm9yJ1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJyb2FkY2FzdENoYW5nZSA9IChjaGFuZ2U6IGFueSkgPT4ge1xuICAgIGNvbnN0IGNoYW5nZUV2ZW50ID0ge1xuICAgICAgLi4uY2hhbmdlLFxuICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICBzb3VyY2U6ICdhZG1pbl9wYW5lbCdcbiAgICB9O1xuICAgIFxuICAgIGRpc3BhdGNoKHsgXG4gICAgICB0eXBlOiAnVVBEQVRFX1NZTkNfU1RBVFVTJywgXG4gICAgICBwYXlsb2FkOiB7IFxuICAgICAgICBsYXN0U3luYzogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICBwZW5kaW5nQ2hhbmdlczogTWF0aC5tYXgoMCwgc3RhdGUuc3luY1N0YXR1cy5wZW5kaW5nQ2hhbmdlcyAtIDEpXG4gICAgICB9IFxuICAgIH0pO1xuXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdhZG1pbl9zdGF0ZV9jaGFuZ2UnLCB7IFxuICAgICAgZGV0YWlsOiBjaGFuZ2VFdmVudCBcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3Qgc3luY1dpdGhSZW1vdGUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9TWU5DX1NUQVRVUycsIHBheWxvYWQ6IHsgaXNPbmxpbmU6IHRydWUgfSB9KTtcbiAgICAgIFxuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICB0aXRsZTogJ1NpbmNyb25pemFjacOzbiBpbmljaWFkYScsXG4gICAgICAgIG1lc3NhZ2U6ICdJbmljaWFuZG8gc2luY3Jvbml6YWNpw7NuIGNvbiBlbCBzaXN0ZW1hIHJlbW90by4uLicsXG4gICAgICAgIHNlY3Rpb246ICdTaXN0ZW1hJyxcbiAgICAgICAgYWN0aW9uOiAnc3luY19zdGFydCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBTaW11bGF0ZSByZW1vdGUgc3luY1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApKTtcbiAgICAgIFxuICAgICAgZGlzcGF0Y2goeyBcbiAgICAgICAgdHlwZTogJ1VQREFURV9TWU5DX1NUQVRVUycsIFxuICAgICAgICBwYXlsb2FkOiB7IFxuICAgICAgICAgIGxhc3RTeW5jOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgcGVuZGluZ0NoYW5nZXM6IDBcbiAgICAgICAgfSBcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBhZGROb3RpZmljYXRpb24oe1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIHRpdGxlOiAnU2luY3Jvbml6YWNpw7NuIGNvbXBsZXRhZGEnLFxuICAgICAgICBtZXNzYWdlOiAnVG9kb3MgbG9zIGRhdG9zIHNlIGhhbiBzaW5jcm9uaXphZG8gY29ycmVjdGFtZW50ZScsXG4gICAgICAgIHNlY3Rpb246ICdTaXN0ZW1hJyxcbiAgICAgICAgYWN0aW9uOiAnc3luYydcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfU1lOQ19TVEFUVVMnLCBwYXlsb2FkOiB7IGlzT25saW5lOiBmYWxzZSB9IH0pO1xuICAgICAgYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgdGl0bGU6ICdFcnJvciBkZSBzaW5jcm9uaXphY2nDs24nLFxuICAgICAgICBtZXNzYWdlOiAnTm8gc2UgcHVkbyBzaW5jcm9uaXphciBjb24gZWwgc2Vydmlkb3IgcmVtb3RvJyxcbiAgICAgICAgc2VjdGlvbjogJ1Npc3RlbWEnLFxuICAgICAgICBhY3Rpb246ICdzeW5jX2Vycm9yJ1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEF2YWlsYWJsZUNvdW50cmllcyA9ICgpOiBzdHJpbmdbXSA9PiB7XG4gICAgY29uc3QgY291bnRyaWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgXG4gICAgLy8gQWRkIGNvdW50cmllcyBmcm9tIG5vdmVsc1xuICAgIHN0YXRlLm5vdmVscy5mb3JFYWNoKG5vdmVsID0+IHtcbiAgICAgIGlmIChub3ZlbC5wYWlzKSB7XG4gICAgICAgIGNvdW50cmllcy5hZGQobm92ZWwucGFpcyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLy8gQWRkIGNvbW1vbiBjb3VudHJpZXNcbiAgICBjb25zdCBjb21tb25Db3VudHJpZXMgPSBbXG4gICAgICAnQ3ViYScsXG4gICAgICAnVHVycXXDrWEnLFxuICAgICAgJ03DqXhpY28nLFxuICAgICAgJ0JyYXNpbCcsXG4gICAgICAnQ29sb21iaWEnLFxuICAgICAgJ0FyZ2VudGluYScsXG4gICAgICAnRXNwYcOxYScsXG4gICAgICAnRXN0YWRvcyBVbmlkb3MnLFxuICAgICAgJ0NvcmVhIGRlbCBTdXInLFxuICAgICAgJ0luZGlhJyxcbiAgICAgICdSZWlubyBVbmlkbycsXG4gICAgICAnRnJhbmNpYScsXG4gICAgICAnSXRhbGlhJyxcbiAgICAgICdBbGVtYW5pYScsXG4gICAgICAnSmFww7NuJyxcbiAgICAgICdDaGluYScsXG4gICAgICAnUnVzaWEnXG4gICAgXTtcbiAgICBcbiAgICBjb21tb25Db3VudHJpZXMuZm9yRWFjaChjb3VudHJ5ID0+IGNvdW50cmllcy5hZGQoY291bnRyeSkpO1xuICAgIFxuICAgIHJldHVybiBBcnJheS5mcm9tKGNvdW50cmllcykuc29ydCgpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVN5c3RlbUNvbmZpZyA9IChjb25maWc6IFBhcnRpYWw8U3lzdGVtQ29uZmlnPikgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9TWVNURU1fQ09ORklHJywgcGF5bG9hZDogY29uZmlnIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFkbWluQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGxvZ2luLFxuICAgICAgICBsb2dvdXQsXG4gICAgICAgIHVwZGF0ZVByaWNlcyxcbiAgICAgICAgYWRkRGVsaXZlcnlab25lLFxuICAgICAgICB1cGRhdGVEZWxpdmVyeVpvbmUsXG4gICAgICAgIGRlbGV0ZURlbGl2ZXJ5Wm9uZSxcbiAgICAgICAgYWRkTm92ZWwsXG4gICAgICAgIHVwZGF0ZU5vdmVsLFxuICAgICAgICBkZWxldGVOb3ZlbCxcbiAgICAgICAgYWRkTm90aWZpY2F0aW9uLFxuICAgICAgICBtYXJrTm90aWZpY2F0aW9uUmVhZCxcbiAgICAgICAgY2xlYXJOb3RpZmljYXRpb25zLFxuICAgICAgICBleHBvcnRTeXN0ZW1Db25maWcsXG4gICAgICAgIGltcG9ydFN5c3RlbUNvbmZpZyxcbiAgICAgICAgZXhwb3J0Q29tcGxldGVTb3VyY2VDb2RlLFxuICAgICAgICBzeW5jV2l0aFJlbW90ZSxcbiAgICAgICAgYnJvYWRjYXN0Q2hhbmdlLFxuICAgICAgICBzeW5jQWxsU2VjdGlvbnMsXG4gICAgICAgIGdldEF2YWlsYWJsZUNvdW50cmllcyxcbiAgICAgICAgdXBkYXRlU3lzdGVtQ29uZmlnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BZG1pbkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBZG1pbigpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQWRtaW5Db250ZXh0KTtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQWRtaW4gbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBZG1pblByb3ZpZGVyJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmV4cG9ydCB7IEFkbWluQ29udGV4dCB9OyJdLCJmaWxlIjoiL2hvbWUvcHJvamVjdC9zcmMvY29udGV4dC9BZG1pbkNvbnRleHQudHN4In0=