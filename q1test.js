import { Browser, Builder, By } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function testLockedOutUser() {
  try {
    console.log("Starting test...");

    // Step 1: Navigate to website
    console.log("Opening website");
    await driver.get("https://www.saucedemo.com/");
    await driver.sleep(2000);

    // Step 2: Enter username
    console.log("Entering username");
    await driver.findElement(By.id("user-name")).sendKeys("locked_out_user");
    await driver.sleep(1000);

    // Step 3: Enter password
    console.log("Entering password");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.sleep(1000);

    // Step 4: Click login button
    console.log("Clicking login button");
    await driver.findElement(By.id("login-button")).click();
    await driver.sleep(2000);

    // Step 5: Get error message
    console.log("Getting error message");
    const errorMessage = await driver.findElement(By.xpath("//h3[@data-test='error']")).getText();
    console.log("Error message: " + errorMessage);

    // Step 6: Pause
    console.log("Pausing for 5 seconds");
    await driver.sleep(5000);

    // Step 7: Validate error
    console.log("Validating error message");
    if (errorMessage.includes("locked out")) {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }

  } catch (error) {
    console.log("Error: " + error.message);
  } finally {
    await driver.quit();
  }
}

testLockedOutUser();