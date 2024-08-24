import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAdminComponent } from './componente-admin.component';

describe('ComponenteAdminComponent', () => {
  let component: ComponenteAdminComponent;
  let fixture: ComponentFixture<ComponenteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
