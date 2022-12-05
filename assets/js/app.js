const listDom = document.querySelector("#listItems");
const allSneakers = document.querySelector("#allSneakers");
const formulario = document.querySelector("#formulario");

const menor = document.querySelector("#menor");
const mayor = document.querySelector("#mayor");
const c0c1 = document.querySelector("#c0c1");
const c1c2 = document.querySelector("#c1c2");
const men = document.querySelector("#men");
const woman = document.querySelector("#woman");
const pk = document.querySelector("#pk");
const diezk = document.querySelector("#diezk");
const veinteyunok = document.querySelector("#veinteyunok");
const cuarentaydosk = document.querySelector("#cuarentaydosk");
const descuento = document.querySelector("#descuento");
const desde = document.querySelector("#desde");
const hasta = document.querySelector("#hasta");
const buscar = document.querySelector("#buscar");


let sneakers = [{
        mod: 'm520lb7',
        nombre: 'Zapatillas Running Hombre New Balance 520 Negra',
        precio: 39990,
        genero: 'hombre',
        distancia: 'primeros pasos',
        oferta: 'si',
        pantes: 54990,
        descripcion: 'La New Balance 520 combina la comodidad durante todo el día con el rendimiento característico del diseño.',
        imagen: 'assets/img/m520lb7/m520lb7_2.webp'
    },
    {
        mod: 'm860n12',
        nombre: 'Zapatillas Running Hombre New Balance Fresh Foam X 860 V12',
        precio: 109990,
        genero: 'hombre',
        distancia: '42k',
        oferta: 'no',
        pantes: '0',
        descripcion: 'Corre comodo, fresco y por muchos kilómetros con las nuevas NB Fresh Foam x 860 V12.',
        imagen: 'assets/img/m860n12/m860n12_2.webp'
    },
    {
        mod: 'm880m12',
        nombre: 'Zapatillas Running Hombre New Balance Fresh Foam 880 V12',
        precio: 109990,
        genero: 'hombre',
        distancia: '42k',
        oferta: 'no',
        pantes: '0',
        descripcion: 'Las New Balance Fresh Foam 880 v12 es un caballo de batalla probado de zapatillas para correr.',
        imagen: 'assets/img/m880m12/m880m12_2.webp'
    },
    {
        mod: 'm1080e11',
        nombre: 'Zapatillas Running Hombre New Balance 1080 Bicolor',
        precio: 90990,
        genero: 'hombre',
        distancia: '42k',
        oferta: 'si',
        pantes: 29990,
        descripcion: 'Las New Balance Fresh Foam 1080 ofrecen un lujoso confort para la mejor conducción en el camino. Esta zapatilla de running combina una suave entresuela Fresh Foam con nuestra tecnología Ultra Heel para un ajuste cómodo y de apoyo. Su comodidad la podrás sentir sentir en cada zancada.',
        imagen: 'assets/img/m1080e11/m1080e11_2.webp'
    },
    {
        mod: 'm1080m12',
        nombre: 'Zapatillas Running Hombre New Balance 1080 V12 Naranja',
        precio: 134990,
        genero: 'hombre',
        distancia: '42k',
        oferta: 'no',
        pantes: '0',
        descripcion: 'Descubre el pinaculo de las zapatillas de Running NB, La nueva Fresh Foam 1080 v12.',
        imagen: 'assets/img/m1080m12/m1080m12_2_1.webp'
    },
    {
        mod: 'marisct3',
        nombre: 'Zapatillas Running Hombre New Balance Fresh Foam Arishi v3 Negra',
        precio: 39990,
        genero: 'hombre',
        distancia: '10k',
        oferta: 'si',
        pantes: 54990,
        descripcion: 'La zapatilla de running Fresh Foam Arishiv3 para hombre está confeccionada con una capellada de punto de ingeniería y superposiciones sin costuras para garantizar un uso diario ligero y cómodo.',
        imagen: 'assets/img/marisct3/marisct3_2.webp'
    },
    {
        mod: 'mariscu3',
        nombre: 'Zapatillas Running Hombre New Balance Arishi V3 Morada',
        precio: 59990,
        genero: 'hombre',
        distancia: '10k',
        oferta: 'no',
        pantes: '0',
        descripcion: 'Estas zapatillas running para mujer de New Balance, las Fresh Foam Arishi están fabricadas para ofrecer un estilo versátil y un gran rendimiento en el gimnasio, en la pista y en la ciudad',
        imagen: 'assets/img/mariscu3/mariscu3_2.webp'
    },
    {
        mod: 'marispk4',
        nombre: 'Zapatillas Running Hombre New Balance Arishi v4 Negra',
        precio: 64990,
        genero: 'hombre',
        distancia: '10k',
        oferta: 'no',
        pantes: '0',
        descripcion: 'Las versátiles zapatillas Fresh Foam Arishi v4 de New Balance combinan amortiguación diseñada con un estilo atlético.',
        imagen: 'assets/img/marispk4/marispk4_2.webp'
    },
    {
        mod: 'me420Ib2',
        nombre: 'Zapatillas Running Hombre New Balance 420 Negra',
        precio: 39990,
        genero: 'hombre',
        distancia: 'Primeros Pasos',
        oferta: 'si',
        pantes: 44990,
        descripcion: 'Las New Balance 420 fueron construidas para el rendimiento con una entresuela suave y afelpada que amortigua tus zancadas y proporciona una conducción cómoda.',
        imagen: 'assets/img/me420Ib2/me420lb2_2.webp'
    },
    {
        mod: 'mevozlo2',
        nombre: 'Zapatillas Running Hombre New Balance Evoz V2 Naranja',
        precio: 72990,
        genero: 'hombre',
        distancia: '42k',
        oferta: 'no',
        pantes: '0',
        descripcion: 'Las Nuevas Evoz V2 te brindarán toda la amortiguación y comodidad necesaria para entrenar o correr diariamente.',
        imagen: 'assets/img/mevozlo2/mevozlo2_2.webp'
    },
    {
        mod: 'mfcprlm3',
        nombre: 'Zapatillas Running Hombre New Balance Fuel Cell Propel v3 Blanco',
        precio: 55990,
        genero: 'hombre',
        distancia: '21k',
        oferta: 'si',
        pantes: 69990,
        descripcion: 'El FuelCell Propel v3 de New Balance está construido para un kilometraje versátil.',
        imagen: 'assets/img/mfcprlm3/mfcprlm3_2.webp'
    },
    {
        mod: 'mmorwt',
        nombre: 'Zapatillas Running Hombre New Balance Fresh Foam More V4 Blanca',
        precio: 144990,
        genero: 'hombre',
        distancia: '42k',
        oferta: 'no',
        pantes: '0',
        descripcion: 'La amortiguación que siempre deseaste en la NB Fresh Foam More V4.',
        imagen: 'assets/img/mmorwt/mmorwt4_2.webp'
    },
    {
        mod: 'w1080v12',
        nombre: 'Zapatillas Running Mujer New Balance 1080 v12 Permafrost Negra',
        precio: 134990,
        genero: 'mujer',
        distancia: '42k',
        oferta: 'no',
        pantes: '0',
        descripcion: 'Descubre el pináculo de las zapatillas de Running NB, La nueva Fresh Foam 1080 v12.',
        imagen: 'assets/img/w1080v12/w1080v12_2.webp'
    },
    {
        mod: 'marisct3',
        nombre: 'Zapatillas Running Hombre New Balance Fuel Cell Propel V3 Bicolor',
        precio: 84990,
        genero: 'hombre',
        distancia: '21k',
        oferta: 'no',
        pantes: '0',
        descripcion: 'El Fuel Cell Propel v3 de New Balance está construido para un kilometraje versátil.',
        imagen: 'assets/img/marisct3/marisct3_2.webp'
    },
];

