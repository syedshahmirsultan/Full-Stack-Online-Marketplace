import { db, marketplacetable } from "@/lib/drizzle";
import { validateDelete, validatePOST, validateUserId } from "@/lib/utils";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";


export async function GET(req: NextRequest) {
    const url = req.nextUrl.searchParams;

    try {
        if (url.has('userid')) {
            const { userid } = validateUserId.parse({ userid: url.get('userid') });
            const cartData = await db.select().from(marketplacetable).where(eq(marketplacetable.userid, userid));
           console.log("CART DATA :",cartData);
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


export async function POST(req: NextRequest) {
    try {
        const rawPayload = await req.json();
        console.log("Received raw payload:", rawPayload);

        const payload = validatePOST.parse(rawPayload);
        console.log("Validated payload:", payload);

        const result = await db.insert(marketplacetable).values(payload).returning();
        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        console.error("Error processing POST request:", error);

        if (error instanceof z.ZodError) {
            console.log("Validation errors:", error.errors);
            return NextResponse.json({
                error: "Invalid Payload",
                details: error.errors
            }, { status: 422 });
        }

        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


export async function PUT(req:NextRequest){
    const body = await req.json()
    const validatedBody = validatePOST.parse(body);
    try {
        await db.update(marketplacetable).set(validatedBody).where(
            and(eq(marketplacetable.userid,validatedBody.userid),
                eq(marketplacetable.productid,validatedBody.productid)
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
        .delete(marketplacetable)
        .where(
          and(eq(marketplacetable.userid, userid), eq(marketplacetable.productid, productid))
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