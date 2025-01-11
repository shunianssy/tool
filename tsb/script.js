// 获取所有颜色方块、RGB/HSL 控制器以及显示颜色信息的元素
const colorBoxes = document.querySelectorAll('.color-box');
const rSlider = document.getElementById('r');
const gSlider = document.getElementById('g');
const bSlider = document.getElementById('b');
const rValue = document.getElementById('r-value');
const gValue = document.getElementById('g-value');
const bValue = document.getElementById('b-value');

const hSlider = document.getElementById('h');
const sSlider = document.getElementById('s');
const lSlider = document.getElementById('l');
const hValue = document.getElementById('h-value');
const sValue = document.getElementById('s-value');
const lValue = document.getElementById('l-value');

const colorDisplay = document.getElementById('color-display');

// 更新颜色
function updateColor() {
    const r = rSlider.value;
    const g = gSlider.value;
    const b = bSlider.value;
    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    const h = hSlider.value;
    const s = sSlider.value;
    const l = lSlider.value;
    const hslColor = `hsl(${h}, ${s}%, ${l}%)`;

    // 设置 RGB 和 HSL 的显示值
    rValue.textContent = r;
    gValue.textContent = g;
    bValue.textContent = b;

    hValue.textContent = h;
    sValue.textContent = s;
    lValue.textContent = l;

    // 更新所有颜色方块的背景颜色
    colorBoxes.forEach(box => {
        box.style.backgroundColor = rgbColor;
        box.setAttribute('data-color', rgbColor);
    });

    // 更新选择的颜色显示
    colorDisplay.textContent = rgbColor;
    colorDisplay.style.color = rgbColor; // 改变文字颜色以展示选择的颜色
}

// 设置事件监听器
rSlider.addEventListener('input', updateColor);
gSlider.addEventListener('input', updateColor);
bSlider.addEventListener('input', updateColor);

hSlider.addEventListener('input', updateColor);
sSlider.addEventListener('input', updateColor);
lSlider.addEventListener('input', updateColor);

// 初始化颜色
updateColor();
