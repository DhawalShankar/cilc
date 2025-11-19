import { useState } from 'react';
import { Feather, Heart, Star, Sparkles, Music, BookOpen, Mic2, Drama, Globe, ArrowRight, CheckCircle, Users, Award, Camera, Video, MessageCircle } from 'lucide-react';

export default function StepOntoYourStage() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [pledgeAccepted, setPledgeAccepted] = useState<boolean>(false);
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState(""); // auto-filled from selectedPath
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

  const artistPaths = [
    {
      id: 'singer',
      icon: Music,
      title: 'Classical Singer',
      subtitle: 'Your voice is divine',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Whether Hindustani or Carnatic, your ragas will resonate in sacred halls'
    },
    {
      id: 'poet',
      icon: BookOpen,
      title: 'Poet & Writer',
      subtitle: 'Your words are prayers',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Hindi, English, or regional languages - every verse finds its audience'
    },
    {
      id: 'speaker',
      icon: Mic2,
      title: 'Public Speaker',
      subtitle: 'Your message matters',
      gradient: 'from-orange-500 to-red-500',
      description: 'Inspire, educate, and transform young minds with your eloquence'
    },
    {
      id: 'dancer',
      icon: Sparkles,
      title: 'Classical Dancer',
      subtitle: 'Your movements tell stories',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Bharatanatyam, Kathak, Odissi - let your art speak to souls'
    },
    {
      id: 'debater',
      icon: MessageCircle,
      title: 'Debater',
      subtitle: 'Your logic shapes minds',
      gradient: 'from-indigo-500 to-purple-500',
      description: 'MUN, Parliamentary, or Traditional - your arguments ignite change'
    },
    {
      id: 'dramatist',
      icon: Drama,
      title: 'Actor & Dramatist',
      subtitle: 'Your performance transforms',
      gradient: 'from-red-500 to-pink-500',
      description: 'Theatre, skits, monologues - embody stories that heal and inspire'
    }
  ];
  const [open, setOpen] = useState(false);

  const benefits = [
    { icon: Award, text: 'Certificate of Honor - Always' },
    { icon: Camera, text: 'Professional Event Photography' },
    { icon: Video, text: 'Performance Recording' },
    { icon: Star, text: 'Sacred Stage Honor Roll Entry' },
    { icon: BookOpen, text: 'Feature in Cosmo India Prakashan' },
    { icon: Users, text: 'Lifelong Artist Community' }
  ];
  const [warning, setWarning] = useState("");

  const whyJoin = [
    {
      title: 'Art Is NOT a Wrong Path',
      description: 'We prove to young India that pursuing arts is legitimate, noble, and transformative. Join a movement changing narratives.',
      color: 'orange'
    },
    {
      title: 'Connect With Your Tribe',
      description: 'Meet fellow artists - singers, poets, dancers, debaters. Build networks that last beyond the stage.',
      color: 'purple'
    },
    {
      title: 'Sacred Stages in Institutions',
      description: 'Perform in schools, colleges, and cultural centers. Touch young minds hungry for inspiration.',
      color: 'red'
    },
    {
      title: 'Growth Over Winning',
      description: 'Every participant leaves honored. We celebrate the courage to step on stage, not just victory.',
      color: 'pink'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-linear-to-br from-orange-500 to-red-600 p-2 rounded-xl">
              <Feather className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Cosmo India Literary Council
              </h1>
              <p className="text-xs text-gray-600">Your Sacred Stage Awaits</p>
            </div>
          </div>
          <a href="/" className="text-gray-600 hover:text-orange-600 transition-colors text-sm font-medium">
            ← Back to Home
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-linear-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl top-0 left-0" />
          <div className="absolute w-96 h-96 bg-linear-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl bottom-0 right-0" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-linear-to-r from-orange-500 to-pink-500 rounded-full text-white text-sm font-semibold animate-pulse">
            Registration Open - All Artists Welcome
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-linear-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Step Onto Your Sacred Stage
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
            This isn't just registration. It's a sacred commitment.
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Join thousands of artists who've proven that art isn't a detour—it's a destination. 
            Together, we're building stages in institutions, connecting with young minds, and 
            creating a movement where <span className="font-bold text-orange-600">every voice is sacred</span>.
          </p>

          <div className="flex items-center justify-center space-x-2 text-orange-600 mb-8">
            <Heart className="w-6 h-6 animate-pulse" />
            <span className="text-lg font-semibold">Choose your path below</span>
            <Heart className="w-6 h-6 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Artist Paths Selection */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Which Stage Calls You?
            </h2>
            <p className="text-gray-600 text-lg">Select your art form to begin your sacred journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {artistPaths.map((path) => {
              const Icon = path.icon;
              const isSelected = selectedPath === path.id;
              
              return (
                <button
                  key={path.id}
                  onClick={() =>{ setSelectedPath(path.id); setCategory(path.title);}}
                  className={`group relative bg-white rounded-3xl p-8 text-left transition-all duration-300 hover:shadow-2xl ${
                    isSelected ? 'ring-4 ring-orange-500 shadow-2xl scale-105' : 'hover:scale-105'
                  }`}
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-linear-to-br ${path.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{path.title}</h3>
                  <p className="text-orange-600 text-sm font-semibold text-center mb-3 italic">{path.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">{path.description}</p>

                  {isSelected && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-full p-2">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {selectedPath && (
            <div className="text-center animate-fade-in">
              <button 
                onClick={() => scrollToSection('pledge-section')}
                className="group bg-linear-to-r from-orange-600 to-red-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3"
              >
                <span>Continue to Sacred Pledge</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Star className="w-16 h-16 mx-auto mb-6 text-orange-600 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Why Artists Choose CILC
            </h2>
            <p className="text-gray-600 text-lg">More than events. A sacred movement.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {whyJoin.map((reason, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              > 
              
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br from-${reason.color}-500 to-${reason.color}-600 flex items-center justify-center mb-4`}>
    
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* What You Get */}
          <div className="bg-linear-to-br from-orange-50 to-purple-50 rounded-3xl p-10">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
              What Every Artist Receives
              <span className="block text-base font-normal text-gray-600 mt-2">(Before, During & After the Stage)</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex items-center space-x-4 bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all">
                    <div className="bg-linear-to-br from-orange-500 to-red-600 rounded-xl p-3 shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Pledge Section */}
      <section id='pledge-section' className="py-20 px-6 bg-linear-to-br from-purple-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Heart className="w-20 h-20 mx-auto mb-6 text-yellow-400 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4">The Sacred Stage Pledge</h2>
            <p className="text-xl text-orange-200">A commitment we take together - artist and community</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border-2 border-white/30 mb-10">
            <div className="space-y-6 text-lg leading-relaxed">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 rounded-full p-2 shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p>I pledge to <strong className="text-yellow-300">honor this stage as a sacred space</strong> of expression, treating it with the reverence of a temple</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 rounded-full p-2 shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p>I pledge to <strong className="text-orange-300">respect every fellow performer</strong>, celebrating their courage regardless of outcome</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 rounded-full p-2 shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p>I pledge to <strong className="text-purple-300">learn, grow, and inspire</strong> through my art, touching young minds with authenticity</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-500 rounded-full p-2 shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p>I pledge to <strong className="text-red-300">honor the journey over the destination</strong>, knowing transformation is the true victory</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pink-500 rounded-full p-2 shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p>I pledge to <strong className="text-pink-300">prove that art is a valid path</strong>, becoming a beacon for others who dare to dream</p>
              </div>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 mb-8">
            <label className="flex items-start space-x-4 cursor-pointer group">
              <input
                type="checkbox"
                checked={pledgeAccepted}
                onChange={(e) => setPledgeAccepted(e.target.checked)}
                className="mt-1 w-6 h-6 rounded border-2 border-white/50 bg-white/10 checked:bg-orange-500 checked:border-orange-500 cursor-pointer"
              />
              <span className="text-lg font-medium group-hover:text-yellow-300 transition-colors">
                I accept the Sacred Stage Pledge and commit to upholding these values as I step onto my stage
              </span>
            </label>
          </div>

          <div className="text-center">
           <button
                disabled={!pledgeAccepted || !selectedPath}
                onClick={() => setOpen(true)}
                className={`px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 inline-flex items-center space-x-3 ${
                    pledgeAccepted && selectedPath
                    ? 'bg-white text-purple-900 hover:shadow-2xl hover:scale-105 cursor-pointer'
                    : 'bg-white/20 text-white/50 cursor-not-allowed'
                }`}
                >
                <span>Complete Registration</span>
                <ArrowRight className="w-6 h-6" />
                </button>
                    {open && (
  <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
    <div className="bg-white p-8 text-black rounded-2xl shadow-2xl w-[90%] max-w-md space-y-6">

      <h2 className="text-2xl font-bold text-purple-900">Artist Registration</h2>

      {warning && (
        <p className="text-red-600 text-sm font-semibold text-center">
          {warning}
        </p>
      )}

      <input
        placeholder="Your Name"
        className="w-full p-3 border rounded-lg"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        className="w-full p-3 border rounded-lg"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Your Art Category"
        className="w-full p-3 border rounded-lg"
        value={category}
        required
        readOnly
      />

      <button
        onClick={() => {
          if (!name || !email || !category) {
            setWarning("All fields are required.");
            return;
          }
          setWarning("");
          setOpen(false);
          window.location.hash = "/certificate";
        }}
        className="w-full bg-purple-700 text-white py-3 rounded-lg font-bold hover:bg-purple-900 transition"
      >
        Submit & Continue
      </button>

      <button
        onClick={() => setOpen(false)}
        className="w-full text-purple-700 mt-2"
      >
        Cancel
      </button>
    </div>
  </div>
)}

            {(!pledgeAccepted || !selectedPath) && (
              <p className="text-sm text-yellow-300 mt-4">
                {!selectedPath ? 'Please select your art form above' : 'Please accept the Sacred Stage Pledge to continue'}
              </p>
            )}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-white/80">
              <Globe className="w-4 h-4 inline mr-2" />
              Join the community of artists who've taken this pledge
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-orange-600" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Your Stage is Waiting
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Every great performer started with one step. Today is your day. <br/>
            <span className="font-semibold text-orange-600">Touch the stage with reverence. Leave it transformed.</span>
          </p>
          
          <div className="bg-linear-to-r from-orange-100 to-purple-100 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-700 italic mb-4">
              "I didn't win, but I found my voice. The sacred stage gave me confidence I never knew I had."
            </p>
            <p className="text-sm text-gray-600">— A Fellow Artist, Poetry Symposium 2024</p>
          </div>

          <button className="bg-linear-to-r from-orange-600 to-red-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Begin Your Sacred Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-br from-gray-900 to-orange-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-linear-to-br from-orange-500 to-red-600 p-2 rounded-xl">
              <Feather className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Cosmo India Literary Council</h3>
          </div>
          <p className="text-orange-300 mb-2 italic text-lg">
            "Every stage is a temple. Every performance is a prayer. Every voice is sacred."
          </p>
          <p className="text-sm text-gray-400">
            © 2025 CILC - Honoring expressions of Life | Ensuring everyone tastes the elixir of life
          </p>
        </div>
      </footer>
    </div>
  );
}