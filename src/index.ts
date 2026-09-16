interface Filter {
    apply(): void
}

class CaramelFilter implements Filter {
    constructor(private caramel: Caramel){}
    apply(): void {
        this.caramel.applyFilter()   
    }
}

class Caramel {
    applyFilter() {
        console.log('caramel filter applied.')
    }
}

class ImageView {
    constructor(private filter: Filter) {}
    applyfilter() {
        this.filter.apply()
    }
}

class Main {
    constructor(args: []) {}

    static main() {
        var caramel = new Caramel()
        var caramelFilter = new CaramelFilter(caramel)
        var imageView = new ImageView(caramelFilter);
        imageView.applyfilter()

    }
}

Main.main();
