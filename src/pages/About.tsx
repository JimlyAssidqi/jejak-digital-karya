
import Navigation from "@/components/Navigation";
import { Award, BookOpen, Coffee, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tentang Saya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mengenal lebih dekat perjalanan dan passion saya dalam dunia teknologi
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">Upload foto profil Anda di sini</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
              <Coffee className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-full shadow-lg">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Halo! Saya Seorang Full Stack Developer
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Dengan pengalaman lebih dari 3 tahun dalam pengembangan web, saya berfokus pada 
                pembuatan aplikasi yang tidak hanya fungsional tetapi juga memberikan pengalaman 
                pengguna yang luar biasa.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Saya memiliki passion yang besar dalam teknologi web modern dan selalu antusias 
                untuk mempelajari hal-hal baru. Ketika tidak sedang coding, saya suka membaca, 
                minum kopi, dan mengeksplorasi tempat-tempat baru.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Lokasi</span>
                </div>
                <p className="text-gray-600">Jakarta, Indonesia</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Pengalaman</span>
                </div>
                <p className="text-gray-600">3+ Tahun</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Keahlian & Teknologi
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Frontend</h4>
              <div className="space-y-2">
                {["React", "TypeScript", "Tailwind CSS", "Next.js"].map((skill) => (
                  <div key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Backend</h4>
              <div className="space-y-2">
                {["Node.js", "Express", "PostgreSQL", "MongoDB"].map((skill) => (
                  <div key={skill} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Tools</h4>
              <div className="space-y-2">
                {["Git", "Docker", "AWS", "Figma"].map((skill) => (
                  <div key={skill} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
