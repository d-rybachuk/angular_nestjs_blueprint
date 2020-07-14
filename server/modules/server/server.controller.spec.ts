import { Test, TestingModule } from '@nestjs/testing';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';

describe('ServerController', () => {
    let serverController: ServerController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ServerController],
            providers: [ServerService],
        }).compile();

        serverController = app.get<ServerController>(ServerController);
    });

    describe('root', () => {
        it('should return "Server version"', () => {
            const result = {"status": "ok", "apiVersion": "1.0"};
            expect(serverController.getStatus()).toEqual(result)
        });
    });
});
