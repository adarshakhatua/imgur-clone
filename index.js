import populateTagCard from "./scripts/navScript.js";

populateTagCard(0, 10, "tag_card1");

let call = false;
document.getElementById("moreTags").addEventListener("click", () => {
    if (!call)
    { populateTagCard(11, 32, "tag_card2"); call = true; document.getElementById("moreTags").innerText ="LESS TAGS -" }
    else { document.getElementById("tag_card2").innerHTML = null; call = false; document.getElementById("moreTags").innerText ="MORE TAGS +" }
})

fetch('https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=true&album_previews=true', {
    method: "GET",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer f0933ebd62fb8dbc3a54ee060e9e5f303825046d'
    },
}).then((res) => res.json()).then((res) => { appendData(res.data);  /*console.log(res.data)*/ });

const appendData = (data) => {
    document.getElementById("main_content").innerHTML = null;
    data.map((item) => {
        const card = document.createElement("div");
        card.className = "main_card";
        const img = document.createElement("img");
        img.className = "img";
        if (item.images) { if (item.images[0].type.split("/")[0] === "image") { img.src =item.images[0].link} };
        // img.src = item.images ? item.images[0].link : "";
        //console.log(item.images && item.images[0].type);
        const bottom_content = document.createElement("div");
        bottom_content.className = "bottom_content";
        const bottom_content_title = document.createElement("div");
        bottom_content_title.className = "bottom_content_title";
        bottom_content_title.innerText = item.title;
        const bottom_content_stat = document.createElement("div");
        bottom_content_stat.className = "bottom_content_stat";
        const bottom_content_stat_upvote = document.createElement("div");
        bottom_content_stat_upvote.className = "bottom_content_stat_upvote";
        const bottom_content_stat_comment = document.createElement("div");
        bottom_content_stat_comment.className = "bottom_content_stat_comment";
        const bottom_content_stat_views = document.createElement("div");
        bottom_content_stat_views.className = "bottom_content_stat_views";
        const commentIcon = document.createElement("span");
        commentIcon.className = "material-symbols-outlined";
        commentIcon.innerText = "chat_bubble";
        const upVoteIcon = document.createElement("span");
        upVoteIcon.className = "material-symbols-outlined";
        upVoteIcon.innerText = "arrow_upward";
        const viewsIcon = document.createElement("span");
        viewsIcon.className = "material-symbols-outlined";
        viewsIcon.innerText = "visibility";
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        p1.className = "p1";
        p2.className = "p2";
        p3.className = "p3";
        p1.innerText = item.ups;
        p2.innerText = item.comment_count;
        p3.innerText = item.views;



        card.append(bottom_content);
        bottom_content.append(bottom_content_title, bottom_content_stat);
        bottom_content_stat.append(bottom_content_stat_upvote, bottom_content_stat_comment, bottom_content_stat_views);
        bottom_content_stat_upvote.append(upVoteIcon,p1);
        bottom_content_stat_comment.append(commentIcon,p2);
        bottom_content_stat_views.append(viewsIcon,p3);
        document.getElementById("main_content").append(card);
    })
}
