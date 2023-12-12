const { Builder, By, Key, until } = require('selenium-webdriver');

class NewNoteFormPage {
  constructor(driver) {
    this.driver = driver;
    this.inputField = By.tagName('input');
    this.addButton = By.tagName('button');
  }

  async enterNewNote(note) {
    await this.driver.findElement(this.inputField).sendKeys(note);
  }

  async clickAddNoteButton() {
    await this.driver.findElement(this.addButton).click();
  }
}

class NoteListPage {
  constructor(driver) {
    this.driver = driver;
    this.noteItem = By.tagName('li');
    this.deleteButton = By.tagName('button');
  }

  async getNoteItems() {
    return await this.driver.findElements(this.noteItem);
  }

  async deleteNoteAtIndex(index) {
    const noteItems = await this.getNoteItems();
    const deleteButton = await noteItems[index].findElement(this.deleteButton);
    await deleteButton.click();
  }
}

(async function example() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Open the React app
    await driver.get('http://localhost:3000');

    // Page Objects
    const newNoteFormPage = new NewNoteFormPage(driver);
    const noteListPage = new NoteListPage(driver);

    // Test Scenario
    await newNoteFormPage.enterNewNote('Testing with Selenium');
    await newNoteFormPage.clickAddNoteButton();

    // Verify the note is added
    const noteItems = await noteListPage.getNoteItems();
    console.log('Number of notes:', noteItems.length);

    // Delete a note
    if (noteItems.length > 0) {
      await noteListPage.deleteNoteAtIndex(0);
      console.log('Note deleted');
    }
  } finally {
    // Close the browser
    await driver.quit();
  }
})();
 