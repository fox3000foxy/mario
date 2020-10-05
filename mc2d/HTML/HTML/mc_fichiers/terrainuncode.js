//setTimeout("phase0()",50)

function phase0()
{
ligne = new Array()
for (l=0;l<terrain.length;l++)
{
 for(p=0;p<1;p++)
 {
    le = terrain[l].length
    //alert(le)
    //terrainle = toblock(terrain[l][p])
    terrainle = "<img src='mc_img\/"+toimages(terrain[l][p])+"'>")
    for(i=1;i<le;i++){
    //alert(i)
    //terrainle += "<img src='mc_img\/rock.png'>")
   terrainle += toblock(terrain[l][p+i])
 }
    ligne[l] = terrainle
// document.write('<img style="position:absolute;top:'+(l+1)*80+'px">')    
 }
}
phase1()
}

function phase1()
{
t = ""
for(i=0;i<ligne.length;i++) {
t += ligne[i]+"<br>"
}
document.write(t)
}
