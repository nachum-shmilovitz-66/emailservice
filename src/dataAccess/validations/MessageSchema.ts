import { Schema } from 'mongoose';

// tslint:disable-next-line:variable-name
export const MessageSchema: Schema = new Schema({
    body: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true }
});
MessageSchema.set('timestamps', true);
