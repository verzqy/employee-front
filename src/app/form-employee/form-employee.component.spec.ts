import { TestBed, inject } from '@angular/core/testing';

import { FormEmployeeComponent } from './form-employee.component';

describe('a form-employee component', () => {
	let component: FormEmployeeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FormEmployeeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FormEmployeeComponent], (FormEmployeeComponent) => {
		component = FormEmployeeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});