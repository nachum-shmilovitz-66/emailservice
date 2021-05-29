import {
    IValidate,
    IsDateBeforeOrEqual,
    convertStringArrayToEnumArray,
    ErrorReason,
    convertToErrorReasons,
    BasicQuery,
    Paging,
    Sort
} from '@attenti/common';
import { MessageState } from '@attenti/aware-common';
import { IsISO8601, IsNotEmpty, IsString, IsOptional, IsEnum, validateSync, IsMongoId, IsArray } from 'class-validator';
import { DBMetadata } from '@attenti/genericdal';
import { DateComparison } from '@attenti/genericdal/dist/lib/enums/DateComparison';
import { StringComparison } from '@attenti/genericdal/dist/lib/enums/StringComparison';
import { DBFieldType } from '@attenti/genericdal/dist/lib/enums/DBFieldType';
import { Sensitivity } from '@attenti/genericdal/dist/lib/enums/Sensitivity';

export class MessageQuery extends BasicQuery implements IValidate {
    @IsISO8601()
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @DBMetadata({
        dbFieldName: 'updatedAt',
        operator: DateComparison.LessEqualThan,
        type: DBFieldType.Date
    })
    to!: string;

    @IsDateBeforeOrEqual('to')
    @IsISO8601()
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @DBMetadata({
        dbFieldName: 'updatedAt',
        operator: DateComparison.GreaterEqualThan,
        type: DBFieldType.Date
    })
    from!: string;

    @IsMongoId()
    @IsString()
    @IsOptional()
    @DBMetadata({
        dbFieldName: '_id'
    })
    id!: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @DBMetadata({
        dbFieldName: 'recipientUserID'
    })
    recipientUserID!: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @DBMetadata({
        dbFieldName: 'initiator.userID'
    })
    initiatorUserID!: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @DBMetadata({
        dbFieldName: 'senderName'
    })
    senderName!: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @DBMetadata({
        dbFieldName: 'initiator.userID',
        operator: StringComparison.NotEqual
    })
    ['initiatorUserID!']: string;

    @IsEnum(MessageState, { each: true })
    @IsArray()
    @IsOptional()
    @DBMetadata({
        dbFieldName: 'state',
        operator: StringComparison.In,
        sensitivity: Sensitivity.Sensitive
    })
    state!: MessageState[];

    constructor(fields?: {
        to?: string;
        from?: string;
        id?: string;
        recipientUserID?: string;
        initiatorUserID?: string;
        state?: MessageState[];
        senderName?: string;
        page?: string;
        pageSize?: string;
        Sort?: Sort[];
    }) {
        super(fields, new Paging(fields));
        if (this.state) {
            const stateList = convertStringArrayToEnumArray(this.state, MessageState);
            this.state = stateList;
        }
        this.validate();
    }

    validate(): any {
        const errors: ErrorReason[] = convertToErrorReasons(validateSync(this));
        return {
            errors,
            isValid: errors.length === 0
        };
    }
}
