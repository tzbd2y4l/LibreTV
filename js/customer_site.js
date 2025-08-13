const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
            api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
    name: '电影天堂资源',
    api: 'https://cj.rycjapi.com/api.php/provide/vod',
    name: '如意资源',
    api: 'https://bfzyapi.com/api.php/provide/vod',
    name: '暴风资源',
    api: 'https://tyyszy.com/api.php/provide/vod',
    name: '天涯资源',
    api: 'https://zy.xmm.hk/api.php/provide/vod',
    name: '小猫咪资源',
    api: 'http://ffzy5.tv/api.php/provide/vod',
    name: '非凡影视',
    api: 'https://json.heimuer.xyz/api.php/provide/vod',
    name: '黑木耳',
    api: 'https://360zy.com/api.php/provide/vod',
    name: '360资源',
    api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
    name: 'iqiyi资源',
    api: 'https://wolongzyw.com/api.php/provide/vod',
    name: '卧龙资源',
    api: 'https://cjhwba.com/api.php/provide/vod',
    name: '华为吧资源',
    api: 'https://jszyapi.com/api.php/provide/vod',
    name: '极速资源',
    api: 'https://dbzy.tv/api.php/provide/vod',
    name: '豆瓣资源',
    api: 'https://mozhuazy.com/api.php/provide/vod',
    name: '魔爪资源',
    api: 'https://www.mdzyapi.com/api.php/provide/vod',
    name: '魔都资源',
    api: 'https://api.zuidapi.com/api.php/provide/vod',
    name: '最大资源',
    api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
    name: '樱花资源',
    api: 'https://api.apibdzy.com/api.php/provide/vod',
    name: '百度云资源',
    api: 'https://api.wujinapi.me/api.php/provide/vod',
    name: '无尽资源',
    api: 'https://wwzy.tv/api.php/provide/vod',
    name: '旺旺短剧',
    api: 'https://ikunzyapi.com/api.php/provide/vod',
    name: 'iKun资源',
    api: 'https://cj.lziapi.com/api.php/provide/vod/',
    name: '量子资源站'


    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
