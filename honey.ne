@{%

    const lexer= require("./lexer")

%}

@lexer lexer

prog
    -> _ml statements _ml
    {%
        (data)=>{
            return data[1];
        }
    %}

statements
    ->  statement (__lb_ statement):*
        {%
            (data) => {
                const repeated = data[1];
                const restStatements = repeated.map(chunks => chunks[1]);
                return [data[0], ...restStatements];
            }
        %}

statement
    -> var_assignment {% id %}
    |   fun_call {% id %}
    |   %comment {% id %}


var_assignment
    -> %identifier _ "=" _ expr
    {%
        (data)=>{
            return{
                type: "var_assignment",
                var_name: data[0],
                value: data[4]
            }
        }
    %}

fun_call
    -> %identifier _ "(" _ml (arg_list _ml):? ")"
    {%
        (data)=>{
            return{
                type: "fun_call",
                fun_name: data[0],
                arguments:data[4] ? data[4][0] : []
            }
        }
    %}
  

arg_list
    -> expr
    {%
        (data)=>{
            return [data[0]];
        }
    %}
    | arg_list __ml expr
    {%
        (data)=>{
            return [...data[0], data[2]];
        }
    %}

expr
    -> %string {% id %}
    | %number {% id %}
    | %identifier {% id %}
    | fun_call {% id %}
    | lambda {% id %}


lambda -> "(" _ (param_list _):? ")" _ "=>" _ml lambda_body
    {%
        (data) => {
            return {
                type: "lambda",
                parameters: data[2] ? data[2][0] : [],
                body: data[7]
            }
        }
    %}
    
param_list
    -> %identifier (__ %identifier):*
        {%
            (data) => {
                const repeatedPieces = data[1];
                const restParams = repeatedPieces.map(piece => piece[1]);
                return [data[0], ...restParams];
            }
        %}

lambda_body
    -> expr
        {%
            (data) => {
                return [data[0]];
            }
        %}
    |  "{" __lb_ statements __lb_ "}"
        {%
            (data) => {
                return data[2];
            }
        %}

__lb_ -> (_ %NL):+ _
_ml -> (%WS | %NL):*
__ml -> (%WS | %NL):+


_ -> %WS:* 
__ -> %WS:+ 