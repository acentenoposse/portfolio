import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-chip',
  standalone: true,
  template: `
    <span class="chip">
      <img class="chip-logo" [src]="icono()" [alt]="texto()" loading="lazy" />
      <span>{{ texto() }}</span>
    </span>
  `,
  styleUrl: './skill-chip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillChipComponent {
  readonly texto = input.required<string>();
  readonly icono = input.required<string>();
}

export { SkillChipComponent as TechBadge };
