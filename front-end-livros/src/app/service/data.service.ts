import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/livros');
  }
  insertData(data: any){
    return this.httpClient.post('http://127.0.0.1:8000/livros', data);

  }
  deleteData(identify: any){
    return this.httpClient.delete('http://127.0.0.1:8000/livros/'+identify);
  }
  getBookById(identify:any){
    return this.httpClient.get('http://127.0.0.1:8000/livros/'+identify);

  }
  updateData(id: any, data: any){
    return this.httpClient.put('http://127.0.0.1:8000/livros/'+id, data);

  }
}
