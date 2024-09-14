const searchForm = document.querySelector(".search-form");
const favPhotos = document.querySelector(".fav-photos-container");
const navbar = document.querySelector(".navbar");
 /* buttons */

const searchBtn = document.querySelector("#search-btn");
const favBtn = document.querySelector("#fav-btn");
const menuBtn = document.querySelector("#menu-btn");


searchBtn.addEventListener("click",function(){
   searchForm.classList.toggle("active");
   document.addEventListener("click",function(e){
      if(
         !e.composedPath().includes(searchBtn) &&
         !e.composedPath().includes(searchForm)
      ) {
         searchForm.classList.remove("active")
      }
   })
}); 


favBtn.addEventListener("click",function(){
   favPhotos.classList.toggle("active");
   document.addEventListener("click",function(e){
      if(
         !e.composedPath().includes(favBtn) &&
         !e.composedPath().includes(favPhotos)
      ) {
         favPhotos.classList.remove("active");
      }
   })
});


menuBtn.addEventListener("click",function(){
   navbar.classList.toggle("active");
   document.addEventListener("click",function(e){
      if(
         !e.composedPath().includes(menuBtn) &&
         !e.composedPath().includes(navbar)
      ) {
         navbar.classList.remove("active");
      }
   })
});


