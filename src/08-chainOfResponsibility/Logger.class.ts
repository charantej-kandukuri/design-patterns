import { Hanlder } from "./Handler.class";
import { HttpRequest } from "./HttpRequest.class";

export class Logger extends Hanlder {
  constructor(next: Hanlder) {
    super(next);
  }

  doHandle(request: HttpRequest): boolean {
    console.log("Log");
    return false;
  }
}
