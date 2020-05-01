let instructor = {
    firstName:"Kelly",
    isInstructor:true,
    favoriateNumbers:[1,2,3,4]
}

// Object.keys(instructor)

// (3) ["firstName", "isInstructor", "favoriateNumbers"]



// Object,values(instructor)

// (3) ["Kelly", true, Array(4)]



// Object.entries(instructor)

// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ["firstName", "Kelly"]
// 1: (2) ["isInstructor", true]
// 2: (2) ["favoriateNumbers", Array(4)]
// length: 3
// __proto__: Array(0)



// instructor.hasOwnProperty("firstName")

// true