import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  // creo costruttore
  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  // recupero i dati dal Service
  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    
    // chiamata normale
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // chiamata simulando connessione lenta
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  // creo un metodo che all'inizio recupera i dati
  ngOnInit(): void {
    this.getHeroes();
  }

  // definisco la funzione esposta per il Click
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
