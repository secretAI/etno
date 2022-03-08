import Post from "../models/Post";

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
    try {
      const posts = await Post.findAll({limit: 10});

      console.log(posts);
      return posts;
    }
    catch(err) {
      console.log(err);
    }
  }

  async removePost(author: string, date: string) {
    try {
      const removed = await Post.destroy({where: {author: author, date: date}});

      console.log(removed);
      return `* Post of ${author} from ${date} was deleted! *`;
    }
    catch(err) {
      console.log(err);
    }
  }
}

export default new ConentService();
