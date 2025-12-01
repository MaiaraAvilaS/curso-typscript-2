
interface CartItem{
    id: number,
    title: string,
    variantId?: number
    
}

    function addToCar(item:CartItem){
        console.log(`Add "${item.title}" to cart`);
    }
    


addToCar({id: 1, title: 'shoes'});