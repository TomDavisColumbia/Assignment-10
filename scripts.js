for (var i=0; i<dailyNews.length; i++) {
    var rowData = dailyNews[i];
    
    var template = $('<div class="quoteContainer">'+
                 '<div class="headline">'+rowData.headline+'</div>'+
                 '<div class="readMore">Read More</div>'+   <!-- here I basically removed the previous Guardian data and replaced it with Daily News stories--!>
                 '<div class="moreInfo">'+
                     '<div class="moreInfo">'+rowData.moreInfo+'</div>'+
                  
              '</div>'+
           '</div>');
           
           
    $(template).find(".readMore").on("click", toggleContent);
    
    function toggleContent(e) {
          $quoteContainer = $(this).parent();
          
          if ($quoteContainer.hasClass("expanded")) {   //quoteContainer has class .expanded (you can see content), so remove content
              $quoteContainer.removeClass("expanded"); 
         } else { //quoteContainer does not have class expanded (you can't see content), so show content!
             $quoteContainer.addClass("expanded");
             
         }
    }      
    
    $('#dataContainer').append(template); 
           
}


for (var i=0; i<story.length; i++) {
    var rowData = story[i];
    
    var template = $('<div class="quoteContainer">'+
                 '<div class="story">'+rowData.story+'</div>'+
                 '<div class="readMore">Read More</div>'+
                 '<div class="moreInfo">'+
                     '<div class="moreInfo">'+rowData.moreInfo+'</div>'+
                  
              '</div>'+
           '</div>');
           
           
    $(template).find(".readMore").on("click", toggleContent);
    
    function toggleContent(e) {
          $quoteContainer = $(this).parent();
          
          if ($quoteContainer.hasClass("expanded")) {   //quoteContainer has class .expanded (you can see content), so remove content
              $quoteContainer.removeClass("expanded"); 
         } else { //quoteContainer does not have class expanded (you can't see content), so show content!
             $quoteContainer.addClass("expanded");
             
         }
    }      
    $('#dataContainer').append(template); 
           
}
