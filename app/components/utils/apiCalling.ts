import refreshData from "./action";

//All Products API
export default async function allProducts(){
    const data = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++image%2C%0A++++slug%2C%0A++++%22descriptionText%22%3Adescription%5B0%5D.children%5B0%5D.text%2C%0A++++price%2C%0A++++_id%0A%7D`);

    if(!data.ok){
        return "Error"
    }

    return data.json()
}




//Seller Name Filter APIs

export async function ProductFilterByTimsName(){
const products = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%26%26+%27Tims%27+match+sellername%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++image%2C%0A++++slug%2C%0A++++%22descriptionText%22%3Adescription%5B0%5D.children%5B0%5D.text%2C%0A++++price%2C%0A++++_id%0A%7D`)

if(!products.ok){
    return "Error"
}
return products.json();
}

export async function ProductFilterByJamesName(){
    const products = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%26%26+%27James%27+match+sellername%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++image%2C%0A++++slug%2C%0A++++%22descriptionText%22%3Adescription%5B0%5D.children%5B0%5D.text%2C%0A++++price%2C%0A++++_id%0A%7D`)
    
    if(!products.ok){
        return "Error"
    }
    return products.json();
    }

    export async function ProductFilterByDaveName(){
        const products = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%26%26+%27Dave%27+match+sellername%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++image%2C%0A++++slug%2C%0A++++%22descriptionText%22%3Adescription%5B0%5D.children%5B0%5D.text%2C%0A++++price%2C%0A++++_id%0A%7D`)
        
        if(!products.ok){
            return "Error"
        }
        return products.json();
        }


        export async function ProductFilterByJoshName(){
            const products = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%26%26+%27Josh%27+match+sellername%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++image%2C%0A++++slug%2C%0A++++%22descriptionText%22%3Adescription%5B0%5D.children%5B0%5D.text%2C%0A++++price%2C%0A++++_id%0A%7D`)
            
            if(!products.ok){
                return "Error"
            }
            return products.json();
            }


            
// Search Product BY Name
export async function searchProductByName(search:string){
const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%26%26+productname+match+%27${search}%27%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++image%2C%0A++++slug%2C%0A++++%22descriptionText%22%3Adescription%5B0%5D.children%5B0%5D.text%2C%0A++++price%2C%0A++++_id%0A%7D`)

if (!res.ok){
    return "Error"
}

return res.json();
}




export async function getAllCartProductsByUserid(userid:string){
    const res = await fetch(`http://localhost:3000/api/cartFunc?userid=${userid}`)
    
    if(!res.ok){
       return "Error"
    }
    
    return res.json();
    
    }
    


export async function detailOfSingleProduct(slug:string){
    const productData = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%26%26+slug.current+match+%27${slug}%27%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++image%2C%0A++++slug%2C%0A++++%22descriptionText%22%3Adescription%5B0%5D.children%5B0%5D.text%2C%0A++++price%2C%0A++++_id%0A%7D`)

if(!productData.ok){
    return "Error"
}

return productData.json()

}



export async function getAllCartProductByUserid(userid:string){
    const res = await fetch(`http://localhost:3000/api/cartFunc?userid=${userid}`)
    
    if(!res.ok){
       return "Error"
    }
    
    return res.json();
    
    }


    export async function  productFromIdCart(productid:string){
        const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%26%26+_id+match+%${productid}%27%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++image%2C%0A++++slug%2C%0A++++%22descriptionText%22%3Adescription%5B0%5D.children%5B0%5D.text%2C%0A++++price%2C%0A++++_id%0A%7D`)
       
       if(!res.ok){
     return "Error"
       }
       
        return res.json()
     }
    

    export async function addToCartApiCall(userid:string,productid:string){
        const res = await fetch(`http://localhost:3000/api/cartFunc`,{
           method :"POST",
           body :JSON.stringify({
              userid:userid,
              productid:productid,
              quantity: 1
           })
        })
     
        return "Okay"
     
     }




     export async function handleDelete(userid:string,productid:string){
        const res = await fetch(`http://localhost:3000/api/cartFunc?userid=${userid}&productid=${productid}`,{
     method :"DELETE"
        })
        await refreshData();
        
     }