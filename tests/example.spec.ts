import { test, expect } from "@playwright/test";

test("homepage has Playwright in title and get started link linking to the intro page", async ({
  page,
}) => {
  await page.goto("https://www.payback.at/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/PAYBACK/);

  // // create a locator
  // const getStarted = page.locator('text=Get Started');

  // // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // // Click the get started link.
  // await getStarted.click();

  // // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
  // onetrust - accept - btn - handler;
  const accetpCookies = page.locator('text="Cookies akzeptieren"');
  await accetpCookies.click();
  const anmelden = page.locator(".pb-navigation__link tracking-target");
  await anmelden.click();
});
