import Patient from "@/models/Patient";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server"
import { createToken } from "@/lib/jwt";

export function GET() {
    return NextResponse.json ({
        message : "Login Route"
    })
}

export async function POST(req: NextRequest) {
    const cookieStore = await cookies()
    try {
        const data = await req.json() ;
        const {email, password} = data ;

        if(!email || !password) {
            return NextResponse.json ({
                success : false ,
                message : "Fields should not be empty"
            })
        }

        const user = await Patient.findOne({ email })
        if(!user) {
            return NextResponse.json ({
                succes : false  ,
                message : "Invalid Email"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return NextResponse.json ({
                success : false ,
                message : "Invalid Password"
            })
        }
        // const token = jwt.sign({id:user._id}, process.env.JWT_SECRET as string, {expiresIn : '1d'})
        const token = createToken({_id: user._id.toString()});

        cookieStore.set("token", token , {
            httpOnly : true ,
            secure : true ,
            sameSite : "lax" ,
            path : "/" ,
        })

        return NextResponse.json ({
            success : true ,
            message : `${user.name} get logged-in successfully.`
        })
        
    } catch (error : unknown) {
        if(error instanceof Error) {
            console.log("Error Message : ", error.message)
            console.log("Error Stack : ", error.stack)
        }
        else console.log("Un-expected error : ", error)

        return NextResponse.json ({
            success : false ,
            message : "Login Failed"
        })
        
    }

}