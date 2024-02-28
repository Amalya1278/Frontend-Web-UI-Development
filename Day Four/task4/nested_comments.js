const comments = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: [] 
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "This is an independent comment",
      parentId: null,
      replies: []
    },
  ];
  
  function generateComment(comment, level) {
    const commentDiv = document.createElement('div'); //sarqenk div u ira mej gcenk commentnery
    commentDiv.classList.add('comment');
    commentDiv.style.marginLeft = level * 20 + 'px'; 
    
    const commentText = document.createElement('p');
    commentText.textContent = comment.text;
    commentDiv.appendChild(commentText); //texty gcenk mejy
    
    if (comment.replies.length > 0) {   //payasxanneri hamar stugum
      comment.replies.forEach(reply => {
        const replyDiv = generateComment(reply, level + 1);
        commentDiv.appendChild(replyDiv);
      });
    }
    
    return commentDiv;
  }
  
  function displayComments(commentsArray, container, level) {
    commentsArray.forEach(comment => {    // frruma commentnerneri vrov u kanchum verevi funkcian 
      const commentDiv = generateComment(comment, level);
      container.appendChild(commentDiv);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const commentsContainer = document.getElementById('commentsContainer');
    displayComments(comments, commentsContainer, 0);
  });
  