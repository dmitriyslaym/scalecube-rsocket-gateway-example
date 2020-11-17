import { createGatewayProxy } from '@scalecube/rsocket-ws-gateway/dist/createGatewayProxy';

const main = async () => {
  const definition = {
    serviceName: 'TestService',
    methods: {
      list: { asyncModel: 'requestResponse' },
    },
  };
  const proxy = await createGatewayProxy('ws://localhost:3000', definition);
  const resp = await proxy.list()
  console.log('response', resp);
}

main();

