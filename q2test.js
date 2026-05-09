import { Browser, Builder, By } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function testCheckoutJourney() {
  try {
    console.log("Starting checkout test");

    // Step 1: Navigate to website
    console.log("Opening website");
    await driver.get("https://www.saucedemo.com/");
    await driver.sleep(3000);

    // Step 2: Login with standard_user
    console.log("Logging in");
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.sleep(500);
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.sleep(500);
    await driver.findElement(By.id("login-button")).click();
    await driver.sleep(4000);

    // Step 3: Reset App State
    console.log("Resetting app state");
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    await driver.sleep(2000);
    const resetLink = await driver.findElement(By.id("reset_sidebar_link"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", resetLink);
    await driver.sleep(1000);
    await resetLink.click();
    await driver.sleep(2000);
    await driver.findElement(By.id("react-burger-cross-btn")).click();
    await driver.sleep(3000);

    // Step 4: Add three items to cart
    console.log("Adding items to cart");
    const addToCartButtons = await driver.findElements(By.xpath("//button[contains(@class, 'btn_primary')]"));
    for (let i = 0; i < 3; i++) {
      await driver.executeScript("arguments[0].scrollIntoView(true);", addToCartButtons[i]);
      await driver.sleep(500);
      await addToCartButtons[i].click();
      await driver.sleep(1000);
    }

    // Step 5: Navigate to cart
    console.log("Opening cart");
    await driver.findElement(By.className("shopping_cart_link")).click();
    await driver.sleep(3000);

    // Step 6: Verify product names
    console.log("Checking products in cart");
    const cartItems = await driver.findElements(By.className("inventory_item_name"));
    for (let i = 0; i < cartItems.length; i++) {
      const name = await cartItems[i].getText();
      console.log("Product: " + name);
    }

    // Step 7: Proceed to checkout
    console.log("Clicking checkout");
    await driver.findElement(By.id("checkout")).click();
    await driver.sleep(3000);

    // Step 8: Fill checkout information
    console.log("Entering checkout info");
    await driver.findElement(By.id("first-name")).sendKeys("John");
    await driver.sleep(300);
    await driver.findElement(By.id("last-name")).sendKeys("Doe");
    await driver.sleep(300);
    await driver.findElement(By.id("postal-code")).sendKeys("12345");
    await driver.sleep(300);

    // Step 9: Click Continue
    console.log("Clicking continue");
    await driver.findElement(By.id("continue")).click();
    await driver.sleep(4000);

    // Step 10: Verify total price
    console.log("Checking total price");
    const totalPrice = await driver.findElement(By.className("summary_total_label")).getText();
    console.log("Total: " + totalPrice);

    // Step 11: Finish purchase
    console.log("Finishing purchase");
    await driver.findElement(By.id("finish")).click();
    await driver.sleep(4000);

    // Step 12: Verify success message
    console.log("Checking success message");
    const successMessage = await driver.findElement(By.className("complete-header")).getText();
    console.log("Message: " + successMessage);

    if (successMessage.includes("Thank you")) {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }

    // Step 13: Reset App State again
    console.log("Resetting app state again");
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    await driver.sleep(2000);
    const resetLink2 = await driver.findElement(By.id("reset_sidebar_link"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", resetLink2);
    await driver.sleep(1000);
    await resetLink2.click();
    await driver.sleep(2000);
    await driver.findElement(By.id("react-burger-cross-btn")).click();
    await driver.sleep(2000);

    // Step 14: Logout
    console.log("Logging out");
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    await driver.sleep(1500);
    const logoutLink = await driver.findElement(By.id("logout_sidebar_link"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", logoutLink);
    await driver.sleep(1000);
    await logoutLink.click();
    await driver.sleep(3000);

    console.log("Test completed");

  } catch (error) {
    console.log("Error: " + error.message);
  } finally {
    await driver.quit();
  }
}

testCheckoutJourney();