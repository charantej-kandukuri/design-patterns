import { BlackAndWhiteFilter, ImageStorage, JPEGCompressor, PngCompressor } from "./imageStore";

// const imageStore = new ImageStore(new PngCompressor, new BlackAndWhiteFilter);
// imageStore.store()


function main() {
    const imageStore = new ImageStorage()
    // same image with diff compressors and filters.
    imageStore.store("a", new JPEGCompressor, new BlackAndWhiteFilter);
    imageStore.store("a", new PngCompressor, new BlackAndWhiteFilter);
}

main();