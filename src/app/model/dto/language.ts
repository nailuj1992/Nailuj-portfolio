class PhraseDto {
    englishVersion: string;
    spanishVersion: string;

    constructor(englishVersion: string, spanishVersion: string) {
        this.englishVersion = englishVersion;
        this.spanishVersion = spanishVersion;
    }
}

const mapPhrases = new Map<string, PhraseDto>();

/* HOME SECTION */
mapPhrases.set("home-title", new PhraseDto("Home", "Inicio"));
mapPhrases.set("my-career", new PhraseDto("Fullstack Software Developer", "Desarrollador Fullstack de Software"));
mapPhrases.set("cta-portfolio", new PhraseDto("View My Work", "Mis Proyectos"));
mapPhrases.set("cta-contact-me", new PhraseDto("Contact me", "Contáctame"));
mapPhrases.set("sm-my-cv", new PhraseDto("My CV", "Mi HdV"));
mapPhrases.set("sm-my-linkedin", new PhraseDto("My LinkedIn", "Mi LinkedIn"));
mapPhrases.set("sm-my-github", new PhraseDto("My GitHub", "Mi GitHub"));
mapPhrases.set("sm-my-bitbucket", new PhraseDto("My BitBucket", "Mi BitBucket"));

/* ABOUT SECTION */
mapPhrases.set("about-me-title", new PhraseDto("About me", "Acerca de mí"));
mapPhrases.set("about-me-paragraph-1", new PhraseDto("I am a passionate developer who has dedication and focus on analyzing situations and writing clean and well-maintained code.", "Soy un desarrollador apasionado que tiene dedicación y enfoque en analizar situaciones y escribir código limpio y bien mantenido."));
mapPhrases.set("about-me-paragraph-2", new PhraseDto("Conducted end-to-end solutions for complex web applications, spearheaded the full software development lifecycle for many projects, adhering to Agile frameworks like Scrum, and delivered impeccable code and met tight deadlines.", "Realicé soluciones de extremo a extremo para aplicaciones web complejas, encabezé todo el ciclo de vida del desarrollo de software para muchos proyectos, adhiriéndome a marcos ágiles como Scrum, y entregué un código impecable, cumpliendo a su vez con plazos ajustados."));
mapPhrases.set("about-me-skills", new PhraseDto("Tools used", "Herramientas utilizadas"));

/* PORTFOLIO SECTION */
mapPhrases.set("portfolio-title", new PhraseDto("My projects", "Mis proyectos"));
mapPhrases.set("portfolio-other-projects", new PhraseDto("Other projects", "Otros proyectos"));
mapPhrases.set("link-project", new PhraseDto("LINK TO THE PROJECT", "VER PROYECTO"));

mapPhrases.set("title-propositional-logic", new PhraseDto("Visual environment for learning propositional logic", "Ambiente visual para el aprendizaje de la lógica proposicional"));
mapPhrases.set("description-propositional-logic", new PhraseDto("The general objective of the project consists mainly of designing and building software with a highly visual interface, based on a playful metaphor, that allows the student to learn concepts related to propositional logic in an easier and more motivating way, in order to provide a suitable space for experimentation and conjecture.", "El objetivo general del proyecto consiste principalmente en diseñar y construir un software con una interfaz altamente visual, basado en una metáfora lúdica, que permita al estudiante aprender conceptos relacionados con la lógica proposicional de una manera más fácil y motivadora, con el fin de proporcionar un espacio adecuado para la experimentación y la conjetura."));

mapPhrases.set("title-music-player", new PhraseDto("Basic music player", "Reproductor de música básico"));
mapPhrases.set("description-music-player", new PhraseDto("This is a basic music player, which is developed in Java. This player supports MP3 audio format files and offers basic controls such as volume adjustment and track progression. While maintaining a minimalist approach, this music player serves as an skeleton that can be expanded upon to incorporate more advanced features based on user preferences.", "Se trata de un reproductor de música básico desarrollado en Java. Este reproductor admite archivos de audio en formato MP3 y ofrece controles básicos como ajuste del volumen y progresión de las pistas de audio. Si bien mantiene un enfoque minimalista, este reproductor de música funciona como un esqueleto que se puede ampliar para incorporar funciones más avanzadas según las preferencias del usuario."));

