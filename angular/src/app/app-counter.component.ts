import { Component } from '@angular/core';
@Component({
	selector: 'app-counter',
	template: ` <button (click)="increment()">Clicks: {{ count }}</button> `
})
export class CounterComponent {
	count: number = 0;
	increment = () => {
		this.count += 1;
	};
}
