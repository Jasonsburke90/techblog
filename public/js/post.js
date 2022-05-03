const newReplyHandler = async (event) => {
  event.preventDefault();

  const reply_contents = document.querySelector('#reply-contents').value.trim();
  const post_id = event.target.value;
  console.log(reply_contents);
  if (reply_contents && post_id) {
    const response = await fetch(`/api/replies/${post_id}`, {
      method: 'POST',
      body: JSON.stringify({ reply_contents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert('Failed to create reply');
    }
  }
};

const replyDisplayHandler = async (event) => {
  event.preventDefault();
  document.getElementById('reply-container').style.display = 'block';
};

document.querySelector('.reply-submit-btn').addEventListener('click', newReplyHandler);

document.getElementById('reply-btn').addEventListener('click', replyDisplayHandler);
