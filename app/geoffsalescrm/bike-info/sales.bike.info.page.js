import { App } from '../page.holder'
import { SendAnEnquiryForm } from './component/sendAnEnquiry.component'

export class SalesBikeInfoPage extends App {
  constructor(page) {
    super(page),
    this.sendAnEnquiryForm = new SendAnEnquiryForm(this.page)
  }

  get bikeTitle() {
    return this.page.locator('span[data-ui-id="page-title-wrapper"]')
  }
  get bikeInfo() {
    return this.page.locator('(//div[@class="product-info-main"]//ul)[1]//li')
  }
  get sendAnEnquiryButton() {
    return this.page.locator('button[title="Send an Enquiry"]')
  }
 

  generateRandomEmail() {
     const email = 'geoffsales' + Math.random().toString(36).substring(2, 20) + 'autotest_remove@example.com'
    return email
  }
  async clickSendAnEnquiryButton() {
   await this.sendAnEnquiryButton.click()
  }
  
}