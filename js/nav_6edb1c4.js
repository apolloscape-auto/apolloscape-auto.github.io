function initNav(){$("#sub-nav-ul").length>0?showNav():setTimeout(function(){initNav()},400)}function showNav(){var a=['<li class="nav-item plr20 nav-home fl sub_nav_flag"><a href="/index.html" class="head-link">Home</a></li>','<li class="nav-item plr20 nav-home fl sub_nav_flag" data-subnav="scene"><a href="/scene.html" class="head-link">Scene Parsing</a></li>','<li class="nav-item plr20 nav-home fl sub_nav_flag"><span>Next-Gen Sim</span></li>','<li class="nav-item plr20 nav-home fl sub_nav_flag"><span>Benchmark</span></li>','<li class="nav-item plr20 nav-home fl sub_nav_flag nav_challenge" data-subnav="activity"><a href="#" class="head-link">Events</a></li>'],n=['<li class="nav-item nav-home fl sub_nav_flag"><a href="/index.html" class="head-link">首页</a></li>','<li class="nav-item nav-home fl sub_nav_flag" data-subnav="scene"><a href="/scene.html" class="head-link">场景解析</a></li>','<li class="nav-item nav-home fl sub_nav_flag"><span>下一代仿真</span></li>','<li class="nav-item nav-home fl sub_nav_flag"><span>排行榜</span></li>','<li class="nav-item nav-home fl sub_nav_flag nav_challenge" data-subnav="activity"><a href="#" class="head-link">活动</a></li>'],l={login:"Login",lang:"中文",logout:"Logout",use_pc:"Please use PC to access this page to download data and view more",perfect_info:"完善信息",assessment_manage:"评估管理"},s={login:"登陆",lang:"English",logout:"退出登陆",use_pc:"请使用PC登录本页面下载数据集和查看更多详情。",perfect_info:"完善信息",assessment_manage:"评估管理"},e={activity:['<li class="fl"><a href="/ECCV/index.html">ECCV2018 Vision Workshop</a></li>','<li class="fl"><a href="Http://wad.ai/challenge.html">CVPR2018 Perception Workshop</a></li>','<li class="fl"><a href="Http://www.2018iv.org/SS07.html">IV2018 Simulation Challenge</a></li>']},i={activity:['<li class="fl"><a href="/ECCV/index.html">ECCV2018 视觉导航研讨会</a></li>','<li class="fl"><a href="Http://wad.ai/challenge.html">CVPR2018 感知研讨会</a></li>','<li class="fl"><a href="Http://www.2018iv.org/SS07.html">IV 2018 仿真挑战赛</a></li>']},o="";if("en"==$.cookie("use_lang"))var t=a,c=l,u=e;else var t=n,c=s,u=i;$.each(t,function(a,n){o+=n}),$(".nav-list").html(o),$(".lang-switch").html(c.lang),$("#use_pc_text").html(c.use_pc);var v=get_userinfo(c);$(".sub_nav_flag").bind("mouseover",function(){if($(this).hasClass("nav_challenge")){var a=$(this).attr("data-subnav"),n="";$.each(u[a],function(a,l){n+=l}),$("#sub-nav-ul").html(n),$(".sub-nav").css("display","inline")}else $(".sub-nav").css("display","none")}),$(".sub-nav").bind("mouseover",function(){$(".sub-nav").css("display","inline")}),$(".sub-nav").bind("mouseout",function(){$(".sub-nav").css("display","none")}),$("#lang-switch").bind("click",function(){"en"==$.cookie("use_lang")?$.cookie("use_lang","cn",{expires:15}):$.cookie("use_lang","en",{expires:15}),window.location.reload()}),1==v&&($("#lang-login-container").bind("mouseover",function(){$(".lang-logout").css("display","block"),$("#lang_logout").bind("click",function(){user_logout()})}),$("#lang-login-container").bind("mouseout",function(){$(".lang-logout").css("display","none")})),$(".mobile-banner-close").bind("click",function(){$(".nav-prompt").css("display","none")})}function get_userinfo(a){var n=1,l="";return $.ajax({type:"GET",dataType:"json",url:"/server/user/checkinfo",success:function(n){if(0==n.status){var s=n.data.username;if(s.length>5)var s=s.slice(0,5)+"...";l='<a href="#" class="lang-login sub_nav_flag">'+s+"</a>",l+='<div class="lang-logout">'+a.logout+"</div>",$("#lang-login-container").html(l),n=1}else l='<a href="/login.html" class="lang-login sub_nav_flag">'+a.login+"</a>",$("#lang-login-container").html(l)},error:function(){l='<a href="/login.html" class="lang-login sub_nav_flag">'+a.login+"</a>",$("#lang-login-container").html(l)}}),n}function user_logout(){$.ajax({type:"GET",dataType:"json",url:"/server/user/logout",success:function(){window.location="/index.html"},error:function(){window.location="/index.html"}})}$(document).ready(function(){}),setTimeout(function(){initNav()},360);