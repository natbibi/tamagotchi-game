class pet {
    constructor(name, happinessLevel, hungerLevel) {
        this.name = name;
        this.happinessLevel = happinessLevel;
        this.hungerLevel = hungerLevel;
    }
        play(){ console.log(`${this.name} wants to play!`); }
        feed(nowFed){ this.hungerLevel = nowFed; };

        get checkInHappiness(){
            return this.happinessLevel ? `${this.name} is happy!` : `${this.name} is bored and wants to play!` 
        };

        get checkInHunger(){
            return this.hungerLevel ? `${this.name} is well fed!` : `${this.name} is hungry and wants to eat!` 
        };
    }

   function newPet(newName, newHappinessLevel, newHungerLevel) {
        this.name = newName;
        this.happinessLevel = newHappinessLevel;
        this.hungerLevel = newHungerLevel;
    }   

        let zelda = new newPet ('Zelda', 'happy', 'nowFed');
        console.log(zelda.name, zelda.happinessLevel, zelda.hungerLevel)
        console.log(checkInHunger);

        // zelda.feed();
        // zelda.play();




// Tamagotchi: Create a text-based game in nodejs that enables us to control a pet via user input.
// Create a new class named Pet. 
// A Pet should have at least three features name, happiness level, hunger level and any more you think are important.
// Create a function that asks the user for their input. 
// This function should cope with the three following occasions:
// Creating a new pet and giving it a name and any other features defined.

// User wants to feed or play with their pet..
// User wants to check in with their pet and see how it’s happiness and hunger levels are.
// Note: These will require you to create methods within your Pet class.
// It is your choice as to whether you encapsulate your app logic in another class
// Implement Error handling
// How can you make this a more engaging game? What else would be cool for your pet to do? Can the user choose the type of food they feed their pet, with the pet randomly deciding if they like it or not?

// class Animal{
//     constructor(name, dob, owner=null){
//         this.name = name;
//         this.dob = dob;
//         this.owner = owner;
//     }

//     speak(){ console.log(`${this.name} says hello!`); }
    
//     adopt(newOwner){ this.owner = newOwner; };

//     get adoptionStatus(){
//         return this.owner ? `${this.name} has been adopted by ${this.owner}!` : `${this.name} is still searching for their forever home!` 
//     };
// };

// let zelda = new Animal('Zelda', 180726);
// let mochi = new Animal('Mochi', 200401);