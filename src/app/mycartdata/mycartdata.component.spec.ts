import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycartdataComponent } from './mycartdata.component';

describe('MycartdataComponent', () => {
  let component: MycartdataComponent;
  let fixture: ComponentFixture<MycartdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycartdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycartdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
