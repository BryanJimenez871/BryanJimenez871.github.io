export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  context: string;
  contribution: string;
  result: string;
  technologies: string[];
  links: ProjectLink[];
  privateCode?: boolean;
}

export const projects: Project[] = [
  {
    id: "habitos",
    eyebrow: "Aplicación + API + Data Pipeline",
    title: "Hábitos Personales",
    summary:
      "Aplicación de escritorio para registrar hábitos diarios de forma dinámica, mediante una arquitectura de datos completa que conecta la base de datos local con Apache Airflow para automatizar el flujo hacia la nube y Power BI para visualizar y analizar la información.",
    context:
      "El proyecto comenzó como una aplicación local y evolucionó hacia una arquitectura modular, preparada para centralizar y analizar la información.",
    contribution:
      "Diseñé el cliente en PySide6, una API REST con FastAPI, la base de datos PostgreSQL y un pipeline periódico que mueve los registros a BigQuery en formato Parquet.",
    result:
      "Una solución funcional y reproducible con Docker Compose, capaz de registrar hábitos, exponer los datos mediante una API y automatizar su ingesta para análisis posterior.",
    technologies: [
      "Python",
      "PySide6",
      "FastAPI",
      "PostgreSQL",
      "Docker Compose",
      "Apache Airflow",
      "Parquet",
      "BigQuery",
      "Matplotlib",
    ],
    links: [
      {
        label: "Aplicación y API",
        href: "https://github.com/BryanJimenez871/habitos_personales_fastAPI",
      },
      {
        label: "Pipeline de datos",
        href: "https://github.com/BryanJimenez871/habitos-pipeline_airflow",
      },
    ],
  },
  {
    id: "fastcheck",
    eyebrow: "Web scraping + IA + ETL",
    title: "Scraping y análisis de imágenes con IA",
    summary:
      "Automatización que recopila imágenes de publicaciones, las clasifica con la API de ChatGPT y, mediante un proceso ETL, las transforma en un dataset limpio, validado y listo para análisis.",
    context:
      "El análisis requería procesar un volumen considerable de imágenes publicadas en distintas redes sociales, una tarea lenta y propensa a errores si se realizaba manualmente.",
    contribution:
      "Construí el scraping de más de 2.000 imágenes, integré la API de ChatGPT para clasificar su red de origen y extraer texto, y diseñé un ETL para limpiar y validar cada respuesta.",
    result:
      "Un flujo automatizado que reduce trabajo manual, controla respuestas inconsistentes y entrega información estructurada para análisis.",
    technologies: ["Python", "Web Scraping", "API de ChatGPT", "ETL", "Pandas", "Validación de datos"],
    links: [],
    privateCode: true,
  },
  {
    id: "olist",
    eyebrow: "Análisis exploratorio + calidad de datos",
    title: "Puntualidad de entregas y satisfacción en comercio electrónico",
    summary:
      "Análisis de datos de e-commerce que relaciona el desempeño de entrega con las reseñas de clientes, mediante una tabla analítica validada y visualizaciones comparativas.",
    context:
      "El objetivo fue estudiar si la puntualidad de las entregas se asocia con la satisfacción de los clientes en el dataset público de Olist.",
    contribution:
      "Construí una tabla con una fila por pedido, agregando artículos y reseñas antes de los joins para evitar duplicaciones y distorsiones en las métricas.",
    result:
      "Las entregas posteriores a la fecha obtuvieron una reseña media de 2,27, frente a 4,29 en las entregas anticipadas; los gráficos permitieron comparar esta diferencia y la distribución de calificaciones.",
    technologies: ["Python", "Pandas", "Matplotlib", "Google Colab", "Validación de joins", "EDA"],
    links: [],
  },
  {
    id: "stu",
    eyebrow: "Caso académico + análisis de procesos",
    title: "Análisis del modelo de negocio y procesos TI en STU",
    summary:
      "Caso académico que analiza el modelo de negocio y los procesos TI de una empresa de transporte urbano para identificar oportunidades de mejora.",
    context:
      "El estudio se centró en comprender el modelo de negocio de STU y la relación entre su operación y la gestión de recursos informáticos.",
    contribution:
      "Organicé el análisis en fases, estudié el modelo de negocio y los procesos TI e identifiqué oportunidades de mejora para la operación y los sistemas de información.",
    result:
      "Identifiqué oportunidades relacionadas con la eficiencia operativa, la integración de sistemas y la seguridad, como parte de un ejercicio académico.",
    technologies: ["BPMN", "Gestión de proyectos", "Modelo de negocio", "Análisis de procesos"],
    links: [],
  },
];
