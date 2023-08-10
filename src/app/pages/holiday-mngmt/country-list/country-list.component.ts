import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryAddComponent } from '../country-add/country-add.component';
import { CountryService } from 'src/app/@dw/services/leave/country/country.service'; 
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/@dw/store/data.services';
import { takeUntil } from 'rxjs';

export interface PeriodicElement{
  ch_name: string;
  ch_date: string;
}

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // view tavle
  displayedColumns: string[] = ['conuntryName', 'countryCode', 'btns'];
  // dataSource = ELEMENT_DATA;
  private unsubscribe$ = new Subject<void>();

  // 전역 변수 선언
  countryList;
  userInfo;

  temp = {
    _id: {
      $oid: '6216e342f9b4cfb6440d0d47',
    },
    countryCode: 'SG',
    countryHoliday: [
      {
        holidayName: 'sing1',
        holidayDate: '2022-03-02',
      },
      {
        holidayName: 'sing2',
        holidayDate: '2022-03-09',
      },
      {
        holidayName: 'sing3',
        holidayDate: '2022-03-16',
      },
    ],
    countryName: 'Singapore',
  };
  constructor(
    public dataService: DataService,
    // public dialog: MatDialog,
    private countryService: CountryService
  ) {}

  //  ngOnInit 라이프사이클 훅을 사용하여 초기화 로직을 구현, Angular 컴포넌트가 초기화되고 뷰가 생성된 후에 호출되는 메서드로, 컴포넌트의 초기 설정 및 데이터 불러오기와 같은 작업을 처리하기에 적합한 장소입니다.
  ngOnInit(): void {
    // pipe(takeUntil(this.unsubscribe$)): takeUntil 연산자는 파기 시에 구독을 취소하기 위해 사용됩니다. this.unsubscribe$ 스트림이 방출하는 값을 기반으로, 컴포넌트가 파기될 때 해당 스트림을 구독 취소합니다.
    // 구독 메서드(subscribe)는 스트림에 값을 전달할 때 호출
    // this.dataService.userProfile.pipe(takeUntil(this.unsubscribe$)).subscribe(
    //   (data: any) => {
    //     this.userInfo = data;
    //   },
    //   (err: any) => {
    //     console.log(err);
    //   }
    // );
    console.log("asdas")
    this.getCountryList();
  }

  // openAddCountry() {
  //   const dialogRef = this.dialog.open(CountryAddComponent);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.getCountryList();
  //   });
  // }

  //  이 훅은 컴포넌트가 파기되기 직전에 호출되며, 구독 해제 및 메모리 누수를 방지하거나 자원을 정리
  ngOnDestroy() {
    // unsubscribe all subscription
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getCountryList() {
    // this.countryService.getCountryList().subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     if (data.message == 'getCountry') {
    //       this.countryList = data.getCountry;
    //     }
    //     // MatTableDataSource로 변환하여 this.countryList에 할당합니다. 이 데이터 소스는 Angular Material의 데이터 표시 컴포넌트에서 사용되며, 테이블에서 표시 및 페이징 기능을 제어합니다.
    //     this.countryList = new MatTableDataSource<PeriodicElement>(
    //       data.getCountry
    //     );
    //     console.log(this.countryList);
    //     this.countryList.paginator = this.paginator;
    //   },
    //   (err: any) => {
    //     console.log(err.error.message);
    //   }
    // );
    this.countryList = this.temp
    console.log(this.countryList)
  }
}
