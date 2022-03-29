



// MAIN PAGE ###############################################################
// const mainBlock = document.getElementById("Main_Block");

// function showMainPage()
// {
//     mainBlock.style.visibility = "visible";
// }

// function hideMainPage()
// {
//     mainBlock.style.visibility = "hidden";
// }

// PROJECTS & SKILLS  ######################################################
// const projSkills = document.getElementById("Project_Skills");

// function showProjectSkills()
// {
//     projSkills.style.visibility = "visible";
// }

// function hideProjectSkills()
// {
//     projSkills.style.visibility = "hidden";
// }


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
const openSideBar = document.querySelector("#Open_Sidebar_Button");
openSideBar.addEventListener("click", function(evt) {
    document.getElementById("Sidebar").style.width = "230px";
    evt.preventDefault();
})
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
const closeSideBar = document.querySelector("#Close_Sidebar_Button");
closeSideBar.addEventListener("click", function(evt) {
    document.getElementById("Sidebar").style.width = "0";
    evt.preventDefault();
})

// TYPEWRITER EFFECT #########################################################
let timer = 50;
function iterateLetters(index, nameIntroduction, nameIntroBox) 
{
    
    setTimeout(() => {
        if(nameIntroduction[index] == " ")
            nameIntroBox[0].innerText += "\xa0";
        else
            nameIntroBox[0].innerText += nameIntroduction[index];
        if(index < nameIntroduction.length - 1)
            iterateLetters(index + 1, nameIntroduction, nameIntroBox);

        if(nameIntroduction[index] == '.')
            timer = 300;
        else
            timer = 50;
        }, timer)
    
}

function runTypewriter()
{
    let nameIntroduction = "Hi, I'm Chris." + "\n" + "A Software Developer!";
    const nameIntroBox = document.getElementsByTagName("h1");
    nameIntroBox[0].innerText = "";
    iterateLetters(0, nameIntroduction, nameIntroBox);
}

// ON START ################################################################

console.log(window.location.pathname.split('/').pop());
if(window.location.pathname.split('/').pop() == "Main_Page.html")
{
    runTypewriter();
}


document.getElementsByTagName("button")[0].style.display = "none";
const mediaQuery = '(max-width: 1000px)';
const mediaQueryList = window.matchMedia(mediaQuery);

mediaQueryList.addEventListener('change', event => {
if (event.matches) {
    document.getElementsByTagName("button")[0].style.display = "block";
    document.getElementById("Page_Navigation_Links").style.display = "none";
} else {
    document.getElementsByTagName("button")[0].style.display = "none";
    document.getElementById("Page_Navigation_Links").style.display = "block";
}
})

if(window.innerWidth <= 1000)
{
    document.getElementsByTagName("button")[0].style.display = "block";
    document.getElementById("Page_Navigation_Links").style.display = "none";
}

// if(window.matchMedia)
// x.addEventListener("resize", myFunction(x));

// const navBars = document.getElementsByTagName("button");
// navBars[0].style.display = "none";
// LISTENERS ###############################################################

// const aEvLis = document.getElementById("Nav_Project_Skills");
// aEvLis.addEventListener("click", function(evt) {
//     hideMainPage();
//     showProjectSkills();
//     evt.preventDefault();
// })

// const aEvLis2 = document.getElementById("Nav_About");
// aEvLis2.addEventListener("click", function(evt) {
//     showMainPage();
//     hideProjectSkills();
//     evt.preventDefault();
// })








