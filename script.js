console.log('entry');

let arrival = [];

//get data
function addEntry() {
    let time = document.querySelector('#time').value;
    let day = document.querySelector('#day').value;
    let pallets = document.querySelector('#pallets').value;
    let boxes = document.querySelector('#boxes').value;
    let watermelon = document.querySelector('#watermelon').value;
    let potato = document.querySelector('#potato').value;
    console.log(time, day, pallets, boxes, watermelon, potato);
    newArrival(num, day, pallets, boxes, watermelon, potato);
    displayTimes();
}

//put data onto array arrival
function newArrival(num, day, pallets, boxes, watermelon, potato) {
    let newEntry = {
        time: num,
        day: day,
        pallets: pallets,
        boxes: boxes,
        watermelon: watermelon,
        potato: potato,
    };
    console.log(newEntry);
    arrival.push(newEntry);
    //console.log(arrival);
}

//remove an element from the array arrival
function remove(element) {
    arrival.splice(element, 1);
    let length = arrival.length;
    let newArray = [];
    for (let i = 0; i < length; i++) {
        newArray.push(arrival[i]);
    }
    arrival = newArray;
    displayTimes();
}

//display the array arrival
function display() {
    //console.log('time');
    let display = " ";
    let length = arrival.length;
    //console.log(length);
    for (let i = 0; i < length; i++) {
        let p = arrival[i].time.split(':');
        //let hour = p[0] - 12;
        display += `<li class='list'>Arrival Time: ${p[0] - 12}:${p[1]}, ${arrival[i].day}
        <button class='remove' onclick='remove(${i})'>Remove</button>
        </li>`
    }
    //console.log(display);
    document.querySelector('.arival').innerHTML = display;
}

//display averages
function displayAverages(average) {
    let display = " ";
    display += `<li class='list'>Average Arrival Time: ${average[0]}, 
    Averge Number of pallets: $</li>
    <li class='list'>Tuesday Average Arrival Time: ${average[1]}</li>
    <li class='list'>Wednesday Average Arrival Time: ${average[2]}</li>
    <li class='list'>Saturday Average Arrival Time: ${average[3]}</li>
    <li class='list'>Sunday Average Arrival Time: ${average[4]}</li>`
    document.querySelector('.averages').innerHTML = display;
}

function averages() {
    //console.log('average');
    let length = arrival.length;
    console.log(length);
    let timeTotal = 0;
    let tueTotal = 0;
    let tueTimes = 0;
    let wenTotal = 0;
    let wenTimes = 0;
    let satTotal = 0;
    let satTimes = 0;
    let sunTotal = 0;
    let sunTimes = 0;
    let tueTimeAverage = 0;
    let wedTimeAverage = 0;
    let satTimeAverage = 0;
    let sunTimeAverage = 0;
    let averages = [];
    
    for (let i = 0; i < length; i++) {
        console.log('i',i);
        let p = arrival[i].time.split(':');
        //console.log(p);
        let hourToMinute = (p[0] - 12) * 60;
        //console.log('hour to minute', hourToMinute);
        let minutes = parseInt(p[1]);
        //console.log(minutes);
        let total = hourToMinute + minutes;
        //console.log('total', total);
        timeTotal += total;
        //console.log('timeTotal', timeTotal);
        switch (arrival[i].day) {
            case 'Tuesday':
                console.log('tuesday');
                tueTotal += hourToMinute + minutes;
                tueTimes++;
                console.log('tuetotal', tueTotal);
                console.log('tueTime', tueTimes);
                break;
            case 'Wendnesday':
                console.log('w');
                wenTotal += hourToMinute + minutes;
                wenTimes++;
                break;
            case 'Saturday':
                satTotal += hourToMinute + minutes;
                satTimes++;
                break;
            case 'Sunday':
                sunTotal += hourToMinute + minutes;
                sunTimes++;
                break;
        }
        console.log(timeTotal);
    }
    //console.log('tuesTotal', tueTotal)
    //console.log('tuestime', tueTimes);
    totalAverage = Math.round(timeTotal / length);
    let minutes = totalAverage % 60;
    let hours = ((totalAverage - minutes) / 60);
    let clock = `${hours}:${minutes}`;
    averages.push(clock);

    tueAverage = Math.round(tueTotal / tueTimes);
    minutes = tueAverage % 60;
    hours = ((tueAverage - minutes) / 60);
    clock = `${hours}:${minutes}`;
    console.log('tave', tueAverage);
    averages.push(clock);

    wedAverage = Math.round(wenTotal / wenTimes);
    minutes = wedAverage % 60;
    hours = ((wedAverage - minutes) / 60);
    clock = `${hours}:${minutes}`;
    //console.log('wA', wednesdayAverage);
    averages.push(clock);

    satAverage = Math.round(satTotal / satTimes);
    minutes = satAverage % 60;
    hours = ((satAverage - minutes) / 60);
    clock = `${hours}:${minutes}`;
    averages.push(clock);

    sunAverage = Math.round(sunTotal / sunTimes);
    minutes = sunAverage % 60;
    hours = ((sunAverage - minutes) / 60);
    clock = `${hours}:${minutes}`;
    averages.push(clock);

    console.log(totalAverage, tueAverage, wedAverage, satAverage, sunAverage);
    displayAverages(averages);
}

