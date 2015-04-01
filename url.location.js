/**
 * Created with IntelliJ IDEA.
 * User: 黄川
 * Date Time: 14-11-24下午4:36
 */
(function (win, doc) {
    /**
     * 给网页所有含有url属性的元素，添加点击监听事件
     * 导入方式<script src="js/url.location.js" id='commonjs'   baseurl="http://192.168.2.120"></script>
     */
    var url = new Object();
    url.location = function () {
        var allElement = doc.getElementsByTagName("*");
        var baseurl = doc.getElementById("commonjs").getAttribute("baseurl");
        var i = 0, len = allElement.length;
        for (; i < len; i++) {
            var that = allElement[i];
            if (that.hasAttribute("url")) {
                that.addEventListener("click", function () {
                    console.log(baseurl + this.getAttribute("url"));
                    window.location.href = baseurl + this.getAttribute("url");
                }, false);
            }
			if (that.hasAttribute("ov-url")) {
                that.addEventListener("click", function () {
                    this.style.backgroundColor="#cdcdcd";
                    var t = this;
                    setTimeout(function () {
                        t.style.backgroundColor = "#fff";
                    }, 500);
                    window.location.href = this.getAttribute("ov-url");
                }, false);
            }
        }
    }
    win['url'] = url;
}(window, document));
window.addEventListener("DOMContentLoaded", function () {
    new url.location();
}, false);