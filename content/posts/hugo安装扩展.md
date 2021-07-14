---
title: "Hugo 配置文章显示目录报错解决"
date: 2021-06-02T10:15:22+08:00
math: true
tags: [hugo]
categories: []
toc: true
---

使用 hugo 搭建博客，想要在文章中显示目录，需要在配置文件中添加
```yml
[params]
  toc = true
```
但是添加完之后再次启动会报错：
```yml
Warning “you need the extended version to build SCSS/SASS“ not triggered when it should 
```
意思是你需要安装 hugo 的扩展来编译 scss 文件。

官网的解释：

![](/image-20210702102237512.png)

安装的扩展在: [点这里](https://github.com/gohugoio/hugo/releases)

