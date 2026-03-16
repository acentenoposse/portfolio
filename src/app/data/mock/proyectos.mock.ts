import { Proyecto } from '../modelos/proyecto';

export const PROYECTOS: Proyecto[] = [
  {
    titulo: 'ERP Cairo',
    subtitulo: 'Sistema comercial ERP modular con foco en escalabilidad. Para ingresar se puede usar cualquier mail y la contraseña: 123456',
    descripcion:
      'Es un proyecto en conjunto con otro desarrollador, orientado a gestión de sucursales, stock, productos, precios, proveedores y operaciones internas. Pensado para crecer a e-commerce y automatizaciones.',
    categoria: 'Proyecto real',
    estado: 'Deployado',
    impacto: 'Arquitectura limpia, ABMC dinámicos, despliegue Oracle Cloud y base sólida para evolución SaaS.',
    stack: ['Angular 20+', 'TypeScript', 'SCSS', 'ASP.NET Core', 'SQL Server'],
    destacado: ['Arquitectura por features', 'CRUD dinámico', 'Responsive admin UI'],
    demoUrl: 'http://cairo-app.duckdns.org',
    repoUrl: '',
    imagenUrl: 'assets/proyectos/erp-cairo.png',
    imagenAlt: 'Vista del dashboard del ERP Cairo con métricas, actividad reciente e inventario.',
  },
  {
    titulo: 'Falkon Wear E-commerce',
    subtitulo: 'Proyecto personal frontend con foco en branding y experiencia de compra',
    descripcion:
      'E-commerce moderno para una marca de ropa urbana masculina. Diseñado con atención fuerte en estética y navegación visual',
    categoria: 'Frontend',
    estado: 'En evolución',
    impacto: 'Diseño UX/UI, experiencia de usuario y base sólida para conexión futura con backend.',
    stack: ['Angular 20+', 'Signals', 'SCSS', 'UX/UI', 'Responsive design'],
    destacado: ['Catálogo visual', 'Conexión a API', 'Componentes shared'],
    demoUrl: '',
    repoUrl: 'http://falkon-ecommerce.vercel.app',
    imagenUrl: 'assets/proyectos/falkon-wear.png',
    imagenAlt: 'Vista principal del e-commerce Falkon Wear con hero, filtros y grilla de productos.',
  },
];
