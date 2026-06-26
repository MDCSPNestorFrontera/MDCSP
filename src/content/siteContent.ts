export type Lang = 'es' | 'en';

export const languages: Lang[] = ['es', 'en'];

export const siteContent = {
  es: {
    locale: 'es-PR',
    clinic: {
      name: 'Consultorio Dr. Nestor Frontera',
      initials: 'NF',
      tagline: 'Medicina general con atención cercana y moderna',
      phone: '(787) 821-4417',
      phoneLink: 'tel:+17878214417',
      email: 'contacto@drfrontera.com',
      address: '32-42 C. 25 de Julio, Guánica, PR 00653',
      parkingNote: 'Estacionamiento cercano y accesible',
      hours: [
        { label: 'Lunes a Jueves', value: '8:00 a.m. - 4:00 p.m.' },
        { label: 'Viernes', value: '8:00 a.m. - 12:00 p.m.' },
        { label: 'Sábado y Domingo', value: 'Cerrado' },
      ],
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre el doctor',
      services: 'Servicios',
      contact: 'Contacto',
    },
    header: {
      skipToContent: 'Saltar al contenido',
      menuOpen: 'Menú',
      menuClose: 'Cerrar',
    },
    a11y: {
      languageToggle: 'Selector de idioma',
    },
    hero: {
      headline: 'Cuidado médico humano y elegante para tu familia',
      subheadline:
        'Atención médica integral con un enfoque cálido, claro y personalizado para cada etapa de la vida.',
      primaryCta: 'Llámanos',
      secondaryCta: 'Ver servicios',
      featureNote: 'Medicina general · Prevención · Bienestar continuo',
      imageAlt: 'Consultorio médico moderno y elegante',
    },
    trust: {
      title: 'Confianza construida con experiencia y cercanía',
      items: [
        {
          label: 'Credenciales médicas sólidas',
          value: 'Formación médica internacional con enfoque clínico integral.',
        },
        {
          label: 'Atención médica general',
          value: 'Enfoque en prevención, seguimiento y educación del paciente.',
        },
        {
          label: 'Aceptando nuevos pacientes',
          value: 'Agenda abierta para nuevos pacientes en Guánica.',
        },
        {
          label: 'Atención centrada en la persona',
          value: 'Escucha activa, claridad y acompañamiento real.',
        },
        {
          label: 'Planes aceptados',
          value: 'Consulta sobre planes aceptados al llamar.',
        },
      ],
    },
    servicesPreview: {
      title: 'Servicios principales',
      subtitle: 'Soluciones médicas enfocadas en prevención y bienestar continuo.',
    },
    services: [
      {
        id: 'primary-care',
        title: 'Consulta de medicina general',
        description: 'Evaluaciones completas, seguimiento y planes personalizados.',
        icon: 'stethoscope',
      },
      {
        id: 'preventive',
        title: 'Prevención y chequeos',
        description: 'Chequeos anuales, control de factores de riesgo y orientación.',
        icon: 'shield',
      },
      {
        id: 'chronic',
        title: 'Manejo de condiciones crónicas',
        description: 'Acompañamiento en hipertensión, diabetes y salud cardiovascular.',
        icon: 'heart',
      },
      {
        id: 'women-health',
        title: 'Salud integral de la mujer',
        description: 'Atención sensible en cada etapa, con enfoque preventivo.',
        icon: 'leaf',
      },
      {
        id: 'tele',
        title: 'Orientación y seguimiento',
        description: 'Seguimiento clínico y educación para decisiones informadas.',
        icon: 'chat',
      },
      {
        id: 'labs',
        title: 'Coordinación de laboratorios',
        description: 'Gestión clara de estudios y referencias médicas.',
        icon: 'lab',
      },
    ],
    why: {
      title: 'Por qué elegirnos',
      points: [
        {
          title: 'Atención clara y sin prisa',
          description: 'Consultas donde la escucha y la explicación son prioridad.',
        },
        {
          title: 'Ambiente premium y calmado',
          description: 'Espacios diseñados para sentir tranquilidad y confianza.',
        },
        {
          title: 'Planes y opciones accesibles',
          description: 'Transparencia en procesos y apoyo al paciente.',
        },
      ],
    },
    officePanel: {
      title: 'Información rápida',
      callLabel: 'Llámanos para orientación inmediata',
    },
    footer: {
      contactLabel: 'Contacto',
      hoursLabel: 'Horario',
      rights: 'Todos los derechos reservados.',
    },
    testimonials: {
      title: 'Testimonios de pacientes',
      note: 'Contenido de muestra para fines de demostración.',
      items: [
        {
          quote: '“Una experiencia muy humana y profesional. Me sentí escuchada en todo momento.”',
          name: 'Paciente A (muestra)',
        },
        {
          quote: '“El doctor explica todo con calma y claridad. Muy recomendado.”',
          name: 'Paciente B (muestra)',
        },
        {
          quote: '“La clínica es hermosa y el trato fue excelente.”',
          name: 'Paciente C (muestra)',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Atienden nuevos pacientes?',
          answer: 'Sí, estamos aceptando nuevos pacientes. Llámanos para coordinar.',
        },
        {
          question: '¿Qué debo llevar a mi visita?',
          answer: 'Identificación, tarjeta del plan médico y lista de medicamentos.',
        },
        {
          question: '¿Cómo funcionan los referidos?',
          answer: 'Te ayudamos a coordinar referidos según la necesidad clínica.',
        },
      ],
    },
    about: {
      title: 'Sobre el doctor',
      name: 'Dr. Nestor Frontera, MD',
      specialty: 'Medicina General',
      headshotAlt: 'Retrato profesional del doctor',
      sections: {
        credentials: 'Credenciales',
        values: 'Valores',
        timeline: 'Trayectoria',
      },
      intro:
        'El Dr. Frontera combina experiencia clínica con un enfoque humano y preventivo, acompañando a sus pacientes con claridad y empatía.',
      bio: [
        'Médico en práctica general en Guánica, Puerto Rico, con atención enfocada en prevención y seguimiento clínico.',
        'Él cree en una medicina que escucha, educa y acompaña con respeto, ayudando a cada persona a tomar decisiones informadas sobre su salud.',
      ],
      education: [
        'Universidad Autónoma de Guadalajara',
        'Clase de 1998',
      ],
      values: [
        { title: 'Compasión', description: 'Cuidado cercano y respetuoso en todo momento.' },
        { title: 'Profesionalismo', description: 'Rigor clínico con comunicación clara.' },
        { title: 'Accesibilidad', description: 'Respuestas directas y orientación continua.' },
      ],
      timeline: [
        { year: '1998', detail: 'Graduación en Medicina, Universidad Autónoma de Guadalajara.' },
        { year: 'Actualidad', detail: 'Atención de medicina general en Guánica.' },
        { year: 'Enfoque', detail: 'Prevención, seguimiento y educación del paciente.' },
      ],
    },
    servicesPage: {
      title: 'Servicios',
      subtitle: 'Atención médica integral con un enfoque preventivo y humano.',
      disclaimer:
        'Los servicios pueden variar según la evaluación clínica. Llámanos para más información.',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Estamos aquí para orientarte. Llámanos o envíanos tu consulta general.',
      form: {
        title: 'Envíanos un mensaje',
        success: 'Gracias por tu mensaje. Te responderemos pronto.',
        error: 'Por favor revisa los campos marcados.',
        fields: {
          name: 'Nombre',
          phone: 'Teléfono',
          email: 'Correo electrónico',
          message: 'Mensaje',
        },
        submit: 'Enviar mensaje',
        disclaimer:
          'No envíes urgencias médicas ni información privada sensible por este formulario.',
      },
      mapTitle: 'Ubicación',
      mapNote: 'Placeholder de mapa. Integra tu mapa preferido aquí.',
    },
    cta: {
      title: '¿Listo para hablar con nuestro equipo?',
      subtitle: 'Llámanos y con gusto te orientamos.',
      button: 'Llámanos',
    },
    seo: {
      siteName: 'Consultorio Dr. Nestor Frontera',
      pages: {
        home: {
          title: 'Dr. Nestor Frontera · Medicina general en Puerto Rico',
          description:
            'Atención médica general, humana y moderna en Puerto Rico. Llámanos para orientación y cuidado preventivo.',
        },
        about: {
          title: 'Sobre el doctor · Dr. Nestor Frontera',
          description: 'Conoce la trayectoria y el enfoque humano del Dr. Nestor Frontera.',
        },
        services: {
          title: 'Servicios médicos · Dr. Nestor Frontera',
          description: 'Servicios de medicina general, prevención y acompañamiento clínico.',
        },
        contact: {
          title: 'Contacto · Dr. Nestor Frontera',
          description: 'Información de contacto, horarios y cómo llegar al consultorio.',
        },
      },
      openGraph: {
        title: 'Consultorio Dr. Nestor Frontera',
        description: 'Cuidado médico general con un enfoque humano y preventivo en Puerto Rico.',
      },
    },
  },
  en: {
    locale: 'en-US',
    clinic: {
      name: 'Dr. Nestor Frontera Office',
      initials: 'NF',
      tagline: 'General practice with a modern, caring approach',
      phone: '(787) 821-4417',
      phoneLink: 'tel:+17878214417',
      email: 'contact@drfrontera.com',
      address: '32-42 C. 25 de Julio, Guánica, PR 00653',
      parkingNote: 'Nearby accessible parking available',
      hours: [
        { label: 'Monday to Thursday', value: '8:00 a.m. - 4:00 p.m.' },
        { label: 'Friday', value: '8:00 a.m. - 12:00 p.m.' },
        { label: 'Saturday and Sunday', value: 'Closed' },
      ],
    },
    nav: {
      home: 'Home',
      about: 'About the doctor',
      services: 'Services',
      contact: 'Contact',
    },
    header: {
      skipToContent: 'Skip to content',
      menuOpen: 'Menu',
      menuClose: 'Close',
    },
    a11y: {
      languageToggle: 'Language selector',
    },
    hero: {
      headline: 'Human, elegant medical care for your family',
      subheadline:
        'Comprehensive care delivered with warmth, clarity, and a personalized plan for every stage of life.',
      primaryCta: 'Call Us',
      secondaryCta: 'View services',
      featureNote: 'General practice · Prevention · Ongoing wellbeing',
      imageAlt: 'Modern and elegant medical office',
    },
    trust: {
      title: 'Trust built through experience and presence',
      items: [
        {
          label: 'Strong medical credentials',
          value: 'International medical training with a comprehensive clinical focus.',
        },
        {
          label: 'General medical care',
          value: 'Focus on prevention, follow-up, and patient education.',
        },
        {
          label: 'Accepting new patients',
          value: 'Currently accepting new patients in Guánica.',
        },
        {
          label: 'Person-centered care',
          value: 'Active listening, clarity, and real support.',
        },
        {
          label: 'Plans accepted',
          value: 'Call to confirm accepted plans.',
        },
      ],
    },
    servicesPreview: {
      title: 'Primary services',
      subtitle: 'Medical solutions focused on prevention and continuous wellbeing.',
    },
    services: [
      {
        id: 'primary-care',
        title: 'General practice consultation',
        description: 'Complete evaluations, follow-up, and personalized plans.',
        icon: 'stethoscope',
      },
      {
        id: 'preventive',
        title: 'Preventive care and checkups',
        description: 'Annual exams, risk factor control, and guidance.',
        icon: 'shield',
      },
      {
        id: 'chronic',
        title: 'Chronic condition management',
        description: 'Support for hypertension, diabetes, and cardiovascular health.',
        icon: 'heart',
      },
      {
        id: 'women-health',
        title: 'Women’s integrated health',
        description: 'Sensitive care at every stage with a preventive focus.',
        icon: 'leaf',
      },
      {
        id: 'tele',
        title: 'Guidance and follow-up',
        description: 'Clinical follow-up and education for informed decisions.',
        icon: 'chat',
      },
      {
        id: 'labs',
        title: 'Lab coordination',
        description: 'Clear management of studies and referrals.',
        icon: 'lab',
      },
    ],
    why: {
      title: 'Why choose us',
      points: [
        {
          title: 'Clear, unrushed care',
          description: 'Appointments where listening and explanation come first.',
        },
        {
          title: 'Premium calm environment',
          description: 'Spaces designed to feel tranquil and trustworthy.',
        },
        {
          title: 'Accessible options',
          description: 'Transparent processes and patient support.',
        },
      ],
    },
    officePanel: {
      title: 'Quick info',
      callLabel: 'Call for immediate guidance',
    },
    footer: {
      contactLabel: 'Contact',
      hoursLabel: 'Hours',
      rights: 'All rights reserved.',
    },
    testimonials: {
      title: 'Patient testimonials',
      note: 'Sample content for demonstration purposes.',
      items: [
        {
          quote: '“A truly human and professional experience. I felt heard.”',
          name: 'Patient A (sample)',
        },
        {
          quote: '“Everything was explained with calm and clarity. Highly recommended.”',
          name: 'Patient B (sample)',
        },
        {
          quote: '“Beautiful clinic and excellent care.”',
          name: 'Patient C (sample)',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Are you accepting new patients?',
          answer: 'Yes, we are accepting new patients. Call us to coordinate.',
        },
        {
          question: 'What should I bring to my visit?',
          answer: 'Bring ID, insurance card, and a list of current medications.',
        },
        {
          question: 'How do referrals work?',
          answer: 'We help coordinate referrals based on clinical needs.',
        },
      ],
    },
    about: {
      title: 'About the doctor',
      name: 'Nestor Frontera, MD',
      specialty: 'General Practice',
      headshotAlt: 'Professional portrait of the doctor',
      sections: {
        credentials: 'Credentials',
        values: 'Values',
        timeline: 'Timeline',
      },
      intro:
        'Dr. Frontera combines clinical experience with a human, preventive approach, guiding patients with clarity and empathy.',
      bio: [
        'General medical practice in Guánica, Puerto Rico, with care focused on prevention and clinical follow-up.',
        'He believes in medicine that listens, educates, and supports respectful, informed decisions.',
      ],
      education: [
        'Universidad Autónoma de Guadalajara',
        'Class of 1998',
      ],
      values: [
        { title: 'Compassion', description: 'Caring, respectful guidance at every step.' },
        { title: 'Professionalism', description: 'Clinical rigor with clear communication.' },
        { title: 'Accessibility', description: 'Direct answers and continuous guidance.' },
      ],
      timeline: [
        { year: '1998', detail: 'Medical graduation, Universidad Autónoma de Guadalajara.' },
        { year: 'Current', detail: 'General practice care in Guánica.' },
        { year: 'Focus', detail: 'Prevention, follow-up, and patient education.' },
      ],
    },
    servicesPage: {
      title: 'Services',
      subtitle: 'Comprehensive care with a preventive, human approach.',
      disclaimer:
        'Services may vary based on clinical evaluation. Please call for more information.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'We are here to guide you. Call us or send a general inquiry.',
      form: {
        title: 'Send us a message',
        success: 'Thanks for your message. We will get back to you soon.',
        error: 'Please review the highlighted fields.',
        fields: {
          name: 'Name',
          phone: 'Phone',
          email: 'Email',
          message: 'Message',
        },
        submit: 'Send message',
        disclaimer: 'Do not send urgent medical issues or private health data through this form.',
      },
      mapTitle: 'Location',
      mapNote: 'Map placeholder. Integrate your preferred map here.',
    },
    cta: {
      title: 'Ready to speak with our team?',
      subtitle: 'Call us and we will gladly assist you.',
      button: 'Call Us',
    },
    seo: {
      siteName: 'Dr. Nestor Frontera Office',
      pages: {
        home: {
          title: 'Dr. Nestor Frontera · General practice in Puerto Rico',
          description:
            'Comprehensive, human, modern general medical care in Puerto Rico. Call us for guidance and preventive care.',
        },
        about: {
          title: 'About the doctor · Dr. Nestor Frontera',
          description: 'Learn about Dr. Nestor Frontera and his human-centered care philosophy.',
        },
        services: {
          title: 'Medical services · Dr. Nestor Frontera',
          description: 'General practice, prevention, and clinical support services.',
        },
        contact: {
          title: 'Contact · Dr. Nestor Frontera',
          description: 'Contact information, hours, and how to reach the office.',
        },
      },
      openGraph: {
        title: 'Dr. Nestor Frontera Office',
        description: 'General medical care with a human and preventive approach in Puerto Rico.',
      },
    },
  },
} as const;
