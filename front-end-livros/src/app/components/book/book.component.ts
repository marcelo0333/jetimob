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
  status: Number = 0 ;

  constructor(private dataService:DataService){}
  ngOnInit(): void {
  }
  insertData(newBook: any) {
    this.dataService.insertData(newBook).subscribe((res: any) => {

      console.log('Livro inserido com sucesso:', res.data);

      return this.status = 1;
    }, (error) => {

        console.error('Erro ao realizar a inserção:', error);
        return this.status = 2;

    });
}
    deleteBookData(identify: any){
        console.log(identify);
        this.dataService.deleteData(identify).subscribe(res =>{
        })
  }

}
