import { Component, OnInit } from '@angular/core';




@Component({

  selector: 'app-home-public',
  templateUrl: './home-public.component.html',
  styleUrls: ['./home-public.component.css']
})
export class HomePublicComponent  {
  counter = 0;
  text = ['CEO DevFolio,Frontend Developer,Graphic Designer', 'Web Developer', ',Web Designer3'];
  constructor() {}
  ngOnInit(): void {
    setInterval(() => this.change(), 3000);
  }

  change() {
    let elem = document.querySelector(".text-slider-items");
    if (elem) {
      elem.innerHTML = this.text[this.counter];
      this.counter++;
      if (this.counter >= this.text.length) { this.counter = 0; }
      let elems = document.querySelectorAll<HTMLElement>(".text-slider-items");

  elems.forEach((elem) => {
    elem.style.animation = 'none';
    elem.offsetHeight; /* trigger reflow */
    elem.style.animation = ''; 
  })
}

      
}
}

