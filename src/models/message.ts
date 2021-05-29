import { IEntity } from '@attenti/genericdal';
import { IsISO8601, IsNotEmpty, IsString, IsOptional, IsEnum, validateSync, IsMongoId, IsDate } from 'class-validator';

export class Message implements IEntity {
    @IsOptional()
    id!: string;

    createdAt!: Date;
    updatedAt!: Date;
    title!: string;
    body!: string;

    constructor(fields?: { title: string; body: string }) {
        if (fields) Object.assign(this, fields);
    }
}
