import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = this.formBuilder.group({
    name: new FormControl('', [Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    website: new FormControl('', [Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]),
    phone: new FormControl('', [Validators.minLength(7), Validators.pattern("^[0-9]*$")]),
    message: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Here is the logic for send email

      console.warn('Your mail has been sent', this.contactForm.value);
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  onlyNumbers(event: any) {
    if (event.key !== null && ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(event.key) === -1) {
      event.preventDefault();
    }
  }

}
