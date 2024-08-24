import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteOperadorComponent } from './componente-operador.component';

describe('ComponenteOperadorComponent', () => {
  let component: ComponenteOperadorComponent;
  let fixture: ComponentFixture<ComponenteOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
