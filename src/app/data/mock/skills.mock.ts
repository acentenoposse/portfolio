import { SkillGrupo } from '../modelos/skill';

export const SKILLS: SkillGrupo[] = [
  {
    titulo: 'Frontend',
    descripcion: 'Interfaces modernas y responsive.',
    items: [
      { nombre: 'Angular', icono: 'assets/logos/angular.svg' },
      { nombre: 'TypeScript', icono: 'assets/logos/typescript.svg' },
      { nombre: 'HTML', icono: 'assets/logos/html.svg' },
      { nombre: 'SCSS', icono: 'assets/logos/scss.svg' },
    ],
  },
  {
    titulo: 'Backend',
    descripcion: 'Base técnica para productos completos y escalables.',
    items: [
      { nombre: 'C#', icono: 'assets/logos/csharp.svg' },
      { nombre: '.NET', icono: 'assets/logos/dotnet.svg' },
      { nombre: 'SQL Server', icono: 'assets/logos/sql.svg' },
    ],
  },
  {
    titulo: 'Workflow & Producto',
    descripcion: 'Buenas prácticas y control de versiones',
    items: [
      { nombre: 'Git / GitHub', icono: 'assets/logos/git.svg' },
      { nombre: 'UX/UI', icono: 'assets/logos/figma.svg' },
      { nombre: 'Arquitectura por features', icono: 'assets/logos/angular.svg' },
    ],
  },
];
