function initIndex(){$(".home-member").length>0?showIndex():setTimeout(function(){initIndex()},400)}function showIndex(){var e={banner:[{title:"ApolloScape",sub_title:"Autonomous Driving Forefront Technology And Datasets",brief:["Apollo Scape is a public project initiated by Baidu Apollo","IT is aimed to provide a large-scale open dataset and forefront technology to promote autonomous driving technologies. ","with a huge market and a high demand for robust and distributable algorithms."]}],intro:[{title:"Scene Parsing",brief:"The whole dataset will include RGB videos with high resolution image sequences and per pixel annotation, survey-grade dense 3D points with semantic segmentation. Our continuous collection will further add more sensors, such as stereoscopic video and panoramic images; and  cover a wide range of environment, weather, and  traffic conditions.",btn:"Learn more",btn_url:"scene.html",img:"/public/img/index/intro-scene_ca748b1.jpg"},{title:"About ApolloScape Dataset",brief:"Scene Parsing dataset provides 146,997 frames with corresponding pixel-level annotations and pose information, depth maps for static background. Trajectory dataset, 3D Lidar Object Detection and Tracking dataset including about 100K image frames, 80k lidar point cloud and 1000km trajectories for urban traffic. The dataset consisting of varying conditions and traffic densities which includes many challenging scenarios where vehicles, bicycles, and pedestrians move among one another.",btn:"Learn more",btn_url:"trajectory.html",img:"/public/img/index/intro-simulation_840bea5.jpg"}],member:[],other:{},log:{title:"News",item:[{title:"Publication",content:['The apolloscape open dataset for autonomous driving and its application. <br>Huang, Xinyu and Wang, Peng and Cheng, Xinjing and Zhou, Dingfu and Geng, Qichuan and Yang, Ruigang, arXiv: 1803.06184, 2018<br><a href="http://ad-apolloscape.bj.bcebos.com/public%2FApolloScape%20Dataset.pdf">[PDF]</a> &nbsp <a href="http://ad-apolloscape.bj.bcebos.com/public%2FBibTex.txt">[BibTex]</a>','TrafficPredict: Trajectory Prediction for Heterogeneous Traffic-Agents. <br>Yuexin Ma, Xinge Zhu, Sibo Zhang, Ruigang Yang, Wenping Wang, and Dinesh Manocha. AAAI(oral), 2019<br><a href="https://arxiv.org/abs/1811.02146">[PDF]</a> &nbsp <a href="https://ad-apolloscape.cdn.bcebos.com/TrafficPredict/trafficpredict_bibtex.txt">[BibTex]</a>','AADS: Augmented autonomous driving simulation using data-driven algorithms. <br>Wei Li, Chengwei Pan, Rong Zhang, Jiaping Ren, Yuexin Ma, Jin Fang, Feilong Yan, Qichuan Geng, Xinyu Huang, Huajun Gong, Weiwei Xu, Guoping Wang, Dinesh Manocha, Ruigang Yang. Science Robotics, 2019<br><a href="https://arxiv.org/pdf/1901.07849.pdf">[PDF]</a>']},{title:"Events Update",content:['2019.10  Organized <a href="http://wad.ai/">ICCV 2019 Workshop on Autonomous Driving</a>','2019.06  Organized <a href="http://wad.ai/2019/">CVPR 2019 Workshop on Autonomous Driving</a> and CVPR 2019 <a href="http://wad.ai/2019/challenge.html">Trajectory and 3D Perception Challenge</a>','2018  Organized <a href="http://wad.ai/2018/">CVPR 2018 Workshop on Autonomous Driving</a>']},{title:"Dataset Update",content:['2019     Updated <a href="https://github.com/ApolloScapeAuto/dataset-api">Toolkit for ApolloScape Dataset</a>','2019.03   Released <a href="http://apolloscape.auto/tracking.html">3D Lidar Object Detection and Tracking Dataset</a>, contains 80k lidar point cloud for urban traffic','2019.02  Released <a href="http://apolloscape.auto/trajectory.html">Trajectory Dataset</a>, contains 1000km trajectories for urban traffic.',"2018.03.08  We have released the first part of the dataset that contains 74555 video frames and their pixel-level and instance-level annotations","2018.03.21  We added the second part of the data set, including 43592 depth images for static background (road01_ins_depth&road02_ins_depth)","2018.03.29  Update the data set, including 30,963 depth images for static background (road03_ins_depth和road04_ins_depth)","2018.03.30  Update the data set, including 22,871 pixel-level images and depth images for static background (road02_seg和road02_seg_depth)",'2018.03.30  Uploaded the <a href="http://ad-apolloscape.bj.bcebos.com/public%2Fimage_lists.tar.gz">Image lists</a> for training, validation, and testing for road01_ins, road02_ins, and road03_ins',"2018.04.03  Update the data set, including 49,571 pixel-level images and depth images for static background（road03_seg and road04_seg）","2018.04.03  Scene Parsing data set cumulatively provides 146,997 frames with corresponding pixel-level annotations and pose information，depth maps for static background."]}]}},a="";if("en"==$.cookie("use_lang")){var i=e;$(".lang-en").css("display","block")}else{var i=e;$(".lang-en").css("display","block")}a="",$.each(i.intro,function(e,i){a+='<div class="home-intro">',a+=0===e?'<div class="left-content-item fr">':'<div class="left-content-item fl">',a+='<div class="title">'+i.title+"</div>",a+='<div class="content">',a+="<p>"+i.brief+"</p>",a+="</div>",""!==i.btn_url&&(a+='<a href="'+i.btn_url+'" class="btn intro-btn">'+i.btn+"</a>"),a+="</div>",a+='<div class="right-content-item fl">',a+='<div class="back">',a+='<img src="'+i.img+'" class="intro-img">',a+="</div>",a+="</div>",a+='<div class="cb"></div>',a+="</div>"}),$("#intro-container").html(a),a="",a+='<div class="home-member-title">'+i.log.title+"</div>",$.each(i.log.item,function(e,i){a+='<div class="update-log-item">',a+='<div class="home-member-title-2">'+i.title+"</div>",a+="<ul>",$.each(i.content,function(e,i){a+="<li>"+i+"</li>"}),a+="</ul>",a+="</div>"}),a+='<div class="cb"></div>',$("#update-log").html(a),a="",a+='<div class="title">'+i.banner[0].title+"</div>",a+='<div class="sub-title">'+i.banner[0].sub_title+"</div></div>",$("#mobile-banner").html(a),a="",$.each(i.intro,function(e,i){a+='<div class="mobile-intro">',a+='<div class="title">'+i.title+"</div>",a+='<div class="brief">&nbsp;&nbsp;&nbsp;&nbsp;'+i.brief+"</div>",a+='<div class="back"><img src="'+i.img+'" class="intro-img"></div>',a+="</div>"}),$("#mobile-intro-container").html(a),a="",a+='<div class="title">'+i.log.title+"</div>",$.each(i.log.item,function(e,i){a+='<div class="mobile-update-log-itme">',a+='<div class="mobile-title-2">'+i.title+"</div>",a+="<ul>",$.each(i.content,function(e,i){a+="<li>"+i+"</li>"}),a+="</ul>",a+="</div>"}),$("#mobile-update-log").html(a);var t=$(window).width();if(t>=750){new Swiper(".swiper-container",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}})}}$(document).ready(function(){}),setTimeout(function(){initIndex()},420);