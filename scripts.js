var likes = 1;
var count = document.querySelector("#likes");
function like() {
  likes++;
  document.getElementById("likes").innerHTML = likes;
}
function add1(){
    likes++;
    count.innerText = likes + " like(s)";
    console.log(likes);
}