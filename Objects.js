let obj = {
    key1: 'Value1',
    key2: 'value2'
}
console.log(obj);   //{ key1: 'Value1', key2: 'value2' }
console.log(typeof obj) //object

let laptop = {
    name: 'HP',
    price: 90000
}
console.log(laptop);    //{ name: 'HP', price: 90000 }

////Read the Property 
console.log(laptop.name)    //HP
console.log(typeof laptop.price)   //number



//If property is present then updates and if not then add new property

laptop.color = 'Grey'   //Adds color property in laptop obj
console.log(laptop)     //{ name: 'HP', price: 90000, color: 'Grey' }

laptop.price = 80000    //Updates price property in laptop obj
console.log(laptop)     //{ name: 'HP', price: 80000, color: 'Grey' }

delete laptop.color;    //Delete the property
console.log(laptop);    //{ name: 'HP', price: 80000 }
console.log(laptop.color);

//Another method to call the property
console.log(laptop["name"]);    //HP

let car = {
    name: 'BMW',
    model: 'M5',
    price: 2500000,
    color: ['RED', 'WHILE', 'BLUE'],
    engine: {
        type: 'V8',
        cylinder: 8,
        displacement: 300,
        power: 250,
        torque: 300,
        fuel: 'Gasoline',
        mileage: 1000000,
    },
    electric: false
};
console.log(car);

console.log(car.model)  //M5
console.log(car.price)  //2500000
console.log(car.engine.type, car.engine.fuel)    //V8 Gasoline

car.color.forEach((ele, i) => console.log(ele, i));
// RED 0
// WHILE 1
// BLUE 2

//My Object
const ayush = {
    name: 'Ayush',
    Age: '22',
    Gender: 'Male',
    education: {
        Degree: 'BE',
        Course: 'E&TC',
        College: 'MES Wadia College Of Engineering',
        Pattern: '2019',
        Passout_Yr: '2026',
        cgpa: [6.3, 7.1, 7.6, 8.2],
    },
    family : ['Vaishali', 'Atul', 'Arpita', 'Anupama', 'Nalani', 'Bapu'],
    isMarried: false
}
console.log(ayush);

console.log(Object.keys(ayush));    //[ 'name', 'Age', 'Gender', 'education', 'family', 'isMarried' ]
console.log(Object.values(ayush).flat(1));
//[
//   'Ayush',
//   '22',
//   'Male',
//   {
//     Degree: 'BE',
//     Course: 'E&TC',
//     College: 'MES Wadia College Of Engineering',
//     Pattern: '2019',
//     Passout_Yr: '2026',
//     cgpa: [ 6.3, 7.1, 7.6, 8.2 ]
//   },
//   'Vaishali',
//   'Atul',
//   'Arpita',
//   'Anupama',
//   'Nalani',
//   'Bapu',
//   false
// ]
console.log("**************************************")
console.log(Object.values(ayush.education.cgpa));   //[ 6.3, 7.1, 7.6, 8.2 ]

console.log(Object.entries(ayush));
// [
//   [ 'name', 'Ayush' ],
//   [ 'Age', '22' ],
//   [ 'Gender', 'Male' ],
//   [
//     'education',
//     {
//       Degree: 'BE',
//       Course: 'E&TC',
//       College: 'MES Wadia College Of Engineering',
//       Pattern: '2019',
//       Passout_Yr: '2026',
//       cgpa: [Array]
//     }
//   ],
//   [
//     'family',
//     [ 'Vaishali', 'Atul', 'Arpita', 'Anupama', 'Nalani', 'Bapu' ]
//   ],
//   [ 'isMarried', false ]
// ]
console.log(Object.entries(ayush).flat(2));
console.log("*****************************************")
//Object.freeze(ayush);
ayush.name = 'Peter'
console.log(ayush)
// {
//   name: 'Ayush',
//   Age: '22',
//   Gender: 'Male',
//   education: {
//     Degree: 'BE',
//     Course: 'E&TC',
//     College: 'MES Wadia College Of Engineering',
//     Pattern: '2019',
//     Passout_Yr: '2026',
//     cgpa: [ 6.3, 7.1, 7.6, 8.2 ]
//   },
//   family: [ 'Vaishali', 'Atul', 'Arpita', 'Anupama', 'Nalani', 'Bapu' ],
//   isMarried: false
// }
// name is not changed

ayush.nickName = 'Peter';
console.log(ayush); //Same Result

delete ayush.name;  
console.log(ayush); ////Same Result

//Check Wheter object is frozen or not
console.log(Object.isFrozen(ayush));    //true
//Using frozen the crud operation on object cannot be performed

