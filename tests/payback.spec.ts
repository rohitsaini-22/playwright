import { test, expect } from "@playwright/test";
import PaybackPageSelector from "../pageObjects/paybackPageSelector";

test.describe("Payback test", () => {
  test("Verify validations on Payback registration page", async ({ page }) => {
    const paybackPageSelector = new PaybackPageSelector(page);

    console.log("Navigating to Payback URL");
    await paybackPageSelector.paybackURL;
    await paybackPageSelector.acceptCookies.click();

    console.log("Navigating to Registration page");
    await paybackPageSelector.register.click();

    console.log("Checking validations on email and PIN");
    //Selecting Card
    await paybackPageSelector.checkboxNoPaybackCard.click();
    await paybackPageSelector.choosePaybackCard.nth(3).click();
    await paybackPageSelector.continueButtonPaybackCard.first().click();

    //Email and Pin Section
    await paybackPageSelector.emailInput.click();
    await paybackPageSelector.emailInput.fill("123");
    await paybackPageSelector.emailInput.press("Enter");
    await expect(paybackPageSelector.emailValidations).toBeVisible();

    await paybackPageSelector.pinInput.click();
    await paybackPageSelector.pinInput.fill("123");
    await paybackPageSelector.pinInput.press("Enter");

    await expect(paybackPageSelector.pinValidations).toBeVisible();

    await paybackPageSelector.emailInput.fill("test1@test.com");
    await paybackPageSelector.emailInput.press("Enter");

    await expect(paybackPageSelector.emailValidations).not.toBeVisible();
    await paybackPageSelector.pinInput.click();
    await paybackPageSelector.pinInput.fill("123456");
    await paybackPageSelector.pinInput.press("Enter");

    await expect(paybackPageSelector.pinValidations).not.toBeVisible();
    console.log("Verified validations on email and PIN");

    console.log("Checking validations in Personal Data form");
    //Personal Data Section
    await paybackPageSelector.submitButtonPersonalData.click();
    await expect(paybackPageSelector.salutationValidation).toBeVisible();
    await expect(paybackPageSelector.firstNameValidation).toBeVisible();
    await expect(paybackPageSelector.lastNameValidation).toBeVisible();
    await expect(paybackPageSelector.dobValidation).toBeVisible();
    await expect(paybackPageSelector.streetValidation).toBeVisible();
    await expect(paybackPageSelector.floorValidation).toBeVisible();
    await expect(paybackPageSelector.pincodeValidation).toBeVisible();
    await expect(paybackPageSelector.cityValidation).toBeVisible();

    await paybackPageSelector.personalSalutation.selectOption("2");
    await paybackPageSelector.personalDataFirstName.click();
    await paybackPageSelector.personalDataFirstName.fill("");
    await paybackPageSelector.personalDataLastName.click();
    await expect(paybackPageSelector.firstNameValidation).toBeVisible();

    await paybackPageSelector.personalDataFirstName.click();
    await paybackPageSelector.personalDataFirstName.fill("rohit");
    await paybackPageSelector.personalDataLastName.click();
    await paybackPageSelector.personalDataLastName.fill("saini");
    await paybackPageSelector.personalDataDOB.click();
    await paybackPageSelector.personalDataDOBDate.click();
    await paybackPageSelector.personalDataDOBDate.fill("22");
    await paybackPageSelector.personalDataDOBMonth.click();
    await paybackPageSelector.personalDataDOBMonth.fill("09");
    await paybackPageSelector.personalDataDOBYear.click();
    await paybackPageSelector.personalDataDOBYear.fill("1993");
    await paybackPageSelector.personalDataStreet.click();
    await paybackPageSelector.personalDataStreet.fill("New");
    await paybackPageSelector.personalDataFloor.click();
    await paybackPageSelector.personalDataFloor.fill("second");
    await paybackPageSelector.personalDataZipCode.click();
    await paybackPageSelector.personalDataZipCode.fill("1001");
    await paybackPageSelector.personalDataCity.click();
    await paybackPageSelector.personalDataCity.fill("Delhi");
    await paybackPageSelector.personalDataCountry.selectOption("fr");

    await expect(paybackPageSelector.salutationValidation).not.toBeVisible();
    await expect(paybackPageSelector.firstNameValidation).not.toBeVisible();
    await expect(paybackPageSelector.lastNameValidation).not.toBeVisible();
    await expect(paybackPageSelector.dobValidation).not.toBeVisible();
    await expect(paybackPageSelector.streetValidation).not.toBeVisible();
    await expect(paybackPageSelector.floorValidation).not.toBeVisible();
    await expect(paybackPageSelector.pincodeValidation).not.toBeVisible();
    await expect(paybackPageSelector.cityValidation).not.toBeVisible();
    console.log("Verified validations in Personal Data form");
  });
});
