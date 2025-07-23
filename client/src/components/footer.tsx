import { Linkedin, Twitter, Facebook, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              ZaPP <span className="text-accent">|</span> Solutions
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in AI and digital transformation, based in Dubai.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">AI Strategy</a></li>
              <li><a href="#" className="hover:text-white">Custom Development</a></li>
              <li><a href="#" className="hover:text-white">Process Automation</a></li>
              <li><a href="#" className="hover:text-white">Team Training</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-white">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("portfolio")} className="hover:text-white">
                  Portfolio
                </button>
              </li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-white">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                ceo@zappsolutions.com
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Dubai, UAE
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Sun-Thu: 9AM-6PM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 ZaPP Solutions. All rights reserved. |{" "}
            <a href="#" className="hover:text-white">Privacy Policy</a> |{" "}
            <a href="#" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
