// 保存領域
let level = 1;
const generate = 10;
const color = {
}

// 難易度選択
const config = document.querySelector('.config');
config.addEventListener('input', (event) => {
    const range = document.querySelector('.lv');
    range.textContent = event.target.value;
    level = parseInt(range);

    console.log('The difficulty level has been selected');
});

// ボタンを必要数生成する
for (let i = 0; i < generate; i++) {
   const generateObject = document.querySelector('#games');
   const element = document.createElement('button');
   generateObject.append(element);
}

// button 要素すべてに識別子を付ける
const choiceButton = document.querySelectorAll('#games > button');
let index = 0;
for (element of choiceButton) {
    element.classList.add(`game${index}`, 'game');
    index++;
}

function create() {
    function random(min, max) {
        //ランダムな整数を生成
        const rmd = Math.floor((Math.random() * (max - min)) + min);
        return rmd;
    }

    function color() {
        const color = random(0, 255) + ',' + random(0,255) + ',' + random(0,255);
        return color;
    };
    function lockColor(colorcode) {
        const colorList = colorcode.split(',');
        for (let i = 0; i < level; i++) {
            random(0,255) = colorlist[];
        }
        return colorList.join(',');
    }

    document.querySelectorAll('games');
    for (element of games) {
        element.style.backgroundColor = 'rgb(' + color() + ')';
    }
        
}


// color を指定していく
function setColor() {
    for (let i = 0; i <= storage.boxCounter - 1; i++) {
        storage.colorList = [];

        for (let j = 0; j <= 2; j++) {
            const int = storage.rmdList.pop();
            storage.colorList.push(int);
        }

        const int = `.a${i + 1}`
        const element = document.querySelector(int);
        const list = storage.colorList.join(', ');
        const rgb = `rgb(${list})`
        element.style.backgroundColor = rgb;
    };
    console.log('set color');
};

function setColor() {
    function random(min, max) {
        const ram = Math.floor((Math.random() * (max - min)) + min);
        return ram
    }
    const rmdColor = `rmd(${rmdColor},${rmdColor},${rmdColor})`;
    return rmdColor;
}

// 正解時にゲームを終了する
function end() {
    const end = document.querySelector(`.a${storage.Ranswer}`);
    end.addEventListener('click', (event) => {
        console.log('正解しました');
    });
};

// 補色を生成
function complementaryColor() {
    const element = document.querySelector(`.a${storage.Ranswer}`);

    // background-colorの値取得する
    const GetBgColor = window.getComputedStyle(element, null).getPropertyValue('background-color'); 

    // .a0のカラーを変更する
    const text = GetBgColor.match(/\((.+)\)/)[1];
    const list = text.split(',');

    // 最小値と最大値を取得、加算
    const magic = Math.min(...list) + Math.max(...list);
    
    // list 項目を一つずつ呼び出して計算、要素を戻す
    for (let i = 0; i <= 2; i++) {
        const listindex = list[i];
        list[i] = magic - listindex;
    }
    
    const target = document.querySelector('.a0');
    target.style.backgroundColor = `rgb(${list.join(' ,')})`
};
// ゲームをスタートする
const start = document.querySelector('.start');
start.addEventListener('click', (event) => {
    const elements = document.querySelectorAll('.change');
    for (element of elements) {
        element.classList.toggle('hide');
    }
    console.log('ゲームがスタートされました')
});