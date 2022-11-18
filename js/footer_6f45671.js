function initFooter() {
  $(".footer-link").length > 0
    ? showFooter()
    : setTimeout(function () {
        initFooter();
      }, 400);
}
function showFooter() {
  var t = {
      link_info: [
        { name: "Apollo", url: "http://apollo.auto/" },
        // { name: "Wad.Ai", url: "http://wad.ai/" },
        {
          name: "Github toolkit",
          url: "https://github.com/ApolloScapeAuto/dataset-api",
        },
        // {
        //     name: "Request download full dataset",
        //     url: "mailto:apollo-scape@baidu.com",
        // },
        {
          name: "Email (Request download full dataset)",
          url: "mailto:apolloscape.auto@gmail.com",
        }
      ],
      link_title: "Links：",
      contact_title: "Please submit issue at",
      email: "https://github.com/ApolloScapeAuto/dataset-api",
      tiptop: "back top",
      copyright: "@ApolloScape 2023",
    },
    i = "",
    o = t;
  (i +=
    '<div class="content"><span class="link-name">' + o.link_title + "</span>"),
    $.each(o.link_info, function (t, o) {
      i += '<a href="' + o.url + '">' + o.name + "</a>";
    }),
    (i +=
      '<span class="link-name">' +
      o.contact_title +
      '</span><span class="email">' +
      o.email +
      "</span></div>"),
    (i += '<div class="cb"></div>'),
    $(".footer-link").html(i),
    (i = ""),
    (i =
      '<li id="tip-top" class="tip-item tip-top" style="display: list-item;"><a href="#banner-container">' +
      o.tiptop +
      "</a></li>"),
    $(".tooltip").html(i),
    $("#copyright").html(o.copyright);
}
$(document).ready(function () {}),
  setTimeout(function () {
    initFooter();
  }, 450);
