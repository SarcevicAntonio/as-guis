import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter.component';
import { HelloWorldComponent } from './components/hello-world.component';
import { TemperatureConverterComponent } from './components/temperature-converter.component';

@NgModule({
	declarations: [
		AppComponent,
		HelloWorldComponent,
		CounterComponent,
		TemperatureConverterComponent
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
