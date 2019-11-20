import { Reserva } from './reserva';

export interface Viagem {
    id:number;
    id_cliente:number; 
    reservas:Reserva[];
    voos:Reserva[];
}
