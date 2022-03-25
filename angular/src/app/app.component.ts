import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<main>
			<h1>AS GUIs Angular</h1>
			<p>
				This is a live version of an implementation of
				<a href="https://eugenkiss.github.io/7guis/">7GUIs</a> (+ extra) in
				<a href="https://angular.io/">Angular</a>.
			</p>
			<ul>
				<li>
					<a href="https://github.com/SarcevicAntonio/as-guis/">🐙 Visit project repo</a>
				</li>
				<li>
					<a href="https://github.com/SarcevicAntonio/as-guis/tree/main/angular/src/app/components">
						📝 Browse component source code.
					</a>
				</li>
			</ul>

			<div class="articles">
				<article>
					<div class="title">
						<h2>Hello World</h2>
						<a
							href="https://github.com/SarcevicAntonio/as-guis/blob/main/angular/src/app/components/hello-world.component.ts"
						>
							📝
						</a>
					</div>
					<div class="content">
						<app-hello-world></app-hello-world>
					</div>
				</article>
				<article>
					<div class="title">
						<h2>Counter</h2>
						<a
							href="https://github.com/SarcevicAntonio/as-guis/blob/main/angular/src/app/components/counter.component.ts"
						>
							📝
						</a>
					</div>
					<div class="content">
						<app-counter></app-counter>
					</div>
				</article>
				<article>
					<div class="title">
						<h2>Temperature Converter</h2>
						<a
							href="https://github.com/SarcevicAntonio/as-guis/blob/main/angular/src/app/components/temperature-converter.component.ts"
						>
							📝
						</a>
					</div>
					<div class="content">
						<app-temperature-converter></app-temperature-converter>
					</div>
				</article>
				<article>
					<div class="title">
						<h2>Flight Booker</h2>
						<a
							href="https://github.com/SarcevicAntonio/as-guis/blob/main/angular/src/app/components/flight-booker.component.ts"
						>
							📝
						</a>
					</div>
					<div class="content">
						<app-flight-booker></app-flight-booker>
					</div>
				</article>
			</div>
		</main>
	`
})
export class AppComponent {}
