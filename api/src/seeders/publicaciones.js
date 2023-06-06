let publicaciones = [
    {    
        "usuarioId": 2,
        "titulo": "Remera pokemon",
        "descripcion": "Remera con estampado de Pikachu y sus amigos para niños.",
        "precio": 20,
        "talleId": 5,
        "personaId": 3,
        "productoId": 13,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686077366/Awericana/remera_negra_pokemon_odzrhf.jpg"
    },
    {    
        "usuarioId": 2,
        "titulo": "Vestido para nena",
        "descripcion": "Vestido para nena de 4 aproximadamente con patron de corazones.",
        "precio": 15,
        "talleId": 2,
        "personaId": 3,
        "productoId": 34,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686089059/Awericana/vestido_nena_talle_7_rslclz.jpg"
    },
    {    
        "usuarioId": 2,
        "titulo": "Pantalon de jean gris",
        "descripcion": "Pantalon con poco uso para hombre.",
        "precio": 10,
        "talleId": 17,
        "personaId": 1,
        "productoId": 8,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686077830/Awericana/pantalon_jean_gris_alh50n.jpg"
    },
    {    
        "usuarioId": 2,
        "titulo": "Remera roja",
        "descripcion": "Remera roja de hombre talle M",
        "precio": 10,
        "talleId": 4,
        "personaId": 1,
        "productoId": 13,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686077366/Awericana/Camiseta_lisa_ggchrq.jpg"
    },
    {    
        "usuarioId": 3,
        "titulo": "Bufanda para niño",
        "descripcion": "Bufanda de color roja y azul con flecos.",
        "precio": 12,
        "talleId": 3,
        "personaId": 3,
        "productoId": 35,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686085385/Awericana/bufanda_nene_vyd9ly.jpg"
    },
    {    
        "usuarioId": 3,
        "titulo": "Sueter para mujer xxl",
        "descripcion": "Lo usé solo una vez. Color beige.",
        "precio": 24,
        "talleId": 7,
        "personaId": 2,
        "productoId": 25,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686089059/Awericana/sueter_mujer_xxl_favlyl.jpg"
    },
    {    
        "usuarioId": 3,
        "titulo": "Jogging para hombre",
        "descripcion": "Jogging gris claro para hombre.",
        "precio": 34,
        "talleId": 3,
        "personaId": 3,
        "productoId": 35,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686077366/Awericana/jogging_gris_rqasdm.jpg"
    },
    {    
        "usuarioId": 3,
        "titulo": "Gorra del Pato lucas",
        "descripcion": "Gorra para hombre con poco uso de color roja y negra.",
        "precio": 12,
        "talleId": 4,
        "personaId": 1,
        "productoId": 38,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686085385/Awericana/gorra_pato_lucas_aucee1.jpg"
    },
    {    
        "usuarioId": 4,
        "titulo": "Pollera con brillos",
        "descripcion": "Pollerita muy linda con poco uso.",
        "precio": 20,
        "talleId": 15,
        "personaId": 2,
        "productoId": 32,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686085385/Awericana/pollera_negra_brillos_c2c1en.jpg"
    },
    {    
        "usuarioId": 4,
        "titulo": "Vestido negro",
        "descripcion": "En muy buen estado. Talle S ",
        "precio": 27,
        "talleId": 3,
        "personaId": 2,
        "productoId": 34,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686089059/Awericana/vestido_negro_talle_s_o6fbzz.jpg"
    },
    {    
        "usuarioId": 4,
        "titulo": "Short gris para hombre",
        "descripcion": "Shortcito para hacer deportes xxl.",
        "precio": 10,
        "talleId": 7,
        "personaId": 1,
        "productoId": 5,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686085385/Awericana/short_deportivo_hombre_xxl_miu0hx.jpg"
    },
    {    
        "usuarioId": 4,
        "titulo": "Sombrero Lagomarsino",
        "descripcion": "Sombrero de color beige en buen estado.",
        "precio": 11,
        "talleId": 4,
        "personaId": 1,
        "productoId": 38,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686089059/Awericana/sombrero_lagomarsino_beige_M_jonc8u.jpg"
    },
    {    
        "usuarioId": 5,
        "titulo": "Buzo Have Hearth",
        "descripcion": "Buzo de color verde estampado y con cuello redondo.",
        "precio": 35,
        "talleId": 4,
        "personaId": 1,
        "productoId": 24,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686085385/Awericana/buzo_verde_M_Redondo_rg9rrp.jpg"
    },
    {    
        "usuarioId": 5,
        "titulo": "Bufanda rosa",
        "descripcion": "Bufanda de color rosa para nena.",
        "precio": 10,
        "talleId": 3,
        "personaId": 4,
        "productoId": 35,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686085386/Awericana/bufanda_nena_rdfxo3.jpg"
    },
    {    
        "usuarioId": 5,
        "titulo": "Camisa mangas larga a cuadros",
        "descripcion": "Camisa a cuadros de color azul para hombre",
        "precio": 25,
        "talleId": 3,
        "personaId": 1,
        "productoId": 19,
        "imagenPortada": "https://res.cloudinary.com/dew4ce360/image/upload/v1686089059/Awericana/camisa_cuadros_azul_S_kyfrxg.jpg"
    },

]; 

module.exports = {
    publicaciones,
  }; 