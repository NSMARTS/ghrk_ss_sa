import { Component, Input, OnInit, effect } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';
import { dropdownAnimation } from '../../animations/dropdown.animation';

@Component({
  selector: 'sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.css'],
  animations: [dropdownAnimation],
})
export class SidenavItemComponent implements OnInit{

  @Input() item: any;
  @Input() level: number = 0;
  @Input() user: boolean = false;

  isOpen: boolean = false;
  isActive: boolean = false;

  isLink = this.navigationService.isLink;
  isDropdown = this.navigationService.isDropdown;
  isSubheading = this.navigationService.isSubheading;
  // isCreateSpace = this.isSubheading.isCreateSpace;

  constructor(private navigationService: NavigationService) {
    // if(this.isDropdown(this.item)) {
    //   effect(() => this.navigationService.openedItem());
    // }
  }

  ngOnInit(): void {

    
    if(this.isDropdown(this.item)) {
      this.navigationService.openedItem$.subscribe(item => this.onOpenChange(item));
     
    }
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.navigationService.openedItem(this.item);
  }

  //드롭다운 버튼 90도 회전용 함수
  getRotateAngle() {
    return this.isOpen ? '90deg' : '0deg';
  }

  //드롭 다운 되었을 경우 다른 드롭다운 메뉴들은 닫혀야 한다.
  //하지만 예외 사항 존재 
  onOpenChange(item: any) {
    console.log('dkdkdkd')
    //1. 클릭한 메뉴가 내 자식일 경우
    if(this.isChildrenOf(this.item, item)) {
      return;
    }

    

    //3. 현재 내 dropdown에 대한 변경일 경우
    if(this.item === item) {
      return;
    }

    this.isOpen = false;
  }

  isChildrenOf(parent: any, item: any) {
    if (parent.children.indexOf(item) !== -1) {
      return true;
    }

    // 더 하위 child drop menu에 대한 check 수행.
    return parent.children
      .filter((child: any) => this.isDropdown(child))
      .some((child: any) => this.isChildrenOf(child as any, item));
  }
}
