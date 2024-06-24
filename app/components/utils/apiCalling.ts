//All Products API
export default async function allProducts(){
    const data = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++slug%2C%0A++++%22descriptionText%22+%3Adescription%5B%5D.children%5B%5D.text%2C%0A++++%22imageRef%22%3A+image%5B0%5D.asset._ref%2C%0A++%22altText%22%3A+image%5B0%5D.alt%2C%0A++++price%0A%7D`);

    if(!data.ok){
        return "Error"
    }

    return data.json()
}




//Seller Name Filter API
export async function ProductFilterBySellerName(name:string){
const products = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+%27${name}%27+match+sellername+%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++slug%2C%0A++++%22descriptionText%22+%3Adescription%5B%5D.children%5B%5D.text%2C%0A++++%22imageRef%22%3A+image%5B0%5D.asset._ref%2C%0A++%22altText%22%3A+image%5B0%5D.alt%2C%0A++++price%0A%7D`)

if(!products.ok){
    return "Error"
}
return products.json();
}




// Search Product BY Name
export async function searchProductByName(search:string){
const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-24/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+%27${search}%27+match+productname+%5D%7B%0A++productname%2C%0A++++sellername%2C%0A++++slug%2C%0A++++%22descriptionText%22+%3Adescription%5B%5D.children%5B%5D.text%2C%0A++++%22imageRef%22%3A+image%5B0%5D.asset._ref%2C%0A++%22altText%22%3A+image%5B0%5D.alt%2C%0A++++price%0A%7D`)

if (!res.ok){
    return "Error"
}

return res.json();
}