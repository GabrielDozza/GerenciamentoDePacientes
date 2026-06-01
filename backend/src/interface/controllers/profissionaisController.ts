import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { deleteProfissional, getProfissionais, patchProfissional, postProfissional } from "../../persistence/profissionais";

@Controller("profissionais")
export class proffionaisController {
    // profissionais
    @Get()
    async getProfissionais() {
        const profissionais = getProfissionais();
        return profissionais;
    };

    @Post()
    async postProfissional(@Body() body: any) {
        const profissional = postProfissional(body);
        return profissional;
    };

    @Patch()
    async patchProfissional(@Param() idRecebido: String, @Body() body: any) {
        const profissional = patchProfissional(idRecebido, body);
        return profissional;
    }

    @Delete()
    async deleteProfissional(@Param() idRecebido: string) {
        const profissional = deleteProfissional(idRecebido);
        return profissional;
    };
};