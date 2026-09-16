import { Hanlder } from "./Handler.class";
import { HttpRequest } from "./HttpRequest.class";

export class WebServer {
   constructor(private handler: Hanlder) {}

    handle(request: HttpRequest) {
        this.handler.handle(request)
    }

}