
export interface productSlugType{ 
    _type: string;
     current: string
     }

export interface productImageType{
    _type: string;
    _key: string;
    alt:string;
    asset: {
      _type: string;
      _ref: string
        }
      }

export default interface singleProductType {
    price: number;
    productname: string;
    sellername: string;
    slug: productSlugType;
    descriptionText: [string];
    image:productImageType
}

export  interface allProductsType {
    result:singleProductType[];
    query:string
}

