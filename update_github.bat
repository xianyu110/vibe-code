@echo off
echo 🚀 正在推送更新到 GitHub...

git add .
git commit -m "🔗 Add external links: tutorial and purchase buttons with animations"
git push origin main

echo ✅ 推送完成！
echo 🌐 网站地址: https://xianyu110.github.io/vibe-code
echo 📊 查看部署状态: https://github.com/xianyu110/vibe-code/actions

pause