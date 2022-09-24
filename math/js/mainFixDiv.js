function mainFixDiv() {
    if (document.getElementById("main-fix")) {
        var fixTimer = setInterval(function () {
            var os_Top = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条距离顶部高度
            var headerHeight = document.getElementById('head').offsetHeight;//header高度

            if (os_Top >= 400) {
                document.getElementById("main-fix").style.top = headerHeight + 'px';
            } else {
                document.getElementById("main-fix").style.top = '230px';
            }
            var height = getClientHeight();
            var theight = getScrollTop();
            var rheight = getScrollHeight();
            var bheight = rheight - theight - height - 254;
            var footHeight = document.getElementById('foot').offsetHeight + document.getElementById('foot_bottom').offsetHeight;

            console.log('bheight' + bheight);
            console.log('footHeight' + footHeight);
            if (bheight <= footHeight) {
                document.getElementById("main-fix").style.display = 'none';
            } else {
                document.getElementById("main-fix").style.display = 'block';
            }
        }, 500)
    }

    //取窗口可视范围的高度
    function getClientHeight() {

        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        } else {
            var clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        return clientHeight;
    }

//取窗口滚动条高度
    function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }

//取文档内容实际高度
    function getScrollHeight() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
}