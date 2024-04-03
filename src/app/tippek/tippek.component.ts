import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-tippek',
  templateUrl: './tippek.component.html',
  styleUrls: ['./tippek.component.css']
})
export class TippekComponent implements OnInit {
  currentJatekos:any
  tippek:any
  newTipp:{"id":number|null, "jatekosId":number|null,"sz1":number|null,"sz2":number|null,"sz3":number|null,"sz4":number|null,"sz5":number|null,"sz6":number|null}={id:null,jatekosId:null, sz1:null, sz2:null, sz3:null, sz4:null, sz5:null,sz6:null} 
  constructor(private base:BaseService){


  }
  ngOnInit(): void {
    // this.base.loadTipp(this.base.currentJatekos.id).subscribe({
    //   next:(res:any)=>this.tippek = res,
    //   error:(err:any)=>console.log(err)
    // })
    this.currentJatekos= this.base.getCurrentJatekos()
    console.log(this.currentJatekos)
    this.tippek = this.currentJatekos.tipp
  }

  createTipp(){
    this.newTipp.jatekosId=this.currentJatekos.Id
    this.base.createTipp(this.newTipp)
  }

  

}
