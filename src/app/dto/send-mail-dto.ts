export class SendMailRequestDto {

    to?: string | null;
    subject?: string | null;
    message?: SendMailMessageRequestDto | null;

    constructor(to?: string | null, subject?: string | null, name?: string | null, email?: string | null, website?: string | null, phone?: string | null, message?: string | null) {
        this.to = to;
        this.subject = subject;
        this.message = new SendMailMessageRequestDto(name, email, website, phone, message);
    }

}

export class SendMailMessageRequestDto {
    name?: string | null;
    email?: string | null;
    website?: string | null;
    phone?: string | null;
    message?: string | null;

    constructor(name?: string | null, email?: string | null, website?: string | null, phone?: string | null, message?: string | null) {
        this.name = name;
        this.email = email;
        this.website = website;
        this.phone = phone;
        this.message = message;
    }
}