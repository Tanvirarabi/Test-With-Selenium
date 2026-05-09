import { Browser, Builder, By } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function testPerformanceGlitchUser() {
  try {
    console.log("Starting performance glitch user test");

    // Step 1: Navigate to website
    console.log("Opening website");
    await driver.get("https://www.saucedemo.com/");
    await driver.sleep(2000);

    // Step 2: Login with performance_glitch_user
    console.log("Logging in with performance_glitch_user");
    await driver.findElement(By.id("user-name")).sendKeys("performance_glitch_user");
    await driver.sleep(500);
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.sleep(500);
    await driver.findElement(By.id("login-button")).click();
    await driver.sleep(3000);

    // Step 3: Reset App State
    console.log("Resetting app state");
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    await driver.sleep(1500);
    await driver.findElement(By.id("reset_sidebar_link")).click();
    await driver.sleep(1500);
    await driver.findElement(By.id("react-burger-cross-btn")).click();
    await driver.sleep(2000);

    // Step 4: Filter by name (Z to A)
    console.log("Filtering by name Z to A");
    await driver.findElement(By.className("product_sort_container")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//option[contains(text(), 'Z to A')]")).click();
    await driver.sleep(2000);

    // Step 5: Add first product to cart
    console.log("Adding first product to cart");
    const addToCartButtons = await driver.findElements(By.xpath("//button[contains(@class, 'btn_primary')]"));
    await addToCartButtons[0].click();
    await driver.sleep(1000);

    // Step 6: Navigate to cart
    console.log("Opening cart");
    await driver.findElement(By.className("shopping_cart_link")).click();
    await driver.sleep(2000);

    // Step 7: Verify product name
    console.log("Checking product in cart");
    const productName = await driver.findElement(By.className("inventory_item_name")).getText();
    console.log("Product: " + productName);

    // Step 8: Proceed to checkout
    console.log("Clicking checkout");
    await driver.findElement(By.id("checkout")).click();
    await driver.sleep(2000);

    // Step 9: Fill checkout information
    console.log("Entering checkout info");
    await driver.findElement(By.id("first-name")).sendKeys("John");
    await driver.sleep(300);
    await driver.findElement(By.id("last-name")).sendKeys("Doe");
    await driver.sleep(300);
    await driver.findElement(By.id("postal-code")).sendKeys("12345");
    await driver.sleep(300);

    // Step 10: Click Continue
    console.log("Clicking continue");
    await driver.findElement(By.id("continue")).click();
    await driver.sleep(3000);

    // Step 11: Verify product name and total price
    console.log("Verifying product and total");
    const finalProductName = await driver.findElement(By.className("inventory_item_name")).getText();
    console.log("Final product: " + finalProductName);
    
    const totalPrice = await driver.findElement(By.className("summary_total_label")).getText();
    console.log("Total: " + totalPrice);

    // Step 12: Finish purchase
    console.log("Finishing purchase");
    await driver.findElement(By.id("finish")).click();
    await driver.sleep(3000);

    // Step 13: Verify success message
    console.log("Checking success message");
    const successMessage = await driver.findElement(By.className("complete-header")).getText();
    console.log("Message: " + successMessage);

    if (successMessage.includes("Thank you")) {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }

    // Step 14: Reset App State again
    console.log("Resetting app state again");
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    await driver.sleep(1500);
    await driver.findElement(By.id("reset_sidebar_link")).click();
    await driver.sleep(1500);
    await driver.findElement(By.id("react-burger-cross-btn")).click();
    await driver.sleep(1500);

    // Step 15: Logout
    console.log("Logging out");
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    await driver.sleep(1000);
    await driver.findElement(By.id("logout_sidebar_link")).click();
    await driver.sleep(2000);

    console.log("Test completed");

  } catch (error) {
    console.log("Error: " + error.message);
  } finally {
    await driver.quit();
  }
}

testPerformanceGlitchUser();