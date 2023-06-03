//             012345679
let strings = "O rato roeu a roupa do rei de Roma."
            //let umaString = "Um \"texto\"" ;
           /*console.log(strings.concat(' em um lindo dia.'));
           console.log(strings + ' em um lindo dia.');
           console.log(`${strings} em um lindo dia.`);	
           */
console.log(strings.lastIndexOf('m', 3));
console.log(strings.indexOf('o', 3));
console.log(strings.match(/[a-z]/));
console.log(strings.match(/[a-z]/g));
console.log(strings.search(/x/));
console.log(strings.replace(/r/, '#'));
console.log(strings.replace(/r/g, '#'));
console.log(strings.length);
console.log(strings.slice(2, 6));
console.log(strings.slice(-5, -1));
console.log(strings.substring(strings.length - 5, strings.length -1));
console.log(strings.split(' ', 3));
console.log(strings.toUpperCase());
console.log(strings.toLowerCase());
console.log(strings.charAt(3))

