import { Get, Post, Req, Body, JsonController, HttpCode } from 'routing-controllers';
import { SendEmailService } from '../../../services/sendEmailService';
import { inject, injectable } from 'tsyringe';
import { ResponseSchema, OpenAPI } from 'routing-controllers-openapi';


@JsonController('/sendEmail')
@injectable()
export class SendEmailController {
    constructor(private service: SendEmailService) {}

    @OpenAPI({
        description: 'should send mail'
    })
    @Get('/')
    sendEmail(): string {
        return this.service.sendEmail();
    }
}