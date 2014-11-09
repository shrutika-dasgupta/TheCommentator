parameterList = {
  'api-key': '71b688b6fcaffe9ac59413b1d7de1a0c:1:70151851'
}

function get_form_data(commentator_name, article_name, date)
{
  console.log(commentator_name);
  console.log(article_name);
  console.log(date);

  if(date != '')
  {
    var date_array = date.split('/');
    if(date_array.length != 3)
    {
      console.log("Invalid Date");
    }
    else
    {
      var year = date_array[0];
      var month = date_array[1];
      var day = date_array[2];

      var date_str = year + month + day;

      if(year.length != 4 || month.length != 2 || day.length != 2)
      {
        console.log("invalid-date format");
      }
      else
      {
        console.log(date_str);

        $.ajax({
          url: ('http://api.nytimes.com/svc/community/v2/comments/by-date/'+date_str+'.json'),
          data: parameterList,
          dataType: 'json',
          method: 'GET',
          complete : function(data){
            console.log(data);
          },
          success: function(){
            console.log("success");
          },
          fail: function(){
            console.log("error");
          }
        });
      }
      
    }
  }

  if(article_name != '')
  {

  }

  if(commentator_name != '')
  {

  }
  /*$.ajax({
    url: '',
    data: parameterList,
    dataType: 'jsonp',
    complete : function(){
      console.log("complete");
    },
    success: function(){
      console.log("success");
    },
    error: function(){
      console.log("error");
    }
  });*/
}

function get_random_comments()
{
  console.log("random button clicked");
  $.ajax({
    type:'POST',
    url: 'http://api.nytimes.com/svc/community/v2/comments/random.json',
    data: parameterList,
    cache: true,
    contentType:'application/json',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp:false,
    complete : function(data){
      console.log(data);
      console.log("complete");
    },
    success: function(){
      console.log("success");
    },
    error: function(){
      console.log("error");
    }
  });
  //console.log(results);
}

$(document).ready(function(){
  $("#search-random").click(function(){
    get_random_comments();
  });
});

$(document).ready(function(){
  $("#search-query").click(function(){
    get_form_data($('#commentator-name').val(), $('#article-name').val(), $('#datepicker1').val())
  });
});