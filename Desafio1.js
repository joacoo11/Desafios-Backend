class ProductManager {
    constructor(){
        this.products = []
    }

    getProducts = () => {return this.products}

    getID = () => {
        const count = this.products.length
        if(count > 0){
            const lastProduct = this.product[count-1]
            const id = lastProduct.id + 1

            return id
        }else{
            return 1
        }
    }

    getProductById = (idBuscado) => {
        try{
            this.products.find(product => product.id === idBuscado)
        }catch{
            console.log("Not Found.")
        }
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const id = this.getNextID()
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(product)
    }
}

