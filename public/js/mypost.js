const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
    });
    if (response.ok) {
      document.location.replace(`/api/posts/${id}`);
    } else {
      alert('Failed to delete post');
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

document.querySelector('.post-edit-btn').addEventListener('click', editButtonHandler);
document.querySelector('.post-delete-btn').addEventListener('click', delButtonHandler);
