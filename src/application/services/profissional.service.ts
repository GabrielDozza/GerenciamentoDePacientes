import { Injectable } from "@nestjs/common";
import { ProfissionalMapper } from "../mappers/profissional.mapper";
import { ProfissionalRepository } from "../../domain/repository/profissionais.repository";
import { Profissional } from "../../domain/models/profissional.model";
import { deleteProfissional, getProfissionalId } from "../../persistence/profissionais";
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
    
    async create(profissional : any) : Promise<Profissional>{
        profissional.senha = gerarSenhaHash(profissional.senha);
        const proDTO = this.profissionalMapper.toDTO(profissional);
        const proDomain = await this.profissionalMapper.toDomain(proDTO);
        return await this.profissionalRepository.postProfissional(proDomain);
    }

    async patch(id : String, update : any){
        const profissional = await getProfissionalId(id);
        const proDTO = this.profissionalMapper.toDTO(profissional);
        const proDomain = await this.profissionalMapper.toDomain(proDTO);

        const updateDTO = this.profissionalMapper.toUpdateDTO(update);
        return await this.profissionalMapper.updateDomain(proDomain, updateDTO);
    }

    async delete(id: String){
        verificaIdRecebido(id);
        const profissional = await deleteProfissional(id);
        return profissional;
    }
}
