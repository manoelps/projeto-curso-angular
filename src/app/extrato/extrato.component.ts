import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Input } from '@angular/core';
import { Transferencia } from '../services/models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias_extrato: any[];

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    //Pega os dados da API via o services
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias_extrato = transferencias;
    });
  }
}
