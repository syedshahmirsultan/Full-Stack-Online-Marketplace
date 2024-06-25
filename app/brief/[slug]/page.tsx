import BriefProduct from "@/app/components/BriefProduct";
import allProducts, { detailOfSingleProduct } from "@/app/components/utils/apiCalling";
import singleProductType, { allProductsType } from "@/types";



export const dynamic='force-dynamic'

export async function generateStaticParams(){
    const data = await allProducts() as allProductsType;
    return data.result.map((item:singleProductType) => {slug :item.slug })

}

export async function generateMetadata({params}:{params :{slug :string}}){
    const slug = params.slug;
    const detail = await detailOfSingleProduct(slug) as allProductsType;
    return{
     title : detail.result[0].productname,
    }  
}


const Brief = async({params} :{params :{slug:string}}) => {
    return (
        <div>
            <Detail slug={params.slug}/>
        </div>
    );
}


async function Detail ({slug} :{slug:string}){
    const data = await detailOfSingleProduct(slug);
    
return (
    <>
    <BriefProduct product={data.result[0]}/>
    </>
)
}

export default Brief;





























// "use client"
// import { useEffect, useState } from 'react';
// import BriefProduct from '@/app/components/BriefProduct';
// import allProducts, { detailOfSingleProduct } from '@/app/components/utils/apiCalling';
// import singleProductType, { allProductsType } from '@/types';






// export const dynamic='force-dynamic'


// export async function generateStaticParams(){
//     const data = await allProducts() as allProductsType;
//     return data.result.map((item:singleProductType) => {slug:item.slug.current})
// }



// export async function generateMetaData({slug} :{slug:string}){
//     const detail = await detailOfSingleProduct(slug) as allProductsType;
//     return {
//         title : detail.result[0].productname
//     }
// }




//  const Brief= ({ slug }:{slug:string}) => {
//   const [product, setProduct] = useState<singleProductType | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await detailOfSingleProduct(slug);
//         if (data.result && data.result.length > 0) {
//           setProduct(data.result[0]);
//         } else {
//           console.error(`No product found for slug: ${slug}`);
//         }
//       } catch (error) {
//         console.error('Error fetching product details:', error);
//       }
//     };

//     fetchData();
//   }, [slug]);

//   if (!product) {
//     return <p>Loading...</p>; // Handle loading state while data is fetched
//   }

//   return (
//     <BriefProduct product={product} />
//   );
// };


// // const Brief = async({slug} :{slug:string}) => {
// //     return (
// //         <div>
// //             <Detail slug={slug}/>
// //         </div>
// //     );
// // }





// export default Brief; 