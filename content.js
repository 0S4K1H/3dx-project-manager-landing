// content.js - Centralized copy for the Landing Page

const pageData = {
  hero: {
    kicker: "Gobernanza Ejecutiva",
    title: "Cuando la gestión de proyectos deja de ser colaboración y se convierte en gobernanza operativa.",
    subtitle: "Cómo evaluar si conviene construir internamente… o adoptar una capacidad ya probada.",
    pitchLabel: "El Mensaje Organizacional",
    pitch: "Más que comparar herramientas, queremos poner sobre la mesa qué pasa cuando la operación crece y la gestión del proyecto deja de ser solo coordinación documental."
  },
  
  slide2: {
    kicker: "Resumen Ejecutivo",
    title: "La transición de la colaboración a la gobernanza",
    description: "Evaluando el alcance real de las herramientas frente a las necesidades del negocio.",
    leftTitle: "SharePoint sí sirve.",
    leftDesc: "Es una herramienta perfectamente válida para:",
    leftList: [
      "Colaboración documental",
      "Formularios simples",
      "Automatización ligera",
      "Procesos sencillos interdepartamentales"
    ],
    rightTitle: "Pero cuando el negocio necesita...",
    rightDesc: "La conversación tecnológica y operativa cambia radicalmente:",
    rightList: [
      "Trazabilidad profunda",
      "Control de cambio",
      "Gobernanza entre áreas",
      "Auditoría rigurosa",
      "Escalabilidad operativa real"
    ]
  },

  slide3: {
    kicker: "La decisión no es tecnológica. Es operativa.",
    question: "La pregunta no es '¿Se puede usar una herramienta de colaboración para administrar proyectos?', la pregunta correcta es: '¿Puede sostener de forma confiable la complejidad real del negocio?'",
    needs: [
      "Múltiples áreas trabajando",
      "Cambios de impacto cruzado",
      "Aprobaciones formales",
      "Trazabilidad auditable",
      "Visibilidad ejecutiva confiable",
      "Proyectos en paralelo"
    ]
  },

  slide4: {
    kicker: "Madurez Organizacional",
    title: "No todas las organizaciones necesitan lo mismo",
    description: "Si el objetivo es centralizar documentos, una herramienta ligera es suficiente. Pero cuando el proyecto involucra múltiples entregables, cambios frecuentes y dependencias, la necesidad ya no es colaboración. La necesidad es gobernanza."
  },

  slide5: {
    conclusion: "La pregunta ya no es 'cómo damos seguimiento', sino 'cómo controlamos la operación sin perder trazabilidad'.",
    requirements: [
      { icon: "📊", title: "Estructura WBS", desc: "Estructura de desglose de trabajo clara y funcional." },
      { icon: "📅", title: "Cronograma Real", desc: "Planificación con dependencias reales y ruta crítica." },
      { icon: "⚖️", title: "Plan vs Ejecución", desc: "Comparación continua entre línea base y realidad." },
      { icon: "👥", title: "Gestión de Recursos", desc: "Control de capacidad y asignación de tiempos." },
      { icon: "⚠️", title: "Control de Riesgos", desc: "Gestión unificada de issues, decisiones y riesgos." },
      { icon: "🔗", title: "Entregables Ligados", desc: "Documentos atados al avance y finalización de tareas." },
      { icon: "✅", title: "Rutas de Aprobación", desc: "Flujos de aprobación formales (routes)." },
      { icon: "🚧", title: "Phase Gates", desc: "Bloqueos rígidos y validaciones por fase de proyecto." },
      { icon: "🏢", title: "Control Multi-proyecto", desc: "Visión de portafolio y programas de la empresa." }
    ]
  },

  maturityFlow: {
    kicker: "Curva de Madurez Operativa",
    title: "El camino hacia el Hub Digital Integrado (Single Source of Truth)",
    steps: [
      { id: 1, title: "Colaboración", apps: ["3DPlay", "3D Markup", "3DNotification"] },
      { id: 2, title: "Gestión Documental", apps: ["Document Management", "3DSwym"] },
      { id: 3, title: "Gestión de Proyectos", apps: ["Collaborative Tasks", "Route & Issue Mgt"] },
      { id: 4, title: "Gobernanza de Cambios", apps: ["Lifecycle Actions", "Change Actions", "Bookmark Editor"] },
      { id: 5, title: "El Ecosistema Pleno", apps: ["Trazabilidad End-to-End", "Dashboards Ejecutivos"] }
    ]
  },

  slide6: {
    kicker: "Riesgo Operativo",
    title: "Lo que realmente encarece la gestión",
    description: "No es la herramienta. Es la complejidad operativa actuando sobre sistemas frágiles.",
    list1Title: "Cuando la operación crece, el costo aparece en:",
    list1: [
      "Retrasos acumulados",
      "Retrabajo recurrente",
      "Errores por información desalineada",
      "Carga administrativa en reportes manuales",
      "Decisiones con datos incompletos",
      "Dependencia de procesos frágiles"
    ],
    list2Title: "El costo oculto NO está en el sistema, está en:",
    list2: [
      "Corregir lo que se aprobó mal",
      "Reconstruir qué pasó y quién lo aprobó",
      "Coordinar cambios de última hora entre áreas",
      "Explicar por qué el plan no refleja la realidad",
      "Sostener la gestión al aumentar los proyectos"
    ],
    conclusion: "El riesgo no está en usar una herramienta. El riesgo está en operar sobre un modelo que no escala con la complejidad del negocio."
  },

  slide7: {
    kicker: "El Cambio de Paradigma",
    title: "Qué cambia con 3DEXPERIENCE",
    description: "3DEXPERIENCE no parte de documentos y flujos aislados. Parte de un modelo operativo integrado, donde lo que una empresa termina construyendo, ya existe de forma nativa.",
    capTitle: "Capacidades Nativas Incorporadas",
    features: [
      "WBS Estructural",
      "Gantt & Kanban",
      "Gestión de Recursos",
      "Riesgos & Decisiones",
      "Entregables por Tarea",
      "Phase Gates",
      "Rutas de Aprobación",
      "Baselines",
      "Dashboards Ejecutivos",
      "Control de Portafolio",
      "Gobernanza Integrada"
    ]
  },

  slide8: {
    impactTitle: "Control y Trazabilidad",
    impactList: [
      "Trabajar sobre una sola versión de la verdad",
      "Conectar tareas, entregables y aprobaciones",
      "Comparar Baseline vs Ejecución Real de inmediato",
      "Ligar cambios con impacto operativo real",
      "Mantener un historial y auditoría inquebrantables",
      "Tomar decisiones con visibilidad ejecutiva total"
    ],
    ssotBox: "Single Source of Truth: La información, flujos y la colaboración se centralizan en un entorno unificado para evitar errores por versiones dispersas."
  },

  socialProof: [
    "Ingeniería Civil", "Gestión de Portafolio", "Minería Global", "Operaciones Seguras", "Transformación Digital", "Auditoría Continua", "Eficiencia Operativa"
  ],

  mockupFeature: {
    kicker: "Interacción en Tiempo Real",
    title: "Un Vistazo a la Solución",
    items: [
      { id: "wbs", title: "Project Builder (WBS)", imgSrc: "WBS.png", desc: "Vista general de planificación y seguimiento de proyectos." },
      { id: "gantt", title: "Gantt & Kanban", imgSrc: "Gantt.png", desc: "Visualiza el progreso real contra la línea base en diagramas interactivos o tableros ágiles." },
      { id: "issues", title: "Route & Issue Management", imgSrc: "task.png", desc: "Asigna tareas y controla riesgos mediante rutas formales de aprobación 100% auditables." },
      { id: "3dplay", title: "Visualización Inmersiva", iframeSrc: "https://www.youtube.com/embed/nZc_P_zE05I?autoplay=1&mute=1", desc: "Interactúa con modelos 3D y planos CAD directamente en el navegador sin instalar software pesados." }
    ]
  },

  cta: {
    kicker: "Conclusión",
    title: "El Siguiente Paso",
    statement1: "Con un desarrollo interno se construye una solución.",
    statement2: "Con 3DEXPERIENCE se adopta una capacidad operativa ya probada.",
    nextStep: "Evaluar juntos el proceso actual y definir si hoy necesitan colaboración… o gobernanza operativa.",
    buttonText: "Evaluar nuestro proceso"
  }
};

// Export to window
window.pageData = pageData;
