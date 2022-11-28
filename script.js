const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear)
yearEl.textContent = currentYear;
/////////////////////
//mobile navigation//
/////////////////////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});
/////////////////////
//smooth scrolling//
/////////////////////
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        console.log(href);

        //scroll back to top
        if (href === "#")
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        
    if(href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile navigation
    if(link.classList.contains("main-nav-link"))
    headerEl.classList.toggle("nav-open");
    });
});
/////////////////////
//Sticky navigation//
/////////////////////


const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    console.log(ent);

    if(ent.isIntersecting === false) {
        document.body.classList.add("sticky");
        // document.querySelector(".header").classList.add("sticky");
    } 
    if(ent.isIntersecting === true) {
        document.body.classList.remove("sticky");
        // document.querySelector(".header").classList.remove("sticky");
    }  
},  {
        root:null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHeroEl);
/////////////////////
////FlexGap/////////
/////////////////////
function checkFlexGap() {
    var flex = document.createElement("div");
flex.style.display = "flex";
flex.style.flexDirection = "column";
flex.style.rowgap = "1px";

flex.appendChild(document.createElement("div"));
flex.appendChild(document.createElement("div"));

document.body.appendChild(flex);
var isSupported = flex.scrollHeight === 1;
flex.parentNode.removeChild(flex);
console.log(isSupported);
if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
///////////////////
//dark mode////////
//////////////////
document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});
