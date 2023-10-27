import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLivroComponent } from './lista-livro.component';

describe('ListaLivroComponent', () => {
  let component: ListaLivroComponent;
  let fixture: ComponentFixture<ListaLivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLivroComponent]
    });
    fixture = TestBed.createComponent(ListaLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
