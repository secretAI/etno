import { connectToDB } from "./database/main";
import { getEnv } from "./tools/getEnv";
import { IExpressApp } from "./interfaces";

const port = getEnv("PORT");
const host = getEnv("HOST");

export async function startApp(target: IExpressApp) {
  try {
    await connectToDB();
    target.listen(port, () => {
      console.log(`* App has started... *
      ${host}:${port}`);
    });
  }
  catch(err) {
    console.log(err);
  }
}

