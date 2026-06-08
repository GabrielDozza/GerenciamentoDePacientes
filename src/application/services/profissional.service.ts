import { Injectable } from "@nestjs/common";
import { ProfissionalMapper } from "../mappers/profissional.mapper";
import { ProfissionalDTO, UpdateProfissionalDTO } from "../../interface/dto/profissional.dto";
import { ProfissionalRepository } from "../../domain/repository/profissionais.repository";
import { Profissional } from "../../domain/models/profissional.model";
import { deleteProfissional } from "../../persistence/profissionais";
import gerarSenhaHash from "../../interface/middlewares/hashPassword";
import { verificaIdRecebido } from "../../interface/middlewares/profissionais";



@Injectable()
export class ProfissionalService {
    constructor(
        private readonly profissionalRepository: ProfissionalRepository,
        private readonly profissionalMapper: ProfissionalMapper
    ) {}

    async getAll(){
        const profissional = await this.profissionalRepository.getProfissionais();
        return profissional;
    }

    async getById(id : String){
        verificaIdRecebido(id);
        const profissional = await this.profissionalRepository.getProfissionalId(id);
        return profissional;
    }
    
    async create(profissionalDTO : ProfissionalDTO) : Promise<Profissional>{
        profissionalDTO.senha = gerarSenhaHash(profissionalDTO.senha);
        const profissional = await this.profissionalMapper.toDomain(profissionalDTO);
        return await this.profissionalRepository.postProfissional(profissional);
    }

    async patch(id : String, updateProfissionalDTO : UpdateProfissionalDTO){
        verificaIdRecebido(id);
        const profissional = await this.profissionalRepository.getProfissionalId(id);
        if(profissional == null){
            return null;
        }
        const profissionalDomain = await this.profissionalMapper.toDomain(profissional)
        return await this.profissionalMapper.updateDomain(profissionalDomain, updateProfissionalDTO);
    }

    async delete(id: String){
        verificaIdRecebido(id);
        const profissional = await deleteProfissional(id);
        return profissional;
    }
}
