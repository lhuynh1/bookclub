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
  
  $("#topicDelete").on('click', function(event) {
    let button = event.currentTarget;
    let id = button.getAttribute('data-discussion-id');
    let url = "/discussions/" + id;
    $.ajax({
      url: url,
      type: 'DELETE',
      success: function(result) {
        alert("Comment deleted!");
        window.location.reload();
      }
    });
  });
});
