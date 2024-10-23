import { test, expect } from '@playwright/test'
import { SalesHomePage, SalesBikeInfoPage } from '../../app/geoffsalescrm/index'
import { CrmDashboardPage, LoginPage} from '../../app/geoffcrm/page/index'
import { userData } from '../../app/geoffcrm/data/user.data'
import { bikeData } from '../../app/geoffsalescrm/data/bike.data';


test('Test Case 1: Happy Path Journey - Geoff - Sales CRM', async ({ page }) => {
    const salesHomePage = new SalesHomePage(page)
    await salesHomePage.open()
    await salesHomePage.clickSearchFormTitle()
    await salesHomePage.chooseMakeValue(bikeData.harleyCode)
    await expect(salesHomePage.makeSelectField).toHaveValue(bikeData.harleyCode)
    await salesHomePage.chooseModelValue(bikeData.dunaModelCode)
    await expect(salesHomePage.modelSelectField).toHaveValue(bikeData.dunaModelCode)
    await salesHomePage.chooseShowroomValue(bikeData.doningtonParkCode)
    await salesHomePage.setVrmField(bikeData.vrm)
    await salesHomePage.clickSearchBikesButton()
    await page.waitForURL('https://mcstaging.abtesting.superbikefactory.co.uk/used-motorcycles/?Vrm=OY14LYS&location=7560&make=383&model=7842')
    await salesHomePage.clickDunaBikeInTheList()
    await page.waitForURL('https://mcstaging.abtesting.superbikefactory.co.uk/2014-harley-davidson-dyna-black-with-6173-miles/')
    const salesBikeInfoPage = new SalesBikeInfoPage(page)
    await expect(salesBikeInfoPage.bikeTitle).toHaveText(`${bikeData.brendName} ${bikeData.model}`)
    await expect(salesBikeInfoPage.bikeInfo).toHaveText(bikeData.bikeInfo)
    await salesBikeInfoPage.clickSendAnEnquiryButton()
    await expect(salesBikeInfoPage.sendAnEnquiryForm.title).toHaveText('Send An Enquiry')
    await salesBikeInfoPage.sendAnEnquiryForm.setBikeNameField('mike terens')
    await expect(salesBikeInfoPage.sendAnEnquiryForm.bikeNameField).toHaveValue('mike terens')
    await salesBikeInfoPage.sendAnEnquiryForm.setBikeEmailField(salesBikeInfoPage.generateRandomEmail())
    const emailValue = await salesBikeInfoPage.sendAnEnquiryForm.bikeEmailField.inputValue();
    await expect(salesBikeInfoPage.sendAnEnquiryForm.bikeEmailField).toHaveValue(emailValue)
    await salesBikeInfoPage.sendAnEnquiryForm.setBikePhoneNumberField('07950779806')
    await expect(salesBikeInfoPage.sendAnEnquiryForm.bikePhoneNumberField).toHaveValue('07950779806')
    await salesBikeInfoPage.sendAnEnquiryForm.clickSubminYourAnEnquiryButton()
    await expect(salesBikeInfoPage.sendAnEnquiryForm.successMsg).toHaveText('Thank you')
});