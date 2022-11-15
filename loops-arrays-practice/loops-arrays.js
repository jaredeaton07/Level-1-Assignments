var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var count = 0

for(var i = 0; i < officeItems.length; i++){
    //if officeItems[i] strictly equals the string "computer"
    //count the number of "computer" using a counter
    //return a number
    
    if(officeItems[i] === "computer") {
        count++
    }
}
//gives us the final number
// console.log(count)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  //maybe create an if statement?

  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    //if person's age is less than 18
    //then console log the person is not old enough
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. ")
    }else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. ")
    }

    //else if person's age is greater than or equal to 18
    //then console log the person is old enough
  }