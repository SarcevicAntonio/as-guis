import { Component } from '@angular/core';
@Component({
	selector: 'app-temperature-converter',
	template: `
		<label>
			<input [(ngModel)]="c" (input)="handleCelsius()" />
			Celsius
		</label>
		=
		<label>
			<input [(ngModel)]="f" (input)="handleFahrenheit()" />
			Fahrenheit
		</label>
	`
})
export class TemperatureConverterComponent {
	c!: number;
	f!: number;
	handleCelsius() {
		if (isNaN(this.c)) return;
		this.f = this.c * (9 / 5) + 32;
	}
	handleFahrenheit() {
		if (isNaN(this.f)) return;
		this.c = (this.f - 32) * (5 / 9);
	}
}
