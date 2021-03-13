const nearley = require("nearley");
const grammar = require("./def.js");

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));



try{
    parser.feed("122.2");
    console.log("Parse Succeeded",parser.results);
}
catch(e){
    console.log(`parse Failed ---- ${e.message}`);

}