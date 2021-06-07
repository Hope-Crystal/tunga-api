import { Request, Response } from "express";
import Auth from "../modules/auth";

class AuthController {


    
    static login(req:Request,res:Response) {

        const {email, password} = req.body;

        const auth =  new Auth()

        const result = auth.login(email, password)


        res.send({message: 'Login successful'})

    }


    static register(req:Request, res:Response) {
        const {name, email, password} = req.body
        const auth = new Auth()
        const result = auth.register(name, email, password)

        res.send({
            message: `Account successfully created ${name}, ${email}`
    })
    }

}

export default AuthController;