// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }


    const lexer= require("./lexer")

var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "statements", "symbols": ["_", "statement", "_"], "postprocess": 
        (data)=>{
            return [data[1]];
        }
            },
    {"name": "statements", "symbols": ["statements", (lexer.has("NL") ? {type: "NL"} : NL), "_", "statement", "_"], "postprocess": 
        (data)=>{
            return [...data[0], data[3]];
        }
            },
    {"name": "statement", "symbols": ["var_assignment"], "postprocess": id},
    {"name": "statement", "symbols": ["fun_call"], "postprocess": id},
    {"name": "var_assignment", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"="}, "_", "expr"], "postprocess": 
        (data)=>{
            return{
                type: "var_assignment",
                var_name: data[0],
                value: data[4]
            }
        }
            },
    {"name": "fun_call$ebnf$1$subexpression$1", "symbols": ["arg_list", "_"]},
    {"name": "fun_call$ebnf$1", "symbols": ["fun_call$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "fun_call$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "fun_call", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"("}, "_", "fun_call$ebnf$1", {"literal":")"}], "postprocess": 
        (data)=>{
            return{
                type: "fun_call",
                fun_name: data[0],
                arguments:data[4] ? data[4][0] : []
            }
        }
            },
    {"name": "arg_list", "symbols": ["expr"], "postprocess": 
        (data)=>{
            return [data[0]];
        }
            },
    {"name": "arg_list", "symbols": ["arg_list", "__", "expr"], "postprocess": 
        (data)=>{
            return [...data[0], data[2]];
        }
            },
    {"name": "expr", "symbols": [(lexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "expr", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "expr", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "expr", "symbols": ["fun_call"], "postprocess": id},
    {"name": "expr", "symbols": ["lambda"], "postprocess": id},
    {"name": "lambda$ebnf$1$subexpression$1", "symbols": ["param_list", "_"]},
    {"name": "lambda$ebnf$1", "symbols": ["lambda$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "lambda$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "lambda", "symbols": [{"literal":"("}, "_", "lambda$ebnf$1", {"literal":")"}, "_", {"literal":"=>"}, "_", "lambda_body"], "postprocess": 
        (data)=>{
            return{
                type: "lambda",
                parameters: data[2]? data[2][0]:[],
                body: data[7]
            }
        }
        },
    {"name": "param_list$ebnf$1", "symbols": []},
    {"name": "param_list$ebnf$1$subexpression$1", "symbols": ["__", (lexer.has("identifier") ? {type: "identifier"} : identifier)]},
    {"name": "param_list$ebnf$1", "symbols": ["param_list$ebnf$1", "param_list$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "param_list", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "param_list$ebnf$1"], "postprocess": 
        (data)=>{
            const repBlocks = data[1];
            const restBlocks = repBlocks.map(piece => piece[1])
            return [data[0], ...restBlocks];
        }
            },
    {"name": "lambda_body", "symbols": ["expr"], "postprocess":  
        (data)=>{   
            return [data[0]];
        }   
        
            },
    {"name": "lambda_body", "symbols": [{"literal":"{"}, "_", (lexer.has("NL") ? {type: "NL"} : NL), "statements", (lexer.has("NL") ? {type: "NL"} : NL), "_", {"literal":"}"}], "postprocess": 
        (data)=>{   
            return [data[3]];
        }          
        
            },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("WS") ? {type: "WS"} : WS)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
]
  , ParserStart: "statements"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
