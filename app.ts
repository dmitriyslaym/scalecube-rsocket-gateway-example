import Gateway from '@scalecube/rsocket-ws-gateway';
import { getMS } from './microservice';

const ms = getMS();
const serviceCall = ms.createServiceCall({});
const gateway = new Gateway({ port: 3000 });
gateway.start({ serviceCall });
console.log('server runs on ws://localhost:3000');
