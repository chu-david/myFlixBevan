$(document).ready(function(){

    console.log("ready");

    var data;
   
    $.ajax({
        
        url:"imdb5000datasetcleaned.csv", 
        dataType:"text", 
        async: false,
        
        success: function(result){
            
            var JSONfile = csvJSON(result);
            
            data = JSON.parse(JSONfile);
            
        }   
    })

    console.log(data);

    function csvJSON(csv){

        var lines=csv.split("\n");
  
        var result = [];
  
        var headers=lines[0].split(",");
  
        for(var i=1;i<lines.length;i++){
  
            var obj = {};
            var currentline=lines[i].split(",");
  
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
  
            result.push(obj);
  
        } 
        //return result; //JavaScript object
        return JSON.stringify(result); //JSON
      }
})