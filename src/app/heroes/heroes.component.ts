import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from '../hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
	heroes!: Hero[];

	constructor(
		private heroService: HeroService
	) { }

	ngOnInit(): void {
		this.getHeroes();
	}


	spacePadding(id: number): string {
		return id.toString();
		return (id + "   ").slice(0, 4);
	}

	getHeroes(): void {
		this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
	}
}
