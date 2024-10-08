import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MailService } from '../../services/mail.service';
import { SendMailRequestDto } from '../../model/dto/send-mail-dto';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  successMessage: boolean = false;
  errorMessage: boolean = false;

  contactForm = this.formBuilder.group({
    name: new FormControl('', [Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    website: new FormControl('', [Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]),
    phone: new FormControl('', [Validators.minLength(7), Validators.pattern("^[0-9]*$")]),
    message: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private formBuilder: FormBuilder, private mailService: MailService) {
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      let formData = this.contactForm.value;

      const to = environment.sendMessageTo;
      const subject = environment.sendMessageSubject;
      const name = formData.name;
      const email = formData.email;
      const website = formData.website;
      const phone = formData.phone;
      const message = formData.message;

      const data = new SendMailRequestDto(to, subject, name, email, website, phone, message);

      const timeout = 5000;

      // this.mailService.sendEmail(data).subscribe({
      //   next: (response) => {
      //     this.successfulMailSending(response, timeout);
      //   },
      //   error: (error) => {
      //     this.failedMailSending(error, timeout);
      //   },
      //   complete: () => console.info('Sending mail - process complete')
      // });

      // The mail service responsible for sending the email was disabled (because of money).
      // To avoid any conflict, the default behavior will be showing a successful message (the happy path). 
      this.successfulMailSending(null, timeout);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  private successfulMailSending(response: any, timeout: any) {
    if (response) {
      console.warn(response);
    }
    this.contactForm.reset();

    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, timeout);
  }

  private failedMailSending(error: any, timeout: any) {
    console.log('Error sending email:', error);

    this.errorMessage = true;
    setTimeout(() => {
      this.errorMessage = false;
    }, timeout);
  }

  onlyNumbers(event: any) {
    if (event.key !== null && ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(event.key) === -1) {
      event.preventDefault();
    }
  }

}
