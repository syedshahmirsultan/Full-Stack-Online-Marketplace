import React from 'react';
import { typeOfCart } from '@/lib/drizzle';
import singleProductType from '@/types';


const Pricing = ({ productData, data }: { productData: singleProductType[], data: typeOfCart[] }) => {
  const shipping = 0;

//   async function handleProcessCheckout() {
//     // Include quantity in productData
//     const productsWithQuantity = productData.map(product => {
//       const cartItem = data.find(item => item.productid === product._id);
//       return {
//         ...product,
//         quantity: cartItem ? cartItem.quantity : 0
//       };
//     });

//     try {
//       let response = await fetch(`https://shahmir-full-stack-ecommerce-website.vercel.app/api/checkout_session`, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(productsWithQuantity),
//       });

//       let result = await response.json();
//       console.log("HANDLE PROCESS CHECKOUT:", result);

//       if (result.link) {
//         window.location.href = result.link; // Redirect to Stripe checkout page
//       } else {
//         console.error("Error in fetching Stripe URL:", result.error);
//       }
//     } catch (error) {
//       console.error("Error processing checkout:", error);
//     }
//   }

  const orderTotal = productData.reduce((total, priceItem) => {
    const quantityItem = data.find(item => item.productid === priceItem._id);
    return quantityItem ? total + priceItem.price * (quantityItem.quantity as number) : total;
  }, 0);

  return (
    <div className="flex flex-col space-y-6 px-6 mt-20">
      <h6 className="font-bold text-2xl mb-10">Order Summary</h6>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Quantity:</p>
        <p className="font-bold">{data.reduce((total, item) => total + (item.quantity as number), 0)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Order Total:</p>
        <p className="font-bold">${orderTotal}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Shipping:</p>
        <p className="font-bold">${shipping}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Subtotal:</p>
        <p className="font-bold">${orderTotal + shipping}.00</p>
      </div>
      <button 
        // onClick={handleProcessCheckout}
        className="text-white bg-gray-900 border border-gray-500 px-4 py-2 w-full">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Pricing;