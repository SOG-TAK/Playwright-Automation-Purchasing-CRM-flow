import { App } from './page.holder'
import { expect } from '@playwright/test';

export class YourDitailPage extends App {

 constructor(page) {
  super(page)
 }
 detailTitle(number){
    return this.page.locator(`(//div[@class="styles__TableName-sc-19uajw5-1 jSolwA"])[${number}]`)
}
 detailValue(number){
    return this.page.locator(`(//div[@class="styles__TableName-sc-19uajw5-1 styles__TableValue-sc-19uajw5-2 jSolwA jnJeHh"])[${number}]`)
}
get tellUsTitle(){
    return this.page.locator('h4[class="MuiTypography-root MuiTypography-h4 css-kubqz2"]')
}
get nameField(){
    return this.page.locator('input[name="name"]')
}

get emailField(){
    return this.page.locator('input[name="emailAddress"]')

}
get phoneField(){
    return this.page.locator('input[name="phone"]')

}
get bikeValuatioButton(){
    return this.page.locator('//button[text()="Get my bike valuation"]')
} 

async setNameField(text){
    await this.nameField.fill(text)
}
async setEmailField(text){
    await this.emailField.fill(text)
}
async setPhoneField(text){
    await this.phoneField.fill(text)
}
async clickBikeValuatioButton(){
    await this.bikeValuatioButton.click()
}
}