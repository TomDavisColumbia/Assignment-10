<!-- I chose this site to replicate in a way: http://www.nydailynews.com/ --!>

for (var i=0; i<dailyNews.length; i++) {
    var dataRow = dailyNews[i];
    	
    	var	template = $('<div class="quoteContainer">'+
                 '<div class="headline">'+dataRow.headline+'</div>'+
                 '<div class="readMore">Read More</div>'+
                 '<div class="moreInfo">'+dataRow.moreInfo+'</div>'+ // here I basically removed the previous Guardian data and replaced it with Daily News stories--!>
             '</div');
           
    $('#dataContainer').append(template); 
    
    	var readMore = template.find(".readMore")
   		    readMore.on('click', toggleInfo);
   	
 }

    
    function toggleInfo(e){
          var container = $(e.target).parent();
          
           if($(container).hasClass("expanded")){   //quoteContainer has class .expanded (you can see content), so remove content
           
             $(container).removeClass("expanded"); //<!--Decided to use the same functionality of hiding and dropping more information --!>
             
		}else{
			
			$(container).addClass('expanded');
		
		
		}
	
	}