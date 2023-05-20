export const brandproductrenderfilter = (filterarray,productarray)=>{
    if(filterarray.length == 0){
        return productarray;
    }
    let result = productarray.filter((eachProduct)=>{
       
        if(filterarray.includes(eachProduct.brand)){
            return eachProduct;
        }
    })
    console.log(result);
    return result;
}
