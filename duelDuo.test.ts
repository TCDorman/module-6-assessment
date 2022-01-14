
import { Builder, Capabilities, By } from "selenium-webdriver"
import { skipPartiallyEmittedExpressions } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking the draw button displays the div with the id="choices"', async () => {
    const drawButton = await driver.findElement(By.id('draw')).click()
    await driver.sleep(5000)
    const displays = await driver.findElement(By.id('choices'))
    expect(displays).toBeTruthy()
})

test('clicking an "add to duo" button displays the div with id="player-id"', async() => {
    const addToDuo = await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(5000)
    const displays = await driver.findElement(By.id('player-duo'))
    expect(displays).toBe(true)
})
