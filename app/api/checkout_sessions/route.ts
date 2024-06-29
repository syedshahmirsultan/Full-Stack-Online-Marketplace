import singleProductType from '@/types';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

interface typeOfData {
  price: string;
  quantity: number; 
  name: string;
}

const originalData: Array<typeOfData> = [
  { price: "price_1PX1fWE9slNBw1m70U9nEubv", quantity: 1, name: "Bobby" },
  { price: "price_1PX1eRE9slNBw1m7Quhr5wea", quantity: 1, name: "Full Furniture Set" },
  { price: "price_1PX1dFE9slNBw1m7RBTwfk4l", quantity: 1, name: "Tesla" },
  { price: "price_1PX1byE9slNBw1m7Dn8fAKW1", quantity: 1, name: "Painting" },
  { price: "price_1PX1anE9slNBw1m7tOr5AqOC", quantity: 1, name: "Food Recipe" },
  { price: "price_1PX1ZPE9slNBw1m7sOmwoIBZ", quantity: 1, name: "Office chair" },
  { price: "price_1PX1Y2E9slNBw1m7MVTuDHCz", quantity: 1, name: "Vaccum Cleaner" },
  { price: "price_1PX1WkE9slNBw1m7wqOFoOFj", quantity: 1, name: "Monopoly" },
  { price: "price_1PX1VUE9slNBw1m7WcbMWpMY", quantity: 1, name: "Fridge" },
  { price: "price_1PX1UJE9slNBw1m77mZNhHoA", quantity: 1, name: "Led Stand light" },
  { price: "price_1PX1SyE9slNBw1m7dEb15OIu", quantity: 1, name: "Tesa Robot" },
  { price: "price_1PX1PEE9slNBw1m783Y935Da", quantity: 1, name: "Running shoes" },
  { price: "price_1PX1NyE9slNBw1m72sZqoz4z", quantity: 1, name: "Mobile Antenna Booster" },
  { price: "price_1PX1MZE9slNBw1m7YPu7yqHM", quantity: 1, name: "Tennis Racquet" },
  { price: "price_1PX1LVE9slNBw1m7a5n9AJkV", quantity: 1, name: "Chess" },
  { price: "price_1PX1KGE9slNBw1m74fctdwS7", quantity: 1, name: "Wifi Cameras" }
];

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string);
export async function POST(req: NextRequest) {
  let cartItemArray: singleProductType[] = await req.json();
  try {
    const line_items = cartItemArray.map(cartItem => {
      const product = originalData.find(item => item.name === cartItem.productname);
      if (!product) {
        throw new Error(`Product not found: ${cartItem.productname}`);
      }
      return {
        price: product.price,
        quantity: product.quantity, // Correct quantity mapping
      };
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${req.nextUrl.origin}/?success=true`,
      cancel_url: `${req.nextUrl.origin}/?success=false`,
    });

    console.log("Session URL:", session.url);
    return NextResponse.json({ link: session.url });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return NextResponse.json({ error: error });
  }
}