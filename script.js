
     $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } ); $(document).ready(function(){
        $("#listbutton").click(function(){
            $("#listul").append("<li class=\"li1\">list item</li>"); 
        });
    });