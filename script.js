function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false);
    xmlHttp.send(null);
    bla=JSON.parse(xmlHttp.responseText);
    return bla;
}
bla=httpGet('https://cors-anywhere.herokuapp.com/http://www.affirmations.dev');
document.getElementById('quoteoftheday').innerHTML=bla.affirmation;
