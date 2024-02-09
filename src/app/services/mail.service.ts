import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendMailRequestDto } from '../model/dto/send-mail-dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private mailApi = environment.sendMailEndpoint;

  constructor(private http: HttpClient) { }

  sendEmail(data: SendMailRequestDto) {
    let options = { headers: { 'Content-Type': 'application/json' } };
    const request = JSON.stringify(data);
    return this.http.post(this.mailApi, request, options);
  }

}
