  // Sample tool data


  const tools = [
    {
    id: 1,
        icon: "fas fa-magic",
        title: "Background Remover",
        description: "Remove image backgrounds instantly with AI. 100% free, no account.",
        tags: ["AI", "Image", "Editor", "Trending"],
        category: "image"
    },

    {
         id: 2,
        icon: "fas fa-passport",
        title: "Passport Photo Maker",
        description: "Create biometric passport, visa, ID photos. 2x2, 35x45mm, any country. Auto-crop, white background.",
        tags: ["Photo", "ID", "Utility"],
        category: "image",
        popularity: "🛂 Saves $15 per photo"
    },
    {
    id: 3,
        icon: "fas fa-file-pdf",
        title: "PDF to Word",
        description: "Convert PDF to editable Word documents with 99% accuracy. No upload limits.",
        tags: ["PDF", "Converter", "Document"],
        category: "pdf"
    },
    {
        id: 4,
        icon: "fas fa-file-alt",
        title: "PDF Merger",
        description: "Combine multiple PDF files into one document. Drag, drop, done.",
        tags: ["PDF", "Merge", "Document"],
        category: "pdf"
    },
    {
        id: 5,
        icon: "fas fa-file-signature",
        title: "PDF to JPG",
        description: "Convert PDF pages to high-quality JPG images. Batch conversion supported.",
        tags: ["PDF", "Converter", "Image"],
        category: "pdf"
    },
    {
        id: 6,
        icon: "fas fa-lock",
        title: "PDF Unlocker",
        description: "Remove password protection from PDF files. No software needed.",
        tags: ["PDF", "Unlock", "Password"],
        category: "pdf"
    },
    {
        id: 7,
        icon: "fas fa-compress-alt",
        title: "PDF Compressor",
        description: "Reduce PDF size by up to 80% while maintaining quality. Perfect for email.",
        tags: ["PDF", "Compress", "Document"],
        category: "pdf"
    },
    

    {
        id: 8,
        icon: "fas fa-expand-alt",
        title: "Image Resizer",
        description: "Resize images to any dimension. Bulk processing available.",
        tags: ["Image", "Resize", "Photo"],
        category: "image"
    },
    {
        id: 9,
        icon: "fas fa-exchange-alt",
        title: "Image Converter",
        description: "Convert between JPG, PNG, WebP, GIF, and AVIF instantly.",
        tags: ["Image", "Converter", "Format"],
        category: "image"
    },
    {
        id: 10,
        icon: "fas fa-undo-alt",
        title: "JPG to PNG",
        description: "Fast batch conversion from JPG to transparent PNG.",
        tags: ["Image", "Converter", "PNG"],
        category: "image"
    },
    {
        id: 11,
        icon: "fas fa-crop",
        title: "Image Cropper",
        description: "Crop images to perfect squares, circles, or custom dimensions.",
        tags: ["Image", "Crop", "Editor"],
        category: "image"
    }

  ]
//         const tools = [
//     // 🚀 AI VIDEO & IMAGE GENERATION (Hottest trend right now)
//     {
//         id: 1,
//         icon: "fas fa-video",
//         title: "AI Video Generator",
//         description: "Transform text and images into captivating videos instantly. No sign-up required.",
//         tags: ["AI", "Video", "Generator", "Trending"],
//         category: "ai"
//     },
//     {
//         id: 2,
//         icon: "fas fa-image",
//         title: "Text to Image AI",
//         description: "Generate stunning images from text descriptions. Free, unlimited, no login.",
//         tags: ["AI", "Image", "Generator", "Trending"],
//         category: "ai"
//     },
//     {
//         id: 3,
//         icon: "fas fa-magic",
//         title: "Background Remover",
//         description: "Remove image backgrounds instantly with AI. 100% free, no account.",
//         tags: ["AI", "Image", "Editor", "Trending"],
//         category: "image"
//     },
//     {
//         id: 4,
//         icon: "fas fa-robot",
//         title: "AI Chat Assistant",
//         description: "Free ChatGPT alternative. Ask anything, no subscription, no phone verification.",
//         tags: ["AI", "Chat", "Assistant", "Trending"],
//         category: "ai"
//     },
    
