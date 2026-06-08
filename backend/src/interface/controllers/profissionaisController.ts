import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { deleteProfissional, getProfissionais, getProfissionalId, patchProfissional, postProfissional } from "../../persistence/profissionais";
import {verificaDadosPostProfissionais, verificaDadosPatchProfissionais, verificaIdReceibo} from "../middlewares/profissionais";
import gerarSenhaHash from "../middlewares/hashPassword";

@Controller("profissionais")
export class profissionaisController {
    // profissionais
    @Get()
    async getProfissionais() {
        const profissionais = getProfissionais();
        return profissionais;
    };

    @Get(":id")
    async getProfissionalId(@Param("id") idRecebido: String) {
        const profissional = getProfissionalId(idRecebido);
        return profissional;
    };

    @Post()
    async postProfissional(@Body() body: any) {
        verificaDadosPostProfissionais(body);
        const bodySenhaHash = body; 
        bodySenhaHash.senha = gerarSenhaHash(body.senha);

        const profissional = postProfissional(bodySenhaHash);
        return profissional;
    };

    @Patch(":id")
    async patchProfissional(@Param("id") idRecebido: String, @Body() body: any) {
        verificaIdReceibo(idRecebido);
        verificaDadosPatchProfissionais(body);

        const profissional = patchProfissional(idRecebido, body);
        return profissional;
    }

    @Delete(":id")
    async deleteProfissional(@Param("id") idRecebido: string) {
        verificaIdReceibo(idRecebido);

        const profissional = deleteProfissional(idRecebido);
        return profissional;
    };
};