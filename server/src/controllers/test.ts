/* eslint-disable @typescript-eslint/no-explicit-any */
import {v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";
import { User } from "../models/User";

class Test {
  async getAllUsers(req: any, res: any , next: any) {
    try {
      const users = await User.findAll();
      console.log(users);
      
      return res.json(users);
    }
    catch(err) {
      console.log(err);
    }
  }

  async createNewUser(req: any, res: any, next:any) {
    const {email, password} = req.body;
    const id: string = uuidv4();
    const _password: string = await bcrypt.hash(password, 7);
    const newUser = await User.create({
      id,
      email,
      password: _password
    });
    console.log(newUser);
    return res.json(newUser);
  }
}

export default new Test();
