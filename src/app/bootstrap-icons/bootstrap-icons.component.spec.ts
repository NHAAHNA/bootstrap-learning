import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapIconsComponent } from './bootstrap-icons.component';

describe('BootstrapIconsComponent', () => {
  let component: BootstrapIconsComponent;
  let fixture: ComponentFixture<BootstrapIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
