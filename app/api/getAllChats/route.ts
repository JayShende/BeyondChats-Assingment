import { client } from "@/app/lib";
import { NextResponse } from "next/server";


export async function GET(){
    try{
        const response=await client.userChats.findMany();
        return NextResponse.json(response)
    }catch{
        return NextResponse.json({
            error:"DB Call Failed"
        },{
            status:403
        })
    }
}
