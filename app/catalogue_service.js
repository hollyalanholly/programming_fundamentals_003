// eslint-disable-next-line no-unused-vars
const catalogue = [
  {title: "The Catcher in the Rye", author: "J.D. Salinger", quantity: 10},
  {title: "Dracula", author: "Bram Stoker", quantity: 0},
  {title: "Between the Assassinations", author: "Aravind Adiga", quantity: 9},
  {title: "Wolf Hall", author: "Hilary Mantel", quantity: 33},
  {title: "Bring Up The Bodies", author: "Hilary Mantel", quantity: 31},
  {title: "A Place of Greater Safety", author: "Hilary Mantel", quantity: 11},
  {title: "Giving Up the Ghost", author: "Hilary Mantel", quantity: 8},
  {title: "The Assassination of Margaret Thatcher", author: "Hilary Mantel", quantity: 43},
  {title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", quantity: 12},
  {title: "Conversations With Friends", author: "Sally Rooney", quantity:  1},
  {title: "Normal People", author: "Sally Rooney", quantity: 2},
  {title: "Everything I Never Told You", author: "Celeste Ng", quantity: 6},
  {title: "2666", author: "Robert Bolaño", quantity:  17},
  {title: "By Night In Chile", author: "Robert Bolaño", quantity:  8},
  {title: "A Tale of Two Cities", author: "Charles Dickens", quantity:  3},
  {title: "Oliver Twist", author: "Charles Dickens", quantity: 7},
  {title: "Great Expectations", author: "Charles Dickens", quantity:  1},
  {title: "The Blind Assassin", author: "Margaret Atwood", quantity:  8},
  {title: "Why Be Happy When You Could Be Normal?", author: "Jeanette Winterson", quantity: 19},
  {title: "The Origin of Species", author: "Charles Darwin", quantity: 50},
];

function countBooksByAuthor(author) {
  let count = 0;
  for (let i=0; i < catalogue.length; i++) {
    if(catalogue[i].author === author) {
    count++;
  }
}
return count;
};

function checkBookByTitle(title) {
  // go into every array
   for (let i=0; i < catalogue.length; i++) {
     //if find book say true
    if(catalogue[i].title === title) {
      return true;
  }
}
  //else say false
  return false; 
}

function countBooksByFirstLetter(letter) {
  //Need to go thrugh each item in array
  //Find title
  //Get the first letter
  //count how many instances of the first letter there is
  
  let count = 0;
    for (let i = 0; i < catalogue.length; i++) {
        if (catalogue[i].title.charAt(0).toLowerCase() === letter.toLowerCase()) {
            count++;
        } 
      }
      return count
  }

function getQuantity(title) {
  // if it sees the title then return the amount in stock
  for (let i = 0; i < catalogue.length; i++) {
    if(catalogue[i].title === title) {
      return catalogue[i].quantity
    }
}
}
function getBooksByAuthor(author) {
  // Takes author and makes an array of all the books that author writes.
  //need to generate a new array
  //that array will house the books by that author
  //for every thing in that loop
  let bookHouse= [];
  for (let i = 0; i < catalogue.length; i++) {
    if(catalogue[i].author)
    bookHouse.push(catalogue[i]);
}
return bookHouse;
}

function checkQuantity(title, quantity) {
  //goes into each item in the object and find the title.  If the title is there AND the quantity is >= quantity 
  //return TRUE
  // if not return false.
  for (let i = 0; i < catalogue.length; i++) {
    if(catalogue[i].title === title && catalogue[i].quantity>=quantity) {
      return true;
    }
}
return false;
}

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};
