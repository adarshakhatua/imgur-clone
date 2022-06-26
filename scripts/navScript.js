var data = [
    {
        img: "https://i.imgur.com/5uFU9FR_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Digital Art",
        count:"49,696"
    },
    {
        img: "https://i.imgur.com/gRjzHOW_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Pride",
        count: "1,729"
    },
    {
        img: "https://i.imgur.com/9r1qCDq_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Funny",
        count: "2,702,804"
    },
    {
        img: "https://i.imgur.com/bdRjrrI_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Science And Tech",
        count: "45,295"
    },
    {
        img: "https://i.imgur.com/AqOtMAc_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Otters",
        count: "540"
    },
    {
        img: "https://i.imgur.com/avRBRpN_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Aww",
        count: "766,237"
    },
    {
        img: "https://i.imgur.com/DbQMO3A_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Staff Picks",
        count: "6,590"
    },
    {
        img: "https://i.imgur.com/59NSmVP_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Dog",
        count: "213,830"
    },
    {
        img: "https://i.imgur.com/tUX1dpv_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Unmuted",
        count: "14,774"
    },
    {
        img: "https://i.imgur.com/4kmYoey_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Awesome",
        count: "755,074"
    },
    {
        img: "https://i.imgur.com/4LBx79U_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Oc",
        count: "41,094"
    },
    {
        img: "https://i.imgur.com/nrFCOUB_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Gaming",
        count: "299,499"
    },
    {
        img: "https://i.imgur.com/JdeWoaA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Movies And Tv",
        count: "63,271"
    },
    {
        img: "https://i.imgur.com/kQFyoG7_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Current Events",
        count: "380,922"
    },
    {
        img: "https://i.imgur.com/4bOlFT2_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Crab",
        count: "2,033"
    },
    {
        img: "https://i.imgur.com/htHbdhi_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Uplifting",
        count: "15,401"
    },
    {
        img: "https://i.imgur.com/W5yeBvr_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Wholesome",
        count: "26, 131"
    },
    {
        img: "https://i.imgur.com/oB1KOoT_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Sci Fi",
        count: "6,035"
    },
    {
        img: "https://i.imgur.com/1RFUuDD_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Dungeons And Dragons",
        count: "20,731"
    },
    {
        img: "https://i.imgur.com/LjiOCqJ_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Ocean",
        count: "5,845"
    },
    {
        img: "https://i.imgur.com/8lR9R5v_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Imgurian Cookbook",
        count: "428"
    },
    {
        img: "https://i.imgur.com/IkZeAAy_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Homemade",
        count: "6,418"
    },
    {
        img: "https://i.imgur.com/I4fcJtP_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Eat What You Want",
        count: "68,567"
    },
    {
        img: "https://i.imgur.com/4LBx79U_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Crafts",
        count: "8,865"
    },
    {
        img: "https://i.imgur.com/Z7yF4MQ_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Work Stories",
        count: "2,633"
    },
    {
        img: "https://i.imgur.com/1rBdkSH_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Work From Home",
        count: "8,227"
    },
    {
        img: "https://i.imgur.com/BFfAJEN_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Creativity",
        count: "478,690"
    },
    {
        img: "https://i.imgur.com/gbuk2AN_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Random",
        count: "14,910"
    },
    {
        img: "https://i.imgur.com/QL9pTeJ_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Wow",
        count: "17,020"
    },
    {
        img: "https://i.imgur.com/aJKwi96_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Inspiring",
        count: "84,511"
    },
    {
        img: "https://i.imgur.com/E1CMJey_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Cosplay",
        count: "40,379"
    },
    {
        img: "https://i.imgur.com/m0iKfvv_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        title: "Wallpaper",
        count: "32,223"
    },
]
function populateTagCard() {

    document.getElementById("tag_card").innerHTML = null;
    data.map((item) => {

        let card = document.createElement("div");
        card.className = "tag_card_item";
        card.style.backgroundImage = 'images/' +item.img + '.jpg';;
        let content = document.createElement('div');
        content.className = "tag_card_content_div";
        let title = document.createElement("p");
        title.className = "title";
        let count = document.createElement("p");
        count.className = "count";

        card.append(content);
        content.append(title, count);
        document.getElementById("tag_card").append(card);
    })
}
export default populateTagCard;