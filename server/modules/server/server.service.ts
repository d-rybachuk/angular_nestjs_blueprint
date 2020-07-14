import { Injectable } from '@nestjs/common';

@Injectable()
export class ServerService {

  getStatus(): any {
    return {
      status: 'ok',
      apiVersion: '1.0',
    };
  }
}
