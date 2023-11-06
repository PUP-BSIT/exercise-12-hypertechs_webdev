function enableButton () {
    let buttonComment = document.getElementById ("button_comment");
    let formCommentText = document.getElementById ("form_comment_text");
    let formCommentName = document.getElementById ("form_comment_name");

    if (formCommentName.value.length > 0 &&
        formCommentText.value.length > 0) {
        buttonComment.disabled = false;
        console.log (formCommentText.value.length);
    } 
    else {
        buttonComment.disabled = true;
    }
    
}
