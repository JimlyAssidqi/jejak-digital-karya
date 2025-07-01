
import Navigation from "@/components/Navigation";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Platform e-commerce lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin yang komprehensif.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Web App"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan fitur kolaborasi tim, tracking progress, dan notifikasi real-time.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Productivity"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard cuaca interaktif dengan visualisasi data, prediksi 7 hari, dan peta cuaca real-time.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Dashboard"
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Aplikasi media sosial dengan fitur posting, commenting, real-time chat, dan sistem follow/unfollow.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&h=300&fit=crop",
      technologies: ["React Native", "Express", "Socket.io", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Mobile App"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Website portfolio responsif dengan animasi menarik, blog terintegrasi, dan form kontak yang fungsional.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Website"
    },
    {
      id: 6,
      title: "Inventory System",
      description: "Sistem manajemen inventori untuk bisnis dengan fitur tracking stok, laporan, dan integrasi barcode.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop",
      technologies: ["Angular", "Spring Boot", "MySQL", "JasperReports"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Business App"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyek Saya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kumpulan karya dan proyek yang telah saya kerjakan dengan berbagai teknologi modern
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Tertarik Bekerja Sama?
            </h2>
            <p className="text-gray-600 mb-6">
              Saya selalu terbuka untuk proyek baru dan kolaborasi yang menarik
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
