import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSearchPreviewComponent } from './document-search-preview.component';

describe('DocumentSearchPreviewComponent', () => {
  let component: DocumentSearchPreviewComponent;
  let fixture: ComponentFixture<DocumentSearchPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSearchPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSearchPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
