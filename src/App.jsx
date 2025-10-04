export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-800">
        <h1 className="text-xl font-bold text-cyan-400">Shrihari Jawalgi</h1>
        <div className="space-x-4">
          <a href="#home" className="hover:text-cyan-300">Home</a>
          <a href="#about" className="hover:text-cyan-300">About</a>
          <a href="#experience" className="hover:text-cyan-300">Experience</a>
          <a href="#projects" className="hover:text-cyan-300">Projects</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-4xl font-extrabold mt-8">Hello 👋 I’m <span className="text-cyan-400">Shrihari Jawalgi</span></h2>
        <p className="mt-3 text-lg max-w-xl">
          2nd-year B.E. Info Science @ UVCE • Cybersecurity & DevOps Enthusiast 🚀
          <br /> Diploma in Cybersecurity • CTF Winner @ Google Developers Group UVCE
        </p>
        <a href="#projects" className="mt-5 inline-block px-5 py-2 bg-cyan-500 text-black rounded">View Projects</a>
      </header>

      {/* About Section */}
      <section id="about" className="px-6 py-10 bg-gray-800 mx-6 rounded">
        <h3 className="text-2xl text-cyan-300">About Me</h3>
        <p className="mt-2">
          Passionate about <b>Cybersecurity</b>, <b>Cloud</b>, and <b>Data Automation</b>.
          Experienced with <b>OWASP Top 10</b>, Nmap, Burp Suite, Wireshark, 
          and hands-on with <b>DevOps tools</b> like Docker, Jenkins, and Kubernetes.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-10">
        <h3 className="text-2xl text-cyan-300 mb-4">Experience</h3>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded">
            <h4 className="font-bold">Cybersecurity Intern — Rooman Technologies (Feb–Jun 2025)</h4>
            <p>Performed vulnerability assessments, OWASP Top 10 testing, Nmap, Burp Suite, Wireshark analysis. Delivered remediation reports.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h4 className="font-bold">AI Data Quality Analyst — Skill India (Dec 2024–Jun 2025)</h4>
            <p>Labeled & validated 2K+ datasets with 95% accuracy, built quality control processes, supported ML engineers in refining AI pipelines.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-10">
        <h3 className="text-2xl text-cyan-300 mb-4">Projects</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded">🏫 <b>University Campus Secure Network</b><br/> VLANs, Router-on-a-Stick, ACLs (Cisco Packet Tracer).</div>
          <div className="bg-gray-800 p-4 rounded">💰 <b>Personal Finance Analyzer</b><br/> MySQL + Power BI dashboards for finance insights.</div>
          <div className="bg-gray-800 p-4 rounded">🤖 <b>AI Data Analytics Chatbot</b><br/> Streamlit + Gemini API + ML visualizations.</div>
          <div className="bg-gray-800 p-4 rounded">🛡️ <b>ScamShield Hackathon</b><br/> Cybersecurity awareness app with gamified phishing/UPI fraud detection (Vercel hosted).</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-10 bg-gray-800 mx-6 rounded mb-8">
        <h3 className="text-2xl text-cyan-300">Contact</h3>
        <p className="mt-2">📧 <a href="mailto:shriharijawalgi@gmail.com" className="text-cyan-300">shriharijawalgi@gmail.com</a></p>
        <p>📞 +91 6363237636</p>
        <p><a className="text-cyan-300" href="https://github.com/Shrihari6" target="_blank">GitHub</a> · 
           <a className="text-cyan-300 ml-2" href="https://linkedin.com/in/shrihari-jawalgi" target="_blank">LinkedIn</a> · 
           <a className="text-cyan-300 ml-2" href="https://drive.google.com/drive/folders/1CLz8iPWqIrKXwaowVkMohc7CL8EoFfHP?usp=sharing" target="_blank">Certificates</a></p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700">© 2025 Shrihari Jawalgi</footer>
    </div>
  )
}
