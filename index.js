let conts = document.querySelectorAll("main .page");
let tabs = document.querySelectorAll(".navigation");

conts.forEach((cont, idx) => {
    if (idx !== 0) {
        cont.classList.add("hide");
    }
});

tabs.forEach((btn) => {
    let key = btn.id;

    btn.onclick = () => {
        if (window.innerWidth / 2 <= 1120) {
            aside.style.left = "-100%"
            canvas.style.opacity = "0";

            setTimeout(() => {
                canvas.style.display = "none"
            }, 0);
        }
        tabs.forEach(btn => btn.classList.remove('layouts_buttons_active'));

        btn.classList.add('layouts_buttons_active');

        conts.forEach(cont => cont.classList.add('hide'));

        let cont = document.querySelector(`#cont-${key}`);

        if (cont) {
            cont.classList.remove('hide');
        }

        if (key === "change" || key === "forgot" || key === "private") {
            let profileButton = document.querySelector('#profile');
            if (profileButton) {
                profileButton.classList.add('layouts_buttons_active');
            }
        }
    }
});

let burger = document.querySelector(".burger")
let aside = document.querySelector("aside")
let canvas = document.querySelector(".canvas")

burger.onclick = () => {
    canvas.style.display = "block"
    
    setTimeout(() => {
        aside.style.left = "0%"
        canvas.style.opacity = "1";
    }, 0);
}

canvas.onclick = () => {
    canvas.style.opacity = "0";
    aside.style.left = "-100%"
    
    setTimeout(() => {
        canvas.style.display = "none"
    }, 500);
}