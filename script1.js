console.log('begin');

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
        display += `<li class='list'>Arrival Time: ${p[0] - 12}:${p[1]},
        ${arrival[i].day}
        <button class='remove' onclick='remove(${i})'>Remove</button>
        </li>`
    }
    //console.log(display);
    document.querySelector('.arival').innerHTML = display;
}

//display averages
function displayAverages(average) {
    //time: clock, pallets: palletAverage, boxes: boxAverage
    
    let display += `<li class='list'>Average Arrival Time: ${average[0].time},
        average number of pallets: ${average[0].pallets}, average number of
        boxes: ${average[0].boxes}</li>
    <li class='list'>Average Monday Arrival Time: ${average[1].time},
        average number of pallets: ${average[1].pallets}, average number of
        boxes: ${average[1].boxes}</li>
    <li class='list'>Wensday Average Arrival Time: ${average[2].time},
        average number of pallets: ${average[2].pallets}, average number of
        boxes: ${average[2].boxes}</li>
    <li class='list'>Saturday average Arrival Time: ${average[3].time},
        average number of pallets: ${average[3].pallets}, average number of
        boxes: ${average[3].boxes}</li>
    <li class='list'>Sunday Average Arrival Time: ${average[4].time},
        average number of pallets: ${average[4].pallets}, average number of
        boxes: ${average[4].boxes}</li>
    <li class='list'>Average number of days between deliveres of potatos:
        ${average[5]}</li>`
    
    document.querySelector('.averages').innerHTML = display;
}

