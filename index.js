window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Jeśli urządzenie jest urządzeniem mobilnym, ukryj treść strony i wyświetl komunikat.
        document.body.innerHTML = '<div class="container"><h1>Unsupported Mobile Devices</h1><p>Sorry, this website does not support mobile devices yet</p></div>';
    }
};
function OPW(liczba) {
    if (liczba >= 0) {
        var wysokoscEkranu = window.innerHeight;
        var procentWysokosci = (liczba / 100) * wysokoscEkranu;
        return procentWysokosci;
    }
}
console.log(OPW(50))
gsap.registerPlugin(ScrollTrigger);
gsap.to("#top",{
    scrollTrigger:{
        toggleActions: "restart pause reverse pause",
        scrub:true,
        trigger:"#top",
        start: "top -" + OPW(40) + "px",
        end: "top -" + OPW(70) + "px",
    },
    y:"-10vh",
    duration: 5,
    ease: "linear"
})
gsap.to("#decor-container",{
    scrollTrigger:{
        toggleActions: "restart pause reverse pause",
        scrub:true,
        trigger:"#top",
        start: "top -" + OPW(10) + "px",
        end: "top -" + OPW(50) + "px",
    },
    y:"-30vh",
    duration: 10,
    ease: "linear"
})
gsap.to("#buttons",{
    scrollTrigger:{
        toggleActions: "restart pause reverse pause",
        scrub:true,
        trigger:"#top",
        start: "top -" + OPW(10) + "px",
        end: "top -" + OPW(50) + "px",

    },
    x:"25vw",
    duration: 10,
    ease: "power1.inOut"
})
gsap.to("#txt1",{
    scrollTrigger:{
        toggleActions: "restart pause reverse pause",
        scrub:true,
        trigger:"#top",
        start: "top -" + OPW(10) + "px",
        end: "top -" + OPW(50) + "px",

    },
    x:"-25vw",
    duration: 5,
    ease: "power1.inOut"
})
gsap.to("#rwai",{
    scrollTrigger:{
        toggleActions: "restart pause reverse pause",
        scrub:true,
        trigger:"#top",
        start: "top -" + OPW(30) + "px",
        end: "top -" + OPW(62) + "px",
    },
    x:"23vw",
    duration: 10,
    ease: "linear"
})
gsap.to("#lwai",{
    scrollTrigger:{
        toggleActions: "restart pause reverse pause",
        scrub:true,
        trigger:"#top",
        start: "top -" + OPW(30) + "vh",
        end: "top -" + OPW(62) + "vh",
    },
    x:"-20vw",
    duration: 10,
    ease: "linear"
})
ScrollTrigger.create({
    trigger: "#img1",
    start:"top top",
    end:"+="+ OPW(55) + "vh",
    pin: true,
    pinSpacing: false
})

