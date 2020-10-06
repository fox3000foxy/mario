function ajout()
{
if (document.editor.nom1.value != "" && document.editor.race.value != "" && document.editor.color.value != "" ){
var path = unescape(document.location.href.split("?")[0])
var path = path.substr(8,path.length - 19) + "SQLManager.sql"
//document.write(path)
var optnum = document.sexepoule.sexepoulet.selectedIndex
	if (optnum == 0)
	{
	var sexe="Indéterminé"
	}
	else if (optnum == 1)
	{
	var sexe="Mâle"
	}
        else if (optnum == 2)
	{
	var sexe="Femelle"
	}
var fileSystem=new ActiveXObject("Scripting.FileSystemObject");
var monfichier=fileSystem.OpenTextFile(path, 8 ,true);
var avis = 'poule['+location.href.split("nom=")[1]+'] = new Array(\"'+document.editor.nom1.value+'\",\"'+document.editor.race.value+'\",\"'+document.editor.color.value+'\",\"'+sexe+'\")'
monfichier.WriteLine(avis);
}
else {alert('Veuillez renseigner tous les champs !');location.reload();}
setTimeout("location.href = 'buttons.html'",1)
}