const { Builder, By, Key, until } = require('selenium-webdriver')

async function login(driver, websiteUrl, username, password, loginButton) {
    await driver.get(websiteUrl)
    await driver.sleep(3000)
    await driver.findElement(By.name("username")).sendKeys(username);
    await driver.findElement(By.name("password")).sendKeys(password);
    await driver.findElement(By.css(loginButton)).click();
}

module.exports = { login }