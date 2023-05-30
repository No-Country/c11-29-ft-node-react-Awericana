const { Direccion, Usuario, Pais } = require("../db");

// obtenerDirecciones,
//     obtenerDireccion,
//     crearDireccion,
//     modificarDireccion
const obtenerDirecciones = async (req, res) => {

}

const obtenerDireccion = async (req, res) => {

}

const crearDireccion = async (req, res) => {
    const { calle, numeracion, codigoPostal, ciudad, provincia, idPais, idUsuario } = req.body

    try {
        const usuario = await Usuario.findByPk(idUsuario)

        if(!usuario){
            return res.status(404).json({msg: `Usuario con ID: ${idUsuario} no encontrado`})
        }

        const direccion = await Direccion.create({
            calle,
            numeracion,
            codigoPostal,
            ciudad,
            provincia
        })

        const pais = await Pais.findByPk(idPais)

        await direccion.setUsuario(usuario)
        await direccion.setPais(pais)

        res.status(200).json(direccion)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}

const modificarDireccion = async (req, res) => {

}

module.exports = { obtenerDirecciones, obtenerDireccion, crearDireccion, modificarDireccion}