const replyDisplayHandler = async (event) => {
  event.preventDefault();
  document.getElementById('reply-container').style.display = 'block';
};

document.getElementById('reply-btn').addEventListener('click', replyDisplayHandler);
