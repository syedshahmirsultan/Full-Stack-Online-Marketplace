import React from 'react';
import Link from 'next/link'
const Footer = () => {
    return (
        <section className="flex flex-col mt-20 md:flex-row gap-y-8 p-12 md:justify-between w-full h-72 md:h-52 bg-slate-900 justify-start">
            <div>
            <Link href="/">
                    <h1 className='tracking-tight text-white text-3xl font-semibold lg:text-4xl'>TopShop</h1>
                </Link>
    <p className="text-md text-white mt-2">Online shopping made easy</p>

            </div>
            <div>
<p className="text-white text-sm">Fictional online marketplace built by <Link href="https://www.linkedin.com/in/syedshahmirsultan/" className="underline">@syedshahmirsultan.</Link></p>
 <p className="text-white text-sm mt-2 md:ml-16"><Link href="https://github.com/syedshahmirsultan/Full-Stack-Online-Marketplace">Source code available on GitHub.</Link></p>     
       </div>
        </section>
    );
}

export default Footer;
