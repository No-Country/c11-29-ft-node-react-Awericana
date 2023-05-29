const { simularTracking } = require("../Helpers/simularTracking");
const transporter = require("../config/mailer");
const {Publicacion, Usuario} = require("../db");

const verificarDisponibilidadReclamo= async (publicacionId, compradorId) => {
    let estado = null;
    const publicacion = await Publicacion.findOne({
        where: {
            id: publicacionId,
            compradorId,
            estado: 'finalizada',
            estadoEntrega: 'Entregado'
        }
    });   
    
    if(!publicacion){
        return 'error'
    }

    estado = publicacion.estadoReclamo;

    if(publicacion.estadoReclamo !== 'hecho' && publicacion.estadoReclamo !== 'bloqueado' ){
         
        const fechaInicio = new Date(publicacion.fechaEntrega); // fecha inicial
        const fechaActual = new Date(); // fecha actual

        const tiempoTranscurrido = fechaActual.getTime() - fechaInicio.getTime(); // diferencia de tiempo en milisegundos
        const diasTranscurridos = Math.floor(tiempoTranscurrido / (1000 * 60 * 60 * 24)); // diferencia de tiempo en días

        if( diasTranscurridos <= 7 ){
            publicacion.update({ estadoReclamo: 'permitido' })
            estado = 'permitido';
        }
        if( diasTranscurridos > 7 ){
            publicacion.update({ estadoReclamo: 'bloqueado' })
            estado = 'bloqueado';
        } 
    }
    
    return estado;
}

const enviarReclamo = async ({nombre, correo, subject, message, compradorId, publicacionId }) => {
    console.log('Mail enviado');
    /*await transporter.sendMail({
        from: `"${nombre}" <${correo}>'`, 
        to: 'awericana@gmail.com', 
        subject, 
        text: `[ Comprador: ${compradorId} ] [ reclamo sobre:  ${publicacionId} ] ${message}` 
        //html: "<b>Hello world?</b>", // html body
      });*/

      return true;
}

const iniciarReclamo = async (req, res) => {
    const {nombre, correo, subject, message, compradorId, publicacionId} = req.body;

    if(await verificarDisponibilidadReclamo(publicacionId, compradorId) === 'permitido'){

        const exito = await enviarReclamo({nombre, correo, subject, message, compradorId, publicacionId });

        if(exito){
            
            const publicacion = await Publicacion.findOne({
                where: {
                    id: publicacionId,
                    compradorId,
                    estado: 'finalizada',
                    estadoEntrega: 'Entregado'
                }
            });

            await publicacion.update({ estadoReclamo: 'hecho' });

            res.json({msg: "El reclamo ha sido enviado"});
        }else{
            res.json({msg: "No se ha podido enviar el reclamo"});
        }
        
    }else{
        res.json({msg: "No permitido"});
    }

}

const actualizarEstadoEnvio = async (req, res) => {
    const {publicacionId, compradorId} = req.body;
    
    await simularTracking(publicacionId, compradorId);

    res.json({msg: 'Estado actualizado'});
}

const revelarVendedor = async (req, res) => {
    const {publicacionId, usuarioId} = req.body;

    const publicacion = await Publicacion.findOne({
        where: {
            id: publicacionId,
            compradorId: usuarioId
        }
    })

    if(publicacion){
        const vendedor = await Usuario.findByPk(publicacion.usuarioId);

        res.json({email: vendedor.email});

    }else{
        res.json('');
    }

}

module.exports = {
    actualizarEstadoEnvio,
    iniciarReclamo,
    revelarVendedor
}