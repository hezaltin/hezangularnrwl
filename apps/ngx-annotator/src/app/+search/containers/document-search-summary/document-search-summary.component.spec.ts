import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSearchSummaryComponent } from './document-search-summary.component';

describe('DocumentSearchSummaryComponent', () => {
  let component: DocumentSearchSummaryComponent;
  let fixture: ComponentFixture<DocumentSearchSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSearchSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSearchSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
