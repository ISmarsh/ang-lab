import { Named } from "../types";

export class Index<T extends Named> extends Array<T> {
  constructor(...values: T[]) {
    super(...values);

    values.forEach(v => this.byName[v.name] = v);
  }

  byName: { [name: string]: T } = {};
}

export class CategoryIndex<T extends Named> extends Index<T> {
  constructor(index: { [category: string]: T[] }) {
    var array = new Array<T>();

    for (const category in index) {
      array = array.concat(index[category]);
    }

    super(...array);

    this.byCategory = index;
  }

  byCategory: { [category: string]: T[] };
}
