import { Injectable } from "@nestjs/common";
import prisma from "../../../prisma/prisma"
import type { Profissional } from "../models/profissional.model";
import { IProfissionalRepository } from "./profissionais";
import { ProfissionalMapper } from "../../application/mappers/profissional.mapper";
import { ProfissionalDTO, UpdateProfissionalDTO } from "../../interface/dto/profissional.dto";
import { deleteProfissional, getProfissionais, getProfissionalId, patchProfissional, postProfissional } from "../../persistence/profissionais";


@Injectable()
export class ProfissionalRepository implements IProfissionalRepository{
    constructor( 
        private readonly profissionalMapper : ProfissionalMapper 
    ){};

    public async getProfissionais() : Promise<ProfissionalDTO[]>{
        const profissionais = await getProfissionais();
        let pArray: ProfissionalDTO[] = [];
        for (const p of profissionais) {
            const pDTO : ProfissionalDTO = this.profissionalMapper.toDTO(p);
            pArray.push(pDTO);
        }
        return pArray;
    };

    public async getProfissionalId(id: String) : Promise<ProfissionalDTO> {
        const profissional = await getProfissionalId(id);
        const profissionalDTO = this.profissionalMapper.toDTO(profissional);
        return profissionalDTO;
    };

    public async postProfissional(body: any) : Promise<Profissional>{
        const profissionalDTO = this.profissionalMapper.toDTO(body);
        const profissionalDomain = await this.profissionalMapper.toDomain(profissionalDTO);

        await postProfissional(profissionalDomain);
        return profissionalDomain;
    };

    public async patchProfissional(id: String, body: any) : Promise<Profissional>{
        const profissional = getProfissionalId(id);
        const profissionalDTO = this.profissionalMapper.toDTO(profissional);
        const profissionalDomain = await this.profissionalMapper.toDomain(profissionalDTO);
        
        const update = this.profissionalMapper.toUpdateDTO(body);
        const updateProfissionalDomain = await this.profissionalMapper.updateDomain(profissionalDomain, update)
        await patchProfissional(updateProfissionalDomain);

        return updateProfissionalDomain;
    };

}