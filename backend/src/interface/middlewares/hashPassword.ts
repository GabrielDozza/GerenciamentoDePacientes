import crypto from "crypto";

function gerarSenhaHash(senha: string) {
    const senhaHash = crypto.createHash(senha);
    return senhaHash;
};

export default gerarSenhaHash;