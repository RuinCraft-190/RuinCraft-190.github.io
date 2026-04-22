// author by removef
// https://removeif.github.io/

function isNightFun() {
    var isNightTemp = localStorage.getExpire('night');

    // 第一次进来判断是白天还是晚上
    if (isNightTemp == null || isNightTemp == undefined) {
        if (isNightRange("19:00", "23:59") || isNightRange("00:00", "07:00")) {
            isNightTemp = 'true';
        } else {
            isNightTemp = 'false';
        }
        localStorage.setExpire("night", isNightTemp, expireTime1H);
    }
    return isNightTemp;
}

var isNight=isNightFun();
// 参考自 https://www.imaegoo.com/
var nightNav;
var nightIcon;

function applyNight(value) {
    if (value == 'true') {
        document.body.className += ' night'
        if (nightIcon) {
            nightIcon.className = nightIcon.className.replace(/ fa-moon/g, '') + ' fa-lightbulb'
        }
    } else {
        document.body.className = document.body.className.replace(/ night/g, '')
        if (nightIcon) {
            nightIcon.className = nightIcon.className.replace(/ fa-lightbulb/g, '') + ' fa-moon'
        }
    }
}

function findNightIcon() {
    nightNav = document.getElementById('night-nav');
    nightIcon = document.getElementById('night-icon');
    if (!nightNav || !nightIcon) {
        setTimeout(findNightIcon, 100);
    } else {
        nightNav.addEventListener('click', switchNight);
        if (isNight) {
            nightIcon.className = nightIcon.className.replace(/ fa-moon/g, '') + ' fa-lightbulb'
        } else {
            nightIcon.className = nightIcon.className.replace(/ fa-lightbulb/g, '') + ' fa-moon'
        }
    }
}

function switchNight() {

    if (isNight == 'false') {
        isNight = 'true';
    } else {
        isNight = 'false';
    }
    
    applyNight(isNight);
    localStorage.setExpire('night', isNight, expireTime1H);
    if(typeof loadUtterances == 'function'){
        loadUtterances();
    }
}

findNightIcon();
applyNight(isNight);

// 更新导航栏选中状态
function updateNavbarActive() {
    const currentPath = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
    // 只选择导航菜单中的项，不包括 logo 和右侧图标
    document.querySelectorAll('.navbar-main .navbar-start .navbar-item').forEach(item => {
        const href = item.getAttribute('href');
        if (href) {
            const itemPath = href.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
            if (itemPath === currentPath) {
                item.classList.add('is-active');
            } else {
                item.classList.remove('is-active');
            }
        }
    });
}

// 页面加载完成后更新选中状态
updateNavbarActive();

// 监听 pjax 完成事件
document.addEventListener('pjax:complete', function() {
    updateNavbarActive();
});