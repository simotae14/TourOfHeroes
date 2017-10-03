import 'rxjs/add/operator/switchMap';

// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero }         from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    // creo il costruttore di servizi che mi servono
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    // definisco il lifecycle hook per estrarre l'id
    ngOnInit(): void {
        this.route.paramMap
          .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
          .subscribe(hero => this.hero = hero);
    }

    // aggiungo una funzione per tornare indietro
    goBack(): void {
        this.location.back();
    }
}