import { Injectable, signal } from '@angular/core';
import { sidenavRouteInfo } from '../../config/sidenav-route-info';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  //signal 사용
  items: any = signal(sidenavRouteInfo);
  //signal 변화 감지
  items$ = toObservable(this.items);


  //드롭다운 아이템 중 현재 열려있는 아이템을 저장할 변수 
  openedItem: any = signal<any | undefined>(undefined);
  //현재 드롭다운 된 아이템 
  openedItem$ = toObservable(this.openedItem);

  constructor() { }

  isLink(item : any) {
    return item.type === 'link'
  }

  isDropdown(item: any) {
    return item.type === 'dropdown'
  }

  isSubheading(item: any) {
    return item.type === 'subheading'
  }

  isCreateSpace(item: any) {
    return item.type === 'click'
  }
}
