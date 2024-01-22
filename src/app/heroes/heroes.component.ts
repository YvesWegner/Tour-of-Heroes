import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { HEROES } from '../mock-heroes/mock-heroes';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  /*standalone: true,*/
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  /*imports: [FormsModule, NgIf, NgFor, UpperCasePipe],*/
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
