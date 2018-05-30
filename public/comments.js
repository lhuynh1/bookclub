$(document).ready(function() {
  $("button.deleteBtn").on('click', function(event) {
    let button = event.currentTarget;
    let id = button.getAttribute('data-comment-id');
    let url = "/comments/" + id;
    $.ajax({
      url: url,
      type: 'DELETE',
      success: function(result) {
        alert("deleted");
        window.location.reload();
      }
    });
  });
});
