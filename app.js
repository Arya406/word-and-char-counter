let area = document.getElementById('text');


function fun(){
    let s ="";
    s+=area.value;
    console.log(s);
    console.log(s.length);
    ans(s);
}
function ans(s){
    let charCount = s.length;
    let words = s.trim().split(/\s+/);
    let wordCount = words.length;

    document.querySelector(".three").innerHTML =` ${wordCount} words and ${charCount} characters`;
}