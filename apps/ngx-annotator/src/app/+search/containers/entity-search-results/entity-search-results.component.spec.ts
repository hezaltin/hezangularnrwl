import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitySearchResultsComponent } from './entity-search-results.component';

describe('EntitySearchResultsComponent', () => {
  let component: EntitySearchResultsComponent;
  let fixture: ComponentFixture<EntitySearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitySearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitySearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
