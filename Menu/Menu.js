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

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

/* -------------------------------------------------- */

/* !!!! - Is this what invokes Step 4's function / event listener?  */
window.addEventListener("load", function () {

/* Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM. */
  let hamburgerMenuImg = document.querySelector('.header .menu-button');

/* !!!! - Confused, what does this line do? */
  let bodyVar = document.querySelector('body');

/* Step 1a: Write a function that will create a menu component as seen below: */
/* Step 1b: The function takes an array as its only argument.*/
  function menuCreator(array) {

/* Step 2a: Inside this function, iterate over the array creating a list item <li> element for each item in the array. */
/* Step 2b: Add those items to the <ul> */

    const menu = document.createElement('div');
    const menuUl = document.createElement('ul');
    const menuStudents = document.createElement('li');
    const menuFaculty = document.createElement('li');
    const menuWhatsNew = document.createElement('li');
    const menuTechTrends = document.createElement('li');
    const menuMusic = document.createElement('li');
    const menuLogOut = document.createElement('li');

    menu.appendChild(menuUl);
    menuUl.appendChild(menuStudents);
    menuUl.appendChild(menuFaculty);
    menuUl.appendChild(menuWhatsNew);
    menuUl.appendChild(menuTechTrends);
    menuUl.appendChild(menuMusic);
    menuUl.appendChild(menuLogOut);

/* Step 6: Add the menu component to the DOM. */

    menu.classList.add('menu');

/* !!!! - Why are we mapping over all of the items in the array? */
/* !!!! - Is this how we create the 6 items in the drop down menu? */

    menuStudents.textContent = array['0'];
    menuFaculty.textContent = array['1'];
    menuWhatsNew.textContent = array['2'];
    menuTechTrends.textContent = array['3'];
    menuMusic.textContent = array['4'];
    menuLogOut.textContent = array['5'];


/* Step 4a: Add a click event listener to the menu button. */
/* Step 4b: When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class). */
/* Step 5a: return the menu component. */

    hamburgerMenuImg.addEventListener('click', function () {
      menu.classList.toggle('menu--open');
    });
    return menu
  }

/* !!!! - Confused, what does this line do? */
  let finishedMenu = menuCreator(menuItems);
  bodyVar.appendChild(finishedMenu);
});

/* -------------------------------------------------- */