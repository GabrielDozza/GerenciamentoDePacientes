import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente.module';
import { ProfissionalModule } from './profissional.module';
import { eventosController } from './interface/controllers/eventos.controller';
import { evolucoesController } from './interface/controllers/evolucoes.controller';
import { profissionaisController } from './interface/controllers/profissionais.controller';
import { authController } from './interface/controllers/authController';


@Module({
  imports: [PacienteModule, ProfissionalModule],
  controllers: [AppController, eventosController, evolucoesController, authController],
  providers: [AppService],
})
export class AppModule {}
