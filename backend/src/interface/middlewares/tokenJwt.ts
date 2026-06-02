import jwt from "jsonwebtoken";

function gerarToken(body: any) {
    const payload = {
        id: body.id,
        nome: body.nome,
        email: body.email
    };

    const key = process.env.JWT_TOKEN as string;
    const token = jwt.sign(payload, key, { expiresIn: "1h" });

    return token;
};

function verificaToken(token: any) {
    const key = process.env.JWT_TOKEN as string;
    const payload = jwt.verify(token, key) as any;

    return payload;
};

export { gerarToken, verificaToken };