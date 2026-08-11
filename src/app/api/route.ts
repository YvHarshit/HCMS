import { NextResponse } from "next/server";

export function GET() {
    const data = [
        {name : "Harshit"} ,
        {name : "Aditya Raj"} 
    ];


    return NextResponse.json({
        message : "You both are the BEST" ,
        data : data,
    },
    { status : 200} 
  );
}


export async function POST(req: Request) {
    try {
        const body = await req.json() ;

        if (!body || Object.keys(body).length === 0) {
            return NextResponse.json ({
                status : false ,
                message : "Field is empty"
            },
        { status: 400 }
        )
      }
    //   console.log(body.id)
    //   console.log(body.name)
      return NextResponse.json({
        status : true ,
        message : "Data get Recieved" ,
        body ,
      },
    { status: 200 }
)
        
    } catch (error : unknown) {
        if(error instanceof Error){
            console.log(error.stack)
            console.log(error.message)
        }        
        else console.log("Un-expected Error : ", error)
    }
      return NextResponse.json(
       { status: false, message: "Invalid JSON or server error" },
       { status: 500 }
    );
}
