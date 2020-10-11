$(document).ready(function() {

    $(".vid1")
    
    .on("mouseover", function(event) {
      
      this.play();
      
      
  
    })
    
    .on('mouseout', function(event) {

      
      $(".vid1").get(0).currentTime = 0;
      this.pause();
     
    

    })


  })

  $(document).ready(function() {
    $(".vid2").on("mouseover", function(event) {
      this.play();
      
  
    }).on('mouseout', function(event) {
      $(".vid2").get(0).currentTime = 0;
      this.pause();
     
      
  
    })
  });
  $(document).ready(function() {
    $(".vid3").on("mouseover", function(event) {
      this.play();
      
  
    }).on('mouseout', function(event) {
      $(".vid3").get(0).currentTime = 0;
      this.pause();
     
  
    })
  })