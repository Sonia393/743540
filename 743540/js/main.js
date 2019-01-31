// Your code here!
how to put this code into a function called myfunction
function myfunction() {
    var date = new Date();
    document.body.innerHTML = "<h1>the date is" + (date.getMonth() + 1) + "/" + date.getFullYear() + "/" + date.getDate() + "</h1>"
}