console.log(Object.isSealed(ayush)) //Object.freeze() is basically a stronger version of Object.seal()

Object.seal(ayush); //Only allows updation not creation or insertion 
ayush.nickName = 'Ayush';   
console.log(Object.isSealed(ayush)) //true
console.log(ayush);

console.log("*************************************************************")

let movies = [      //Arrays Of Object
  {
    name: "Toxic",
    genre: ["Action", "Thriller"],
    language: ["Hindi", "English", "Kannada"],
    rating: 3.5,
    cast: {
      hero: "Yash",
      heroine: ["Kiara", "Tara"],
      villain: "Yash",
    },
    isReleased: false,
  },

  {
    name: "Pushpa 2",
    genre: ["Action", "Drama"],
    language: ["Telugu", "Hindi"],
    rating: 4.7,
    cast: {
      hero: "Allu Arjun",
      heroine: ["Rashmika Mandanna"],
      villain: "Fahadh Faasil",
    },
    isReleased: true,
  },

  {
    name: "Chhaava",
    genre: ["Historical", "Drama"],
    language: ["Hindi", "Marathi"],
    rating: 4.8,
    cast: {
      hero: "Vicky Kaushal",
      heroine: ["Rashmika Mandanna"],
      villain: "Akshaye Khanna",
    },
    isReleased: true,
  },

  {
    name: "Sairat",
    genre: ["Romance", "Drama"],
    language: ["Marathi"],
    rating: 4.9,
    cast: {
      hero: "Akash Thosar",
      heroine: ["Rinku Rajguru"],
      villain: "Tanaji Galgunde",
    },
    isReleased: true,
  },

  {
    name: "RRR",
    genre: ["Action", "Drama"],
    language: ["Telugu", "Hindi", "English"],
    rating: 4.8,
    cast: {
      hero: ["Ram Charan", "Jr NTR"],
      heroine: ["Alia Bhatt", "Olivia Morris"],
      villain: "Ray Stevenson",
    },
    isReleased: true,
  },

  {
    name: "Zapatlela",
    genre: ["Comedy", "Horror"],
    language: ["Marathi"],
    rating: 4.6,
    cast: {
      hero: "Dilip Prabhavalkar",
      heroine: ["Mahesh Kothare"],
      villain: "Tatya Vinchu",
    },
    isReleased: true,
  },

  {
    name: "Dangal",
    genre: ["Sports", "Drama"],
    language: ["Hindi"],
    rating: 4.7,
    cast: {
      hero: "Aamir Khan",
      heroine: ["Fatima Sana Shaikh", "Sanya Malhotra"],
      villain: "Girish Kulkarni",
    },
    isReleased: true,
  },

  {
    name: "Kantara",
    genre: ["Action", "Drama", "Thriller"],
    language: ["Kannada", "Hindi"],
    rating: 4.9,
    cast: {
      hero: "Rishab Shetty",
      heroine: ["Sapthami Gowda"],
      villain: "Kishore",
    },
    isReleased: true,
  },

  {
    name: "Drishyam",
    genre: ["Crime", "Thriller"],
    language: ["Hindi"],
    rating: 4.6,
    cast: {
      hero: "Ajay Devgn",
      heroine: ["Shriya Saran"],
      villain: "Tabu",
    },
    isReleased: true,
  },

  {
    name: "Ved",
    genre: ["Romance", "Drama"],
    language: ["Marathi"],
    rating: 4.5,
    cast: {
      hero: "Riteish Deshmukh",
      heroine: ["Genelia D'Souza"],
      villain: "Jiya Shankar",
    },
    isReleased: true,
  },
];

//Print Movie and cast name: 
movies.forEach((ele) => console.log(ele.name+" : "+ele.cast.hero));

let releasedMovie = movies.filter((ele) => ele.isReleased == true);
console.log(releasedMovie);

let ratingLessThan4 = movies.filter((ele) => ele.rating<4);
console.log(ratingLessThan4);

let moviesWithEnglishLang = movies.filter((ele) => ele.language.includes('English'));
console.log(moviesWithEnglishLang)

let actionMovies = movies.filter((ele) => ele.genre.includes('Action'));
console.log(actionMovies);

let heroineGreaterThan1 = movies.filter((ele) => ele.cast.heroine.length > 1);
console.log(heroineGreaterThan1);

console.log("************************************************")
let movies4PlusRatingActionHindi = movies.filter((ele) => ele.rating > 4 && ele.genre.includes('Action') && ele.language.includes('Hindi'));
console.log(movies4PlusRatingActionHindi);

let mobile1 = {
    name: 'Samsung',
    price: '90000'
}

