import { Message } from '../../models/message';
import { IGenericRepository } from '@attenti/genericdal/dist/lib/interfaces/IGenericRepository';

export interface IMessageRepository extends IGenericRepository<Message> {}
