import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/book';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit{

  identify:any;
  data:any;
  book = new Book;
  status: Number = 0 ;

  constructor(private route:ActivatedRoute, private dataService:DataService){}
  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id']);
    this.identify = this.route.snapshot.params['identify'];
    this.getIdData();
  }
  getIdData(){
    this.dataService.getBookById(this.identify).subscribe((res:any)=>{
      console.log(res);
      this.data = res.data;
      this.book = this.data;
    })
  }
  updateBook(){
    this.dataService.updateData(this.identify, this.book).subscribe((res:any)=>{
      return this.status = 1;

    }, (error) => {

      console.error('Erro ao realizar a inserção:', error);
      return this.status = 2;

  });
  }
}
