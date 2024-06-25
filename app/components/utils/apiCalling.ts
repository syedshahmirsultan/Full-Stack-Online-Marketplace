//All Products API
export default async function allProducts(){
    const data = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++slug%2C%0A++++%22descriptionText%22+%3Adescription%5B%5D.children%5B%5D.text%2C%0A++++image%2C%0A++++price%0A%7D`);

    if(!data.ok){
        return "Error"
    }

    return data.json()
}




//Seller Name Filter APIs

export async function ProductFilterByTimsName(){
const products = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%26%26+%27Tims%27+match+sellername%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++slug%2C%0A++++%22descriptionText%22+%3Adescription%5B%5D.children%5B%5D.text%2C%0A++++image%2C%0A++++price%0A%7D`)

if(!products.ok){
    return "Error"
}
return products.json();
}

export async function ProductFilterByJamesName(){
    const products = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%26%26+%27James%27+match+sellername%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++slug%2C%0A++++%22descriptionText%22+%3Adescription%5B%5D.children%5B%5D.text%2C%0A++++image%2C%0A++++price%0A%7D`)
    
    if(!products.ok){
        return "Error"
    }
    return products.json();
    }

    export async function ProductFilterByDaveName(){
        const products = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%26%26+%27Dave%27+match+sellername%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++slug%2C%0A++++%22descriptionText%22+%3Adescription%5B%5D.children%5B%5D.text%2C%0A++++image%2C%0A++++price%0A%7D`)
        
        if(!products.ok){
            return "Error"
        }
        return products.json();
        }


        export async function ProductFilterByJoshName(){
            const products = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%26%26+%27Josh%27+match+sellername%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++slug%2C%0A++++%22descriptionText%22+%3Adescription%5B%5D.children%5B%5D.text%2C%0A++++image%2C%0A++++price%0A%7D`)
            
            if(!products.ok){
                return "Error"
            }
            return products.json();
            }


            
// Search Product BY Name
export async function searchProductByName(search:string){
const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%26%26+%27productname%27+match+${search}%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++slug%2C%0A++++%22descriptionText%22+%3Adescription%5B%5D.children%5B%5D.text%2C%0A++++image%2C%0A++++price%0A%7D`)

if (!res.ok){
    return "Error"
}

return res.json();
}