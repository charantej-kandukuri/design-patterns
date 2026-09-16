import { Authenticator } from "./Authenticator.class";
import { Compressor } from "./Compressor.class";
import { HttpRequest } from "./HttpRequest.class";
import { Logger } from "./Logger.class";
import { WebServer } from "./WebServer.class";

class Main {
    static main() {
        // authenticator -> logger -> compressor
        var compressor = new Compressor(null)
        var logger = new Logger(compressor)
        var authenticator = new Authenticator(logger)

        var server = new WebServer(authenticator)
        server.handle(new HttpRequest("admin", "1234"))
    }
}

Main.main()