let dateInput = document.getElementById('date-input');

let year = document.getElementById('year');
let month = document.getElementById('month');
let day = document.getElementById('day');

dateInput.max = new Date().toISOString().split("T")[0];


const calculateAge = () => {
    let today = new Date();

    let d1 = today.getDate();
    let m1 = today.getMonth() + 1;
    let y1 = today.getFullYear();

    let birthDate = new Date(dateInput.value);

    let d2 = birthDate.getDate();
    let m2 = birthDate.getMonth() + 1;
    let y2 = birthDate.getFullYear();

    let d3, m3, y3; 

    y3 = y1 - y2;
    if(m1 >= m2) {
        m3 = m1 - m2;
    }else {
        y3--;
        m3 = 12 + m1 - m2;
    }

    if(d1 >= d2)
        d3 = d1 - d2;
    else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d1 - d2;
    }
    if(m3 < 0) {
        m3 = 11;
        y3--;
    }   

    year.innerHTML = y3;
    month.innerHTML = m3;
    day.innerHTML = d3;
    if(!isNaN(d3))
        document.querySelector('.container .age').style.display = 'block';

}

const getDaysInMonth = (year, month) => {
    return new Date(year, month, -1).getDate();
}
