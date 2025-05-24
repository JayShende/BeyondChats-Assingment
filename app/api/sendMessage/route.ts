import { client } from "@/app/lib";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){
    const data=await req.json();

    try{
        const response=await client.sendMessage.create({
            data:{
                sent_message:data.msg,
                userId:data.chatId
            }
        });
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