import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
connectDb();

export async function GET(request){
let users=[];

try {
  users = await User.find().select("-password");
  
} catch (error) {
  console.log(error);
  return NextResponse.json({
    message: "failed to get users",
    success: false,
  });    
}

return NextResponse.json(users);
}

export async function POST(request) {
    // fetch user detail from request

    const {name,email,password,about,profileURL} = await request.json();
    console.log({name,email,password,about,profileURL});

        const user = new User({
        name,
        email,
        password,
        about,
        profileURL,
    });

    try {
      user.password = bcrypt.hashSync(
        user.password,
        parseInt(process.env.BCRYPT_SALT)
      );

        console.log(user);
        const createdUser = await user.save();
        const response = NextResponse.json(user, {
          status: 201,
        });
        return response;
      } catch (error) {
        console.log(error);
        return NextResponse.json(
          {
            message: "failed to create user !!",
            status: false,
          }
      
        );
      }
    }


