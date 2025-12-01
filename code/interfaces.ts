interface Item{
    name: string
    price: number

    itemPurchased(message: string) : void

    
}

let produtc1: Item

produtc1 = {
    name: 'Apple',
    price: 2,
    itemPurchased(message: string){
        console.log(message + this.name)
    }
}

produtc1.itemPurchased('You just bought a ')