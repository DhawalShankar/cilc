import { useState, useEffect } from 'react';
import { BookOpen, Feather, Award, ArrowRight, Menu, X, Search, Music, Drama, Mic2, Sparkles, Globe, Heart, Star, Camera, Video, CheckCircle } from 'lucide-react';
// Install: npm install react-helmet



export default function CosmoIndiaLiteraryCouncil() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [lightIntensity, setLightIntensity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Light intensity increases as user scrolls
      const intensity = Math.min(window.scrollY / 500, 1);
      setLightIntensity(intensity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const events = [
    {
      title: "Model United Nations",
      subtitle: "MUN Conferences",
      category: "debates",
      description: "Empowering young diplomats through simulated UN conferences, fostering global awareness, public speaking, and critical thinking skills.",
      frequency: "Quarterly",
      participants: "500+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      icon: Globe
    },
    {
      title: "National Debate Championship",
      subtitle: "Art of Argumentation",
      category: "debates",
      description: "Prestigious debate competitions bringing together India's brightest minds to discuss contemporary issues with eloquence and logic.",
      frequency: "Bi-annual",
      participants: "300+",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
      icon: Mic2
    },
    {
      title: "Classical Music Festival",
      subtitle: "Sur Sangam",
      category: "music",
      description: "Celebrating India's rich musical heritage through Hindustani and Carnatic classical performances, workshops, and masterclasses.",
      frequency: "Annual",
      participants: "1000+",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
      icon: Music
    },
    {
      title: "Classical Dance Showcase",
      subtitle: "Nritya Utsav",
      category: "dance",
      description: "Showcasing Bharatanatyam, Kathak, Odissi, Kuchipudi, and other classical dance forms celebrating India's cultural diversity.",
      frequency: "Bi-annual",
      participants: "400+",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80",
      icon: Sparkles
    },
    {
      title: "Cultural Heritage Festival",
      subtitle: "Sangam: Unity in Diversity",
      category: "cultural",
      description: "A grand celebration of India's multicultural tapestry featuring folk arts, regional cuisines, traditional crafts, and storytelling.",
      frequency: "Annual",
      participants: "2000+",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
      icon: Heart
    },
    {
      title: "Theatre & Drama Festival",
      subtitle: "Natya Mahotsav",
      category: "drama",
      description: "Original plays, adaptations, and experimental theatre exploring social themes, historical narratives, and contemporary issues.",
      frequency: "Quarterly",
      participants: "350+",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
      icon: Drama
    },
    {
      title: "Skit Competition",
      subtitle: "Hasya Rang",
      category: "drama",
      description: "Short theatrical performances blending humor, satire, and social commentary in creative and entertaining formats.",
      frequency: "Monthly",
      participants: "200+",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      icon: Drama
    },
    {
      title: "Poetry & Literature Symposium",
      subtitle: "Kavya Kumbh",
      category: "literary",
      description: "Poetry recitals, literary discussions, and book launches in multiple Indian languages celebrating the written and spoken word.",
      frequency: "Bi-monthly",
      participants: "600+",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      icon: BookOpen
    },
    {
      title: "Sacred Stage Open Mic",
      subtitle: "Every Voice Matters",
      category: "openmic",
      description: "Safe, institutional open mic evenings for poetry, music, stand-up, and storytelling. Where every performer is honored.",
      frequency: "Monthly",
      participants: "100+",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
      icon: Mic2
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'debates', label: 'MUN & Debates' },
    { id: 'music', label: 'Classical Music' },
    { id: 'dance', label: 'Classical Dance' },
    { id: 'cultural', label: 'Cultural Events' },
    { id: 'drama', label: 'Drama & Skit' },
    { id: 'literary', label: 'Literary Events' },
    { id: 'openmic', label: 'Open Mic' }
  ];

  // const testimonials = [
  //   {
  //     quote: "I didn't win, but I found my voice. The sacred stage gave me confidence I never knew I had.",
  //     name: "Priya Sharma",
  //     event: "Poetry Symposium 2024",
  //     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
  //   },
  //   {
  //     quote: "The stage taught me more than any classroom. I left transformed, not just recognized.",
  //     name: "Arjun Mehta",
  //     event: "MUN Conference 2024",
  //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  //   },
  //   {
  //     quote: "I touched the stage with fear, left it with courage. CILC honors every performer equally.",
  //     name: "Ananya Desai",
  //     event: "Classical Dance Showcase 2024",
  //     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
  //   }
  // ];

  const filteredEvents = activeTab === 'all' 
    ? events 
    : events.filter(event => event.category === activeTab);

  return (
    // Add at the top of your component's return statement:

    <div className="min-h-screen bg-linear-to-br from-amber-50 via-white to-orange-50">
      {/* Navigation */}
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-linear-to-br from-orange-500 to-red-600 p-2.5 rounded-xl">
                <Feather className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Cosmo India Literary Council
                </h1>
                <p className="text-xs text-gray-600">कॉस्मो इंडिया साहित्य परिषद | CILC</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</a>
              <a href="#philosophy" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Philosophy</a>
              <a href="#events" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Events</a>
              <a href="#gallery" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Gallery</a>
              <button className="bg-linear-to-r from-orange-600 to-red-600 text-white px-6 py-2.5 rounded-full hover:shadow-xl transition-all duration-300 font-medium">
                Step Onto Your Stage
              </button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-orange-600 py-2">Home</a>
              <a href="#philosophy" className="block text-gray-700 hover:text-orange-600 py-2">Philosophy</a>
              <a href="#events" className="block text-gray-700 hover:text-orange-600 py-2">Events</a>
              <a href="#gallery" className="block text-gray-700 hover:text-orange-600 py-2">Gallery</a>
              <button className="w-full bg-linear-to-r from-orange-600 to-red-600 text-white px-6 py-2.5 rounded-full">
                Step Onto Your Stage
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Light Your Stage Animation */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated Stage Spotlight */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(251, 146, 60, ${lightIntensity * 0.2}), transparent 70%)`,
            transition: 'background 0.3s ease'
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-linear-to-r from-orange-100 to-purple-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                Unity in Diversity • Where Stages Are Sacred 
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Every Stage is a Temple
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Where performances are prayers, and every voice is sacred
              <span className="block mt-2 text-orange-600 font-semibold italic">Taste the Elixir of Life Through Expression</span>
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-linear-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 font-semibold flex items-center space-x-2 group">
                <span>Begin Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 font-semibold">
                Discover the Philosophy
              </button>
            </div>
          </div>

          {/* Live Counters */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              { icon: Star, label: 'Stages Illuminated', value: '250+' },
              { icon: Users, label: 'Dreams Honored', value: '10,000+' },
              { icon: Heart, label: 'Voices Heard', value: '15,000+' },
              { icon: Sparkles, label: 'Transformations', value: '8,500+' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-linear-to-br from-orange-500 via-red-600 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Sacred Stage Philosophy Section */}
      <section id="philosophy" className="py-20 px-4 bg-linear-to-br from-purple-50 via-orange-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <Star className="w-16 h-16 mx-auto text-orange-600 animate-pulse" />
            </div>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-orange-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              The Sacred Stage Philosophy
            </h3>
            <div className="w-24 h-1 bg-linear-to-r from-orange-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          {/* Founder's Story */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl mb-12 border border-orange-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-1 bg-orange-600"></div>
              <Heart className="w-8 h-8 mx-4 text-red-600" />
              <div className="w-20 h-1 bg-orange-600"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p className="text-xl md:text-2xl font-semibold text-center text-gray-800 italic mb-6">
                "I'm in my 3rd year of engineering. But my heart lives on stage."
              </p>
              
              <p className="text-lg">
                I've watched performers touch the stage's feet before stepping on it—treating it like entering a temple. 
                That reverence moved me deeply. It reminded me that in India, expression has always been sacred.
              </p>
              
              <p className="text-lg">
                But we're becoming mechanized. Events are rare. Stages are empty. Talent remains dormant in hostel rooms 
                and college corridors, never finding its light.
              </p>
              
              <p className="text-lg">
                When you stand under those lights, something changes. You're not just performing—you're connecting to 
                something ancient, something larger than yourself. That feeling of transformation shouldn't be rare. 
                It should be a birthright for every student with a dream.
              </p>
              
              <p className="text-lg font-semibold text-orange-600">
                That's why I built Cosmo India Literary Council.
              </p>
              
              <p className="text-lg">
                Here, every stage is sacred. Every performance matters. Whether you win or not, you leave transformed.
              </p>
              
              <p className="text-xl font-bold text-center text-gray-800 mt-8 italic">
                Because the real award? It's the courage to step on that stage.
              </p>
            </div>
          </div>

          {/* What Sacred Stage Means */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-linear-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg border-2 border-orange-200">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">Reverence</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                We honor the stage as a sacred space. Before you perform, you connect with something greater than yourself.
              </p>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">Transformation</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Every performance is a journey. You step on stage as one person, you leave as someone transformed.
              </p>
            </div>

            <div className="bg-linear-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">Recognition</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Winning is wonderful, but every participant leaves with recognition, growth, and honor.
              </p>
            </div>
          </div>

          {/* Before You Step On Stage */}
          <div className="bg-linear-to-r from-orange-600 via-red-600 to-purple-600 rounded-3xl p-1 mb-12">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <h4 className="text-3xl font-bold text-center mb-8 bg-linear-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                Before You Step On Stage
              </h4>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 rounded-full p-2 shrink-0">
                      <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-1">Touch the Stage</h5>
                      <p className="text-gray-600 text-sm">Honor the space that will amplify your voice. This ancient ritual connects you to every performer who came before.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full p-2 shrink-0">
                      <CheckCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-1">Breathe & Center</h5>
                      <p className="text-gray-600 text-sm">Take three deep breaths. Feel your feet on the ground. You are ready. You are enough.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 rounded-full p-2 shrink-0">
                      <CheckCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-1">Moment of Gratitude</h5>
                      <p className="text-gray-600 text-sm">Thank yourself for having the courage. Thank the stage for holding your dreams.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 rounded-full p-2 shrink-0">
                      <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-1">Remember</h5>
                      <p className="text-gray-600 text-sm">You are not here to be perfect. You are here to be present. The stage honors you back.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What Every Participant Gets */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h4 className="text-3xl font-bold text-center mb-8 text-gray-800">
              What Every Participant Receives
              <span className="block text-lg font-normal text-gray-600 mt-2">(Regardless of Winning)</span>
            </h4>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Award, title: 'Certificate of Honor', desc: 'Official recognition of your courage' },
                { icon: Camera, title: 'Professional Photos', desc: 'High-quality event photography' },
                { icon: Video, title: 'Performance Recording', desc: 'Your moment, captured forever' },
                { icon: Star, title: 'Hall of Fame Entry', desc: 'Your name in our Sacred Stage Honor Roll' },
                { icon: BookOpen, title: 'Feature Opportunity', desc: 'Chance to be featured in Cosmo India Prakashan' },
                { icon: Heart, title: 'The Experience', desc: 'Transformation, growth, and community' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="bg-linear-to-br from-orange-500 to-red-600 rounded-lg p-3 shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 mb-1">{item.title}</h5>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Sacred Stages Await You
            </h3>
            <p className="text-gray-600 text-lg">Choose your path. Honor your craft. Find your stage.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'bg-linear-to-r from-orange-600 to-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-orange-600">{event.frequency}</span>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <event.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-1">{event.title}</h4>
                      <p className="text-orange-600 text-sm font-medium italic">{event.subtitle}</p>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {event.participants}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <button className="w-full bg-linear-to-r from-orange-600 to-red-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                    Honor This Stage
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Reframed */}
      {/* <section className="py-20 px-4 bg-linear-to-br from-orange-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Moments of Transcendence
            </h3>
            <p className="text-gray-600 text-lg">Growth over winning. Transformation over trophies.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-orange-600">{testimonial.event}</p>
                  </div>
                </div>
               <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Sacred Stage Honor Roll */}
      <section className="py-20 px-4 bg-linear-to-br from-purple-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <Star className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-pulse" />
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            The Sacred Stage Honor Roll
          </h3>
          <p className="text-xl md:text-2xl mb-8 text-orange-200 max-w-3xl mx-auto leading-relaxed">
            Every soul who has graced our stages is remembered. Not just winners. Everyone.
          </p>
          <p className="text-lg mb-12 text-white/90 italic">
            "You stood on the sacred stage. You are eternal."
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Search className="w-5 h-5 text-orange-300" />
              <input 
                type="text" 
                placeholder="Search by name, event, or year..."
                className="bg-white/20 border border-white/30 rounded-full px-6 py-3 text-white placeholder-white/60 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {/* <p className="text-sm text-orange-200">10,000+ participants honored • 250+ events • Since 1975</p> */}
          </div>

          <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            View Full Honor Roll
          </button>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Moments of Transcendence
            </h3>
            <p className="text-gray-600 text-lg">Captured reverence. Documented transformation. Sacred memories.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
              "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80",
              "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80",
              "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
              "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80",
              "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
              "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
              "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80"
            ].map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-2xl aspect-square">
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">Sacred Moment #{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-linear-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all">
              Explore Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* For Institutions Section */}
      <section className="py-20 px-4 bg-linear-to-br from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-12">
              <Globe className="w-16 h-16 mx-auto mb-6 text-orange-600" />
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                For Institutions & Colleges
              </h3>
              <p className="text-gray-600 text-lg">Bring the sacred stage experience to your campus</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h4>
                {[
                  { title: 'On-Campus Events', desc: 'Complete event management from planning to execution' },
                  { title: 'Student Workshops', desc: 'Skill development in debate, drama, music, and public speaking' },
                  { title: 'Faculty Training', desc: 'Empower educators to nurture student talent' },
                  { title: 'Cultural Festivals', desc: 'Multi-day celebrations of arts and expression' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="bg-orange-100 rounded-full p-2 shrink-0">
                      <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-1">{item.title}</h5>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Why Partner With Us</h4>
                {[
                  { title: '50+ Years Legacy in Literature', desc: 'Trusted by Authors since 1975' },
                  { title: 'Holistic Development', desc: 'Focus on growth, not just competition' },
                  { title: 'Professional Standards', desc: 'High-quality production and documentation' },
                  { title: 'Inclusive Philosophy', desc: 'Every student matters, every voice counts' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full p-2 shrink-0">
                      <Star className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-1">{item.title}</h5>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button className="bg-linear-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all inline-flex items-center space-x-2">
                <span>Partner With CILC</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Stage Pledge Section */}
      <section className="py-20 px-4 bg-linear-to-br from-orange-100 via-purple-100 to-red-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-orange-200">
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 mx-auto mb-6 text-red-600 animate-pulse" />
              <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                The Sacred Stage Pledge
              </h3>
              <p className="text-gray-600 text-lg">When you register, join thousands who've taken this sacred commitment</p>
            </div>

            <div className="bg-linear-to-br from-orange-50 to-purple-50 rounded-2xl p-8 mb-8">
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                  <span>I pledge to <strong>honor this stage</strong> as a sacred space of expression</span>
                </p>
                <p className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                  <span>I pledge to <strong>respect fellow performers</strong> and celebrate their courage</span>
                </p>
                <p className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <span>I pledge to <strong>learn, grow, and inspire</strong> through my performance</span>
                </p>
                <p className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                  <span>I pledge to <strong>honor the journey</strong> regardless of the outcome</span>
                </p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-linear-to-r from-orange-600 to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                Take the Pledge & Register
              </button>
              <p className="text-sm text-gray-500 mt-4">Join 10,000+ Pledge Keepers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-br from-gray-900 via-purple-900 to-orange-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-linear-to-br from-orange-500 to-red-600 p-2 rounded-xl">
                  <Feather className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">CILC</h4>
                  <p className="text-xs text-orange-300">Ensuring everyone tastes the elixir of life!</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Where stages are temples, performances are prayers, and every voice is sacred.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-orange-400">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
                <li><a href="#philosophy" className="text-gray-300 hover:text-orange-400 transition-colors">Philosophy</a></li>
                <li><a href="#events" className="text-gray-300 hover:text-orange-400 transition-colors">Events</a></li>
                <li><a href="#gallery" className="text-gray-300 hover:text-orange-400 transition-colors">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-orange-400">Sacred Stages</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">MUN & Debates</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Classical Arts</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Open Mic Evenings</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Honor Roll</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-orange-400">Connect</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">For Institutions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Volunteer</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Media Kit</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-xl font-semibold mb-2 text-orange-300 italic">
              "तत्त्वमसि - Thou Art That"
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Every stage is a temple. Every performance is a prayer. Every voice is sacred.
            </p>
            <p className="text-xs text-gray-500">
              © 2025 Cosmo India Literary Council. Honoring expressions of Life.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}