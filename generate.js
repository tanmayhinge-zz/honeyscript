const fs = require("mz/fs");
async function main(){

    const filename=process.argv[2];
    if(!filename){
        console.log("please provide a ast file");
        return;
    }

    const astJSON = (await fs.readFile(filename)).toString();
    const runitmeJS = (await fs.readFile("library.js")).toString();
    const statements = JSON.parse(astJSON);
    const jsCode = genJSforSt(statements) + "\n" + runitmeJS;
    const outputFilename= filename.replace(".ast",".js");

    await fs.writeFile(outputFilename, jsCode);
    console.log(`Wrote ${outputFilename}`);
}

function genJSforSt(statements){
    const lines = [];
    for(let statement of statements){
        const line = genJSforStOrExpr(statement);
        lines.push(line);
    }
    return lines.join("\n");
}
function genJSforStOrExpr(node){

    if(node.type === "var_assignment"){
        const varName = node.var_name.value;
        const jsExpr = genJSforStOrExpr(node.value)
        const js = `var ${varName} = ${jsExpr};`;
        return js;
    }

    else if(node.type === "fun_call"){
        const funName = node.fun_name.value;
        const argList =node.arguments.map((arg) =>{
            return genJSforStOrExpr(arg);
        }).join(", ");

        return `${funName}(${argList})`;
    }

    else if(node.type === "string"){
        return node.value;
    }

    else if(node.type === "number"){
        return node.value;
    }
    else if(node.type === "identifier"){
        return node.value;
    }

    else{
        throw new Error(`Unhandeld AST node type ${node.type}`);
    }

}

main().catch(err => console.log(err.stack));