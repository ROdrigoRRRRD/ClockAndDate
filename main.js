let call;

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
        dateSection = document.querySelector('.date_Section');

    dateSection.innerHTML = `<p class='date_info'>
                        ${namesDays[dayName]} ${dayNumber}, ${namesMonths[month]} de ${year} 
                        </p>`;
    if((hour - 12) < 10){
        hourNumber.innerHTML = `0${hour - 12}`;
    } else {
        hourNumber.innerHTML = `${hour - 12}`;
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
    
}

call = setInterval(clockAndTime, 10);