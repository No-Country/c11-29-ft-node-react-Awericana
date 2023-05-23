const { Op } = require("sequelize");
const {Publicacion} = require("../db");

const buscar = async(req, res) => {
    const {
        orden = 'DESC',
        genero,
        categoria,
        precioMin,
        precioMax,
        talle,
        termino,
        oferta,
    } = req.query;

    const filtros = {};

    //si la variable es True se agregara el campo al filtro   
    
    termino     &&  (filtros.titulo = {[Op.iLike]: '%' + termino + '%'}); // busqueda insensible   
    genero      &&  (filtros.tipoPersonaId = genero);
    categoria   &&  (filtros.tipoProductoId = categoria);
    talle       &&  (filtros.talleId = talle);
    oferta      &&  (filtros.oferta = true);

    if(precioMin && precioMax ){
        filtros.precio = { [Op.between]: [precioMin, precioMax] };
    }else if(precioMax){
        filtros.precio = { [Op.lte]: precioMax }; //$lte: menor o igual que
    }else if(precioMin){
        filtros.precio = { [Op.gte]: precioMin }; //$gto: mayor o igual que
    } 
    
    const publicaciones = await Publicacion.findAll({
       where: filtros,
       order: [['precio', orden]]
    }); 

    res.json(publicaciones);
}

module.exports = {
    buscar
}