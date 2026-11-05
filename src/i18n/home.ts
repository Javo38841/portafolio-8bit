// Contenido de la página de inicio en los 3 idiomas.
// TODO: el español es un borrador a partir de tus CVs; inglés y portugués son traducciones para revisar.
import type { Lang } from './ui';

type Job = { org: string; role: string; when: string; text: string };
type Project = { title: string; meta: string; text: string; tags: string[] };
type Workshop = { title: string; text: string; items: string[] };
type Item = { title: string; text: string };

export interface HomeContent {
  meta: { title: string; description: string };
  hero: {
    hello: string;
    tagline: string;
    lead: string;
    openLms: string;
    downloadCv: string;
    statsLabel: string;
    envs: string;
    keyB: string;
    keyA: string;
    strip: { kicker: string; text: string }[];
  };
  about: { kicker: string; title: string; paragraphs: string[]; serverCaption: string; photoNote: string };
  now: { kicker: string; title: string; lead: string; items: string[]; past: Job[] };
  projects: {
    kicker: string;
    title: string;
    featuredKicker: string;
    featuredTitle: string;
    featuredText: string;
    featuredCta: string;
    items: Project[];
  };
  teach: { kicker: string; title: string; lead: string; workshops: Workshop[]; universityTitle: string; university: Item[] };
  books: { kicker: string; title: string; lead: string; label: string };
  outside: {
    kicker: string;
    title: string;
    text: string;
    musicLabel: string;
    favoritesLabel: string;
  };
  contact: { kicker: string; title: string };
}

