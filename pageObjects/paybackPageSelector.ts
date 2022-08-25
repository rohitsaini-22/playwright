import { Page, Locator, Response } from "@playwright/test";

/*
 * Page Selectors for payback
 */
export default class PaybackPageSelector {
  readonly register: Locator;
  readonly paybackURL: Promise<Response>;
  readonly page: Page;
  readonly emailInput: Locator;
  readonly pinInput: Locator;
  readonly personalSalutation: Locator;
  readonly personalDataFirstName: Locator;
  readonly personalDataLastName: Locator;
  readonly personalDataDOB: Locator;
  readonly personalDataDOBDate: Locator;
  readonly personalDataDOBMonth: Locator;
  readonly personalDataDOBYear: Locator;
  readonly personalDataStreet: Locator;
  readonly personalDataZipCode: Locator;
  readonly personalDataFloor: Locator;
  readonly personalDataCity: Locator;
  readonly personalDataCountry: Locator;
  readonly submitButtonPersonalData: Locator;
  readonly acceptCookies: Locator;
  readonly checkboxNoPaybackCard: Locator;
  readonly choosePaybackCard: Locator;
  readonly continueButtonPaybackCard: Locator;
  readonly emailValidations: Locator;
  readonly pinValidations: Locator;
  readonly salutationValidation: Locator;
  readonly firstNameValidation: Locator;
  readonly lastNameValidation: Locator;
  readonly dobValidation: Locator;
  readonly streetValidation: Locator;
  readonly floorValidation: Locator;
  readonly cityValidation: Locator;
  readonly pincodeValidation: Locator;

  constructor(page: Page) {
    this.paybackURL = page.goto("https://www.payback.at/");
    this.acceptCookies = page.locator("#onetrust-accept-btn-handler");
    this.register = page.locator(
      "body > nav > div > div > div > div.pb-navigation__menu-wrapper.pb-navigation__menu-wrapper_first-level.pb-navigation__menu-wrapper_user-area > ul.pb-navigation__menu.pb-navigation__menu_register > li > a > div"
    );

    //Page Selector for Access Data section
    this.emailInput = page.locator('input[name="email"]');
    this.pinInput = page.locator('input[name="pin"]');
    this.checkboxNoPaybackCard = page.locator(
      "text=Noch keine PAYBACK Karte? Neue Karte auswählen. >> span"
    );
    this.choosePaybackCard = page.locator('img[alt="dm drogerie markt"]');
    this.continueButtonPaybackCard = page.locator("text=Weiter");
    this.emailValidations = page.locator(
      "text=Bitte geben Sie Ihre E-Mail-Adresse ein (inkl. @)"
    );
    this.pinValidations = page.locator(
      "text=Bitte geben Sie einen 4-stelligen (0-9) PIN ein"
    );

    //Page Selector for Personal Data section
    this.personalSalutation = page.locator('select[name="salutation"]');
    this.personalDataFirstName = page.locator('input[name="firstName"]');
    this.personalDataLastName = page.locator('input[name="lastName"]');
    this.personalDataStreet = page.locator('input[name="street"]');
    this.personalDataFloor = page.locator('input[name="floor"]');
    this.personalDataZipCode = page.locator('input[name="zipCode"]');
    this.personalDataCity = page.locator('input[name="city"]');
    this.personalDataDOB = page.locator('[placeholder="TT\\/MM\\/JJJJ"]');
    this.personalDataDOBDate = page.locator('[placeholder="TT"]');
    this.personalDataDOBMonth = page.locator('[placeholder="MM"]');
    this.personalDataDOBYear = page.locator('[placeholder="JJJJ"]');
    this.personalDataCountry = page.locator('select[name="country"]');
    this.submitButtonPersonalData = page.locator("text=Nur noch ein Schritt");
    this.salutationValidation = page.locator(
      "text=Bitte wählen Sie eine Anrede aus"
    );
    this.firstNameValidation = page.locator(
      "text=Bitte geben Sie Ihren Vornamen ein"
    );
    this.lastNameValidation = page.locator(
      "text=Bitte geben Sie Ihren Nachnamen ein"
    );
    this.dobValidation = page.locator(
      "text=Bitte geben Sie Ihr Geburtsdatum (TT/MM/JJJJ) ein"
    );
    this.streetValidation = page.locator(
      "text=Bitte geben Sie Ihre Straße ein"
    );
    this.floorValidation = page.locator(
      "text=Bitte geben Sie Ihre Hausnummer ein"
    );
    this.pincodeValidation = page.locator("text=Bitte geben Sie Ihre PLZ ein");
    this.cityValidation = page.locator("text=Bitte geben Sie Ihren Wohnort an");
  }
}
