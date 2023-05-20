const {TipoProducto, TipoPersona} = require("../db");


const obtenerTipoProducto = async (req, res) => {
    
    const tipoDeProductos = await TipoProducto.findAll()

    res.status(200).json({tipoProductos: tipoDeProductos})
}

const crearTipoProducto = async (req, res) => {
    const { nombre, tipoPersona, ...resto } = req.body;

    try {
        if (!nombre) {
            return res.status(400).json({
                msg: 'El campo "nombre" es requerido.'
            });
        }

        const tipoProducto = await TipoProducto.create({ nombre, ...resto });
        await tipoProducto.save();

        console.log(tipoProducto);

        const tipoPersonaId = await TipoPersona.findOne({
            where: {
                nombre: tipoPersona
            }
        });

        tipoProducto.setTipoPersona(tipoPersonaId);

        res.status(201).json({
            msg: "El tipo de producto ha sido creado",
            tipoProducto
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            msg: 'Error en el servidor'
        });
    }
};


module.exports ={
    // configurarDescuento,
    // obtenerPublicaciones,
    obtenerTipoProducto,
    crearTipoProducto,
    // actualizarPublicacion,
    // eliminarPublicacion
}