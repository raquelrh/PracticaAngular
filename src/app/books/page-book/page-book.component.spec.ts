import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBookComponent } from './page-book.component';

describe('PageBookComponent', () => {
  let component: PageBookComponent;
  let fixture: ComponentFixture<PageBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
