// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe("shuffler", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining items.", () => {
     const colors1 = ['purple', 'blue', 'green', 'yellow', 'pink']
     const colors2 = ['chartreuse', 'indigo', 'periwinkle', 'ochre', 'aquamarine', 'saffron']
     expect(shuffler(colors1)).toContain('yellow', 'blue', 'pink', 'green')
     expect(shuffler(colors2)).toContain('aquamarine', 'saffron', 'indigo', 'periwinkle', 'ochre')
    
    })
})
// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function called shuffler that takes an array as an arguement.
//  create a variable in the array that will be the same as the argument minus the first index.
// make a for loop that will go through the array and randomize the index using the fisher yates method.
// return the new array without the first index and the rest of the indexes randomized
const shuffler = (array) => {
let shortArray = array.slice(1)
    for (let i = shortArray.length - 1; i > 0; i--) {
     let randomIndex = Math.floor(Math.random() * (i + 1))
     let arrayIndex = shortArray[i]
     shortArray[i] = shortArray[randomIndex]
     shortArray[randomIndex] = arrayIndex
    } 
    return shortArray
}
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("voteCounter", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
        expect(voteCounter(votes1)).toEqual(11)
        expect(voteCounter(votes2)).toEqual(-31)
    })
})
// b) Create the function that makes the test pass.
// Pseudo code:
// create  a function that takes an object as an arguement
// make two variables to be assigned the total number of down votes and one to hold the total number of upvotes
// make a conditional to subtract the smaller number of votes from the bigger number of votes and return the total tally

const voteCounter = (object) => {
    return object.upVotes - object.downVotes
}
