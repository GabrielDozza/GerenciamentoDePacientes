import { BadRequestException, UnauthorizedException } from "@nestjs/common";
import jwt from "jsonwebtoken";

function geraradorToken(body: any) {
    const payload = {
        id: body.id,
        nome: body.nome,
        email: body.email
    };

    const key = process.env.JWT_TOKEN as string;
    const token = jwt.sign(payload, key, { expiresIn: "16h" });

    return token;
};

function verificadorToken(token: any) {
    try {
        const key = process.env.JWT_TOKEN as string;
        const payload = jwt.verify(token, key) as any;

        return payload;
    } catch(erro: any) {
        throw new UnauthorizedException({ message: "Token inválido" });
    };
};

export { geraradorToken, verificadorToken };