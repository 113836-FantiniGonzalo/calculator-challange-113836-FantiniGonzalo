import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteResultadoComponent } from './componente-resultado.component';

describe('ComponenteResultadoComponent', () => {
  let component: ComponenteResultadoComponent;
  let fixture: ComponentFixture<ComponenteResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteResultadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
