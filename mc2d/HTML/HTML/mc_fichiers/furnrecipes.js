function furnace(c1,cf)
{
    //c4 -> cf
    c2_1 = document.cookie.split("invcraft1=")[1].split(";")[0]
     if(c2_1==c1&&document.cookie.split("comb=")[1].split(";")[0]!="-1")
    {
        document.cookie= "res="+cf
        document.cookie= "qttres="+qttf
        startcheck=0
    }
}

function veriffurnace()
{
startcheck=1
recipes()
if(startcheck==1) document.cookie= "invcraft10=-1" 
}

setInterval("veriffurnace()",500)
