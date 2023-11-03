import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar-student',
  templateUrl: './sidebar-student.component.html',
  styleUrls: ['./sidebar-student.component.css']
})
export class SidebarStudentComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  isSearchBarVisible: boolean = false;


  
  ngOnInit(): void {
    const toggleSidebarBtn = document.querySelector('.toggle-sidebar-btn');
    if (toggleSidebarBtn) {
      toggleSidebarBtn.addEventListener('click', () => {
        const body = document.querySelector('body');
        if (body) {
          body.classList.toggle('toggle-sidebar');
        }
      });
    }

    const searchBarToggle = this.elementRef.nativeElement.querySelector('.search-bar-toggle');
    const searchBar = this.elementRef.nativeElement.querySelector('.search-bar');

    if (searchBarToggle) {
      this.renderer.listen(searchBarToggle, 'click', () => {
        this.renderer.addClass(searchBar, 'search-bar-show');
      });
    }
  }
}
