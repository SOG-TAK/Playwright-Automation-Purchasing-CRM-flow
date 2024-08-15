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
 enterYourPoscodeSearchButton(){
    return this.page.locator('button.MuiButtonBase-root.MuiButton-root.MuiLoadingButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeSmall.MuiButton-textSizeSmall.secondary-btn.css-c9ffho:not([disabled])')
}
get firstAdressInTheList(){
    return this.page.locator('(//ul[@class="MuiAutocomplete-listbox css-1xs8iq0"]//li)[1]')
}

get saveAddressButton(){
    return this.page.locator('button.MuiButton-fullWidth.css-4kns4v')
}
get countrySelectField(){
    return this.page.locator('div[class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth  css-5vwx6a"]')
}
get londonInTheList(){
    return this.page.locator('//li[text()="London"]')
}
async setEnterYourPoscodeField(text){
    await this.enterYourPoscodeField.fill(text)
    await this.enterYourPoscodeField.press('Enter')
}
async clickEnterYourPoscodeSearchButton(){
    await this.enterYourPoscodeSearchButton().waitFor({ state: 'visible' }); 
    await this.enterYourPoscodeSearchButton().focus()
    await this.enterYourPoscodeSearchButton().click({ position: { x: 20, y: 20 } })
}
async clickFirstAdressInTheList(){

await this.firstAdressInTheList.click()
}
async clickLondonInTheList(){
    await this.londonInTheList.click()
}
async clickSaveAddressButton(){
    await this.saveAddressButton.click()
}
async clickCountrySelectField(){
    await this.countrySelectField.click()
}


}