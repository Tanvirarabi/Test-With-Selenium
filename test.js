import { Browser,Builder,By,Key } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();



async function testRun() {
await driver.get("https://demo.evershop.io/");
await driver.sleep(2000);
await driver.manage().window().maximize();
await driver.sleep(2000);
await driver.findElement(By.className("search__icon")).click();
await driver.sleep(2000);
await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Stainless Steel Thermos");
await driver.sleep(2000);
await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);
await driver.sleep(2000);
await driver.quit();

}

testRun();