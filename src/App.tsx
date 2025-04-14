import { Github, Linkedin, Mail, BookOpen, Code2, GraduationCap, User, Phone, MapPin, Medal, BadgeCheck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#4eae2e]">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center text-white px-4 relative">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://sigmawire.net/i/03/2aQIyA.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[#4eae2e] bg-opacity-85"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <img
              src="https://sigmawire.net/i/03/2aQIyA.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-xl object-cover"
            />
          </div>
          <h1 className="text-6xl font-bold mb-6">JAYA SAI KIRAN CHADALAVADA</h1>
          <p className="text-2xl mb-8">Computer Science Student & Aspiring Developer</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/jayasai333/" target='_blank' className="hover:text-gray-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jayasaikiran9100/" target='_blank' className="hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="jayasaikiran93@gmail.com" target='_blank' className="hover:text-gray-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className='mt-8'>
          <a href="Resume-jaya sai kiran.pdf" download="Resume" target='_blank'>
          <button type="button" className="text-white-700 hover:text-green border-2 border-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white-500 dark:text-white-500 dark:hover:text-green-800 dark:hover:bg-white dark:focus:ring-white-800">Resume</button>
          </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-[#4eae2e]" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            I'm a passionate Computer Science student with a keen interest in web development
            and artificial intelligence. Currently pursuing my degree, I love to explore new
            technologies and build projects that solve real-world problems.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-[#4eae2e]" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-4">Programming Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>C++</span>
                  <div className="w-48 bg-gray-200 rounded-full h-2">
                    <div className="bg-[#4eae2e] h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Java</span>
                  <div className="w-48 bg-gray-200 rounded-full h-2">
                    <div className="bg-[#4eae2e] h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Python</span>
                  <div className="w-48 bg-gray-200 rounded-full h-2">
                    <div className="bg-[#4eae2e] h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                 <div className="flex justify-between">
                  <span>EXEL</span>
                  <div className="w-48 bg-gray-200 rounded-full h-2">
                    <div className="bg-[#4eae2e] h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-4">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full">HTML</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Certification Section*/}
      <section id="certification" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Medal className="text-[#4eae2e]" />
            <h2 className="text-3xl font-bold">Certification</h2>
          </div>
          <div className="space-y-8">

            <div className="flex items-center gap-2 mb-8">
            <BadgeCheck className="text-[#4eae2e]"/>
              <h3 className="font-bold">Machine Learning by SmartInternz</h3>
            </div>

            <div className="flex items-center gap-2 mb-8">
            <BadgeCheck className="text-[#4eae2e]"/>
              <h3 className="font-bold">Google Android Developer Virtual Internship</h3>
            </div>

            <div className="flex items-center gap-2 mb-8">
            <BadgeCheck className="text-[#4eae2e]"/>
              <h3 className="font-bold">Salesforce Developer Internship</h3>
            </div>

            <div className="flex items-center gap-2 mb-8">
            <BadgeCheck className="text-[#4eae2e]"/>
              <h3 className="font-bold">Joy of Computing using Python (NPTEL)</h3>
            </div>
            <div className="flex items-center gap-2 mb-8">
            <BadgeCheck className="text-[#4eae2e]"/>
              <h3 className="font-bold">Operating System Fundamentals (NPTEL)</h3>
            </div>

          </div>

        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="text-[#4eae2e]" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-8">
            <div className="border-l-4 border-[#4eae2e] pl-4">
              <h3 className="font-bold">B.Tech in Computer Science and Engineering</h3>
              <p className="text-gray-600">Kallam Haranadhareddy Institute of Technology</p>
              <p className="text-sm text-gray-500">2022 - 2025 / Score - 75%</p>
            </div>
            <div className="border-l-4 border-[#4eae2e] pl-4">
              <h3 className="font-bold">Diploma</h3>
              <p className="text-gray-600">MBTS Govt Polytechnic College</p>
              <p className="text-sm text-gray-500">2018 - 2021 / Score - 70%</p>
            </div>
             <div className="border-l-4 border-[#4eae2e] pl-4">
              <h3 className="font-bold">Secondary Education</h3>
              <p className="text-gray-600">Bharatiya Vidya Bhavan's Vidyashram</p>
              <p className="text-sm text-gray-500">2008 - 2018 / Score - 63%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="text-[#4eae2e]" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-2">"SMS - Spam Detection"</h3>
              <p className="text-gray-600 mb-4">
                Using machine learning involves applying various ML techniques to automatically classify text messages as spam or non-spam (ham).
              </p>
              <div className="flex gap-2">
                <span className="text-sm px-2 py-1 bg-gray-100 rounded">Classifiers</span>
                 <span className="text-sm px-2 py-1 bg-gray-100 rounded">Natural Language Processing</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-2">Tic Tac Toe</h3>
              <p className="text-gray-600 mb-4">
                A two-player game played on a 3x3 grid. The goal is to be the first player to align three of their marks (either "X" or "O") in a row, either horizontally, vertically, or diagonally.
              </p>
              <div className="flex gap-2">
                <span className="text-sm px-2 py-1 bg-gray-100 rounded">Support Vector Machines (SVM)</span>
                <span className="text-sm px-2 py-1 bg-gray-100 rounded">React</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Mail className="text-[#4eae2e]" />
            <h2 className="text-3xl font-bold">Contact Me</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-[#4eae2e]" size={20} />
                  <span className="text-gray-600">jayasaikiran93@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#4eae2e]" size={20} />
                  <span className="text-gray-600">(+91) 9100996854</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#4eae2e]" size={20} />
                  <span className="text-gray-600">Andhra Pradesh, IND</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF4500] focus:border-[#FF4500]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF4500] focus:border-[#FF4500]"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FF4500] focus:border-[#FF4500]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4eae2e] text-white py-2 px-4 rounded-lg hover:bg-[#FF6347] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4eae2e] text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>© 2025 Jaya Sai Kiran. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;