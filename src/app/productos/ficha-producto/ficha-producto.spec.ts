import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaProducto } from './ficha-producto';

describe('FichaProducto', () => {
  let component: FichaProducto;
  let fixture: ComponentFixture<FichaProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaProducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
