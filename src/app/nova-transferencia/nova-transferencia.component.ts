import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../services/models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  //enviar dados para fora do componente
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  //injeta as propriedades
  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('solicitado nova transferencia');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        //navega para algma pagina, redireciona
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
