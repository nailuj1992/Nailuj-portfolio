import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = this.formBuilder.group({
    name: '',
    email: '',
    website: '',
    phone: '',
    message: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    console.warn('Your mail has been sent', this.contactForm.value);
    this.contactForm.reset();
  }

}
