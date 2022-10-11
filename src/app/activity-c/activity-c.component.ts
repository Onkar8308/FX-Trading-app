import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {  NgForm } from '@angular/forms';
import { trade_details } from '../model/trade-details';


@Component({
  selector: 'app-activity-c',
  templateUrl: './activity-c.component.html',
  styleUrls: ['./activity-c.component.css']
})
export class ActivityCComponent implements OnInit {
  tableshow:boolean=false;
  load:any=<trade_details>{};
  show:boolean=false;
  popupmessage:boolean=false;
  data:any={};
  EmpData:any=[]; 

  constructor(private service:HttpService) { 
    
  }

  ngOnInit(): void {
    
  }
  bookingform(){
    this.tableshow=false;
    this.show=!this.show;
    } 
  printingtrade(){
    this.show=false;
    this.tableshow=!this.tableshow;
    this.service.printtrade()
    .subscribe((response:any)=>{
     // console.log(response)
      this.EmpData=response;
    })
    }
    showmessage(){
      this.popupmessage=!this.popupmessage;
    }

    confirmtrade(){
     // console.log(this.addtrade.value);
      //this.service.savetrade(this.addtrade.value);
    }
    
  onSubmit(f:NgForm){
    this.popupmessage=true;
    console.log(this.load);
    this.service.savetrade(this.load)
     .subscribe((response:any)=>{
    //   console.log(response);
      //this.router.navigate(['/home']);
     })
    //console.log(this.data);
  }

  }



