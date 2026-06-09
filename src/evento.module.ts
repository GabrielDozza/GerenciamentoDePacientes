import { Module } from '@nestjs/common';
import { EventoService } from './application/services/evento.service';
import { EventoRepository } from './domain/repository/eventos.repository';
import { EventoMapper } from './application/mappers/evento.mapper';

@Module({
  imports: [],
  controllers: [],
  providers: [EventoService, EventoRepository, EventoMapper],
})
export class EventoModule {}
