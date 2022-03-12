import { Component } from '@angular/core';
@Component({
	selector: 'app-counter',
	template: `
		<span>{{ count }}</span>
		<button (click)="increment()">Count</button>
	`
})
export class CounterComponent {
	count: number = 0;
	increment() {
		this.count += 1;
	}
}
