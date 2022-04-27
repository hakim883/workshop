import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import{TransactionService} from './services/transaction.service'
  //import{TransactionMsgType} from './services/transaction.service'
// import{TransactionSwiftCode} from './services/transaction.service'
// import{TransactionSender} from './services/transaction.service'
// import{TransactionReceiver} from './services/transaction.service'
// import{TransactionCorrespondant} from './services/transaction.service'
// import{TransactionBeneficiary} from './services/transaction.service'
// import{TransactionCodeBank} from './services/transaction.service'
// import{TransactionRegionBank} from './services/transaction.service'
// import{TransactionCurrency} from './services/transaction.service'
// import{TransactionAmount} from './services/transaction.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TransactionService,
     // TransactionMsgType,
    //TransactionSwiftCode,TransactionSender,TransactionReceiver,
    // TransactionCorrespondant,TransactionBeneficiary,TransactionCodeBank,TransactionRegionBank,TransactionCurrency,TransactionAmount
  ] ,
  
  bootstrap: [AppComponent]
})
export class AppModule { }
