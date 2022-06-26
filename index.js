import populateTagCard from "./scripts/navScript.js";
populateTagCard(0, 10,"tag_card1");
let call = false;
document.getElementById("moreTags").addEventListener("click", () => {
    if (!call)
    { populateTagCard(11, 32, "tag_card2"); call = true; document.getElementById("moreTags").innerText ="LESS TAGS -" }
    else { document.getElementById("tag_card2").innerHTML = null; call = false; document.getElementById("moreTags").innerText ="MORE TAGS +" }
})