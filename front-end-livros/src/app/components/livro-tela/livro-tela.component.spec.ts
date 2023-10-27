import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroTelaComponent } from './livro-tela.component';

describe('LivroTelaComponent', () => {
  let component: LivroTelaComponent;
  let fixture: ComponentFixture<LivroTelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroTelaComponent]
    });
    fixture = TestBed.createComponent(LivroTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
