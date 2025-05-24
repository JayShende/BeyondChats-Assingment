import { client } from "@/app/lib";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){
    const data=await req.json();
    try{
        const response=await client.userChats.create({
            data:{
                name:data.name,
                message:data.message,
                lastMsg:data.lastMsg,
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

export async function GET(req:NextRequest){
    const data=await req.json();
    const id=data.chatId;

    try{
        const response=await client.userChats.findUnique({
            where:{
                id:id
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