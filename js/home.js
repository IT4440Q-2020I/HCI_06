$(document).ready(function() {
  
  typing( 0, $('.typewriter-text').data('text') );

  function typing( index, text ) {
    
    var textIndex = 1;

    var tmp = setInterval(function() {
      if ( textIndex < text[ index ].length + 1 ) {
				$('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
				textIndex++;
			} else {
        setTimeout(function() { deleting( index, text ) }, 2000);
        clearInterval(tmp);
      }

		}, 150);

	}

	function deleting( index, text ) {

    var textIndex = text[ index ].length;

    var tmp = setInterval(function() {

      if ( textIndex + 1 > 0 ) {
        $('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
        textIndex--;
      } else {
        index++;
        if ( index == text.length ) { index = 0; }
        typing( index, text );
        clearInterval(tmp);
      }

		}, 150)

  }

});

(function ($) {
  $(function () {
    
    
      $("input[type=range]").rangeslider({polyfill: false});

      var t = $("#level1-clients"),
        a = $("#level2-clients"),
        n = $("#level3-clients"),
        e = $("#daily-orders"),
        i = $("#commission"),
        l = $("#affiliate-result"),
        s = $("#clients-attracted"),
        r = $("#daily-orders-per-client"),
        p = $("#agent-result"),
        o = $("#agent-commission"),
        c = $("#stp-clients-attracted"),
        d = $("#stp-daily-orders-per-client"),
        v = $("#pro-stp-result"),
        /*u = $(".tab-pane.active").attr("id"),*/
        h = $(".js-calculator_second-level-wrap");

      function agFormula() {
        l.html(parseInt(t.val() * (10 * e.val()) + i.val() * t.val() * e.val() + a.val() * e.val() * 10 * .167 + n.val() * e.val() * 10 * .056)).digits().append("<span class=\"ag-calculator_results-currency\">$</span>");

        v.html(parseInt($(".js-calculator_radio-box").find("input[name=partner-reward]:checked").val() * c.val() * d.val())).digits().append("<span class=\"ag-calculator_results-currency\">$</span>");

        p.html(parseInt(s.val() * (15 * r.val()) + o.val() * s.val() * r.val())).digits().append("<span class=\"ag-calculator_results-currency\">$</span>");
      }

      $(".js-calculator_input-wrap > .js-calculator_text-input").on("change input", function () {
        $(this).parent().find(".js-calculator_range").val($(this).val()).change();

        agFormula();
      });

      $(".js-calculator_input-wrap > .js-calculator_range").on("change input", function () {
        $(this).parent().find(".js-calculator_text-input").val($(this).val());

        agFormula();
      });

      $(".js-calculator_input-wrap > .js-calculator_radio-box > .js-calculator_radio").on("change input", function () {
        agFormula();
      });

      $(".js-calculator_more-levels").click(function (t) {
        if($(this).hasClass("js-ag-opened")) {
          h.hide();
          h.find(".js-calculator_text-input").val(0);
          h.find(".js-calculator_range").val(0).change();
          $(this).removeClass("js-ag-opened");
        }else{
          h.css("display", "inline-block");
          h.find(".js-calculator_text-input").val(15);
          h.find(".js-calculator_range").val(15).change();
          $(this).addClass("js-ag-opened");
        }
        
        agFormula();

        t.preventDefault();
      });

      $.fn.digits = function () {
        return this.each(function () {
          $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1'"));
        });
      };

      agFormula();

  });
})(jQuery);
