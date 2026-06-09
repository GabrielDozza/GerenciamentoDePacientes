import { Module } from '@nestjs/common';
import { EvolucaoService } from './application/services/evolucao.service';
import { EvolucaoRepository } from './domain/repository/evolucoes.repository';
import { EvolucaoMapper } from './application/mappers/evolucao.mapper';

@Module({
  imports: [],
  controllers: [],
  providers: [EvolucaoService, EvolucaoRepository, EvolucaoMapper],
})
export class EvolucaoModule {}
