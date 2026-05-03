import { useState, useEffect } from 'react';
import { Phone, CheckCircle, Cpu, Car, Zap, Shield, Clock, Star, Wrench, MessageSquare } from 'lucide-react';
import { Button } from './components/ui/button';
import bannerImage from 'figma:asset/fc0dbb58b4cf8c420f85275cec2de9ac9f574f87.png';

export default function Test() {
  const phoneNumber = '7046802580';
  const formattedPhone = '704-680-2580';
  const smsNumber = '+17046802580';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Cpu,
      title: 'ECU Programming',
      description: 'Engine Control Unit programming and reprogramming for all makes',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'TCM & BCM',
      description: 'Transmission and Body Control Module programming',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Shield,
      title: 'ADAS Calibration',
      description: 'Advanced Driver Assistance Systems calibration services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Wrench,
      title: 'Ignition Lock Repair',
      description: 'Complete ignition cylinder repair and replacement',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Car,
      title: 'Key Programming',
      description: 'Smart keys, transponder keys, and remote programming',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Airbag Restoration',
      description: 'Complete airbag system restoration and reset',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const carBrands = [
    'Toyota', 'Honda', 'Ford', 'Volkswagen', 'Mercedes-Benz', 
    'BMW', 'Audi', 'Porsche', 'Nissan', 'Chevrolet', 'Mazda', 'Lexus'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Circuit pattern overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, .3) 25%, rgba(59, 130, 246, .3) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, .3) 75%, rgba(59, 130, 246, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, .3) 25%, rgba(59, 130, 246, .3) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, .3) 75%, rgba(59, 130, 246, .3) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/50 transform hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white text-xl font-semibold">Car Keys</div>
                <div className="text-xs text-blue-400">Programming & Locksmith</div>
              </div>
            </div>
            
            <a href={`tel:${phoneNumber}`}>
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:scale-105">
                <Phone className="mr-2 h-5 w-5" />
                <span className="hidden sm:inline">{formattedPhone}</span>
                <span className="sm:hidden">Call Now</span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Banner */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 mb-6 shadow-xl">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Professional Service • Licensed NC #2913</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="text-white">Programming &</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Locksmith Service
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">Expert automotive programming and locksmith services for all car makes and models. ECU, TCM, BCM programming, ADAS calibration.</p>
          </div>

          {/* Banner Image */}
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-500">
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href={`tel:${phoneNumber}`}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all hover:scale-105 px-8 py-7 text-lg">
                <Phone className="mr-2 h-6 w-6" />
                Call {formattedPhone}
              </Button>
            </a>
            
            <a href={`sms:${smsNumber}`}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all hover:scale-105 px-8 py-7 text-lg">
                <MessageSquare className="mr-2 h-6 w-6" />
                Text Us
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 backdrop-blur-md border border-green-500/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-sm">Expert Technicians</span>
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-400 mb-4">
              Professional Services
            </div>
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Complete <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">Automotive Solutions</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Advanced programming and restoration services for all vehicle systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/20"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-white mb-2">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-orange-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>All Makes & Models</span>
                </div>
              </div>
            ))}
          </div>

          {/* Key Points */}
          <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-orange-400" />
                  What We Do
                </h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start justify-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>
                      Car Keys<br />
                      Engine Programming<br />
                      Transmission Programming<br />
                      BCM Programming<br />
                      ABS Programming
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>ADAS Radar Calibration Services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Ignition Lock Repair & Replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Airbag Complete Restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Emergency Lockout Service</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl text-white mb-6 flex items-center gap-3">
                  <Car className="w-8 h-8 text-orange-400" />
                  All Car Makes & Models
                </h3>
                <div className="grid grid-cols-2 gap-2 text-white/70">
                  {carBrands.map((brand, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                      {brand}
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-sm text-orange-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                    And Many More!
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p className="text-white mb-4 text-xl">Need Professional Automotive Programming?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={`tel:${phoneNumber}`}>
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:scale-105 transition-all px-8">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>
                <a href={`sms:${smsNumber}`}>
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-lg hover:scale-105 transition-all px-8">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Text Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-4xl text-white mb-8 text-center">
              Why Choose <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">Car Keys</span>?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Cpu, text: 'State-of-the-art programming equipment', color: 'text-blue-400' },
                { icon: Shield, text: 'Licensed & Insured in NC (Lic #2913)', color: 'text-green-400' },
                { icon: Star, text: 'Certified technicians with years of experience', color: 'text-yellow-400' },
                { icon: Clock, text: 'Emergency service available', color: 'text-orange-400' },
                { icon: CheckCircle, text: 'All makes and models supported', color: 'text-purple-400' },
                { icon: Zap, text: 'Fast turnaround time', color: 'text-cyan-400' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                  <item.icon className={`w-6 h-6 ${item.color} flex-shrink-0 mt-0.5`} />
                  <span className="text-white/90">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <a 
        href={`tel:${phoneNumber}`}
        className="fixed bottom-6 right-6 z-50 group animate-buzz"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-ping-fast opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
          
          <div className="relative bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 rounded-full p-5 shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transform hover:scale-110 transition-all duration-300">
            <Phone className="w-7 h-7 text-white" />
          </div>
          
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            <span className="text-white">Call: {formattedPhone}</span>
          </div>
        </div>
      </a>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl text-white">Car Keys</div>
              </div>
              <p className="text-white/60 mb-4">
                Professional programming and locksmith services for all automotive needs in North Carolina.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white mb-4">Our Services</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• ECU Programming</li>
                <li>• TCM & BCM Programming</li>
                <li>• ADAS Calibration</li>
                <li>• Ignition Lock Repair</li>
                <li>• Key Programming</li>
                <li>• Airbag Restoration</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="flex flex-col gap-3">
                <a href={`tel:${phoneNumber}`}>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:scale-105 transition-all"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {formattedPhone}
                  </Button>
                </a>
                <a href={`sms:${smsNumber}`}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10 shadow-lg hover:scale-105 transition-all"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Text Us
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/90 mb-2">
              Car Keys, Licensed and insured locksmith in NC. lic:2913
            </p>
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Car Keys. All rights reserved. Serving North Carolina & surrounding areas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}