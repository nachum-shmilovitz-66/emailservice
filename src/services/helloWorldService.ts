import { injectable } from 'tsyringe';

@injectable()
export class HelloWorldService {
    constructor() {}

    getHelloWorld(): string {
        return 'Hello World!';
    }
}
