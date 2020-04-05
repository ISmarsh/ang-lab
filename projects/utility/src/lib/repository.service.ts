import { Injectable } from '@angular/core';
import { Entity } from './classes/entity';
import { Ctor, Path } from './types';
import { TypedJSON } from 'typedjson';

@Injectable({
  providedIn: 'root'
})
export class Repository {

  constructor() { }
  
  public save<T extends Entity>(type: Ctor<T>, item: T, ...path: Path): T {
    var collection = this.get(type, ...path) || [];

    if (item.id === undefined) {
      item.id = 0;

      while (collection.some(i => i.id == item.id)) {
        item.id++;
      }
    }

    collection[item.id] = item;

    var key = this.getKey(type, path);

    localStorage.setItem(key, TypedJSON.stringifyAsArray(collection, type));

    return item;
  }

  public get<T extends Entity>(type: Ctor<T>, ...path: Path): T[] {
    var key = this.getKey(type, path);

    var item = localStorage.getItem(key) || "[]";

    return TypedJSON.parseAsArray(item, type);
  }

  private getKey<T>(type: Ctor<T>, path: Path): string {
    if (type) {
      var name = Reflect.getMetadata("name", type);

      path.splice(0, 0, name);
    } 

    return path.join("/");
  }
}
