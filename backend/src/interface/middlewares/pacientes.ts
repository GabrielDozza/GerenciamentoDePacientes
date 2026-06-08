import { BadRequestException } from "@nestjs/common";

function verificaDadosPostBody(body: any) {
    if (body.nome === undefined)
        throw new BadRequestException({ message: "Digite um nome" });

    if (typeof body.nome !== "string")
        throw new BadRequestException({ message: "Nome precisa ser uma string" });

    if (body.dataNascimento === undefined)
        throw new BadRequestException({ message: "Digite uma data de nascimento" });

    if (typeof body.dataNascimento !== "string")
        throw new BadRequestException({ message: "Data de nascimento precisa ser uma string" });

    if (body.telefone !== undefined && typeof body.telefone !== "string")
        throw new BadRequestException({ message: "Telefone precisa ser uma string" });

    if (body.email !== undefined && typeof body.email !== "string")
        throw new BadRequestException({ message: "Email precisa ser uma string" });

    if (body.cpf !== undefined && typeof body.cpf !== "string")
        throw new BadRequestException({ message: "CPF precisa ser uma string" });

    if (body.endereco !== undefined && typeof body.endereco !== "string")
        throw new BadRequestException({ message: "Endereço precisa ser uma string" });

    if (body.profissao !== undefined && typeof body.profissao !== "string")
        throw new BadRequestException({ message: "Profissão precisa ser uma string" });

    if (body.origem !== undefined && typeof body.origem !== "string")
        throw new BadRequestException({ message: "Origem precisa ser uma string" });

    if (body.fotoPerfil !== undefined && typeof body.fotoPerfil !== "string")
        throw new BadRequestException({ message: "FotoPerfil precisa ser uma string" });
};

function verificaDadosPathBody(body: any) {
    if (body.nome === undefined)
        throw new BadRequestException({ message: "Digite um nome" });

    if (typeof body.nome !== "string")
        throw new BadRequestException({ message: "Nome precisa ser uma string" });

    if (body.dataNascimento === undefined)
        throw new BadRequestException({ message: "Digite uma data de nascimento" });

    if (typeof body.dataNascimento !== "string")
        throw new BadRequestException({ message: "Data de nascimento precisa ser uma string" });

    if (body.telefone !== undefined && typeof body.telefone !== "string")
        throw new BadRequestException({ message: "Telefone precisa ser uma string" });

    if (body.email !== undefined && typeof body.email !== "string")
        throw new BadRequestException({ message: "Email precisa ser uma string" });

    if (body.cpf !== undefined && typeof body.cpf !== "string")
        throw new BadRequestException({ message: "CPF precisa ser uma string" });

    if (body.endereco !== undefined && typeof body.endereco !== "string")
        throw new BadRequestException({ message: "Endereço precisa ser uma string" });

    if (body.profissao !== undefined && typeof body.profissao !== "string")
        throw new BadRequestException({ message: "Profissão precisa ser uma string" });

    if (body.origem !== undefined && typeof body.origem !== "string")
        throw new BadRequestException({ message: "Origem precisa ser uma string" });

    if (body.fotoPerfil !== undefined && typeof body.fotoPerfil !== "string")
        throw new BadRequestException({ message: "FotoPerfil precisa ser uma string" });
};

function verificaIdReceibo(id: String) {
    if (isNaN(Number(id))) {
        throw new BadRequestException({ message: "Id deve ser um número inteiro" })
    };
};

export { verificaDadosPostBody, verificaDadosPathBody, verificaIdReceibo };