import { test, expect } from '@playwright/test';
import { HomePage, YourDitailPage, BikeDitailPage, BikeConditionPage, GetLivePricePage,YourAddressPage,DocumentationPage,BodyWorkPage,MechanicsPage,ExtrasPage,UploadPage,ThankYouPage} from '../app/page/index';

/** Test Case 1: Verify Input Blocks Presence
- Preconditions: None
- Steps:
1. Open "https://staging.webuyanybike.com/"
2. Verify the presence of the "registration" input block
3. Verify the presence of the "mileage" input block
- Expected Result: Both input blocks should be present on the page

Test Case 2: Validate Advanced Form Details
- Preconditions: None
- Steps:
1. Open "https://staging.webuyanybike.com/"
2. Enter "ND18WYK" in the "registration" input block
3. Enter "1000" in the "mileage" input block
4. Press the "Value My Bike" button
5. Verify the "advanced form" is opened
6. Verify the "registration" is "ND18WYK"
7. Verify the "mileage" is "1000"
8. Verify the bike details are correct
- Expected Result: The advanced form opens with the correct details

Test Case 3: Proceed to Step 2
- Preconditions: None
- Steps:
1. Press the "Value My Bike" button
2. Verify the URL is "https://mcstaging.abtesting.superbikefactory.co.uk/sell-your-bike/step-2/"
- Expected Result: The user should be directed to step 2

Test Case 4: Fill Personal Details and Proceed to Step 3
- Preconditions: User is on step 2
- Steps:
1. Choose "Mrs"
2. Enter "test" in the "first_name" input
3. Enter "test" in the "last_name" input
4. Enter "test@gmail.com" in the "email_address" input
5. Enter "07123456789" in the "phone" input
6. Press the "Continue" button
7. Verify the URL is "https://mcstaging.abtesting.superbikefactory.co.uk/sell-your-bike/step-3/"
- Expected Result: The user should be directed to step 3*/

