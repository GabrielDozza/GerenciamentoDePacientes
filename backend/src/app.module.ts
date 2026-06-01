import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacientesController } from './interface/controllers/pacientes.controller';
import { PacienteRepository } from './domain/repository/pacientes.repository';
import { PacienteMapper } from './application/mappers/paciente.mapper';
import { PacienteService } from './application/services/paciente.service';

@Module({
  imports: [],
  controllers: [AppController, PacientesController],
  providers: [AppService, PacienteRepository, PacienteMapper, PacienteService],
})
export class AppModule {}
