import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from "rxjs";

import { MessageService } from "./message.service";

@Injectable({
	providedIn: 'root'
})
export class HeroService {

	constructor(
		private messageService: MessageService
	) { }

	getHeroes(): Observable<Hero[]> {
		this.messageService.add("TsuyoTsuyo Service: fetched ojisans");
		return of(HEROES);
	}

	getHero(id: number): Observable<Hero> {
		this.messageService.add(`HeroService: fetched hero id=${id}`);
		let f = HEROES.find(hero => hero.id == id);
		if (f == null) { alert("ngo"); return of(new Hero()); };
		return of(f);
	}
}
