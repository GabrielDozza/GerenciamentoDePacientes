import prisma from "../../prisma/prisma";

async function getProfissionais() {
    const profissionais = prisma.profissional.findMany({});
    return profissionais;
};

async function postProfissional(body: any) {
    const profissional = prisma.profissional.create({
        data: {
            nome: body.nome,
            email: body.email,
            senha: body.senha,
            especialidade: body.especialidade
        }
    });

    return profissional;
};

async function patchProfissional(idRecebido: String, body: any) {
    const profissional = prisma.profissional.update({
        where: {id: Number(idRecebido)},
        data: {
            ...body
        }
    });

    return profissional;
};

async function deleteProfissional(idRecebido: String) {
    const profissional = prisma.profissional.delete({
        where: {id: Number(idRecebido)}
    });

    return profissional;
};

async function getProfissionalId(idRecebido: String) {
    const profissional = prisma.profissional.findFirst({
        where: {id: Number(idRecebido)}
    });
    return profissional;
};

async function getProfissionalLogin(emailRecebido: string, senhaRecebida: string) {
    const profissional = prisma.profissional.findFirst({
        where: {email: emailRecebido, senha: senhaRecebida}
    });
    return profissional;
};

export { getProfissionais, postProfissional, patchProfissional, deleteProfissional, getProfissionalId, getProfissionalLogin };