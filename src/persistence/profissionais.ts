import prisma from "../../prisma/prisma";
import { Profissional } from "../domain/models/profissional.model";

async function getProfissionais() {
    const profissionais = await prisma.paciente.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                senha: true,
                especialidade: true,
                fotoPerfil: true
            }
        });
    return profissionais;
};

async function postProfissional(profissional: Profissional) {
    const novoProfissional = prisma.profissional.create({
        data: {
            nome: profissional.nome,
            email: profissional.email,
            senha: profissional.senha,
            especialidade: profissional.especialidade,
            fotoPerfil: profissional.fotoPerfil
        }
    });

    return novoProfissional;
};

async function patchProfissional(profissional: Profissional) {
    const updateProfissional = prisma.profissional.update({
        where: {
            id: Number(profissional.id)
        },
        data: {
            nome: profissional?.nome,
            email: profissional?.email,
            senha: profissional?.senha,
            especialidade: profissional?.especialidade
        }
    });
    return updateProfissional;
}

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