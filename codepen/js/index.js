function moveAbout(){
  
  scroll(630,870);
}

function moveExperience(){
  
  scroll(640.888916015625,1258.77783203125);
}

function movePortfolio(){
  
  scroll(652.1527709960938,1623.6666259765625);
}

$("#about-header").on("click",function(){
  
  moveAbout();
  
})

$("#experience-header").on("click",function(){
  
  moveExperience();
  
})

$("#portfolio-header").on("click",function(){
  
  movePortfolio();
  
})

/*
$("#experience-header").click(function(){
    var x = $("#PortfolioMe").offset();
    alert(" Left: " + x.left + "Top: " + x.top  );
}); 

偵測元素確切位址*/