import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitySearchSummaryComponent } from './entity-search-summary.component';

describe('EntitySearchSummaryComponent', () => {
  let component: EntitySearchSummaryComponent;
  let fixture: ComponentFixture<EntitySearchSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitySearchSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitySearchSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
