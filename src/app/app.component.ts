import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * String interpolation: utilizar valores que propriedades possuem para mostra-los p o usuario
   */

/**
 * property biding: utiliza valores de propriedades para atribuí-los a atributos HTML
 */
/**
 * event binding: utilizado para ouvir eventos da DOM dentro do Angular
 */
  title = 'Mostra na <p>';
    n1: number = 0
    n2: number = 0
    tipoInput: string = 'text'

    somar (x: number, y: number){
return x + y
    }
mudarTipoDoInput(): void { // nao retorna nada : void 
if (this.tipoInput == 'password'){
  this.tipoInput = 'text'
} else {
  this.tipoInput = 'password'
}
}
}

