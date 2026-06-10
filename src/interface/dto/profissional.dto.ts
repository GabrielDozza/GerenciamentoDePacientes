import { Optional } from "@nestjs/common";
import { IsEmail, IsNumber, IsString } from "class-validator";

export class ProfissionalDTO{
    @IsNumber()
    id: number;

    @IsString()
    nome: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    senha: string;

    @IsString()
    especialidade: string;

    @Optional()
    @IsString()
    fotoPerfil?: string;

    constructor(id: number, nome: string, email: string, especialidade: string, fotoPerfil?:string){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.especialidade = especialidade;
        this.fotoPerfil = fotoPerfil;
    }
}

export class UpdateProfissionalDTO{
    @Optional()
    @IsString()
    nome?: string;

    @Optional()
    @IsString()
    @IsEmail()
    email?: string;

    @Optional()
    @IsString()
    senha?: string;

    @Optional()
    @IsString()
    especialidade?: string;

    @Optional()
    @IsString()
    fotoPerfil?: string;

    constructor(nome?: string, email?: string, especialidade?: string, fotoPerfil?:string){
        this.nome = nome;
        this.email = email;
        this.especialidade = especialidade;
        this.fotoPerfil = fotoPerfil;
    }
}