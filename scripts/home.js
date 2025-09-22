const menuIcon = document.querySelector('.header .menu-icon'); // main header icon
const drawerMenuIcon = document.querySelector('.side-drawer-header .menu-icon'); // drawer icon
const sideDrawer = document.getElementById('sideDrawer');
const overlay = document.querySelector('.overlay');

// function to open drawer
function openDrawer() {
  sideDrawer.classList.add('open');
  overlay.classList.add('active');
  console.log('Drawer opened');
}

// function to close drawer
function closeDrawer() {
  sideDrawer.classList.remove('open');
  overlay.classList.remove('active');
  console.log('Drawer closed');
}

// toggle logic
function toggleDrawer() {
  if (sideDrawer.classList.contains('open')) {
    closeDrawer();
  } else {
    openDrawer();
  }
}

// attach listeners
menuIcon.addEventListener('click', toggleDrawer);
drawerMenuIcon.addEventListener('click', toggleDrawer);
overlay.addEventListener('click', closeDrawer); // click outside to close

