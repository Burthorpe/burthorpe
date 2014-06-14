function BrowserSize() { }

BrowserSize.prototype.getWindowSize = function() {
    if (document.body && document.body.offsetWidth) {
        this.winW = document.body.offsetWidth;
        this.winH = document.body.offsetHeight;
    }

    if (document.compatMode === 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {
        this.winW = document.documentElement.offsetWidth;
        this.winH = document.documentElement.offsetHeight;
    }

    if (window.innerWidth && window.innerHeight) {
        this.winW = window.innerWidth;
        this.winH = window.innerHeight;
    }

    return {
      width: this.winW,
      height: this.winH
    };
};

BrowserSize.prototype.getDocHeight = function() {
    var D = document;

    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
};

BrowserSize.prototype.checkSize = function() {
    var d = this.getWindowSize();

    this.winW = d.width;
    this.winH = d.height;
};
