class youtubeClass
{
    iframe:HTMLIFrameElement;
    input_url:HTMLInputElement;
    constructor()
    {
        this.iframe = document.getElementById("iframeYoutube") as HTMLIFrameElement;
        this.input_url = document.getElementById("input_url") as HTMLInputElement;
        this.iframe.src = "https://www.youtube.com/embed/bwtTZVUmV94";
        
        this.input_url.addEventListener("change",(e)=>
        {
            this.changeUrl(this.input_url);
        });
    }

    changeUrl(input:HTMLInputElement)
    {
        let urlTemp:string[];
        let urlF:string = "";
        let url:string = input.value;

        url.search("list=")!=-1?
            urlTemp = url.split("list=")
        :
        (
            url.search("=")!=-1?
                urlTemp = url.split("="):
                urlTemp = url.split("/")
        )

        urlTemp.forEach( value =>
        {
            urlF = value;    
        });

        url.search("list=")!=-1?
            this.iframe.src = "https://www.youtube.com/embed/videoseries?list=" + urlF
        :
            this.iframe.src = "https://www.youtube.com/embed/" + urlF
    }
}
