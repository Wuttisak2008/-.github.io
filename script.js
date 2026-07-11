// ============================
// เอฟเฟกต์โหลดหน้า
// ============================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// ============================
// Scroll Animation
// ============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section,.card").forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});

// ============================
// ปุ่ม Back To Top
// ============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ============================
// Lightbox Gallery
// ============================

const images=document.querySelectorAll(".gallery-grid img");

const lightbox=document.createElement("div");

lightbox.className="lightbox";

document.body.appendChild(lightbox);

images.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("active");

        const image=document.createElement("img");

        image.src=img.src;

        while(lightbox.firstChild){

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(image);

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

// ============================
// Cursor Glow
// ============================

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.pageX+"px";

    glow.style.top=e.pageY+"px";

});
