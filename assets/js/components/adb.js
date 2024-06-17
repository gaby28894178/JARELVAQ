




// base de datos de catalogo
// se exporta  al main
// declaro la adb o base de datos array de objetos 
const adb=[
    // bidones de 5 litros 
    {id:0,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/Bidones 5l/catalogo para pagina - 2.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:1,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/Bidones 5l/catalogo para pagina - 3.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:2,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/Bidones 5l/catalogo para pagina - 4.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:3,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/Bidones 5l/catalogo para pagina - 5.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:4,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/Bidones 5l/catalogo para pagina - 6.png",description:"Bidones grandes",categoria:"Bidones"},
    // de 1 y 2 litros las botellas 
    {id:5,name:"/botellas1 ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 9.png",description:"/botellas1",categoria:"Bidones"},
    {id:6,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 10.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:7,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 11.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:8,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 12.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:9,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 13.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:10,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 14.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:11,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 15.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:12,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 16.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:13,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 17.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:14,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 18.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:15,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 19.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:16,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 20.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:17,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 21.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:18,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 22.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:19,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 23.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:20,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 24.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:21,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 38.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:22,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 39.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:23,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 40.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:24,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 41.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:25,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/botellas1 y 2 l/catalogo para pagina - 42.png",
    description:"Bidones grandes",categoria:"Bidones"},
    // paracrema 
    {id:26,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/para crema/catalogo para pagina - 28.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:27,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/para crema/catalogo para pagina - 29.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:28,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/para crema/catalogo para pagina - 30.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:29,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/para crema/catalogo para pagina - 31.png",description:"Bidones grandes",categoria:"Bidones"},
    {id:30,name:"Bidones 5 L ",tipo:"plastico",imagen:"/assets/img/chica pagina web/Fondo negro/para crema/catalogo para pagina - 32.png",description:"Bidones grandes",categoria:"Bidones"},

    ]
    // consologeo para testear 
    console.log(adb[10].name)

  
// exporto el modulo en ecmascrip 6 

module.export = adb;