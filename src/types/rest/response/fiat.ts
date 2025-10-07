export interface FiatWithdrawnResponse {
  ordId: string;
  clientId: string;
  amt: string;
  ccy: string;
  fee: string;
  paymentAcctId: string;
  paymentMethod: string;
  state: string;
  cTime: string;
  uTime: string;
}

export interface CancelFiatWithdrawnResponse {
  ordId: string;
  state: string;
}

export interface HistoricalFiatWithdrawnResponse {
  ordId: string;
  clientId: string;
  amt: string;
  ccy: string;
  fee: string;
  paymentAcctId: string;
  paymentMethod: string;
  state: string;
  cTime: string;
  uTime: string;
}

export interface DetailWithdrawnFiatResponse {
  ordId: string;
  clientId: string;
  ccy: string;
  amt: string;
  fee: string;
  paymentAcctId: string;
  paymentMethod: string;
  state: string;
  cTime: string;
  uTime: string;
}
