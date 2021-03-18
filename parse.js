// author: Tanmay Hinge
const nearley = require("nearley");
const grammar = require("./honey.js");
const fs = require("mz/fs");

async function main(){

    const filename=process.argv[2];
    if(!filename){
        console.log("please provide a honey file");
        return;
    }

    const code = (await fs.readFile(filename)).toString();
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));


    parser.feed(code);
    if(parser.results.length >1){
        console.log("Error:ambiguous grammar found");

        for(let i =0; i<parser.results.length; i++){
            const ast = parser.results[i];
            const outputFilename = filename.replace(".honey", "-" + i + ".ast");
            await fs.writeFile(outputFilename, JSON.stringify(ast, null, " "));
            console.log(`Success ${outputFilename}..`);           
        }

    }
    else if(parser.results.length == 1){
        const ast = parser.results[0];
        const outputFilename = filename.replace(".honey", ".ast");
        await fs.writeFile(outputFilename, JSON.stringify(ast, null, " "));
        // console.log(`Success ${outputFilename}..`);
    }
    else{
        console.log("Error while parsing the file");
    }

// try{
//     parser.feed(code);
//     console.log("Parse Succeeded",parser.results);
// }
// catch(e){
//     console.log(`parse Failed ---- ${e.message}`);

// }
}

main().catch(err => console.log(err.stack));


// author: Tanmay Hinge