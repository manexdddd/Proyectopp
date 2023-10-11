
import { Component, ElementRef, AfterViewInit, OnInit, HostListener} from '@angular/core';
@Component({
  selector: 'app-navbar-public',
  templateUrl: './navbar-public.component.html',
  styleUrls: ['./navbar-public.component.css']
})
export class NavbarPublicComponent implements AfterViewInit  {
  constructor(private elementRef: ElementRef) {}

  
  ngAfterViewInit() {
    // Obtén las referencias a los elementos del DOM
    const navbarToggler = this.elementRef.nativeElement.querySelector('.navbar-toggler');
    const navbarCollapse = this.elementRef.nativeElement.querySelector('.navbar-collapse');
    const udMenuScrollItems = this.elementRef.nativeElement.querySelectorAll('.ud-menu-scroll');
    const submenuButtons = this.elementRef.nativeElement.querySelectorAll('.nav-item-has-children');

    // Cierra la barra de navegación cuando se hace clic en elementos .ud-menu-scroll
    udMenuScrollItems.forEach((element: { addEventListener: (arg0: string, arg1: () => void) => void; }) => {
      element.addEventListener('click', () => {
        navbarToggler.classList.remove('active');
        navbarCollapse.classList.remove('show');
      });
    });

    // Alternar la clase 'active' y 'show' cuando se hace clic en .navbar-toggler
    navbarToggler.addEventListener('click', () => {
      navbarToggler.classList.toggle('active');
      navbarCollapse.classList.toggle('show');
    });

    // Mostrar u ocultar submenús cuando se hace clic en elementos .nav-item-has-children
    submenuButtons.forEach((element: { querySelector: (arg0: string) => any; }) => {
      const anchor = element.querySelector('a');
      anchor.addEventListener('click', () => {
        const submenu = element.querySelector('.ud-submenu');
        if (submenu) {
          submenu.classList.toggle('show');
        }
      });
    });
  }

  //=======
  ngOnInit() {
    // Esto se ejecutará cuando se inicie el componente.
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    const udHeader = document.querySelector(".ud-header") as HTMLElement;
    const logo = document.querySelector(".navbar-brand img") as HTMLImageElement;

    if (!udHeader || !logo) {
      return; // Asegurarse de que los elementos existen
    }

    const sticky = udHeader.offsetTop;

    if (window.pageYOffset > sticky) {
      udHeader.classList.add("sticky");
      logo.src = "assets/images/logo/logo-2.svg";
    } else {
      udHeader.classList.remove("sticky");
      logo.src = "assets/images/logo/logo.svg";
    }
  }
}
