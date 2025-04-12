const _0x1ac255 = _0x4de2;
(function(_0x2b1a05, _0x4bc11c) {
    const _0x4978e0 = _0x4de2
      , _0x46be6e = _0x2b1a05();
    while (!![]) {
        try {
            const _0x3c7bfc = parseInt(_0x4978e0(0x1cf)) / 0x1 * (parseInt(_0x4978e0(0x1b9)) / 0x2) + parseInt(_0x4978e0(0x1ce)) / 0x3 * (-parseInt(_0x4978e0(0x1be)) / 0x4) + parseInt(_0x4978e0(0x1e4)) / 0x5 * (-parseInt(_0x4978e0(0x1c3)) / 0x6) + parseInt(_0x4978e0(0x1bc)) / 0x7 * (-parseInt(_0x4978e0(0x1dd)) / 0x8) + -parseInt(_0x4978e0(0x1e8)) / 0x9 + -parseInt(_0x4978e0(0x1e0)) / 0xa * (parseInt(_0x4978e0(0x1b5)) / 0xb) + -parseInt(_0x4978e0(0x1b6)) / 0xc * (-parseInt(_0x4978e0(0x1b3)) / 0xd);
            if (_0x3c7bfc === _0x4bc11c)
                break;
            else
                _0x46be6e['push'](_0x46be6e['shift']());
        } catch (_0x2990bc) {
            _0x46be6e['push'](_0x46be6e['shift']());
        }
    }
}(_0x3d2a, 0x2715f));
let noButton = document[_0x1ac255(0x1dc)]('no')
  , yesButton = document[_0x1ac255(0x1dc)](_0x1ac255(0x1d5))
  , noClickCount = 0x0;
const mainImage = document[_0x1ac255(0x1dc)](_0x1ac255(0x1c7))
  , noTexts = [_0x1ac255(0x1d1), '大胆！', _0x1ac255(0x1f1)];
