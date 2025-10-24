// DOM元素
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const heroSection = document.querySelector('.hero-section');
const statNumbers = document.querySelectorAll('.stat-number');
const providerItems = document.querySelectorAll('.provider-item');
const buttons = document.querySelectorAll('.btn-primary, .btn-cta, .btn-secondary-outline, .product-btn');
const assistantBubble = document.querySelector('.assistant-bubble');
const featureCards = document.querySelectorAll('.feature-card');
const productCards = document.querySelectorAll('.product-card');
const useCaseCards = document.querySelectorAll('.use-case-card');
const stepCards = document.querySelectorAll('.step-card');

// 主题和语言管理器
const themeToggle = document.querySelector('#themeToggle');
const languageToggle = document.querySelector('#languageToggle');
let i18nManager;

// 主题管理器
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.bindEvents();
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeIcon();
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    updateThemeIcon() {
        const themeIcon = document.querySelector('#themeToggle .theme-icon');
        if (themeIcon) {
            themeIcon.textContent = this.currentTheme === 'dark' ? '☀️' : '🌙';
        }
    }

    bindEvents() {
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();

                // 添加切换动画效果
                document.body.style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    document.body.style.transition = '';
                }, 300);
            });
        }
    }
}

// 导航栏滚动效果
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
        navbar.style.background = 'var(--navbar-blur-bg)';
        navbar.style.boxShadow = '0 10px 25px var(--shadow-color)';
    } else {
        navbar.style.background = 'var(--navbar-bg)';
        navbar.style.boxShadow = 'none';
    }

    lastScrollY = currentScrollY;
});

// 数字动画效果
const animateNumbers = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalNumber = target.textContent;
            const isPercentage = finalNumber.includes('%');
            const isLargeNumber = finalNumber.includes('K') || finalNumber.includes('M');

            let endValue;
            let suffix = '';

            if (isPercentage) {
                endValue = parseFloat(finalNumber);
                suffix = '%';
            } else if (finalNumber.includes('K')) {
                endValue = parseFloat(finalNumber) * 1000;
                suffix = 'K+';
            } else if (finalNumber.includes('M')) {
                endValue = parseFloat(finalNumber) * 1000000;
                suffix = 'M+';
            } else {
                endValue = parseInt(finalNumber);
            }

            animateValue(target, 0, endValue, 2000, suffix, isLargeNumber);
            observer.unobserve(target);
        }
    });
};

const animateValue = (element, start, end, duration, suffix, isLargeNumber) => {
    const startTime = performance.now();
    const range = end - start;

    const updateValue = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const current = start + (range * easedProgress);

        let displayValue;
        if (isLargeNumber) {
            if (suffix === 'K+') {
                displayValue = Math.floor(current / 1000);
            } else if (suffix === 'M+') {
                displayValue = Math.floor(current / 1000000);
            }
        } else {
            displayValue = suffix === '%' ? current.toFixed(1) : Math.floor(current);
        }

        element.textContent = displayValue + suffix;

        if (progress < 1) {
            requestAnimationFrame(updateValue);
        }
    };

    requestAnimationFrame(updateValue);
};

// 缓动函数
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

// 创建交集观察器
const numberObserver = new IntersectionObserver(animateNumbers, {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
});

// 观察所有统计数字
statNumbers.forEach(stat => {
    numberObserver.observe(stat);
});

// 提供商卡片悬停效果
providerItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-8px) scale(1.02)';
        item.style.boxShadow = '0 15px 35px rgba(255, 107, 53, 0.2)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
        item.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
    });

    // 错开动画
    setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    }, index * 200);
});

// 按钮点击效果
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // 创建涟漪效果
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// 添加涟漪动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// AI助手气泡交互
let assistantVisible = true;

assistantBubble.addEventListener('click', () => {
    if (assistantVisible) {
        assistantBubble.style.transform = 'scale(0)';
        assistantBubble.style.opacity = '0';
        setTimeout(() => {
            assistantBubble.style.display = 'none';
        }, 300);
    } else {
        assistantBubble.style.display = 'block';
        setTimeout(() => {
            assistantBubble.style.transform = 'scale(1)';
            assistantBubble.style.opacity = '1';
        }, 10);
    }
    assistantVisible = !assistantVisible;
});

// 随机显示不同的助手消息
const assistantMessages = [
    'AI助手',
    '需要帮助？',
    '代码助手',
    '智能编程',
    '效率提升'
];

let messageIndex = 0;
setInterval(() => {
    if (assistantVisible) {
        assistantBubble.querySelector('.assistant-text').textContent = assistantMessages[messageIndex];
        messageIndex = (messageIndex + 1) % assistantMessages.length;
    }
}, 3000);

