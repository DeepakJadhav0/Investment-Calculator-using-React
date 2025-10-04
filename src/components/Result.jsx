import {calculateInvestmentResults , formatter} from "../util/investment.js"

export default function Result({input}) {
    let resultData = calculateInvestmentResults(input);
    let initialInvestment = 
        resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment 

    console.log(resultData)



  return (
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intrest (Value)</th>
                <th>Total Intrest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
             {resultData.map((yearData) => {
                const totalIntrest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;

                const investCapital = yearData.valueEndOfYear - totalIntrest;
                return(
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalIntrest)}</td>
                        <td>{formatter.format(investCapital)}</td>
                    </tr> 
                )
             })}
        </tbody>
    </table>
  )
}
