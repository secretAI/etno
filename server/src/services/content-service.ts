import { ApiError } from "../exceptions/api-error";
import Post from "../models/Post";
import User from "../models/User";

class ConentService {
  async addPost(email: string, title: string, msg: string, content?: string) {
    try {
      const post = await Post.create({author: email, title: title, message: msg, content: content});

      return post;
    }
    catch(err) {
      console.log(err);
    }
  }

  async getAllPosts() {
    const posts = await Post.findAll({limit: 10});

    console.log(posts);
    return posts;
  }
}

export default new ConentService();
