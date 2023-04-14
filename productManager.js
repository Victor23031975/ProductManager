

class ProductManager{

#id= 0;

constructor(){

    this.products=[];
    

}

getProduct=()=>{

    return this.products


}


getProductById=(id)=>{

let idEncontrado= this.products.find((producto)=>producto.id===id)

if(idEncontrado){

    console.log(idEncontrado)
}

else{ console.log(`Error ID: ${id}  not found`)}

}
    
  


addProduct(title,description,price,thumbnail,code,stock){
    
    if(!title||!description||!price||!thumbnail||!code||!stock){

        console.log("Error: Todos los campos son obligatotios")

        return;

    }

    let filtro= this.products.filter((event)=> event.code===code);



    if(filtro.length > 0){

        console.log ("Error: codigo repetido")

        return;

    }



    const product={
    
    title,
    description,
    price,
    thumbnail,
    code,
    stock
}

product.id=this.#getID()

this.products.push(product)

  
}

#getID(){

const oldID= this.#id

this.#id +=1

return oldID


}

}

const newProduct= new ProductManager()

newProduct.addProduct("Smart TV Hitachi","SMART TV 55 PULGADAS 4K ULTRA HD",119999,"https://www.megatone.net/Images/Articulos/zoom2x/254/TEL5526HIT.jpg",1234,5)
newProduct.addProduct("Smart TV SAMSUNG","SMART TV 50 PULGADAS 4K ULTRA HD","","https://www.megatone.net/Images/Articulos/zoom2x/254/TEL5526HIT.jpg",1235,5)
newProduct.addProduct("Smart TV Hitachi","SMART TV 55 PULGADAS 4K ULTRA HD",119999,"https://www.megatone.net/Images/Articulos/zoom2x/254/TEL5526HIT.jpg",1234,5)


console.log(newProduct.getProduct())

newProduct.getProductById(7)    