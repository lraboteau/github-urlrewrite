(function(){
  var urlCleanup = {
    cleanUrl: window.location.href.slice(0, -5),
    suffix: '.html',
    suffixless: window.location.pathname.slice(-5),

    broadcastNewUrl: function() {
      if(this.suffixless === this.suffix) {
        window.location.href = this.cleanUrl;
      }
    },

    init: function(){
      this.broadcastNewUrl()
    }
  };

  urlCleanup.init();
})();