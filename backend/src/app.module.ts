import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { pacientesController } from './interface/controllers/pacientesController';

@Module({
  imports: [],
  controllers: [AppController, pacientesController],
  providers: [AppService],
})
export class AppModule {}
