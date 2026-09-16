
export interface Compressor {
    compress(): void
}

export interface Filter {
    apply(): void
}

export class PngCompressor implements Compressor {
    compress(): void {
        console.log('image compressed using PNG compressor.')
    }
}

export class JPEGCompressor implements Compressor {
    compress(): void {
        console.log('image compressed using JPEG compressor.')
    }
}

export class BlackAndWhiteFilter implements Filter {
    apply(): void {
        console.log('black and white filter applied.')
    }
}


// export class ImageStore {

//     constructor(private compressor: Compressor, private filter: Filter) {}

//     store(filename: string) {
//        this.compressor.compress()
//        this.filter.apply()
//     }
// }

// ** (OR) 
// when you want different compressor and filter evertime.
// we can pass compressor and filter as part or store argument,

export class ImageStorage {
    store(filename: string, compressor: Compressor, filter: Filter) {
        compressor.compress()
        filter.apply()
    }
}