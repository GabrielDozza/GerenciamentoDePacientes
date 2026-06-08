import { ForbiddenException } from "@nestjs/common";
import { getProfissionalLogin } from "../../persistence/profissionais";
import gerarSenhaHash from "./hashPassword";
import { geraradorToken } from "./tokenJwt";

async function verificadorAuthLogin(body: any) {
    const profissional = await getProfissionalLogin(body.email, gerarSenhaHash(body.senha));

    if (profissional?.email !== undefined) {
        const token = geraradorToken(profissional);
        return token;
    } else {
        throw new ForbiddenException({ Message: "Nenhum usuario encontrado" });
    };
};

export default verificadorAuthLogin;