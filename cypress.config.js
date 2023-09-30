const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://thinking-tester-contact-list.herokuapp.com/"
  },
  "env":{
    "DB": {
    "user": "myuser",
    "host": "127.0.0.1",
    "database": "testDB",
    "password": "pass",
    "port": 32763
    }
    },
});
