import { GenericRepository } from '@attenti/genericdal';
import { MessageSchema } from './validations/MessageSchema';
import { Message } from '../models/message';
import { IMessageRepository } from './interfaces/IMessageRepository';
import { injectable } from 'tsyringe';

const schemaName = 'message';

export class MessageRepository extends GenericRepository<Message> implements IMessageRepository {
    constructor() {
        super(schemaName, MessageSchema);
    }
}
