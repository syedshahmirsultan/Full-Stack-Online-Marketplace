import { Image } from "sanity";

export interface productSlugType{ 
    _type: string;
     current: string
     }



export default interface singleProductType {
    price: number;
    productname: string;
    sellername: string;
    slug: productSlugType;
    descriptionText: [string];
    image:Image[];
    _id:string
}


export  interface allProductsType {
    result:singleProductType[];
    query:string
}

