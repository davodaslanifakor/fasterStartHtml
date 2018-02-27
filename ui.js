			$('.group-form input').blur(function () {
				if ($(this).val().length > 0) {
					$(this).addClass('active');
					return false;
				} else {
					$(this).removeClass('active');
				}
			});
			$(document).on('click','.tcon-menu--xcross',function (e) {
				e.stopPropagation();
				$(this).toggleClass('tcon-transform')
				$('.navigation').toggleClass('open')
				$('.overwrapper').toggleClass('open')

			})
			$(document).on('click','#sidebar',function (e) {
				$(this).toggleClass('tcon-transform')
				$('.sidebar').toggleClass('open')

			})

			
			$(document).on('click',function(e){
				$('.tcon-menu--xcross').removeClass('tcon-transform')
				$('.navigation').removeClass('open')
				$('.overwrapper').removeClass('open')
				
			})
