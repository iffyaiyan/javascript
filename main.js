const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const request = require("request");
const cheerio = require("cheerio");

request(url, cb);
function cb(err, response, html){
    if(err){
        console.log(err);
    }else{
        extractLink(html);
    }
}

function extractLink(html){
    let $ = cheerio.load(html);
    let anchorElem = $("a[href='/series/ipl-2020-21-1210595/match-results']");
    let link = anchorElem.attr("href");
    console.log(link);

    let fullLink = "https://www.espncricinfo.com" + link;
    console.log(fullLink);
    getAllMatchesLink(fullLink);
}

function getAllMatchesLink(url) {
    request(url, function (err, response, html){
        if(err){
            console.log(err);
        }else{
            extracAlltLink(html);
        }
    })
}

function extracAlltLink(html){
    let $ = cheerio.load(html);
    let scorecardElems = $("a[href='/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard']");
    for (let i = 0; i < scorecardElems.length; i++) {
        let link = $(scorecardElems[i]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + link;
        console.log(fullLink);
        // scoreCardObj.ps(fullLink);
        // 
    }
}



