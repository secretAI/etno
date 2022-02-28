import bcrypt from "bcrypt";
// import {v4 as uuidv4} from "uuid";
// import { getEnv } from "../tools/getEnv";
import User from "../models/User";
import { ApiError } from "../exceptions/api-error";
import TokenService from "./token-service";

class UserService {
  async bindTokens(user: any, msg: string) {
    const tokens = TokenService.generateTokens({...user});
    await TokenService.saveToken(user.id, tokens.refreshToken);

    return {
      refresh: tokens.refreshToken,
      access: tokens.accessToken,
      user: user,
      message: msg
    };
  }

  async signUp(email: string, password: string) {
    try {
      const result = await User.findOne({where: {email: email}});
      if(result) throw ApiError.requestError(`Ошибка. Email ${email} занят`);
      const _password: string = await bcrypt.hashSync(password, 7);
      const user: any = await User.create({email: email, password: _password});
      
      return this.bindTokens(user, "SignUp - Success");
    }
    catch(err) {
      console.log(err);
    }
  }

  async logIn(email: string, password: string) {
    try {
      const user: any = await User.findOne({where: {email}});
      if(!user) throw ApiError.requestError(`Пользователь ${email} не найден`);
      const arePassesEqual = await bcrypt.compare(password, user.password);
      if(!arePassesEqual) throw ApiError.requestError("Неверный пароль");
      
      return this.bindTokens(user, "Login - Success");
    }
    catch(err) {
      console.log(err);
    }
  }

  async logOut(reToken: string) {
    const token = await TokenService.removeToken(reToken);
    
    return token;
  }
}

export default new UserService();
