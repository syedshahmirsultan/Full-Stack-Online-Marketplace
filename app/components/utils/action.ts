"use server"

import { revalidatePath } from "next/cache"

export default async function refreshData(){
revalidatePath('/cart')
}