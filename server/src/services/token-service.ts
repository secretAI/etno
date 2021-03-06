import jwt from "jsonwebtoken";
import { getEnv } from "../tools/getEnv";
import Token from "../models/Token";

const jwtAccess: string = getEnv("JWT_SECRET_ACCESS");
const jwtRefresh: string = getEnv("JWT_SECRET_REFRESH");

class TokenService {
  generateTokens(payload: object) {
    try {
      const accessToken: string = jwt.sign({payload}, jwtAccess, {
        expiresIn: 1800000 //30min
      });
      const refreshToken: string = jwt.sign({payload}, jwtRefresh, {
        expiresIn: 2592000000 //30days
      });
  
      return {
        accessToken: accessToken,
        refreshToken: refreshToken
      };
    }
    catch(err) {
      console.log(err);
    }
  }

  async saveToken(userid: string, reToken: string) {
    try {
      const result: any = await Token.findOne({where: {userid: userid}}); 
      if(result) {
        const updated = await Token.update(
          {reToken: reToken},
          {where: {userid: userid}}
        );

        return updated;
      }
      const token = await Token.create({reToken: reToken, userid: userid});

      return token;
    }
    catch(err) {
      console.log(err);
    }
  }

  async removeToken(reToken: string) {
    try {
      await Token.destroy({where: {reToken: reToken}});

      return `* Token has been removed: ${reToken} *`;
    }
    catch(err) {
      console.log(err);
    }
  }

  validateToken(token: string, envSecret: string) {
    try {
      const result = jwt.verify(token, getEnv(envSecret));
      return result;
    }
    catch(err) {
      console.log(err);
      return null;
    }
  }
}

export default new TokenService();
