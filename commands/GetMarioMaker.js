const Command = require('./Command.js');

// Example code: XXXX-XXXX-XXXX-XXXX
// Example site: https://supermariomakerbookmark.nintendo.net/courses/XXXX-XXXX-XXXX-XXXX

class GetMarioMaker extends Command {
  constructor(msg) {
    super(msg);
  }
}

module.exports = GetMarioMaker;