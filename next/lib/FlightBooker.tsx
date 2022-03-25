import { useState } from 'react';
import styles from './FlightBooker.module.css';
export default function () {
	const [type, setType] = useState('one-way');
	const today = new Date().toISOString().split('T')[0];
	const [startDate, setStartDate] = useState(today);
	const startInvalid = isNaN(new Date(startDate).valueOf());
	const [returnDate, setReturnDate] = useState(today);
	const returnInvalid = isNaN(new Date(returnDate).valueOf());
	function handleClick() {
		if (type === 'one-way') {
			alert(`You have booked a one-way flight for ${startDate}`);
		} else {
			alert(`You have booked a return flight from ${startDate} to ${returnDate}`);
		}
	}

	return (
		<>
			<select
				value={type}
				onChange={(e) => {
					setType(e.target.value);
				}}
			>
				<option value="one-way">one-way flight</option>
				<option value="return">return flight</option>
			</select>
			<br />
			<input
				value={startDate}
				onChange={(e) => {
					setStartDate(e.target.value);
				}}
				className={startInvalid ? styles.error : undefined}
			/>
			<br />
			<input
				value={returnDate}
				onChange={(e) => {
					setReturnDate(e.target.value);
				}}
				className={returnInvalid ? styles.error : undefined}
				disabled={type !== 'return'}
			/>
			<br />
			<button
				disabled={startInvalid || returnInvalid || (type === 'return' && startDate >= returnDate)}
				onClick={handleClick}
			>
				book
			</button>
		</>
	);
}
