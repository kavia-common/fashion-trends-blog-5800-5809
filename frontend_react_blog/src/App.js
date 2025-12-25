import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import "./App.css";
import "./index.css";

// Placeholder blog post data
const posts = [
  {
    title: "Summer 2024: Vibrant Colors & Bold Prints",
    slug: "summer-2024-vibrant-colors-bold-prints",
    date: "2024-05-01",
    excerpt: "Discover the hottest colors and print trends rocking fashion week this summer. From neon blues to oversized florals, get inspired.",
    image: "https://placehold.co/600x400/3b82f6/fff?text=Summer+2024",
    content: `<p>This summer, fashion is all about expressing yourself with vibrant hues and attention-grabbing prints. Think electric blue, hot pink, and citrus green. Oversized florals and geometric patterns dominate runways, while lightweight fabrics keep things breezy. Don't be afraid to mix patterns for a playful, confident look!</p>`
  },
  {
    title: "Chic Streetwear: Comfort Meets Style",
    slug: "chic-streetwear-comfort-meets-style",
    date: "2024-04-15",
    excerpt: "Streetwear continues to evolve—see how today’s influencers pair comfort with high-fashion pieces for a casual luxe vibe.",
    image: "https://placehold.co/600x400/06b6d4/fff?text=Streetwear",
    content: `<p>From relaxed cargo pants to cool bucket hats, streetwear remains a cornerstone of urban fashion. Layer oversized jackets with sleek trainers for that effortlessly stylish look. Accessorize with chunky silver chains or statement sunglasses to elevate your fit.</p>`
  },
  {
    title: "Minimalist Elegance: Less is More",
    slug: "minimalist-elegance-less-is-more",
    date: "2024-03-20",
    excerpt: "Minimalism never goes out of style. Explore how crisp lines, neutral palettes, and effortless pieces can make a statement.",
    image: "https://placehold.co/600x400/f9fafb/3b82f6?text=Minimalist",
    content: `<p>Simple silhouettes, neutral tones, and premium fabrics define the minimalist movement. Invest in well-structured blazers, tailored pants, and fuss-free accessories. The beauty of minimalist fashion is in its timeless versatility.</p>`
  },
];

// PUBLIC_INTERFACE
function NavBar() {
  return (
    <nav className="navbar">
      <div className="container navbar-brand">
        <Link to="/" className="nav-logo" style={{ color: "var(--primary-accent)" }}>FashionTrends</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link" style={{ color: "var(--primary-accent)" }}>Home</Link>
      </div>
    </nav>
  );
}

// PUBLIC_INTERFACE
function HomePage() {
  return (
    <main className="container home-container">
      <h1 className="page-title">Fashion & Trends Blog</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <article className="post-card" key={post.slug}>
            <Link to={`/post/${post.slug}`} className="post-image-link">
              <img src={post.image} alt={post.title} className="post-image" />
            </Link>
            <div className="post-content">
              <h2>
                <Link to={`/post/${post.slug}`} className="post-title-link">{post.title}</Link>
              </h2>
              <div className="post-date">{new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}</div>
              <p className="post-excerpt">{post.excerpt}</p>
              <Link to={`/post/${post.slug}`} className="read-more-btn">Read more &rarr;</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

// PUBLIC_INTERFACE
function PostDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="container">
        <h1>Post not found</h1>
        <button onClick={() => navigate("/")} style={{ color: "var(--primary-accent)" }}>
          Back to Home
        </button>
      </main>
    );
  }

  return (
    <main className="container post-detail-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      <img src={post.image} alt={post.title} className="post-detail-image" />
      <h1 className="post-detail-title">{post.title}</h1>
      <div className="post-detail-date">
        {new Date(post.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
      </div>
      <div className="post-detail-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");

  // Apply modern light theme and accent colors
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    // Set required custom CSS variables for accent, etc.
    document.documentElement.style.setProperty("--primary-accent", "#3b82f6");
    document.documentElement.style.setProperty("--success-accent", "#06b6d4");
    document.documentElement.style.setProperty("--bg-app", "#f9fafb");
    document.documentElement.style.setProperty("--surface-bg", "#ffffff");
    document.documentElement.style.setProperty("--text-main", "#111827");
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <Router>
      <div className="App" style={{ background: "var(--bg-app)", color: "var(--text-main)" }}>
        <NavBar />
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:slug" element={<PostDetailPage />} />
          <Route path="*" element={<main className="container"><h1>404 - Not found</h1></main>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
