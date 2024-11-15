// navigation

// let btns = document.querySelectorAll('.layouts_buttons');

// btns.forEach((btn) => {
//     btn.onclick = () => {
//         btns.forEach(btn => btn.classList.remove('layouts_buttons_active'))
//         btn.classList.add('layouts_buttons_active')
//     }
// })

// form fill

// let form = document.forms.user_about
// let inputes = form.querySelectorAll('input select')
// let btn = form.querySelector(".change")

// inputes.forEach(inp => {
//     let patterns = {
//         name: /^[a-z а-я ,.'-]+$/i,
//         mom: /^[a-z а-я ,.'-]+$/i,
//         dad: /^[a-z а-я ,.'-]+$/i,
//         surname: /^[a-z а-я ,.'-]+$/i,
//         email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//         phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
//         age: /^\S[0-9]{0,2}$/,
//         jS: /\w/,
//         cSS: /\w/,
//         hTML: /\w/,
//         about: /\w/,
//         car: /\w/
//     }
//     function validate(regex, field) {
//         if (regex.test(field.value)) {
//             field.style.border = "1px solid green"
//         } else {
//             field.style.border = "1px solid red"
//         }

//         let greenInputs = form.querySelectorAll('.needed input[style="border: 1px solid green;"]')
//         let redInputs = form.querySelectorAll('.needed input[style="border: 1px solid red;"]')
//         success.innerHTML = `${greenInputs.length}/ ${inputs.length}`
//         error.innerHTML = `${redInputs.length}/ ${inputs.length}`
//     }
//     inp.onkeyup = () => validate(patterns[inp.name], inp)

// })


// form.onsubmit = (event) => {
//     event.preventDefault()
//     let allInputsFilled = true
//     let blue = 0
//     let red = 0
//     inputs.forEach(inp => {

//         inp.style.border = "1px solid blue"

//         let title = inp.previousElementSibling
//         let text = inp.nextElementSibling

//         if (inp.value.length === 0) {
//             btn.style.backgroundColor = 'red'

//             inp.style.border = '1px solid red'

//             title.style.color = 'red'

//             text.style.color = 'red'
//             text.innerHTML = "Please fiil the field"

//             red++
//             if (red === 7) {
//                 success.innerHTML = `${0}/ ${inputs.length}`
//             }
//             error.innerHTML = `${red}/ ${inputs.length}`
//             allInputsFilled = false
//         } else {

//             title.style.color = 'blue'

//             text.style.color = 'blue'
//             text.innerHTML = ""


//             blue++
//             if (blue === 7) {
//                 btn.style.backgroundColor = 'blue'
//                 error.innerHTML = `${0}/ ${inputs.length}`
//             }
//             success.innerHTML = `${blue}/ ${inputs.length}`
//         }
//     })

//     if (allInputsFilled) {
//         submit()
//     }
// }

// function submit() {
//     let fm = new FormData(form)
//     let user = {}
//     fm.forEach((value, key) => {
//         user[key] = value
//     });
//     form.reset()
//     console.log(user);
// }

let conts = document.querySelectorAll("main .page");
let tabs = document.querySelectorAll(".navigation");
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
      if (profileButton) {
        profileButton.classList.add('layouts_buttons_active');
      }
    }
    if (key === "upload" || key === "review") {
      let profileButton = document.querySelector('#analyze');
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