//     // 📁 PDF & DOCUMENT (Evergreen high traffic)
//     {
//         id: 5,
//         icon: "fas fa-file-pdf",
//         title: "PDF to Word",
//         description: "Convert PDF to editable Word documents with 99% accuracy. No upload limits.",
//         tags: ["PDF", "Converter", "Document"],
//         category: "pdf"
//     },
//     {
//         id: 6,
//         icon: "fas fa-file-alt",
//         title: "PDF Merger",
//         description: "Combine multiple PDF files into one document. Drag, drop, done.",
//         tags: ["PDF", "Merge", "Document"],
//         category: "pdf"
//     },
//     {
//         id: 7,
//         icon: "fas fa-file-signature",
//         title: "PDF to JPG",
//         description: "Convert PDF pages to high-quality JPG images. Batch conversion supported.",
//         tags: ["PDF", "Converter", "Image"],
//         category: "pdf"
//     },
//     {
//         id: 8,
//         icon: "fas fa-lock",
//         title: "PDF Unlocker",
//         description: "Remove password protection from PDF files. No software needed.",
//         tags: ["PDF", "Unlock", "Password"],
//         category: "pdf"
//     },
//     {
//         id: 9,
//         icon: "fas fa-compress-alt",
//         title: "PDF Compressor",
//         description: "Reduce PDF size by up to 80% while maintaining quality. Perfect for email.",
//         tags: ["PDF", "Compress", "Document"],
//         category: "pdf"
//     },
    
//     // 🖼️ IMAGE TOOLS (High volume)
//     {
//         id: 10,
//         icon: "fas fa-expand-alt",
//         title: "Image Resizer",
//         description: "Resize images to any dimension. Bulk processing available.",
//         tags: ["Image", "Resize", "Photo"],
//         category: "image"
//     },
//     {
//         id: 11,
//         icon: "fas fa-exchange-alt",
//         title: "Image Converter",
//         description: "Convert between JPG, PNG, WebP, GIF, and AVIF instantly.",
//         tags: ["Image", "Converter", "Format"],
//         category: "image"
//     },
//     {
//         id: 12,
//         icon: "fas fa-undo-alt",
//         title: "JPG to PNG",
//         description: "Fast batch conversion from JPG to transparent PNG.",
//         tags: ["Image", "Converter", "PNG"],
//         category: "image"
//     },
//     {
//         id: 13,
//         icon: "fas fa-crop",
//         title: "Image Cropper",
//         description: "Crop images to perfect squares, circles, or custom dimensions.",
//         tags: ["Image", "Crop", "Editor"],
//         category: "image"
//     },
//     {
//         id: 14,
//         icon: "fas fa-tint",
//         title: "Color Palette Generator",
//         description: "Extract beautiful color palettes from any image. HEX and RGB codes.",
//         tags: ["Image", "Color", "Design"],
//         category: "image"
//     },
    
//     // 🛠️ DEVELOPER & SEO (Professional traffic)
//     {
//         id: 15,
//         icon: "fas fa-code",
//         title: "HTML Beautifier",
//         description: "Format and clean messy HTML, CSS, JavaScript code instantly.",
//         tags: ["Dev", "Formatter", "Code"],
//         category: "dev"
//     },
//     {
//         id: 16,
//         icon: "fas fa-minify",
//         title: "CSS Minifier",
//         description: "Compress CSS files for faster website loading. Reduce file size by 60%.",
//         tags: ["Dev", "Minify", "Performance"],
//         category: "dev"
//     },
//     {
//         id: 17,
//         icon: "fas fa-search",
//         title: "SEO Meta Tag Generator",
//         description: "Generate optimized meta titles, descriptions, and keywords for better ranking.",
//         tags: ["SEO", "Generator", "Marketing"],
//         category: "seo"
//     },
//     {
//         id: 18,
//         icon: "fas fa-link",
//         title: "Backlink Checker",
//         description: "Analyze any website's backlinks and referring domains.",
//         tags: ["SEO", "Backlink", "Analyzer"],
//         category: "seo"
//     },
//     {
//         id: 19,
//         icon: "fas fa-tachometer-alt",
//         title: "Website Speed Test",
//         description: "Test page load speed and get optimization recommendations.",
//         tags: ["SEO", "Performance", "Analyzer"],
//         category: "seo"
//     },
//     {
//         id: 20,
//         icon: "fas fa-sitemap",
//         title: "XML Sitemap Generator",
//         description: "Create sitemap.xml for Google. Crawl entire websites automatically.",
//         tags: ["SEO", "Sitemap", "Google"],
//         category: "seo"
//     },
    
