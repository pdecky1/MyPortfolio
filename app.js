const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})

const toggleSwitch = document.getElementById('toggle');

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});


// const buttons = document.querySelectorAll('.color-button');
// const textToChange = document.getElementById('#text-to-change');

// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         // Reset color for all buttons
//         buttons.forEach(btn => {
//             btn.style.backgroundColor = '';
//         });

//         // Set the selected button with a different effect
//         this.style.backgroundColor = 'dark-blue';

//         // Change text color based on the clicked button's text content
//         switch (this.textContent) {
//             case 'Button 1':
//                 textToChange.style.color = 'text-dark-blue';
//                 break;
//             case 'Button 2':
//                 textToChange.style.color = 'text-dark-red';
//                 break;
//             case 'Button 3':
//                 textToChange.style.color = 'text-dark-green';
//                 break;
//             case 'Button 4':
//                 textToChange.style.color = 'text-chocho';
//                 break;
//             default:
//                 textToChange.style.color = 'text-dark-blue';
//                 break;
//         }
//     });
// });