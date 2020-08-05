/* Modules */

// invoice.ts (class module)
export class Invoice {

	constructor(
		readonly client: string,
		private details: string,
		public amount: number,
	) {}

	format() {
		return `${this.client} owes USD${this.amount} for ${this.details}`;
	}
}

// Main Script
import { Invoice } from 'path/invoice.ts';
