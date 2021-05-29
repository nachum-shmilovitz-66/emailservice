import { Message } from '../models/message';
import { IMessageRepository } from '../dataAccess/interfaces/IMessageRepository';
import { MessageRepository } from '../dataAccess/messageRepository';
import { QueryResponse } from '@attenti/common';
import { MessageQuery } from '../models/requests/MessageQuery';
import { injectable, inject } from 'tsyringe';

@injectable()
export class MessageService {
    constructor(@inject(MessageRepository) private messageRepository: IMessageRepository) {}
    async getAllMessages(): Promise<Message[]> {
        const msg: Message[] = [
            new Message({ body: 'body', title: 'Title' }),
            new Message({ body: 'body 2', title: 'Title 2' })
        ];
        return msg;
    }

    async postMessage(title: string, body: string): Promise<Message> {
        const msg: Message = new Message({ title, body });

        return await this.messageRepository.insert(msg);
    }

    async getMessagesByQuery(query: MessageQuery): Promise<QueryResponse<Message>> {
        return await this.messageRepository.findManyByQuery(query);
    }
}
