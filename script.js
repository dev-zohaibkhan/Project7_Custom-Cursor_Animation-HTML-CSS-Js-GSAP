let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image= document.querySelector("#image")
main.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x:e.x,
        y:e.y,
        duration:0.5,
        ease:"back.out(1.8)"
    })
    
})

image.addEventListener("mouseenter", () => {
    cursor.innerHTML = "View More";
    gsap.to(cursor, {
        scale:2,
        duration:0.5,
        backgroundColor:"#ffffff8a"
    })  
})

image.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale:1,
        duration:0.5,
        backgroundColor:"#fff"
    })  
})