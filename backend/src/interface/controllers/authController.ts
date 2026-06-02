import { Body, Controller, ForbiddenException, Get, Header, Headers, Post } from "@nestjs/common";
import { geraradorToken, verificadorToken } from "../middlewares/tokenJwt";
import { getProfissionalLogin } from "../../persistence/profissionais";
import gerarSenhaHash from "../middlewares/hashPassword";
import verificadorAuthLogin from "../middlewares/auth";

@Controller("auth")
export class authController {

    @Post("login")
    async postAuth(@Body() body: any) {
        const verificacao = verificadorAuthLogin(body);
        return verificacao;
    };

    @Post("token")
    async verificaToken(@Headers("Authorization") token: String) {
        const verificacao = verificadorToken(token);
        return verificacao;
    };
};