allSneakers.innerHTML = sneakers.length;

buscar.addEventListener("click", () => {
    let modal = "modalmensajes";
    let desde = document.querySelector("#desde").value;
    let hasta = document.querySelector("#hasta").value;

    if (desde > hasta) {
        

        $("#" + modal).modal("show");; // abrir

        modalcontenido.innerHTML = `
            <div class="modal-header">
                <h5 class="modal-title">Datos Incorrectos</h5>
                <!--<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
              </div>
              <div class="modal-body">
                <p>Los datos ingresados son incorrectos.</p>
                <p>El monto "Desde", debe ser menor al monto "Hasta"</p>
                <small></small>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                
              </div>
            `;
        return
    }

    if (desde == "0" && hasta == "0") {
        
        $("#" + modal).modal("show");; // abrir

        modalcontenido.innerHTML = `
            <div class="modal-header">
                <h5 class="modal-title">Datos Incorrectos</h5>
                <!--<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
              </div>
              <div class="modal-body">
                <p>No ha ingresado información.</p>
                <p>Debe indicar el criterio de montos, para procesar la búsqueda</p>
                <small></small>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                
              </div>
            `;
        return
    }



    const result = sneakers.filter(sneakers => sneakers.precio > desde && sneakers.precio < hasta);

    allSneakers.innerHTML = result.length;
    listDom.innerHTML = ``

    for (let resul of result) {

        if (resul.oferta == "no") {
            listDom.innerHTML += `
            <div>
            <div class="imgProduct" align="center">
              <img src="${resul.imagen}" class="" alt="Cargando imagen...">
              <small>${resul.nombre}</small>
                <div class="row">
                    
                    <div class="col-4" align="left">
                        
                    </div>
                    <div class="col-8" align="right">
                        <p class=" price Before fs-7">${resul.precio}</p>
                    </div>
                </div>
            </div>
            
          </div>
            `

        } else {
            listDom.innerHTML += `
        <div>
        <div class="imgProduct" align="center">
          <img src="${resul.imagen}" class="" alt="Cargando imagen...">
          <small>${resul.nombre}</small>
            <div class="row">
                
                <div class="col-4" align="left">
                    <p class="text-secondary price  text-decoration-line-through fs-7">${resul.pantes}</p>
                </div>
                <div class="col-8" align="right">
                    <p class=" price Before fs-7">${resul.precio}</p>
                </div>
            </div>
        </div>
        
      </div>
        `
        }


    }

})

