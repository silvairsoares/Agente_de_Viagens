import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Cliente } from './models/cliente';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Carro } from './models/carro';
import { CarroService } from './services/carro.service';
import { ClienteService } from './services/cliente.service';
import { Reserva } from './models/reserva';
import { Hotel } from './models/hotel';
import { HotelService } from './services/hotel.service';
import { Voo } from './models/voo';
import { VooService } from './services/voo.service';
import { Pagamento } from './models/pagamento';
import { PagamentoService } from './services/pagamento.service';
import { ReservaService } from './services/reserva.service';


/**
 * @title Stepper overview
 */
@Component({
  selector: 'stepper-overview-example',
  templateUrl: 'stepper-overview-example.html',
  styleUrls: ['stepper-overview-example.css'],
})
export class StepperOverviewExample implements OnInit {
  isEditarCarro = false;
  isEditarCli = false;
  isEditarReserva = false;
  isEditarVoo = false;
  isEditarHotel = false;
  isEditarPagamento = false;

  primeiroFormGroup: FormGroup;
  segundoFormGroup: FormGroup;
  terceiroFormGroup: FormGroup;
  quartoFormGroup: FormGroup;
  quintoFormGroup: FormGroup;
  sextoFormGroup: FormGroup;

  filteredReserva: Observable<Reserva[]>;


  filteredUser: Observable<Cliente[]>;

  myControlCars = new FormControl();
  filteredCars: Observable<Carro[]>;

  myControlHotel = new FormControl();
  filteredHotel: Observable<Hotel[]>;

  myControlVoo = new FormControl();
  filteredVoo: Observable<Voo[]>;

  myControlPagamento = new FormControl();
  filteredPagamento: Observable<Pagamento[]>;

  reserva = {} as Reserva;
  reservas: Reserva[];

  cliente = {} as Cliente;
  clientes: Cliente[] = [];

  car = {} as Carro;
  cars: Carro[];

  hotel = {} as Hotel;
  hoteis: Hotel[];

  voo = {} as Voo;
  voos: Voo[];

  pagamento = {} as Pagamento;
  pagamentos: Pagamento[];

