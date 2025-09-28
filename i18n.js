// 国际化语言数据
const translations = {
    'zh-CN': {
        // 页面标题
        'page-title': 'Vibe Code - AI编程助手',

        // 导航栏
        'nav-home': '首页',
        'nav-features': '功能特性',
        'nav-products': '产品矩阵',
        'nav-use-cases': '使用场景',
        'nav-quick-start': '快速开始',
        'nav-back-home': '回到首页',
        'nav-console': '控制台',

        // 英雄区域
        'hero-ai-programming': 'AI编程',
        'hero-efficiency': '效率加倍',
        'hero-subtitle': '专业的 AI 编程接口服务，为您的应用赋能',
        'btn-get-started': '开始使用',
        'btn-view-tutorial': '查看教程',

        // 统计数据
        'stat-developers': '开发者使用',
        'stat-api-calls': 'API调用',
        'stat-uptime': '服务可用率',

        // 核心优势
        'features-title': '核心优势',
        'features-subtitle': '领先的AI技术，为您提供最佳编程体验',
        'feature-smart-title': '智能高效',
        'feature-smart-desc': '基于最新的AI模型，提供智能代码补全、生成和优化建议',
        'feature-secure-title': '安全可靠',
        'feature-secure-desc': '企业级安全保障，数据加密传输，严格的隐私保护',
        'feature-flexible-title': '灵活易用',
        'feature-flexible-desc': '支持多种编程语言和开发环境，简单的API接口',
        'feature-global-title': '全球部署',
        'feature-global-desc': '全球多地区部署，智能路由，确保低延迟高性能的服务体验',
        'feature-collab-title': '实时协作',
        'feature-collab-desc': '支持团队实时协作，代码审查和知识共享',
        'feature-evolve-title': '持续进化',
        'feature-evolve-desc': '模型持续优化升级，不断学习最新技术栈',

        // 产品矩阵
        'products-title': '产品矩阵',
        'products-subtitle': '多样化的AI编程工具，满足不同场景需求',
        'product-claude-desc': '由 Anthropic 提供的强大代码生成与理解能力，适合复杂项目与重构',
        'product-claude-feature1': '最新 Claude 模型能力',
        'product-claude-feature2': '更长上下文窗口',
        'product-claude-feature3': '多语言编程支持',
        'product-claude-feature4': '代码分析与重构建议',
        'product-openai-desc': 'OpenAI Codex 系列能力，快速补全与上下文代码生成',
        'product-openai-feature1': 'Codex 系列模型接入',
        'product-openai-feature2': 'IDE 辅助与命令生成',
        'product-openai-feature3': '智能代码补全',
        'product-openai-feature4': '注释与文档生成',
        'product-gemini-desc': '多模态编程助手，图片到代码等高级能力（即将上线）',
        'product-gemini-feature1': 'Gemini 模型接入',
        'product-gemini-feature2': '多模态理解与生成',
        'product-gemini-feature3': '以图生代码',
        'product-gemini-feature4': '跨平台支持',
        'btn-use-now': '立即使用',
        'btn-coming-soon': '敬请期待',
        'badge-recommended': '推荐',
        'badge-coming-soon': '敬请期待',

        // 使用场景
        'use-cases-title': '使用场景',
        'use-cases-subtitle': '探索 VibeCode 在不同开发场景中的应用',
        'use-case-web-title': 'Web 开发',
        'use-case-web-desc': '加速前端和后端开发，提高开发效率',
        'use-case-web-feature1': '智能组件生成',
        'use-case-web-feature2': 'RESTful API 开发',
        'use-case-web-feature3': '数据库设计优化',
        'use-case-web-feature4': '响应式布局',
        'use-case-web-feature5': '状态管理方案',
        'use-case-refactor-title': '代码重构',
        'use-case-refactor-desc': '智能重构和架构优化，提升代码质量',
        'use-case-refactor-feature1': '遗留代码现代化',
        'use-case-refactor-feature2': '设计模式应用',
        'use-case-refactor-feature3': '代码结构优化',
        'use-case-refactor-feature4': '性能瓶颈分析',
        'use-case-refactor-feature5': '复杂度降低',
        'use-case-docs-title': '文档生成',
        'use-case-docs-desc': '自动生成高质量文档，节省文档编写时间',
        'use-case-docs-feature1': 'API 文档自动生成',
        'use-case-docs-feature2': '智能代码注释',
        'use-case-docs-feature3': 'README 文件生成',
        'use-case-docs-feature4': '文档标准化',
        'use-case-docs-feature5': 'Markdown 格式化',

        // 快速开始
        'quick-start-title': '快速开始',
        'quick-start-subtitle': '三步配置，即刻接入 AI 编程服务',
        'step1-title': '购买或兑换套餐',
        'step1-desc': '选择合适的服务（Claude Code / Codex），完成购买或兑换',
        'step2-title': '配置 API 地址与密钥',
        'step2-desc': '在控制台复制 API 地址与密钥，配置到本地/服务器环境中',
        'step3-title': '开始使用',
        'step3-desc': '在项目中调用接口或使用命令行工具验证接入',
        'btn-view-docs': '查看教程',
        'btn-purchase': '购买/兑换',

        // CTA 区域
        'cta-title': '准备好提升您的编程效率了吗？',
        'cta-subtitle': '加入数万开发者，体验AI编程的强大力量',
        'btn-start-now': '立即开始',

        // 页脚
        'footer-description': '专业的 AI 编程技术接口服务，为开发者与企业提供高效稳定的生产力工具',
        'footer-products': '产品',
        'footer-claude-code': 'Claude Code',
        'footer-codex-pro': 'Codex Pro',
        'footer-api-docs': 'API 文档',
        'footer-support': '支持',
        'footer-help': '帮助中心',
        'footer-community': '社区',
        'footer-contact': '联系我们',
        'footer-about': '关于',
        'footer-about-us': '关于我们',
        'footer-privacy': '隐私政策',
        'footer-terms': '服务条款',
        'footer-copyright': '© 2024 Vibe Code. 保留所有权利.',

        // AI 助手
        'assistant-text': 'AI助手'
    },

    'en': {
        // Page title
        'page-title': 'Vibe Code - AI Programming Assistant',

        // Navigation
        'nav-home': 'Home',
        'nav-features': 'Features',
        'nav-products': 'Products',
        'nav-use-cases': 'Use Cases',
        'nav-quick-start': 'Quick Start',
        'nav-back-home': 'Back to Home',
        'nav-console': 'Console',

        // Hero section
        'hero-ai-programming': 'AI Programming',
        'hero-efficiency': 'Efficiency Doubled',
        'hero-subtitle': 'Professional AI programming interface service to empower your applications',
        'btn-get-started': 'Get Started',
        'btn-view-tutorial': 'View Tutorial',

        // Statistics
        'stat-developers': 'Developers Using',
        'stat-api-calls': 'API Calls',
        'stat-uptime': 'Service Uptime',

        // Core advantages
        'features-title': 'Core Advantages',
        'features-subtitle': 'Leading AI technology provides you with the best programming experience',
        'feature-smart-title': 'Smart & Efficient',
        'feature-smart-desc': 'Based on the latest AI models, providing intelligent code completion, generation and optimization suggestions',
        'feature-secure-title': 'Secure & Reliable',
        'feature-secure-desc': 'Enterprise-level security, encrypted data transmission, strict privacy protection',
        'feature-flexible-title': 'Flexible & Easy',
        'feature-flexible-desc': 'Supports multiple programming languages and development environments, simple API interface',
        'feature-global-title': 'Global Deployment',
        'feature-global-desc': 'Global multi-region deployment, intelligent routing, ensuring low latency and high performance service experience',
        'feature-collab-title': 'Real-time Collaboration',
        'feature-collab-desc': 'Supports team real-time collaboration, code review and knowledge sharing',
        'feature-evolve-title': 'Continuous Evolution',
        'feature-evolve-desc': 'Continuous model optimization and upgrades, constantly learning the latest technology stack',

        // Product matrix
        'products-title': 'Product Matrix',
        'products-subtitle': 'Diversified AI programming tools to meet different scenario needs',
        'product-claude-desc': 'Powerful code generation and understanding capabilities provided by Anthropic, suitable for complex projects and refactoring',
        'product-claude-feature1': 'Latest Claude model capabilities',
        'product-claude-feature2': 'Longer context window',
        'product-claude-feature3': 'Multi-language programming support',
        'product-claude-feature4': 'Code analysis and refactoring suggestions',
        'product-openai-desc': 'OpenAI Codex series capabilities, fast completion and contextual code generation',
        'product-openai-feature1': 'Codex series model access',
        'product-openai-feature2': 'IDE assistance and command generation',
        'product-openai-feature3': 'Intelligent code completion',
        'product-openai-feature4': 'Comments and documentation generation',
        'product-gemini-desc': 'Multimodal programming assistant, advanced capabilities such as image-to-code (coming soon)',
        'product-gemini-feature1': 'Gemini model access',
        'product-gemini-feature2': 'Multimodal understanding and generation',
        'product-gemini-feature3': 'Image-to-code generation',
        'product-gemini-feature4': 'Cross-platform support',
        'btn-use-now': 'Use Now',
        'btn-coming-soon': 'Coming Soon',
        'badge-recommended': 'Recommended',
        'badge-coming-soon': 'Coming Soon',

        // Use cases
        'use-cases-title': 'Use Cases',
        'use-cases-subtitle': 'Explore VibeCode applications in different development scenarios',
        'use-case-web-title': 'Web Development',
        'use-case-web-desc': 'Accelerate frontend and backend development, improve development efficiency',
        'use-case-web-feature1': 'Smart component generation',
        'use-case-web-feature2': 'RESTful API development',
        'use-case-web-feature3': 'Database design optimization',
        'use-case-web-feature4': 'Responsive layout',
        'use-case-web-feature5': 'State management solutions',
        'use-case-refactor-title': 'Code Refactoring',
        'use-case-refactor-desc': 'Intelligent refactoring and architecture optimization to improve code quality',
        'use-case-refactor-feature1': 'Legacy code modernization',
        'use-case-refactor-feature2': 'Design pattern application',
        'use-case-refactor-feature3': 'Code structure optimization',
        'use-case-refactor-feature4': 'Performance bottleneck analysis',
        'use-case-refactor-feature5': 'Complexity reduction',
        'use-case-docs-title': 'Documentation Generation',
        'use-case-docs-desc': 'Automatically generate high-quality documentation, save documentation writing time',
        'use-case-docs-feature1': 'API documentation auto-generation',
        'use-case-docs-feature2': 'Smart code comments',
        'use-case-docs-feature3': 'README file generation',
        'use-case-docs-feature4': 'Documentation standardization',
        'use-case-docs-feature5': 'Markdown formatting',

        // Quick start
        'quick-start-title': 'Quick Start',
        'quick-start-subtitle': 'Three-step configuration, instant access to AI programming services',
        'step1-title': 'Purchase or Redeem Package',
        'step1-desc': 'Choose the right service (Claude Code / Codex), complete purchase or redemption',
        'step2-title': 'Configure API Address & Key',
        'step2-desc': 'Copy API address and key from console, configure to local/server environment',
        'step3-title': 'Start Using',
        'step3-desc': 'Call interface in project or use command line tools to verify integration',
        'btn-view-docs': 'View Tutorial',
        'btn-purchase': 'Purchase/Redeem',

        // CTA section
        'cta-title': 'Ready to boost your programming efficiency?',
        'cta-subtitle': 'Join tens of thousands of developers and experience the power of AI programming',
        'btn-start-now': 'Start Now',

        // Footer
        'footer-description': 'Professional AI programming technology interface service, providing efficient and stable productivity tools for developers and enterprises',
        'footer-products': 'Products',
        'footer-claude-code': 'Claude Code',
        'footer-codex-pro': 'Codex Pro',
        'footer-api-docs': 'API Documentation',
        'footer-support': 'Support',
        'footer-help': 'Help Center',
        'footer-community': 'Community',
        'footer-contact': 'Contact Us',
        'footer-about': 'About',
        'footer-about-us': 'About Us',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-copyright': '© 2024 Vibe Code. All rights reserved.',

        // AI assistant
        'assistant-text': 'AI Assistant'
    }
};

