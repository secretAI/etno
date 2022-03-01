// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

export function getEnv(key: string): string {
  const value = process.env[key];
  if(value) return value;
  console.log(`* ${key} was not found in .env *`);

  process.exit(1);
}
