import BriefProduct from "@/app/components/BriefProduct";
import allProducts, { detailOfSingleProduct } from "@/app/components/utils/apiCalling"
import singleProductType, { allProductsType } from "@/types"






export const dynamic='force-dynamic'


export async function generateStaticParams(){
    const data = await allProducts() as allProductsType;
    return data.result.map((item:singleProductType) => {slug:item.slug.current})
}



export async function generateMetaData({slug} :{slug:string}){
    const detail = await detailOfSingleProduct(slug) as allProductsType;
    return {
        title : detail.result[0].productname
    }
}




async function Detail ({slug}:{slug:string}){
    const data = await detailOfSingleProduct(slug);
    
    return (
        <>
        <BriefProduct product={data.result[0]}/>
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