import { data } from './../../core/models/investment.model';
import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Output() calculate = new EventEmitter<data>()
  enteredInitial=0;
  enteredAnnual=0;
  enttedExpected=0;
  enteredDuaration=0;
  submitForm(){
   
    this.calculate.emit({
      initialInvestment:this.enteredInitial,
      annualInvestment:this.enteredAnnual,
      expectedReturn:this.enttedExpected,
      duration:this.enteredDuaration,
    })
  }
}
