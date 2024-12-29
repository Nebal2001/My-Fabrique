
    const darkmode = document.getElementById("darkmode")
    const body = document.getElementById("body")
   
   
    darkmode.addEventListener("click", (eo)=>{
body.classList.add("dark")
    });

    const lightmode = document.getElementById("lightmode")
    lightmode.addEventListener("click" ,(eo) =>{
body.classList.remove("dark")
    })

    const incfont = document.getElementById("incfont")
    incfont.addEventListener("click",(eo) =>{
        body.classList.add("font")
    })

    const deffont = document.getElementById("deffont")
    deffont.addEventListener("click",(eo) =>{
        body.classList.remove("font")
    })
