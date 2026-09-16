import { CheckBox } from "./CheckBox";
import { UIControl2 } from "./UIControl2.abstract.class"

function main() {
    drawUIControl(new CheckBox())
}

function drawUIControl(control: UIControl2) {
    control.draw()
}

main();