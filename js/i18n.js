(() => {
  const translations = {
    pt: {
      meta: {
        title: 'Geanny Rodrigues | Desenvolvedora Full Stack Java',
        description: 'Portfólio de Geanny Rodrigues — Desenvolvedora Full Stack Java com experiência em ERP, integrações e sistemas financeiros e fiscais.'
      },
      cv: { url: 'docs/CurriculumGeanny.pdf' },
      nav: {
        home: 'Home',
        about: 'Sobre',
        experience: 'Experiência',
        education: 'Formação',
        skills: 'Competências',
        projects: 'Projetos',
        contact: 'Contato'
      },
      hero: {
        role: 'Desenvolvedora Full Stack Java',
        meta: 'ERP · Integrações · Sistemas Financeiros e Fiscais',
        cta: { cv: 'Download CV', contact: 'Entre em contato' },
        status: 'Disponível para oportunidades'
      },
      about: {
        tag: 'Sobre mim',
        title: 'Sobre',
        p1: 'Desenvolvedora de Software Full Stack com formação em Ciência da Computação e pós-graduação em Desenvolvimento Full Stack. Experiência no desenvolvimento e manutenção de ERP industrial utilizando Java, JavaScript, React, SQL e MySQL, com atuação em módulos fiscais, financeiros e integrações bancárias.',
        p2: 'Vivência na investigação de problemas complexos, análise de regras de negócio, correção de falhas em sistemas legados e implementação de funcionalidades de ponta a ponta. Experiência com Hibernate, APIs, processamento de arquivos bancários, Git, SVN e criação de protótipos no Figma.',
        competencies: {
          title: 'Competências',
          flex: 'Flexibilidade e adaptação',
          eq: 'Inteligência emocional',
          problem: 'Resolução de problemas',
          critical: 'Pensamento crítico',
          communication: 'Boa comunicação'
        }
      },
      experience: {
        tag: 'Experiência',
        title: 'Trajetória profissional',
        companyNomus: 'Nomus · Rio de Janeiro, RJ (Remoto)',
        roleAuto: 'Desenvolvedora Front-end & Automações',
        companyAuto: 'AutoCraft · Remoto',
        periodAuto: 'Ago 2025 — Presente',
        descAuto: 'Atuação paralela na AutoCraft com foco em <strong>Front-end e automações</strong>. Colaboração na construção de funcionalidades de UI/UX, apps desktop e extensões de produtos como <strong>EZ Native</strong> (deploy automatizado para App Store/Play Store), <strong>Viddz</strong> (video messaging com CTAs interativas), <strong>CREDistributors</strong> (e-commerce) e <strong>Leap Labour</strong> (transformação digital com FlutterFlow + n8n).',
        role1: 'Desenvolvedora Full Stack Júnior',
        period1: 'Set 2024 — Presente',
        desc1: 'Desenvolvimento e manutenção de funcionalidades de ponta a ponta em <strong>ERP industrial</strong>, utilizando Java, JavaScript, JSP, React, Hibernate e MySQL. Atuação em módulos financeiros e fiscais, incluindo adequações relacionadas a IBS/CBS, e em integrações bancárias com processamento de arquivos. Investigação de bugs por meio da análise de código, logs, SQL e arquivos de integração, além da manutenção do sistema legado. Uso de Git e SVN no controle de versão e Figma na criação de protótipos.',
        role2: 'Estagiária de Desenvolvimento',
        period2: 'Jun 2023 — Set 2024',
        desc2: 'Auxílio no desenvolvimento e análise de sistemas: implementação de melhorias, correção de bugs e desenvolvimento de APIs REST com Java 8. Trabalho com JavaScript e jQuery no front-end para suporte a demandas internas.',
        role3: 'Analista de Atendimento',
        desc3: 'Resolução de demandas via chat e voz utilizando Zendesk, Cisco e Avaya, priorizando por SLA e impacto no negócio. Tradução de problemas de usuários em tickets acionáveis com passos de reprodução, logs e evidências, acelerando correção de bugs junto ao time de produto/dev.',
        tagService: 'Atendimento',
        tagAutomation: 'Automação'
      },
      education: {
        tag: 'Formação',
        title: 'Formação & Certificações',
        subgroupAcademic: 'Acadêmica',
        subgroupCertificates: 'Certificações e cursos',
        postgrad: {
          title: 'Pós-Graduação em Desenvolvimento Full Stack',
          detail: 'Carga horária: 360 horas',
          period: 'Nov/2025 — Jul/2026'
        },
        cs: {
          title: 'Bacharelado em Ciência da Computação',
          detail: 'Com ênfase em Full Stack Dev',
          period: '2021 — 2025 · Concluído em 2025'
        },
        tech: { title: 'Técnico em Administração' }
      },
      skills: {
        tag: 'Competências',
        title: 'Competências & Idiomas',
        backend: 'Back-end',
        frontend: 'Front-end',
        database: 'Banco de dados',
        tools: 'Ferramentas',
        integrations: 'Integrações',
        businessDomains: 'Domínios de negócio',
        bankIntegrations: 'Integrações bancárias',
        bankFiles: 'Arquivos bancários',
        industrialErp: 'ERP industrial',
        financialModules: 'Módulos financeiros',
        taxModules: 'Módulos fiscais',
        businessRules: 'Regras de negócio',
        legacySystems: 'Sistemas legados',
        wireframes: 'Wireframes',
        prototyping: 'Prototipação',
        accessibility: 'Acessibilidade',
        languages: 'Idiomas',
        languagePt: 'Português — Nativo',
        languageEn: 'Inglês — Avançado (Leitura/escrita) · Intermediário (Conversação)'
      },
      projects: {
        tag: 'Projetos',
        title: 'Trabalhos selecionados',
        code: 'Código',
        demo: 'Demo',
        clientWork: 'Trabalhos com clientes',
        personal: 'Projetos pessoais',
        viddz: { desc: 'Ferramenta de video messaging com CTAs clicáveis dentro do player. Colaboração em funcionalidades de UI/UX na AutoCraft.' },
        eznative: { desc: 'Plataforma que automatiza o caminho do repositório à App Store / Play Store. Contribuição com extensões e melhorias de UX na AutoCraft.' },
        p1: { title: 'GitFinder', desc: 'Buscador de perfil do GitHub com repositórios recentes e suporte a 3 idiomas. Vanilla JS, sem build.' },
        p2: { desc: 'Gerenciador de tarefas com filtros, contadores em tempo real e suporte a 3 idiomas. React + Tailwind.' },
        p3: { title: 'Calculadora de IMC', desc: 'Calculadora de Índice de Massa Corporal com interface intuitiva.' },
        p4: { title: 'Portfólio Digital V2', desc: 'Segunda versão do portfólio pessoal com design aprimorado.' },
        p5: { title: 'Portfólio Digital V1', desc: 'Primeira versão do portfólio pessoal.' }
      },
      certificates: {
        verify: 'Verificar certificado',
        c1: { title: 'Web Design Responsivo' },
        c2: { title: 'Montagem e Manutenção de Computadores' },
        c3: { title: 'JavaScript e HTML' },
        c4: { title: 'Segurança da Informação' }
      },
      contact: {
        tag: 'Contato',
        title: 'Vamos trabalhar juntos?',
        subtitle: 'Estou disponível para novas oportunidades. Se você procura uma desenvolvedora comprometida e atenta aos detalhes, entre em contato.',
        email: 'E-mail',
        location: 'Recife, Pernambuco — Brasil'
      },
      footer: { copy: '© {year} Geanny Rodrigues. Todos os direitos reservados.' },
      a11y: { toggleMenu: 'Abrir menu', backToTop: 'Voltar ao topo', toggleLang: 'Alterar idioma' }
    },

    en: {
      meta: {
        title: 'Geanny Rodrigues | Java Full-Stack Developer',
        description: 'Geanny Rodrigues’ portfolio — Java Full-Stack Developer experienced in ERP, integrations, and financial and tax systems.'
      },
      cv: { url: 'docs/GeannyRodriguesEN.pdf' },
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        role: 'Java Full-Stack Developer',
        meta: 'ERP · Integrations · Financial and Tax Systems',
        cta: { cv: 'Download CV', contact: 'Get in touch' },
        status: 'Open to opportunities'
      },
      about: {
        tag: 'About me',
        title: 'About',
        p1: 'Full Stack Software Developer with a degree in Computer Science and a postgraduate degree in Full Stack Development. Experience developing and maintaining industrial ERP systems using Java, JavaScript, React, SQL and MySQL, working with tax and financial modules and banking integrations.',
        p2: 'Experienced in investigating complex problems, analyzing business rules, fixing issues in legacy systems and implementing end-to-end features. Experience with Hibernate, APIs, bank file processing, Git, SVN and creating prototypes in Figma.',
        competencies: {
          title: 'Soft Skills',
          flex: 'Flexibility and adaptability',
          eq: 'Emotional intelligence',
          problem: 'Problem solving',
          critical: 'Critical thinking',
          communication: 'Strong communication'
        }
      },
      experience: {
        tag: 'Experience',
        title: 'Professional journey',
        companyNomus: 'Nomus · Rio de Janeiro, Brazil (Remote)',
        roleAuto: 'Front-end Developer & Automation',
        companyAuto: 'AutoCraft · Remote',
        periodAuto: 'Aug 2025 — Present',
        descAuto: 'Parallel role at AutoCraft focused on <strong>Front-end and automation</strong>. Collaboration on UI/UX features, desktop apps and product extensions across <strong>EZ Native</strong> (automated deployment to App Store/Play Store), <strong>Viddz</strong> (video messaging with interactive CTAs), <strong>CREDistributors</strong> (e-commerce) and <strong>Leap Labour</strong> (digital transformation with FlutterFlow + n8n).',
        role1: 'Junior Full Stack Developer',
        period1: 'Sep 2024 — Present',
        desc1: 'End-to-end feature development and maintenance in an <strong>industrial ERP</strong> using Java, JavaScript, JSP, React, Hibernate and MySQL. Work on financial and tax modules, including IBS/CBS-related adaptations, and banking integrations involving file processing. Bug investigation through code, log, SQL and integration-file analysis, as well as legacy-system maintenance. Git and SVN for version control and Figma for prototyping.',
        role2: 'Development Intern',
        period2: 'Jun 2023 — Sep 2024',
        desc2: 'Supported systems development and analysis: implementing improvements, fixing bugs and building REST APIs with Java 8. Worked with JavaScript and jQuery on the front-end to support internal demands.',
        role3: 'Support Analyst',
        desc3: 'Resolved customer inquiries via chat and voice using Zendesk, Cisco, and Avaya, prioritizing by SLA and business impact. Translated user-reported issues into actionable tickets with reproduction steps, logs and evidence, accelerating bug resolution with the product and development teams.',
        tagService: 'Customer Service',
        tagAutomation: 'Automation'
      },
      education: {
        tag: 'Education',
        title: 'Education & Certifications',
        subgroupAcademic: 'Academic',
        subgroupCertificates: 'Certifications and courses',
        postgrad: {
          title: 'Postgraduate Degree in Full Stack Development',
          detail: 'Workload: 360 hours',
          period: 'Nov 2025 — Jul 2026'
        },
        cs: {
          title: 'Bachelor of Computer Science',
          detail: 'With emphasis on Full Stack Dev',
          period: '2021 — 2025 · Completed in 2025'
        },
        tech: { title: 'Business Administration Technician' }
      },
      skills: {
        tag: 'Skills',
        title: 'Skills & Languages',
        backend: 'Back-end',
        frontend: 'Front-end',
        database: 'Databases',
        tools: 'Tools',
        integrations: 'Integrations',
        businessDomains: 'Business domains',
        bankIntegrations: 'Banking integrations',
        bankFiles: 'Bank files',
        industrialErp: 'Industrial ERP',
        financialModules: 'Financial modules',
        taxModules: 'Tax modules',
        businessRules: 'Business rules',
        legacySystems: 'Legacy systems',
        wireframes: 'Wireframes',
        prototyping: 'Prototyping',
        accessibility: 'Accessibility',
        languages: 'Languages',
        languagePt: 'Portuguese — Native',
        languageEn: 'English — Advanced (Reading/Writing) · Intermediate (Speaking)'
      },
      projects: {
        tag: 'Projects',
        title: 'Selected work',
        code: 'Code',
        demo: 'Demo',
        clientWork: 'Client work',
        personal: 'Personal projects',
        viddz: { desc: 'Video messaging tool with clickable CTAs inside the player. Collaboration on UI/UX features at AutoCraft.' },
        eznative: { desc: 'Platform that automates the path from repo to App Store / Play Store. Contributed extensions and UX improvements at AutoCraft.' },
        p1: { title: 'GitFinder', desc: 'GitHub profile finder with recent repositories and 3-language support. Vanilla JS, no build.' },
        p2: { desc: 'Task manager with filters, live counters and 3-language support. React + Tailwind.' },
        p3: { title: 'BMI Calculator', desc: 'Body Mass Index calculator with intuitive interface.' },
        p4: { title: 'Digital Portfolio V2', desc: 'Second version of the personal portfolio with refined design.' },
        p5: { title: 'Digital Portfolio V1', desc: 'First version of the personal portfolio.' }
      },
      certificates: {
        verify: 'Verify certificate',
        c1: { title: 'Responsive Web Design' },
        c2: { title: 'Computer Assembly and Maintenance' },
        c3: { title: 'JavaScript and HTML' },
        c4: { title: 'Information Security' }
      },
      contact: {
        tag: 'Contact',
        title: 'Let’s work together?',
        subtitle: 'I’m open to new opportunities. If you’re looking for a committed, detail-oriented developer, get in touch.',
        email: 'Email',
        location: 'Recife, Pernambuco — Brazil'
      },
      footer: { copy: '© {year} Geanny Rodrigues. All rights reserved.' },
      a11y: { toggleMenu: 'Open menu', backToTop: 'Back to top', toggleLang: 'Change language' }
    },

    es: {
      meta: {
        title: 'Geanny Rodrigues | Desarrolladora Full Stack Java',
        description: 'Portafolio de Geanny Rodrigues — Desarrolladora Full Stack Java con experiencia en ERP, integraciones y sistemas financieros y fiscales.'
      },
      cv: { url: 'docs/CurriculumGeanny.pdf' },
      nav: {
        home: 'Inicio',
        about: 'Sobre mí',
        experience: 'Experiencia',
        education: 'Formación',
        skills: 'Competencias',
        projects: 'Proyectos',
        contact: 'Contacto'
      },
      hero: {
        role: 'Desarrolladora Full Stack Java',
        meta: 'ERP · Integraciones · Sistemas Financieros y Fiscales',
        cta: { cv: 'Descargar CV', contact: 'Contáctame' },
        status: 'Disponible para oportunidades'
      },
      about: {
        tag: 'Sobre mí',
        title: 'Sobre mí',
        p1: 'Desarrolladora de Software Full Stack con formación en Ciencias de la Computación y posgrado en Desarrollo Full Stack. Experiencia en el desarrollo y mantenimiento de ERP industrial utilizando Java, JavaScript, React, SQL y MySQL, con actuación en módulos fiscales, financieros e integraciones bancarias.',
        p2: 'Experiencia en la investigación de problemas complejos, análisis de reglas de negocio, corrección de fallas en sistemas legados e implementación de funcionalidades de punta a punta. Experiencia con Hibernate, APIs, procesamiento de archivos bancarios, Git, SVN y creación de prototipos en Figma.',
        competencies: {
          title: 'Competencias',
          flex: 'Flexibilidad y adaptación',
          eq: 'Inteligencia emocional',
          problem: 'Resolución de problemas',
          critical: 'Pensamiento crítico',
          communication: 'Buena comunicación'
        }
      },
      experience: {
        tag: 'Experiencia',
        title: 'Trayectoria profesional',
        companyNomus: 'Nomus · Río de Janeiro, Brasil (Remoto)',
        roleAuto: 'Desarrolladora Front-end & Automatizaciones',
        companyAuto: 'AutoCraft · Remoto',
        periodAuto: 'Ago 2025 — Presente',
        descAuto: 'Rol paralelo en AutoCraft con foco en <strong>Front-end y automatizaciones</strong>. Colaboración en funcionalidades de UI/UX, apps de escritorio y extensiones de productos como <strong>EZ Native</strong> (despliegue automatizado a App Store/Play Store), <strong>Viddz</strong> (video messaging con CTAs interactivas), <strong>CREDistributors</strong> (e-commerce) y <strong>Leap Labour</strong> (transformación digital con FlutterFlow + n8n).',
        role1: 'Desarrolladora Full Stack Júnior',
        period1: 'Sep 2024 — Presente',
        desc1: 'Desarrollo y mantenimiento de funcionalidades de punta a punta en un <strong>ERP industrial</strong>, utilizando Java, JavaScript, JSP, React, Hibernate y MySQL. Actuación en módulos financieros y fiscales, incluidas adecuaciones relacionadas con IBS/CBS, y en integraciones bancarias con procesamiento de archivos. Investigación de bugs mediante el análisis de código, logs, SQL y archivos de integración, además del mantenimiento del sistema legado. Uso de Git y SVN para el control de versiones y Figma para la creación de prototipos.',
        role2: 'Pasante de Desarrollo',
        period2: 'Jun 2023 — Sep 2024',
        desc2: 'Apoyo en el desarrollo y análisis de sistemas: implementación de mejoras, corrección de bugs y desarrollo de APIs REST con Java 8. Trabajo con JavaScript y jQuery en el front-end para soporte a demandas internas.',
        role3: 'Analista de Atención',
        desc3: 'Resolución de demandas vía chat y voz usando Zendesk, Cisco y Avaya, priorizando por SLA e impacto en el negocio. Traducción de problemas de usuarios en tickets accionables con pasos de reproducción, logs y evidencias, acelerando la corrección de bugs junto al equipo de producto/dev.',
        tagService: 'Atención',
        tagAutomation: 'Automatización'
      },
      education: {
        tag: 'Formación',
        title: 'Formación & Certificaciones',
        subgroupAcademic: 'Académica',
        subgroupCertificates: 'Certificaciones y cursos',
        postgrad: {
          title: 'Posgrado en Desarrollo Full Stack',
          detail: 'Carga horaria: 360 horas',
          period: 'Nov/2025 — Jul/2026'
        },
        cs: {
          title: 'Licenciatura en Ciencias de la Computación',
          detail: 'Con énfasis en Full Stack Dev',
          period: '2021 — 2025 · Concluido en 2025'
        },
        tech: { title: 'Técnico en Administración' }
      },
      skills: {
        tag: 'Competencias',
        title: 'Competencias & Idiomas',
        backend: 'Back-end',
        frontend: 'Front-end',
        database: 'Bases de datos',
        tools: 'Herramientas',
        integrations: 'Integraciones',
        businessDomains: 'Dominios de negocio',
        bankIntegrations: 'Integraciones bancarias',
        bankFiles: 'Archivos bancarios',
        industrialErp: 'ERP industrial',
        financialModules: 'Módulos financieros',
        taxModules: 'Módulos fiscales',
        businessRules: 'Reglas de negocio',
        legacySystems: 'Sistemas legados',
        wireframes: 'Wireframes',
        prototyping: 'Prototipado',
        accessibility: 'Accesibilidad',
        languages: 'Idiomas',
        languagePt: 'Portugués — Nativo',
        languageEn: 'Inglés — Avanzado (Lectura/escritura) · Intermedio (Conversación)'
      },
      projects: {
        tag: 'Proyectos',
        title: 'Trabajos seleccionados',
        code: 'Código',
        demo: 'Demo',
        clientWork: 'Trabajos con clientes',
        personal: 'Proyectos personales',
        viddz: { desc: 'Herramienta de video messaging con CTAs clicables dentro del player. Colaboración en funcionalidades de UI/UX en AutoCraft.' },
        eznative: { desc: 'Plataforma que automatiza el camino del repositorio a la App Store / Play Store. Contribución con extensiones y mejoras de UX en AutoCraft.' },
        p1: { title: 'GitFinder', desc: 'Buscador de perfiles GitHub con repositorios recientes y soporte a 3 idiomas. Vanilla JS, sin build.' },
        p2: { desc: 'Gestor de tareas con filtros, contadores en tiempo real y soporte a 3 idiomas. React + Tailwind.' },
        p3: { title: 'Calculadora de IMC', desc: 'Calculadora de Índice de Masa Corporal con interfaz intuitiva.' },
        p4: { title: 'Portafolio Digital V2', desc: 'Segunda versión del portafolio personal con diseño mejorado.' },
        p5: { title: 'Portafolio Digital V1', desc: 'Primera versión del portafolio personal.' }
      },
      certificates: {
        verify: 'Verificar certificado',
        c1: { title: 'Diseño Web Responsive' },
        c2: { title: 'Ensamblaje y Mantenimiento de Computadoras' },
        c3: { title: 'JavaScript y HTML' },
        c4: { title: 'Seguridad de la Información' }
      },
      contact: {
        tag: 'Contacto',
        title: '¿Trabajamos juntos?',
        subtitle: 'Estoy disponible para nuevas oportunidades. Si buscas una desarrolladora comprometida y atenta a los detalles, contáctame.',
        email: 'Correo',
        location: 'Recife, Pernambuco — Brasil'
      },
      footer: { copy: '© {year} Geanny Rodrigues. Todos los derechos reservados.' },
      a11y: { toggleMenu: 'Abrir menú', backToTop: 'Volver arriba', toggleLang: 'Cambiar idioma' }
    }
  };

  const STORAGE_KEY = 'gr.lang';
  const HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' };

  const get = (obj, path) => path.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), obj);

  function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = HTML_LANG[lang] || lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = get(dict, el.dataset.i18n);
      if (typeof value === 'string') el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const value = get(dict, el.dataset.i18nHtml);
      if (typeof value === 'string') el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        const value = get(dict, key);
        if (typeof value === 'string') el.setAttribute(attr, value);
      });
    });

    if (dict.meta?.title) document.title = dict.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.meta?.description) metaDesc.setAttribute('content', dict.meta.description);

    const footerCopy = document.getElementById('footerCopy');
    if (footerCopy && dict.footer?.copy) {
      footerCopy.textContent = dict.footer.copy.replace('{year}', new Date().getFullYear());
    }

    const langCurrent = document.getElementById('langCurrent');
    if (langCurrent) langCurrent.textContent = lang.toUpperCase();

    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }

  function detectLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) return saved;
    } catch (_) {}
    const nav = (navigator.language || 'pt').slice(0, 2).toLowerCase();
    return translations[nav] ? nav : 'pt';
  }

  document.addEventListener('DOMContentLoaded', () => {
    const initial = detectLang();
    applyTranslations(initial);

    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');

    const closeMenu = () => {
      langMenu?.classList.remove('open');
      langBtn?.classList.remove('active');
      langBtn?.setAttribute('aria-expanded', 'false');
    };

    langBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langMenu.classList.toggle('open');
      langBtn.classList.toggle('active', isOpen);
      langBtn.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        applyTranslations(btn.dataset.lang);
        closeMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (!langBtn?.contains(e.target) && !langMenu?.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  });
})();