// 国际化管理器
class I18nManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'zh-CN';
        this.translations = translations;
    }

    // 获取当前语言
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // 设置语言
    setLanguage(language) {
        this.currentLanguage = language;
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
        this.updatePageContent();
        this.updateLanguageToggle();
    }

    // 切换语言
    toggleLanguage() {
        const newLanguage = this.currentLanguage === 'zh-CN' ? 'en' : 'zh-CN';
        this.setLanguage(newLanguage);
    }

    // 获取翻译文本
    t(key) {
        return this.translations[this.currentLanguage]?.[key] || key;
    }

    // 更新页面内容
    updatePageContent() {
        // 更新所有带有 data-i18n 属性的元素
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // 更新页面标题
        document.title = this.t('page-title');

        // 更新 meta 描述
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = this.t('hero-subtitle');
        }
    }

    // 更新语言切换按钮
    updateLanguageToggle() {
        const languageToggle = document.querySelector('#languageToggle .language-text');
        if (languageToggle) {
            languageToggle.textContent = this.currentLanguage === 'zh-CN' ? 'EN' : '中文';
        }
    }

    // 初始化
    init() {
        this.updatePageContent();
        this.updateLanguageToggle();

        // 设置HTML语言属性
        document.documentElement.lang = this.currentLanguage;
    }
}

// 导出国际化管理器
window.I18nManager = I18nManager;