import {drizzle} from 'drizzle-orm/vercel-postgres'
import {sql} from '@vercel/postgres'
import {  integer, pgTable, varchar } from 'drizzle-orm/pg-core'
import { InferModel } from 'drizzle-orm'


export const marketplacetable = pgTable("marketplacetable",{
    userid :varchar('userid', {length : 255}).notNull(),
    productid :varchar('productid', {length : 255}).notNull(),
    quantity : integer('quantity')
})


export type typeOfCart = InferModel<typeof marketplacetable>

export const db = drizzle(sql);
