import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = "https://74b6-181-230-219-190.ngrok.io/student"
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.url+'/getAll')
  }

  save(student: Student):Observable<any>{
    return this.http.post(this.url, student)
  }

  edit(student: Student):Observable<any>{
    return this.http.post(this.url+'/'+student.id+'/update', student)
  }

  delete(id: number):Observable<any>{
    return this.http.post(this.url+'/'+id+'/delete', null)
  }
}
