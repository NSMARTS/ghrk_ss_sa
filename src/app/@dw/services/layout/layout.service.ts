import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  isDesktop = signal(false);
  isDesktop$ = toObservable(this.isDesktop);
  constructor() { }
}
