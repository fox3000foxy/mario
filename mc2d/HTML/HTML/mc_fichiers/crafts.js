function craft(c1,c2,c3,c4,c5,c6,c7,c8,c9,cf,qttf)
{
    //c1|c2|c3
    //--|--|--
    //c4|c5|c6 -> cf
    //--|--|--
    //c7|c8|c9
    c2_1 = document.cookie.split("invcraft1=")[1].split(";")[0]
    c2_2 = document.cookie.split("invcraft2=")[1].split(";")[0]
    c2_3 = document.cookie.split("invcraft3=")[1].split(";")[0]
    c2_4 = document.cookie.split("invcraft4=")[1].split(";")[0]
    c2_5 = document.cookie.split("invcraft5=")[1].split(";")[0]
    c2_6 = document.cookie.split("invcraft6=")[1].split(";")[0]
    c2_7 = document.cookie.split("invcraft7=")[1].split(";")[0]
    c2_8 = document.cookie.split("invcraft8=")[1].split(";")[0]
    c2_9 = document.cookie.split("invcraft9=")[1].split(";")[0]
    if(c2_1==c1&&c2_2==c2&&c2_3==c3&&c2_4==c4&&c2_5==c5&&c2_6==c6&&c2_7==c7&&c2_8==c8&&c2_9==c9)
    {
        document.cookie= "invcraft10="+cf
        document.cookie= "qttc10="+qttf
        startcheck=0
    }
}

function verifcraft()
{
startcheck=1
crafts()
if(startcheck==1) document.cookie= "invcraft10=-1" 
}

setInterval("verifcraft()",500)
