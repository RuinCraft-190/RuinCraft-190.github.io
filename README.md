# RuinCraft 博客

基于 [Hexo](https://hexo.io/) 搭建的个人博客，使用 [hexo-theme-amazing](https://github.com/removeif/hexo-theme-amazing) 主题。

## 博客内容

- 游戏攻略 — 游戏技巧与心得分享
- 技术分享 — 编程开发中的经验与解决方案
- 日常分享 — 生活中值得记录的瞬间

## 项目结构

```
game-blog/
├── source/              # 博客源文件
│   ├── _posts/          # 文章（Markdown）
│   ├── img/             # 图片资源
│   ├── about/           # 关于页面
│   ├── album/           # 相册页面
│   └── ...              # 其他页面
├── themes/amazing/      # 主题文件
├── _config.yml          # 博客配置
└── package.json         # 依赖管理
```

## 常用命令

```bash
# 新建文章
hexo new "文章标题"

# 本地预览
hexo clean && hexo generate && hexo server

# 部署到 GitHub Pages
hexo clean && hexo generate && hexo deploy
```

## 相关仓库

| 仓库 | 用途 |
|------|------|
| [RuinCraft-190.github.io](https://github.com/RuinCraft-190/RuinCraft-190.github.io) | 博客站点（GitHub Pages） |
| [blog-images](https://github.com/RuinCraft-190/blog-images) | 图床仓库（头像、图片等） |
| [blog-comment](https://github.com/RuinCraft-190/blog-comment) | 评论存储（Gitalk Issues） |

## 致谢

- [Hexo](https://hexo.io/) — 静态博客框架
- [hexo-theme-amazing](https://github.com/removeif/hexo-theme-amazing) — 博客主题
- [Gitalk](https://github.com/gitalk/gitalk) — 评论系统
- [jsDelivr](https://www.jsdelivr.com/) — CDN 加速服务
- [GitHub Pages](https://pages.github.com/) — 免费站点托管
