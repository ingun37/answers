import { Injectable } from '@angular/core';
import { Subscriber, Observable, merge, Subject } from 'rxjs';
import { sampleTime } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class MathService {

  subject = new Subject<string>();
  aaa(mark: string) {
    this.subject.next(mark);
  }
  constructor() {
    this.subject.pipe(sampleTime(1000)).subscribe({
      next(x) {
      }
    });
  }
}