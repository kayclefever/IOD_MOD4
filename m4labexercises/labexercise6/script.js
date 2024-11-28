const postsContainer = document.getElementById("posts-container");
const postForm = document.getElementById("postForm");
const postLimitInput = document.getElementById("postLimit");
const fetchPosts = async (limit) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    if (!response.ok) throw new Error("Failed to fetch posts using Fetch API");
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error(error);
    displayError("Fetch API", error);
  }
};
const fetchPostsWithAxios = async (limit) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    displayPosts(response.data);
  } catch (error) {
    console.error(error);
    displayError("Axios", error);
  }
};
const displayPosts = (posts) => {
  postsContainer.innerHTML = "";
  posts.forEach((post) => {
    const postCard = `
      <div class="col-md-4 my-3">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
          </div>
        </div>
      </div>`;
    postsContainer.innerHTML += postCard;
  });
};

const displayError = (method, error) => {
  postsContainer.innerHTML = `
    <div class="alert alert-danger text-center">
      Failed to load posts using ${method}. Error: ${error.message}
    </div>`;
};

postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const limit = parseInt(postLimitInput.value) || 10;
  fetchPostsWithAxios(limit);
});

document.addEventListener("DOMContentLoaded", () => {
  const defaultLimit = 10;
  fetchPostsWithAxios(defaultLimit);
});
