---
layout: post
title: "PageHelper 在springboot 中的使用"
date: 2018-11-01 21:15:06 
description: "分页插件的使用"
tag: SpringBoot
---
分页的逻辑在业务中总是存在，虽说不算复杂，但也必须处理。结合 Mybatis 使用，PageHelper 无疑是最好的选择。

### 引入坐标
```xml
<!-- 分页插件pagehelper -->
<dependency>
	<groupId>com.github.pagehelper</groupId>
	<artifactId>pagehelper</artifactId>
	<version>5.0.0</version>
</dependency>
<dependency>
	<groupId>com.github.pagehelper</groupId>
	<artifactId>pagehelper-spring-boot-autoconfigure</artifactId>
	<version>1.2.3</version>
</dependency>
<dependency>
	<groupId>com.github.pagehelper</groupId>
	<artifactId>pagehelper-spring-boot-starter</artifactId>
	<version>1.2.3</version>
</dependency>
```
### 配置文件中配置
```yml
pagehelper:
  helper-dialect: mysql
  reasonable: true
  support-methods-arguments: true
  params: count=countSql
```
### 代码中使用
```java
@Override
public PageInfo<Article> queryArticleByPage(Integer currentPage, Integer pageSize) {

	PageHelper.startPage(currentPage, pageSize);
	List<Article> list = articleMapper.queryAllArticle();
	PageInfo<Article> pageInfo = new PageInfo<>(list);

	return pageInfo;

}
```