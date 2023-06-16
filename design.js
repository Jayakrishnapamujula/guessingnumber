let a=Math.floor((Math.random()*100)+1);
let c=1;
console.log(a);
let check_num=document.getElementById("number");
let para_con=document.getElementById("para_id");

function check(){
    if(parseInt(check_num.value)==a)
    { 
        para_con.textContent="Congratulations...! You Guessed in "+c+"  tries";
        para_con.style.color="green";
    }
    else if(parseInt(check_num.value)>a)
    {
        c++;
        para_con.textContent="Please Enter Smaller number!";
        para_con.style.color="yellow";

    }
    else if(parseInt(check_num.value)<a)
    {
        c++;
        para_con.textContent="Please Enter Grater number!";
        para_con.style.color="blue";

    }   
    else if(check_num.value=="")
    {
        alert("Enter a Number");
    }
}
function reset(){
    para_con.textContent="";
    check_num.value="";
}