// 平滑滚动导航
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');

        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        // 更新活动状态
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// 鼠标跟随效果
let mouseX = 0;
let mouseY = 0;
let isMouseMoving = false;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMouseMoving = true;

    // 创建鼠标跟随光点效果
    if (!document.querySelector('.mouse-glow')) {
        const glow = document.createElement('div');
        glow.className = 'mouse-glow';
        glow.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
        `;
        document.body.appendChild(glow);
    }

    const glow = document.querySelector('.mouse-glow');
    glow.style.left = mouseX - 10 + 'px';
    glow.style.top = mouseY - 10 + 'px';

    clearTimeout(window.mouseTimeout);
    window.mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
        if (glow) {
            glow.style.opacity = '0';
        }
    }, 100);

    if (glow) {
        glow.style.opacity = '1';
    }
});

// 卡片动画效果
const addCardAnimations = (cards, baseDelay = 0) => {
    const animateCards = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, (index * 150) + baseDelay);
                observer.unobserve(entry.target);
            }
        });
    };

    const cardObserver = new IntersectionObserver(animateCards, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        cardObserver.observe(card);
    });
};

// 滚动视差效果
const addParallaxEffect = () => {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.feature-icon, .use-case-icon, .step-number');

        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
};

// 产品卡片特殊效果
const addProductCardEffects = () => {
    productCards.forEach(card => {
        const btn = card.querySelector('.product-btn');

        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('coming-soon')) {
                card.style.transform = 'translateY(-10px) scale(1.02)';
                card.style.boxShadow = '0 25px 50px rgba(255, 107, 53, 0.15)';
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'none';
        });

        if (btn && !btn.classList.contains('disabled')) {
            btn.addEventListener('click', () => {
                // 模拟跳转效果
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 150);
            });
        }
    });
};

// 步骤卡片递进动画
const addStepAnimations = () => {
    const animateSteps = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stepCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';

                        // 数字跳动效果
                        const number = card.querySelector('.step-number');
                        if (number) {
                            number.style.animation = 'bounce 0.6s ease';
                        }
                    }, index * 300);
                });
                observer.unobserve(entry.target);
            }
        });
    };

    const stepObserver = new IntersectionObserver(animateSteps, {
        threshold: 0.3
    });

    if (stepCards.length > 0) {
        stepCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px) scale(0.9)';
            card.style.transition = 'all 0.6s ease';
        });
        stepObserver.observe(stepCards[0]);
    }
};

// 导航高亮效果
const addNavigationHighlight = () => {
    const sections = document.querySelectorAll('section[id]');

    const highlightNavigation = () => {
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
    };

    window.addEventListener('scroll', highlightNavigation);
};

// 页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // 初始化主题和语言管理器
    const themeManager = new ThemeManager();
    i18nManager = new I18nManager();
    i18nManager.init();

    // 绑定语言切换事件
    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            i18nManager.toggleLanguage();

            // 添加切换动画效果
            languageToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                languageToggle.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // 初始化所有动画
    addCardAnimations(providerItems, 0);
    addCardAnimations(featureCards, 200);
    addCardAnimations(productCards, 400);
    addCardAnimations(useCaseCards, 600);
    addProductCardEffects();
    addStepAnimations();
    addParallaxEffect();
    addNavigationHighlight();

    // 添加外部链接点击事件
    addExternalLinkHandlers();
});

// 外部链接处理器
const addExternalLinkHandlers = () => {
    // 教程链接
    const tutorialBtns = document.querySelectorAll('#tutorialBtn, .tutorialBtn');
    tutorialBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://code.claude-opus.top/admin-next/api-stats', '_blank');

            // 添加点击动画
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // 购买/兑换链接
    const purchaseBtn = document.querySelector('#purchaseBtn');
    if (purchaseBtn) {
        purchaseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://maynorai.56775678.xyz/?cid=5', '_blank');

            // 添加点击动画
            purchaseBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                purchaseBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // 立即开始按钮
    const startNowBtn = document.querySelector('#startNowBtn');
    if (startNowBtn) {
        startNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://maynorai.56775678.xyz/?cid=5', '_blank');

            // 添加点击动画
            startNowBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                startNowBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // 开始使用按钮 (英雄区域)
    const getStartedBtn = document.querySelector('.hero-actions .btn-cta');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://maynorai.56775678.xyz/?cid=5', '_blank');

            // 添加点击动画
            getStartedBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                getStartedBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // 店铺链接按钮
    const shopBtn = document.querySelector('#shopBtn');
    if (shopBtn) {
        shopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://maynorai.tqfk.xyz/?cid=5&mid=7', '_blank');

            // 添加点击动画
            shopBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                shopBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Claude Code 产品按钮
    const claudeBtn = document.querySelector('#claudeBtn');
    if (claudeBtn) {
        claudeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://maynorai.56775678.xyz/?cid=5', '_blank');

            // 添加点击动画
            claudeBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                claudeBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // OpenAI Codex 产品按钮
    const codexBtn = document.querySelector('#codexBtn');
    if (codexBtn) {
        codexBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://maynorai.56775678.xyz/?cid=5', '_blank');

            // 添加点击动画
            codexBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                codexBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // 其他产品卡片按钮 (除了特定ID的按钮)
    const otherProductBtns = document.querySelectorAll('.product-btn:not(.disabled):not(#claudeBtn):not(#codexBtn)');
    otherProductBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://maynorai.56775678.xyz/?cid=5', '_blank');

            // 添加点击动画
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // 控制台按钮
    const consoleBtn = document.querySelector('[data-i18n="nav-console"]');
    if (consoleBtn) {
        consoleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://code.claude-opus.top/admin-next/api-stats', '_blank');

            // 添加点击动画
            consoleBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                consoleBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }
};

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K 打开搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        alert('搜索功能即将推出！');
    }

    // ESC 键关闭助手
    if (e.key === 'Escape' && assistantVisible) {
        assistantBubble.click();
    }
});

console.log('🎵 Vibe Code - AI编程助手已加载完成！');
console.log('💡 提示：按 Ctrl+K 可以快速搜索');