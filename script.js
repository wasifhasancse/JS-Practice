//display number from 55 to 85 and skip the numbers divisible by 5 using continue statement with while loop
let i = 55;
while (i <= 85) {
    if (i % 5 !== 0) {
        i++; //solve infinite loop issue
        continue;
    }
    console.log(i);
    i++;    
}

