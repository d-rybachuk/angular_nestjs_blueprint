import { Controller, Get } from '@nestjs/common';
import { ServerService } from './server.service';

@Controller('server')
export class ServerController {
    constructor(private readonly serverService: ServerService) {
    }

    @Get('status')
    getStatus(): any {
        return {
            status: 'ok',
            apiVersion: '1.0',
        };
    }
}
