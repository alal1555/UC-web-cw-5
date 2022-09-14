//part 1:
alert('welcome to my website, my name is Aly, I will calculte your grade');
let grade = prompt('Enter your grade');
console.log("%c"+grade, "color: blue");

//part 2:
if(grade>89 && grade<=100){
    console.log('🥳 لقد حصلت على امتياز ');
}
else if(grade>79 && grade<=89){
    console.log('🤩 لقد حصلت على جيد جداً ');
}
else if(grade>69 && grade<=79){
    console.log('🙂 لقد حصلت على جيد');
}
else if(grade>59 && grade<=69){
    console.log('😕 لقد حصلت على مقبول ');
}
else if(grade>49 && grade<=59){
    console.log('☹️ لقد حصلت على ضعيف ');
}
else if(grade<50){
    console.log('💔 راسب ');
}

//javascript is not java.