//     // 📧 PRIVACY & SECURITY (Massive demand for no-signup)
//     {
//         id: 21,
//         icon: "fas fa-envelope",
//         title: "Temp Mail",
//         description: "Disposable temporary email address. Protect your real inbox from spam.",
//         tags: ["Privacy", "Email", "No Signup"],
//         category: "utility"
//     },
//     {
//         id: 22,
//         icon: "fas fa-qrcode",
//         title: "QR Code Generator",
//         description: "Create custom QR codes for URLs, text, WiFi, vCard. No limits.",
//         tags: ["Utility", "QR", "Generator"],
//         category: "utility"
//     },
//     {
//         id: 23,
//         icon: "fas fa-qrcode",
//         title: "QR Code Scanner",
//         description: "Upload image and decode QR codes instantly. Camera access not needed.",
//         tags: ["Utility", "QR", "Scanner"],
//         category: "utility"
//     },
//     {
//         id: 24,
//         icon: "fas fa-calculator",
//         title: "Percentage Calculator",
//         description: "Fast percentage, discount, tip, and profit margin calculations.",
//         tags: ["Utility", "Calculator", "Math"],
//         category: "utility"
//     },
//     {
//         id: 25,
//         icon: "fas fa-stopwatch",
//         title: "Online Timer",
//         description: "Simple countdown timer and stopwatch. Works offline too.",
//         tags: ["Utility", "Timer", "Productivity"],
//         category: "utility"
//     },
    
//     // 🎵 MEDIA CONVERTERS (Surging demand)
//     {
//         id: 26,
//         icon: "fas fa-music",
//         title: "MP3 Cutter",
//         description: "Trim and cut audio files. Extract ringtones from songs.",
//         tags: ["Audio", "Editor", "MP3"],
//         category: "media"
//     },
//     {
//         id: 27,
//         icon: "fas fa-video",
//         title: "Video to GIF",
//         description: "Convert MP4, MOV, AVI to animated GIF. Adjust speed and quality.",
//         tags: ["Video", "GIF", "Converter"],
//         category: "media"
//     },
//     {
//         id: 28,
//         icon: "fas fa-headphones",
//         title: "Audio Converter",
//         description: "Convert between MP3, WAV, FLAC, M4A. High quality preservation.",
//         tags: ["Audio", "Converter", "Format"],
//         category: "media"
//     },
//     {
//         id: 29,
//         icon: "fas fa-youtube",
//         title: "YouTube Thumbnail Downloader",
//         description: "Download video thumbnails in HD, 4K quality. Just paste URL.",
//         tags: ["Video", "Downloader", "Thumbnail"],
//         category: "media"
//     },
    
//     // ✍️ WRITING & TEXT (Always high demand)
//     {
//         id: 30,
//         icon: "fas fa-spell-check",
//         title: "Grammar Checker",
//         description: "AI-powered grammar, spelling, and punctuation correction.",
//         tags: ["Writing", "Grammar", "Editor"],
//         category: "writing"
//     },
//     {
//         id: 31,
//         icon: "fas fa-paragraph",
//         title: "Word Counter",
//         description: "Count words, characters, sentences, and reading time.",
//         tags: ["Writing", "Counter", "SEO"],
//         category: "writing"
//     },
//     {
//         id: 32,
//         icon: "fas fa-language",
//         title: "Text Translator",
//         description: "Instant translation between 100+ languages. No account needed.",
//         tags: ["Writing", "Translator", "Language"],
//         category: "writing"
//     },

//     {
//         id: 31,
//         icon: "fas fa-robot",
//         title: "AI to Human Text Converter",
//         description: "Bypass GPTZero, Originality.ai, and Turnitin. Make AI content sound 100% human-written. No signup, unlimited uses.",
//         tags: ["AI", "Writing", "Bypass", "Trending"],
//         category: "writing",
//         popularity: "🚨 HIGHEST DEMAND 2026"
//     },

//     // 2. AI PROMPT LIBRARY (EASIEST TO IMPLEMENT - JUST TEXT)
//     {
//         id: 32,
//         icon: "fas fa-pencil-alt",
//         title: "AI Prompt Generator",
//         description: "100,000+ professional prompts for Midjourney, ChatGPT, DALL-E 3, and Stable Diffusion. Copy-paste ready.",
//         tags: ["AI", "Prompts", "Library", "Trending"],
//         category: "ai",
//         popularity: "🔥 23.4K+ monthly searches"
//     },

