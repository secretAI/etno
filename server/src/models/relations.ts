import User from "./User";
import Token from "./Token";
import Post from "./Post";

User.hasOne(Token);
User.hasMany(Post);