noButton[_0x1ac255(0x1d9)](_0x1ac255(0x1e6), () => {
    const _0x4bc76a = _0x1ac255;
    noClickCount++;
    if (noClickCount < 0x3)
        noButton['innerText'] = noTexts[noClickCount - 0x1],
        swapButtons(),
        mainImage[_0x4bc76a(0x1d6)] = 'https://piplong-img.oss-cn-hangzhou.aliyuncs.com/smallProgram-img/mmexport1740034541335.gif';
    else
        noClickCount >= 0x3 && (noClickCount < 0x4 && (noButton[_0x4bc76a(0x1eb)] = noTexts[noClickCount - 0x1]),
        moveNoButton());
}
),
yesButton[_0x1ac255(0x1d9)](_0x1ac255(0x1e6), () => {
    const _0x57055e = _0x1ac255;
    document[_0x57055e(0x1e7)][_0x57055e(0x1d0)]['overflow'] = _0x57055e(0x1db),
    document[_0x57055e(0x1e7)][_0x57055e(0x1d4)] = _0x57055e(0x1c5);
}
);
function swapButtons() {
    const _0x1a1754 = _0x1ac255
      , _0x58f6e7 = document[_0x1a1754(0x1f0)](_0x1a1754(0x1b4))
      , _0x5dd17d = Array[_0x1a1754(0x1c9)](_0x58f6e7[_0x1a1754(0x1bb)])[_0x1a1754(0x1d2)](noButton)
      , _0x54ef1a = Array[_0x1a1754(0x1c9)](_0x58f6e7[_0x1a1754(0x1bb)])['indexOf'](yesButton);
    _0x5dd17d < _0x54ef1a ? _0x58f6e7['insertBefore'](yesButton, noButton) : _0x58f6e7[_0x1a1754(0x1ea)](noButton, yesButton);
}
function _0x4de2(_0x4927fb, _0x3a922c) {
    const _0x3d2ab8 = _0x3d2a();
    return _0x4de2 = function(_0x4de2db, _0x2f1f7e) {
        _0x4de2db = _0x4de2db - 0x1b3;
        let _0x455871 = _0x3d2ab8[_0x4de2db];
        return _0x455871;
    }
    ,
    _0x4de2(_0x4927fb, _0x3a922c);
}
function moveNoButton() {
    const _0x33fd7f = _0x1ac255;
    noButton[_0x33fd7f(0x1d0)]['position'] = _0x33fd7f(0x1c8),
    noButton[_0x33fd7f(0x1d0)][_0x33fd7f(0x1e9)] = _0x33fd7f(0x1de);
    const _0x39d9ec = window[_0x33fd7f(0x1b8)]
      , _0x26d11c = window[_0x33fd7f(0x1ec)]
      , _0x1171ef = noButton[_0x33fd7f(0x1e1)]
      , _0x21e709 = noButton['offsetHeight'];
    let _0x437bc2 = setInterval( () => {
        const _0x4863df = _0x33fd7f;
        let _0x1d7545 = (Math[_0x4863df(0x1c0)]() * 0x2 - 0x1) * (_0x39d9ec - _0x1171ef) * 0.5
          , _0x5cd71a = (Math['random']() * 0x2 - 0x1) * (_0x26d11c - _0x21e709) * 0.5;
        noButton[_0x4863df(0x1d0)]['transform'] = _0x4863df(0x1ba) + _0x1d7545 + _0x4863df(0x1df) + _0x5cd71a + _0x4863df(0x1e5);
    }
    , 0x64);
    setTimeout( () => {
        const _0x3611ea = _0x33fd7f;
        clearInterval(_0x437bc2),
        noButton['style'][_0x3611ea(0x1e3)] = '',
        noButton[_0x3611ea(0x1d0)][_0x3611ea(0x1ca)] = '';
    }
    , 0xbb8);
}
function copyLink() {
    const _0x1eb136 = _0x1ac255
      , _0x51b3d5 = window[_0x1eb136(0x1ed)]['href'];
    navigator['clipboard'] ? navigator[_0x1eb136(0x1d8)][_0x1eb136(0x1cd)](_0x51b3d5)[_0x1eb136(0x1da)]( () => {
        alert('链接已复制到剪贴板:\x20' + _0x51b3d5);
    }
    )[_0x1eb136(0x1cc)](_0x5a8f82 => {
        const _0x5273a5 = _0x1eb136;
        console[_0x5273a5(0x1e2)](_0x5273a5(0x1c4), _0x5a8f82),
        alert(_0x5273a5(0x1bf));
    }
    ) : fallbackCopyTextToClipboard(_0x51b3d5);
}
function _0x3d2a() {
    const _0x1f0d56 = ['innerHTML', 'yes', 'src', 'textarea', 'clipboard', 'addEventListener', 'then', 'hidden', 'getElementById', '8fcoMRK', 'transform\x200.1s\x20ease', 'px,\x20', '60BsXckH', 'offsetWidth', 'error', 'position', '60455ePibKq', 'px)', 'click', 'body', '2001816aeEtNZ', 'transition', 'insertBefore', 'innerText', 'innerHeight', 'location', '链接已', '复制到剪贴板:\x20', 'querySelector', '追不上吧', '65xROUmn', '.buttons', '277453VbrhQz', '2215860eLdYaz', '复制失败:', 'innerWidth', '2TdVbIr', 'translate(', 'children', '373471xkCgvR', 'select', '16SYzkjk', '复制链接失败，请手动复制。', 'random', 'createElement', 'value', '54tTBNtG', '复制链接失败:', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22yes-screen\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22yes-text\x22>嘻嘻嘻！乖狗狗~(/≧▽≦)/♡︎ᐝ</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://piplong-img.oss-cn-hangzhou.aliyuncs.com/smallProgram-img/mmexport1740033955932.gif\x22\x20alt=\x22拥抱\x22\x20class=\x22yes-image\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'execCommand', 'mainImage', 'absolute', 'from', 'transform', 'appendChild', 'catch', 'writeText', '195831xIAaoi', '33862tvxEmD', 'style', '点错了？', 'indexOf', 'copy'];
    _0x3d2a = function() {
        return _0x1f0d56;
    }
    ;
    return _0x3d2a();
}
function fallbackCopyTextToClipboard(_0x51ff4e) {
    const _0x5db0a8 = _0x1ac255
      , _0x1b8d8b = document[_0x5db0a8(0x1c1)](_0x5db0a8(0x1d7));
    _0x1b8d8b[_0x5db0a8(0x1c2)] = _0x51ff4e,
    _0x1b8d8b[_0x5db0a8(0x1d0)][_0x5db0a8(0x1e3)] = 'fixed',
    document[_0x5db0a8(0x1e7)][_0x5db0a8(0x1cb)](_0x1b8d8b),
    _0x1b8d8b[_0x5db0a8(0x1bd)]();
    try {
        const _0xc8cf1f = document[_0x5db0a8(0x1c6)](_0x5db0a8(0x1d3))
          , _0x5eded3 = _0xc8cf1f ? '成功' : '失败';
        alert(_0x5db0a8(0x1ee) + _0x5eded3 + _0x5db0a8(0x1ef) + _0x51ff4e);
    } catch (_0x5ee3b5) {
        console[_0x5db0a8(0x1e2)](_0x5db0a8(0x1b7), _0x5ee3b5),
        alert('复制链接失败，请手动复制。');
    }
    document[_0x5db0a8(0x1e7)]['removeChild'](_0x1b8d8b);
}