function averages() {
    //console.log('average');
    let length = arrival.length;
    console.log(length);

    //# of days
    //let totalDays;
    let monDays;
    let wenDays;
    let satDays;
    let sunDays;

    //times
    let TimeTotal;
    let monTimeTotal = 0;
    let wenTimeTotal = 0;
    let satTimeTotal = 0;
    let sunTimeTotal = 0;
    let timeAverage;
    let monTimeAverage = 0;
    let wedTimeAverage = 0;
    let satTimeAverage = 0;
    let sunTimeAverage = 0;

    //pallets
    let palletTotal = 0;
    let palletAverage;
    let monPalletTotal;
    let monPalletAverage;
    let wenPalletTotal;
    let wenPalletAverage;
    let satPalletTotal;
    let satPalletAverage;
    let sunPalletTotal;
    let sunPalletAverage;
    //boxes
    let boxTotal = 0;
    let boxAverage;
    let monBoxTotal;
    let monBoxAverage;
    let wenBoxTotal;
    let wenBoxAverage;
    let satBoxTotal;
    let satBoxAverage;
    let sunBoxTotal;
    let sunBoxAverage;
    ////watermelon
    //let watermelonTotal;
    //let watermelonAverage;
    //let monWatermelonTotal;
    //let monWatermelonAverage;
    //let wenWatermelonTotal;
    //let wenWatermelonAverage;
    //let satWatermelonTotal;
    //let satWatermelonAverage;
    //let sunWatermelonTotal;
    //let sunWatermelonAverage;
    //potatos
    let potatoTotal;
    let potatoDays;
    //let monPotatoTotal;
    //let monPotatoAverage;
    //let wenPotatoTotal;
    //let wenPotatoAverage;
    //let satPotatoTotal;
    //let satPotatoAverage;
    //let sunPotatoTotal;
    //let sunPotatoAverage;

    let averages = [];
    
    for (let i = 0; i < length; i++) {
        //totalDays++;
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
        palletTotal += arrival[i].pallets;
        boxTotal += arrival[i].boxes;
        potatoTotal += arriva[i].potato;
        //watermelonTotal += arrival[i].watermelon;
        //console.log('timeTotal', timeTotal);
        switch (arrival[i].day) {
            case 'Monday':
                console.log('monday');
                monDays++;
                monTimeTotal += hourToMinute + minutes;
                monPalletTotal += arrival[i].pallets - arrival[i].watermelon
                    - arrival[i].potato;
                monBoxTotal += arrival[i].boxes - arrival[i].watermelon
                    - arrival[i].potato;
                monPotatoTotal += arrival[i].potato;
                //monWatermelonTotal += arrival[i].watermelon;
                console.log('tuetotal', monTotal);
                console.log('tueTime', monTimes);
                break;
            case 'Wendnesday':
                console.log('w');
                wenDays++;
                wenTimeTotal += hourToMinute + minutes;
                wenPalletTotal += arrival[i].pallets - arrival[i].watermelon
                    - arrival[i].potato;
                wenBoxTotal += arrival[i].boxes - arrival[i].watermelon
                    - arrival[i].potato;
                wenPotatoTotal += arrival[i].potato;
                //wenWatermelonTotal += arrival[i].watermelon;
                
                break;
            case 'Saturday':
                satDays++;
                satTimeTotal += hourToMinute + minutes;
                satPalletTotal += arrival[i].pallets - arrival[i].watermelon
                    - arrival[i].potato;
                satBoxTotal += arrival[i].boxes - arrival[i].watermelon
                    - arrival[i].potato;
                satPotatoTotal += arrival[i].potato;
                //satWatermelonTotal += arrival[i].watermelon;
                break;
            case 'Sunday':
                sunDays++;
                sunTimeTotal += hourToMinute + minutes;
                arrival[i].pallets - arrival[i].watermelon
                    - arrival[i].potato
                sunBoxTotal += arrival[i].boxes - arrival[i].watermelon
                    - arrival[i].potato;
                sunPotatoTotal += arrival[i].potato;
                //sunWatermelonTotal += arrival[i].watermelon;
                break;
        }
        console.log(timeTotal);
    }
    //console.log('tuesTotal', tueTotal)
    //console.log('tuestime', tueTimes);
    timeAverage = Math.round(timeTotal / length);
    let minutes = totalAverage % 60;
    let hours = ((totalAverage - minutes) / 60);
    let clock = `${hours}:${minutes}`;
    //watermelonAverage = Math.round(watermelonTotal / totalDays);
    palletAverage = Math.round(palletTotal / totalDays);
    boxAverage = Math.round(boxTotal / totalDays);
    averages.push({
        time: clock, pallets: palletAverage, boxes: boxAverage,
    });

    //monday averages
    monTimeAverage = Math.round(monTimeTotal / monDays);
    monPalletAverage = Math.round(monPalletTotal / monDays);
    monBoxAverage = Math.round(monBoxTotal / monDays);
    //monWatermelonAverage = math.round(monWatermelonTotal / monDays);

    minutes = monAverage % 60;
    hours = ((monAverage - minutes) / 60);
    clock = `${hours}:${minutes}`;
    console.log('tave', monAverage);
    averages.push({
        time: clock, pallets: monPalletAverage, boxes: monBoxAverage,
    });

    //wensday averages
    wedTimeAverage = Math.round(wenTimeTotal / wenDays);
    wedPalletAverage = Math.round(wedPalletTotal / wedDays);
    wedBoxAverage = Math.round(wedBoxTotal / wedDays);
    //wedWatermelonAverage = math.round(wedWatermelonTotal / wedDays);
    minutes = wedAverage % 60;
    hours = ((wedAverage - minutes) / 60);
    clock = `${hours}:${minutes}`;
    //console.log('wA', wednesdayAverage);
    averages.push({
        time: clock, pallets: palletAverage, boxes: boxAverage,
    });

    //saturday averages
    satTimeAverage = Math.round(satTimeTotal / satDays);
    satPalletAverage = Math.round(satPalletTotal / satDays);
    satBoxAverage = Math.round(satBoxTotal / satDays);
    //wedWatermelonAverage = math.round(wedWatermelonTotal / wedDays);
    minutes = satAverage % 60;
    hours = ((satAverage - minutes) / 60);
    clock = `${hours}:${minutes}`;
    averages.push({
        time:clock; pallets: palletAverage; boxes: boxAverage;
    });

    //sunday averages
    sunTimeAverage = Math.round(sunTimeTotal / sunDays);
    sunPalletAverage = Math.round(sunPalletTotal / sunDays);
    sunBoxAverage = Math.round(sunBoxTotal / sunDays);
    sunWatermelonAverage = math.round(sunWatermelonTotal / sunDays);
    minutes = sunAverage % 60;
    hours = ((sunAverage - minutes) / 60);
    clock = `${hours}:${minutes}`;
    averages.push({
        day: "Sunday", time: clock; pallets: palletAverage; boxes: boxAverage;
    });

    potatoDays = Math.round(totalDays / potatoTotal);
    averages.push(potatoDays);

    console.log(totalAverage, monAverage, wedAverage, satAverage, sunAverage);
    displayAverages(averages);
}

