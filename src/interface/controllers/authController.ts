import { Body, Controller, ForbiddenException, Get, Header, Headers, Post } from "@nestjs/common";
import { geradorToken, verificadorToken } from "../middlewares/tokenJwt";
import { getProfissionalLogin } from "../../persistence/profissionais";
import gerarSenhaHash from "../middlewares/hashPassword";

@Controller("auth")
export class authController {

    @Post("login")
    async postAuth(@Body() body: any) {
        const profissional = await getProfissionalLogin(body.email, gerarSenhaHash(body.senha));


        if (profissional?.email !== undefined) {
            const token = geradorToken(profissional);
            return token;
        } else {
            throw new ForbiddenException({ Message: "Nenhum usuario encontrado" });
        };
    };

    @Post("token")
    async verificaToken(@Headers("Authorization") token: String) {
        try {
            const verificacao = verificadorToken(token);
            return verificacao;
        } catch (erro) {
            return erro;
        };
    };
};