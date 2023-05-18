const { Router } = require("express");
const { Producto, Talle, Color, Marca, Categoria, conn } = require("../db.js");

const router = Router();


router.post('/', async (req, res) => {
    const { nombre, descripcion, talleId, colorId, marcaId, categoriaId } = req.body;
    
    if( !nombre || !descripcion || !talleId || !colorId || !marcaId || !categoriaId){
        return res.status(400).send('Debe completar enviar todos los campos')
    }
    try {
      
        await conn.transaction(async (t) => {
            const nuevoProducto = await Producto.create({
                nombre,
                descripcion,
            }, { transaction: t });

            // Realiza otras operaciones dentro de la transacción si es necesario

            // Ejemplo: Actualizar otros modelos relacionados

            // Confirma la transacción
            await t.commit();

            res.status(200).json(nuevoProducto);
        });
          
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/', async (req, res) => {

})


module.exports = router;