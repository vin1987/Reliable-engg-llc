
// Language Translations
let currentLang = 'en';

// Scroll to top on page load/refresh
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

// Also handle page refresh
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

const translations = {
    en: {
        nav: ['Home', 'About', 'Services', 'RFQ', 'Testimonials', 'Blog', 'Gallery', 'Contact']
    },
    es: {
        nav: ['Inicio', 'Acerca', 'Servicios', 'RFQ', 'Testimonios', 'Blog', 'Galería', 'Contacto']
    }
};

// Language Switcher - Single Toggle Button
const langToggle = document.getElementById('langToggle');
const langOptions = document.querySelectorAll('.lang-option');

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        if (lang === currentLang) return;
        
        currentLang = lang;
        
        // Update active state
        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        // Update all translatable elements
        document.querySelectorAll('[data-en]').forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = text;
                } else {
                    el.innerHTML = text;
                }
            }
        });
    });
});

// Mobile Dropdown Toggle
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 968) {
            e.preventDefault();
            const navItem = toggle.closest('.nav-item');
            navItem.classList.toggle('open');
        }
    });
});

// Select the <a> element by its ID
const startedToday = document.getElementById('startedToday');
const rfqNavLink = document.getElementById('rfqNavLink');

// Add a click event listener
startedToday.addEventListener('click', function(event) {
    // Prevent the default behavior (e.g., navigating to href)
        event.preventDefault();
        rfqContactContent.classList.toggle('active');
        rfqContactToggle.classList.toggle('active');
       
  });

  rfqNavLink.addEventListener('click', function(event) {
    // Prevent the default behavior (e.g., navigating to href)
        event.preventDefault();
        rfqContactContent.classList.toggle('active');
        rfqContactToggle.classList.toggle('active');
       
  });

  

// Collapsible RFQ & Contact Section
const rfqContactHeader = document.getElementById('rfqContactHeader');
const rfqContactContent = document.getElementById('rfqContactContent');
const rfqContactToggle = document.getElementById('rfqContactToggle');

rfqContactHeader.addEventListener('click', () => {
    rfqContactContent.classList.toggle('active');
    rfqContactToggle.classList.toggle('active');
});

const certificationsNavLink = document.getElementById('certificationsNavLink');
certificationsNavLink.addEventListener('click', function(event) {
    // Prevent the default behavior (e.g., navigating to href)
        event.preventDefault();
        certificationContent.classList.toggle('active');
        certificationToggle.classList.toggle('active');
       
  });

// Collapsible certification Section
const certificationHeader = document.getElementById('certificationsHeader');
const certificationContent = document.getElementById('certificationsContent');
const certificationToggle = document.getElementById('certificationsToggle');

certificationHeader.addEventListener('click', () => {
    certificationContent.classList.toggle('active');
    certificationToggle.classList.toggle('active');
});

// Gradient Navigation Bar on Scroll
const navbar = document.getElementById('navbar');
const dropdownContent = document.getElementById('dropdownContent');
const dropbtn = document.getElementById('dropbtn');

const heroSection = document.querySelector('.hero');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add gradient to navbar when scrolled
     if (scrollTop > 50) {
         navbar.classList.add('scrolled');
         dropdownContent.classList.add('scrolled');
         dropbtn.classList.add('scrolled');
    } else {
         navbar.classList.remove('scrolled');
         dropdownContent.classList.remove('scrolled');
         dropbtn.classList.remove('scrolled');
     }
    
    // Fade out hero section behind header
    const heroRect = heroSection.getBoundingClientRect();
    const navbarHeight = navbar.offsetHeight;
    
    // If hero section is scrolling behind navbar
    if (heroRect.top < navbarHeight && heroRect.bottom > 0) {
        heroSection.classList.add('fade-top');
    } else {
        heroSection.classList.remove('fade-top');
    }
    
    lastScrollTop = scrollTop;
});

