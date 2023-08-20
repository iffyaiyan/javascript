const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

const request = require("request");
const cheerio = require("cheerio");

request(url, cb);
function cb(err, response, html){
    if(err){
        console.log(err);
    }else{
        extractMatchDetails(html);
    }
}

function extractMatchDetails(html){
    let $ = cheerio.load(html);
    let descElem = $(".ds-grow .ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid");
    let result = $(".ds-flex .ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title");
    let stringArr = descElem.text().split(",");
    let venue = stringArr[1].trim();
    let date = stringArr[2].trim();
    result = result.text();
    // console.log(venue);
    // console.log(date);
    // console.log(result);

    let innings = $(".ReactCollapse--collapse .ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table");
    let htmlString = "";
    for(let i=0; i<innings.length; i++){
        htmlString += $(innings[i]).html();
    }
    console.log(htmlString);
}