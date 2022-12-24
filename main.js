let call;
const switchButton = document.querySelector('.element_switch');

function clockAndTime(){
    let date = new Date(),
        dayNumber = date.getDate(),
        dayName = date.getDay(),
        month = date.getMonth();
        year = date.getFullYear();
        hour = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
        namesDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        namesMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        hourNumber = document.querySelector('.hour_Number'),
        hourMinutes = document.querySelector('.hour_Minutes'),
        hourSeconds = document.querySelector('.hour_Seconds'),
        hourMilliSeconds = document.querySelector('.hour_MilliSeconds'),
        dateSection = document.querySelector('.date_Section'),
        imageSection = document.querySelector('.image_Section'),
        abbreviation = document.querySelector('.hour_abbreviation');

    dateSection.innerHTML = `<p class='date_info'>
                        ${namesDays[dayName]} ${dayNumber}, ${namesMonths[month]} de ${year} 
                        </p>`;
    if((hour - 12) > 0  && (hour - 12) < 10){
        hourNumber.innerHTML = `0${hour - 12}`;
    } else if (hour >= 22 && hour <= 24){
        hourNumber.innerHTML = `${hour - 12}`;
    } else {
        hourNumber.innerHTML = `${hour}`;
    }
    if (hour == 0){
        hourNumber.innerHTML = `12`;
    }

    if(minutes < 10){
        hourMinutes.innerHTML = `0${minutes}`;
    } else {
        hourMinutes.innerHTML = `${minutes}`;
    }
    if(seconds < 10){
        hourSeconds.innerHTML = `0${seconds}`;
    } else{
        hourSeconds.innerHTML = `${seconds}`;
    }
    if(hour > 8 && hour < 20){
        imageSection.innerHTML =  `<img class="image_Cycle" src="./images/oceano.png" alt="Imagen del siclo del día">`;
    } else {
        imageSection.innerHTML =  `<img class="image_Cycle" src="./images/noche.png" alt="Imagen del siclo de noche">`
    }
    console.log(hour);

    if(hour < 12){
        abbreviation.innerHTML = `A.M`;
    } else {
        abbreviation.innerHTML = `P.M`;
    }
}

call = setInterval(clockAndTime, 100);

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active');

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }

})

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    switchButton.classList.add('active');
} else {
    document.body.classList.remove('dark');
    switchButton.classList.remove('active');
}