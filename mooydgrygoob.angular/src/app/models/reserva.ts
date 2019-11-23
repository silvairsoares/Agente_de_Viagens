import { TipoReserva } from '../enum/tipo-reserva.enum';
import { Cliente } from './cliente';

export interface Reserva {
    id:number;
    idcliente:number;    
    idCarro:number;    
    idVoo:number;    
    idHotel:number;    
    valor:number;
    dataInicio:String;
    dataFim:String;
}
