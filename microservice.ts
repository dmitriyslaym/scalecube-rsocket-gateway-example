import { createMicroservice } from '@scalecube/scalecube-microservice';
import { MicroserviceApi } from '@scalecube/api';
import { TestServiceDefinition, TestService } from './TestService';

export const getMS = () => {
  const services: MicroserviceApi.Service[] = [];

  const testService = new TestService();
  services.push({
    definition: TestServiceDefinition,
    reference: testService,
  });

  return createMicroservice({
    services,
    cluster: undefined,
  });
};

