export interface Iterator {
  hasNext(): boolean;
  current(): string;
  next(): void;
}

export class BrowseHistory {
  private _urls: string[] = [];

  push(url: string): void {
    this._urls.push(url);
  }

  pop(): string {
    const lastIndex = this._urls.length - 1;
    const lastUrl = this._urls[lastIndex];
    this._urls.pop();
    return lastUrl;
  }

  public get urls(): string[] {
    return this._urls;
  }

  createIterator(): Iterator {
    return new ArrayIterator(this);
  }
}

class ArrayIterator implements Iterator {
  private index: number = 0;

  constructor(private history: BrowseHistory) {}

  hasNext(): boolean {
    return this.index < this.history.urls.length;
  }

  current(): string {
    return this.history.urls[this.index];
  }

  next(): void {
    this.index++;
  }
}
