import './Home.css';

export default function Home() {
  return (
    <div className="slsgv-home">
      {/* Hero Section */}
      <section className="slsgv-hero">
        <div className="slsgv-hero-content">
          <img src="https://slsgv.org/images/logo.png" alt="SLSGV Logo" style={{height: '80px', marginBottom: '1rem'}} />
          <h1>Shree Samast Leuva Patel Samaj - Gota Vaishno Devi</h1>
          <p>Nurturing lifelong learning and personal growth through innovative education initiatives and empowering experiences.</p>
          <div className="slsgv-hero-actions">
            <a href="#donate" className="slsgv-btn slsgv-btn-primary">Donate Now</a>
            <a href="#join" className="slsgv-btn slsgv-btn-secondary">Join Us Now</a>
          </div>
        </div>
        <img src="https://slsgv.org/images/background/fluid-image-1.jpg" alt="Hero Background" className="slsgv-hero-bg" />
      </section>

      {/* Help For Building Cards */}
      <section className="slsgv-help-cards">
        <div className="slsgv-card">
          <img src="https://slsgv.org/images/background/fluid-image-1.jpg" alt="Education" style={{width: '100%', borderRadius: '12px', marginBottom: '1rem'}} />
          <h2>Help For Building Education</h2>
          <p>Nurturing lifelong learning and personal growth through innovative education initiatives and empowering experiences.</p>
          <a href="#donate" className="slsgv-btn slsgv-btn-primary">Donate Now</a>
        </div>
        <div className="slsgv-card">
          <img src="https://slsgv.org/images/background/fluid-image-1.jpg" alt="Healthcare" style={{width: '100%', borderRadius: '12px', marginBottom: '1rem'}} />
          <h2>Help For Building Healthcare</h2>
          <p>Promoting well-being and improving lives through accessible, compassionate, and quality healthcare services.</p>
          <a href="#donate" className="slsgv-btn slsgv-btn-primary">Donate Now</a>
        </div>
        <div className="slsgv-card">
          <img src="https://slsgv.org/images/background/fluid-image-1.jpg" alt="Community" style={{width: '100%', borderRadius: '12px', marginBottom: '1rem'}} />
          <h2>Help For Building Community</h2>
          <p>Fostering connections and unity through shared passions, support, and collaboration to build a thriving community.</p>
          <a href="#donate" className="slsgv-btn slsgv-btn-primary">Donate Now</a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="slsgv-about">
        <div className="slsgv-about-content">
          <h2>About Us</h2>
          <p>We lead positive social change and deliver value to members through information, advocacy and service. "Together forever" is our success keyword that strengthen our community. We have that chance that we can bring change in SSLPS by every potential means.</p>
          <div className="slsgv-about-actions">
            <a href="#readmore" className="slsgv-btn slsgv-btn-secondary">Read More</a>
            <a href="#video" className="slsgv-btn slsgv-btn-secondary">Watch Video</a>
          </div>
        </div>
      </section>

      {/* Latest Activities Section */}
      <section className="slsgv-activities">
        <h2>Watch Our Latest Activities</h2>
        <p>Our annual function is scheduled for January 2024, and we’re excited to share this special event with all of you. It promises to be a memorable occasion filled with activities, performances, and moments to cherish.</p>
        <div className="slsgv-activities-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Latest Activities" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="slsgv-whatwedo">
        <h2>We Are Non-Profit Charitable Organization</h2>
        <div className="slsgv-features">
          <div className="slsgv-feature">
            <h3>Education</h3>
            <p>We firmly believe that education is the key to personal growth and community advancement. To that end, we provide scholarships, grants, and educational resources to deserving students within our community.</p>
          </div>
          <div className="slsgv-feature">
            <h3>Membership Development</h3>
            <p>Empowering our community is a core aspect of our work. We offer vocational training, skill development programs, and mentorship initiatives to help individuals enhance their capabilities.</p>
          </div>
          <div className="slsgv-feature">
            <h3>Health Facilities</h3>
            <p>Healthcare is of utmost importance to us, and we aim to ensure that our community members have access to quality medical services. We organize health camps, awareness programs, and facilitate medical assistance for those in need.</p>
          </div>
          <div className="slsgv-feature">
            <h3>Help People</h3>
            <p>As an organization, we value unity, inclusivity, and mutual respect. We believe in creating a strong community bond and fostering a sense of belonging among our members.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="slsgv-mission-vision">
        <div className="slsgv-mission">
          <h2>Our Mission</h2>
          <p>Our mission is to contribute to the betterment of society by addressing various social issues and promoting education, healthcare, empowerment, and sustainable development. We strive to create opportunities and provide support to individuals and communities in need, fostering positive change and holistic well-being.</p>
        </div>
        <div className="slsgv-vision">
          <h2>Our Vision</h2>
          <p>Our vision is to build a just and inclusive society where every individual has access to education, healthcare, and equal opportunities for growth. We envision a community that values compassion, empowers its members, and embraces innovation and sustainable practices for a brighter future.</p>
        </div>
      </section>

      {/* Founder Members Section */}
      <section className="slsgv-founders">
        <h2>Our Founder Members</h2>
        <div className="slsgv-founders-grid">
          {[
            { name: 'Sandip Lakhani', role: 'Founder Member', img: 'https://slsgv.org/images/resource/sandip.jpg' },
            { name: 'Khush Radadiya', role: 'Founder Member', img: 'https://slsgv.org/images/logo.png' },
            { name: 'Nikunj Bhuva', role: 'Founder Member', img: 'https://slsgv.org/images/logo.png' },
            { name: 'Nirav Bhuva', role: 'Founder Member', img: 'https://slsgv.org/images/logo.png' },
            { name: 'Sunil Kanpariya', role: 'Former President', img: 'https://slsgv.org/images/logo.png' },
            { name: 'Tushar Mangroliya', role: 'Former President', img: 'https://slsgv.org/images/logo.png' },
            { name: 'Ankur Gadhiya', role: 'Founder Member', img: 'https://slsgv.org/images/logo.png' },
            { name: 'Harshad Pansuriya', role: 'Founder Member', img: 'https://slsgv.org/images/logo.png' },
            { name: 'Hitesh Ramoliya', role: 'President', img: 'https://slsgv.org/images/logo.png' },
            { name: 'Ankit Hidad', role: 'Vice President', img: 'https://slsgv.org/images/logo.png' },
            { name: 'Kevin Rakholiya', role: 'Secretary', img: 'https://slsgv.org/images/logo.png' },
            { name: 'Jignesh Dudhat', role: 'Treasurer', img: 'https://slsgv.org/images/logo.png' },
            { name: 'Chetan Sojitra', role: 'Former President', img: 'https://slsgv.org/images/logo.png' },
            { name: 'Jatin Sangani', role: 'Founder Member', img: 'https://slsgv.org/images/logo.png' },
            { name: 'Jaydip Sojitra', role: 'Founder Member', img: 'https://slsgv.org/images/logo.png' },
          ].map((member, i) => (
            <div className="slsgv-founder-card" key={i}>
              <div className="slsgv-founder-avatar">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="slsgv-founder-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Footer Section */}
      <footer className="slsgv-footer">
        <div className="slsgv-footer-contact">
          <p><strong>Call:</strong> <a href="tel:9979384572">+91 9979384572</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@sslps.in">info@sslps.in</a></p>
        </div>
        <div className="slsgv-footer-links">
          <a href="#about">About</a>
          <a href="#privacy">Privacy & Policy</a>
          <a href="#refund">Refund Policy</a>
          <a href="#terms">Terms & Condition</a>
          <a href="#donate">Donation</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="slsgv-footer-copy">
          <p>SLSGV © 2025 All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
}
