@{%

    const lexer= require("./lexer")

%}

@lexer lexer
statement
    -> var_assignment {% id %}

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

expr
    ->  %string {% id %}
    |   %number {% id %}

_ -> %WS:* 
__ -> %WS:+ 