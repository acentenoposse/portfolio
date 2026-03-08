import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly year = input<number | null>(null);
  readonly currentYear = computed(() => this.year() ?? new Date().getFullYear());
}

export { FooterComponent as Footer };
