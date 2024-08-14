import { App } from './page.holder'

export class BikeConditionPage extends App {

 constructor(page) {
  super(page)
 }

get bikeConditionTitle(){
    return this.page.locator('h4[class="MuiTypography-root MuiTypography-h4 css-kubqz2"]')
}
get serviseHistorySelectField(){
    return this.page.locator('select[name="serviceHistory"]')
}
get hasPanniersButtonNo(){
    return this.page.locator('button[name="hasPanniers"][label="No"]')
}
get reasonForSellingSelectField(){
    return this.page.locator('select[name="reasonForSelling"]')
} 

get bikeCondition(){
    return this.page.locator('select[name="bikeCondition"]')
}

get bikeValuatioButton(){
    return this.page.locator('//button[text()="Get my bike valuation"]')
}

async selectHistory(text){
    await this.serviseHistorySelectField.selectOption(text)
}

async clickHasPanniersButtonNo(){
    await this.hasPanniersButtonNo.click()
}
async selectReasonForSellingSelectField(text){
    await this.reasonForSellingSelectField.selectOption(text);
}

async selectCondition(text){
    await this.bikeCondition .selectOption(text);
}
async clickbikeValuatioButton(){
    await this.bikeValuatioButton.click()
}






}