mapPhrases.set("title-catholic-prayers", new PhraseDto("Catholic prayers project", "Proyecto de oraciones católicas"));
mapPhrases.set("description-catholic-prayers", new PhraseDto("This project is focused in providing a better experience for a catholic prayer who wants to -or needs to- make some offerings to God, through the Holy Rosary (all the year) or the Christmas Novenas (December 16th to 24th). Additionally, this project has support in English and Spanish (for now).", "Este proyecto está enfocado en brindar una mejor experiencia a un orante católico que quiera -o necesite- hacer alguna ofrenda a Dios, a través del Santo Rosario (todo el año) o las Novenas de Navidad (del 16 al 24 de diciembre). Adicionalmente, este proyecto cuenta con soporte en inglés y español (por ahora)."));

mapPhrases.set("title-basic-game", new PhraseDto("Basic 2D Game - Unity", "Juego básico en 2D - Unity"));
mapPhrases.set("description-basic-game", new PhraseDto("This is a very basic 2D video-game made with Unity. This mini-project was originally made as a commission on November 29th, 2017, but I have decided to do some little improvements, and then to upload it to this repository until April 20th, 2024.", "Se trata de un videojuego 2D muy básico realizado con Unity. Este miniproyecto fue realizado originalmente como encargo el 29 de noviembre de 2017, pero he decidido realizarle algunas pequeñas mejoras y luego subirlo a este repositorio hasta el día 20 de abril de 2024."));

mapPhrases.set("title-nfc-scan", new PhraseDto("NFC Scan module for Passport chip", "Módulo de escaneo NFC para chip de pasaporte"));
mapPhrases.set("description-nfc-scan", new PhraseDto("This module is done with the idea of implementing the passport scanning with NFC technology on Unity, and for Android devices only.", "Este módulo está realizado con la idea de implementar el escaneo de pasaportes con tecnología NFC en Unity, y solo para dispositivos Android."));

mapPhrases.set("title-stock-management", new PhraseDto("Stock Management", "Gestión de stock"));
mapPhrases.set("description-stock-management", new PhraseDto("This basic project was built on PHP using the framework Yii. This project was focused on manage the stock for a company: inputs, outputs, stock management, and kardex.", "Este proyecto básico fue desarrollado en PHP utilizando el framework Yii. Este proyecto se enfocó en gestionar el stock de una empresa: entradas, salidas, manejo de existencias y kardex."));

mapPhrases.set("title-portfolio", new PhraseDto("Web Portfolio", "Portafolio Web"));
mapPhrases.set("description-portfolio", new PhraseDto("This project is focused in showing my portfolio in a good and pretty manner. The next link contains the source code for this project -and this entire Web page, of course-.", "Este proyecto está enfocado a mostrar mi portfolio de una forma bonita y atractiva. El siguiente enlace contiene el código fuente de este proyecto (y de esta página web completa, por supuesto)."));

mapPhrases.set("title-sgsst", new PhraseDto("SG-SST propotype", "Prototipo para SG-SST"));
mapPhrases.set("description-sgsst", new PhraseDto("This prototype was developed on PHP using the framework Yii. This project was imagined to provide companies with tools with which they can fully comply with the guidelines and strict controls related to Occupational Health and Safety (SG-SST for its acronym in Spanish).", "Este prototipo fue desarrollado en PHP utilizando el framework Yii. Este proyecto fue pensado para brindar a las empresas herramientas con las que puedan cumplir a cabalidad con los lineamientos y controles estrictos relacionados con la Seguridad y Salud en el Trabajo (SG-SST)."));

