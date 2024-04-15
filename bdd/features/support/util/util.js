const { Driver } = require("selenium-webdriver/firefox")

const sleeptime = 1000


async function openWebsite(driver, websiteUrl) {
    try {
        await driver.get(websiteUrl);
    } catch (error) {
        console.error('Error opening website:', error);
        throw error;
    }
}


async function hasElement(driver, locator) {
    await driver.sleep(sleeptime);
    try {
        await driver.findElement(locator);
        return true;
    } catch (error) {
        if (error.name === 'NoSuchElementError') {
            return false;
        } else {
            console.error('Error checking for element:', error);
            throw error;
        }
    }
}

module.exports = { openWebsite, hasElement }