<center><img src="./asset/salty_logo.png"/></center>

# Salty盐池数据可视化包⛲

快速，安全地在网页中可视化渲染盐池模型。

## 快速上手

#### 安装

请`clone`本项目到你的任何目录中，并使用下面的命令安装你的包

```bash
npm install /path/to/salty/ --save
```

#### 使用

在页面中创建一个绘图区域，例如：

```HTML
<div id="app">
    <div id="saltSurface" style="width:90vw; height:90vh"></div>
</div>
```

在`JavaScript`部分使用下面的代码引入并初始化渲染：

```javascript
import Salty from 'salty-surface'
var data = [[49.0, 982.0, 0.0], 
            [49.0, 981.0, 0.0],
            [50.0, 982.0, 0.0]]; // 可能需要更多点
new Salty(document.getElementById('saltSurface'), data);
```

## 数据格式

`Salty`类接收的第二个参数`data`是一个二位数组，其中的元素均为点的坐标，格式为`[x,y,z]`。整体格式为：

```javascript
var data = [[x1, y1, z1], [x2, y2, z2], [x3, y3, z3], ..., [xn, yn, zn]];
```