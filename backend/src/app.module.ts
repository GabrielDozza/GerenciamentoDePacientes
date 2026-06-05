import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente.module';
import { eventosController } from './interface/controllers/eventosController';
import { evolucoesController } from './interface/controllers/evolucoesController';
import { profissionaisController } from './interface/controllers/profissionaisController';
import { authController } from './interface/controllers/authController';

@Module({
  imports: [PacienteModule],
  controllers: [AppController, eventosController, evolucoesController, profissionaisController, authController],
  providers: [AppService],
})
export class AppModule {}
