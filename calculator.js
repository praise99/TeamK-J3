
// Define and select elements
const input = document.querySelector('.input');
const output_operation = document.querySelector('.operation .value');
const output_result = document.querySelector('.result .value');

//creating data variable
let data={
    operation: [],
    formula : []
}

// Define the calculator buttons that will be displayed
let calculator_buttons = [
    {
        name : "rad",
        symbol : "Rad",
        formula : false,
        type : "key"
    },
    {
        name : "deg",
        symbol : "Deg",
        formula : false,
        type : "key"
    },
    {
        name : "factorial",
        symbol : "x!",
        formula : FACTORIAL,  // define factorial function
        type : "math_function"
    },
    {
        name : "open-parenthesis",
        symbol : "(",
        formula : "(",
        type : "number"
    },
    {
        name : "close-parenthesis",
        symbol : ")",
        formula : ")",
        type : "number"
    },
    {
        name : "percentage",
        symbol : "%",
        formula : "/100",
        type : "number"
    },
    {
        name : "clear",
        symbol : "AC",
        formula : false,
        type : "key"
    },
    {
        name : "inverse",
        symbol : "Inv",
        formula : INV, // define multiplicative inverse function
        type : "math_function"
    },
    {
        name : "sin",
        symbol : "sin",
        formula : "trigo(Math.sin,",
        type : "trigo_function"
    },
    {
        name : "ln",
        symbol : "ln",
        formula : "Math.log",
        type : "math_function"
    },
    {
        name : "7",
        symbol : 7,
        formula : 7,
        type : "number"
    },
    {
        name : "8",
        symbol : 8,
        formula : 8,
        type : "number"
    },
    {
        name : "9",
        symbol : 9,
        formula : 9,
        type : "number"
    },
    {
        name : "division",
        symbol : "÷",
        formula : "/",
        type : "operator"
    },
    {
        name : "pi",
        symbol : "π",
        formula : "Math.PI",
        type : "number"
    },
    {
        name : "cos",
        symbol : "cos",
        formula : "trigo(Math.cos,",
        type : "trigo_function"
    },
    {
        name : "log",
        symbol : "log",
        formula : "Math.log10",
        type : "math_function"
    },
    {
        name : "4",
        symbol : 4,
        formula : 4,
        type : "number"
    },
    {
        name : "5",
        symbol : 5,
        formula : 5,
        type : "number"
    },
    {
        name : "6",
        symbol : 6,
        formula : 6,
        type : "number"
    },
    {
        name : "multiplication",
        symbol : "×",
        formula : "*",
        type : "operator"
    },
    {
        name : "e",
        symbol : "e",
        formula : "Math.E",
        type : "number"
    },
    {
        name : "tan",
        symbol : "tan",
        formula : "trigo(Math.tan,",
        type : "trigo_function"
    },
    {
        name : "square-root",
        symbol : "√",
        formula : "Math.sqrt",
        type : "math_function"
    },
    {
        name : "1",
        symbol : 1,
        formula : 1,
        type : "number"
    },
    {
        name : "2",
        symbol : 2,
        formula : 2,
        type : "number"
    },
    {
        name : "3",
        symbol : 3,
        formula : 3,
        type : "number"
    },
    {
        name : "subtraction",
        symbol : "–",
        formula : "-",
        type : "operator"
    },
    {
        name : "ANS",
        symbol : "ANS",
        formula : "ans",
        type : "number"
    },
    {
        name : "exp",
        symbol : "exp",
        formula : "Math.exp",
        type : "math_function"
    },
    {
        name : "power",
        symbol : "x<span>y</span>",
        formula : POWER, // define power function
        type : "math_function"
    },
    {
        name : "0",
        symbol : 0,
        formula : 0,
        type : "number"
    },
    {
        name : "dot",
        symbol : ".",
        formula : ".",
        type : "number"
    },
    {
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    },
    {
        name : "addition",
        symbol : "+",
        formula : "+",
        type : "operator"
    }
];

// Create the calculator buttons
function createCalcButtons() {
    const btns_per_row = 7;
    let added_btns = 0;

    calculator_buttons.forEach( button => {
        // this is to ensure that only 7 buttons are placed on each row
        if (added_btns % btns_per_row === 0) {
            input_element.innerHTML += '<div class="row"></div>';
        }

        // this ensures that the buttons are not placed on the same row each loop
        const row = document.querySelector('.row:last-child');
        row.innerHTML += `<button id="${button.name}">${button.symbol}</button>`;

        added_btns++;
    })
}

createCalcButtons();

// create the rad and deg buttons 
let RADIAN = true;

const rad_btn = document.getElementById("rad");
const deg_btn = document.getElementById("deg");

rad_btn.classList.add('active-state');


// angleToggler function needs to be called when defining the rad and deg buttons in the calculation function.
function angleToggler() {
    rad_btn.classList.toggle("active-state");
    deg_btn.classList.toggle("active-state");
}

// create event listener for the buttons


//create functions for numbers and key

function calculator(button){
    if(button.type=="number"){
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
        
    }else if (button.type =="key"){
        if(button.name =="clear"){
            data.operation =[];
            dta.formula =[];           
            updateOutputResult(0);
            
        }else if (button.name == "delete"){
            data.operation.pop();
            data.formula.pop();
            
        }else if (button.name =="rad"){
            RADIAN = true;
            angleToggler();
        }else if (button.name == "deg"){
            RADIAN=false;
            angleToggler();
        }
    }
}



