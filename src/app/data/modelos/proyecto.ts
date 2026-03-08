export interface Proyecto {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  categoria: string;
  estado: 'Deployado' | 'En evolución' | 'Concepto';
  impacto: string;
  stack: string[];
  destacado: string[];
  demoUrl?: string;
  repoUrl?: string;
  imagenUrl?: string;
  imagenAlt?: string;
}

