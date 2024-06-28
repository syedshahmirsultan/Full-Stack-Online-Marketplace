import { LoginLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React from 'react';
import { getAllCartProductByUserid } from '../components/utils/apiCalling';
import { typeOfCart } from '@/lib/drizzle';
import CartComp from '../components/CartComp';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import { LogIn } from 'lucide-react';

const Cart = async() => {
    const { getUser } = getKindeServerSession();
    const user:KindeUser|null = await getUser();
    const data:typeOfCart[] = await getAllCartProductByUserid(user?.id as string);
    
    
    if (!user) {
        return (
            <div className="h-48 flex items-center justify-center gap-x-4">
                <LoginLink>
                    <LogIn color={'blue'} size={32} />
                
                <h2 className='text-xl font-semibold text-purple-700'>Please Login to View your Cart</h2></LoginLink>
            </div>
        );
    }
    return (
        <div>
            <CartComp data={data} user={user}/>
        </div>
    );
}

export default Cart;