test.skip('Test Case 1: Verify Input Blocks Presence', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.open()
  await homePage.cookiesWindow.clickAcceptCookiesButton()
  await expect(await homePage.enterYourRegField).toBeVisible()
  await expect (await homePage.enterMileageField).toBeVisible()
  await expect (await homePage.enterYourRegField).toHaveAttribute('placeholder', 'Enter Your Reg')
  await expect (await homePage.enterMileageField).toHaveAttribute('placeholder', 'Enter Mileage') 
});
test.skip('Test Case 2: Validate Advanced Form Details', async ({ page }) => {

  const homePage = new HomePage(page)
  await homePage.open()
  await homePage.cookiesWindow.clickAcceptCookiesButton()
  await homePage.setEnterYourRegField('ND18WYK')
  await homePage.setEnterMileageField('1000')
  await homePage.clickValueMyBikeButton()

  const yourDitailPage = new YourDitailPage(page)
  await expect (await yourDitailPage.tellUsTitle).toBeVisible()

  await expect (await yourDitailPage.detailTitle(1)).toHaveText('Registration')
  await expect (await yourDitailPage.detailValue(1)).toHaveText('ND18WYK')
  await expect (await yourDitailPage.detailTitle(2)).toHaveText('Make')
  await expect (await yourDitailPage.detailValue(2)).toHaveText('Kawasaki')
  await expect (await yourDitailPage.detailTitle(3)).toHaveText('Model')
  await expect (await yourDitailPage.detailValue(3)).toHaveText('Ninja ZX-10R')
  await expect (await yourDitailPage.detailTitle(4)).toHaveText('Year')
  await expect (await yourDitailPage.detailValue(4)).toHaveText('2018')
  await expect (await yourDitailPage.detailTitle(5)).toHaveText('Colour')
  await expect (await yourDitailPage.detailValue(5)).toHaveText('GREEN')
  await expect (await yourDitailPage.detailTitle(6)).toHaveText('Mileage')
  await expect (await yourDitailPage.detailValue(6)).toHaveText('1000 miles')
});
test.skip('Test Case 3', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.open()
  await homePage.cookiesWindow.clickAcceptCookiesButton()
  await homePage.clickValueMyBikeButton()

  const bikeDitailPage = new BikeDitailPage(page)

  const expectedUrl = 'https://staging.webuyanybike.com/form-1/';
  await expect(await bikeDitailPage.yourBikeDetailTitle).toBeVisible()
  const currentUrl = page.url();
  expect(currentUrl).toBe(expectedUrl)


});
test.skip('Test Case 4: Fill Personal Details and Proceed to Step 3', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.open()
  await homePage.cookiesWindow.clickAcceptCookiesButton()
  await homePage.setEnterYourRegField('AE04RXR')
  await homePage.setEnterMileageField('1000')
  await homePage.clickValueMyBikeButton()

  const yourDitailPage = new YourDitailPage(page)
  await expect (await yourDitailPage.tellUsTitle).toHaveText('Tell us a bit about you')
  await expect (await yourDitailPage.tellUsTitle).toBeVisible()
  expect(page.url()).toBe('https://staging.webuyanybike.com/form-2/')
});
test('Scenario 5: Fill in Bike Details and Proceed to Step 5', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.open()
  await homePage.cookiesWindow.clickAcceptCookiesButton()
  await homePage.setEnterYourRegField('NK07AZZ')
  await homePage.setEnterMileageField('1000')
  await homePage.clickValueMyBikeButton()

  const yourDitailPage = new YourDitailPage(page)
  await expect (await yourDitailPage.tellUsTitle).toHaveText('Tell us a bit about you')
  await expect (await yourDitailPage.tellUsTitle).toBeVisible()
  expect(page.url()).toBe('https://staging.webuyanybike.com/form-2/')

  await yourDitailPage.setNameField('test124532')
  await yourDitailPage.setEmailField('test32121@gmail.com')
  await yourDitailPage.setPhoneField('07112456451')
  await yourDitailPage.clickBikeValuatioButton()
  await page.waitForLoadState('networkidle');
  const bikeConditionPage = new BikeConditionPage(page)
  await expect (await bikeConditionPage.bikeConditionTitle).toBeVisible()
  await bikeConditionPage.selectHistory('Full History')
  expect(page.url()).toBe('https://staging.webuyanybike.com/form-3/')
  await bikeConditionPage.clickHasPanniersButtonNo()
  await bikeConditionPage.selectReasonForSellingSelectField('I need to sell as I want another bike')
  await bikeConditionPage.selectCondition('4 - Good')
  await page.waitForTimeout(100)
  await bikeConditionPage.clickbikeValuatioButton()
  await page.waitForLoadState('networkidle');
  const getLivePricePage = new GetLivePricePage(page)
  await expect (await getLivePricePage.yourValuationIsTitle).toContainText('Your valuation')
  await expect (await getLivePricePage.yourValuationIsTitle).toBeVisible()
  expect(page.url()).toBe('https://staging.webuyanybike.com/get-quote/live-price/')
  await getLivePricePage.clickFirstDateButton()
  await getLivePricePage.clickContinueButton()
  await expect (await getLivePricePage.thankYouTitle).toBeVisible()
  await expect (await getLivePricePage.thankYouTitle).toHaveText('Thank you!')
  await getLivePricePage.clickConFirmBikeConditionButton()
  await page.waitForLoadState('networkidle');
 const yourAddressPage = new YourAddressPage(page)
 await expect (await yourAddressPage.yourAddressPageTitle).toHaveText('Where Shall We Collect Your Motorbike?')
 await expect (await yourAddressPage.yourAddressPageTitle).toBeVisible()
 await page.waitForLoadState('load')
 await page.waitForLoadState('networkidle');
 await yourAddressPage.setEnterYourPoscodeField('se3 0rl')
 await expect (await yourAddressPage.enterYourPoscodeField).toHaveValue('se3 0rl')
 await expect (await yourAddressPage.enterYourPoscodeSearchButton()).toBeVisible()
 await yourAddressPage.clickEnterYourPoscodeSearchButton()
 await yourAddressPage.clickFirstAdressInTheList()
 await yourAddressPage.clickCountrySelectField()
 await yourAddressPage.clickLondonInTheList()
 await page.waitForTimeout(100)
 await yourAddressPage.clickSaveAddressButton()
 await page.waitForLoadState('networkidle');
 const documentationPage = new DocumentationPage(page)
 await expect (await documentationPage.yourLogBookTitle).toHaveText('Your Logbook')
 await expect (await documentationPage.yourLogBookTitle).toBeVisible()
 await documentationPage.clicklogBookIsInoYourName('Yes')
 await documentationPage.clickIsAddressDifferentToTheCollectionAddress('No')
 await documentationPage.clickHaveProofOfID('Yes')
 await documentationPage.clickIsLogbookMatchEngineOnTheBike('Yes')
 await documentationPage.clickIsTheBikeAnImport('No')
 await documentationPage.clickIsReputableGarageOrDealer('Yes')
 await documentationPage.clickHaveTwoKeys('Yes')
 await documentationPage.clickDoesRequireRedKey('No')
 await page.waitForTimeout(100)
 await documentationPage.clickContinueButton()
 await page.waitForLoadState('networkidle');
 const bodyWorkPage = new BodyWorkPage(page)
 await expect (await bodyWorkPage.bodyWorkTitle).toHaveText('Your bikes bodywork')
 await expect (await bodyWorkPage.bodyWorkTitle).toBeVisible()

 await bodyWorkPage.clickHasYourBikeBeenResprayed('No')
 await bodyWorkPage.clickHasYourBikeBeenWrapped('No')
 await bodyWorkPage.clickAreAnyOfTheLeversBent('No')
 await bodyWorkPage.clickAreThereAnyDentsOnYourBike('No')
 await bodyWorkPage.clickAnyScratchesOnYourBike('No')
 await bodyWorkPage.clickFairingsOrPanelsCrackedOrBroken('No')
 await bodyWorkPage.clickHaveAnyCorrosionOrRust('No')
 await bodyWorkPage.clickAreThereTwoMirrorsOnYourBike('Yes')
 await bodyWorkPage.clickAreMirrorsOnYourBikeDamaged('No')
 await bodyWorkPage.clickAnyOtherCosmeticIssues('No')
 await page.waitForTimeout(100)
 await bodyWorkPage.clickContinueButton()
 //await page.waitForTimeout(100)
 await page.waitForLoadState('networkidle');
 const mechanicsPage = new MechanicsPage(page)
 await expect (await mechanicsPage.mechanicsTitle).toHaveText('How does your bike run')
 await expect (await mechanicsPage.mechanicsTitle).toBeVisible()

 await mechanicsPage.clickBikeMightFailItsNextMot('No')
 await mechanicsPage.clickDoAllLightsWorkOnYourBike('Yes')
 await mechanicsPage.clickDoesTheBikeHaveOriginalClocks('Yes') 
 await mechanicsPage.clickAreTheClocksWorking('Yes') 
 await mechanicsPage.clickIsTheSteeringLockFaulty('No')
 await mechanicsPage.clickAreForkStanchionsPittedOrCorroded('No')
 await mechanicsPage.clickAreEitherOfTheWheelsDamaged('No')
 await mechanicsPage.clickDoTheWheelVearingsHaveAnyProblems('No')
 await mechanicsPage.clickTyresUnder2mm('No')
 await mechanicsPage.clickDoTheBrakeDiscsHaveAnyPitting('No')
 await mechanicsPage.clickDoBrakePadsHaveLessThan2mm('No')
 await mechanicsPage.clickIsExhaustBlowingOrDamagedInAnyWay('No')
 await mechanicsPage.clickDoesTheChainOrSprocketsNeedReplacing('No')
 await mechanicsPage.clickIsTheBikeBeltDriven('No')
 await mechanicsPage.clickDoesTheBikeHaveItsOriginalEngine('Yes')
 await mechanicsPage.clickWhenBikeWasRiddenUpToFullTemperature('Within 7 Days')
 await mechanicsPage.clickDoWarningLightsGoOutAfterFewSeconds('No')
 await mechanicsPage.clickDoesBikeStartAndRunWithoutAnyProblems('Yes')
 await mechanicsPage.clickIsTheEngineInWorkingOrder('Yes')
 await mechanicsPage.clickDoesClutchRattleDragOrSlip('No')
 await mechanicsPage.clickAnyOtherMechanicalOrElectricalIssues('No')
 await page.waitForTimeout(100)
 await mechanicsPage.clickContinueButton()
 await page.waitForLoadState('networkidle');
 const extrasPage = new ExtrasPage(page)
 await expect (await extrasPage.extrasPageTitle).toHaveText('Extras')
 await expect (await extrasPage.extrasPageTitle).toBeVisible()

 await extrasPage.clickDoesYourBikeHaveAnAlarm('Yes')
 await extrasPage.clickDoesYourBikeHaveAnyNonStandardManufacturer('No')
 await extrasPage.clickDoesYourBikeHaveAnyAfterMarketParts('No')
 await page.waitForTimeout(100)
 await extrasPage.clickContinueButton()
 await page.waitForLoadState('networkidle');
 const uploadPage = new UploadPage(page)
 await expect (await uploadPage.pageTitle).toHaveText('Thank you for confirming the condition of your bike')
 await expect (await uploadPage.pageTitle).toBeVisible()
 await uploadPage.doUploatPhotoOfMyBike('./app/docs/img/bike.jpg')
 await uploadPage.clickConfirmUploadPhotoButton()
 await uploadPage.clickCompleteProcessButton()

 const thankYouPage = new ThankYouPage(page)
 await expect (await thankYouPage.pageTitle).toHaveText('Thanks for selling your bike with us')
 await expect (await thankYouPage.pageTitle).toBeVisible()

});


