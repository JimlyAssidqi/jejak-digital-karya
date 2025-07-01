import Navigation from "@/components/Navigation";
import { Calendar, Edit, Plus, Trash2, User, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedPostId = searchParams.get('post');
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [newPost, setNewPost] = useState({ title: "", content: "", excerpt: "" });
  
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Memulai Karir sebagai Web Developer di 2024",
      excerpt: "Tips dan panduan lengkap untuk memulai karir sebagai web developer di era modern dengan teknologi terkini.",
      content: "Dalam artikel ini, saya akan berbagi pengalaman dan tips untuk memulai karir sebagai web developer di tahun 2024.\n\nDunia web development terus berkembang pesat. Teknologi-teknologi baru bermunculan setiap tahunnya, mulai dari framework JavaScript seperti React, Vue, dan Angular, hingga teknologi backend seperti Node.js, Python, dan Go.\n\nBerikut adalah beberapa langkah yang dapat Anda ikuti:\n\n1. **Pelajari HTML, CSS, dan JavaScript** - Ini adalah fondasi dari semua web development. Tanpa menguasai ketiga teknologi ini, akan sulit untuk melangkah ke tahap selanjutnya.\n\n2. **Pilih Framework atau Library** - Setelah menguasai dasar-dasar, pilih satu framework untuk dipelajari secara mendalam. React adalah pilihan yang populer saat ini.\n\n3. **Buat Portfolio** - Kumpulkan proyek-proyek yang telah Anda buat dalam sebuah portfolio. Ini akan menjadi bukti kemampuan Anda kepada calon employer.\n\n4. **Networking** - Bergabunglah dengan komunitas developer, baik online maupun offline. LinkedIn, GitHub, dan Discord adalah platform yang bagus untuk memulai.\n\n5. **Terus Belajar** - Teknologi web terus berkembang, jadi pastikan Anda selalu update dengan perkembangan terbaru.\n\nIngat, menjadi web developer yang sukses membutuhkan waktu dan dedikasi. Jangan menyerah ketika menghadapi tantangan, karena setiap developer pernah merasakan hal yang sama.",
      author: "Admin",
      date: "15 Januari 2024",
      readTime: "5 menit"
    },
    {
      id: 2,
      title: "React vs Vue: Mana yang Lebih Baik?",
      excerpt: "Perbandingan mendalam antara React dan Vue.js untuk membantu Anda memilih framework yang tepat.",
      content: "Kedua framework ini memiliki kelebihan masing-masing. Mari kita bahas secara detail perbandingan antara React dan Vue.js.\n\n## React\n\nReact adalah library JavaScript yang dikembangkan oleh Facebook. Beberapa keunggulan React:\n\n- **Ekosistem yang Luas**: React memiliki komunitas yang sangat besar dan banyak library pendukung\n- **Job Market**: Banyak perusahaan yang menggunakan React, sehingga peluang kerja lebih besar\n- **Fleksibilitas**: React memberikan kebebasan dalam memilih arsitektur aplikasi\n- **Performance**: Virtual DOM membuat React sangat cepat\n\n## Vue.js\n\nVue.js adalah framework progressive yang dikembangkan oleh Evan You. Keunggulan Vue:\n\n- **Learning Curve**: Vue lebih mudah dipelajari, terutama untuk pemula\n- **Template Syntax**: Sintaks template Vue mirip dengan HTML biasa\n- **Size**: Bundle size Vue lebih kecil dibanding React\n- **Documentation**: Dokumentasi Vue sangat lengkap dan mudah dipahami\n\n## Kesimpulan\n\nPilihan antara React dan Vue tergantung pada kebutuhan proyek dan preferensi personal. Jika Anda baru memulai, Vue mungkin lebih cocok. Namun jika Anda ingin fokus pada job market, React adalah pilihan yang lebih aman.",
      author: "Admin",
      date: "10 Januari 2024",
      readTime: "8 menit"
    },
    {
      id: 3,
      title: "Optimasi Performa Website: Best Practices",
      excerpt: "Teknik-teknik terbaik untuk meningkatkan kecepatan dan performa website Anda.",
      content: "Performa website yang baik sangat penting untuk user experience dan SEO. Berikut adalah teknik-teknik yang dapat Anda terapkan:\n\n## 1. Optimasi Gambar\n\n- Gunakan format gambar yang tepat (WebP untuk web modern)\n- Kompres gambar tanpa mengurangi kualitas secara signifikan\n- Implementasikan lazy loading untuk gambar\n- Gunakan responsive images dengan srcset\n\n## 2. Minifikasi dan Kompresi\n\n- Minifikasi CSS, JavaScript, dan HTML\n- Gunakan Gzip atau Brotli compression\n- Hapus kode yang tidak terpakai (dead code elimination)\n\n## 3. Caching Strategy\n\n- Implementasikan browser caching dengan HTTP headers yang tepat\n- Gunakan CDN untuk menyajikan static assets\n- Implementasikan service worker untuk offline caching\n\n## 4. Critical Rendering Path\n\n- Inline critical CSS\n- Defer non-critical JavaScript\n- Prioritaskan loading resource yang penting\n\n## 5. Database Optimization\n\n- Gunakan indexing yang tepat\n- Optimasi query database\n- Implementasikan connection pooling\n\n## Tools untuk Monitoring\n\n- Google PageSpeed Insights\n- GTmetrix\n- WebPageTest\n- Lighthouse (built-in di Chrome DevTools)\n\nDengan menerapkan teknik-teknik ini, website Anda akan memiliki performa yang jauh lebih baik dan memberikan pengalaman yang optimal bagi pengguna.",
      author: "Admin",
      date: "5 Januari 2024",
      readTime: "6 menit"
    }
  ]);

  const selectedPost = selectedPostId ? blogPosts.find(post => post.id === parseInt(selectedPostId)) : null;

  const handleReadMore = (postId: number) => {
    setSearchParams({ post: postId.toString() });
  };

  const handleBackToList = () => {
    setSearchParams({});
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login - in real app, validate against backend
    if (loginData.email === "admin@portfolio.com" && loginData.password === "admin123") {
      setIsLoggedIn(true);
      setShowLoginForm(false);
      setLoginData({ email: "", password: "" });
      alert("Login berhasil!");
    } else {
      alert("Email atau password salah!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowCreateForm(false);
    alert("Logout berhasil!");
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    const post = {
      id: blogPosts.length + 1,
      title: newPost.title,
      excerpt: newPost.excerpt,
      content: newPost.content,
      author: "Admin",
      date: new Date().toLocaleDateString('id-ID', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }),
      readTime: "5 menit"
    };
    
    setBlogPosts([post, ...blogPosts]);
    setNewPost({ title: "", content: "", excerpt: "" });
    setShowCreateForm(false);
    alert("Post berhasil dibuat!");
  };

  const handleDeletePost = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus post ini?")) {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
      alert("Post berhasil dihapus!");
    }
  };

  // If viewing a specific post, show the detailed view
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <button
            onClick={handleBackToList}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Blog
          </button>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <span>{selectedPost.readTime} baca</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {selectedPost.title}
              </h1>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {selectedPost.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim() === '') return <br key={index} />;
                  if (paragraph.startsWith('##')) {
                    return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                  }
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">{paragraph.replace(/\*\*/g, '')}</h3>;
                  }
                  if (paragraph.startsWith('- ')) {
                    return <li key={index} className="ml-6 mb-2">{paragraph.replace('- ', '')}</li>;
                  }
                  if (/^\d+\./.test(paragraph)) {
                    return <li key={index} className="ml-6 mb-2 list-decimal">{paragraph.replace(/^\d+\.\s/, '')}</li>;
                  }
                  return <p key={index} className="mb-4">{paragraph}</p>;
                })}
              </div>

              {isLoggedIn && (
                <div className="flex gap-2 mt-8 pt-6 border-t border-gray-200">
                  <button className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => {
                      handleDeletePost(selectedPost.id);
                      handleBackToList();
                    }}
                    className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagi pengalaman, tips, dan insight tentang dunia teknologi dan pengembangan web
          </p>
        </div>

        {/* Admin Controls */}
        <div className="flex justify-between items-center mb-8">
          <div></div>
          <div className="flex gap-4">
            {!isLoggedIn ? (
              <button
                onClick={() => setShowLoginForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Login Admin
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Tulis Post
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Login Form Modal */}
        {showLoginForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h2 className="text-xl font-bold mb-4">Login Admin</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="admin@portfolio.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="admin123"
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowLoginForm(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Batal
                  </button>
                </div>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                Demo: email: admin@portfolio.com, password: admin123
              </p>
            </div>
          </div>
        )}

        {/* Create Post Form Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Tulis Post Baru</h2>
              <form onSubmit={handleCreatePost}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Judul
                  </label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt
                  </label>
                  <input
                    type="text"
                    value={newPost.excerpt}
                    onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Ringkasan singkat artikel..."
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konten
                  </label>
                  <textarea
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-40"
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Publikasikan
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Blog Posts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime} baca</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => handleReadMore(post.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Baca Selengkapnya →
                  </button>
                  
                  {isLoggedIn && (
                    <div className="flex gap-2">
                      <button className="text-gray-600 hover:text-blue-600 p-1">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="text-gray-600 hover:text-red-600 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No posts message */}
        {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Belum ada post blog.</p>
            {isLoggedIn && (
              <button
                onClick={() => setShowCreateForm(true)}
                className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Tulis Post Pertama
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
