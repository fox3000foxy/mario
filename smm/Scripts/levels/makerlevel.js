/* FORMAT OF A LEVEL FOR JSON SERIALIZATION:
	{
		height: int,
		width: int,
		data: array[array],
		id: int,
		background: int
	}
*/


function convertlevel()
{
document.write("<br><br>")
var code = jsontable.split("|")[0]
bg = jsontable.split("|")[1]
document.write("<script>jsontable = new Array();jsontable = "+code+"<\/script>")
//document.write("here")
//try{alert(jsontable[1][3])}catch(e){alert(e)}
newtable = new Array()
result = "["
for(i=0;i<jsontable[0].length;i++)
{
				result += "["
				newtable[i] = new Array()
				for (j=0;j<jsontable.length;j++)
				{
								//console.log(i+","+j)
								//alert(jsontable[j][i])
								newtable[i][j] = jsontable[j][i]
				      result += "'"+newtable[i][j]+"',"
				}
				//document.write(newtable)
				result += "],"+unescape("%0D%0A")
}
result+= "],"
}


if (location.href.split("index.html?editor=")[1]=="0")
	{var jsontable = prompt("Code :","")
    convertlevel()
    }
else if (location.href.split("index.html?editor=")[1]=="2")
	{
            var jsontable = document.cookie.split("editorresult=")[1]
    convertlevel()
    }
document.write("<script>var definedLevels = [{data:"+result+"width: undefined,height: undefined,id: 0,background: "+bg+",}];try{for(n=0;n<definedLevels.length;n++){definedLevels[n].height = definedLevels[0].data[0].length + 1;definedLevels[n].width = definedLevels[0].data.length + 1;}}catch(e){alert(e)};//alert(definedLevels)</script>")
