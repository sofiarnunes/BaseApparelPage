const submit = document.getElementById('submit');
const val = document.querySelector('input');
const error = document.getElementById('error');
const invalid = document.getElementById('invalid');
const pop = document.getElementById('pop');
const imgDesktop = document.getElementById('img-desktop');
const imgMobile = document.getElementById('img-mobile');

error.hidden = true;
invalid.hidden = true;

const subscribe = (event) => {
    const value = val.value;
    event.preventDefault();        

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) && value.length){
        error.hidden = true;
        invalid.hidden = true;
        pop.hidden = false;
        setTimeout(() => {
            pop.hidden = true;
        }, 1000);
        
    } else {
        error.hidden = false;
        invalid.hidden = false;
    }
} 

const widthScreen = (data) => {
    if(data < 700) {
        imgDesktop.hidden = true;
    } else {
        imgMobile.hidden = true;
    }
}

widthScreen(screen.width)

submit.addEventListener('click', subscribe);