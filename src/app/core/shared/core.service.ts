import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {

  constructor() { }

  sort(array: any[], key: string) {
    return array.sort((a, b) => {
      return a[key] > b[key] ? 1 : -1;
    });
  }

}
