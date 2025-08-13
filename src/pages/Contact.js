import './Contact.css';

export default function Contact() {
  return (
    <div className="container">
      {/* Image with text section */}
      <div className="contact-flex">
        <div className="contact-image">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <rect width="120" height="120" fill="#ddd" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#888" fontSize="16">Image</text>
          </svg>
        </div>
        <div>
          <h2 className="contact-title">Contact Us</h2>
          <p>We'd love to hear from you! Reach out for any inquiries or feedback.</p>
        </div>
      </div>

      {/* Rich text section */}
      <div className="contact-section">
        <h3>About Our Office</h3>
        <p>
          Our office is located in the heart of the city, providing easy access and a welcoming environment. Whether you have questions, need support, or want to collaborate, our team is here to assist you.
        </p>
      </div>

      {/* Contact details */}
      <div className="contact-section contact-details">
        <h3>Contact Details</h3>
        <p><strong>Address:</strong> 123 Main Street, Cityname, Country</p>
        <p><strong>Mobile:</strong> +1 234 567 8901</p>
        <p><strong>Email:</strong> contact@example.com</p>
      </div>

      {/* Google Map location */}
      <div className="contact-map">
        <h3>Our Location</h3>
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019123456789!2d-122.419415484681!3d37.7749297797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0b0b0b%3A0x0!2s123%20Main%20Street!5e0!3m2!1sen!2sus!4v1620000000000"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
