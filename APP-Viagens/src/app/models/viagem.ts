import { Reserva } from './reserva';

export interface Viagem {
    id:number;
    idcliente:number; 
    reservas:Reserva[];
}
