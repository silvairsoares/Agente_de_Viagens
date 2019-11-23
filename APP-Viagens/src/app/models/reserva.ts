import { TipoReserva } from '../enum/tipo-reserva.enum';

export interface Reserva {
    id:number;
    tipoReserva:TipoReserva;
    idEntidade:number;    
    valor:number;
    dataInicio:String;
    dataFim:String;
}
