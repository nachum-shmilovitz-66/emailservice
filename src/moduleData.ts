import { MongoModule } from '@attenti/genericdal';

import { HelloWorldController } from './controllers/webApi/routes/helloWorldController';
import { MessageController } from './controllers/webApi/routes/messageController';
import { SendEmailController } from './controllers/webApi/routes/sendEmailController';
import { IModuleData } from '@attenti/di-utils';

export const moduleData: IModuleData = {
    jsonControllers: [HelloWorldController, MessageController, SendEmailController],
    messageControllerList: [],
    modules: [MongoModule],

    appFactoryOpts: {
        queryResponseComponents: [],
        additionalSchemas: [],
        componentFilters: ['Mongo.*'],
        serviceTitle: 'Attenti Hello World Service',
        serviceVersion: '1.0'
    }
};