// Gallery Data
const galleryData = [
    { icon: '🏭', title: 'USA Manufacturing Facility', description: '70,000 sq. ft. state-of-the-art facility in Chenoa, Illinois equipped with modern machinery and quality control systems.' },
    { icon: '⚙️', title: 'CNC Machining Center', description: 'High-precision 5-axis CNC machines for complex geometries and tight tolerances up to 20-30 microns.' },
    { icon: '✂️', title: 'Laser Cutting Systems', description: 'Advanced fiber laser cutting machines with automated nesting software for optimal material utilization.' },
    { icon: '🔧', title: 'Sheet Metal Components', description: 'Precision fabricated sheet metal parts for automotive and industrial applications with perfect finish.' },
    { icon: '🔨', title: 'Stamping Press', description: 'High-tonnage hydraulic stamping presses for high-volume production with consistent quality.' },
    { icon: '📐', title: 'FARO Inspection Arm', description: 'Advanced 3D measurement technology ensuring dimensional accuracy and quality compliance for every part.' },
    { icon: '⚡', title: 'Busbar Assembly', description: 'Custom-designed copper and aluminum busbars for efficient power distribution in industrial systems.' },
    { icon: '🌏', title: 'India Manufacturing Facility', description: '50,000 sq. ft. facility in Nashik with expansion potential to 250,000 sq. ft. for scalable production.' },
    { icon: '👷', title: 'Expert Engineering Team', description: '50+ years of combined expertise in design, prototyping, and manufacturing engineering.' },
    { icon: '🔩', title: 'Precision Machined Parts', description: 'Complex CNC machined components for Caterpillar, Navistar, and Komatsu heavy equipment.' },
    { icon: '🤖', title: 'Robotic Welding Cell', description: 'Automated welding systems for consistent weld quality and increased production efficiency.' },
    { icon: '✅', title: 'Quality Control Lab', description: 'ISO 9001:2015 certified quality lab with advanced testing equipment and inspection protocols.' },
    { icon: 'https://reliable-engg.com/wp-content/uploads/2025/01/Picture21.jpg', title: 'My Product Items', description: 'ISO 9001:2015 certified quality lab with advanced testing equipment and inspection protocols.' }
];

let currentImageIndex = 0;

// Gallery Filter Functionality
const filterButtons = document.querySelectorAll('.filter-button');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

// Open lightbox
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        currentImageIndex = parseInt(item.getAttribute('data-index'));
        openLightbox(currentImageIndex);
    });
});

function openLightbox(index) {
    const data = galleryData[index];
    lightboxContent.innerHTML = `
        <div class="lightbox-placeholder">
            <div class="lightbox-placeholder-icon">${data.icon}</div>
            <h2 style="margin-bottom: 1rem;">${data.title}</h2>
            <p style="font-size: 1.1rem; line-height: 1.7;">${data.description}</p>
        </div>
    `;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Navigate lightbox
lightboxPrev.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    openLightbox(currentImageIndex);
});

lightboxNext.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryData.length;
    openLightbox(currentImageIndex);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') lightboxPrev.click();
        if (e.key === 'ArrowRight') lightboxNext.click();
    }
});

// Quick Contact Form Toggle
const contactToggle = document.getElementById('contactToggle');
const quickContactForm = document.getElementById('quickContactForm');
const closeQuickContact = document.getElementById('closeQuickContact');

contactToggle.addEventListener('click', () => {
    quickContactForm.classList.toggle('active');
});

closeQuickContact.addEventListener('click', () => {
    quickContactForm.classList.remove('active');
});

// Close quick contact form when clicking outside
document.addEventListener('click', (e) => {
    if (!quickContactForm.contains(e.target) && !contactToggle.contains(e.target)) {
        quickContactForm.classList.remove('active');
    }
});

// Quick Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message')
    };
    
    const emailSubject = `Quick Contact from ${data.name}`;
    const emailBody = `
NEW CONTACT MESSAGE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

Message:
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted on: ${new Date().toLocaleString()}
    `.trim();
    
    try {
        // Using mailto for immediate functionality
        const mailtoLink = `mailto:info@reliable-engg.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
        
        setTimeout(() => {
            alert('Thank you for contacting us! We will get back to you within 24 hours.');
            this.reset();
            quickContactForm.classList.remove('active');
        }, 500);
        
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again or email us directly at info@reliable-engg.com');
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link (except dropdown parent)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Don't close if it's the Resources dropdown parent on mobile
        if (link.classList.contains('dropdown-toggle') && window.innerWidth <= 968) {
            return;
        }
        // Close menu for all other links
        if (!link.closest('.nav-item') || link.getAttribute('href') !== '#') {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Prevent dropdown parent link from navigating on desktop
document.querySelectorAll('.nav-item > a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth > 968) {
            e.preventDefault();
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// RFQ Form Submission
document.getElementById('rfqForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Get form data
    const formData = new FormData(this);
    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company'),
        service: formData.get('service'),
        quantity: formData.get('quantity'),
        timeline: formData.get('timeline'),
        details: formData.get('details')
    };
    
    // Create email content
    const emailSubject = `New RFQ from ${data.firstName} ${data.lastName} - ${data.company}`;
    const emailBody = `
NEW REQUEST FOR QUOTATION

CONTACT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}

