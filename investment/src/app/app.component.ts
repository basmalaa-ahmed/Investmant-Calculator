import { data } from './core/models/investment.model';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/header/header.component";
import { UserComponent } from "./pages/user/user.component";
import { ResultComponent } from "./pages/result/result.component";
import { result } from './core/models/result.modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  resultData:result[]=[]
  title = 'investment';
  calculateInvestmentResults(data:data) {
    const annualData = [];
    let investmentValue = data.initialInvestment;
  
    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.annualInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: data.initialInvestment + data.annualInvestment * year,
      });
    }
  
   this.resultData=annualData
  }
}
