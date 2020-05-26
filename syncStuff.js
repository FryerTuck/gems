
function getSync(url)
{
    return (new Promise(function (resolve, reject) 
    {
        var xhr=(new XMLHttpRequest()); xhr.open(`get`,url,true);
        xhr.responseType=`text`; xhr.onload=function()
        {if(xhr.status == 200){resolve(xhr.response)}else{reject(status)}};
        xhr.send();
    }));
};


async function isip(num, url,key)
{
    let jsn = (await getSync(url||`http://ip.jsontest.com/`));
    let ipa = JSON.parse(jsn)[(key||`ip`)];
    let sub = ipa.split(`.`).shift();
    return ((num+"") == sub);
};

