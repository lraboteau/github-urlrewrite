(function(){
  var urlCleanup = {
    link: $('a.link'),
    cleanUrl: window.location.href.slice(0, -5),
    suffix: '.html',
    suffixless: window.location.pathname.slice(-5),

    /* Change the link to avoid reload when click */
    linkNewUrl: function(){
      this.link.each(function(index, value){
        const newUrl = this.href.slice(0,-5);

        if (newUrl.match(/https?:\/\//)) {
          $(this).attr('href', newUrl);
        }
      });
    },

    /* Act like a 301 redirect */
    broadcastNewUrl: function() {
      if(this.suffixless === this.suffix) {
        window.location.href = this.cleanUrl;
      }
    },

    init: function(){
      this.linkNewUrl();
      this.broadcastNewUrl();
    }
  };

  urlCleanup.init();
})();