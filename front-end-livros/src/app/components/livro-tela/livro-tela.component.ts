import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/book';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-livro-tela',
  templateUrl: './livro-tela.component.html',
  styleUrls: ['./livro-tela.component.scss']
})
export class LivroTelaComponent implements OnInit {

  identify:any;
  data:any;
  book = new Book;
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


}

