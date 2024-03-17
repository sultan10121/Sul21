document.getElementById("btn1").onclick=function()
{
    alert("Sultan is Here")
    let statement="  alert('Sultan is Here')";
    document.getElementById("os").innerHTML=statement;
    document.getElementById("rs").innerHTML="Sultan is Here";
}
document.getElementById("btn2").onclick=function()
{
    alert("3643737")
    let statement="  alert('3643737')";
    document.getElementById("os").innerHTML=statement;
    document.getElementById("rs").innerHTML="3643737";
}
document.getElementById("btn3").onclick=function()
{
    
    let statement="<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, <code>userAlert</code> and <code> myVar </code> are legal. </li></ul>";
    document.getElementById("os").innerHTML="";
    document.getElementById("rs").innerHTML=statement;
}

document.getElementById("btn4").onclick=function()
{
    
    let statement="<h3>Examples of camelCase</h3><ul><code><li>user</li><li>userResponse</li><li>userResponseTime</li><li>userResponseTimeLimit</li></code></ul>";
    document.getElementById("os").innerHTML="";
    document.getElementById("rs").innerHTML=statement;
}
document.getElementById("btn5").onclick=function()
{
    
    let num1=3
    let num2=7
    let statement="Let num1="+num1+"<br> Let num2= "+num2+"";
    let sum=num1 + num2
    document.getElementById("os").innerHTML=statement;
    document.getElementById("rs").innerHTML=sum;
}
document.getElementById("btn6").onclick=function()
{
    
    let num1=7
    let num2=3
    let statement="Let num1="+num1+"<br> Let num2= "+num2+"";
    let sub=num1 - num2
    document.getElementById("os").innerHTML=statement;
    document.getElementById("rs").innerHTML=sub;
}
document.getElementById("btn7").onclick=function()
{
    
    let num1=7
    let num2=3
    let statement="Let num1="+num1+"<br> Let num2= "+num2+"";
    let mul=num1 * num2
    document.getElementById("os").innerHTML=statement;
    document.getElementById("rs").innerHTML=mul;
}
document.getElementById("btn8").onclick=function()
{
    
    let num1=9
    let num2=3
    let statement="Let num1="+num1+"<br> Let num2= "+num2+"";
    let div=num1 / num2
    document.getElementById("os").innerHTML=statement;
    document.getElementById("rs").innerHTML=div;
}

document.getElementById("btn9").onclick=function()
{
    
    
    let statement="64/4*3+2**4+(5+9)";
    let sub=64/4*3+2**4+(5+9)
    document.getElementById("os").innerHTML=statement;
    document.getElementById("rs").innerHTML=sub;
}
document.getElementById("cs").onclick=function()
{
    document.getElementById("os").innerHTML="";
}
document.getElementById("co").onclick=function()
{
    document.getElementById("rs").innerHTML="";
}
