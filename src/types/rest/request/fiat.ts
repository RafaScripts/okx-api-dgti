export interface WithdrawnFiatRequest {
    paymentAcctId: string;
    ccy: string;
    amt: string;
    paymentMethod: string;
    clientId: string;
}

export interface CancelFiatWithdrawnRequest {
    ordId: string;
}

export interface GetHistoricalFiatWithdrawnRequest {
    ccy?: string;
    paymentMethod?: string;
    state?: string;
    after?: string;
    before?: string;
    limit?: string;
}

export interface DetailWithdrawnFiatRequest {
    ordId: string;
}