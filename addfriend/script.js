var iset= document.querySelector("h5");
 var btt=document.querySelector("button");
 var flag=0;

 btt.addEventListener("click" , function(){
    if(flag==0)
{
    iset.innerHTML="Friends";
    iset.style.color="Green";
    btt.innerHTML="Remove Friend";
    flag=1;
}
else{
    iset.innerHTML="Stranger";
    iset.style.color="red";
    btt.innerHTML="Add Friend";
    flag=0;
}
 })