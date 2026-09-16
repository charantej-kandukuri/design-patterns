export abstract class UIControl2 {
    enable() {
        console.log("Enabled.")
    }

    // The draw method will be different for text box, checkbox etc.
    abstract draw(): void;
}