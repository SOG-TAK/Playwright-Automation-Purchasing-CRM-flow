import { App } from './page.holder'

export class YourAddressPage extends App {

 constructor(page) {
  super(page)
 }

get yourAddressPageTitle(){
    return this.page.locator('h3[class="MuiTypography-root MuiTypography-h3 css-w689jt"]')
}
get enterYourPoscodeField(){
    return this.page.locator('input[placeholder="Postcode..."]')
}
get enterYourPoscodeSearchButton(){
    return this.page.locator('button.secondary-btn.css-c9ffho')
}
get firstAdressInTheList(){
    return this.page.locator('(//ul[@class="MuiAutocomplete-listbox css-1xs8iq0"]//li)[1]')
}
get saveAddressButton(){
    return this.page.locator('button.MuiButton-fullWidth.css-4kns4v')
}
get countrySelectField(){
    return this.page.locator('input[class="MuiSelect-nativeInput css-1k3x8v3"]')
}

async setEnterYourPoscodeField(text){
    await this.enterYourPoscodeField.fill(text)
}
async clickEnterYourPoscodeSearchButton(){
    await this.enterYourPoscodeSearchButton.click()
}
async clickFirstAdressInTheList(){
    await this.firstAdressInTheList.click()
}
async clickSaveAddressButton(){
    await this.saveAddressButton.click()
}
async selectCountry(text){
    await this.countrySelectField.selectOption(text)
}


}