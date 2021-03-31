function getSleepHours(day) {
    if(day === 'monday') {
        return 8;
    }
    else if(day === 'tuesday') {
        return 6;
    }
    else if(day === 'wednesday') {
        return 7;
    }
    else if(day === 'thursday') {
        return 5;
    }
    else if(day === 'friday') {
        return 7;
    }
    else if(day === 'saturday') {
        return 8;
    }
    else if(day === 'sunday') {
        return 9;
    }
}

function getActualSleepHours() {
    // console.log(getSleepHours('monday') + getSleepHours('tuesday'))
    let sum = (getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + 
    getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') +
    getSleepHours('sunday'));
    return SVGCursorElement;
}

// getActualSleepHours()

function getIdealSleepHours() {
    let idealHours = 8;
    return idealHours * 7;
}

function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('Perfect amount of sleep' + actualSleepHours + 'is same as ' + idealSleepHours);
    }
      else if(actualSleepHours > idealSleepHours) {
        console.log('user got more sleep than needed '+ actualSleepHours + 'is more than ' + idealSleepHours);
      }
      else {
        console.log('User should get some rest ' + actualSleepHours + ' is less than ' + idealSleepHours);
      }
    }

calculateSleepDebt()