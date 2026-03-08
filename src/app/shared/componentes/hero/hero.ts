import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly nombre = input<string>('Agustín Centeno Posse');
  readonly rol = input<string>('Frontend Developer especializado en Angular');
  readonly descripcion = input<string>('Desarrollo interfaces web modernas, limpias y escalables, con foco en UX/UI, arquitectura mantenible y experiencia responsive real.');
}

export { HeroComponent as Hero };
