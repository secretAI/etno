import { ApiError } from "../exceptions/api-error";
import Post from "../models/Post";
import User from "../models/User";

class ConentService {
  async addPost(email: string, msg: string, content?: string) {
    try {
      const user = await User.findOne({where: {email: email}});
      if(!user) {
        throw ApiError.requestError("* Such user doesn't exist *");
      }
      const post = await Post.create({author: email, message: msg, content: content});

      return post;
    }
    catch(err) {
      console.log(err);
    }
  }


}

export default new ConentService();
