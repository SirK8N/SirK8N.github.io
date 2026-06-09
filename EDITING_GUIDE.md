# How to Edit Your Website

This guide explains how to make changes to your Pig + Si website. The site is built with HTML (structure) and CSS (styling).

---

## Quick Overview

- **index.html** — The content and structure of your pages
- **style.css** — The styling, colors, and layout

---

## Adding a New Blog Post

### In `index.html`:

1. **Find the Blog Section** (search for `<section id="blog"`)
2. **Copy an existing post** block and paste it above the others
3. **Update the content:**

```html
<article class="post">
  <time datetime="2026-06-15">June 15, 2026</time>
  <h3>Your Post Title Here</h3>
  <div class="post-content">
    <p>Your main post content goes here.</p>
  </div>
  
  <div class="post-section">
    <h4 class="section-title">📺 Things we're watching</h4>
    <ul class="section-list">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </div>
  
  <div class="post-section">
    <h4 class="section-title">💝 Things we recommend</h4>
    <ul class="section-list">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </div>
  
  <div class="post-links">
    <a href="post3.html">Read more</a>
  </div>
</article>
```

**Key changes:**
- `datetime="2026-06-15"` — Change the date in both places
- `<time datetime=...>June 15, 2026</time>` — Display date
- `<h3>` — Your post title
- `<p>` — Main content
- Update list items in both sections
- `href="post3.html"` — Link to full post (optional)

---

## Adding Gallery Images (Featured Center & Sides)

### In `index.html`:

Find the gallery section and replace the placeholder image URLs:

```html
<a href="post1.html" class="featured-image-link">
  <img src="https://via.placeholder.com/600x400?text=Latest+Post" alt="..." class="featured-image">
</a>
```

**Change `src="..."` to your image URL:**
- Local file: `src="images/my-photo.jpg"`
- URL: `src="https://example.com/photo.jpg"`
- Also update the `alt="..."` text (describes image for accessibility)

### For Side Images:

```html
<img src="https://via.placeholder.com/200x300?text=Post+2" alt="Recipes and rhythms" class="gallery-image">
```

Same process — replace the `src` with your image path.

---

## Changing Navigation Links

### In `index.html`:

Find `<div class="nav-links">` and update:

```html
<div class="nav-links">
  <a href="#about">About</a>
  <a href="#gallery">Gallery</a>
  <a href="#blog">Blog</a>
</div>
```

- `href="#about"` — Links to section with `id="about"`
- Change text between `<a>` and `</a>` to rename a link
- Add new links: `<a href="#section-id">Link Name</a>`

---

## Changing Colors

### In `style.css`:

Find the `:root` section at the top:

```css
:root {
  color-scheme: light;
  --bg: #FFFFFF;
  --text: #333333;
  --border-blue: #4A90E2;
  --border-green: #2ECC71;
  --outline-blue: #E8F1FF;
  --outline-green: #E8F5E8;
}
```

- `--border-blue: #4A90E2;` — Change the blue outline color (use hex codes like #FF0000 for red)
- `--border-green: #2ECC71;` — Change the green outline color
- `--outline-blue: #E8F1FF;` — Change the light blue background
- `--outline-green: #E8F5E8;` — Change the light green background

**Find hex colors:**
- Use [color-hex.com](https://www.color-hex.com) to find hex codes
- Example: #FF0000 = red, #00FF00 = green, #0000FF = blue

---

## Changing Blog Post Box Styling

### In `style.css`:

Find `.post {` and modify:

```css
.post {
  border: 2px solid var(--border-blue);  /* Change to 3px, 4px, or remove border */
  background: white;                     /* Change background color */
  padding: 32px;                         /* Change spacing inside boxes */
  transition: all 0.3s ease;
}
```

- `border: 2px solid` — Change `2px` to make border thicker/thinner
- `background: white;` — Change to any color (like `#F5F5F5` for light gray)
- `padding: 32px;` — Change spacing inside the box

---

## Changing Gallery Image Sizes

### In `style.css`:

Find `.featured-image {` and `.gallery-image {`:

```css
.featured-image {
  display: block;
  width: 100%;
  height: 400px;      /* Change featured image height */
  object-fit: cover;
}

.gallery-image {
  display: block;
  width: 100%;
  height: 280px;      /* Change side image height */
  object-fit: cover;
}
```

- `height: 400px;` — Change the height of images
- `width: 100%;` — Keep this to fill the container

---

## Making the Side Images Stack (Mobile View)

The layout already responds to smaller screens. If you want to change when it stacks, find:

```css
@media (max-width: 960px) {
  .gallery-section {
    grid-template-columns: 1fr;
  }
}
```

- `max-width: 960px` — Change this number to adjust when layout changes

---

## Adjusting Spacing Between Sections

### In `style.css`:

Find `.content {` and change `gap: 60px;`:

```css
.content {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px;
  display: grid;
  gap: 60px;           /* Change this to add/reduce space between sections */
}
```

- Increase number = more space between sections
- Decrease number = less space

---

## Adding Hover Effects

### In `style.css`:

Find any `.element:hover {` section to see current effects:

```css
.featured-image-link:hover {
  box-shadow: 0 8px 24px rgba(74, 144, 226, 0.2);
  transform: translateY(-4px);  /* Move up on hover */
}
```

- `transform: translateY(-4px);` — Change `-4px` to move up/down (negative = up)
- `box-shadow:` — Add shadow effect on hover

---

## Common Changes Cheat Sheet

| What You Want | Where to Find It | How to Change |
|---|---|---|
| Change post title | `<h3>` in post block | Edit text between `<h3>` and `</h3>` |
| Change date | `<time datetime=...>` | Update date in both places |
| Add new list item | Inside `<ul>` | Add `<li>New item</li>` |
| Change blue color | `--border-blue:` in CSS | Change hex code (e.g., #4A90E2) |
| Make boxes bigger | `.post { padding:` | Increase padding value |
| Add more space | `.content { gap:` | Increase gap value |
| Hide element | Any CSS selector | Add `display: none;` |

---

## File Structure for Images

Create an `images/` folder in your project:

```
/images/
  post1.jpg
  post2.jpg
  post3.jpg
```

Then reference them in HTML:
```html
<img src="images/post1.jpg" alt="description">
```

---

## Need Help?

- **Color picker**: [color-hex.com](https://www.color-hex.com)
- **Image hosting**: [imgur.com](https://imgur.com) or [unsplash.com](https://unsplash.com)
- **Test changes**: Save files and refresh your browser (Ctrl+R or Cmd+R)

Happy editing! 📝
