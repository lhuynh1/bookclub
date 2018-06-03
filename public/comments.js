$(document).ready(function() {
  $("button.deleteBtn").on('click', function(event) {
    let button = event.currentTarget;
    let id = button.getAttribute('data-comment-id');
    let url = "/comments/" + id;
    $.ajax({
      url: url,
      type: 'DELETE',
      success: function(result) {
        alert("Comment deleted!");
        window.location.reload();
      }
    });
  });
  
  // $(".createTopic").on("click", function(event) {
  //   let url = window.location.href;
  //   window.location.replace(url + "/create");
  // })
});
