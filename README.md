# @where_is_mr_li/storage

> 对 web storage 的增强和封装

## 安装依赖

github:

```bash
git clone https://github.com/WhereIsMsXi/package-storage

cd package-storage

pnpm i
```

### 打包

```bash
pnpm build
```

### 测试

```bash
pnpm test
```

npmjs:

### 安装

```bash

# npm
npm i @where_is_mr_li/storage

# or yarn
yarn add @where_is_mr_li/storage

#or pnpm
pnpm add @where_is_mr_li/storage
```

## 使用

```js
// 导入
import { session } from "@where_is_mr_li/storage";

// 存
session.set("key", "sxt");
// 取
session.get("key");
// 删
session.del("key");
// 清空
session.clear();

// 存入 storage 的封装对象
{
  "dataType":"string",
  "content":"sxt",
  "type":"session",
  "datetime":1723219200
}
```
