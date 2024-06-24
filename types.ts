
export default interface singleProductType {
    altText: string,
    price: number,
    productname: string,
    sellername: string,
    slug: [Object],
    descriptionText: [any],
    imageRef: string
}

export  interface allProductsType {
    result:singleProductType[],
    query:string
}