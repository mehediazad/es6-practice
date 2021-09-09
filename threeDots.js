const ages_1 =[18,19,17,16,15];
const ages_2 =[20,21,22,23,24];
const ages_3 =[30,31,32,33,34];

const allAge = ages_1.concat(ages_2).concat(ages_3);
const allAge_2 =[...ages_1, ...ages_2, ...ages_3];
console.log(allAge_2);

// max

const Business = 700;
const Minister = 500;
const Sochib = 400;

const maximum = Math.max(Business,Minister,Sochib);
console.log("Maximum value: ",maximum);

// max array
const BusinessMan = 700;
const MinisterMan = 500;
const SochibMan = 400;

const Tk = [800,900,1000];
const maximum_2 = Math.max(...Tk);
console.log("Maximum Number: ",maximum_2);