import { DefaultDataServiceConfig } from '@ngrx/data';

export const dataServiceConfig: DefaultDataServiceConfig = {
    root: 'localhost:8080/test/api/ok/cool',
    timeout: 3000, // request timeout
  }