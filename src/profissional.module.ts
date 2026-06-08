import { Module } from '@nestjs/common';
import { profissionaisController } from './interface/controllers/profissionais.controller';
import { ProfissionalService } from './application/services/profissional.service';
import { ProfissionalRepository } from './domain/repository/profissionais.repository';
import { ProfissionalMapper } from './application/mappers/profissional.mapper';

@Module({
  imports: [],
  controllers: [profissionaisController],
  providers: [ProfissionalService, ProfissionalRepository, ProfissionalMapper],
})
export class ProfissionalModule {}
