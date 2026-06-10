import { Evolucao } from "../models/evolucao.model";
import { Paciente } from "../models/paciente.model";

export interface IEvolucaoRepository{
    getEvolucoesPaciente(paciente : Paciente) : Promise<Evolucao[]>;
    postEvolucaoPaciente(body: any) : Promise<Evolucao>;
}