PROJECT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service Required: ${data.service}
Estimated Quantity: ${data.quantity || 'Not specified'}
Project Timeline: ${data.timeline || 'Not specified'}

PROJECT DESCRIPTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.details}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted on: ${new Date().toLocaleString()}

Please respond to this inquiry within 24 hours.
    `.trim();
    
    try {
        // Method 1: Using EmailJS (Recommended - Free tier available)
        // Sign up at https://www.emailjs.com/ and replace with your credentials
        
        // Uncomment and configure this when you set up EmailJS:
        /*
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            to_email: 'info@reliable-engg.com', // Your company email
            from_name: data.firstName + ' ' + data.lastName,
            from_email: data.email,
            phone: data.phone,
            company: data.company,
            service: data.service,
            quantity: data.quantity,
            timeline: data.timeline,
            details: data.details,
            subject: emailSubject
        }).then(function(response) {
            alert('Thank you for your RFQ submission! Our team will review your request and respond within 24 hours.');
            document.getElementById('rfqForm').reset();
        }, function(error) {
            alert('There was an error sending your request. Please try again or contact us directly.');
            console.error('EmailJS Error:', error);
        });
        */
        
        // Method 2: Using FormSubmit (No registration needed - Simple solution)
        const formSubmitUrl = 'https://formsubmit.co/your-email@reliable-engg.com'; // Replace with your email
        
        const formSubmitData = new FormData();
        formSubmitData.append('_subject', emailSubject);
        formSubmitData.append('_template', 'table');
        formSubmitData.append('Name', `${data.firstName} ${data.lastName}`);
        formSubmitData.append('Email', data.email);
        formSubmitData.append('Phone', data.phone);
        formSubmitData.append('Company', data.company);
        formSubmitData.append('Service', data.service);
        formSubmitData.append('Quantity', data.quantity);
        formSubmitData.append('Timeline', data.timeline);
        formSubmitData.append('Details', data.details);
        
        // Uncomment this to use FormSubmit:
        /*
        const response = await fetch(formSubmitUrl, {
            method: 'POST',
            body: formSubmitData
        });
        
        if (response.ok) {
            alert('Thank you for your RFQ submission! Our team will review your request and respond within 24 hours.');
            this.reset();
        } else {
            throw new Error('Form submission failed');
        }
        */
        
        // Method 3: Using mailto (Works immediately but opens email client)
        const mailtoLink = `mailto:info@reliable-engg.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
        
        // Show success message after a short delay
        setTimeout(() => {
            alert('Your email client will open with the RFQ details. Please send the email to complete your submission.\n\nAlternatively, our team can set up automatic email delivery for you.');
            this.reset();
        }, 500);
        
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error processing your request. Please try again or contact us directly at info@reliable-engg.com');
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .feature-card, .process-step, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Animate testimonials and blog cards
document.querySelectorAll('.testimonial-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Animate gallery items
document.querySelectorAll('.gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
}); 

// Carousel Functionality
// Mock image URLs since the original site doesn't provide image list
// In a real scenario, these would be fetched from the gallery page

const images = [
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture15.jpg',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture18.png',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture19.jpg',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture20.png',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture21.jpg',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture22.jpg',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture23.jpg',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture25.png',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture28.jpg',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture30.jpg',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture32.jpg',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture35.png',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture36.jpg',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture38.png',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture40.png',
'https://reliable-engg.com/wp-content/uploads/2025/01/Picture41.png'
];

const carouselInner = document.getElementById('carouselInner');
const indicatorsContainer = document.getElementById('indicators');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Populate parts carousel
images.forEach((src, index) => {
const item = document.createElement('div');
item.classList.add('carousel-item');
item.innerHTML = `<img src="${src}" alt="Gallery Image ${index + 1}">`;
carouselInner.appendChild(item);

const indicator = document.createElement('div');
indicator.classList.add('indicator');
if (index === 0) indicator.classList.add('active');
indicator.addEventListener('click', () => goToSlide(index));
indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicator');

function updateCarousel() {
carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

// Update indicators
indicators.forEach((indicator, index) => {
if (index === currentIndex) {
  indicator.classList.add('active');
} else {
  indicator.classList.remove('active');
}
});
}

function goToSlide(index) {
currentIndex = index;
updateCarousel();
}

function nextSlide() {
currentIndex = (currentIndex + 1) % images.length;
updateCarousel();
}

function prevSlide() {
currentIndex = (currentIndex - 1 + images.length) % images.length;
updateCarousel();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-advance every 5 seconds
setInterval(nextSlide, 15000);
