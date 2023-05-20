const { Router } = require("express");
const { Producto, Talle, Color, Marca, Categoria, conn } = require("../db.js");


const router = Router();

router.post('/', async (req, res) => {

})

router.get('/', async (req, res) => {
     try {
        const tipoProducto = await Producto.findAll()

        return tipoProducto ? res.status(200).json(tipoProducto) :
                                res.status(404).json({message: "Tipos de productos no encontrados"})
     }catch(error){
        return res.status(400).json({error: error.message})
     }
})


module.exports = router;
