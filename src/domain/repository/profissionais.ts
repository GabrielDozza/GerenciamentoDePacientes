import { ProfissionalDTO, UpdateProfissionalDTO } from "../../interface/dto/profissional.dto";
import { Profissional } from "../models/profissional.model";

export interface IProfissionalRepository{
    getProfissionais() : Promise<ProfissionalDTO[]>;
    getProfissionalId(id: String) : Promise<ProfissionalDTO | null>;
    postProfissional(body: any) : Promise<Profissional>;
    patchProfissional(id: String, body: any) : Promise<Profissional | null>;
}