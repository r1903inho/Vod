const postsSection = document.getElementById("posts");

function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (title && content) {
    const post = document.createElement("div");
    post.classList.add("post");

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const p = document.createElement("p");
    p.textContent = content;

    post.appendChild(h3);
    post.appendChild(p);
    postsSection.prepend(post);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  } else {
    alert("Preencha o título e o conteúdo!");
  }
}
