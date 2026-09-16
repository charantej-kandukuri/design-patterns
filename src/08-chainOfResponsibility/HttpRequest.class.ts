import { Hanlder } from "./Handler.class";

export class HttpRequest {
  constructor(
    private username: string,
    private password: string,
  ) {}

  public getUsername(): string {
    return this.username;
  }

  public getPassword(): String {
    return this.password;
  }
}
