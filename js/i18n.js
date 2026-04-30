(() => {
  const translations = {
    pt: {
      meta: {
        title: 'Geanny Rodrigues | Desenvolvedora Full-Stack',
        description: 'Portfólio de Geanny Rodrigues — Desenvolvedora Full-Stack com experiência em Java, Spring Boot e React.'
      },
      cv: { url: 'docs/CurriculumGeanny.pdf' },
      nav: {
        home: 'Home',
        about: 'Sobre',
        experience: 'Experiência',
        education: 'Formação',
        languages: 'Idiomas',
        skills: 'Skills',
        projects: 'Projetos',
        certificates: 'Certificados',
        contact: 'Contato'
      },
      hero: {
        role: 'Desenvolvedora Full-Stack',
        meta: 'Java · Spring Boot · React · UX',
        cta: { cv: 'Download CV', contact: 'Entre em contato' },
        status: 'Disponível para oportunidades'
      },
      about: {
        tag: 'Sobre mim',
        title: 'Sobre',
        p1: 'Desenvolvedora Full-Stack com formação em <strong>Ciência da Computação</strong> e experiência em <strong>Java, Spring Boot e React</strong>, atuando no desenvolvimento e manutenção de <strong>ERP industrial</strong> na Nomus. Histórico em análise e correção de bugs, otimização de performance e implementação de funcionalidades orientada por métricas.',
        p2: 'Tenho noções práticas de <strong>UX</strong> (Figma, wireframes, acessibilidade) e foco em boas práticas, código organizado e melhoria contínua. Busco contribuir com entregas de qualidade e evoluir como profissional.',
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
        role1: 'Desenvolvedora Full-Stack Júnior',
        period1: 'Set 2024 — Presente',
        desc1: 'Desenvolvimento e manutenção de funcionalidades em ERP industrial (Java 8/17, Spring Boot, React), com foco em usabilidade, performance e estabilidade. Análise e correção de bugs críticos, implementação de novas funcionalidades orientada por métricas, code reviews com Git e SVN, e criação de wireframes no Figma para validação de UX antes da implementação.',
        role2: 'Estagiária em Desenvolvimento Java',
        period2: 'Jun 2023 — Set 2024',
        desc2: 'Auxílio no desenvolvimento e análise de sistemas: implementação de melhorias, correção de bugs e desenvolvimento de APIs REST com Java 8. Trabalho com JavaScript e jQuery no front-end para suporte a demandas internas.',
        role3: 'Analista de Atendimento',
        desc3: 'Resolução de demandas via chat e voz utilizando Zendesk, Cisco e Avaya, priorizando por SLA e impacto no negócio. Tradução de problemas de usuários em tickets acionáveis com passos de reprodução, logs e evidências, acelerando correção de bugs junto ao time de produto/dev.',
        tagService: 'Atendimento',
        tagAutomation: 'Automação'
      },
      education: {
        tag: 'Formação',
        title: 'Formação acadêmica',
        cs: {
          title: 'Bacharelado em Ciência da Computação',
          detail: 'Com ênfase em Full Stack Dev',
          period: '2021 — 2025 (Conclusão em Out/2025)'
        },
        tech: { title: 'Técnico em Administração' }
      },
      languages: {
        tag: 'Idiomas',
        title: 'Idiomas',
        pt: { name: 'Português', level: 'Nativo' },
        en: { name: 'Inglês', level: 'Avançado', detail: 'Leitura/escrita: Avançado · Conversação: Intermediário' }
      },
      skills: {
        tag: 'Skills',
        title: 'Tecnologias e ferramentas',
        frontend: 'Front-End',
        backend: 'Back-End & Banco',
        tools: 'DevOps & APIs',
        design: 'UX/UI',
        wireframes: 'Wireframes',
        prototyping: 'Prototipação',
        accessibility: 'Acessibilidade'
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
        p2: { desc: 'Aplicativo de lista de tarefas com design limpo e funcional.' },
        p3: { title: 'Calculadora de IMC', desc: 'Calculadora de Índice de Massa Corporal com interface intuitiva.' },
        p4: { title: 'Portfólio Digital V2', desc: 'Segunda versão do portfólio pessoal com design aprimorado.' },
        p5: { title: 'Portfólio Digital V1', desc: 'Primeira versão do portfólio pessoal.' }
      },
      certificates: {
        tag: 'Certificados',
        title: 'Certificações e cursos',
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
        title: 'Geanny Rodrigues | Full-Stack Developer',
        description: 'Geanny Rodrigues’ portfolio — Full-Stack Developer with experience in Java, Spring Boot and React.'
      },
      cv: { url: 'docs/GeannyRodriguesEN.pdf' },
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        languages: 'Languages',
        skills: 'Skills',
        projects: 'Projects',
        certificates: 'Certificates',
        contact: 'Contact'
      },
      hero: {
        role: 'Full-Stack Developer',
        meta: 'Java · Spring Boot · React · UX',
        cta: { cv: 'Download CV', contact: 'Get in touch' },
        status: 'Open to opportunities'
      },
      about: {
        tag: 'About me',
        title: 'About',
        p1: 'Full-Stack Developer with a <strong>Computer Science</strong> degree and hands-on experience with <strong>Java, Spring Boot and React</strong>, building and maintaining an <strong>industrial ERP</strong> at Nomus. Track record in bug analysis and resolution, performance optimization, and feature implementation driven by metrics.',
        p2: 'Practical knowledge of <strong>UX</strong> (Figma, wireframes, accessibility) and a focus on clean code, automated testing, and continuous improvement. Committed to delivering quality and growing as a professional.',
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
        role1: 'Junior Full-Stack Developer',
        period1: 'Sep 2024 — Present',
        desc1: 'Develop and maintain features for an industrial ERP system (Java 8/17, Spring Boot, React), with focus on usability, performance and stability. Analyze and resolve critical bugs, implement new features driven by metrics, participate in code reviews with Git and SVN, and create Figma wireframes for UX validation prior to implementation.',
        role2: 'Java Development Intern',
        period2: 'Jun 2023 — Sep 2024',
        desc2: 'Supported systems development and analysis: implementing improvements, fixing bugs and building REST APIs with Java 8. Worked with JavaScript and jQuery on the front-end to support internal demands.',
        role3: 'Support Analyst',
        desc3: 'Resolved customer inquiries via chat and voice using Zendesk, Cisco, and Avaya, prioritizing by SLA and business impact. Translated user-reported issues into actionable tickets with reproduction steps, logs and evidence, accelerating bug resolution with the product and development teams.',
        tagService: 'Customer Service',
        tagAutomation: 'Automation'
      },
      education: {
        tag: 'Education',
        title: 'Academic background',
        cs: {
          title: 'Bachelor of Computer Science',
          detail: 'With emphasis on Full Stack Dev',
          period: '2021 — 2025 (Expected: Oct 2025)'
        },
        tech: { title: 'Business Administration Technician' }
      },
      languages: {
        tag: 'Languages',
        title: 'Languages',
        pt: { name: 'Portuguese', level: 'Native' },
        en: { name: 'English', level: 'Advanced', detail: 'Reading/Writing: Advanced · Speaking: Intermediate' }
      },
      skills: {
        tag: 'Skills',
        title: 'Technologies and tools',
        frontend: 'Front-End',
        backend: 'Back-End & Databases',
        tools: 'DevOps & APIs',
        design: 'UX/UI',
        wireframes: 'Wireframes',
        prototyping: 'Prototyping',
        accessibility: 'Accessibility'
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
        p2: { desc: 'Task list app with clean, functional design.' },
        p3: { title: 'BMI Calculator', desc: 'Body Mass Index calculator with intuitive interface.' },
        p4: { title: 'Digital Portfolio V2', desc: 'Second version of the personal portfolio with refined design.' },
        p5: { title: 'Digital Portfolio V1', desc: 'First version of the personal portfolio.' }
      },
      certificates: {
        tag: 'Certificates',
        title: 'Certifications and courses',
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
        title: 'Geanny Rodrigues | Desarrolladora Full-Stack',
        description: 'Portafolio de Geanny Rodrigues — Desarrolladora Full-Stack con experiencia en Java, Spring Boot y React.'
      },
      cv: { url: 'docs/CurriculumGeanny.pdf' },
      nav: {
        home: 'Inicio',
        about: 'Sobre mí',
        experience: 'Experiencia',
        education: 'Formación',
        languages: 'Idiomas',
        skills: 'Skills',
        projects: 'Proyectos',
        certificates: 'Certificados',
        contact: 'Contacto'
      },
      hero: {
        role: 'Desarrolladora Full-Stack',
        meta: 'Java · Spring Boot · React · UX',
        cta: { cv: 'Descargar CV', contact: 'Contáctame' },
        status: 'Disponible para oportunidades'
      },
      about: {
        tag: 'Sobre mí',
        title: 'Sobre mí',
        p1: 'Desarrolladora Full-Stack con formación en <strong>Ciencias de la Computación</strong> y experiencia en <strong>Java, Spring Boot y React</strong>, desarrollando y manteniendo un <strong>ERP industrial</strong> en Nomus. Trayectoria en análisis y corrección de bugs, optimización de rendimiento e implementación de funcionalidades orientada a métricas.',
        p2: 'Con conocimientos prácticos de <strong>UX</strong> (Figma, wireframes, accesibilidad) y enfoque en buenas prácticas, código limpio y mejora continua. Comprometida con entregas de calidad y con crecer como profesional.',
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
        role1: 'Desarrolladora Full-Stack Júnior',
        period1: 'Sep 2024 — Presente',
        desc1: 'Desarrollo y mantenimiento de funcionalidades en ERP industrial (Java 8/17, Spring Boot, React), con foco en usabilidad, rendimiento y estabilidad. Análisis y corrección de bugs críticos, implementación de nuevas funcionalidades orientada a métricas, code reviews con Git y SVN, y creación de wireframes en Figma para validación de UX antes de la implementación.',
        role2: 'Pasante de Desarrollo Java',
        period2: 'Jun 2023 — Sep 2024',
        desc2: 'Apoyo en el desarrollo y análisis de sistemas: implementación de mejoras, corrección de bugs y desarrollo de APIs REST con Java 8. Trabajo con JavaScript y jQuery en el front-end para soporte a demandas internas.',
        role3: 'Analista de Atención',
        desc3: 'Resolución de demandas vía chat y voz usando Zendesk, Cisco y Avaya, priorizando por SLA e impacto en el negocio. Traducción de problemas de usuarios en tickets accionables con pasos de reproducción, logs y evidencias, acelerando la corrección de bugs junto al equipo de producto/dev.',
        tagService: 'Atención',
        tagAutomation: 'Automatización'
      },
      education: {
        tag: 'Formación',
        title: 'Formación académica',
        cs: {
          title: 'Licenciatura en Ciencias de la Computación',
          detail: 'Con énfasis en Full Stack Dev',
          period: '2021 — 2025 (Conclusión: Oct/2025)'
        },
        tech: { title: 'Técnico en Administración' }
      },
      languages: {
        tag: 'Idiomas',
        title: 'Idiomas',
        pt: { name: 'Portugués', level: 'Nativo' },
        en: { name: 'Inglés', level: 'Avanzado', detail: 'Lectura/escritura: Avanzado · Conversación: Intermedio' }
      },
      skills: {
        tag: 'Skills',
        title: 'Tecnologías y herramientas',
        frontend: 'Front-End',
        backend: 'Back-End y Bases de Datos',
        tools: 'DevOps y APIs',
        design: 'UX/UI',
        wireframes: 'Wireframes',
        prototyping: 'Prototipado',
        accessibility: 'Accesibilidad'
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
        p2: { desc: 'Aplicación de lista de tareas con diseño limpio y funcional.' },
        p3: { title: 'Calculadora de IMC', desc: 'Calculadora de Índice de Masa Corporal con interfaz intuitiva.' },
        p4: { title: 'Portafolio Digital V2', desc: 'Segunda versión del portafolio personal con diseño mejorado.' },
        p5: { title: 'Portafolio Digital V1', desc: 'Primera versión del portafolio personal.' }
      },
      certificates: {
        tag: 'Certificados',
        title: 'Certificaciones y cursos',
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
