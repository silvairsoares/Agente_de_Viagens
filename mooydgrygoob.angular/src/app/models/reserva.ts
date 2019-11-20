import { TipoReserva } from '../enum/tipo-reserva.enum';

export interface Reserva {
    id:number;
    tipo:TipoReserva;
    id_tipo:number;
    valor:number;
    data_inicio:Date;
    data_fim:Date;
}
