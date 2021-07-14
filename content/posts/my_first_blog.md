---

title: "Java8 终端操作"
date: 2021-06-01T21:46:37+08:00
math: true
tags: ["Java流"]
categories: [Java]
toc: true
---
### Java 流式操作

anyMatch：判断条件中任意一个元素与之匹配，返回 true。

allMatch：判断条件中所有元素相同，返回 true。

```java
List<Integer> integers = Arrays.asList(1, 2, 3, 4, 5, 6);
boolean anyMatch = integers.stream().anyMatch(item -> item == 3);
System.out.println("anyMatch = " + anyMatch); // true
boolean allMatch = integers.stream().allMatch(item -> item == 3);
System.out.println("allMatch = " + allMatch); // false

List<Integer> list = Arrays.asList(6, 6, 6, 6, 6, 6);
boolean allMatchList = list.stream().allMatch(item -> item == 6);
System.out.println("allMatchList = " + allMatchList); // true
```

如果想要获取匹配的元素，可以使用过滤。

```java
List<Integer> integers = Arrays.asList(1, 2, 3, 4, 5, 6);
Optional<Integer> result = integers.stream().filter(item -> item == 3).findFirst();
if (result.isPresent()) {
    Integer integer = result.get(); // 3
}
```

### 流式排序

1. 基本类型

   ```java
   List<Integer> integers = Arrays.asList(1, 2, 3, 4, 5, 6);
   integers.stream().sorted().collect(Collectors.toList()); // [1, 2, 3, 4, 5, 6]
   integers.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList()); // [6, 5, 4, 3, 2, 1]
   ```

2. 对象

   ```java
   list.stream().sorted(Comparator.comparing(对象::属性)).collect(Collectors.toList());
   list.stream().sorted(Comparator.comparing(对象::属性).reversed()).collect(Collectors.toList());
   ```

   
