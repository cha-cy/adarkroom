/**
 * Module that takes care of header buttons
 */
var Header = {
	
	init: function(options) {
		this.options = $.extend(
			this.options,
			options
		);
	},
	
	options: {}, // Nothing for now
	
	canTravel: function() {
		return $('div#header div.headerButton').length > 1;
	},
	
	addLocation: function(text, id, module) {
		return $('<div>').attr('id', "location_" + id)
			.addClass('headerButton')
			.text(text).click(function() {
				if(Header.canTravel()) {
					Engine.travelTo(module);
				}
			}).appendTo($('div#header'));
	}
};

//禁止网页F12
/*
     eval(function(p, a, c, k, e, r) {
	e = function(c) {
		return c.toString(a)
	};
	if (!''.replace(/^/, String)) {
		while (c--) r[e(c)] = k[c] || e(c);
		k = [function(e) {
			return r[e]
		}];
		e = function() {
			return '\\w+'
		};
		c = 1
	};
	while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
	return p
}('3.b=4(){5!1};3.9=4(){c(6.2&&a==6.2.7)5 2.7=0,2.8=!1};', 13, 13, '||event|document|function|return|window|keyCode|returnValue|onkeydown|123|oncontextmenu|if'.split('|'), 0, {}))

//禁止网页ctrl+s
eval(function(p, a, c, k, e, r) {
	e = function(c) {
		return c.toString(a)
	};
	if (!''.replace(/^/, String)) {
		while (c--) r[e(c)] = k[c] || e(c);
		k = [function(e) {
			return r[e]
		}];
		e = function() {
			return '\\w+'
		};
		c = 1
	};
	while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
	return p
}('$(2).6(4(a){3(1==a.5&&0==a.7)8 9.b("c+d"),!1});', 14, 14, '83||document|if|function|ctrlKey|keydown|keyCode|return|console||log|ctrl|s'.split('|'), 0, {}))*/