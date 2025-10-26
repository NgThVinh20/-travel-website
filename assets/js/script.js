// menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-button-menu");
if(buttonMenuMobile){
  const menu=document.querySelector(".header .inner-menu");
  const overlay = menu.querySelector(".inner-overlay");
  // add class "active" for menu
  buttonMenuMobile.addEventListener("click", ()=>{
    menu.classList.add('active');
  })
  // remove class "active" of menu
  overlay.addEventListener("click", ()=>{
    menu.classList.remove('active');
  })
  const listButtonSubMenu = menu.querySelectorAll("ul > li");
  listButtonSubMenu.forEach(button => {
    // add class "active for li"
    button.addEventListener("click", ()=>{
      button.closest("li").classList.toggle("active");
    })
    //remove class "active" of li when click on overlay
    overlay.addEventListener("click", ()=>{
      button.closest("li").classList.remove("active");
  })
  } )
}
// end menu Mobile

// Box Address section-1
const boxAddressSection1=document.querySelector(".section-1 .inner-form .inner-address");
if(boxAddressSection1){
  // show/hide box suggest
  const input=boxAddressSection1.querySelector(".inner-input-group input");
  input.addEventListener("focus", ()=>{
    boxAddressSection1.classList.add("active")
  })
   input.addEventListener("blur", ()=>{
    boxAddressSection1.classList.remove("active")
  })

  // clicking event for each item
  const listItem = boxAddressSection1.querySelectorAll(".inner-suggest .inner-item");
  listItem.forEach(item=>{
    item.addEventListener("mousedown", ()=>{
      const title = item.querySelector(".inner-item-title").innerHTML.trim();
      input.value = title;
    })
  })
}
// End Box Address section-1