export const Data = [{
        id: '1',
        name: "Lampara Colgante",
        description: "Lampara de pared, madera de eucalipto, foco vintage.",
        price: 4500,
        image: "../img/carrito01.jpeg",
        stock: 10,
        category: "hogar"
    },
    {
        id: '2',
        name: "Soporte Bicicleta",
        description: "Encastre metalico en eje rueda delantera",
        price: 6500,
        image: "../img/carrito02.jpeg",
        stock: 10,
        category: "hogar"
    },
    {
        id: '3',
        name: "Escritorio Revatible",
        description: "Estructura metalica, tapa de paraiso.",
        price: 8000,
        image: "../img/carrito03.jpeg",
        stock: 10,
        category: "industria"
    },
    {
        id: '4',
        name: "Tablas para Picada",
        description: "Madera de eucalipto. Incluye cera para mantenimiento.",
        price: 3000,
        image: "../img/carrito04.jpeg",
        stock: 10,
        category: "hogar"
    },
    {
        id: '5',
        name: "Perchero de Pared",
        description: "Madera de eucalipto laqueada con perchas aluminio mate.",
        price: 5000,
        image: "../img/carrito05.jpeg",
        stock: 10,
        category: "hogar"
    },
    {
        id: '6',
        name: "Lampara Hexagonal",
        description: "Lampara de mesa, madera de eucalipto, con foco vintage.",
        price: 7000,
        image: "../img/carrito06.jpeg",
        stock: 10,
        category: "hogar"
    },
    {
        id: '7',
        name: "Perchero Gancho Hamaca",
        description: "Madera de eucalipto laqueada con perchas de hamaca Paraguaya.",
        price: 5000,
        image: "../img/carrito07.jpeg",
        stock: 10,
        category: "industria"
    },
    {
        id: '8',
        name: "Cuadro para Fotos",
        description: "Marco en madera de Kiri. Incluye diez broches para colgar fotosgit.",
        price: 4500,
        image: "../img/carrito08.jpeg",
        stock: 10,
        category: "otras"
    },
]

const getFetch = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(Data)

        }, 2000);
    } else {
        reject(console.log("No hay datos"))
    }
})

export default getFetch;