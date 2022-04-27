import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpclient: HttpClient) { }

 gettransactions():Observable<any>{
   return this.httpclient.get("http://localhost:8889/api/transaction/getAllTransactions")
 }

  TransactionByMsgType():Observable<any>{
   return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByMsgType")
 }
 TransactionBySwiftCode():Observable<any>{
     return this.httpclient.get("http://localhost:8889/api/transaction/TransactionBySwiftCode")
   }

   TransactionBySender():Observable<any>{
       return this.httpclient.get("http://localhost:8889/api/transaction/TransactionBySender")
    }

    TransactionByReceiver():Observable<any>{
        return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByReceiver")
       }

       TransactionByCorrespondant():Observable<any>{
       return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByCorrespondant")
         }


         TransactionByBeneficiary():Observable<any>{
             return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByBeneficiary")
           }

           TransactionByCodeBank():Observable<any>{
              return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByCodeBank")
             }
             TransactionByRegionBank():Observable<any>{
                 return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByRegionBank")
               }
               TransactionByCurrency():Observable<any>{
                  return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByCurrency")
                 }

                 TransactionByAmount():Observable<any>{
                     return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByAmount")
                   }







}
//  export class TransactionMsgType   {

//   constructor(private httpclient: HttpClient) { }

//  TransactionByMsgType():Observable<any>{
//   return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByMsgType")
// }}
// export class TransactionSwiftCode {

//   constructor(private httpclient: HttpClient) { }

// TransactionBySwiftCode():Observable<any>{
//   return this.httpclient.get("http://localhost:8889/api/transaction/TransactionBySwiftCode")
// }}
// export class TransactionSender {

//   constructor(private httpclient: HttpClient) { }

// TransactionBySender():Observable<any>{
//   return this.httpclient.get("http://localhost:8889/api/transaction/TransactionBySender")
// }}
// export class TransactionReceiver {

//   constructor(private httpclient: HttpClient) { }

// TransactionByReceiver():Observable<any>{
//   return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByReceiver")
// }}
// export class TransactionCorrespondant {

//   constructor(private httpclient: HttpClient) { }

// TransactionByCorrespondant():Observable<any>{
//   return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByCorrespondant")
// }}
// export class TransactionBeneficiary {

//   constructor(private httpclient: HttpClient) { }

// TransactionByBeneficiary():Observable<any>{
//   return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByBeneficiary")
// }}
// export class TransactionCodeBank {

//   constructor(private httpclient: HttpClient) { }

// TransactionByCodeBank():Observable<any>{
//   return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByCodeBank")
// }}
// export class TransactionRegionBank {

//   constructor(private httpclient: HttpClient) { }

// TransactionByRegionBank():Observable<any>{
//   return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByRegionBank")
// }}
// export class TransactionCurrency {

//   constructor(private httpclient: HttpClient) { }

// TransactionByCurrency():Observable<any>{
//   return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByCurrency")
// }}
// export class TransactionAmount {

//   constructor(private httpclient: HttpClient) { }

// TransactionByAmount():Observable<any>{
//   return this.httpclient.get("http://localhost:8889/api/transaction/TransactionByAmount")
// }}
 
 


  

 
 
 
 
 
 
 
 
 
 
 
 
                                                                  