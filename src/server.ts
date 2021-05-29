import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';

import { container } from 'tsyringe';
import { ServerEngine } from '@attenti/di-utils';
import { moduleData } from './moduleData';
import { config } from './configuration';

(async () => {
    container.register('moduleData', { useValue: moduleData });
    container.register('config', { useValue: config });

    const serverEngine = container.resolve(ServerEngine);
    await serverEngine.initServices();
})();
