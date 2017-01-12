import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
	selector: 'base',
	templateUrl: './base.component.html',
	encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit{

	constructor() {}

	ngOnInit() {
	}
}