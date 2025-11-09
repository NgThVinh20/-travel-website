// Khởi tạo AOS
AOS.init({
  once: true
});
// menumobile
const buttonMenuMobile = document.querySelector(".header .inner-button-menu");
if(buttonMenuMobile){
  const menu=document.querySelector(".header .inner-menu");
  const overlay = menu.querySelector(".overlay");
  // add class "active" for menu
  buttonMenuMobile.addEventListener("click", ()=>{
    menu.classList.add('active');
    // Reset và refresh AOS animation
    const menuList = menu.querySelector('ul');
    menuList.classList.remove('aos-animate'); // xóa class animate cũ
    setTimeout(() => {
      menuList.classList.add('aos-animate'); // thêm lại để chạy animation
      AOS.refresh();
    }, 10);
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
// -----------------------------------------------------------------------------------------------------
// Box Address section-1
const boxAddressSection1=document.querySelector(".section-1 .inner-form .inner-address");
if(boxAddressSection1){
  // show/hide box suggest
  const input=boxAddressSection1.querySelector(".inner-input-group input");
  input.addEventListener("click", ()=>{
    boxAddressSection1.classList.toggle("active")
  })
   input.addEventListener("blur", () => {
    boxAddressSection1.classList.remove("active");
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

// input-calendar section-1


// -----------------------------------------------------------------------------------------------------

// box user section-1
const boxUserSection1=document.querySelector(".section-1 .inner-form .inner-box.inner-user");
if(boxUserSection1){
  const inputGroup = boxUserSection1.querySelector(".inner-input-group ")
  const input = inputGroup.querySelector("input")
  // show box
  inputGroup.addEventListener("click", ()=>{
    boxUserSection1.classList.toggle("active")
  }) 

  // hide box
  document.addEventListener("click",(event)=>{
    const clickHide = boxUserSection1.contains(event.target)
    if(!clickHide){
       boxUserSection1.classList.remove("active")
    }
  })

  // add number to input
  const updateQuantityInput = () => {
    const listBoxNumber = boxUserSection1.querySelectorAll(".inner-quantity .inner-number");
    const listNumber = [];
    listBoxNumber.forEach(boxNumber => {
      const number = parseInt(boxNumber.innerHTML);
      listNumber.push(number);
    })
    const value = `NL: ${listNumber[0]}, TE: ${listNumber[1]}, EB: ${listNumber[2]}`;
    console.log(value);
    input.value = value;
  }


  // click for button up

const listButtonUp = boxUserSection1.querySelectorAll(".inner-quantity .inner-up");
listButtonUp.forEach(button => {
  button.addEventListener("click", ()=>{
    const parent = button.closest(".inner-count");
    const boxNumber = parent.querySelector(".inner-number");
    const number = parseInt(boxNumber.innerHTML);
    boxNumber.innerHTML = number + 1;
    updateQuantityInput();
  })
})

// click for button down
const listButtonDown = boxUserSection1.querySelectorAll(".inner-quantity .inner-down");
listButtonDown.forEach(button => {
  button.addEventListener("click", ()=>{
    const parent = button.closest(".inner-count");
    const boxNumber = parent.querySelector(".inner-number");
    const number = parseInt(boxNumber.innerHTML);
    if(number>0){
      boxNumber.innerHTML = number - 1;
      updateQuantityInput();
    }
  })
})
}
// box user section-1
// -----------------------------------------------------------------------------------------------------

// clock experience section-2
const clockExpire = document.querySelector("[clock-expire]")
if(clockExpire){
  const listBoxNumber = clockExpire.querySelectorAll(".inner-number");
  const expireDateTimeString = clockExpire.getAttribute("clock-expire");
  const expireDateTime = new Date(expireDateTimeString);

   const updateClock =() => {
    const now = new Date();
    const remainingTime = expireDateTime - now;
    if(remainingTime > 0){
      const days = Math.floor(remainingTime / (24 * 60 * 60 *1000));
      const hours = Math.floor(remainingTime / (60 * 60 *1000) % 24);
      const minutes = Math.floor(remainingTime / (60 *1000) % 60);
      const seconds = Math.floor(remainingTime / (1000) % 60);
      listBoxNumber[0].innerHTML = days < 10 ? `0${days}` : days;
      listBoxNumber[1].innerHTML = hours < 10 ? `0${hours}` : hours;
      listBoxNumber[2].innerHTML = minutes < 10 ? `0${minutes}` : minutes;
      listBoxNumber[3].innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    }
    else{
      clearInterval(intervalClock);
    }
   };
   const intervalClock = setInterval(updateClock,1000);
} 
// clock experience section-2

// box filter page list tour
const buttonFilterMobile = document.querySelector(".section-9 .inner-button-filter")
if(buttonFilterMobile){
  const boxleft = document.querySelector(".section-9 .inner-left");
  buttonFilterMobile.addEventListener("click",()=>{
    boxleft.classList.add("active");
  })
  const overlay = boxleft.querySelector(".section-9 .overlay")
  overlay.addEventListener("click",()=>{
    boxleft.classList.remove("active");
  })
  const buttonFilter = boxleft.querySelector(".box-filter .inner-head i");
  buttonFilter.addEventListener("click",()=>{
    boxleft.classList.remove("active");
  })
}
// box filter page list tour

//box tour ìnfor
const boxTourInfor = document.querySelector(".box-tour-info");
if(boxTourInfor){
  const buttonViewAll = boxTourInfor.querySelector(".inner-read-more button");
  buttonViewAll.addEventListener("click", ()=>{
    if(boxTourInfor.classList.contains("active")){
      boxTourInfor.classList.remove("active");
      buttonViewAll.innerHTML = "Xem tất cả";
    }
    else{
      boxTourInfor.classList.add("active");
      buttonViewAll.innerHTML = "Ẩn bớt";
    }
  })
}
//box tour ìnfor


// Swiper Section 2
const swiperSection2 = document.querySelector(".section-2 .swiperSection2");
if(swiperSection2){
 new Swiper(".swiperSection2", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

  });
}
// Swiper Section 2

// Swiper Section 3
const swiperSection3 = document.querySelector(".section-3 .swiperSection3");
if(swiperSection3){
 new Swiper(".swiperSection3", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

  });
}
// Swiper Section 3

// box-images section-10
const boxImages10 = document.querySelector(".box-images");
if(boxImages10){
 const swiperImagesThumb = new Swiper (".swiperImagesThumb", {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      spaceBetween: 5,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
         breakpoints: {
        576: {
          spaceBetween: 10,
        },
      },
    });
    var swiperImagesMain = new Swiper(".swiperImagesMain", {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      spaceBetween: 10,
      thumbs: {
        swiper: swiperImagesThumb,
      },
    });
  }
// box-images section-10
// zoom section-10
const section10 = document.querySelector(".section-10");
new Viewer(section10);
// zoom section-10