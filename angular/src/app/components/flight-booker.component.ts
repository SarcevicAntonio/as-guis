import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
	selector: 'app-flight-booker',
	template: `
		<select [formControl]="type">
			<option value="one-way">one-way flight</option>
			<option value="return">return flight</option>
		</select>
		<br />
		<input [formControl]="startDate" [class.error]="startInvalid" />
		<br />
		<input [formControl]="returnDate" [class.error]="returnInvalid" />
		<br />
		<button
			[disabled]="
				startInvalid ||
				returnInvalid ||
				(type.value === 'return' && startDate.value >= returnDate.value)
			"
			(click)="handleClick()"
		>
			book
		</button>
	`,
	styles: [
		`
			.error {
				background-color: red;
			}
		`
	]
})
export class FlightBookerComponent {
	type = new FormControl('one-way');
	today = new FormControl(new Date().toISOString().split('T')[0]);
	startDate = new FormControl(this.today.value);
	startInvalid = false;
	returnDate = new FormControl({ value: this.today.value, disabled: true });
	returnInvalid = false;
	subs: Subscription[] = [];
	constructor() {
		this.subs.push(
			this.type.valueChanges.subscribe((value) => {
				value !== 'return' ? this.returnDate.disable() : this.returnDate.enable();
			})
		);
		this.subs.push(
			this.startDate.valueChanges.subscribe((value) => {
				this.startInvalid = this.checkDateValidity(value);
			})
		);
		this.subs.push(
			this.returnDate.valueChanges.subscribe((value) => {
				this.returnInvalid = this.checkDateValidity(value);
			})
		);
	}
	checkDateValidity(date: string) {
		return isNaN(new Date(date).valueOf());
	}
	ngOnDestroy(): void {
		this.subs.forEach((sub) => sub.unsubscribe());
	}
	handleClick() {
		if (this.type.value === 'one-way') {
			alert(`You have booked a one-way flight for ${this.startDate.value}`);
		} else {
			alert(
				`You have booked a return flight from ${this.startDate.value} to ${this.returnDate.value}`
			);
		}
	}
}
