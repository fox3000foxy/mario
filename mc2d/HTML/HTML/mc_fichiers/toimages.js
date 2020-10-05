cook = document.cookie
x=cook.split("x=")[1].split(";")[0]
y=cook.split("y=")[1].split(";")[0]


function toimages(id)
{
if (block[id]!=undefined&&id!=-1) return images[id]
//if (block[id]==-1) return images[0]
//else if(x<-2||x>2||y<-2||y>2) return "cache.png"
else return images[0]

}

function tospecialimages(id,texture)
{
 return images[id][texture]
}

