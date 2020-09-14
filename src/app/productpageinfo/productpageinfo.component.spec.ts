import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpageinfoComponent } from './productpageinfo.component';

describe('ProductpageinfoComponent', () => {
  let component: ProductpageinfoComponent;
  let fixture: ComponentFixture<ProductpageinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpageinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpageinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
