function initNav(){$("#sub-nav-ul").length>0?showNav():setTimeout(function(){initNav()},400)}function showNav(){var a='<li class="nav-item plr20 nav-home fl sub-nav-flag nav_scene" data-subnav="scene"><a href="#" class="head-link">Datasets</a></li>',n='<li class="nav-item plr20 nav-home fl sub-nav-flag" data-subnav="leaderBoard"><a href="/leader_board.html" class="head-link">LeaderBoard</a></li>',l='<li class="nav-item plr20 nav-home fl sub-nav-flag nav_challenge" data-subnav="activity"><a href="#" class="head-link">Events</a></li>',e=['<li class="nav-item plr20 nav-home fl sub-nav-flag"><a href="/index.html" class="head-link">Home</a></li>',a,n,l],i={login:"Login",lang:"中文",logout:"Logout",use_pc:"Please use PC to access this page to download data and view more",perfect_info:"完善信息",assessment_manage:"评估管理"},s={scene:['<li class="fl"><a href="scene.html">Scene Parsing</a></li>','<li class="fl" style="margin-right: 500;"><a href="car_instance.html">Car Instance</a></li>','<li class="fl" style="margin-right: 500;"><a href="lane_segmentation.html">Lane Segmentation</a></li>','<li class="fl" style="margin-right: 500;"><a href="self_localization.html">Self Localization</a></li>','<li class="fl" style="margin-right: 500;"><a href="trajectory.html">Trajectory</a></li>','<li class="fl" style="margin-right: 500;"><a href="tracking.html">Detection/Tracking</a></li>','<li class="fl" style="margin-right: 500;"><a href="stereo.html">Stereo</a></li>'],activity:['<li class="fl"><a href="Http://wad.ai/challenge.html">CVPR2019 Perception Workshop</a></li>','<li class="fl"><a href="/ECCV/index.html">ECCV2018 Vision Workshop</a></li>'],leaderBoard:[]},t="";if("en"===$.cookie("use_lang"))var o=e,c=i,r=s;else var o=e,c=i,r=s;$.each(o,function(a,n){t+=n}),$(".nav-list").html(t),$("#use_pc_text").html(c.use_pc);var g=getUserinfo(c),u="";$.each(r.scene,function(a,n){u+=n}),$("#sub-nav-ul").html(u),getUrl(),$(".sub-nav-flag").bind("mouseover",function(){var a=$(this).attr("data-subnav");if(a){var n="";$.each(r[a],function(a,l){n+=l}),$("#sub-nav-ul").html(n),getUrl()}}),$("#lang-switch").bind("click",function(){"en"===$.cookie("use_lang")?$.cookie("use_lang","cn",{expires:15}):$.cookie("use_lang","en",{expires:15}),window.location.reload()}),1*g===1&&($("#lang-login-container").bind("mouseover",function(){$(".lang-logout").css("display","block"),$(".lang-logout").on("click",function(){userLogout()})}),$("#lang-login-container").bind("mouseout",function(){$(".lang-logout").css("display","none")})),$(".mobile-banner-close").bind("click",function(){$(".nav-prompt").css("display","none")})}function getUserinfo(a){var n=1,l="";return $.ajax({type:"GET",dataType:"json",url:"/server/user/checkinfo",success:function(n){if(1*n.status===0){var e=n.data.username;e.length>5&&(e=e.slice(0,5)+"..."),l='<a href="license.html" class="lang-login">User License</a>',l+='<a href="#" class="lang-login sub-nav-flag">'+e+"</a>",l+='<div class="lang-logout">'+a.logout+"</div>",$("#lang-login-container").html(l),n=1}else l='<a href="license.html" class="lang-login">User License</a>',l+='<a href="/login.html" class="lang-login sub-nav-flag">'+a.login+"</a>",$("#lang-login-container").html(l)},error:function(){l='<a href="license.html" class="lang-login">User License</a>',l+='<a href="/login.html" class="lang-login sub-nav-flag">'+a.login+"</a>",$("#lang-login-container").html(l)}}),n}function userLogout(){$.ajax({type:"GET",dataType:"json",url:"/server/user/logout",success:function(){window.location="/index.html"},error:function(){window.location="/index.html"}})}function getUrl(){var a=location.pathname.replace("/","");$("#sub-nav-ul a").each(function(n,l){$(l).attr("href")===a&&$(l).addClass("current")})}$(document).ready(function(){}),setTimeout(function(){initNav()},360);