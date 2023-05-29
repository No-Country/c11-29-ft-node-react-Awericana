const {Publicacion} = require("../db");

const simularTracking = async (publicacionId, compradorId) => {
    const publicacion = await Publicacion.findOne({
        where: {
            id: publicacionId,
            compradorId
        }
    });

    if(!publicacion){
        return console.log("No se encontró la compra hecha por el usuario.");
    }

    if(publicacion.estadoEntrega !== 'Entregado'){

        if(publicacion.tipoEntrega === 'Retiro'){
            if(publicacion.estadoEntrega === null){
                const cambios = {
                    estadoEntrega: 'Esperando retiro'
                }

                await publicacion.update(cambios);
            }
        
        }

        if(publicacion.tipoEntrega === 'Envio'){
            if(publicacion.estadoEntrega === null){
                const cambios = {
                    estadoEntrega: 'Enviado'
                }

                await publicacion.update(cambios);
            }
        }

    
        if(publicacion.estadoEntrega === "Enviado" || publicacion.estadoEntrega === "Esperando retiro" ){
            const cambios = {
                estadoEntrega: 'Entregado',
                fechaEntrega: new Date()
            }

            await publicacion.update(cambios);
        }
       
    }

}

module.exports = {
     simularTracking
}
