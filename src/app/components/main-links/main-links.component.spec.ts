import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLinksComponent } from './main-links.component';

describe('MainLinksComponent', () => {
  let component: MainLinksComponent;
  let fixture: ComponentFixture<MainLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
