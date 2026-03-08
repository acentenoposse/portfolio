export interface SkillItem {
  nombre: string;
  icono: string;
}

export interface SkillGrupo {
  titulo: string;
  descripcion: string;
  items: SkillItem[];
}
