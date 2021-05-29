import { Get, Post, Req, Body, JsonController, HttpCode } from 'routing-controllers';
import { HelloWorldService } from '../../../services/helloWorldService';
import { inject, injectable } from 'tsyringe';
import { ResponseSchema, OpenAPI } from 'routing-controllers-openapi';

@JsonController('/helloWorld')
@injectable()
export class HelloWorldController {
    constructor(private service: HelloWorldService) {}

    @OpenAPI({
        description: 'Returns Hello World'
    })
    @Get('/')
    getHelloWorld(): string {
        return this.service.getHelloWorld();
    }
}
