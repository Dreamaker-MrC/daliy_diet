# 项目交接文档：KAUST 增肌美食记录 Web App

## 1. 项目背景与目标
本项目旨在为处于增肌期的留学生（坐标沙特 KAUST）开发一个轻量级、高度可维护的美食记录网页。
核心诉求是**快速决策、移动端友好、基于 Markdown 的极简数据管理**。

### 1.1 核心需求
- **分类模块**：分为「早餐 (Breakfast)」、「正餐 (Meals)」、「宵夜 (Midnight Snacks)」。
- **UI 设计**：优先适配移动端（Mobile-First），采用卡片式布局（Card-based UI）。卡片需直观展示菜名、热量估算、核心食材清单。
- **数据管理**：**无数据库架构**。每一道美食作为一个单独的 `.md` 文件存储。通过增删 `.md` 文件实现菜谱的动态更新。

---

## 2. 技术栈建议 (致 Claude)
为了实现纯 Markdown 驱动和极佳的静态渲染性能，建议采用以下技术栈：
- **框架**：`Astro` 或 `Next.js` (App Router) 搭配 `ContentLayer`。首推 **Astro**，其原生的 Content Collections 对纯 Markdown 管理支持极佳。
- **样式**：`Tailwind CSS`，方便快速构建移动端友好的响应式卡片。
- **图标**：`Lucide-React` 或类似轻量级图标库，用于标示设备（如空气炸锅、破壁机等）。

---

## 3. 数据结构规范 (Markdown Frontmatter)

请按照以下 YAML Frontmatter 规范解析 Markdown 文件：

```yaml
---
title: "美食名称"
category: "breakfast" # 可选值: breakfast | meal | snack
calories: 450 # 估算热量 (kcal)
protein: 25 # 蛋白质估算 (g)
tools: ["空气炸锅", "破壁机", "平底锅"] # 所需厨具
ingredients:
  - "食材A"
  - "食材B"
---
```

---

## 4. 初始数据导入：早餐模块 (Breakfast)

以下是首批需要初始化的早餐数据，请将它们分别转换为 `content/breakfast/` 目录下的独立 `.md` 文件。

### 文件 1: `air-fryer-scallion-pancake.md`
```yaml
---
title: "免看管：太阳蛋葱油饼"
category: "breakfast"
calories: 420
protein: 18
tools: ["空气炸锅"]
ingredients:
  - "冷冻葱油饼 1张 (中超)"
  - "鸡蛋 1个"
  - "牛肉培根/冷切肉片 2片 (Tamimi)"
---
**做法步骤：**
1. 炸锅铺垫锡纸，放入冷冻葱油饼，180度烤 5 分钟至微鼓。
2. 拉出炸锅，用勺子在饼中间压出小坑，打入鸡蛋，一旁铺上牛肉培根。
3. 推回炸锅，继续 180度烤 3-5 分钟（根据对蛋黄熟度的喜好）。
4. 取出卷起即可食用，全程免洗锅。
```

### 文件 2: `liquid-muscle-bomb.md`
```yaml
---
title: "1分钟喝掉的增肌液体炸弹"
category: "breakfast"
calories: 550
protein: 35
tools: ["破壁机"]
ingredients:
  - "纯牛奶 300ml"
  - "传统燕麦片 1把"
  - "香蕉 1根"
  - "纯花生酱 1大勺"
  - "乳清蛋白粉 1勺 (进阶选项)"
---
**做法步骤：**
1. 将纯牛奶、燕麦片、香蕉段、花生酱（及蛋白粉）全部倒入破壁机。
2. 启动破壁机，搅打 40秒至 1 分钟。
3. 直接倒入杯中饮用。提供极高复合碳水与优质脂肪，适合胃口未开但需急充能量的早晨。
```

### 文件 3: `baked-oat-banana-pie.md`
```yaml
---
title: "高碳高蛋白：烤燕麦香蕉派"
category: "breakfast"
calories: 380
protein: 15
tools: ["空气炸锅"]
ingredients:
  - "传统燕麦片 4-5勺"
  - "熟透的香蕉 1根"
  - "鸡蛋 1个"
  - "少量纯牛奶"
---
**做法步骤：**
1. 在可入烤箱的小碗中，将香蕉掰断并用叉子压成泥。
2. 打入鸡蛋，加入燕麦片，倒入少量牛奶拌匀至浓稠糊状。
3. （可选）表面撒上坚果碎或黑巧克力碎。
4. 放入空气炸锅，170度烤 12-15 分钟。外酥里糯，饱腹感极强。
```

### 文件 4: `deluxe-yangchun-noodles.md`
```yaml
---
title: "机器联动：高蛋白阳春面"
category: "breakfast"
calories: 480
protein: 28
tools: ["空气炸锅", "平底锅/汤锅"]
ingredients:
  - "挂面 1人份"
  - "冷冻纯牛肉丸/香肠 (中超/Tamimi)"
  - "鸡蛋 1个"
  - "绿叶菜 少量"
  - "生抽、香油、葱花"
---
**做法步骤：**
1. **空气炸锅端**：将冷冻牛肉丸/香肠直接放入炸锅，180度烤 8-10 分钟。
2. **灶前端**：碗底调入生抽、香油、葱花。锅中烧水，水开卧鸡蛋、煮面条和青菜。
3. **混合**：将热面汤冲入料碗，捞入面条青菜。此时炸锅中的肉丸刚好烤至滋滋冒油，直接铺在面上。
```

---

## 5. UI/UX 实现建议
- **卡片展示**：每个卡片顶部可以根据 `tools` 字段打上不同的标签（Tag），例如用小图标显示“空气炸锅”。
- **宏量营养素条**：卡片底部可以做一个简单的横条，展示 Calories / Protein，突出增肌属性。
- **响应式**：移动端采用单列垂直滚动 (`flex-col` 或 `grid-cols-1`)，Pad及以上尺寸采用瀑布流或双列 (`grid-cols-2`)。
