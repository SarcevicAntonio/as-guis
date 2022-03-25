import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<main>
			<h1>Angular</h1>
			<h2>Hello World</h2>
			<app-hello-world></app-hello-world>
			<h2>Counter</h2>
			<app-counter></app-counter>
			<h2>Temperature Converter</h2>
			<app-temperature-converter></app-temperature-converter>
			<h2>Flight Booker</h2>
			<app-flight-booker></app-flight-booker>
		</main>
	`
})
export class AppComponent {}
