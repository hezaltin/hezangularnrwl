import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDocumentComponent } from './news-document.component';

describe('NewsDocumentComponent', () => {
  let component: NewsDocumentComponent;
  let fixture: ComponentFixture<NewsDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
