import { Component ,OnInit} from '@angular/core';
import {TransactionService} from './services/transaction.service'
  //import {TransactionMsgType} from './services/transaction.service'
// import {TransactionSwiftCode} from './services/transaction.service'
// import {TransactionSender} from './services/transaction.service'
// import {TransactionReceiver} from './services/transaction.service'
// import {TransactionCorrespondant} from './services/transaction.service'
// import {TransactionBeneficiary} from './services/transaction.service'
// import {TransactionCodeBank} from './services/transaction.service'
// import {TransactionRegionBank} from './services/transaction.service'
// import {TransactionCurrency} from './services/transaction.service'
// import {TransactionAmount} from './services/transaction.service'

import{TransactionInfo}from './model/transactions'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

public deliveryDataResp    : any;
public deliveryDataRespBck : any;

  constructor(
    private _TransactionService : TransactionService,
     private _TransactionMsgType :TransactionService ,
    private _TransactionSwiftCode : TransactionService,
    private _TransactionSender : TransactionService,
    private _TransactionReceiver : TransactionService,
    private _TransactionCorrespondant :TransactionService,
    private _TransactionBeneficiary : TransactionService,
    private _TransactionCodeBank : TransactionService ,
    private _TransactionRegionBank : TransactionService,
    private _TransactionCurrency : TransactionService,
    private _TransactionAmount : TransactionService
    ) { }
  
lstTransactionInfo:TransactionInfo[] = []
TransactionSelected:Number[]=[]
 lstaTransactionInfo:TransactionInfo[] = []
 aTransactionSelected:Number[]=[]
lstbTransactionInfo:TransactionInfo[] = []
bTransactionSelected:Number[]=[]

lstcTransactionInfo:TransactionInfo[] = []
cTransactionSelected:Number[]=[]
lstdTransactionInfo:TransactionInfo[] = []
dTransactionSelected:Number[]=[]
lsteTransactionInfo:TransactionInfo[] = []
eTransactionSelected:Number[]=[]
event:any
lstfTransactionInfo:TransactionInfo[] = []
fTransactionSelected:Number[]=[]
lstgTransactionInfo:TransactionInfo[] = []
gTransactionSelected:Number[]=[]

lsthTransactionInfo:TransactionInfo[] = []
hTransactionSelected:Number[]=[]
lstiTransactionInfo:TransactionInfo[] = []
iTransactionSelected:Number[]=[]
lstjTransactionInfo:TransactionInfo[] = []
jTransactionSelected:Number[]=[]


  ngOnInit(){
           
  
  this._TransactionService.gettransactions()
  .subscribe
  (
    data=>{
this.lstTransactionInfo = data;
    }
  )

  this._TransactionMsgType.TransactionByMsgType()
  .subscribe
  (
    data=>{
this.lstaTransactionInfo = data;
    }
  )

  this._TransactionSwiftCode.TransactionBySwiftCode()
  .subscribe
  (
    data=>{
this.lstbTransactionInfo = data;
    }
  )


  this._TransactionSender.TransactionBySender()
  .subscribe
  (
    data=>{
this.lstcTransactionInfo = data;
    }
  )

  this._TransactionReceiver.TransactionByReceiver()
  .subscribe
  (
    data=>{
this.lstdTransactionInfo = data;
    }
  )
  this._TransactionCorrespondant.TransactionByCorrespondant()
  .subscribe
  (
    data=>{
this.lsteTransactionInfo = data;
    }
  )

  this._TransactionBeneficiary.TransactionByBeneficiary()
  .subscribe
  (
    data=>{
this.lstfTransactionInfo = data;
    }
  )
  this._TransactionCodeBank.TransactionByCodeBank()
  .subscribe
  (
    data=>{
this.lstgTransactionInfo = data;
    }
  )
  this._TransactionRegionBank.TransactionByRegionBank()
  .subscribe
  (
    data=>{
this.lsthTransactionInfo = data;
    }
  )
  this._TransactionCurrency.TransactionByCurrency()
  .subscribe
  (
    data=>{
this.lstiTransactionInfo = data;
    }
  )

  this._TransactionAmount.TransactionByAmount()
  .subscribe
  (
    data=>{
this.lstjTransactionInfo = data;
    }
  )

  }


}

//function change(event) {
  //Evenement contient l'évènement transmis, on peut accéder à la donnée sélectionnée en manipulant l'attribut target
 //var objet = event.target.data;

