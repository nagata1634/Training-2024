// ローディング画面

// after class .load create div tag & class block 
const container = document.querySelector('.load');

for (let i = 0; i <= 50; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add("blocks", "load");
    container.append(blocks);
};
// .blocks要素にアニメーションをつける
function animeteBlocks() {
    anime({
        targets: ".blocks",
        translateX: function () {
            return anime.random(-800, 800);
        },
        translateY: function () {
            return anime.random(-500, 500);
        },
        scale: function() {
            return anime.random(1, 2);
        },
        duration: 3000,
        dilay: anime.stagger(15),
        complete: animeteBlocks,
    });
};

animeteBlocks();

// loadingの文字を時間経過で切り替える

// function textChange() {
//     const textArray = ["Loading", "Loading.", "Loading..", "Loading..."];
//     const loading = document.querySelector('.loading');
//     for (let i = 0; i < textArray.length; i++) {
//         loading.textContent = `${textArray[i]}`;
//         console.log(textArray[i])
//     };
// };

// window.setInterval(textChange, 5000);

// クリックしたらload画面を切り替える
document.addEventListener('mousedown', (event) => {
    console.log("mousedown")
    const targets = document.querySelectorAll('body > div');
    for (target of targets) {
        target.classList.toggle('hide');
    }
}, {once: true});

// 商品写真のスライドショー
document.querySelectorAll('slideShow');

const imgArray = ["../image/router__1.png", "../image/router__2.png", "../image/router__3.png", "../image/router__4.png", "../image/router__5.png", "../image/router__6.png"]
let imagenum = -1;
function slideShow() {
    if (imagenum === (imgArray.length - 1)) {
        imagenum = 0;
    } else {
        imagenum ++;
    }
    const targets = document.querySelectorAll('.slideShow img');
    for (target of targets) {
        target.src = imgArray[imagenum];
        console.log(imagenum);
    }
}
document.addEventListener('mousedown', (event) => {
    console.log('mousedown');
    slideShow();
});
