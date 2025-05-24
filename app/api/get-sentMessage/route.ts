import { client } from "@/app/lib";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){

    const data=await req.json();
    const chatId=data.chatId;

    try{
        const response = await client.sendMessage.findMany({
            where:{
                userId:chatId
            }
        })
        return NextResponse.json(response)
    }
     catch{
        return NextResponse.json({
            error:"DB Call Failed"
        },{
            status:403
        })
    }
}