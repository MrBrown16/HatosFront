import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private url="https://localhost:7099/api/"

  private currentJatekos:any

  constructor(private http:HttpClient) { 
  }

  loadJatekosok(){
    return this.http.get<Array<Object>>(this.url+"Jatekos")
  }
  getJatekos(id:any){
    return this.http.get(this.url+"Jatekos/"+id)
  }
  createJatekos(body:any){
    return this.http.post(this.url+"Jatekos",body)
  }
  updateJatekos(id:any,body:any){
    return this.http.put(this.url+"Jatekos/"+id,body)
  }
  deleteJatekos(id:any){
    return this.http.delete(this.url+"Jatekos/"+id).subscribe((res)=>console.log(res))
  }
  createTipp(body:any){
    return this.http.post(this.url+"Tipps",body)
  }
  
  loadTipp(id:any){
    return this.http.get(this.url+"Tipps/"+id)
  }

  getCurrentJatekos(){
    return this.currentJatekos
  }
  setCurrentJatekos(body:any){
    this.currentJatekos = body
  }


}
