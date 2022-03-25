import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter.component';
import { FlightBookerComponent } from './components/flight-booker.component';
import { HelloWorldComponent } from './components/hello-world.component';
import { TemperatureConverterComponent } from './components/temperature-converter.component';

@NgModule({
	declarations: [
		AppComponent,
		HelloWorldComponent,
		CounterComponent,
		TemperatureConverterComponent,
		FlightBookerComponent
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
