var youtubeClass = /** @class */ (function () {
    function youtubeClass() {
        var _this = this;
        this.iframe = document.getElementById("iframeYoutube");
        this.input_url = document.getElementById("input_url");
        this.iframe.src = "https://www.youtube.com/embed/bwtTZVUmV94";
        this.input_url.addEventListener("change", function (e) {
            _this.changeUrl(_this.input_url);
        });
    }
    youtubeClass.prototype.changeUrl = function (input) {
        var urlTemp;
        var urlF = "";
        var url = input.value;
        url.search("list=") != -1 ?
            urlTemp = url.split("list=")
            :
                (url.search("=") != -1 ?
                    urlTemp = url.split("=") :
                    urlTemp = url.split("/"));
        urlTemp.forEach(function (value) {
            urlF = value;
        });
        url.search("list=") != -1 ?
            this.iframe.src = "https://www.youtube.com/embed/videoseries?list=" + urlF
            :
                this.iframe.src = "https://www.youtube.com/embed/" + urlF;
    };
    return youtubeClass;
}());
