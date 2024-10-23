import { Component } from '../../page.holder'

export class SendAnEnquiryForm extends Component {
    constructor(page) {
        super(page)
    }

    get title() {
        return this.page.locator('div#enquiryForm span#buyTitle')
    }
    get bikeNameField() {
        return this.page.locator('div#enquiryForm input#buyBikeName')
    }
    get bikeEmailField() {
        return this.page.locator('div#enquiryForm input#buyBikeEmail')
    }
    get bikePhoneNumberField() {
        return this.page.locator('div#enquiryForm input#buyBikePhone')
    }
    get subminYourAnEnquiryButton() {
        return this.page.locator('div#enquiryForm button#buyBikeSubmit')
    }
    get successMsg() {
        return this.page.locator('div#enquiryForm div.successMsg strong')
    }

    async setBikeNameField(text) {
        await this.bikeNameField.type(text)
    }
    async setBikeEmailField(text) {
        await this.bikeEmailField.type(text)
    }
    async setBikePhoneNumberField(text) {
        await this.bikePhoneNumberField.type(text)
    }

    async clickSubminYourAnEnquiryButton() {
        await this.subminYourAnEnquiryButton.click()
    }
}