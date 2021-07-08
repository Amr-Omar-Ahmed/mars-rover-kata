import express = require("express");

export class Webserver {
  webserver = express();
  constructor(private port = 915) {
    this.webserver.listen(this.port, null, () => {
      console.log(
        `Express webserver configured and listening at http://localhost:${this.port}`
      );
    });
  }
}
