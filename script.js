function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl);
    xmlHttp.send();
    bla=JSON.parse(xmlHttp.responseText);
    return bla;
}
bla=httpGet('http://www.affirmations.dev');
document.getElementById('quoteoftheday').innerHTML=bla.affirmation;
