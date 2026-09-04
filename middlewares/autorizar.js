const normalizar = (texto) => {
    if (!texto) return ""
    return texto
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
}

const autorizar = (...perfisPermitidos) => {
    return (req, res, next) => {
        if (!req.usuario || !req.usuario.perfil) {
            return res.status(401).json({
                mensagem: "Usuário não autenticado ou sem perfil definido"
            })
        }

        const perfilUsuario = normalizar(req.usuario.perfil)
        const permitidos = perfisPermitidos.map(normalizar)

        if (!permitidos.includes(perfilUsuario)) {
            return res.status(403).json({
                mensagem: "Você não tem permissão para acessar este recurso"
            })
        }

        next()
    }
}

export default autorizar