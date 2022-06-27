// Here is where you will write JavaScript code to answer the following questions.

// Your job is to read the problem and fill in the missing code or function.

// This JavaScript file will be running on the index.html so to see your 
// output you  will need to use live server and then use F-12 to open the 
// Google developer tools.

// To test your code we will run the main function that I have provided. 
// In addition notice that the main function is called at the end of the file 
// and it includes test cases to check your code. Feel free to add your own
// test cases to further test your code. 

// Question 1
//  We are looping through another array of ints and we are calculating the sum
// and RETURNING the sum
const arraySum = (array) =>
{
    
}

// Question 2
// We are going to loop through an array of ints and RETURN an array of even numbers
// from that array.
// Here is a resource for this problem https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const evensOnly = (array) =>
{
    
}

// Question 3
// Check if all the numbers of the int array are even. RETURN true if they
// else RETURN false
const allEvens = (array) =>
{
    
}

// Question 4
// Use the following map to solve this question
let myMap = new Map();
// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, 
// return the final value of X after performing all the operations.
const mapPractice = (array) =>
{
   
}

// Question 5
// You are given an array of integers return the greatest int.
const greatestInt = (array) =>
{
     
}

// Question 6
// You are given an m x n integer grid accounts where accounts[i][j] 
// is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
// Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. 
// The richest customer is the customer that has the maximum wealth.
// Use this to get deeper understanding of 2D arrays
// https://www.geeksforgeeks.org/multidimensional-array-in-javascript/
const greatestWealth =  (twoDArray) =>
{
   
}

// Now we will move onto object manipulation
// Use these resources for help
// https://www.w3schools.com/js/js_classes.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// Use the following class definition to answer the following questions.
class Company
{
    constructor(companyName, city, numberOfEmployees, positions, sponsors)
    {
        this.companyName = companyName;
        this.city = city;
        this.numberOfEmployees = numberOfEmployees;
        this.positions = positions;
        this.sponsors = sponsors;
    }
}

// Here is example of what the company object will look like
const myCompany = new Company(
    "Bingo",
    "Los Angeles",
    420,
    [["developer#1", false], ["developer#2", true], ["developer#3", true], 
["developer#4", false], ["janitor#1", true], ["janitor#2", true], ["mascot", false]],
    ["Amazon", "Google", "Facebook"]
)

// Question 7
// Using the two companies passed return if they are in the same city
const sameLocation = (company1, company2) =>
{

}

// Question 8
// Using the two companies passed return an array of the same sponsors for both
// companies
const sameSponsors = (company1, company2) =>
{

}

// Question 9
// Using a company return an array of the positions available. Note if the position has true
// it means it is open.
const openPositions = (company) =>
{

}

// Question 10
// Using two companies passed in create a new company out of them
// For the company name combine both names with a space
// For the locations pick the location with greatest length if tie pick company1 location
// For the numberOfEmployees sum them up
// For the position array merge the two arrays and if any position is available for example
// company1 has developer#1 open and company2 has developer#1 closed the new company will
// have developer#1 closed
// in addition if both companies have developer#1 closed check if there is opening for developer#2 that can't
// be filled by company1 or company2 and put that developer on that position
// For sponsors combine the array and exclude duplicates.
const mergeCompanies = (company1, company2) =>
{

}

