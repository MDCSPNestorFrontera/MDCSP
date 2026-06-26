export type Lang = 'es' | 'en';

export const languages: Lang[] = ['es', 'en'];

export const siteContent = {
  es: {
    locale: 'es-PR',
    clinic: {
      name: 'MDCSP Nestor Frontera Tacoronte',
      initials: 'NF',
      tagline: 'Medicina general, preventiva y familiar en Guánica',
      phone: '(787) 821-4417',
      phoneLink: 'tel:+17878214417',
      email: '',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=32-42%20C.%2025%20de%20Julio%2C%20Guanica%2C%20PR%2000653',
      address: '32-42 C. 25 de Julio, Guánica, PR 00653',
      parkingNote: 'Consultorio médico en el centro de Guánica',
      hours: [
        { label: 'Lunes a Jueves', value: '7:00 a.m. - 4:00 p.m.' },
        { label: 'Viernes', value: '7:00 a.m. - 4:00 p.m.' },
        { label: 'Sábado y Domingo', value: 'Cerrado' },
      ],
    },
    nav: {
      home: 'Inicio',
      about: 'Dr. Frontera',
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
      headline: 'Dr. Nestor R. Frontera Tacoronte',
      subheadline:
        'Médico generalista en Guánica con una trayectoria sólida en medicina familiar, preventiva, emergencias y atención hospitalaria en Puerto Rico.',
      primaryCta: 'Llamar al consultorio',
      secondaryCta: 'Conocer su trayectoria',
      featureNote: 'MDCSP Nestor Frontera Tacoronte · Guánica, Puerto Rico',
      imageAlt: 'Retrato del Dr. Nestor R. Frontera Tacoronte',
    },
    trust: {
      title: 'Una práctica médica guiada por experiencia, cercanía y respeto',
      items: [
        {
          label: 'Médico generalista en Guánica',
          value: 'Atención médica continua para pacientes y familias desde su oficina de medicina preventiva y familiar.',
        },
        {
          label: 'Formación internacional',
          value: 'Doctorado en Medicina por la Universidad Autónoma de Guadalajara, con estudios previos en Biología.',
        },
        {
          label: 'Experiencia hospitalaria',
          value: 'Rotaciones y práctica clínica en instituciones de Manatí, Castañer, Ponce, Yauco y Guánica.',
        },
        {
          label: 'Liderazgo en emergencias',
          value: 'Subdirector de sala de emergencia en Yauco entre 2005 y 2012.',
        },
        {
          label: 'Cuidado humano',
          value: 'Un doctor reconocido por su trato atento, claro y comprometido con la salud de su comunidad.',
        },
      ],
    },
    servicesPreview: {
      title: 'Servicios del consultorio',
      subtitle: 'Medicina general enfocada en prevención, seguimiento clínico y orientación familiar.',
    },
    services: [
      {
        id: 'primary-care',
        title: 'Medicina general',
        description: 'Evaluación médica, orientación clínica y seguimiento para pacientes adultos y familias.',
        icon: 'stethoscope',
      },
      {
        id: 'preventive',
        title: 'Medicina preventiva',
        description: 'Chequeos, revisión de factores de riesgo y recomendaciones para cuidar la salud a tiempo.',
        icon: 'shield',
      },
      {
        id: 'chronic',
        title: 'Condiciones crónicas',
        description: 'Seguimiento de presión, diabetes, salud cardiovascular y otras condiciones comunes.',
        icon: 'heart',
      },
      {
        id: 'family',
        title: 'Medicina familiar',
        description: 'Atención cercana para necesidades de salud cotidianas y continuidad del cuidado.',
        icon: 'leaf',
      },
      {
        id: 'follow-up',
        title: 'Seguimiento clínico',
        description: 'Revisión de resultados, medicamentos, historial médico y próximos pasos.',
        icon: 'chat',
      },
      {
        id: 'coordination',
        title: 'Coordinación de cuidado',
        description: 'Apoyo con laboratorios, referidos y orientación según la evaluación médica.',
        icon: 'lab',
      },
    ],
    why: {
      title: 'Por qué los pacientes confían en el Dr. Frontera',
      points: [
        {
          title: 'Escucha real',
          description: 'Consultas con explicación clara, trato respetuoso y atención a la historia de cada paciente.',
        },
        {
          title: 'Experiencia amplia',
          description: 'Años de trabajo en hospitales, salas de emergencia y práctica privada en el suroeste de Puerto Rico.',
        },
        {
          title: 'Raíces en la comunidad',
          description: 'Una oficina médica en Guánica dedicada a prevención, familia y continuidad del cuidado.',
        },
      ],
    },
    officePanel: {
      title: 'Información del consultorio',
      callLabel: 'Llamar ahora',
    },
    footer: {
      contactLabel: 'Contacto',
      hoursLabel: 'Horario',
      rights: 'Todos los derechos reservados.',
    },
    testimonials: {
      title: 'Un médico querido por su comunidad',
      note: 'Mensajes representativos del tipo de experiencia que la oficina busca ofrecer.',
      items: [
        {
          quote: '“El Dr. Frontera explica con calma y trata a sus pacientes con mucho respeto.”',
          name: 'Paciente de Guánica',
        },
        {
          quote: '“Se siente la experiencia y el compromiso con la salud de la familia.”',
          name: 'Familia paciente',
        },
        {
          quote: '“Un médico accesible, humano y muy profesional.”',
          name: 'Paciente del área sur',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Dónde está ubicada la oficina?',
          answer: 'La oficina está en 32-42 C. 25 de Julio, Guánica, PR 00653.',
        },
        {
          question: '¿Cuál es el horario?',
          answer: 'Lunes a jueves de 7:00 a.m. a 4:00 p.m. y viernes de 7:00 a.m. a 4:00 p.m.',
        },
        {
          question: '¿Cómo puedo coordinar una visita?',
          answer: 'Llama al (787) 821-4417 para orientación y disponibilidad.',
        },
      ],
    },
    about: {
      title: 'Sobre el doctor',
      name: 'Dr. Nestor R. Frontera Tacoronte',
      specialty: 'Médico generalista · Medicina preventiva y familiar',
      headshotAlt: 'Retrato profesional del Dr. Nestor R. Frontera Tacoronte',
      sections: {
        credentials: 'Formación y credenciales',
        values: 'Su manera de cuidar',
        timeline: 'Trayectoria profesional',
      },
      intro:
        'El Dr. Nestor R. Frontera Tacoronte es el médico generalista de MDCSP Nestor Frontera Tacoronte en Guánica, Puerto Rico. Su práctica combina experiencia hospitalaria, prevención y una relación cercana con cada paciente.',
      bio: [
        'Estudió en la Escuela Superior Domingo Aponte Collazo en Lares y completó un bachillerato en Biología en la Pontificia Universidad Católica de Puerto Rico en Ponce.',
        'Entre 1994 y 1998 completó su Doctorado en Medicina en la Universidad Autónoma de Guadalajara. También cuenta con formación en medicina homeopática.',
        'Su experiencia incluye rotación de medicina en el Hospital Alejandro Otero López en Manatí y práctica clínica en hospitales como Castañer, San Lucas I, San Lucas II y Pavía Yauco.',
        'Desde 2010 mantiene su Oficina de Medicina Preventiva y Familiar en Guánica, sirviendo a la comunidad con atención médica general y seguimiento continuo.',
      ],
      education: [
        'Escuela Superior Domingo Aponte Collazo, Lares',
        'Pontificia Universidad Católica de Puerto Rico, Ponce · Bachillerato en Biología',
        'Universidad Autónoma de Guadalajara · Doctorado en Medicina, 1994-1998',
        'Formación en medicina homeopática',
      ],
      values: [
        { title: 'Cercanía', description: 'Un trato humano, directo y respetuoso para cada paciente.' },
        { title: 'Prevención', description: 'Cuidado orientado a identificar riesgos y proteger la salud antes de complicaciones.' },
        { title: 'Continuidad', description: 'Seguimiento responsable, educación y coordinación del cuidado cuando hace falta.' },
      ],
      timeline: [
        { year: '1994-1998', detail: 'Doctorado en Medicina, Universidad Autónoma de Guadalajara.' },
        { year: '2002-2005', detail: 'Hospital Castañer.' },
        { year: '2003-2005', detail: 'Hospital San Lucas I.' },
        { year: '2004-2007', detail: 'Hospital San Lucas II.' },
        { year: '2003-2012', detail: 'Hospital Pavía Yauco.' },
        { year: '2005-2012', detail: 'Subdirector de sala de emergencia en Yauco.' },
        { year: '2010-presente', detail: 'Oficina de Medicina Preventiva y Familiar en Guánica.' },
      ],
    },
    servicesPage: {
      title: 'Servicios médicos',
      subtitle: 'Atención general, preventiva y familiar para pacientes de Guánica y pueblos cercanos.',
      disclaimer:
        'Los servicios dependen de la evaluación clínica. Para emergencias médicas, llama al 911 o acude a la sala de emergencia más cercana.',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Coordina tu visita con la oficina de MDCSP Nestor Frontera Tacoronte en Guánica.',
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
          'No envíes urgencias médicas ni información privada sensible por este formulario. Para citas, llama al consultorio.',
      },
      mapTitle: 'Ubicación en Guánica',
      mapNote: '32-42 C. 25 de Julio, Guánica, PR 00653',
    },
    cta: {
      title: '¿Necesitas orientación médica general?',
      subtitle: 'Llama a MDCSP Nestor Frontera Tacoronte en Guánica y coordina tu visita.',
      button: 'Llamar al (787) 821-4417',
    },
    seo: {
      siteName: 'MDCSP Nestor Frontera Tacoronte',
      pages: {
        home: {
          title: 'MDCSP Nestor Frontera Tacoronte · Médico generalista en Guánica',
          description:
            'Oficina médica del Dr. Nestor R. Frontera Tacoronte en Guánica, Puerto Rico. Medicina general, preventiva y familiar.',
        },
        about: {
          title: 'Dr. Nestor R. Frontera Tacoronte · Trayectoria médica',
          description: 'Conoce la formación, experiencia hospitalaria y práctica médica del Dr. Nestor R. Frontera Tacoronte.',
        },
        services: {
          title: 'Servicios médicos · MDCSP Nestor Frontera Tacoronte',
          description: 'Medicina general, preventiva, familiar, seguimiento clínico y coordinación de cuidado en Guánica.',
        },
        contact: {
          title: 'Contacto · MDCSP Nestor Frontera Tacoronte en Guánica',
          description: 'Dirección, teléfono y horario de la oficina médica del Dr. Nestor Frontera en Guánica.',
        },
      },
      openGraph: {
        title: 'MDCSP Nestor Frontera Tacoronte',
        description: 'Medicina general, preventiva y familiar con el Dr. Nestor R. Frontera Tacoronte en Guánica.',
      },
    },
  },
  en: {
    locale: 'en-US',
    clinic: {
      name: 'MDCSP Nestor Frontera Tacoronte',
      initials: 'NF',
      tagline: 'General, preventive, and family medicine in Guánica',
      phone: '(787) 821-4417',
      phoneLink: 'tel:+17878214417',
      email: '',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=32-42%20C.%2025%20de%20Julio%2C%20Guanica%2C%20PR%2000653',
      address: '32-42 C. 25 de Julio, Guánica, PR 00653',
      parkingNote: 'Medical office in central Guánica',
      hours: [
        { label: 'Monday to Thursday', value: '7:00 a.m. - 4:00 p.m.' },
        { label: 'Friday', value: '7:00 a.m. - 4:00 p.m.' },
        { label: 'Saturday and Sunday', value: 'Closed' },
      ],
    },
    nav: {
      home: 'Home',
      about: 'Dr. Frontera',
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
      headline: 'Dr. Nestor R. Frontera Tacoronte',
      subheadline:
        'A general practitioner in Guánica with a strong background in family medicine, preventive care, emergency medicine, and hospital-based care in Puerto Rico.',
      primaryCta: 'Call the office',
      secondaryCta: 'Meet the doctor',
      featureNote: 'MDCSP Nestor Frontera Tacoronte · Guánica, Puerto Rico',
      imageAlt: 'Portrait of Dr. Nestor R. Frontera Tacoronte',
    },
    trust: {
      title: 'A medical practice shaped by experience, presence, and respect',
      items: [
        {
          label: 'General practitioner in Guánica',
          value: 'Ongoing medical care for patients and families through his preventive and family medicine office.',
        },
        {
          label: 'International medical education',
          value: 'Doctor of Medicine from Universidad Autónoma de Guadalajara, with prior studies in Biology.',
        },
        {
          label: 'Hospital experience',
          value: 'Clinical rotations and practice in Manatí, Castañer, Ponce, Yauco, and Guánica.',
        },
        {
          label: 'Emergency leadership',
          value: 'Assistant director of the emergency room in Yauco from 2005 to 2012.',
        },
        {
          label: 'Human-centered care',
          value: 'Known for attentive, clear, and committed care for his community.',
        },
      ],
    },
    servicesPreview: {
      title: 'Office services',
      subtitle: 'General medicine focused on prevention, clinical follow-up, and family guidance.',
    },
    services: [
      {
        id: 'primary-care',
        title: 'General medicine',
        description: 'Medical evaluations, clinical guidance, and follow-up for adults and families.',
        icon: 'stethoscope',
      },
      {
        id: 'preventive',
        title: 'Preventive medicine',
        description: 'Checkups, risk-factor review, and recommendations to protect health early.',
        icon: 'shield',
      },
      {
        id: 'chronic',
        title: 'Chronic condition care',
        description: 'Follow-up for blood pressure, diabetes, cardiovascular health, and common conditions.',
        icon: 'heart',
      },
      {
        id: 'family',
        title: 'Family medicine',
        description: 'Close care for everyday health needs and continuity of care.',
        icon: 'leaf',
      },
      {
        id: 'follow-up',
        title: 'Clinical follow-up',
        description: 'Review of results, medications, medical history, and next steps.',
        icon: 'chat',
      },
      {
        id: 'coordination',
        title: 'Care coordination',
        description: 'Support with labs, referrals, and guidance based on the medical evaluation.',
        icon: 'lab',
      },
    ],
    why: {
      title: 'Why patients trust Dr. Frontera',
      points: [
        {
          title: 'Real listening',
          description: 'Visits with clear explanation, respectful care, and attention to each patient’s story.',
        },
        {
          title: 'Broad experience',
          description: 'Years of work in hospitals, emergency rooms, and private practice in southwest Puerto Rico.',
        },
        {
          title: 'Community roots',
          description: 'A Guánica medical office dedicated to prevention, family care, and continuity.',
        },
      ],
    },
    officePanel: {
      title: 'Office information',
      callLabel: 'Call now',
    },
    footer: {
      contactLabel: 'Contact',
      hoursLabel: 'Hours',
      rights: 'All rights reserved.',
    },
    testimonials: {
      title: 'A doctor trusted by his community',
      note: 'Representative messages of the patient experience the office aims to provide.',
      items: [
        {
          quote: '“Dr. Frontera explains things calmly and treats patients with great respect.”',
          name: 'Guánica patient',
        },
        {
          quote: '“You can feel the experience and commitment to family health.”',
          name: 'Patient family',
        },
        {
          quote: '“Accessible, human, and very professional.”',
          name: 'South-area patient',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Where is the office located?',
          answer: 'The office is located at 32-42 C. 25 de Julio, Guánica, PR 00653.',
        },
        {
          question: 'What are the office hours?',
          answer: 'Monday through Thursday from 7:00 a.m. to 4:00 p.m., and Friday from 7:00 a.m. to 4:00 p.m.',
        },
        {
          question: 'How can I coordinate a visit?',
          answer: 'Call (787) 821-4417 for guidance and availability.',
        },
      ],
    },
    about: {
      title: 'About the doctor',
      name: 'Dr. Nestor R. Frontera Tacoronte',
      specialty: 'General practitioner · Preventive and family medicine',
      headshotAlt: 'Professional portrait of Dr. Nestor R. Frontera Tacoronte',
      sections: {
        credentials: 'Education and credentials',
        values: 'How he cares',
        timeline: 'Professional path',
      },
      intro:
        'Dr. Nestor R. Frontera Tacoronte is the general practitioner at MDCSP Nestor Frontera Tacoronte in Guánica, Puerto Rico. His practice brings together hospital experience, prevention, and a close relationship with every patient.',
      bio: [
        'He studied at Domingo Aponte Collazo High School in Lares and completed a Bachelor’s degree in Biology at Pontificia Universidad Católica de Puerto Rico in Ponce.',
        'From 1994 to 1998, he completed his Doctor of Medicine at Universidad Autónoma de Guadalajara. He also has training in homeopathic medicine.',
        'His experience includes a medicine rotation at Hospital Alejandro Otero López in Manatí and clinical work at hospitals including Castañer, San Lucas I, San Lucas II, and Pavía Yauco.',
        'Since 2010, he has maintained his Preventive and Family Medicine Office in Guánica, serving the community with general medical care and ongoing follow-up.',
      ],
      education: [
        'Domingo Aponte Collazo High School, Lares',
        'Pontificia Universidad Católica de Puerto Rico, Ponce · Bachelor’s degree in Biology',
        'Universidad Autónoma de Guadalajara · Doctor of Medicine, 1994-1998',
        'Training in homeopathic medicine',
      ],
      values: [
        { title: 'Closeness', description: 'Human, direct, and respectful care for every patient.' },
        { title: 'Prevention', description: 'Care focused on identifying risks and protecting health early.' },
        { title: 'Continuity', description: 'Responsible follow-up, education, and coordination of care when needed.' },
      ],
      timeline: [
        { year: '1994-1998', detail: 'Doctor of Medicine, Universidad Autónoma de Guadalajara.' },
        { year: '2002-2005', detail: 'Hospital Castañer.' },
        { year: '2003-2005', detail: 'Hospital San Lucas I.' },
        { year: '2004-2007', detail: 'Hospital San Lucas II.' },
        { year: '2003-2012', detail: 'Hospital Pavía Yauco.' },
        { year: '2005-2012', detail: 'Assistant director of the emergency room in Yauco.' },
        { year: '2010-present', detail: 'Preventive and Family Medicine Office in Guánica.' },
      ],
    },
    servicesPage: {
      title: 'Medical services',
      subtitle: 'General, preventive, and family care for patients in Guánica and nearby towns.',
      disclaimer:
        'Services depend on the clinical evaluation. For medical emergencies, call 911 or go to the nearest emergency room.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Coordinate your visit with MDCSP Nestor Frontera Tacoronte in Guánica.',
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
        disclaimer: 'Do not send urgent medical issues or private health data through this form. For appointments, please call the office.',
      },
      mapTitle: 'Location in Guánica',
      mapNote: '32-42 C. 25 de Julio, Guánica, PR 00653',
    },
    cta: {
      title: 'Need general medical guidance?',
      subtitle: 'Call MDCSP Nestor Frontera Tacoronte in Guánica and coordinate your visit.',
      button: 'Call (787) 821-4417',
    },
    seo: {
      siteName: 'MDCSP Nestor Frontera Tacoronte',
      pages: {
        home: {
          title: 'MDCSP Nestor Frontera Tacoronte · General practitioner in Guánica',
          description:
            'Medical office of Dr. Nestor R. Frontera Tacoronte in Guánica, Puerto Rico. General, preventive, and family medicine.',
        },
        about: {
          title: 'Dr. Nestor R. Frontera Tacoronte · Medical background',
          description: 'Learn about the education, hospital experience, and medical practice of Dr. Nestor R. Frontera Tacoronte.',
        },
        services: {
          title: 'Medical services · MDCSP Nestor Frontera Tacoronte',
          description: 'General medicine, preventive care, family medicine, clinical follow-up, and care coordination in Guánica.',
        },
        contact: {
          title: 'Contact · MDCSP Nestor Frontera Tacoronte in Guánica',
          description: 'Address, phone number, and hours for Dr. Nestor Frontera’s medical office in Guánica.',
        },
      },
      openGraph: {
        title: 'MDCSP Nestor Frontera Tacoronte',
        description: 'General, preventive, and family medicine with Dr. Nestor R. Frontera Tacoronte in Guánica.',
      },
    },
  },
} as const;
