import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Proyecto } from '../../../data/modelos/proyecto';

@Component({
  selector: 'app-proyecto-card',
  standalone: true,
  templateUrl: './proyecto-card.html',
  styleUrl: './proyecto-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectoCardComponent {
  readonly proyecto = input.required<Proyecto>();
}

export { ProyectoCardComponent as ProjectCard };
