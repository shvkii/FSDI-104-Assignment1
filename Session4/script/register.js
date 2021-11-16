console.log("Register page");
let salon={
    name:"Pet Palace",
    address:{
        street:"University",
        number: "758-K",
        zip:"22569",
        state:"CA",
        city:"San Diego"
    },
    hours:{
        open:"9:00 am",
        close:"20:00 pm"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Scrappy",
            age:50,
            gender:"Male",
            breed:"Mixed",
            service:"Nails",
            owner:"Shaggy",
            phone:"555-555-5555" 
        },
        {
            name:"Zeus",
            age:50,
            gender:"Male",
            breed:"Rotweiler",
            service:"Grooming",
            owner:"Roxanne",
            phone:"777-777-7777" 
        },
        {
            name:"Marley",
            age:50,
            gender:"Female",
            breed:"Bull Terrier",
            service:"Groom",
            owner:"Hank",
            phone:"333-333-3333" 
        }


    ]
}
console.log(salon.address.city);
console.log(salon.pets)
alert(salon.pets.length+"Registered Pets")

function simpleDisplay(){
    //display Scooby on the console
    for(let i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].name);
    }
}
simpleDisplay();

