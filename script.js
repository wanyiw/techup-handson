var age = 20
age = 65

var username = "wanyi"
var password = "gotcha"

var isMale = false
var isLoggedIn = false

var blog_posts = ["today is not a god day", "i am blue", "so sad", "want a holiday" ]

console.log(age)
console.log(username);
console.log(password);
console.log(isMale);
console.log(isLoggedIn);
console.log(blog_posts);

if (isMale == false) {console.log ("You are awesome")}

if (isMale == true) {
    console.log("You are terrible")
} else {
    console.log("You are awesome")
}

while (age < 70) {
    console.log("Your age is " + age );
    age = age + 1;
}

function sayhello() {
    alert("Hello everyone");
}
