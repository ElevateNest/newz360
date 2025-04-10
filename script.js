const blogPosts = [
  {
    title: "The Future of Green Tech",
    content: "Explore how green technology is shaping the future of sustainable living, from energy to transportation."
  },
  {
    title: "Mindfulness in the Digital Age",
    content: "In a fast-paced world, finding stillness is a superpower. Here's how mindfulness helps restore balance."
  },
  {
    title: "Top 5 Books for Personal Growth",
    content: "Fuel your journey with these must-read books that will challenge your thinking and boost your mindset."
  }
];

const container = document.getElementById("blog-container");

blogPosts.forEach(post => {
  const postEl = document.createElement("div");
  postEl.className = "blog-post";

  postEl.innerHTML = `
    <h2 class="blog-title">${post.title}</h2>
    <p class="blog-content">${post.content}</p>
  `;

  container.appendChild(postEl);
});
