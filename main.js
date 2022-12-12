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
        milliSeconds = date.getMilliseconds();
        namesDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        namesMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        dateName = document.querySelector('.date_Name'),
        dateNumber = document.querySelector('.date_Number'),
        dateMonth = document.querySelector('.date_Month'),
        dateYear = document.querySelector('.date_Year'),
        hourNumber = document.querySelector('.hour_Number'),
        hourMinutes = document.querySelector('.hour_Minutes'),
        hourSeconds = document.querySelector('.hour_Seconds'),
        hourMilliSeconds = document.querySelector('.hour_MilliSeconds');
    
    dateName.innerHTML = `${namesDays[dayName]}&nbsp`;
    dateNumber.innerHTML = `${dayNumber}&nbsp`;
    dateMonth.innerHTML = ` de ${namesMonths[month]} de `;
    dateYear.innerHTML = `&nbsp${year}`;
    hourNumber.innerHTML = `${hour}`;
    hourMinutes.innerHTML = `${minutes}`;
    hourSeconds.innerHTML = `${seconds}`;
    hourMilliSeconds.innerHTML = `${milliSeconds}`
}

call = setInterval(clockAndTime, 100);