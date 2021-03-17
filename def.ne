program
    -> var_assignment {% id %}
    | print_statement {% id %}
  
var_assignment -> identifier _ "=" _ number 
{%
    data=>{
        return{
            type: "var_assignment",
            varname: data[0],
            value: data[2]
        }
    }
%}

identifier -> [a-z]:+ {% id %}


unary_expression
    -> number   {% id %}
    | identifier {% id %}

expression
    -> unary_expression {% id %}
    | binary_expression {% id %}

binary_expression
    -> unary_expression _ operator _ unary_expression

operator
    -> "+" {% id %}
    | "-" {% id %}
    | "*" {% id %}
    | "/" {% id %}

number 
    -> digits "." digits
    {%
        data => Number(data[0]+"."+data[2])        
    %}
    | digits
    {% 
        data => Number(data[0])
    %}

digits -> [0-9]:+ 
    {%
        data => data[0].join("")
    %}

_ -> [ ]:*
__ -> [ ]:+

print_statement -> "out" __ expression 
    {%

        data=>{
            return{
                type: "print_statement",
                expression: data[2]
            }
        }

    %}