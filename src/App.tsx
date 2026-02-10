import { useState, useEffect } from 'react';
import { Phone, Clock, Shield, Star, CheckCircle2, Key, Car, Award, MapPin, Zap, MessageSquare } from 'lucide-react';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import vanImage from 'figma:asset/9357685eddcf09386a64a34dc30b08fb6ef71835.png';

export default function App() {
  const phoneNumber = '7046802580';
  const formattedPhone = '(704) 680-2580';
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
      icon: Car,
      title: 'Car Lockout',
      description: 'Locked out? We\'ll get you back in fast without damage',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Key,
      title: 'Key Replacement',
      description: 'Lost keys? New keys made on-site for any vehicle',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Key Programming',
      description: 'Transponder & smart key programming available',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Award,
      title: 'Ignition Repair',
      description: 'Expert ignition cylinder repair & replacement',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center shadow-lg shadow-orange-500/50 transform hover:scale-110 transition-transform">
                <Key className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white text-xl font-semibold">Car Keys</div>
                <div className="text-xs text-white/60">Licensed NC #2913</div>
              </div>
            </div>
            
            <a href={`tel:${phoneNumber}`}>
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:scale-105">
                <Phone className="mr-2 h-5 w-5" />
                <span className="hidden sm:inline">{formattedPhone}</span>
                <span className="sm:hidden">Call Now</span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 mb-6 shadow-xl">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Available Now • Fast Response</span>
              </div>

              {/* Prominent Business Name */}
              <div className="mb-4">
                <span className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Car Keys
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 font-normal not-italic no-underline">
                <span className="text-white">Emergency</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Locksmith
                </span>
                <br />
                <span className="text-white">in Raleigh</span>
              </h1>

              <p className="text-xl text-white/80 mb-8 max-w-xl font-normal">
                Locked out of your car? Need a new key? We're here to help! Fast, professional locksmith service available 24/7 in Raleigh, NC.
              </p>

              {/* Main CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href={`tel:${phoneNumber}`} className="flex-1 sm:flex-initial">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all hover:scale-105 px-8 py-7 text-lg">
                    <Phone className="mr-2 h-6 w-6" />
                    Call Now
                  </Button>
                </a>
                
                <a href={`sms:${smsNumber}`} className="flex-1 sm:flex-initial">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all hover:scale-105 px-8 py-7 text-lg">
                    <MessageSquare className="mr-2 h-6 w-6" />
                    Text Us
                  </Button>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6">
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
                  <span className="text-sm">5-Star Service</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-sm">15 Min Response</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm transform hover:scale-105 transition-transform duration-500">
                <div className="aspect-[4/3] relative">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1604445415362-2a9840bd5ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBrZXlzJTIwbG9ja3NtaXRofGVufDF8fHx8MTc1OTk2MzYzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Professional locksmith service"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl text-white">24/7</div>
                    <div className="text-sm text-white/60">Always Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-400 mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Professional Locksmith <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Fast, reliable service for all your automotive locksmith needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
              </div>
            ))}
          </div>

          {/* CTA in Services */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-orange-500/20 to-pink-600/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <p className="text-white mb-4 text-xl">Need help now?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={`tel:${phoneNumber}`}>
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white shadow-lg hover:scale-105 transition-all px-8">
                    <Phone className="mr-2 h-5 w-5" />
                    Call
                  </Button>
                </a>
                <a href={`sms:${smsNumber}`}>
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:scale-105 transition-all px-8">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Text
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl text-white mb-6">
                  Why Choose <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Car Keys</span>?
                </h2>
                <p className="text-white/70 mb-8 text-lg">
                  We're Raleigh's trusted emergency locksmith service. Licensed, insured, and committed to getting you back on the road quickly.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: CheckCircle2, text: 'Emergency Service - We never close', color: 'text-green-400' },
                    { icon: MapPin, text: 'Fast Response - Average 15 minute arrival', color: 'text-blue-400' },
                    { icon: Shield, text: 'Licensed & Insured in NC (Lic #2913)', color: 'text-purple-400' },
                    { icon: Star, text: 'Expert Technicians - Highly trained professionals', color: 'text-yellow-400' },
                    { icon: Award, text: 'No Hidden Fees - Transparent pricing', color: 'text-pink-400' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
                      <item.icon className={`w-6 h-6 ${item.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-white/90">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="inline-block rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                  <ImageWithFallback 
                    src={vanImage}
                    alt="Car Keys LLC service van"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
            <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl text-white mb-4">Serving Raleigh & Surrounding Areas</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Fast, reliable automotive locksmith services throughout the greater Raleigh area. 
              We're local, licensed, and ready to help you 24 hours a day.
            </p>
            <a href={`tel:${phoneNumber}`}>
              <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90 shadow-lg hover:scale-105 transition-all px-8">
                <Phone className="mr-2 h-5 w-5" />
                Get Help Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <a 
        href={`tel:${phoneNumber}`}
        className="fixed bottom-6 right-6 z-50 group animate-buzz"
      >
        <div className="relative">
          {/* Pulsing ring effects - multiple layers for continuous effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full animate-ping-fast opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Main button */}
          <div className="relative bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 rounded-full p-5 shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transform hover:scale-110 transition-all duration-300">
            <Phone className="w-7 h-7 text-white" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            <span className="text-white">Call Now: {formattedPhone}</span>
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
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl text-white">Car Keys</div>
              </div>
              <p className="text-white/60 mb-4">
                Professional emergency locksmith services in Raleigh, NC. Available for all your automotive locksmith needs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4">Services</h4>
              <ul className="space-y-2 text-white/60">
                <li>• Car Lockout Service</li>
                <li>• Key Replacement</li>
                <li>• Key Programming</li>
                <li>• Ignition Repair</li>
                <li>• Emergency Locksmith</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="flex flex-col gap-3">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="inline-block"
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white shadow-lg hover:scale-105 transition-all"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {formattedPhone}
                  </Button>
                </a>
                <a 
                  href={`sms:${smsNumber}`}
                  className="inline-block"
                >
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
              <div className="flex items-start gap-3 text-white/60 text-sm bg-white/5 backdrop-blur-md rounded-lg p-3 border border-white/10 mt-4">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                <span>Serving Raleigh and surrounding areas</span>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/90 mb-2">
              Car Keys, Licensed and insured locksmith in NC. lic:2913
            </p>
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Car Keys. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}