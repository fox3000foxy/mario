function supp()
{
var path = unescape(document.location.href.split("?")[0])
var path = path.split('file:///')[1].split('buttons.html')[0] + "SQLManager.sql"
var fileSystem=new ActiveXObject("Scripting.FileSystemObject");
var monfichier=fileSystem.OpenTextFile(path, 8 ,true);
var avis = 'poule['+document.editor.nom.value+'] = new Array(\"\",\"\",\"\",\"\")'
monfichier.WriteLine(avis);
window.location.reload()
}