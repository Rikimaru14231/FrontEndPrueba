import { Tpago } from "./tpago"
import { Time } from "@angular/common";


export class Pago{

    idPago: number = 0;
    documentoPago: string = '';
    montoPago: number = 0;
    horaPago: Time = {hours: 0, minutes: 0};
    tpago: Tpago = new Tpago();
}