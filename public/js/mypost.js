const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-contents').value.trim();
    if (title && contents) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, contents }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace(`/profile`);
      } else {
        alert('Failed to update post');
      }
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};
const editDisplayHandler = async (event) => {
  event.preventDefault();
  document.getElementById('edit-container').style.display = 'block';
};

document.getElementById('edit-btn').addEventListener('click', editDisplayHandler);
document.querySelector('.post-edit-submit').addEventListener('click', editButtonHandler);
document.querySelector('.post-delete-btn').addEventListener('click', delButtonHandler);
