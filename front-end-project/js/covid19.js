// scroll
var top = document.getElementById("totop");
window.onscroll = function () {
  if (this.scrollY >= 300) {
    var top = document.getElementById("totop");
    top.classList.add("show");
  } else {
    var top = document.getElementById("totop");
    top.classList.remove("show");
  }
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

top.onclick=function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
};

// // start accordion list
// var acc = document.getElementsByClassName("accordion");
// var i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
// // end accordion list
// // strat section11
// var disease = document.getElementById("disease");
// var title = document.getElementById("title1");
// var subject = document.getElementById("subject1");
// disease.addEventListener("click", click);
// function click() {
//   title1.innerHTML = `<p style="color:#2a81ea;font-size:17px;font-weight:bold;">What is a novel coronavirus?</p>`
//   subject1.innerHTML = `<p style=" font-size:15px;color: #3d4b69;line-height: 1.5em;margin-bottom: 20px;">On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’ stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly, this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”.</p>
//  <p style="color: #3d4b69;line-height: 1.5em;margin-bottom: 20px;font-size:15px;">A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.</p>`

//   if (subject.style.display === "block") {
//     subject.style.display = "none";
//   } else {
//     subject.style.display = "block";
//   }
// }
// // sticky navbar
 var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

