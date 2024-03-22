//here i have defined a function called saturday fun and when 
//it is invoked its gonna return a statement with the argument 
//used to invoke the function
function saturdayFun(activity="roller-skate") {
return `This Saturday, I want to ${activity}!`
}
const mondayWork = function(goingTo="go to the office") {
    return `This Monday, I will ${goingTo}.`
}
//here i have defined a parent function WrapAdjective with a child function 
//so if its called wrapAdjective(<text>)= it gives the default string of the child function 
//and if its called wrapAdjective(<text>)(<text>) = it gives a custom string of the child function
const wrapAdjective = function(param1="*"){
    return function(adj="special") {
    return `You are ${param1}${adj}${param1}!` 
    }
}