c0c1.addEventListener("click", () => {
    listDom.innerHTML = ``
    const result = sneakers.filter(sneakers => sneakers.precio > 0 && sneakers.precio < 100000);
    pintar(result);
})

c1c2.addEventListener("click", () => {
    listDom.innerHTML = ``
    const result = sneakers.filter(sneakers => sneakers.precio > 100000 && sneakers.precio < 200000);
    pintar(result);
})

men.addEventListener("click", () => {
    listDom.innerHTML = ``
    const result = sneakers.filter(sneakers => sneakers.genero == "hombre");
    pintar(result);
})

woman.addEventListener("click", () => {
    listDom.innerHTML = ``
    const result = sneakers.filter(sneakers => sneakers.genero == "mujer");
    pintar(result);
})

pk.addEventListener("click", () => {
    listDom.innerHTML = ``
    const result = sneakers.filter(sneakers => sneakers.distancia == "primeros pasos");
    pintar(result);
})

diezk.addEventListener("click", () => {
    listDom.innerHTML = ``
    const result = sneakers.filter(sneakers => sneakers.distancia == "10k");
    pintar(result);
})

veinteyunok.addEventListener("click", () => {
    listDom.innerHTML = ``
    const result = sneakers.filter(sneakers => sneakers.distancia == "21k");
    pintar(result);
})

cuarentaydosk.addEventListener("click", () => {
    listDom.innerHTML = ``
    const result = sneakers.filter(sneakers => sneakers.distancia == "42k");
    pintar(result);
})

descuento.addEventListener("click", () => {
    listDom.innerHTML = ``
    const result = sneakers.filter(sneakers => sneakers.oferta == "si");
    pintadescuentos(result);
})


function pintar(result){
    allSneakers.innerHTML = result.length;
    listDom.innerHTML = ``

    for (let resul of result) {

        if (resul.oferta == "no") {
            listDom.innerHTML += `
            <div>
            <div class="imgProduct" align="center">
              <img src="${resul.imagen}" class="" alt="Cargando imagen...">
              <small>${resul.nombre}</small>
                <div class="row">
                    
                    <div class="col-4" align="left">
                        
                    </div>
                    <div class="col-8" align="right">
                        <p class=" price Before fs-7">${resul.precio}</p>
                    </div>
                </div>
            </div>
            
          </div>
            `

        } else {
            listDom.innerHTML += `
        <div>
        <div class="imgProduct" align="center">
          <img src="${resul.imagen}" class="" alt="Cargando imagen...">
          <small>${resul.nombre}</small>
            <div class="row">
                
                <div class="col-4" align="left">
                    <p class="text-secondary price  text-decoration-line-through fs-7">${resul.pantes}</p>
                </div>
                <div class="col-8" align="right">
                    <p class=" price Before fs-7">${resul.precio}</p>
                </div>
            </div>
        </div>
        
      </div>
        `
        }


    }
}


function pintadescuentos(result){
   
    allSneakers.innerHTML = result.length;
    listDom.innerHTML = ``

    for (let resul of result) {

        if (resul.oferta == "si") {
            listDom.innerHTML += `
            <div>
            <div class="imgProduct" align="center">
              <img src="${resul.imagen}" class="" alt="Cargando imagen...">
              <small>${resul.nombre}</small>
                <div class="row">
                    
                    <div class="col-4" align="left">
                        <p class="text-secondary price  text-decoration-line-through fs-7">${resul.pantes}</p>
                    </div>
                    <div class="col-8" align="right">
                        <p class=" price Before fs-7">${resul.precio}</p>
                    </div>
                </div>
            </div>
            
          </div>
            `

        }


    }


}


for (let sneaker of sneakers) {

    if (sneaker.oferta == "no") {
        listDom.innerHTML += `
        <div>
        <div class="imgProduct" align="center">
          <img src="${sneaker.imagen}" class="" alt="Cargando imagen...">
          <small>${sneaker.nombre}</small>
            <div class="row">
                
                <div class="col-4" align="left">
                    
                </div>
                <div class="col-8" align="right">
                    <p class=" price Before fs-7">${sneaker.precio}</p>
                </div>
            </div>
        </div>
        
      </div>
        `

    } else {
        listDom.innerHTML += `
    <div>
    <div class="imgProduct" align="center">
      <img src="${sneaker.imagen}" class="" alt="Cargando imagen...">
      <small>${sneaker.nombre}</small>
        <div class="row">
            
            <div class="col-4" align="left">
                <p class="text-secondary price  text-decoration-line-through fs-7">${sneaker.pantes}</p>
            </div>
            <div class="col-8" align="right">
                <p class=" price Before fs-7">${sneaker.precio}</p>
            </div>
        </div>
    </div>
    
  </div>
    `
    }


}