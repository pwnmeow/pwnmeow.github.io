/**
 * Cyberpunk Terminal Theme - Main JavaScript
 * Sheeraz Ali Portfolio
 */

(function() {
  'use strict';

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('.site-header');
  if (header) {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // Typing effect for terminal cursor
  const cursors = document.querySelectorAll('.cmd-cursor');
  cursors.forEach(cursor => {
    setInterval(() => {
      cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 530);
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.post-card, .expertise-card, .credential-item').forEach(el => {
    fadeObserver.observe(el);
  });

  // Glitch effect enhancement
  const glitchElements = document.querySelectorAll('.glitch');
  glitchElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.classList.add('glitch-active');
    });
    el.addEventListener('mouseleave', () => {
      el.classList.remove('glitch-active');
    });
  });

  // Add loaded class for initial animations
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

  // Console easter egg
  console.log('%c> SYSTEM INITIALIZED', 'color: #22c55e; font-size: 20px; font-weight: bold;');
  console.log('%c> Welcome to Sheeraz Ali\'s Terminal', 'color: #06b6d4; font-size: 14px;');
  console.log('%c> Security Researcher | Content Engineer @ HackTheBox', 'color: #888; font-size: 12px;');
  console.log('%c> github.com/pwnmeow', 'color: #888; font-size: 12px;');

})();