mapPhrases.set("title-inpec", new PhraseDto("Stock management for Inpec", "Manejo de inventarios para el Inpec"));
mapPhrases.set("description-inpec", new PhraseDto("This project was a prototype, focused on manage and control the stock from a store in the prisons owned by the Colombian organization known as Inpec (National Penitentiary and Prison Institute). This project was developed for the company 'Sistemas Comerciales SIA Ltda'.", "Este proyecto fue un prototipo enfocado a la gestión y control de inventarios de los expendios dentro de las cárceles que son controladas por el organismo colombiano conocido como Inpec (Instituto Nacional Penitenciario y Carcelario). Este proyecto fue desarrollado para la empresa 'Sistemas Comerciales SIA Ltda'."));

mapPhrases.set("title-lcd-pin", new PhraseDto("LCD Pin", "LCD Pin"));
mapPhrases.set("description-lcd-pin", new PhraseDto("This desktop app -developed in Java- was focused on register the enrollment data of the students at a school (Liceo Campo David - LCD for its acronym in Spanish), in order to obtain a consecutive number that the parents must present to the school, along with the corresponding payment, thus confirming the student's enrollment. This project was developed for the company 'Sistemas Comerciales SIA Ltda'.", "Esta aplicación de escritorio desarrollada en Java estuvo enfocada en registrar los datos de matrícula de los alumnos del colegio Liceo Campo David (LCD), con el fin de obtener un número consecutivo que los padres de familia deben presentar al colegio, junto con el pago correspondiente, confirmando así la matrícula del alumno. Este proyecto fue desarrollado para la empresa 'Sistemas Comerciales SIA Ltda'."));

mapPhrases.set("title-lcd-questions", new PhraseDto("Cuestionario LCD", "Cuestionario LCD"));
mapPhrases.set("description-lcd-questions", new PhraseDto("This Java desktop application was built to store and print questions on the exams for the school Liceo Campo David (LCD for its acronym in Spanish). The exams were made and printed using a powerful tool calles JasperReports. This project was developed for the company 'Sistemas Comerciales SIA Ltda'.", "Esta aplicación de escritorio en Java fue desarrollada para almacenar e imprimir preguntas para los exámenes del colegio Liceo Campo David (LCD). Los exámenes fueron realizados e impresos utilizando una potente herramienta llamada JasperReports. Este proyecto fue desarrollado para la empresa 'Sistemas Comerciales SIA Ltda'."));

mapPhrases.set("title-tu-conjunto", new PhraseDto("TuConjunto Project", "Proyecto TuConjunto"));
mapPhrases.set("description-tu-conjunto", new PhraseDto("This basic project was built on PHP using the framework Yii. This project was focused on help the administrators and related people with some topics related with horizontal properties and residential complexes. This project was developed for the company 'Data Global S.A'.", "Este proyecto básico fue desarrollado en PHP utilizando el framework Yii. Este proyecto estuvo enfocado en ayudar a los administradores y personas relacionadas con algunos temas relacionados con propiedades horizontales y conjuntos residenciales. Este proyecto fue desarrollado para la empresa 'Data Global S.A'."));

mapPhrases.set("title-form", new PhraseDto("Basic form example", "Ejemplo de formulario básico"));
mapPhrases.set("description-form", new PhraseDto("It was a little mockup where a person can register in a web application.", "Se trató de una pequeña maqueta donde una persona puede registrarse en una aplicación web."));

export const enUS = "enUS";
export const esES = "esES";

export function getText(id: string, lang: string | null) {
    if (!lang) {
        return null;
    }
    const item = mapPhrases.get(id);
    if (!item) {
        return 'Missing location for id ' + id;
    }
    switch (lang) {
        case enUS:
            return item.englishVersion;
        case esES:
            return item.spanishVersion;
        default:
            return 'Unknown language ' + lang;
    }
}