import React from 'react';
import HamBurgerComp from './HamBurgerComp';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const HamBurger = async() => {
    const {getUser} = getKindeServerSession();
  const user = await getUser();
    return (
        <div>
        <HamBurgerComp user={user}/>
        </div>
    );
}

export default HamBurger;
