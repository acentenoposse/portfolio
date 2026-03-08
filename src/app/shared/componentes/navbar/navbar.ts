import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly abierto = signal(false);

  toggleMenu(): void {
    this.abierto.update((value) => !value);
  }

  cerrarMenu(): void {
    this.abierto.set(false);
  }
}

export { NavbarComponent as Navbar };
