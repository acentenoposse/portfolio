import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../../../shared/componentes/footer/footer';
import { HeroComponent } from '../../../shared/componentes/hero/hero';
import { NavbarComponent } from '../../../shared/componentes/navbar/navbar';
import { ProyectoCardComponent } from '../../../shared/componentes/proyecto-card/proyecto-card';
import { SeccionTituloComponent } from '../../../shared/componentes/seccion-titulo/seccion-titulo';
import { SkillChipComponent } from '../../../shared/componentes/skill-chip/skill-chip';
import { PROYECTOS } from '../../../data/mock/proyectos.mock';
import { SKILLS } from '../../../data/mock/skills.mock';

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    SeccionTituloComponent,
    ProyectoCardComponent,
    SkillChipComponent,
    FooterComponent,
  ],
  templateUrl: './inicio.page.html',
  styleUrl: './inicio.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioPage {
  readonly proyectos = PROYECTOS;
  readonly skills = SKILLS;
  readonly year = new Date().getFullYear();
}