let mobile2 = {
     name: 'Apple',
     
    color: ['red', 'Yellow']
}

console.log("********************************************")
//Shallow Copying Mobile1 to mobile 2
Object.assign(mobile1, mobile2); //Object.assign(Target Object, copying Object)
console.log(mobile1);   //{ name: 'Apple', price: '90000', color: [ 'red', 'Yellow' ] }

let mobile3 = Object.assign({}, mobile1, mobile2);  //{} -> empty object of mobile 3 where we have to put the data of mobile1 and mobile2
console.log(mobile3);   //{ name: 'Apple', price: '90000', color: [ 'red', 'Yellow' ] }

mobile1.price = 100000;
console.log(mobile3);   //{ name: 'Apple', price: '90000', color: [ 'red', 'Yellow' ] }

mobile2.color.push('Blue');
console.log(mobile3);   //{ name: 'Apple', price: '90000', color: [ 'red', 'Yellow', 'Blue' ] }
/*
Here The shallow copy is performed
When Object1 is changed the object2 gets affected is known as shallow copy
In is the shallow copy is only performed on non primitives datatypes
*/

//*************** CREATION OF OBJECTS ******************
//Objects is Created in 5 ways
//1) Using New Keyword
let obj1 = new Object();    //{}
console.log(obj1);
obj1.name = 'Kawasaki';
obj1.price = 1000000;
obj1.color = 'blue'
console.log(obj1);          //{ name: 'Kawasaki', price: 1000000, color: 'blue' }

//2) Function Constructor
function bike(name, price){
    console.log(this);      //bike {}
    this.bikeName = name;
    this.price = price;
    console.log(this);      //bike { bikeName: 'GT650', price: 600000 }
}
new bike('GT650', 600000);

//3) By Using Class
class Car{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

const car1 = new Car("BMW", 250000);
console.log(car1);  //Car { name: 'BMW', price: 250000 }

let user = {
    name: 'John',
    place: 'New York',
    mobile: '1234567890',
    
    printUser: function(){
        console.log("Function Calling from the object");    //Function Calling from the object
        console.log(this.name,user.name);                   //John John
        console.log(this.place, user.place);                //New York New York
        console.log(this.mobile, user.mobile);              //1234567890 1234567890
    }, 

    printUser1: () => {
        console.log("Function calling from the Object")     //Function calling from the Object
        console.log(user.name, this.name)                   //John undefined
        console.log(user.place, this.place)                 //New York undefined
        console.log(user.mobile, this.mobile)  
        //1234567890 undefined

        let demo = () =>{
          console.log(this);  
        };

        demo(); //{}
    }
}

user.printUser();
console.log("****************************")
user.printUser1();


/*******  CALL APPLY BIND ******* */
let user1 = {
  userName: "Peter",
  place: "New York",
  mobile: 1234567890
}

let user2 = {
  userName: "MJ",
  place: "New York",
  mobile: 1234567890
}

function printUser1(degree = 'NA', stream = 'NA'){
  console.log(this)
  console.log(`My Name: ${this.userName} and I came from ${this.place} and have degree ${degree} in ${stream}`)
}

printUser1.call(user1);
// { userName: 'Peter', place: 'New York', mobile: 1234567890 }
// My Name: Peter and I came from New York and have degree NA in NA

printUser1.call(user2);
// { userName: 'MJ', place: 'New York', mobile: 1234567890 }
// My Name: MJ and I came from New York and have degree NA in NA

printUser1.apply(user1, ["BTECH", "E&TC"])    
// { userName: 'Peter', place: 'New York', mobile: 1234567890 }
// My Name: Peter and I came from New York and have degree BTECH in E&TC

let binding = printUser1.bind(user2, 'BE', 'E&TC')
binding();
// { userName: 'MJ', place: 'New York', mobile: 1234567890 }
// My Name: MJ and I came from New York and have degree BE in E&TC

/* 
Call, apply and bind are similar to each other there main role is the reuse the function or code
Only Difference in all 3 is: 
call() take the parameter directly and it is not assigned to variable, 
bind() take the parameter as an array and it is not assigned to variable,
apply() take the parameter directly, similar to the call() function only difference is that we have assigned the function to variable  
*/

let emp1 = {
  empName: "Ayush",
  salary: 100000
}

let emp2 = {
  empName: "Kunal",
  salary: 150000 
}

function totSal(pf = 0, bonus = 0){
  let totSal = this.salary + bonus - (pf + (this.salary * 0.18));
  console.log(totSal);
}

totSal.call(emp1,1000,5000)   //86000
totSal.call(emp2, 2000, 6000) //127000


