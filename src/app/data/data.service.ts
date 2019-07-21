import {Injectable} from '@angular/core';
import {Post} from '../Post';
import {Observable, of} from 'rxjs';

@Injectable()
export class DataService {

  ELEMENT_DATA: Post[] = [
    {id: 0, title: 'Life', body: 'Hello', isPublished: true, userId: 0},
    {id: 1, title: 'Eng', body: 'Hello', isPublished: true, userId: 1},
    {id: 2, title: 'Post', body: 'Hello', isPublished: true, userId: 2},
    {id: 3, title: 'lost', body: 'Hello', isPublished: true, userId: 3},
  ];

  constructor() {
  }

  getData(): Observable<Post[]> {
    return of<Post[]>(this.ELEMENT_DATA);
  }

  addPost(data) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}
