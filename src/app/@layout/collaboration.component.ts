import { Component, HostListener, WritableSignal, inject, signal } from '@angular/core';
import { LayoutService } from '../@dw/services/layout/layout.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.css']
})
export class CollaborationComponent {  
  isDesktop$: any;

  constructor(private layoutService: LayoutService){
    this.layoutService.isDesktop.set(window.innerWidth > 1280)
    this.layoutService.isDesktop$.subscribe(() => {
      this.isDesktop$ = this.layoutService.isDesktop()
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.layoutService.isDesktop.set(window.innerWidth > 1280)
  }

}
