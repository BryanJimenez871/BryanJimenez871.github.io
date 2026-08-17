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
      "Un sistema de escritorio que transforma el seguimiento cotidiano de hábitos en datos consultables y visualizaciones útiles.",
    context:
      "El proyecto comenzó como una aplicación local y evolucionó hacia una arquitectura desacoplada, preparada para centralizar y analizar la información.",
    contribution:
      "Diseñé el cliente en PySide6, una API REST con FastAPI, la persistencia en PostgreSQL y un pipeline periódico que mueve los registros a BigQuery en formato Parquet.",
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
    title: "FastCheck",
    summary:
      "Automatización para convertir imágenes de publicaciones en un dataset limpio, validado y listo para análisis.",
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
];
