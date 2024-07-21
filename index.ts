import inquirer from "inquirer"

let todos=[];
let i=true;
while(i){
let ask=await inquirer.prompt([
    {
 message:"What would you like to add in your todos?",
 type:"input",
 name:"question_1",
    },
    {
        message:"Would you like to add more in your todos?",
        type:"confirm",
        name:"question_2",
        default:true,
    },
]);
todos.push(ask.question_1);
console.log(todos);
i=ask.question_2;
}
console.log();
let op=await inquirer.prompt([
    {
        message:"Select to perform various operations on your todos ",
        type:"list",
        name:"select",
        choices:["Delete item","Replace item","None"],
    },
]);
if(op.select=="Delete item"){
    let c=true;
    while(c){
    let index=await inquirer.prompt([
        {
            message:"Enter item location which you want to delete in your todos(location start with 0)",
            type:"number",
            name:"input",
        },
         {
        message:"Would you like to delete items more in your todos?",
        type:"confirm",
        name:"input1",
        default:true,
    },
    ]);
 let a=todos.splice(index.input,1);
console.log(todos);
c=index.input1;
}
}
else if(op.select=="Replace item"){
    let r=true;
    while(r){
    let value=await inquirer.prompt([
        {
            message:"Enter the item which you want to replace in your todos",
            type:"input",
            name:"input",
        },
        {
            message:"Enter the item location where you want to replace it in your todos(location start with 0)",
            type:"number",
            name:"input1",
        },
        {
        message:"Would you like to replace more items more in your todos?",
        type:"confirm",
        name:"input2",
        default:true,
        },
    ]);
    let b=todos.splice(value.input1,1,value.input);
    r=value.input2;
    console.log(todos);
    }
}else{
    console.log();
}