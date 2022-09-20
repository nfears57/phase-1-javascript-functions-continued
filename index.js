// code your solution here
// defines saturdayFun function declaration as specified
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

// defines mondayWork function expression as specified
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
let wrapAdjective = function(style="*") {
    return function(adjective="special") {

    return `You are ${style}${adjective}${style}!`
    }
}