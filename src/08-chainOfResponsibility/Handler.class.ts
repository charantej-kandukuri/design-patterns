import { HttpRequest } from "./HttpRequest.class";

export abstract class Hanlder {
    private next: Hanlder | null;
    constructor(next: Hanlder | null) {
        this.next = next
    }
    
    handle(request: HttpRequest) {
        if(this.doHandle(request))
            return;

        if(this.next != null)
            this.next.handle(request)
    }

    protected abstract doHandle(request: HttpRequest): boolean

    
}