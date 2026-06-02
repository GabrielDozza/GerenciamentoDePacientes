import { BadRequestException, ForbiddenException } from "@nestjs/common";

function verificaDadosPostProfissionais(body: any) {
    if (body.nome == undefined) { throw new ForbiddenException({ Message: "Digite um nome" }) };
    if (typeof (body.nome) !== "string") { throw new ForbiddenException({ Message: "Nome precisa ser uma string" }) };

    if (body.email == undefined) { throw new ForbiddenException({ Message: "Digite um email" }) };
    if (typeof (body.email) !== "string") { throw new ForbiddenException({ Message: "Email precisa ser uma string" }) };

    if (body.senha == undefined) { throw new ForbiddenException({ Message: "Digite uma Senha" }) };
    if (typeof (body.senha) !== "string") { throw new ForbiddenException({ Message: "Senha precisa ser uma string" }) };

    if (body.especialidade == undefined) { throw new ForbiddenException({ Message: "Digite uma especialidade" }) };
    if (typeof (body.especialidade) !== "string") { throw new ForbiddenException({ Message: "Especialidade precisa ser uma string" }) };
};

function verificaDadosPatchProfissionais(body: any) {
    if (typeof (body.nome) !== "string") { throw new ForbiddenException({ Message: "Nome precisa ser uma string" }) };
    if (typeof (body.email) !== "string") { throw new ForbiddenException({ Message: "Email precisa ser uma string" }) };
    if (typeof (body.senha) !== "string") { throw new ForbiddenException({ Message: "Senha precisa ser uma string" }) };
    if (typeof (body.especialidade) !== "string") { throw new ForbiddenException({ Message: "Especialidade precisa ser uma string" }) };
};

function verificaIdReceibo(id: String) {
    if(isNaN(Number(id))) {throw new BadRequestException({message: "Id deve ser um numero inteiro"})}
};

export { verificaDadosPostProfissionais, verificaDadosPatchProfissionais, verificaIdReceibo };