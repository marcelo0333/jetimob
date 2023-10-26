import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{
  book = new Book
  books:any;
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.getBookData();
  }
  getBookData() {
    this.dataService.getData().subscribe((res: any) => {
        this.books = res.data;
    });
  }
  insertData(newBook: any) {
    this.dataService.insertData(newBook).subscribe((res: any) => {
      this.getBookData();
      console.log('Livro inserido com sucesso:', res.data);
    }, (error) => {
        console.error('Erro ao realizar a inserção:', error);
    });
}
    deleteBookData(identify: any){
        console.log(identify);
        this.dataService.deleteData(identify).subscribe(res =>{
          this.getBookData();
        })
  }

}
