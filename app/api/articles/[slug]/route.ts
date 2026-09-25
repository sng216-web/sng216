import {NextResponse} from "next/server";
import {supabaseAdmin} from "../../../../lib/supabase";
export async function GET(_:Request,{params}:{params:Promise<{slug:string}>}){const {slug}=await params;const {data,error}=await supabaseAdmin().from("articles").select("*").eq("slug",slug).single();if(error)return NextResponse.json({error:error.message},{status:404});return NextResponse.json(data);}