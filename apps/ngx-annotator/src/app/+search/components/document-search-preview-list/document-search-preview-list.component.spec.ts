import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSearchPreviewListComponent } from './document-search-preview-list.component';

describe('DocumentSearchPreviewListComponent', () => {
  let component: DocumentSearchPreviewListComponent;
  let fixture: ComponentFixture<DocumentSearchPreviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSearchPreviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSearchPreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
