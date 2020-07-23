interface views
{
    "active":"home"|"youtube"|"menu",
    "home":{"create":boolean,"btn":HTMLElement},
    "youtube":{"create":boolean,"btn":HTMLElement},
    "menu":{"create":boolean,"btn":HTMLElement}
}

class mainClass
{
    obj_views:views;
    obj_menu:string[];
    btn_home:HTMLElement;
    btn_youtube:HTMLElement;
    btn_menu:HTMLElement;

    constructor()
    {
        // this.iframeData = document.getElementById("iframeView");
        this.btn_home = document.getElementById("btn_home") as HTMLElement;
        this.btn_youtube = document.getElementById("btn_youtube") as HTMLElement;
        this.btn_menu = document.getElementById("btn_menu") as HTMLElement;

        this.obj_views = {
            "active":"home",
            "home":{"create":true,"btn":this.btn_home},
            "youtube":{"create":false,"btn":this.btn_youtube},
            "menu":{"create":false,"btn":this.btn_menu}
        };
        this.btn_home.style.color = "#000000"
        this.obj_menu = [];
    }

    loadView(view:"home"|"youtube"|"menu")
    {
        let div:HTMLElement = document.getElementById("htmlIframe") as HTMLElement;
        let iframe_go:HTMLIFrameElement = document.getElementById("iframe_"+view) as HTMLIFrameElement;
        let iframe_active:HTMLIFrameElement = document.getElementById("iframe_"+this.obj_views.active) as HTMLIFrameElement;
        
        view!=this.obj_views.active?
        (
            iframe_active.style.display = "none",
            this.obj_views[this.obj_views.active].btn.style.color = "#ffffff",
            this.obj_views.active = view,
            this.obj_views[view].create?
                ""
            :
            (
                this.obj_views[view].create = true,
                iframe_go.src = "../"+view+"/index.html"
            ),
            iframe_go.style.display = "block",
            this.obj_views[view].btn.style.color = "#000000"
        ):"";
    }

    create_btn_install()
    {
        let button = document.createElement("button");
        let icon = document.createElement("i");
        button.classList.add("w3-button","w3-display-bottomright","col-primary");
        button.setAttribute("onclick","eventInstall()");

        icon.classList.add("fa","fa-download","w3-xxlarge");
        icon.setAttribute("aria-hidden","true");

        button.appendChild(icon);
        document.body.appendChild(button);
    }
}