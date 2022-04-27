import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';
 import { TransactionMsgType } from './transaction.service';
// import { TransactionSwiftCode } from './transaction.service';
// import {TransactionSender } from './transaction.service';
// import { TransactionReceiver } from './transaction.service';
// import { TransactionCorrespondant } from './transaction.service';
// import { TransactionBeneficiary } from './transaction.service';
// import { TransactionCodeBank } from './transaction.service';
// import { TransactionRegionBank} from './transaction.service';
// import { TransactionCurrency} from './transaction.service';
// import { TransactionAmount } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
describe('TransactionMsgType', () => {
  let service: TransactionMsgType;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionMsgType);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
// describe('TransactionSwiftCode', () => {
//   let service: TransactionSwiftCode;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(TransactionSwiftCode);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
// describe('TransactionSender', () => {
//   let service: TransactionSender;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(TransactionSender);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
// describe('TransactionReceiver', () => {
//   let service: TransactionReceiver;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(TransactionReceiver);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
// describe('TransactionCorrespondant', () => {
//   let service: TransactionCorrespondant;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(TransactionCorrespondant);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
// describe('TransactionBeneficiary', () => {
//   let service: TransactionBeneficiary;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(TransactionBeneficiary);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
// describe('TransactionCodeBank', () => {
//   let service: TransactionCodeBank;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(TransactionCodeBank);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
// describe('TransactionRegionBank', () => {
//   let service: TransactionRegionBank;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(TransactionRegionBank);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
// describe('TransactionCurrency', () => {
//   let service: TransactionCurrency;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(TransactionCurrency);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
// describe('TransactionAmount', () => {
//   let service: TransactionAmount;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(TransactionAmount);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

