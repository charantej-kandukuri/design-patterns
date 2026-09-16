import { Hanlder } from "./Handler.class";
import { HttpRequest } from "./HttpRequest.class";

export class Authenticator extends Hanlder {
  constructor(next: Hanlder) {
    super(next);
  }

  doHandle(request: HttpRequest): boolean {
    const isValid =
      request.getUsername() == "admin" && request.getPassword() == "1234";

    console.log("authentication");
    return !isValid;
  }
}
