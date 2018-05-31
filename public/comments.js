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

  $("button.updateBtn").on("click", function(event) {
    let button = event.currentTarget;
    let id = button.getAttribute('data-comment-id');
    let url = "/comments/" + id
    window.location.replace("http://localhost:8080" + url);
  });
});
