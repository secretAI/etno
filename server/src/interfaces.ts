export interface IExpressApp {
  listen(port: string, callback: () => void): void;
}
