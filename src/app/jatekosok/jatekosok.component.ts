import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jatekosok',
  templateUrl: './jatekosok.component.html',
  styleUrls: ['./jatekosok.component.css']
})
export class JatekosokComponent {

  jatekosok:Array<any>=[]
  currentJatekos:any

  constructor(private base:BaseService,private router:Router){
    base.loadJatekosok().subscribe({
      next:(res:Array<Object>)=>{
        console.log("Successful get loadJatekosok ")
        this.jatekosok = res
        this.populateshowMap()
      }
    })
  }
  setCurrent(body:any){
    this.base.setCurrentJatekos(body);
    this.router.navigate(["/tippek"])
  }
  populateshowMap(){
    this.jatekosok!.forEach((jatekos:any) => {
      jatekos.edit=false
    });
  }
  getJatekos(id:any){
    this.base.getJatekos(id).subscribe({
      next:(res:any)=>this.currentJatekos=res,
      error:(err:any)=>console.log(err)
    })
  }
  createJatekos(body:any){
    this.base.createJatekos(body).subscribe({
      next:(res:any)=>console.log("Successfull post",res),
      error:(err:any)=>console.log("Error in post"+err)
    })
  }
  updateJatekos(id:any,body:any){
    this.base.updateJatekos(id,body).subscribe({
      next:(res:any)=>console.log("Successfull put",res),
      error:(err:any)=>console.log("Error in put"+err)
    })
  }

  deleteJatekos(id:any){
    this.base.deleteJatekos(id)
  }



}
