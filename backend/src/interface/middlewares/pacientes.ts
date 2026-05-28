import { ForbiddenException } from "@nestjs/common"

function verificaDadosPostBody(body: any) {
    if (body.nome == undefined) { throw new ForbiddenException({ Message: "Digite um nome" }) };
    if (typeof (body.nome) !== "string") { throw new ForbiddenException({ message: "Nome precisa ser uma string" }) };

    if (body.dataNascimento == undefined) { throw new ForbiddenException({ Message: "Digite uma data de nascimento" }) };
    if (typeof (body.dataNascimento) !== "string") { throw new ForbiddenException({ Message: "data de nascimento precisa ser uma string" }) };

    if (body.telefone == undefined) { throw new ForbiddenException({ Message: "Digite um telefone" }) };
    if (typeof (body.telefone) !== "string") { throw new ForbiddenException({ Message: "Telefone precisa ser uma string" }) };

    if (body.email == undefined) { throw new ForbiddenException({ Message: "Digite um email" }) };
    if (typeof (body.email) !== "string") { throw new ForbiddenException({ Message: "Email precisa ser uma string" }) };

    if (body.cpf == undefined) { throw new ForbiddenException({ Message: "Digite um cpf" }) };
    if (typeof (body.cpf) !== "string") { throw new ForbiddenException({ Message: "Cpf precisa ser uma string" }) };

    if (body.endereco == undefined) { throw new ForbiddenException({ Message: "Digite um endereco" }) };
    if (typeof (body.endereco) !== "string") { throw new ForbiddenException({ Message: "Endereço precisa ser uma string" }) };

    if (body.profissao == undefined) { throw new ForbiddenException({ Message: "Digite uma profissao" }) };
    if (typeof (body.profissao) !== "string") { throw new ForbiddenException({ Message: "Profissão precisa ser uma string" }) };

    if (body.origem == undefined) { throw new ForbiddenException({ Message: "Digite uma origem" }) };
    if (typeof (body.origem) !== "string") { throw new ForbiddenException({ Message: "Origem precisa ser uma string" }) };
};

function verificaDadosPathBody(body: any) {
    if (typeof (body.nome) !== "string") { throw new ForbiddenException({ message: "Nome precisa ser uma string" }) };
    if (typeof (body.dataNascimento) !== "string") { throw new ForbiddenException({ Message: "data de nascimento precisa ser uma string" }) };
    if (typeof (body.telefone) !== "string") { throw new ForbiddenException({ Message: "Telefone precisa ser uma string" }) };
    if (typeof (body.email) !== "string") { throw new ForbiddenException({ Message: "Email precisa ser uma string" }) };
    if (typeof (body.cpf) !== "string") { throw new ForbiddenException({ Message: "Cpf precisa ser uma string" }) };
    if (typeof (body.endereco) !== "string") { throw new ForbiddenException({ Message: "Endereço precisa ser uma string" }) };
    if (typeof (body.profissao) !== "string") { throw new ForbiddenException({ Message: "Profissão precisa ser uma string" }) };
    if (typeof (body.origem) !== "string") { throw new ForbiddenException({ Message: "Origem precisa ser uma string" }) };
};

function verificaIdReceibo(id: String) {
    if(isNaN(Number(id))) {throw new ForbiddenException({message: "Id não fornecido"})}
};

function trataErrosPostPaciente(erro) {
    if(erro.code == "P2002") {return {message: "Cpf já cadastrado!"}};
};

export {verificaDadosPostBody, verificaDadosPathBody, verificaIdReceibo, trataErrosPostPaciente};