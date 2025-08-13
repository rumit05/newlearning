import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

export default function AdminPanel() {
  // Demo state for each section
  // Load initial state from localStorage if available
  const [bannerText, setBannerText] = useState(() => localStorage.getItem('home_bannerText') || 'Welcome to Patel Samaj Community');
  const [richText, setRichText] = useState(() => localStorage.getItem('home_richText') || 'Our community is dedicated to bringing together Patel families, celebrating our culture, and supporting each other through various events and initiatives.');
  const [galleryImages, setGalleryImages] = useState(() => {
    const stored = localStorage.getItem('home_galleryImages');
    return stored ? JSON.parse(stored) : [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80',
    ];
  });
  const [events, setEvents] = useState(() => {
    const stored = localStorage.getItem('home_events');
    return stored ? JSON.parse(stored) : [
      'Annual Cultural Festival - July 2025',
      'Community Picnic - June 2025',
      'Educational Seminar - May 2025',
    ];
  });
  const [footerText, setFooterText] = useState(() => localStorage.getItem('home_footerText') || '© 2025 Patel Samaj Community. All rights reserved.');

  // Save to localStorage whenever content changes
  useEffect(() => {
    localStorage.setItem('home_bannerText', bannerText);
  }, [bannerText]);
  useEffect(() => {
    localStorage.setItem('home_richText', richText);
  }, [richText]);
  useEffect(() => {
    localStorage.setItem('home_galleryImages', JSON.stringify(galleryImages));
  }, [galleryImages]);
  useEffect(() => {
    localStorage.setItem('home_events', JSON.stringify(events));
  }, [events]);
  useEffect(() => {
    localStorage.setItem('home_footerText', footerText);
  }, [footerText]);

  // Add/remove gallery images
  const addGalleryImage = () => setGalleryImages([...galleryImages, '']);
  const updateGalleryImage = (idx, value) => {
    const imgs = [...galleryImages];
    imgs[idx] = value;
    setGalleryImages(imgs);
  };
  const removeGalleryImage = idx => setGalleryImages(galleryImages.filter((_, i) => i !== idx));

  // Add/remove events
  const addEvent = () => setEvents([...events, '']);
  const updateEvent = (idx, value) => {
    const evs = [...events];
    evs[idx] = value;
    setEvents(evs);
  };
  const removeEvent = idx => setEvents(events.filter((_, i) => i !== idx));

  return (
    <div className="admin-container">
      <h1>Admin Panel - Manage Home Page</h1>

      <section className="admin-section">
        <h2>Banner</h2>
        <input type="text" value={bannerText} onChange={e => setBannerText(e.target.value)} />
      </section>

      <section className="admin-section">
        <h2>Rich Text</h2>
        <textarea value={richText} onChange={e => setRichText(e.target.value)} rows={4} />
      </section>

      <section className="admin-section">
        <h2>Gallery Images</h2>
        {galleryImages.map((img, idx) => (
          <div key={idx} className="admin-gallery-row">
            <input type="text" value={img} onChange={e => updateGalleryImage(idx, e.target.value)} placeholder="Image URL" />
            <button type="button" onClick={() => removeGalleryImage(idx)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addGalleryImage}>Add Image</button>
      </section>

      <section className="admin-section">
        <h2>Events</h2>
        {events.map((ev, idx) => (
          <div key={idx} className="admin-event-row">
            <input type="text" value={ev} onChange={e => updateEvent(idx, e.target.value)} placeholder="Event description" />
            <button type="button" onClick={() => removeEvent(idx)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addEvent}>Add Event</button>
      </section>

      <section className="admin-section">
        <h2>Footer</h2>
        <input type="text" value={footerText} onChange={e => setFooterText(e.target.value)} />
      </section>

      <div className="admin-note">
        <p><strong>Note:</strong> This demo admin panel only updates local state. To connect with your homepage, you can use localStorage, a backend, or context API.</p>
      </div>
    </div>
  );
}
