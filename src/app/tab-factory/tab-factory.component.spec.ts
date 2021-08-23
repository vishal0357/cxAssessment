import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { TabFactoryComponent } from './tab-factory.component';

describe('TabFactoryComponent', () => {
  let component: TabFactoryComponent;
  let fixture: ComponentFixture<TabFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFactoryComponent ],
      providers: [Router]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
