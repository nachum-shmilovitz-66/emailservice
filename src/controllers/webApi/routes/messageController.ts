import { MessageService } from '../../../services/messageService';
import { MessageQuery } from '../../../models/requests/MessageQuery';
import { QueryResponse } from '@attenti/common';
import { Message } from '../../../models/message';
import { JsonController, QueryParams, Get } from 'routing-controllers';
import { ResponseSchema, OpenAPI } from 'routing-controllers-openapi';
import { injectable } from 'tsyringe';

@injectable()
@JsonController('/messages')
export class MessageController {
    constructor(private msgService: MessageService) {}

    @OpenAPI({
        // summary: '', auto generated from the method name
        description: 'Returns messages by query'
    })
    @ResponseSchema('MessageQueryResponse')
    @Get('/query')
    async getMessages(@QueryParams() messageQuery: MessageQuery): Promise<QueryResponse<Message>> {
        const result = await this.msgService.getMessagesByQuery(messageQuery);
        return result;
    }

    @OpenAPI({
        // summary: '', auto generated from the method name
        description: 'Returns all messages'
    })
    @Get('/')
    async getAllMessages(): Promise<Message[]> {
        const result = await this.msgService.getAllMessages();
        return result;
    }
}
