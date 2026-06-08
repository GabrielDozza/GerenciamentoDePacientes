import { Evolucao } from "../models/evolucao.model";

export interface IEvolucaoRepository{
    getEvolucoesPaciente(id: String) : Promise<Evolucao[]>;
    postEvolucaoPaciente(body: any) : Promise<Evolucao>;
}