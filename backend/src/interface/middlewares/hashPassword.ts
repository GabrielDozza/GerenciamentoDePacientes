import crypto from "crypto";

function gerarSenhaHash(senha: string) {
    const senhaHash = crypto.createHash("sha256").update(senha).digest("hex");
    return senhaHash;
};

export default gerarSenhaHash;