function greeting(name) {
    return "Hello Mr/Mrs., Have a Good Day ! ".concat(name);
}
var username1 = "Atharv";
var username2 = "SomeGirl in the Future";
console.log(greeting(username1));
greeting(greeting(username2));
