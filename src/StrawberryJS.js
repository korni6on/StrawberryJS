(function () {

    var S = function (params) {
        return new Strawberry(params);
    };

    var Strawberry = function (params) {
        var selector = document.querySelectorAll(params);
        this.length = selector.length;
        var len = this.length;
        while (len--) {
            this[len] = selector[len]
        }
        
        return this;
    };

    S.fn = Strawberry.prototype = {
        about: {
            version: '0.0.1',
            homeurl: 'https://github.com/korni6on/StrawberryJS'
        },
        
        show: function () {
            var len = this.length;
            while (len--) {
                this[len].style.display = 'block';
            }

            return this;
        },
        
        hide: function () {
            var len = this.length;
            while (len--) {
                this[len].style.display = 'none';
            }

            return this;
        },
        
        visible: function()
        {
            var len = this.length;
            while (len--) {
                this[len].style.visibility = "visible" ;
            }

            return this;
        },
        
        hidden: function()
        {
            var len = this.length;
            while (len--) {
                this[len].style.visibility = "hidden" ;
            }

            return this;
        },
        
        text: function (join) {
            var len = this.length,
                    text = [];
            while (len--) {
                text[len] = this[len].textContent;
            }

            if (join === true) {
                return text.join('');
            }
            else if (typeof join === 'string') {
                return text.join(join);
            }
            else {
                return text;
            }
        }
    };

    if (!window.S) {
        window.S = S;
    }
})();