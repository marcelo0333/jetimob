import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginatePipe, PaginationService } from 'ngx-pagination';
import { Book } from 'src/app/book';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-lista-livro',
  templateUrl: './lista-livro.component.html',
  styleUrls: ['./lista-livro.component.scss'],
  providers: [PaginationService],

})
export class ListaLivroComponent implements OnInit{
  books: any;
  itemsPerPage = 5;
  currentPage = 1;

  ngOnInit(): void {
    this.getBookData();
  }
  constructor(private dataService:DataService){

  }
  getBookData() {
    this.dataService.getData().subscribe((res: any) => {
        this.books = res.data;
    });
  }
  deleteBookData(identify: any){
    console.log(identify);
    this.dataService.deleteData(identify).subscribe(res =>{
      this.getBookData();
    })
}
  get pages(): number[] {
    return Array(Math.ceil(this.books.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }
}
