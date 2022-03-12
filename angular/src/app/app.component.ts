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
		</main>
	`
})
export class AppComponent {}
