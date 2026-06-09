import { Module } from '@nestjs/common';
import { PacientesController } from './interface/controllers/pacientes.controller';
import { PacienteService } from './application/services/paciente.service';
import { PacienteRepository } from './domain/repository/pacientes.repository';
import { PacienteMapper } from './application/mappers/paciente.mapper';
import { EventoService } from './application/services/evento.service';
import { EvolucaoService } from './application/services/evolucao.service';
import { EventoRepository } from './domain/repository/eventos.repository';
import { EventoMapper } from './application/mappers/evento.mapper';
import { EvolucaoRepository } from './domain/repository/evolucoes.repository';
import { EvolucaoMapper } from './application/mappers/evolucao.mapper';

@Module({
  imports: [],
  controllers: [PacientesController],
  providers: [PacienteService, PacienteRepository, PacienteMapper, EventoService, EventoRepository, EventoMapper, EvolucaoService, EvolucaoRepository, EvolucaoMapper],
})
export class PacienteModule {}
