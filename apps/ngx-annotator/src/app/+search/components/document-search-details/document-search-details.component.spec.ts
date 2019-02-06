import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSearchDetailsComponent } from './document-search-details.component';

describe('DocumentSearchDetailsComponent', () => {
  let component: DocumentSearchDetailsComponent;
  let fixture: ComponentFixture<DocumentSearchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSearchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
