function get_form_data(commentator_name, article_name)
{
  console.log(commentator_name);
  console.log(article_name);
}

parameterList = {
  'api-key': '71b688b6fcaffe9ac59413b1d7de1a0c:1:70151851'
}

function get_random_comments()
{
  console.log("random button clicked");
  $.ajax({
    url: 'http://api.nytimes.com/svc/community/v2/comments/random.json',
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
  });
}

$(document).ready(function(){
  $("#search-random").click(function(){
    get_random_comments();
  });
});

$(document).ready(function(){
  $("#search-query").click(function(){
    get_form_data($('#commentator-name').val(), $('#article-name').val())
  });
});