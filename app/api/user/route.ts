import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import {User} from "@/models/user";
export async function GET(request:Request){
    await connectDB();
    return NextResponse.json({
        "message":"connected to the datbase succesfully"
    })

}
export async function POST(request:Request){
    await connectDB();
    const body = await request.json();
    const {name,email,password}=body;
    if(!name || !email || !password){
        return NextResponse.json({
            "message":"Please fill all the fields"
        },{status:400})
    }else{
        const user = await new User({
            name:name,
            email:email,
            password:password,
            credentials:"crendentials"
        })
        await user.save();
        return NextResponse.json({
            "message":"the user has been created succesfully",
        },{status:201})
    }
}