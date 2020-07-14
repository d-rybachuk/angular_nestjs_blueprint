import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ServerModule } from '../../server/modules/server/server.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ServerModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/server/status (GET)', () => {
    return request(app.getHttpServer())
      .get('/server/status')
      .expect(200)
      .expect('{"status":"ok","apiVersion":"1.0"}');
  });
});
