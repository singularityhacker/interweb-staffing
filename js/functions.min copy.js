jQuery("html").removeClass("no-js").addClass("js");if(navigator.appVersion.indexOf("Mac")!=-1){jQuery("html").addClass("osx")}jQuery(document).ready(function(a){(function(){a("[rel=carousel]").carousel();a("[rel=tooltip]").tooltip();a("[rel=popover]").popover();a(".accordion").on("show",function(b){a(b.target).prev(".accordion-heading").find(".accordion-toggle").addClass("active")});a(".accordion").on("hide",function(b){a(this).find(".accordion-toggle").not(a(b.target)).removeClass("active")});a(window).load(function(){a("a[rel=external]").attr("target","_blank")})})();(function(){a(".flickr-feed").each(function(){var d=a(this).data("flickr-id"),e=a(this).data("flickr-limit")?a(this).data("flickr-limit"):12,b=a(this).data("flickr-tags")?a(this).data("flickr-tags"):"",c=a(this).data("flickr-tagmode")?a(this).data("flickr-tagmode"):"any";a(this).jflickrfeed({limit:e,qstrings:{id:d,tags:b,tagmode:c},itemTemplate:'<a href="{{link}}" rel="external"><img src="{{image_s}}" alt="{{title}}" /></a>'})})})();(function(){a(window).load(function(){a(".link").each(function(){var d=a(this);var b=d.find("img").height();var c=a("<span>").addClass("link-overlay").html("&nbsp;").css("top",b/2).click(function(){if(href=d.find("a:first").attr("href")){top.location.href=href}});d.append(c)});a(".zoom").each(function(){var d=a(this);var b=d.find("img").height();var c=a("<span>").addClass("zoom-overlay").html("&nbsp;").css("top",b/2);d.append(c)})})})();(function(){var c=a(".navbar .nav"),b='<option value="" selected>Navigate...</option>';c.find("li").each(function(){var f=a(this),e=f.children("a"),g=f.parents("ul").length-1,d="";if(g){while(g>0){d+=" - ";g--}}if(e.text()){b+="<option "+(f.hasClass("active")?'selected="selected"':"")+' value="'+e.attr("href")+'">'+d+" "+e.text()+"</option>"}}).end().after('<select class="nav-responsive">'+b+"</select>");a(".nav-responsive").on("change",function(){window.location=a(this).val()})})();(function(){a(window).load(function(){var c=a("#portfolio-items");function b(d){c.isotope({filter:d});a("#portfolio-filter li.active").removeClass("active");a("#portfolio-filter").find("[data-filter='"+d+"']").parent().addClass("active");if(d!="*"){window.location.hash=d.replace(".","")}if(d=="*"){window.location.hash=""}}if(c.length){a(".project").each(function(){$this=a(this);var d=$this.data("tags");if(d){var f=d.split(",");for(var e=f.length-1;e>=0;e--){$this.addClass(f[e])}}});c.isotope({itemSelector:".project",layoutMode:"fitRows"});a("#portfolio-filter li a").click(function(){var d=a(this).attr("data-filter");b(d);return false});if(window.location.hash!=""){b("."+window.location.hash.replace("#",""))}}})})();(function(){a('<i id="back-to-top"></i>').appendTo(a("body"));a(window).scroll(function(){if(a(this).scrollTop()!=0){a("#back-to-top").fadeIn()}else{a("#back-to-top").fadeOut()}});a("#back-to-top").click(function(){a("body,html").animate({scrollTop:0},600)})})();(function(){a("#contact-form-submit").data("original-text",a("#contact-form-submit").html());a("#contact-form-submit").click(function(c){var b=a("#contact-form").serialize();a("#contact-form-submit").addClass("disabled").html("Sending ...");setTimeout(function(){a("#contact-form-response").hide().attr("class","alert");a.post("php/contact-form.php",b,function(d){a("#contact-form-submit").removeClass("disabled").html(a("#contact-form-submit").data("original-text"));if(d.status==1){message='<i class="icon-ok"></i> <b>Thank You!</b> <br />Thanks for leaving your message. We will get back to you soon.';a("#contact-form-response").addClass("alert-success")}else{message=""+d.errors;a("#contact-form-response").addClass("alert-warning")}a("#contact-form-response").show().html(message)},"json")},300)})})();(function(){a("#newsletter-form").submit(function(c){var b=a("#newsletter-form").serialize();a("#newsletter-form").hide();a(".newsletter .ajax-loader").show();setTimeout(function(){a.post("php/newsletter-form.php",b,function(d){a(".newsletter .ajax-loader").hide();if(d.status==1){a("#newsletter-form").html("&#10004; Thanks, you have been subscribed!");a("#newsletter-form").show()}else{a("#newsletter-form").show();alert(d.errors)}},"json")},600);c.preventDefault()})})();(function(){var c=!!("ontouchstart" in window);function b(g,f){var d=a(g.currentTarget);if(f==="left"){d.find(".carousel-control.right").trigger("click")}if(f==="right"){d.find(".carousel-control.left").trigger("click")}}if(c===true){a("#carousel").swipe({allowPageScroll:"auto",swipeLeft:b,swipeRight:b})}})();(function(){a("a[rel=shortcut]").each(function(){var d=a(this);var c=d.data("key");var b=d.attr("href");if(c&&b){a(document).bind("keydown",c,function(){top.location.href=b})}})})()});