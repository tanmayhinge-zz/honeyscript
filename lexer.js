const moo = require('moo');
const fs = require("mz/fs");

let lexer = moo.compile({
  WS:      /[ \t]+/,
  comment: /\/\/.*?$/,
  number:  /0|[1-9][0-9]*/,
  string:  /"(?:\\["\\]|[^\n"\\])*"/,
  lparen:  '(',
  rparen:  ')',
  lbrace:  '{',
  rbrace:  '}',
  identifier: /[a-zA-Z][a-zA-Z_0-9]*/,
  farrow: '=>', 
  assign: '=',
  NL:      { match: /\n/, lineBreaks: true },
});

// author: Tanmay Hinge

module.exports = lexer;

async function main() {
    const code = (await fs.readFile("example.honey")).toString();
    lexer.reset(code);
    while (true) {
        const token = lexer.next();
        if (!token) {
            break;
        }
        console.log(token);
    }

}

// main().catch(err => console.log(err.stack));