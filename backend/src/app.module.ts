import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesController } from './interface/controllers/pacientes.controller';
import { eventosController } from './interface/controllers/eventosController';
import { evolucoesController } from './interface/controllers/evolucoesController';
import { profissionaisController } from './interface/controllers/profissionaisController';
import { authController } from './interface/controllers/authController';
import { PacienteService } from './application/services/paciente.service';
import { PacienteRepository } from './domain/repository/pacientes.repository';
import { PacienteMapper } from './application/mappers/paciente.mapper';

@Module({
  imports: [],
  controllers: [AppController, PacientesController, eventosController, evolucoesController, profissionaisController, authController],
  providers: [AppService, PacienteService, PacienteRepository, PacienteMapper],
})
export class AppModule {}