  constructor(
    private _formBuilder: FormBuilder,
    private carroService: CarroService,
    private reservaService: ReservaService,
    private clienteService: ClienteService,
    private hotelService: HotelService,
    private vooService: VooService,
    private pagamentoService: PagamentoService,
  ) {
    this.getCars();
    this.getClis();
    this.getHoteis();
    this.getReservas();

    this.primeiroFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      controlReserva: new FormControl,

    });
    this.segundoFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      controlUser: new FormControl()
    });

    this.terceiroFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.quartoFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.quintoFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.myControlCars.valueChanges.subscribe(carro => this.cars = this._filterCar(carro));
    this.filteredCars = this.myControlCars.valueChanges.pipe(
      startWith(''),
      map(teste => teste ? this._filterCar(teste) : this.cars.slice()));

    this.filteredHotel = this.myControlHotel.valueChanges.pipe(
      startWith(''),
      map(teste => teste ? this._filterHotel(teste) : this.hoteis.slice()));

    this.filteredUser = this.segundoFormGroup.controls.controlUser.valueChanges.pipe(startWith(''),
      map(cliente => cliente ? this._filterClientes(cliente) : this.clientes.slice()));
  }

  ngOnInit() {




  }

  // defini se um carro será criado ou atualizado
  saveCar(form: NgForm) {
    if (this.car.id !== undefined) {
      this.carroService.updateCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.carroService.saveCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  saveHotel(form: NgForm) {
    if (this.hotel.id !== undefined) {
      this.hotelService.updateHotel(this.hotel).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.hotelService.saveHotel(this.hotel).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  saveVoo(form: NgForm) {
    if (this.voo.id !== undefined) {
      this.vooService.updateVoo(this.voo).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.vooService.saveVoo(this.voo).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  savePagamento(form: NgForm) {
    if (this.pagamento.id !== undefined) {
      this.pagamentoService.updatePagamento(this.pagamento).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.pagamentoService.savePagamento(this.pagamento).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // defini se um Cliente será criado ou atualizado
  saveCli(form: NgForm) {
    if (this.cliente.id !== undefined) {
      this.clienteService.updateCliente(this.cliente).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.clienteService.saveCliente(this.cliente).subscribe(() => {
        this.cleanForm(form);
      });
    }

  }

  // Chama o serviço para obtém todos os carros
  getCars() {
    this.carroService.getCarros().subscribe((cars: Carro[]) => {
      this.cars = cars;
    });
  }

  getReservas() {
    this.reservaService.getReservas().subscribe((reservas: Reserva[]) => {
      this.reservas = reservas;
    });
  }

  getVoos() {
    this.vooService.getVoos().subscribe((voos: Voo[]) => {
      this.voos = voos;
    });
  }

  getPagamentos() {
    this.pagamentoService.getPagamentos().subscribe((pagamentos: Pagamento[]) => {
      this.pagamentos = pagamentos;
    });
  }

  // deleta um carro
  deleteCar(car: Carro) {
    this.carroService.deleteCar(car).subscribe(() => {
      this.getCars();
    });
  }

  deleteHotel(hotel: Hotel) {
    this.hotelService.deleteHotel(hotel).subscribe(() => {
      this.getHoteis();
    });
  }

  deletePagamento(car: Pagamento) {
    this.pagamentoService.deletePagamento(car).subscribe(() => {
      this.getPagamentos();
    });
  }

  deleteVoo(car: Voo) {
    this.vooService.deleteVoo(car).subscribe(() => {
      this.getVoos();
    });
  }

  // copia o carro para ser editado.
  editCar(car: Carro) {
    this.selectCar(car)
    this.isEditarCarro = true;
  }

  editHotel(hotel: Hotel) {
    this.selectHotel(hotel)
    this.isEditarHotel = true;
  }

  editVoo(voo: Voo) {
    this.selectVoo(voo)
    this.isEditarVoo = true;
  }

  editPagamento(pagamento: Pagamento) {
    this.selectPagamento(pagamento)
    this.isEditarVoo = true;
  }

  selectCar(car: Carro) {
    this.car = { ...car };
  }

  selectHotel(hotel: Hotel) {
    this.hotel = { ...hotel };
  }

  selectVoo(voo: Voo) {
    this.voo = { ...voo };
  }

  selectPagamento(pagamento: Pagamento) {
    this.pagamento = { ...pagamento };
  }

  // Chama o serviço para obtém todos os Usuarios
  getClis() {
    this.clienteService.getClientes().subscribe((users: Cliente[]) => {
      this.clientes = users;
    });
  }

  getHoteis() {
    this.hotelService.getHoteis().subscribe((hoteis: Hotel[]) => {
      this.hoteis = hoteis;
    });
  }

  // deleta um Usuario
  deleteUser(user: Cliente) {
    this.clienteService.deleteCliente(user).subscribe(() => {
      this.getClis();
    });
  }

  deleteReserva(reserva: Reserva) {
    this.reservaService.deleteReserva(reserva).subscribe(() => {
      this.getReservas();
    });
  }

  // copia o Usuario para ser editado.
  editUser(user: Cliente) {
    this.selectUser(user);
    this.isEditarCli = true;
  }

  editReserva(reserva: Reserva) {
    this.selectReserva(reserva);
    this.isEditarReserva = true;
  }

  selectReserva(reserva: Reserva) {
    this.reserva = { ...reserva };
  }

  selectUser(user: Cliente) {
    this.cliente = { ...user };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getCars();
    this.getClis()
    form.resetForm();
    this.car = {} as Carro;
    this.cliente = {} as Cliente;
    this.isEditarCarro = false;
    this.isEditarCli = false;
  }

  displayFn(user?: Cliente): string | undefined {
    return user ? user.nome : undefined;
  }

  private _allCars(): Carro[] {
    if (this.cars.length <= 0) {
      this.getCars();
    }
    return this.cars;
  }

  private _filterClientes(nome: string): Cliente[] {
    const filterValue = nome.toLowerCase();

    return this.clientes.filter(cliente => cliente.nome.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterCar(modelo: string): Carro[] {
    const filterValue = modelo.toLowerCase();
    return this.cars.filter(carro => carro.modelo.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterHotel(nome: string): Hotel[] {
    const filterValue = nome.toLowerCase();
    return this.hoteis.filter(carro => carro.nome.toLowerCase().indexOf(filterValue) === 0);
  }

}