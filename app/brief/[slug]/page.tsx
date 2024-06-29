import BriefProduct from "@/app/components/BriefProduct";
import allProducts, { detailOfSingleProduct } from "@/app/components/utils/apiCalling";
import singleProductType, { allProductsType } from "@/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



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
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    
return (
    
    <BriefProduct product={data.result[0]} user={user}/>
   
)
}

export default Brief;