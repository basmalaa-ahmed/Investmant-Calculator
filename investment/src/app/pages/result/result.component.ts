import { result } from './../../core/models/result.modal';
import { data } from './../../core/models/investment.model';
import { Component ,Input,input} from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

  @Input () results:result[]=[]
  
}