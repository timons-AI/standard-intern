import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { db } from "@/lib/db";

export async function POST(
  request: Request, 
) {
  const body = await request.json();
  console.log(body);
  const { 
    email,
    name,
    unhashedPassword,
   } = body;
    // check if the user already exists
    const existingUser = await db.user.findUnique({
        where: {
            email,
        }
    });
    
    if (existingUser) {
        console.log("User already exists",existingUser)

        return NextResponse.json({message: 'User already exists'})
    }

    else {
        console.log('Creating new User with email: ', email, ' and name: ', name, ' and password: ', unhashedPassword);
        const password = await bcrypt.hash(unhashedPassword, 12);

        const user = await db.user.create({
         data: {
           email,
           name,
           password,
         }
       });
        
       return NextResponse.json(user);
    }
}