import { BrowseHistory, Iterator } from "./browse-hostory.class";

const browserHistory = new BrowseHistory();
const urls = browserHistory.urls;
urls.push('a')
urls.push('b')
urls.push('c')

// for (let i = 0; i< urls.length; i++) {
//     console.log(urls[i])
// }

const iterator: Iterator = browserHistory.createIterator()

while(iterator.hasNext()) {
    const url = iterator.current();
    console.log(url);
    iterator.next()
}