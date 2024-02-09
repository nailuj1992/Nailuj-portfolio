import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendMailRequestDto } from '../dto/send-mail-dto';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private mailApi = 'https://nailuj-portfolio-backend-5adc8fe9dfe4.herokuapp.com/send-email'

  constructor(private http: HttpClient) { }

  sendEmail(data: SendMailRequestDto) {
    let options = { headers: { 'Content-Type': 'application/json' } };
    const request = JSON.stringify(data);
    return this.http.post(this.mailApi, request, options);
  }

}
