// 2.Task: Object Manipulation

const books = [{title:"Making India Awesome", year: 1940, author:"Chetan Bhagat"},{title:"A Sense of Time", year:1934, author:"H.S. Vatsyayan",},{title: "Akbarnama", year:1932, author:"Abul Fazl"},{title: "Days of My Years", year:1925, author:"H.P. Nanda"}, {title:"Lipika", year:1910, author:"Rabindranath Tagore"}];

const authorName = (arr)=>{
    const res =  arr.map((book)=> book.title)
    console.log(res)
}

authorName(books)


// 4.Task: Sorting Objects

const cars = [
    {
    make: 'Nissan',
    model: 'Altima',
    year: 2022
  },
  {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
  },
  {
    make: 'Honda',
    model: 'Accord',
    year: 2019
  },
  {
    make: 'Ford',
    model: 'Mustang',
    year: 2021
  },
  {
    make: 'Chevrolet',
    model: 'Malibu',
    year: 2018
  },
  
];

const sortAsc = (carArr)=>{
    const res = carArr.sort((a,b)=> a.year-b.year)
    console.log(res)
}

sortAsc(cars)


// 6.Task: Array Reduction
const nums = [1,2,3,4]

const sumOfEvenNumber = (numArr)=>{
    const res = numArr.reduce((sum, curr)=> {
        if(curr%2===0){
            return curr+sum
        }
        return sum;
    },0);
    console.log(res)
}

sumOfEvenNumber(nums)

// 8. Task: Unique Values


const numbers = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 5, 9, 10, 6];
const  getUniqueNumbers = (arr) =>{
  const uniqueNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueNumbers.indexOf(arr[i]) === -1) {
      uniqueNumbers.push(arr[i]);
    }
  }
  console.log(uniqueNumbers);
}

getUniqueNumbers(numbers)


// 09. Task: Find Maximum Value

const getMaximumValue = (arr)=>{
    let maxVal = arr[0];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element>maxVal){
            maxVal = element;
        }
    }
    console.log(maxVal)
}

getMaximumValue(numbers)