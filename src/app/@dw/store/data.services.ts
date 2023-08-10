import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// @Injectable 데코레이터를 사용하여 root 레벨에서 제공되며, 애플리케이션 전역에서 동일한 인스턴스가 사용됩니다.
@Injectable({
  providedIn: 'root',
})
export class DataService {
// BehaviorSubject를 활용한 데이터 관리: 서비스 내에 BehaviorSubject 인스턴스들을 생성하여 데이터를 관리합니다.  옵저버블이면서 동시에 상태를 유지할 수 있는 객체로, 새로운 구독자가 구독할 때 현재 상태를 즉시 전달할 수 있습니다.
  private userProfileSubject = new BehaviorSubject({});
  private userManagerProfileSubject = new BehaviorSubject({});
  private userCompanyProfileSubject = new BehaviorSubject({});

//  Observable은 비동기 데이터 스트림을 표현하고 다루기 위해 사용되는 개념 이 메서드는 해당 스트림을 Observable로 래핑하여 외부에서 이를 구독하되 스트림에 데이터를 직접 추가하거나 변경할 수 없도록 합니다.
// asObservable로 래핑된 스트림은 읽기 전용으로만 사용될 수 있습니다.
//   이렇게 하면 다른 컴포넌트나 서비스에서 userProfile, userManagerProfile 등의 Observable을 구독할 수 있지만, 이들 스트림에 데이터를 직접 추가하거나 변경하는 것은 불가능합니다. 
  userProfile = this.userProfileSubject.asObservable();
  userManagerProfile = this.userManagerProfileSubject.asObservable();
  userCompanyProfile = this.userCompanyProfileSubject.asObservable();

  updateUserProfile(profileData: any) {
    this.userProfileSubject.next(profileData);
  }

  updateUserManagerProfile(profileData: any) {
    this.userManagerProfileSubject.next(profileData);
  }

  updateUserCompanyProfile(profileData: any) {
    this.userCompanyProfileSubject.next(profileData);
  }
}