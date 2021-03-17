const fs = require("mz/fs");
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function main(){
    const filename=process.argv[2];
    if(!filename){
        console.log("please provide a .honey file");
        return;
    }

    const astFilename = filename.replace(".honey", ".ast");
    const jsFilename = filename.replace(".honey", ".js");

    await exeC(`node parse.js ${filename}`);
    await exeC(`node generate.js ${astFilename}`);
    await exeC(`node ${jsFilename}`);


}


async function exeC(command){
    const output = await exec(command);
    if(output.stdout){
        process.stdout.write(output.stdout);
    }
    if(output.stderr){
        process.stdout.write(output.stderr);
    }
}

main().catch(err=> console.log(err.stack));


// flow : honey -> parse.js -> .ast -> generate.js -> .js -> node -> result