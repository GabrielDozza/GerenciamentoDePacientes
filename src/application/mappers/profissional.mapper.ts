import { Injectable } from "@nestjs/common";
import { Profissional } from "../../domain/models/profissional.model";
import { ProfissionalDTO, UpdateProfissionalDTO } from "../../interface/dto/profissional.dto";
import { verificaDadosPostProfissionais, verificaDadosPatchProfissionais } from "../../interface/middlewares/profissionais";


@Injectable()
export class ProfissionalMapper {
    public toDomain = async (profissionalDTO: ProfissionalDTO) : Promise<Profissional> => {
        const profissional = new Profissional(
            profissionalDTO.id,
            profissionalDTO.nome,
            profissionalDTO.email,
            profissionalDTO.senha,
            profissionalDTO.especialidade,
            profissionalDTO.fotoPerfil,
        );
        return profissional;
    }

    public toDTO = (profissional: Profissional | any) : ProfissionalDTO => {
        verificaDadosPostProfissionais(profissional);
        return {
            id: profissional.id,
            nome: profissional.nome,
            email: profissional.email,
            senha: profissional.senha,
            especialidade: profissional.especialidade,
            fotoPerfil: profissional.fotoPerfil,
        };
    }

    public toUpdateDTO = (profissional : any) : UpdateProfissionalDTO => {
        verificaDadosPatchProfissionais(profissional)
        return {
            nome: profissional?.nome?? undefined,
            email: profissional?.email?? undefined,
            especialidade: profissional?.especialidade?? undefined,
            fotoPerfil: profissional?.fotoPerfil?? undefined
        }
    }

    public updateDomain = async (profissional: Profissional, updateProfissionalDTO: UpdateProfissionalDTO) : Promise<Profissional> => {
        if (updateProfissionalDTO.nome) profissional.nome = updateProfissionalDTO.nome;
        if (updateProfissionalDTO.email) profissional.email = updateProfissionalDTO.email;
        if (updateProfissionalDTO.especialidade) profissional.especialidade = updateProfissionalDTO.especialidade;
        if (updateProfissionalDTO.fotoPerfil) profissional.fotoPerfil = updateProfissionalDTO.fotoPerfil;
            
        return profissional;
    }

}