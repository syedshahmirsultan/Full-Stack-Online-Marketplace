import BriefProduct from "@/app/components/BriefProduct";
import allProducts, { detailOfSingleProduct } from "@/app/components/utils/apiCalling"
import singleProductType, { allProductsType } from "@/types"






export const dynamic='force-dynamic'


export async function generateStaticParams(){
    const data = await allProducts() as allProductsType;
    return data.result.map((item:singleProductType) => {slug:item.slug.current})
}



export async function generateMetaData({slug} :{slug:string}){
    const detail = await detailOfSingleProduct(slug) as singleProductType;
    return {
        title : detail.productname
    }
}




async function Detail ({slug}:{slug:string}){
    const data = await detailOfSingleProduct(slug);
    
    return (
        <>
        <BriefProduct product={data}/>
        </>
    )
} 

const Brief = async({slug} :{slug:string}) => {
    return (
        <div>
            <Detail slug={slug}/>
        </div>
    );
}





export default Brief; 