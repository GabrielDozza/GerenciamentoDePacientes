import { ForbiddenException } from "@nestjs/common"

function verificaDadosBody(body: any) {
    if (body.nome == null) { throw new ForbiddenException({ Message: "Digite um nome" }) };
    if (typeof (body.nome) !== "string") { throw new ForbiddenException({ message: "Nome precisa ser uma string" }) };

    if (body.dataNascimento == null) { throw new ForbiddenException({ Message: "Digite uma data de nascimento" }) };
    if(typeof(body.dataNascimento) !== "string") {throw new ForbiddenException({Message: "data de nascimento precisa ser uma string"})};

    if (body.telefone == null) { throw new ForbiddenException({ Message: "Digite um telefone" }) };
    if (typeof (body.telefone) !== "string") { throw new ForbiddenException({ Message: "Telefone precisa ser uma string" }) };

    if (body.email == null) { throw new ForbiddenException({ Message: "Digite um email" }) };
    if (typeof (body.email) !== "string") { throw new ForbiddenException({ Message: "Email precisa ser uma string" }) };

    if (body.cpf == null) { throw new ForbiddenException({ Message: "Digite um cpf" }) };
    if (typeof (body.cpf) !== "string") { throw new ForbiddenException({ Message: "Cpf precisa ser uma string" }) };

    if (body.endereco == null) { throw new ForbiddenException({ Message: "Digite um endereco" }) };
    if (typeof (body.endereco) !== "string") { throw new ForbiddenException({ Message: "Endereço precisa ser uma string" }) };

    if (body.profissao == null) { throw new ForbiddenException({ Message: "Digite uma profissao" }) };
    if (typeof (body.profissao) !== "string") { throw new ForbiddenException({ Message: "Profissão precisa ser uma string" }) };

    if (body.origem == null) { throw new ForbiddenException({ Message: "Digite uma origem" }) };
    if (typeof (body.origem) !== "string") { throw new ForbiddenException({ Message: "Origem precisa ser uma string" }) };
};

export default verificaDadosBody;