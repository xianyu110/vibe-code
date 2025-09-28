# 🚀 快速部署指南

## 步骤 1: 准备仓库

你的仓库地址: https://github.com/xianyu110/vibe-code.git

```bash
# 如果还没有推送代码到仓库
git add .
git commit -m "Initial commit: Add Vibe Code website with theme switching and i18n"
git push origin main
```

## 步骤 2: 启用 GitHub Pages

1. **进入仓库设置**
   - 访问: https://github.com/xianyu110/vibe-code/settings
   - 点击左侧菜单的 "Pages"

2. **配置 Pages 设置**
   - **Source**: 选择 "GitHub Actions"
   - **Custom domain**: 可选，如果有自己的域名

3. **等待部署完成**
   - GitHub Actions 会自动运行
   - 查看部署状态: https://github.com/xianyu110/vibe-code/actions

## 步骤 3: 访问网站

🌐 **网站地址**: https://xianyu110.github.io/vibe-code

## 步骤 4: 验证功能

### 主题切换测试
- [ ] 点击右上角的 🌙 图标
- [ ] 验证主题从深色切换到亮色
- [ ] 图标应该变成 ☀️
- [ ] 刷新页面，主题设置应该保持

### 语言切换测试
- [ ] 点击右上角的 "EN" 按钮
- [ ] 验证页面内容从中文切换到英文
- [ ] 按钮文字应该变成 "中文"
- [ ] 刷新页面，语言设置应该保持

### 响应式测试
- [ ] 在手机上打开网站
- [ ] 验证布局适应小屏幕
- [ ] 测试所有功能正常工作

## 常见问题排查

### 1. 页面 404 错误
- 确认 GitHub Pages 已启用
- 检查仓库是否为 public
- 等待几分钟让部署完成

### 2. 样式丢失
- 检查 CSS 文件路径
- 验证 `styles.css` 文件存在
- 清除浏览器缓存

### 3. JavaScript 功能不工作
- 打开浏览器开发者工具
- 查看 Console 是否有错误
- 确认 `script.js` 和 `i18n.js` 正确加载

### 4. 主题切换不工作
- 检查 localStorage 是否被禁用
- 确认 CSS 变量正确定义
- 验证主题切换事件监听器

## 自定义配置

### 修改网站标题
编辑 `index.html` 中的 `<title>` 标签和 `_config.yml` 中的 `title` 字段

### 添加自定义域名
1. 在仓库根目录创建 `CNAME` 文件
2. 写入你的域名，如: `vibe-code.com`
3. 配置 DNS 记录指向 GitHub Pages

### 修改配色方案
编辑 `styles.css` 中的 CSS 变量:
```css
:root {
    --accent-orange: #your-color;
}
```

## 下一步

- 🎨 自定义样式和配色
- 📝 添加更多页面内容
- 🔧 集成真实的 API 接口
- 📊 添加网站分析工具
- 🌍 增加更多语言支持

---

🎉 **恭喜！你的 Vibe Code 网站已经成功部署到 GitHub Pages！**

如果遇到问题，请在 [Issues](https://github.com/xianyu110/vibe-code/issues) 中反馈。