//     // 3. FAKE NAME GENERATOR (PRIVACY TOOL - NO DATABASE NEEDED)
//     {
//         id: 33,
//         icon: "fas fa-id-card",
//         title: "Fake Identity Generator",
//         description: "Generate random names, addresses, credit cards, and SSN for testing. 100% fake, 100% private. No account.",
//         tags: ["Privacy", "Testing", "Generator"],
//         category: "utility",
//         popularity: "📈 Developers #1 choice"
//     },

//     // 4. TEMP DISPOSABLE EMAIL (TOP PRIVACY TOOL 2026)
//     {
//         id: 34,
//         icon: "fas fa-envelope-open-text",
//         title: "Disposable Temp Mail",
//         description: "Instant temporary email address. Inbox auto-updates. No signup, no spam, no expiration worries.",
//         tags: ["Privacy", "Email", "No Signup"],
//         category: "privacy",
//         popularity: "🚀 10M+ uses/month"
//     },


//     // 7. PASSPORT/VISA PHOTO MAKER (HIGH COMMERCIAL VALUE)
//     {
//         id: 37,
//         icon: "fas fa-passport",
//         title: "Passport Photo Maker",
//         description: "Create biometric passport, visa, ID photos. 2x2, 35x45mm, any country. Auto-crop, white background.",
//         tags: ["Photo", "ID", "Utility"],
//         category: "image",
//         popularity: "🛂 Saves $15 per photo"
//     },

//     // 8. YOUTUBE THUMBNAIL DOWNLOADER (ALWAYS TRENDING)
//     {
//         id: 38,
//         icon: "fab fa-youtube",
//         title: "YouTube Thumbnail Grabber",
//         description: "Download any video thumbnail in HD, 4K, max resolution. Just paste URL. No watermark.",
//         tags: ["Video", "Downloader", "YouTube"],
//         category: "media",
//         popularity: "🎬 100K+ daily requests"
//     },

//     // 9. INSTAGRAM REELS/TIKTOK VIDEO DOWNLOADER (NO WATERMARK)
//     {
//         id: 39,
//         icon: "fab fa-tiktok",
//         title: "Social Video Downloader",
//         description: "Download TikTok, Reels, Shorts without watermark. HD quality. No app install needed.",
//         tags: ["Video", "Downloader", "Social"],
//         category: "media",
//         popularity: "📱 #1 requested tool"
//     },

//     // 10. BPM & KEY FINDER FOR MUSIC (DJ/PRODUCER NICHE)
//     {
//         id: 40,
//         icon: "fas fa-music",
//         title: "BPM & Key Detector",
//         description: "Upload any song. Detect BPM, musical key, camelot. Free for DJs and producers.",
//         tags: ["Audio", "Music", "DJ"],
//         category: "audio",
//         popularity: "🎵 50K+ tracks analyzed daily"
//     },

//     {
//         id: 41,
//         icon: "fas fa-file-invoice",
//         title: "Invoice Generator",
//         description: "Create professional PDF invoices. Free, no signup. Download or print.",
//         tags: ["Business", "PDF", "Finance"],
//         category: "business"
//     },
//     {
//         id: 42,
//         icon: "fas fa-signature",
//         title: "Signature Maker",
//         description: "Draw or type your digital signature. Download as PNG with transparent background.",
//         tags: ["Utility", "Signature", "Document"],
//         category: "utility"
//     },
//     {
//         id: 43,
//         icon: "fas fa-crop-alt",
//         title: "Circle Crop Tool",
//         description: "Crop any image into perfect circle/profile picture. Instant PNG with transparency.",
//         tags: ["Image", "Crop", "Profile"],
//         category: "image"
//     },
//     {
//         id: 44,
//         icon: "fas fa-ruler",
//         title: "Screen Ruler",
//         description: "Measure anything on your screen in pixels, cm, inches. Browser-based.",
//         tags: ["Utility", "Design", "Tool"],
//         category: "design"
//     },
//     {
//         id: 45,
//         icon: "fas fa-hashtag",
//         title: "Hashtag Generator",
//         description: "Generate viral hashtags for TikTok, Instagram, Reels. Platform optimized.",
//         tags: ["Social", "Hashtag", "Growth"],
//         category: "social"
//     }

