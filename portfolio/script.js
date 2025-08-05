// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');

// Custom Cursor
let cursorVisible = false;
let cursorEnlarged = false;

const cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: true,
    cursorEnlarged: false,
    $outline: cursorOutline,
    $dot: cursorDot,

    init: function() {
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        this.setupEventListeners();
        this.animateDotOutline();
    },

    setupEventListeners: function() {
        const self = this;
        
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
        
        document.addEventListener('mousemove', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        document.addEventListener('mouseenter', function() {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function() {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },

    animateDotOutline: function() {
        const self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function() {
        const self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },

    toggleCursorVisibility: function() {
        const self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
};

// Navigation
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function handleScroll() {
    // Navbar background
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    updateActiveNavLink();
    
    // Animate elements on scroll
    animateOnScroll();
}

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
    
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        if (barTop < window.innerHeight - 100 && !bar.classList.contains('animated')) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
            bar.classList.add('animated');
        }
    });
}

// Project modal functionality
const projectData = {
    1: {
        title: 'Automated Inventory Management',
        description: 'A comprehensive inventory management system that leverages RPA technology to automate stock tracking, order processing, and supply chain management. Built with UiPath for automation workflows, Python for data processing, React for the frontend interface, and MySQL for robust data storage.',
        features: [
            'Automated stock level monitoring',
            'Real-time inventory tracking',
            'Automated purchase order generation',
            'Supplier management system',
            'Advanced reporting and analytics',
            'Multi-location inventory support'
        ],
        technologies: ['UiPath', 'Python', 'React', 'MySQL', 'Node.js', 'Express'],
        challenges: 'Integrating multiple systems while maintaining data consistency and handling real-time updates across different inventory locations.',
        outcome: 'Reduced manual processing time by 80% and improved inventory accuracy by 95%.'
    },
    2: {
        title: 'CVRatings Telegram Bot',
        description: 'An intelligent Telegram bot that analyzes CVs/resumes using natural language processing and provides detailed ratings and feedback. Built with n8n for workflow automation, advanced NLP algorithms, and PDF processing capabilities to help both recruiters and job seekers.',
        features: [
            'Automated CV parsing and analysis',
            'Skills extraction and matching',
            'Industry-specific rating algorithms',
            'Personalized improvement suggestions',
            'Multi-language support',
            'Integration with job boards'
        ],
        technologies: ['n8n', 'NLP', 'Python', 'Telegram API', 'PDF.js', 'Machine Learning'],
        challenges: 'Developing accurate NLP models for different CV formats and ensuring reliable PDF text extraction across various document structures.',
        outcome: 'Successfully processed over 1000 CVs with 92% accuracy in skill identification and user satisfaction.'
    }
};

// Project card click handlers
document.querySelectorAll('.project-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectCard = e.target.closest('.project-card');
        const projectId = projectCard.getAttribute('data-project');
        showProjectModal(projectId);
    });
});

function showProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    modalContent.innerHTML = `
        <h2 style="color: #00FFFF; margin-bottom: 1rem; font-size: 2rem;">${project.title}</h2>
        <p style="color: #cccccc; line-height: 1.8; margin-bottom: 2rem;">${project.description}</p>
        
        <h3 style="color: #8A2BE2; margin-bottom: 1rem;">Key Features</h3>
        <ul style="color: #cccccc; margin-bottom: 2rem; padding-left: 1.5rem;">
            ${project.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
        </ul>
        
        <h3 style="color: #8A2BE2; margin-bottom: 1rem;">Technologies Used</h3>
        <div style="margin-bottom: 2rem;">
            ${project.technologies.map(tech => `
                <span style="background: rgba(0, 255, 255, 0.1); color: #00FFFF; padding: 5px 12px; border-radius: 20px; font-size: 0.9rem; margin-right: 0.5rem; margin-bottom: 0.5rem; display: inline-block; border: 1px solid rgba(0, 255, 255, 0.3);">${tech}</span>
            `).join('')}
        </div>
        
        <h3 style="color: #8A2BE2; margin-bottom: 1rem;">Challenges & Solutions</h3>
        <p style="color: #cccccc; line-height: 1.8; margin-bottom: 2rem;">${project.challenges}</p>
        
        <h3 style="color: #8A2BE2; margin-bottom: 1rem;">Outcome</h3>
        <p style="color: #cccccc; line-height: 1.8;">${project.outcome}</p>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show success message (in real implementation, you would send data to server)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    e.target.reset();
});

// Add animation classes to elements
function addAnimationClasses() {
    // About section
    document.querySelector('.about-image').classList.add('slide-in-left');
    document.querySelector('.about-text').classList.add('slide-in-right');
    
    // Skills
    document.querySelectorAll('.skill-item').forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in');
        }, index * 100);
    });
    
    // Projects
    document.querySelectorAll('.project-card').forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 200);
    });
    
    // Timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        const isEven = index % 2 === 0;
        item.classList.add(isEven ? 'slide-in-left' : 'slide-in-right');
    });
    
    // Contact items
    document.querySelectorAll('.contact-item').forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('slide-in-left');
        }, index * 100);
    });
    
    document.querySelector('.contact-form').classList.add('slide-in-right');
}

// Particle effect for hero section
function createParticleEffect() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${5 + Math.random() * 10}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        document.querySelector('.hero-particles').appendChild(particle);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    cursor.init();
    addAnimationClasses();
    createParticleEffect();
    
    // Initial scroll check
    handleScroll();
});

// Event listeners
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', () => {
    // Handle resize if needed
});

// Smooth scroll for scroll-down arrow
document.querySelector('.scroll-down').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add hover effects to buttons and links
document.querySelectorAll('.btn, .social-link, .nav-link').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.cursorEnlarged = true;
        cursor.toggleCursorSize();
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.cursorEnlarged = false;
        cursor.toggleCursorSize();
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    
    // Animate hero text
    setTimeout(() => {
        document.querySelector('.hero-name').style.opacity = '1';
        document.querySelector('.hero-name').style.transform = 'translateY(0)';
    }, 500);
    
    setTimeout(() => {
        document.querySelector('.hero-title').style.opacity = '1';
        document.querySelector('.hero-title').style.transform = 'translateY(0)';
    }, 800);
    
    setTimeout(() => {
        document.querySelector('.hero-tagline').style.opacity = '1';
        document.querySelector('.hero-tagline').style.transform = 'translateY(0)';
    }, 1100);
    
    setTimeout(() => {
        document.querySelector('.hero-buttons').style.opacity = '1';
        document.querySelector('.hero-buttons').style.transform = 'translateY(0)';
    }, 1400);
});

// Add initial styles for loading animation
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = ['.hero-name', '.hero-title', '.hero-tagline', '.hero-buttons'];
    heroElements.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s ease';
        }
    });
});