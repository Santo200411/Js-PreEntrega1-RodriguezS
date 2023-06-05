let items = [
  {id: 1, nombre: "LG TV 55''", precio: 120000},
  {id: 2, nombre: "Sony TV OLED 59'' ",precio: 150000},
  {id: 3,nombre: "Iphone 11 Pro ",precio: 230000},
  {id: 4,nombre: "Samsung Galaxy S23 ",precio: 129000},
  {id: 5,nombre: "Estante 60x20cm ",precio: 15000},
  {id: 6,nombre: "Escritorio Vidrio 90x60",precio: 70000},
];
mostrarMenu()

function mostrarMenu(){
  let opc
  let salir = false
  do{
  console.clear()
  console.log("----------------------------------------------")
  console.log("Menu: ")
  console.log("1- Comprar")
  console.log("2- Mostrar catalogo")
  console.log("3- Ver carrito de compras");
  console.log("4- Nosotros")
  console.log("5- Salir")
  opc = ingresarEntero("Ingrese una opcion del 1 al 5 del menu (El menu esta en consola)",1,5)
  salir = generarAccion(opc, items)
  }while (!salir); 
}

function mostrarCatalogo(){
  console.log("----------------------------------------------")
  console.log(" Catalogo: ")
  console.log("1- Electrodomesticos")
  console.log("2- Muebles")
  console.log("3- Telefonos")
  console.log("4- Volver al menu")

  opc = ingresarEntero("Ingrese una opcion del 1 al 4 del menu (El menu esta en consola)",1,4)
  if(opc == 1){
    for (let i = 0; i < 2; i++) { //muestro los items existentes
        let item = items[i];
        console.log("----------------------------------------------")
        console.log("ID: " + item.id)
        console.log("Nombre: " + item.nombre)
        console.log("Precio: " + item.precio)
        
  }

    } else if (opc == 2){
      for (let i = 2; i < 4; i++) { //muestro los items existentes
        let item = items[i];
        console.log("----------------------------------------------") 
        console.log("ID: " + item.id)
        console.log("Nombre: " + item.nombre)
        console.log("Precio: " + item.precio)
        
    }

      } else if(opc == 3){
        for (let i = 4; i < items.length; i++) { //muestro los items existentes
        let item = items[i];
        console.log("----------------------------------------------")
        console.log("ID: " + item.id)
        console.log("Nombre: " + item.nombre)
        console.log("Precio: " + item.precio)
        
      }

        } else if(opc == 4){
          mostrarMenu()

  }
  return opc
}

function comprarItems(){
  let id
  let item
  console.log("Ingrese el ID del producto que desea agregar al carrito")
  for (let i = 0; i < items.length; i++) {
    item = items[i];
    console.log("ID: " + item.id)
    console.log("Nombre: " + item.nombre)
    console.log("Precio: " + item.precio)
    console.log("-------------------")
  }
  id = ingresarEntero("Ingrese el ID del producto que desea agregar al carrito", 0, items.length) //guardo el id del item que quiere agregar al carrito
  do{ 
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == id){
        encontrado = true
        item = items[i] // guardo el item
        return item
      } else {
        encontrado = false
      }
  }
  }while(!encontrado)
}


function generarAccion(opc, items){
  let item
  switch(opc){
    case 1:
      let item = comprarItems(items)
      verCarrito(item)
      volverMenu()
    break;
    case 2:
      mostrarCatalogo(items)
      volverMenu()
    break;
    case 3:
      console.log("----------------------------------------------")
      console.log("El carrito está vacío. Realice una compra primero.");
      volverMenu()
    break;
    case 4:
      console.log("----------------------------------------------")
      console.log("Información sobre nosotros.");
      volverMenu()
    break;
    case 5:
      console.log("----------------------------------------------")
      console.log("Saliendo del programa...");
      return true
  }
}

function verCarrito(item){
  let opc
  console.clear()
  console.log("Usted tiene el carrito: ")
    if(item.nombre == "" || item.nombre == null){
      console.log("Usted no tiene items en el carrito")
    }else{
      console.log("ID: " + item.id)
      console.log("Nombre: " + item.nombre)
      console.log("Precio: " + item.precio)
      console.log("-------------------")
      console.log("Desea finalizar la compra? 1- Si | 2- No, salir")
      opc = ingresarEntero("Desea finalizar la compra? 1- Si | 2- No, salir",1,2)
        if(opc == 1){
          console.log("Compra Finalizada")
       }else{
          return
        }
         }
  }

  function volverMenu(){
    console.log("----------------------------------------------")
    console.log("Ingrese 1 para volver al menu")
    opc = ingresarEntero("Ingrese 1 para volver al menu",1,1)
        if(opc == 1){
      mostrarMenu()
    }
  }

function ingresarEntero(texto,min, max){
    let entero 
    do{
        entero = prompt(texto)
        // aca quise hacer que si toca "cancelar" en el prompt no entre al ciclo. pero no pude, busque en internet y me aparecio que
        // depende el navegador era con una de estas dos condiciones, pero no me funciono ninguna
        if (entero === null || entero === "") { 
          return null;
          }

        try {
            entero = parseInt(entero);
            if (isNaN(entero) || min > entero || max < entero) {
              throw new Error("No es un entero válido");
            }
          } catch (error) {
            alert("Error, ingrese un entero válido");
            entero = undefined;
          }
        } while (entero === undefined);

    return entero
}