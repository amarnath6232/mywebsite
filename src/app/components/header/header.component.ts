import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.navbar_bg();
  }

  ngOnInit(): void {
    this.navbar_bg();
    this.a_tag_active();
  }

  a_tag_active() {
    var header = document.getElementById("navbar");
    var aTag = header.getElementsByClassName("scroll");
    for (var i = 0; i < aTag.length; i++) {
      aTag[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }


  navbar_bg() {
    let nav = document.getElementById('menu') as HTMLElement;
    if (window.pageYOffset > 100) {
      console.log(window.pageYOffset > 125);
      nav.classList.add('bg-secondary');
      nav.classList.remove('bg-transparent');
    } else {
      nav.classList.add('bg-transparent');
      nav.classList.remove('bg-secondary');
    }
    nav.style.transition = 'background 1s';
  }
}
