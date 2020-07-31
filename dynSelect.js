Object.defineProperty
(
    HTMLSelectElement.prototype,
    "loadOptions",
    {writable:false,enumerable:false,configurable:false,value:function(url,xhr,slf)
    {
        if((typeof url)!="string"){console.error("expecting text"); return};
        if(url.indexOf("://")<2){console.error("invalid URL"); return};
        slf=this;  xhr=(new XMLHttpRequest());
        slf.innerHTML="<option>Loading...</option>";
        xhr.addEventListener("loadend",function()
        {
            if(this.status!=200){console.error("failed to load: "+this.url); return};
            let htm=this.response; // maybe do some hacking here before inserting
            slf.innerHTML=htm;
        });
    }}
);
