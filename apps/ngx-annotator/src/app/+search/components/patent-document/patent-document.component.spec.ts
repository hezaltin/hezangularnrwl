import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentDocumentComponent } from './patent-document.component';

describe('PatentDocumentComponent', () => {
  let component: PatentDocumentComponent;
  let fixture: ComponentFixture<PatentDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
