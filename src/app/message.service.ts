import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MessageService {
	messages: string[] = [];
	constructor() { }

	add(message: string) {
		this.messages.push(message);
	}
	addMessage(m: string): void {
		if (m == undefined) return;
		this.add(m);
	}
	clear() {
		this.messages = [];
	}
}
