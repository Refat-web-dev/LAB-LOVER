let conts = document.querySelectorAll("main .page");
let tabs = document.querySelectorAll(".navigation");
let title = document.querySelector("title")
let zIndexCont = document.querySelector('.z-index')
let zindexBtn = document.querySelector('#review')

conts.forEach((cont, idx) => {
    if (idx !== 0) {
        cont.classList.add("hide");
    }
});

tabs.forEach((btn) => {
    let key = btn.id;

    btn.onclick = () => {
        title.innerHTML = `${key}`

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
        zIndexCont.style.display = "none"
        let cont = document.querySelector(`#cont-${key}`);

        if (cont) {
            cont.classList.remove('hide');
        }

        if (key === "change" || key === "forgot" || key === "private") {
            let profileButton = document.querySelector('#profile');
            title.innerHTML = `profile`

            if (profileButton) {
                profileButton.classList.add('layouts_buttons_active');
            }
        }
        if (key === "upload" || key === "review" || key === "loading") {
            let profileButton = document.querySelector('#analyze');
            title.innerHTML = `analyze`

            zIndexCont.style.display = "block"

            if (profileButton) {
                profileButton.classList.add('layouts_buttons_active');
            }
        }
    }
});


const dataSets = [
    [0, 4, 0, 8, 1, 2, 8], // Лейкоцит1
    [2, 5, 3, 6, 4, 7, 9], // Лейкоцит2
    [1, 3, 2, 5, 3, 6, 7], // Лейкоцит3
    [3, 6, 2, 4, 5, 8, 10] // Лейкоцит4
];

// Initial chart setup
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: dataSets[0], // Initial data for Лейкоцит1
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Event listener for select dropdown change
document.getElementById('chartSelect').addEventListener('change', function (event) {
    const selectedIndex = event.target.value;
    myChart.data.datasets[0].data = dataSets[selectedIndex]; // Update chart data
    myChart.update(); // Re-render the chart
});

// burger 

let burger = document.querySelector(".burger_btn")
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

let labels = document.querySelectorAll(".change_pass_form label, .private_cabinet .password_recovery");

labels.forEach(label => {
    const viewIcon = label.querySelector(".view_pass");
    const passwordInput = label.querySelector("input");

    let closed = true;

    viewIcon.onclick = () => {

        if (closed) {
            closed = false;
            passwordInput.type = "text";
            // viewIcon.style.backgroundImage = 'url("./img/view.png")';
            viewIcon.classList.add("show_pass")
        } else {
            closed = true;
            passwordInput.type = "password";
            // viewIcon.style.backgroundImage = 'url("./img/hide.png")';
            viewIcon.classList.remove("show_pass")
        }
    };
});




document.querySelector('.shifr').addEventListener('click', function() {
    // Получаем все чекбоксы
    const checkboxes = document.querySelectorAll('input[name="analysis"]:checked');
    const count = checkboxes.length;  // Количество выбранных чекбоксов

    // Обновляем количество в модальном окне
    document.getElementById('checkboxCount').textContent = count;

    // Показываем модальное окно
    document.getElementById('modal').classList.remove('hiddenTw');
});

// Закрытие модального окна
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hiddenTw');
});


const form = document.getElementById('myForm');
const button = document.getElementById('registrations');

button.addEventListener('click', function(event) {
  event.preventDefault();

  console.log('Form submitted without page reload');
});