// ];
        // DOM Elements
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navMenu = document.getElementById('navMenu');
        const themeToggle = document.getElementById('themeToggle');
        const heroSearch = document.getElementById('heroSearch');
        const searchBox = document.querySelector('.search-box');
        const pdfDropdown = document.getElementById('pdfDropdown');
        const seoDropdown = document.getElementById('seoDropdown');

        // Populate tools grid
        function populateToolsGrid() {
            const toolsGrid = document.getElementById('toolsGrid');
            toolsGrid.innerHTML = '';

            tools.forEach(tool => {
                const toolCard = document.createElement('div');
                toolCard.className = 'tool-card';
                toolCard.innerHTML = `
                    <div class="tool-icon">
                        <i class="${tool.icon}"></i>
                    </div>
                    <h3>${tool.title}</h3>
                    <p>${tool.description}</p>
                    <div class="tool-tags">
                        ${tool.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
                    </div>
                `;
                toolCard.addEventListener('click', () => {
                    if (tool.title === 'Image Resizer') {
                        window.location.href = 'imageresize.html';
                    } else if (tool.title === 'PDF Compressor') {
                        window.location.href = 'pdfcompresor.html';
                    }
                    else if (tool.title === 'SEO Analyzer') {
                        window.location.href = 'seoanalyzer.html';
                    } else if (tool.title === 'PDF to Word') {
                        window.location.href = 'pdftoword.html';
                    } else if (tool.title === 'Image Converter') {
                        window.location.href = 'imageconverter.html';
                    }


                    else {
                        alert(`Opening ${tool.title} tool...`);
                    }
                });
                toolsGrid.appendChild(toolCard);
            });
        }

        // Search functionality
        function setupSearch() {
            const searchHandler = (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const toolCards = document.querySelectorAll('.tool-card');

                toolCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const description = card.querySelector('p').textContent.toLowerCase();
                    const tags = Array.from(card.querySelectorAll('.tool-tag')).map(tag => tag.textContent.toLowerCase());

                    const matches = title.includes(searchTerm) ||
                        description.includes(searchTerm) ||
                        tags.some(tag => tag.includes(searchTerm));

                    card.style.display = matches ? 'block' : 'none';
                });
            };

            if (heroSearch) heroSearch.addEventListener('input', searchHandler);
            if (searchBox) searchBox.addEventListener('input', searchHandler);

            // Hero search button functionality
            const heroSearchButton = document.querySelector('.hero-input button');
            if (heroSearchButton && heroSearch) {
                heroSearchButton.addEventListener('click', () => {
                    if (heroSearch.value.trim()) {
                        heroSearch.dispatchEvent(new Event('input'));
                        window.scrollTo({
                            top: document.querySelector('.tools-grid').offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });

                heroSearch.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        heroSearchButton.click();
                    }
                });
            }
        }

        // Theme toggle functionality


        // Mobile menu toggle functionality
        function setupMobileMenu() {
            mobileMenuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');

                // Change menu icon
                const menuIcon = mobileMenuToggle.querySelector('i');
                if (navMenu.classList.contains('active')) {
                    menuIcon.className = 'fas fa-times';
                } else {
                    menuIcon.className = 'fas fa-bars';
                }
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) &&
                    !mobileMenuToggle.contains(e.target) &&
                    navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
                }
            });

            // Close menu when clicking on a link
            const navLinks = navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 992) {
                        navMenu.classList.remove('active');
                        mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
                    }
                });
            });
        }

        // Dropdown functionality for mobile
        function setupDropdowns() {
            [pdfDropdown, seoDropdown].forEach(dropdown => {
                if (dropdown) {
                    const toggle = dropdown.querySelector('a');
                    toggle.addEventListener('click', (e) => {
                        if (window.innerWidth <= 992) {
                            e.preventDefault();
                            e.stopPropagation();
                            dropdown.classList.toggle('active');

                            // Close other dropdowns
                            [pdfDropdown, seoDropdown].forEach(other => {
                                if (other !== dropdown) {
                                    other.classList.remove('active');
                                }
                            });
                        }
                    });
                }
            });

            // Close dropdowns when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.dropdown') && window.innerWidth <= 992) {
                    [pdfDropdown, seoDropdown].forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            });
        }

        // Initialize everything when DOM loads
        document.addEventListener('DOMContentLoaded', () => {
            populateToolsGrid();
            setupSearch();
            setupMobileMenu();
            setupDropdowns();

            // Add active class to current page in nav
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                if (link.href === window.location.href) {
                    link.classList.add('active');
                }
            });
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992) {
                navMenu.classList.remove('active');
                mobileMenuToggle.querySelector('i').className = 'fas fa-bars';

                // Reset dropdowns
                [pdfDropdown, seoDropdown].forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });