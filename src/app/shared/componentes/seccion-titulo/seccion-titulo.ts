import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-seccion-titulo',
  standalone: true,
  templateUrl: './seccion-titulo.html',
  styleUrl: './seccion-titulo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeccionTituloComponent {
  readonly eyebrow = input.required<string>();
  readonly titulo = input.required<string>();
  readonly descripcion = input<string>('');
}

export { SeccionTituloComponent as SectionTitle };