export const home: Record<Lang, HomeContent> = {
  es: {
    meta: {
      title: 'Javier Choque Flores — Desarrollador de Software',
      description:
        'Desarrollador de Software en Tarapacá, Chile. Construyo software con prácticas de equipo profesional y enseño a hacerlo.',
    },
    hero: {
      hello: 'Hola, soy Javier.',
      tagline: 'Construyo software como en una empresa — y enseño a hacerlo.',
      lead: 'Analista de Soporte TI y Software en Intermex. Fuera del trabajo monto mi propia infraestructura: un homelab con CI/CD y un LMS hecho desde cero con prácticas de equipo profesional.',
      openLms: '▶ Ver el caso LMS',
      downloadCv: 'Descargar CV',
      statsLabel: 'Estadísticas del proyecto LMS',
      envs: 'AMBIENTES.',
      keyB: 'Botón B: ir a contacto',
      keyA: 'Botón A: ver el caso LMS',
      strip: [
        { kicker: 'Hoy', text: 'Soporte TI y software · NestJS + Angular' },
        { kicker: 'Construyo', text: 'Homelab, CI/CD y un LMS propio' },
        { kicker: 'Enseño', text: 'Git, Java y talleres de programación' },
        { kicker: 'Aprendo', text: 'Terraform y AWS' },
      ],
    },
    about: {
      kicker: 'Sobre mí',
      title: 'Del norte a Concepción, y de vuelta',
      paragraphs: [
        'Vivo en Alto Hospicio, en la región de Tarapacá. Estudié Ingeniería en Informática en la Universidad Técnica Federico Santa María, en Concepción, y hoy trabajo en Iquique.',
        'Me mueven dos cosas: automatizar lo que se repite y enseñar lo que aprendo. Fui ayudante y monitor de inclusión en la universidad, postulé y ejecuté un fondo concursable para talleres de programación, y hoy diseño y enseño talleres de forma particular.',
        'Fuera del trabajo administro mi propio servidor: un homelab con Ubuntu Server, Docker y GitHub Actions, donde corre el proyecto del que más aprendí.',
      ],
      serverCaption: 'Mi servidor es un notebook',
      photoNote: 'Imagen referencial',
    },
    now: {
      kicker: 'Qué hago hoy',
      title: 'Analista de Soporte TI y Software',
      lead: 'Intermex S.A. · Iquique (ZOFRI) · desde julio de 2026',
      items: [
        'Desarrollo módulos de un sistema integral de gestión logística de vehículos: ubicación de la flota en un mapa y un control de llaves que registra en qué gaveta numerada (1 a 300) está la llave de cada vehículo. Es un MVP que ya usan clientes internos: bodegueros, jefes de logística y el área comercial, que solicita llaves para exhibición.',
        'Desarrollo y mantengo un sistema interno con NestJS y Angular, desplegado en la nube con GitFlow y CI/CD.',
        'Puse en producción una API que integra un ERP con el CRM de un proveedor externo.',
        'Hago análisis de causa raíz (RCA) de fallas en producción y gestiono incidencias con Kanban y Lean.',
      ],
      past: [
        {
          org: 'Municipalidad de Alto Hospicio',
          role: 'Desarrollador Full Stack (práctica profesional)',
          when: 'Ene – Mar 2025',
          text: 'Sistema de gestión de personas: API REST con Laravel y frontend multiplataforma con Flutter.',
        },
        {
          org: 'Corporación Educacional Marcela Paz',
          role: 'Desarrollador Front-end (práctica) y coordinador del equipo',
          when: 'Dic 2023 – Feb 2024',
          text: 'Frontend del sistema de planificación escolar con Spring Boot y Thymeleaf; coordiné al equipo y estandaricé el uso de Git.',
        },
      ],
    },
    projects: {
      kicker: 'Cosas que construí',
      title: 'Proyectos',
      featuredKicker: 'Proyecto destacado · caso de estudio',
      featuredTitle: 'LMS — una aplicación construida como si fuera para una empresa',
      featuredText:
        'NestJS + Angular + Postgres + MinIO, con CI/CD a dos ambientes en mi propio servidor, GitFlow y tres capas de tests. Mira cómo está construido por dentro.',
      featuredCta: 'Ver el caso de estudio',
      items: [
        {
          title: 'Homelab y pipelines CI/CD',
          meta: 'Proyecto personal · 2026',
          text: 'Servidor Ubuntu propio con runners self-hosted de GitHub Actions y aplicaciones empaquetadas en Docker.',
          tags: ['Linux', 'Docker', 'GitHub Actions'],
        },
        {
          title: 'BeatMap',
          meta: 'Proyecto de título · UTFSM · 2025',
          text: 'Frontend en React de una plataforma que conecta artistas, espacios y público en un mapa interactivo. Seleccionado para la Feria de Software USM 2025.',
          tags: ['React', 'Scrumban'],
        },
      ],
    },
    teach: {
      kicker: 'Enseño',
      title: 'Enseñar es parte de cómo aprendo',
      lead: 'Diseño talleres y los enseño de forma particular: preparo el programa, el material y los ejercicios.',
      workshops: [
        {
          title: 'Git y GitFlow',
          text: 'Taller de control de versiones desde cero, con slides propias en LaTeX y repositorios de práctica.',
          items: [
            'Introducción al control de versiones y la terminal',
            'El repositorio local y los tres estados de Git',
            'Commits e historial: la máquina del tiempo',
          ],
        },
        { title: 'Java', text: 'Syllabus, unidades temáticas y laboratorios prácticos de programación orientada a objetos.', items: [] },
        { title: 'SQL Server', text: 'Consultas, modelado y buenas prácticas sobre bases de datos relacionales.', items: [] },
        { title: 'NestJS y Angular', text: 'Backend y frontend con el mismo stack que uso en producción.', items: [] },
      ],
      universityTitle: 'En la universidad',
      university: [
        {
          title: 'Talleres Prácticos de Programación',
          text: 'Postulé y ejecuté de principio a fin un fondo concursable de la UTFSM (ID 393, $1.200.000 CLP).',
        },
        {
          title: 'Ayudante y Monitor de Inclusión',
          text: 'UTFSM, 2024–2025: programación orientada a objetos en Java y Python, patrón MVC y diagramas UML.',
        },
      ],
    },
    books: {
      kicker: 'Libros que me formaron',
      title: 'Lo que leo para trabajar mejor',
      lead: 'Libros que cambiaron cómo trabajo. Elige un ítem para ver dónde lo aplico.',
      label: 'Inventario · libros de trabajo',
    },
    outside: {
      kicker: 'Fuera del código',
      title: 'Música, cine, cultura y libros',
      text: 'Me gustan los centros culturales, el cine y las tocatas de música independiente. No es casualidad que mi proyecto de título, BeatMap, fuera un mapa para conectar artistas, espacios y público.',
      musicLabel: 'Mis 50 artistas favoritos',
      favoritesLabel: 'Inventario personal · favoritos',
    },
    contact: { kicker: 'Contacto', title: 'Conversemos' },
  },

  en: {
    meta: {
      title: 'Javier Choque Flores — Software Developer',
      description:
        'Software Developer in Tarapacá, Chile. I build software with professional team practices, and I teach others how to do it.',
    },
    hero: {
      hello: "Hi, I'm Javier.",
      tagline: 'I build software the way a company would — and I teach how to do it.',
      lead: 'IT Support & Software Analyst at Intermex. Outside of work I run my own infrastructure: a homelab with CI/CD and an LMS built from scratch with professional team practices.',
      openLms: '▶ See the LMS case',
      downloadCv: 'Download résumé',
      statsLabel: 'LMS project stats',
      envs: 'ENVS......',
      keyB: 'B button: go to contact',
      keyA: 'A button: see the LMS case',
      strip: [
        { kicker: 'Now', text: 'IT support & software · NestJS + Angular' },
        { kicker: 'Building', text: 'Homelab, CI/CD and my own LMS' },
        { kicker: 'Teaching', text: 'Git, Java and programming workshops' },
        { kicker: 'Learning', text: 'Terraform and AWS' },
      ],
    },
    about: {
      kicker: 'About me',
      title: 'From the north to Concepción, and back',
      paragraphs: [
        'I live in Alto Hospicio, in the Tarapacá region of northern Chile. I studied Computer Engineering at Universidad Técnica Federico Santa María in Concepción, and today I work in Iquique.',
        'Two things drive me: automating whatever repeats and teaching what I learn. I was a teaching assistant and inclusion mentor at university, I applied for and ran a competitive grant for programming workshops, and today I design and teach workshops independently.',
        'Outside of work I manage my own server: a homelab with Ubuntu Server, Docker and GitHub Actions, running the project I learned the most from.',
      ],
      serverCaption: 'My server is a laptop',
      photoNote: 'Reference image',
    },
    now: {
      kicker: 'What I do now',
      title: 'IT Support & Software Analyst',
      lead: 'Intermex S.A. · Iquique (ZOFRI free trade zone) · since July 2026',
      items: [
        'I build modules for an end-to-end vehicle logistics system: fleet location on a map and a key-control module that records which numbered drawer (1 to 300) holds each vehicle’s key. It is an MVP already used by internal clients: warehouse staff, logistics managers and the sales team, who request keys for showroom displays.',
        'I develop and maintain an internal system with NestJS and Angular, deployed to the cloud with GitFlow and CI/CD.',
        'I shipped to production an API that integrates an ERP with an external vendor’s CRM.',
        'I run root cause analysis (RCA) on production failures and manage incidents with Kanban and Lean.',
      ],
      past: [
        {
          org: 'Municipality of Alto Hospicio',
          role: 'Full Stack Developer (internship)',
          when: 'Jan – Mar 2025',
          text: 'People management system: REST API with Laravel and a cross-platform Flutter frontend.',
        },
        {
          org: 'Corporación Educacional Marcela Paz',
          role: 'Front-end Developer (internship) and team coordinator',
          when: 'Dec 2023 – Feb 2024',
          text: 'Frontend for a school planning system with Spring Boot and Thymeleaf; I coordinated the team and standardized our use of Git.',
        },
      ],
    },
    projects: {
      kicker: 'Things I built',
      title: 'Projects',
      featuredKicker: 'Featured project · case study (in Spanish)',
      featuredTitle: 'LMS — an app built as if it were for a company',
      featuredText:
        'NestJS + Angular + Postgres + MinIO, with CI/CD to two environments on my own server, GitFlow and three layers of tests. See how it is built inside.',
      featuredCta: 'Read the case study',
      items: [
        {
          title: 'Homelab and CI/CD pipelines',
          meta: 'Personal project · 2026',
          text: 'My own Ubuntu server with self-hosted GitHub Actions runners and applications packaged with Docker.',
          tags: ['Linux', 'Docker', 'GitHub Actions'],
        },
        {
          title: 'BeatMap',
          meta: 'Capstone project · UTFSM · 2025',
          text: 'React frontend for a platform that connects artists, venues and audiences on an interactive map. Selected for the USM Software Fair 2025.',
          tags: ['React', 'Scrumban'],
        },
      ],
    },
    teach: {
      kicker: 'Teaching',
      title: 'Teaching is part of how I learn',
      lead: 'I design workshops and teach them independently: I prepare the syllabus, the materials and the exercises.',
      workshops: [
        {
          title: 'Git and GitFlow',
          text: 'A version control workshop from scratch, with my own LaTeX slides and practice repositories.',
          items: [
            'Introduction to version control and the terminal',
            'The local repository and Git’s three states',
            'Commits and history: the time machine',
          ],
        },
        { title: 'Java', text: 'Syllabus, units and hands-on labs on object-oriented programming.', items: [] },
        { title: 'SQL Server', text: 'Queries, data modeling and best practices for relational databases.', items: [] },
        { title: 'NestJS and Angular', text: 'Backend and frontend with the same stack I use in production.', items: [] },
      ],
      universityTitle: 'At university',
      university: [
        {
          title: 'Hands-on Programming Workshops',
          text: 'I applied for and ran, start to finish, a UTFSM competitive grant (ID 393, CLP 1,200,000).',
        },
        {
          title: 'Teaching Assistant and Inclusion Mentor',
          text: 'UTFSM, 2024–2025: object-oriented programming in Java and Python, the MVC pattern and UML diagrams.',
        },
      ],
    },
    books: {
      kicker: 'Books that shaped me',
      title: 'What I read to work better',
      lead: 'Books that changed how I work. Pick an item to see where I apply it.',
      label: 'Inventory · work books',
    },
    outside: {
      kicker: 'Beyond code',
      title: 'Music, film, culture and books',
      text: 'I love cultural centers, cinema and independent music gigs. It is no coincidence that my capstone project, BeatMap, was a map connecting artists, venues and audiences.',
      musicLabel: 'My 50 favorite artists',
      favoritesLabel: 'Personal inventory · favorites',
    },
    contact: { kicker: 'Contact', title: 'Let’s talk' },
  },

  pt: {
    meta: {
      title: 'Javier Choque Flores — Desenvolvedor de Software',
      description:
        'Desenvolvedor de Software em Tarapacá, Chile. Construo software com práticas de equipe profissional e ensino como fazer isso.',
    },
    hero: {
      hello: 'Olá, eu sou o Javier.',
      tagline: 'Construo software como numa empresa — e ensino como fazer isso.',
      lead: 'Analista de Suporte de TI e Software na Intermex. Fora do trabalho, monto minha própria infraestrutura: um homelab com CI/CD e um LMS feito do zero com práticas de equipe profissional.',
      openLms: '▶ Ver o caso LMS',
      downloadCv: 'Baixar currículo',
      statsLabel: 'Estatísticas do projeto LMS',
      envs: 'AMBIENTES.',
      keyB: 'Botão B: ir para contato',
      keyA: 'Botão A: ver o caso LMS',
      strip: [
        { kicker: 'Hoje', text: 'Suporte de TI e software · NestJS + Angular' },
        { kicker: 'Construo', text: 'Homelab, CI/CD e um LMS próprio' },
        { kicker: 'Ensino', text: 'Git, Java e oficinas de programação' },
        { kicker: 'Aprendo', text: 'Terraform e AWS' },
      ],
    },
    about: {
      kicker: 'Sobre mim',
      title: 'Do norte a Concepción, e de volta',
      paragraphs: [
        'Moro em Alto Hospicio, na região de Tarapacá, no norte do Chile. Estudei Engenharia de Computação na Universidad Técnica Federico Santa María, em Concepción, e hoje trabalho em Iquique.',
        'Duas coisas me movem: automatizar o que se repete e ensinar o que aprendo. Fui monitor e mentor de inclusão na universidade, concorri e executei um edital para oficinas de programação, e hoje crio e ministro oficinas de forma independente.',
        'Fora do trabalho, administro meu próprio servidor: um homelab com Ubuntu Server, Docker e GitHub Actions, onde roda o projeto com o qual mais aprendi.',
      ],
      serverCaption: 'Meu servidor é um notebook',
      photoNote: 'Imagem ilustrativa',
    },
    now: {
      kicker: 'O que faço hoje',
      title: 'Analista de Suporte de TI e Software',
      lead: 'Intermex S.A. · Iquique (ZOFRI, zona franca) · desde julho de 2026',
      items: [
        'Desenvolvo módulos de um sistema integrado de logística de veículos: localização da frota num mapa e um controle de chaves que registra em qual gaveta numerada (1 a 300) está a chave de cada veículo. É um MVP já usado por clientes internos: almoxarifes, gerentes de logística e a área comercial, que solicita chaves para exposição.',
        'Desenvolvo e mantenho um sistema interno com NestJS e Angular, implantado na nuvem com GitFlow e CI/CD.',
        'Coloquei em produção uma API que integra um ERP ao CRM de um fornecedor externo.',
        'Faço análise de causa raiz (RCA) de falhas em produção e gerencio incidentes com Kanban e Lean.',
      ],
      past: [
        {
          org: 'Prefeitura de Alto Hospicio',
          role: 'Desenvolvedor Full Stack (estágio)',
          when: 'Jan – Mar 2025',
          text: 'Sistema de gestão de pessoas: API REST com Laravel e frontend multiplataforma com Flutter.',
        },
        {
          org: 'Corporación Educacional Marcela Paz',
          role: 'Desenvolvedor Front-end (estágio) e coordenador da equipe',
          when: 'Dez 2023 – Fev 2024',
          text: 'Frontend do sistema de planejamento escolar com Spring Boot e Thymeleaf; coordenei a equipe e padronizei o uso do Git.',
        },
      ],
    },
    projects: {
      kicker: 'Coisas que construí',
      title: 'Projetos',
      featuredKicker: 'Projeto em destaque · estudo de caso (em espanhol)',
      featuredTitle: 'LMS — uma aplicação construída como se fosse para uma empresa',
      featuredText:
        'NestJS + Angular + Postgres + MinIO, com CI/CD para dois ambientes no meu próprio servidor, GitFlow e três camadas de testes. Veja como foi construído por dentro.',
      featuredCta: 'Ver o estudo de caso',
      items: [
        {
          title: 'Homelab e pipelines de CI/CD',
          meta: 'Projeto pessoal · 2026',
          text: 'Servidor Ubuntu próprio com runners self-hosted do GitHub Actions e aplicações empacotadas com Docker.',
          tags: ['Linux', 'Docker', 'GitHub Actions'],
        },
        {
          title: 'BeatMap',
          meta: 'Trabalho de conclusão de curso · UTFSM · 2025',
          text: 'Frontend em React de uma plataforma que conecta artistas, espaços e público num mapa interativo. Selecionado para a Feira de Software USM 2025.',
          tags: ['React', 'Scrumban'],
        },
      ],
    },
    teach: {
      kicker: 'Ensino',
      title: 'Ensinar faz parte de como eu aprendo',
      lead: 'Crio oficinas e as ministro de forma independente: preparo o programa, o material e os exercícios.',
      workshops: [
        {
          title: 'Git e GitFlow',
          text: 'Oficina de controle de versão do zero, com slides próprios em LaTeX e repositórios de prática.',
          items: [
            'Introdução ao controle de versão e ao terminal',
            'O repositório local e os três estados do Git',
            'Commits e histórico: a máquina do tempo',
          ],
        },
        { title: 'Java', text: 'Programa, unidades temáticas e laboratórios práticos de programação orientada a objetos.', items: [] },
        { title: 'SQL Server', text: 'Consultas, modelagem e boas práticas em bancos de dados relacionais.', items: [] },
        { title: 'NestJS e Angular', text: 'Backend e frontend com a mesma stack que uso em produção.', items: [] },
      ],
      universityTitle: 'Na universidade',
      university: [
        {
          title: 'Oficinas Práticas de Programação',
          text: 'Concorri e executei do início ao fim um edital da UTFSM (ID 393, CLP 1.200.000).',
        },
        {
          title: 'Monitor e Mentor de Inclusão',
          text: 'UTFSM, 2024–2025: programação orientada a objetos em Java e Python, padrão MVC e diagramas UML.',
        },
      ],
    },
    books: {
      kicker: 'Livros que me formaram',
      title: 'O que leio para trabalhar melhor',
      lead: 'Livros que mudaram minha forma de trabalhar. Escolha um item para ver onde eu o aplico.',
      label: 'Inventário · livros de trabalho',
    },
    outside: {
      kicker: 'Além do código',
      title: 'Música, cinema, cultura e livros',
      text: 'Gosto de centros culturais, de cinema e de shows de música independente. Não é coincidência que meu trabalho de conclusão, o BeatMap, fosse um mapa para conectar artistas, espaços e público.',
      musicLabel: 'Meus 50 artistas favoritos',
      favoritesLabel: 'Inventário pessoal · favoritos',
    },
    contact: { kicker: 'Contato', title: 'Vamos conversar' },
  },
};
