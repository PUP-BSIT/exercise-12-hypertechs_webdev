let buttonComment = document.getElementById ("button_comment"),
  formCommentText = document.getElementById ("form_comment_text"),
  formCommentName = document.getElementById ("form_comment_name"); 

function enableButton () {
  buttonComment.disabled = formCommentName.value.length < 1 || 
    formCommentText.value.length < 1 ? true : false; 
}
