import { Hanlder } from "./Handler.class";
import { HttpRequest } from "./HttpRequest.class";

export class Compressor extends Hanlder {
    constructor(next: Hanlder | null) {
        super(next)
    }

    doHandle(request: HttpRequest): boolean {
        console.log('compress')
        return true;
    }
}