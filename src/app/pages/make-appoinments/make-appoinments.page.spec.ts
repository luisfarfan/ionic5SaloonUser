import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeAppoinmentsPage } from './make-appoinments.page';

describe('MakeAppoinmentsPage', () => {
  let component: MakeAppoinmentsPage;
  let fixture: ComponentFixture<MakeAppoinmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeAppoinmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeAppoinmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
