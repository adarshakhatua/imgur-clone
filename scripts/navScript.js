var data = [
    {
        img: "../files/1.jpg",
        title: "Digital Art",
        count: "49,696",
        color:"#055773",
        
    },
    {
        img: "../files/2.jpg",
        title: "Pride",
        count: "1,729",
        color:"#7D84F8",
    },
    {
        img: "../files/3.jpg",
        title: "Funny",
        count: "2,702,804",
        color:"#854C9D",
    },
    {
        img: "../files/4.jpg",
        title: "Science And Tech",
        count: "45,295",
        color:"#C14252",
    },
    {
        img: "../files/5.jpg",
        title: "Otters",
        count: "540",
        color:"#3D96B2",
    },
    {
        img: "../files/6.jpg",
        title: "Aww",
        count: "766,237",
        color:"#87C9D5",
    },
    {
        img: "../files/7.jpg",
        title: "Staff Picks",
        count: "6,590",
        color:"#2B8B9B",
    },
    {
        img: "../files/8.jpg",
        title: "Dog",
        count: "213,830",
        color:"#AFCDE7",
    },
    {
        img: "../files/9.jpg",
        title: "Unmuted",
        count: "14,774",
        color:"#22184F",
    },
    {
        img: "../files/10.jpg",
        title: "Awesome",
        count: "755,074",
        color:"#F49193",
    },
    {
        img: "../files/11.jpg",
        title: "Oc",
        count: "41,094",
        color:"#C6A886",
    },
    {
        img: "../files/12.jpg",
        title: "Gaming",
        count: "299,499",
        color:"#5C27AA",
    },
    {
        img: "../files/13.jpg",
        title: "Movies And Tv",
        count: "63,271",
        color:"#014568",
    },
    {
        img: "../files/14.jpg",
        title: "Current Events",
        count: "380,922",
        color:"#004769",
    },
    {
        img: "../files/15.jpg",
        title: "Crab",
        count: "2,033",
        color:"#2F3981",
    },
    {
        img: "../files/16.jpg",
        title: "Uplifting",
        count: "15,401",
        color:"#1A0058",
    },
    {
        img: "../files/17.jpg",
        title: "Wholesome",
        count: "26, 131",
        color:"#63A2FF",
    },
    {
        img: "../files/18.jpg",
        title: "Sci Fi",
        count: "6,035",
        color:"#8CD4DA",
    },
    {
        img: "../files/19.jpg",
        title: "Dungeons And Dragons",
        count: "20,731",
        color:"#5C7DB2",
    },
    {
        img: "../files/20.jpg",
        title: "Ocean",
        count: "5,845",
        color:"#10A99F",
    },
    {
        img: "../files/21.jpg",
        title: "Imgurian Cookbook",
        count: "428",
        color:"#06656E",
    },
    {
        img: "../files/22.jpg",
        title: "Homemade",
        count: "6,418",
        color:"#34629E",
    },
    {
        img: "../files/23.jpg",
        title: "Eat What You Want",
        count: "68,567",
        color:"#6F4D70",
    },
    {
        img: "../files/24.jpg",
        title: "Crafts",
        count: "8,865",
        color:"#C6A87A",
    },
    {
        img: "../files/25.jpg",
        title: "Work Stories",
        count: "2,633",
        color:"#FFD68A",
    },
    {
        img: "../files/26.jpg",
        title: "Work From Home",
        count: "8,227",
        color:"#455569",
    },
    {
        img: "../files/27.jpg",
        title: "Creativity",
        count: "478,690",
        color:"#26D5DF",
    },
    {
        img: "../files/28.jpg",
        title: "Random",
        count: "14,910",
        color:"#2E3880",
    },
    {
        img: "../files/29.jpg",
        title: "Wow",
        count: "17,020",
        color:"#26AB6A",
    },
    {
        img: "../files/30.png",
        title: "Inspiring",
        count: "84,511",
        color:"#AEC0CC",
    },
    {
        img: "../files/31.png",
        title: "Cosplay",
        count: "40,379",
        color:"#A53939",
    },
    {
        img: "../files/32.jpg",
        title: "Wallpaper",
        count: "32,223",
        color:"#2B1D2C",
    },
]
function populateTagCard(start,length,comp) {

    document.getElementById(comp).innerHTML = null;
    for (let i = start; i < length; i++){
        let item = data[i];
        let card = document.createElement("div");
        card.className = "tag_card_item";
        card.style.backgroundImage = `url(${item.img})`;
        let content = document.createElement('div');
        content.style.backgroundColor = item.color;
        content.className = "tag_card_content_div";
        let title = document.createElement("p");
        title.className = "title";
        title.innerText = item.title
        let count = document.createElement("p");
        count.className = "count";
        count.innerText = item.count;

        card.append(content);
        content.append(title, count);
        document.getElementById(comp).append(card);
        console.log(item.img)
    }
    
}
export default populateTagCard;