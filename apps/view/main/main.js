var mainClass = /** @class */ (function () {
    function mainClass() {
        // this.iframeData = document.getElementById("iframeView");
        this.btn_home = document.getElementById("btn_home");
        this.btn_youtube = document.getElementById("btn_youtube");
        this.btn_menu = document.getElementById("btn_menu");
        this.obj_views = {
            "active": "home",
            "home": { "create": true, "btn": this.btn_home },
            "youtube": { "create": false, "btn": this.btn_youtube },
            "menu": { "create": false, "btn": this.btn_menu }
        };
        this.btn_home.style.color = "#000000";
        this.obj_menu = [];
    }
    mainClass.prototype.loadView = function (view) {
        var div = document.getElementById("htmlIframe");
        var iframe_go = document.getElementById("iframe_" + view);
        var iframe_active = document.getElementById("iframe_" + this.obj_views.active);
        view != this.obj_views.active ?
            (iframe_active.style.display = "none",
                this.obj_views[this.obj_views.active].btn.style.color = "#ffffff",
                this.obj_views.active = view,
                this.obj_views[view].create ?
                    ""
                    :
                        (this.obj_views[view].create = true,
                            iframe_go.src = "../" + view + "/index.html"),
                iframe_go.style.display = "block",
                this.obj_views[view].btn.style.color = "#000000") : "";
    };
    mainClass.prototype.create_btn_install = function () {
        var button = document.createElement("button");
        var icon = document.createElement("i");
        button.classList.add("w3-button", "w3-display-bottomright", "col-primary");
        button.setAttribute("onclick", "eventInstall()");
        icon.classList.add("fa", "fa-download", "w3-xxlarge");
        icon.setAttribute("aria-hidden", "true");
        button.appendChild(icon);
        document.body.appendChild(button);
    };
    return mainClass;
}());
