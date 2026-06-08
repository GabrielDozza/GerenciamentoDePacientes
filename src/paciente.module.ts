import { Module } from '@nestjs/common';
import { PacientesController } from './interface/controllers/pacientes.controller';
import { PacienteService } from './application/services/paciente.service';
import { PacienteRepository } from './domain/repository/pacientes.repository';
import { PacienteMapper } from './application/mappers/paciente.mapper';

@Module({
  imports: [],
  controllers: [PacientesController],
  providers: [PacienteService, PacienteRepository, PacienteMapper],
})
export class PacienteModule {}
