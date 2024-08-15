import { App } from './page.holder'

export class UploadPage extends App {

 constructor(page) {
  super(page)
 }

get pageTitle(){
    return this.page.locator('h3[class="MuiTypography-root MuiTypography-h3 css-zz3r3g"]')
}
get confirmUploadPhotoButton(){
    return this.page.locator('button.RlleC.css-gsw4vh')
}
get uploatPhotoOfMyBike(){
    return this.page.locator('input[accept="image/*"]')
}
get completeProcessButton(){
    return this.page.locator('//button[text()="Complete process"]')
}
async doUploatPhotoOfMyBike(path){
    await this.uploatPhotoOfMyBike.setInputFiles(path);
}

async clickConfirmUploadPhotoButton(){
    await this.confirmUploadPhotoButton.click()
}
async clickCompleteProcessButton(){
    await this.completeProcessButton.click()
}
}
