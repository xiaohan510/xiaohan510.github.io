Bmob.initialize("bb68d9125daecf217b3f2ac83f614052", "2e62d8082259b4b90276b053edf4571b");

function save() {
    const query = Bmob.Query("data");
    query.set("content", "test");
    query.set("picture", "test");
    query.set("title","test");
    query.set("link","test");
    query.save();
}

function get() {

    const query = Bmob.Query("data");
    query.find().then(res => {
        for (let i = 0; i < res.length; i++) {
            const obj = eval(res[i]);
            const main_div = document.getElementById("main_grid");
            const div1 = document.createElement("div");
            div1.className = "demo-card-square mdl-card mdl-shadow--2dp";
            div1.style.margin = "16px";
            const div2 = document.createElement("div");
            div2.className = " mdl-card__title mdl-card--expand";
            div2.style.backgroundImage ="url("+obj.picture+")";
            const h1 = document.createElement("h2");
            h1.className = "mdl-card__title-text";
            h1.innerHTML = obj.title;
            div2.appendChild(h1);
            const div3 = document.createElement("div");
            div3.className = "mdl-card__supporting-text";
            div3.innerHTML = obj.content;
            const div4 = document.createElement("div");
            div4.className = "mdl-card__actions mdl-card--border";
            const a = document.createElement("a");
            a.className = "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect";
            a.href = obj.link;
            a.innerHTML = "DOWNLOAD";
            div4.appendChild(a);
            div1.appendChild(div2);
            div1.appendChild(div3);
            div1.appendChild(div4);
            main_div.appendChild(div1);
        }

    })

}
