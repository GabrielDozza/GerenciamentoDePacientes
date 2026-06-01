import { Body, Controller, Post } from "@nestjs/common";
import { gerarToken } from "../middlewares/tokenJwt";
import { getProfissionalLogin } from "../../persistence/profissionais";
import gerarSenhaHash from "../middlewares/hashPassword";

@Controller("auth")
export class authController {

    @Post("login")
    async postAuth(@Body() body: any) {
        const profissioanl = await getProfissionalLogin(body.email, gerarSenhaHash(body.senha));

        const token = gerarToken(profissioanl);
        return token;
    };
};