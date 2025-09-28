# 🚀 Vibe Code 部署指南

## GitHub Pages 部署

### 1. 自动部署（推荐）

1. **Fork 或创建仓库**
   ```bash
   git clone https://github.com/yourusername/vibe-code.git
   cd vibe-code
   ```

2. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库的 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 工作流会自动运行并部署站点

4. **访问网站**
   - 网站地址: `https://yourusername.github.io/vibe-code`

### 2. 手动部署

```bash
# 安装依赖
npm install

# 部署到 gh-pages 分支
npm run deploy
```

## 本地开发

### 1. 使用 Python
```bash
python -m http.server 8000
# 访问 http://localhost:8000
```

### 2. 使用 Node.js
```bash
npm install
npm run dev
# 或
npm run serve
```

### 3. 使用其他服务器
```bash
# 使用 VS Code Live Server 插件
# 右键 index.html → Open with Live Server
```

## 自定义配置

### 修改网站信息

1. **更新 `_config.yml`**
   ```yaml
   title: "Your Site Title"
   url: "https://yourusername.github.io"
   baseurl: "/your-repo-name"
   ```

2. **更新 `package.json`**
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```

3. **更新 HTML meta 标签**
   - 修改 `index.html` 中的 Open Graph 和 Twitter Card 信息

### 域名配置

1. **自定义域名**
   - 在仓库根目录创建 `CNAME` 文件
   - 写入你的域名: `your-domain.com`

2. **DNS 配置**
   - A 记录指向 GitHub Pages IP
   - 或 CNAME 记录指向 `yourusername.github.io`

## 功能特性

### 🌓 主题切换
- 自动保存用户选择的主题
- 平滑的主题切换动画
- 支持深色和亮色模式

### 🌍 多语言支持
- 中文/英文切换
- 基于 localStorage 的语言持久化
- 完整的界面翻译

### 📱 响应式设计
- 适配手机、平板、桌面
- 流畅的动画效果
- 现代化的玻璃质感UI

## 浏览器支持

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 性能优化

### 图片优化
- 使用 WebP 格式
- 适当的图片尺寸
- 懒加载实现

### CSS 优化
- CSS 变量主题切换
- 关键路径优化
- 最小化重排重绘

### JavaScript 优化
- 模块化代码组织
- 事件委托
- 防抖节流处理

## 故障排除

### 常见问题

1. **页面空白**
   - 检查控制台错误
   - 验证文件路径
   - 确认 GitHub Pages 已启用

2. **样式丢失**
   - 检查 CSS 文件路径
   - 验证 CDN 链接
   - 清除浏览器缓存

3. **JavaScript 错误**
   - 检查文件加载顺序
   - 验证 DOM 元素存在
   - 查看浏览器兼容性

### 调试技巧

```javascript
// 启用调试模式
localStorage.setItem('debug', 'true');

// 查看主题状态
console.log('Theme:', localStorage.getItem('theme'));

// 查看语言状态
console.log('Language:', localStorage.getItem('language'));
```

## 贡献指南

1. Fork 仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交改动 (`git commit -m 'Add amazing feature'`)
4. 推送分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

本项目基于 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 联系我们

- 🐛 问题反馈: [GitHub Issues](https://github.com/yourusername/vibe-code/issues)
- 💡 功能建议: [GitHub Discussions](https://github.com/yourusername/vibe-code/discussions)
- 📧 邮件联系: your-email@example.com

---

⭐ 如果这个项目对你有帮助，请给个星标！