import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }

  slides = [
    {
      id: 0,
      title: "Bienvenidos",
      subtitle: "Alfred Music",
      description: "En Alfred Music entraras en el universo de la tu musica preferida",
      icon: "musical-notes-outline",
      image: "assets/images/slide1.png",
      alt: "imagen de logo"
    },
    {
      id: 1,
      title: "Contenido Alfred Music",
      description: "Alfred Music Tiene la cancion especial  para cada  ocacion",
      icon: "play-outline",
      image: "assets/images/slide2.png",
      alt: "imagen de musica"
    },
    {
      id: 2,
      title: "Sigue adelante",
      subtitle: "es corto el camino que te falta",
      description: "si decides avanzar no te arrepentiras ",
      icon: "pause-outline",
      image: "assets/images/slide3.png",
      alt: "imagen de musica 2"
    
    },

    {
      id: 3,
      title: "preparado para lo que se viene ?",
      description: "el mundo en tus oidos",
      icon: "pause-outline",
      image: "assets/images/slide4.png",
      alt: "imagen de musica 3"
    }
  ]
  constructor(private router: Router, private storage: Storage) { 
    this.storage.create();
  }

  finish() {
    this.storage.set("intro", true);
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
  }

}
