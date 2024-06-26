import { db, marketplaceTable } from "@/lib/drizzle";
import { validateDelete, validatePOST, validateUserId } from "@/lib/utils";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";


export async function GET(req: NextRequest) {
    const url = req.nextUrl.searchParams;

    try {
        if (url.has('userid')) {
            const { userid } = validateUserId.parse({ userid: url.get('userid') });
            const cartData = await db.select().from(marketplaceTable).where(eq(marketplaceTable.userid, userid));
            return NextResponse.json(cartData);
        } else {
            return NextResponse.json({ Message: "Userid Not Found" });
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({
                error: "Invalid Payload"
            }, {
                status: 422
            });
        }

        const rr = (error as { message: string }).message;
        return NextResponse.json({ error: rr });
    }
}




export async function POST (req:NextRequest){

    const body = await req.json()
    const validatedBody = validatePOST.parse(body);
    try {
const alreadyCartData = await db.select().from(marketplaceTable).where(and(eq(
    marketplaceTable.userid ,validatedBody.userid
), eq(marketplaceTable.productid,validatedBody.productid)))

 if (alreadyCartData.length > 0){
    const updatedData = {
        userid :validatedBody.userid,
        productid :validatedBody.productid,
        quantity :validatedBody.quantity as number + 1
        // quantity :alreadyCartData[0].quantity as number + 1
    }

await db.update(marketplaceTable).set(updatedData).where(
    and(eq(marketplaceTable.userid,validatedBody.userid),
        eq(marketplaceTable.productid,validatedBody.productid)
)
)
 return NextResponse.json({
    message :"gg"
 })
}

else {      
    const cartData = await db.insert(marketplaceTable).values(validatedBody).returning();
        return NextResponse.json(cartData) 
    } 
} catch (error) {
        if(error instanceof z.ZodError){
            return NextResponse.json ({
                error :"Invalid Payload"},
            {
                status :422
            })
        }
 
        const rr = (error as {message :string}).message
        return NextResponse.json ({ messaage:"ERROR FACING HERE"})
    }
}



export async function PUT(req:NextRequest){
    const body = await req.json()
    const validatedBody = validatePOST.parse(body);
    try {
        await db.update(marketplaceTable).set(validatedBody).where(
            and(eq(marketplaceTable.userid,validatedBody.userid),
                eq(marketplaceTable.productid,validatedBody.productid)
        )
        );
        return NextResponse.json({
            message :"OKAY !"
        })
    } catch (error) {
        if(error instanceof z.ZodError){
            return NextResponse.json ({
                error :"Invalid Payload"},
            {
                status :422
            })
        }
 
        const rr = (error as {message :string}).message
        return NextResponse.json ({error :rr})
    }
}



export async function DELETE(req: NextRequest) {
    const url = req.nextUrl.searchParams;
    const { userid, productid } = validateDelete.parse({
      userid: url.get("userid"),
      productid: url.get("productid"),
    });
  
    try {
      await db
        .delete(marketplaceTable)
        .where(
          and(eq(marketplaceTable.userid, userid), eq(marketplaceTable.productid, productid))
        );
      return NextResponse.json("OK");
    } catch (error) {
      if (error instanceof z.ZodError) {
        return NextResponse.json(
          { error: "Invalid request payload" },
          { status: 422 }
        );
      }
      let rr = (error as { message: string }).message;
      console.log("Error", rr);
      return NextResponse.json({ error: rr });
    }
  }