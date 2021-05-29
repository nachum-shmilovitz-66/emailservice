/**
 * This module is used to collect all the configuration variables,
 * like the environment vars, in one place so they are not scattered all over the whole codebase
 */

import dotenv = require('dotenv');
import { logger, ILogInfo } from '@attenti/common';

const result = dotenv.config();
if (result.error) {
    if (process.env.NODE_ENV === 'production' && result.error.message.indexOf('ENOENT') >= 0) {
        logger.info('expected this error because we are in production without a .env file', {
            section: 'configuration'
        } as ILogInfo);
    } else {
        throw result.error;
    }
}
export const config = {
    productionMode: process.env.NODE_ENV === 'production',
    connectionString: process.env.DATABASE_CONNECTION_STRING,
    port: process.env.PORT || 5000
};
