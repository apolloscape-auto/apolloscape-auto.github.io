function initNav() {
  $("#sub-nav-ul").length > 0
    ? showNav()
    : setTimeout(function () {
        initNav();
      }, 400);
}
function showNav() {
  var a =
      '<li class="nav-item plr20 nav-home fl sub-nav-flag nav_scene" data-subnav="scene"><a href="#" class="head-link">Datasets</a></li>',
    l =
      '<li class="nav-item plr20 nav-home fl sub-nav-flag" data-subnav="leaderBoard"><a href="/leader_board.html" class="head-link">LeaderBoard</a></li>',
    n =
      '<li class="nav-item plr20 nav-home fl sub-nav-flag nav_challenge" data-subnav="activity"><a href="#" class="head-link">Events</a></li>',
    // e =      '<li class="nav-item plr20 nav-home fl sub-nav-flag nav_challenge" data-subnav="submit"><a href="/submit.html" class="head-link">Submit</a></li>',
    i = [
      '<li class="nav-item plr20 nav-home fl sub-nav-flag"><a href="/index.html" class="head-link">Home</a></li>',
      a,
      l,
      n,
    //   e,
    ],
    // s = {
    //   login: "Login",
    //   lang: "中文",
    //   logout: "Logout",
    //   use_pc:
    //     "Please use PC to access this page to download data and view more",
    //   perfect_info: "完善信息",
    //   assessment_manage: "评估管理",
    // },
    t = {
      scene: [
        '<li class="fl"><a href="scene.html">Scene Parsing</a></li>',
        '<li class="fl" style="margin-right: 500;"><a href="car_instance.html">Car Instance</a></li>',
        '<li class="fl" style="margin-right: 500;"><a href="lane_segmentation.html">Lane Segmentation</a></li>',
        '<li class="fl" style="margin-right: 500;"><a href="self_localization.html">Self Localization</a></li>',
        '<li class="fl" style="margin-right: 500;"><a href="trajectory.html">Trajectory</a></li>',
        '<li class="fl" style="margin-right: 500;"><a href="tracking.html">Detection/Tracking</a></li>',
        '<li class="fl" style="margin-right: 500;"><a href="stereo.html">Stereo</a></li>',
        '<li class="fl" style="margin-right: 500;"><a href="inpainting.html">Inpainting</a></li>',
      ],
      activity: [
        '<li class="fl"><a href="https://www.kaggle.com/c/pku-autonomous-driving/overview">Kaggle 2020</a></li>',
        '<li class="fl"><a href="http://wad.ai/2019/challenge.html">CVPR 2019 Trajectory and 3D Perception Workshop</a></li>',
        '<li class="fl"><a href="http://wad.ai/">ICCV 2019 Workshop</a></li>',
        '<li class="fl"><a href="/ECCV/index.html">ECCV 2018 Workshop</a></li>',
        '<li class="fl"><a href="http://wad.ai/2018/index.html">CVPR 2018 Workshop</a></li>',
      ],
      leaderBoard: [],
    },
    o = "";
  if ("en" === $.cookie("use_lang"))
    var c = i,
      r = s,
      h = t;
  else
    var c = i,
      r = s,
      h = t;
  $.each(c, function (a, l) {
    o += l;
  }),
    $(".nav-list").html(o),
    $("#use_pc_text").html(r.use_pc);
  var g = getUserinfo(r),
    u = "";
  $.each(h.scene, function (a, l) {
    u += l;
  }),
    $("#sub-nav-ul").html(u),
    getUrl(),
    $(".sub-nav-flag").bind("mouseover", function () {
      var a = $(this).attr("data-subnav");
      if (a) {
        var l = "";
        $.each(h[a], function (a, n) {
          l += n;
        }),
          $("#sub-nav-ul").html(l),
          getUrl();
      }
    }),
    $("#lang-switch").bind("click", function () {
      "en" === $.cookie("use_lang")
        ? $.cookie("use_lang", "cn", { expires: 15 })
        : $.cookie("use_lang", "en", { expires: 15 }),
        window.location.reload();
    }),
    1 * g === 1 &&
      ($("#lang-login-container").bind("mouseover", function () {
        $(".lang-logout").css("display", "block"),
          $(".lang-logout").on("click", function () {
            userLogout();
          });
      }),
      $("#lang-login-container").bind("mouseout", function () {
        $(".lang-logout").css("display", "none");
      })),
    $(".mobile-banner-close").bind("click", function () {
      $(".nav-prompt").css("display", "none");
    });
}
function getUserinfo(a) {
  var l = 1,
    n = "";
  return (
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "/server/user/checkinfo",
      success: function (l) {
        if (1 * l.status === 0) {
          var e = l.data.username;
          e.length > 10 && (e = e.slice(0, 10) + "..."),
            (n = '<a href="license.html" class="lang-login">User License</a>'),
            (n +=
              '<a href="/achievement.html" class="lang-login sub-nav-flag">' +
              e +
              "</a>"),
            (n += '<div class="lang-logout">' + a.logout + "</div>"),
            $("#lang-login-container").html(n),
            (l = 1);
        } else
          (n = '<a href="license.html" class="lang-login">User License</a>'),
            (n +=
              '<a href="/login.html" class="lang-login sub-nav-flag">' +
              a.login +
              "</a>"),
            $("#lang-login-container").html(n);
      },
      error: function () {
        (n = '<a href="license.html" class="lang-login">User License</a>'),
          (n +=
            '<a href="/login.html" class="lang-login sub-nav-flag">' +
            a.login +
            "</a>"),
          $("#lang-login-container").html(n);
      },
    }),
    l
  );
}
function userLogout() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "/server/user/logout",
    success: function () {
      window.location = "/index.html";
    },
    error: function () {
      window.location = "/index.html";
    },
  });
}
function getUrl() {
  var a = location.pathname.replace("/", "");
  $("#sub-nav-ul a").each(function (l, n) {
    $(n).attr("href") === a && $(n).addClass("current");
  });
}
$(document).ready(function () {}),
  setTimeout(function () {
    initNav();
  }, 360);