const main = () =>
{
    let array1 = [2, 4, -1, 3, 9];
    let array2 = [1, 3, 1, 4, 2, 0, 24, -19]
    let sum = arraySum(array1);
    let sum2 = arraySum(array2);
    if(sum !== 17 && sum2 !== 16)
    {
        console.log("Question 1 is wrong");
    } 
    else
    {
        console.log("Question 1 is right");
    }

    let array3 = [1, 2, -2, 4, 7, 9];
    let array4 = [1, 2, 8, 9, 7, 0];
    let evens1 = evensOnly(array3);
    let evens2 = evensOnly(array4);
    function arrayEquals(a, b) {
        return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index]);
      }
      if(arrayEquals(evens1, [2,-2,4]) && arrayEquals(evens2,[2,8,0]))
      {
        console.log("Question 2 is right.");
      }
      else
      {
        console.log("Question 2 is wrong");
      }

      let array5 = [0, 2, 4, 6, -8];
      let array6 = [0, 2, 4, 6, 9];
      let result1 = allEvens(array5);
      let result2 = allEvens(array6);
      if(result1 === true && result2 === false)
      {
        console.log("Question 3 is right.")
      }
      else
      {
        console.log("Question 3 is wrong.")
      }

      let array7 = ["--X", "--X", "X++", "X--", "X++", "X--"];
      let array8 = ["X++", "++X", "--X", "X++", "++X", "X--"];
      let xSum1 = mapPractice(array7);
      let xSum2 = mapPractice(array8);
      if(xSum1 === -1 && xSum2 === 2)
      {
        console.log("Question 4 is right.")
      }
      else
      {
        console.log("Question 4 is wrong.")
      }

      let array9 = [-420, -2, -3, -4, -5, -1];
      let array10 = [1, 2, 3, 10, -1, -9, 4];
      let max1 = greatestInt(array9);
      let max2 = greatestInt(array10);
      if(max1 === -1 && max2 === 10)
      {
        console.log("Question 5 is right.")
      }
      else
      {
        console.log("Question 5 is wrong.")
      }

      let array11 = [[1, 4, 5, 9], [10, 1, 2], [1, 2, 2, 1, 20]];
      let array12 = [[1, 3, 2], [0, 2, 3, 5], [1, 2], [4]];
      let wealth1 = greatestWealth(array11);
      let wealth2 = greatestWealth(array12);
      if(wealth1 === 26 && wealth2 === 10)
      {
        console.log("Question 6 is right.");
      }
      else
      {
        console.log("Question 6 is wrong.")
      }

    // For question 7-10 we will be using these two companies
      let myCompany1 = new Company(
        "Bobo",
        "San Diego",
        82,
        [["developer#1", true], ["developer#2", true], ["developer#3", false], 
        ["developer#4", false], ["janitor#1", true], ["janitor#2", true], ["mascot", false]
        ["cook#1", true], ["cook#2", false]],
        ["Amazon", "Google"]
      )

     let myCompany2 = new Company(
        "Hot",
        "Houston",
        103,
        [["developer#1", false], ["developer#2", true], ["developer#3", true], 
        ["developer#4", false], ["janitor#1", true], ["janitor#2", false], ["mascot", true]
        ["cook#1", true], ["cook#2", false]],
        ["Amazon", "Google", "Microsoft", "Netflix"]
     )

    if(sameLocation(myCompany1, myCompany2) === false)
    {
        console.log("Question 7 is right.")
    }
    else
    {
        console.log("Question 7 is wrong.")
    }

    if(arrayEquals(sameSponsors(company1, company2), ["Amazon", "Google", "Microsoft", "Netflix"])
    === true)
    {
        console.log("Question 8 is right.")
    }
    else
    {
        console.log("Question 8 is wrong.")
    }

    if(arrayEquals(openPositions(company1), ["developer#3", "developer#4","mascot","cook#2"]) 
    === true)
    {
        console.log("Question 9 is right.")
    }
    else
    {
        console.log("Question 9 is wrong.")
    }

    const array2dEqual = (anArray1, anArray2) => 
    {
        for(let i = 0; i < anArray1.length; i++)
        {
            for(let j = 0; j < anArray1[i].length; j++)
            {
                if(anArray1[i][j] !== anArray2[i][j])
                {
                    return false;
                }
            }
        }
        return true;
    }

    const companiesEqual = (company1, company2) =>
    {
        return(
            (company1.city === company2.city) && 
            (company1.city === company2.city) &&
            (company1.numberOfEmployees === company2.numberOfEmployees) &&
            (array2dEqual(company1.positions, company2.positions)) &&
            (arrayEquals(company1.sponsors,company2.sponsors))
        )
    }

    let solutionCompany = new Company(
        "Bobo Hot",
        "San Diego",
        185,
        [["developer#1", true], ["developer#2", true], ["developer#3", true], 
        ["developer#4", true], ["janitor#1", true], ["janitor#2", true], ["mascot", true]
        ["cook#1", true], ["cook#2", true]],
        ["Amazon", "Google", "Microsoft", "Netflix"]
    )

    if(companiesEqual(mergeCompanies()))
}
