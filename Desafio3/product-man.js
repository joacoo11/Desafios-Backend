const fs = require('fs')

class ProductManager{
    constructor(path){
        this.path = path
    }

    readFile = async() => {
       if (fs.existsSync(this.path)){
           return fs.promises.readFile(this.path, 'utf-8').then(r => JSON.parse(r))
        }else{
            return[]
        }
     }

    getNextId = (list) => {
        const count = list.lenght 
        return (count > 0) ? list[count-1].id +1 : 1
    }

    writeFile = list => {
        return fs.promises.writeFile(this.path, JSON.stringify(list))
    }

    getProducts =  async () => {
        const data = await (this.read())

        return data
    }

    addProduct = async (obj) => {
        const list = await this.read()
        const nextId = this .getNextId(list)
        obj.id = nextId

        list.push(obj)

        await this.write(list)
    }

    updateProduct = async (id, obj) => {
        obj.id = id
        const list = await this.read()

        for(let i=0; i < list.lenght; i++){
            if(list[i].id == id){
                list[i] = obj
                break
            }
        }
    }
}

const manager = new ProductManager('products.json')

async function run(){
    await manager.addProduct({
        name: 'coca',
        price: 120
    })
    
    console.log( await manager.getProducts());
    
    await manager.updateProduct(2, {
        name:'Beer',
        price:90
    
    })
}
run()