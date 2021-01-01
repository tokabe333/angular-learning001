import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

import { MessageService } from "../message.service";

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
	ngoMessage!: string;
	constructor(public messageService: MessageService) { }

	ngOnInit(): void {
	}

	addMessage(): void {
		if (this.ngoMessage == undefined) return;
		this.messageService.add(this.ngoMessage);
	}

}
