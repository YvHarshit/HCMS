import { registerHospitalAdmin } from "../services/hospitalAdmin.service";


export async function createHospitalAdminController(req : Request) {
    try {
        const body = await req.json()
        const {name, email, hospitalName, passkey, phone, password} = body ;

        console.log("Recieved H.Admin Data : ", name, email, hospitalName, passkey, phone, password )
        console.log( " body : " , body)


        if(!name || !email || ! password || !passkey || !hospitalName || !phone)
          return Response.json(
        {
          success: false,
          message: "All required fields must be provided",
        },
        { status: 400 }
      );
      if(passkey !== process.env.ADMIN_PASSKEY) {
          return Response.json(
              {
                  success: false,
                  message: "Invalid passkey",
              },
              { status: 400 }
          );
      }

      const hospitalAdmin = await registerHospitalAdmin({name, email, hospitalName, passkey, phone, password}) ;

      return Response.json ({
        success : true ,
        message : "Hospital Admin Account Created Successfully. Waiting for Approval.",
        data : hospitalAdmin
      }, {status : 201}) ;
    

        
    } catch (error : unknown) {
        if(error instanceof Error) {
            console.log("Error message : ", error.message)
            console.log("Error Stack : ", error.stack)
        }
        else console.log("Un-expected Error : ", error)

        return Response.json ({
            success : false ,
            message : "Failed to create Hospital Admin Account"
        })
        
    }

}