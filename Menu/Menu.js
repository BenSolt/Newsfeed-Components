/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/



//CLICK EVENT

const menuBtn = document.querySelector(".menu-button");

const menubox = document.createElement('div');

// For Each 

menubox.forEach(function (array) {
  const item = document.createElement('li');
  item.textContent = array;
  menubox2.appendChild(item);
});







function createMenu(cb){


// defined new elements


const menubox2 = document.createElement('ul');


//Structure of elements

menu.appendChild(item);






//  click Menu btn

 menuBtn.addEventListener('click', () => {
  console.log('MENU Open')
menubox.classList.toggle(".menu--open");

});



  
return menuBtn
}



  