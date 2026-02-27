// Utility to export blogs from localStorage to JSON format
// Run this in browser console when you want to save your blogs

export const exportBlogsToJSON = () => {
  const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '{}');
  const jsonString = JSON.stringify(savedPosts, null, 2);
  
  // Create downloadable file
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'blogs.json';
  a.click();
  URL.revokeObjectURL(url);
  
  console.log('Blogs exported! Copy this to src/data/blogs.json:');
  console.log(jsonString);
  
  return jsonString;
};

// Make it available globally in development
if (import.meta.env.DEV) {
  (window as any).exportBlogs = exportBlogsToJSON;
}
