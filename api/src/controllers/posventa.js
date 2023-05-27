const transporter = require("../config/mailer");
const {Publicacion} = require("../db");

const verificarDisponibilidadReclamo= async (publicacionId, compradorId) => {
    const publicacion = await Publicacion.findOne({
        where: {
            publicacionId,
            compradorId
        }
    });
    
    if(!publicacion){
        return res.status({msg: `El usuario no ha comprado el producto indicado.`});
    }

    if(publicacion.estadoReclamo !== 'hecho'){
    
        const fechaInicio = new Date(publicacion.fechaEntrega); // fecha inicial
        const fechaActual = new Date(); // fecha actual

        const tiempoTranscurrido = fechaActual.getTime() - fechaInicio.getTime(); // diferencia de tiempo en milisegundos
        const diasTranscurridos = Math.floor(tiempoTranscurrido / (1000 * 60 * 60 * 24)); // diferencia de tiempo en días

        if( diasTranscurridos <= 7 ){
            publicacion.estadoReclamo === 'permitido';
            res.json(publicacion.estadoReclamo);
        }
        if( diasTranscurridos > 7 ){
            publicacion.estadoReclamo === 'bloqueado';
            res.json(publicacion.estadoReclamo);
        }
    }

    res.json(publicacion.estadoReclamo);
}

const enviarReclamo = async ({nombre, correo, subject, message, usuarioId, publicacionId }) => {
    await transporter.sendMail({
        from: `"${nombre}" <${correo}>'`, // sender address
        to: 'awericana@gmail.com', // list of receivers
        subject, // Subject line
        text: `[ Usuario: ${usuarioId} ] [ reclamo sobre:  ${publicacionId} ] ${message}` // plain text body
        //html: "<b>Hello world?</b>", // html body
      });
}

const iniciarReclamo = async (req, res) => {
    const {nombre, correo, subject, message, usuarioId, publicacionId} = req.body;

    if(await verificarDisponibilidadReclamo({publicacionId, compradorId}) === 'habilitado'){

        await enviarReclamo({nombre, correo, subject, message, usuarioId, publicacionId });

        res.json({msg: "El reclamo ha sido enviado"});
    }

}

const actualizarEstadoEnvio = async (req, res) => {
    const {publicacionId, compradorId} = req.body;
    
    await simularTracking(publicacionId, compradorId);

    res.json({msg: 'Estado actualizado'});
}

module.exports = {
    actualizarEstadoEnvio,
    iniciarReclamo
}