function initIndex(){$(".home-member").length>0?showIndex():setTimeout(function(){initIndex()},400)}function showIndex(){var a={banner:[{title:"ApolloScape",sub_title:"Autonomous Driving Forefront Technology And Datasets",brief:["Apollo Scape is a public project initiated by Baidu Apollo","IT is aimed to provide a large-scale open dataset and forefront technology to promote autonomous driving technologies. ","with a huge market and a high demand for robust and distributable algorithms."]}],intro:[{title:"About ApolloScape Dataset",brief:'Trajectory dataset, 3D Perception Lidar Object Detection and Tracking dataset including about 100K image frames, 80k lidar point cloud and 1000km trajectories for urban traffic. The dataset consisting of varying conditions and traffic densities which includes many challenging scenarios where vehicles, bicycles, and pedestrians move among one another. Please checkout toolkit on Github <a href="https://github.com/ApolloScapeAuto/dataset-api">Toolkit for ApolloScape Dataset</a>',btn:"Learn more",btn_url:"trajectory.html",img:"/public/img/index/intro-simulation_840bea5.jpg"},{title:"Scene Parsing",brief:"The whole dataset will include RGB videos with high resolution image sequences and per pixel annotation, survey-grade dense 3D points with semantic segmentation. Our continuous collection will further add more sensors, such as stereoscopic video and panoramic images; and  cover a wide range of environment, weather, and  traffic conditions. Scene Parsing dataset provides 146,997 frames with corresponding pixel-level annotations and pose information, depth maps for static background. ",btn:"Learn more",btn_url:"scene.html",img:"/public/img/index/intro-scene_ca748b1.jpg"}],member:[],other:{},log:{title:"News",item:[{title:"Publication",content:['DVI: Depth Guided Video Inpainting for Autonomous Driving. <br>Miao Liao, Feixiang Lu, Dingfu Zhou, Sibo Zhang, Wei Li, and Ruigang Yang. European Conference on Computer Vision. ECCV 2020 <br><a href="https://arxiv.org/pdf/2007.08854.pdf">[PDF]</a> &nbsp <a href="http://apolloscape.auto/inpainting.html">[Inpainting Dataset]</a> &nbsp <a href="https://github.com/ApolloScapeAuto/dataset-api/tree/master/inpainting">[Github]</a> &nbsp <a href="https://www.youtube.com/watch?v=iOIxdQIzjQs">[Result Video]</a> &nbsp <a href="https://www.youtube.com/watch?v=_pcqH1illCU">[Presentation Video]</a> &nbsp <a href="https://github.com/ApolloScapeAuto/dataset-api/blob/master/inpainting/dvi_bibtex.txt">[BibTex]</a>','TrafficPredict: Trajectory Prediction for Heterogeneous Traffic-Agents. <br>Yuexin Ma, Xinge Zhu, Sibo Zhang, Ruigang Yang, Wenping Wang, and Dinesh Manocha. The Thirty-Third AAAI Conference on Artificial Intelligence. AAAI 2019 (oral)<br><a href="https://arxiv.org/abs/1811.02146">[PDF]</a> &nbsp <a href="http://apolloscape.auto/trajectory.html">[Trajectory Dataset]</a> &nbsp <a href="https://github.com/ApolloScapeAuto/dataset-api/tree/master/trajectory_prediction">[Github]</a>  &nbsp <a href="http://gamma.cs.unc.edu/TPredict/TrafficPredict.html">[Webpage]</a> &nbsp <a href="https://www.youtube.com/watch?v=dST6NDxEMU8">[Video]</a> &nbsp <a href="https://ad-apolloscape.cdn.bcebos.com/TrafficPredict/trafficpredict_bibtex.txt">[BibTex]</a>','The apolloscape open dataset for autonomous driving and its application. <br>Huang, Xinyu and Wang, Peng and Cheng, Xinjing and Zhou, Dingfu and Geng, Qichuan and Yang, Ruigang. IEEE transactions on pattern analysis and machine intelligence<br><a href="https://arxiv.org/pdf/1803.06184.pdf">[PDF]</a> &nbsp <a href="http://apolloscape.auto/scene.html">[Scene Dataset]</a> &nbsp <a href="https://ad-apolloscape.cdn.bcebos.com/public/apolloscape_bibTex.txt">[BibTex]</a>','ApolloCar3D: A Large 3D Car Instance Understanding Benchmark for Autonomous Driving. <br>Song, Xibin and Wang, Peng and Zhou, Dingfu and Zhu, Rui and Guan, Chenye and Dai, Yuchao and Su, Hao and Li, Hongdong and Yang, Ruigang. CVPR, 2019<br><a href="http://openaccess.thecvf.com/content_CVPR_2019/papers/Song_ApolloCar3D_A_Large_3D_Car_Instance_Understanding_Benchmark_for_Autonomous_CVPR_2019_paper.pdf">[PDF]</a> &nbsp <a href="http://apolloscape.auto/car_instance.html">[Car Instance Dataset]</a> &nbsp <a href="https://scholar.googleusercontent.com/scholar.bib?q=info:4bz3YPx9WkIJ:scholar.google.com/&output=citation&scisdr=CgXjlNWZEJrk-4FjBaA:AAGBfm0AAAAAXnBmHaCeBWXWonvsMbm0ij0q_vxC-vKO&scisig=AAGBfm0AAAAAXnBmHc3l8OMlNK05P619INLviiYce4SD&scisf=4&ct=citation&cd=-1&hl=en">[BibTex]</a>','AADS: Augmented autonomous driving simulation using data-driven algorithms. <br>Wei Li, Chengwei Pan, Rong Zhang, Jiaping Ren, Yuexin Ma, Jin Fang, Feilong Yan, Qichuan Geng, Xinyu Huang, Huajun Gong, Weiwei Xu, Guoping Wang, Dinesh Manocha, Ruigang Yang. Science Robotics, 2019<br><a href="https://arxiv.org/pdf/1901.07849.pdf">[PDF]</a>']},{title:"Events Update",content:['2020.02  <a href="https://www.kaggle.com/c/pku-autonomous-driving">Kaggle Pku/Baidu Workshop on Autonomous Driving</a>','2019.10  <a href="http://wad.ai/">ICCV 2019 Workshop on Autonomous Driving</a>','2019.06  <a href="http://wad.ai/2019/">CVPR 2019 Workshop on Autonomous Driving</a> and CVPR 2019 <a href="http://wad.ai/2019/challenge.html">Trajectory and 3D Perception Challenge</a>.  Summary <a href="https://arxiv.org/pdf/2004.05966.pdf">[PDF]</a>','2018  <a href="http://wad.ai/2018/">CVPR 2018 Workshop on Autonomous Driving</a>']},{title:"Dataset Update",content:['Top     <a href="https://github.com/ApolloScapeAuto/dataset-api">Toolkit for ApolloScape Dataset</a>','2020.09   Released <a href="http://apolloscape.auto/inpainting.html">Inpainting Dataset</a>, consists of synchronized Labeled image and LiDAR scanned point clouds.','2019.03   Released <a href="http://apolloscape.auto/tracking.html">3D Lidar Object Detection and Tracking Dataset</a>, contains 80k lidar point cloud for urban traffic','2019.02  Released <a href="http://apolloscape.auto/trajectory.html">Trajectory Dataset</a>, contains 1000km trajectories for urban traffic.',"2018.03.08  We have released the first part of the dataset that contains 74555 video frames and their pixel-level and instance-level annotations","2018.03.21  We added the second part of the data set, including 43592 depth images for static background (road01_ins_depth&road02_ins_depth)","2018.03.29  Update the data set, including 30,963 depth images for static background (road03_ins_depth和road04_ins_depth)","2018.03.30  Update the data set, including 22,871 pixel-level images and depth images for static background (road02_seg和road02_seg_depth)",'2018.03.30  Uploaded the <a href="http://ad-apolloscape.bj.bcebos.com/public%2Fimage_lists.tar.gz">Image lists</a> for training, validation, and testing for road01_ins, road02_ins, and road03_ins',"2018.04.03  Update the data set, including 49,571 pixel-level images and depth images for static background（road03_seg and road04_seg）","2018.04.03  Scene Parsing data set cumulatively provides 146,997 frames with corresponding pixel-level annotations and pose information，depth maps for static background."]}]}},e="";if("en"==$.cookie("use_lang")){var t=a;$(".lang-en").css("display","block")}else{var t=a;$(".lang-en").css("display","block")}e="",$.each(t.intro,function(a,t){e+='<div class="home-intro">',e+=0===a?'<div class="left-content-item fr">':'<div class="left-content-item fl">',e+='<div class="title">'+t.title+"</div>",e+='<div class="content">',e+="<p>"+t.brief+"</p>",e+="</div>",""!==t.btn_url&&(e+='<a href="'+t.btn_url+'" class="btn intro-btn">'+t.btn+"</a>"),e+="</div>",e+='<div class="right-content-item fl">',e+='<div class="back">',e+='<img src="'+t.img+'" class="intro-img">',e+="</div>",e+="</div>",e+='<div class="cb"></div>',e+="</div>"}),$("#intro-container").html(e),e="",e+='<div class="home-member-title">'+t.log.title+"</div>",$.each(t.log.item,function(a,t){e+='<div class="update-log-item">',e+='<div class="home-member-title-2">'+t.title+"</div>",e+="<ul>",$.each(t.content,function(a,t){e+="<li>"+t+"</li>"}),e+="</ul>",e+="</div>"}),e+='<div class="cb"></div>',$("#update-log").html(e),e="",e+='<div class="title">'+t.banner[0].title+"</div>",e+='<div class="sub-title">'+t.banner[0].sub_title+"</div></div>",$("#mobile-banner").html(e),e="",$.each(t.intro,function(a,t){e+='<div class="mobile-intro">',e+='<div class="title">'+t.title+"</div>",e+='<div class="brief">&nbsp;&nbsp;&nbsp;&nbsp;'+t.brief+"</div>",e+='<div class="back"><img src="'+t.img+'" class="intro-img"></div>',e+="</div>"}),$("#mobile-intro-container").html(e),e="",e+='<div class="title">'+t.log.title+"</div>",$.each(t.log.item,function(a,t){e+='<div class="mobile-update-log-itme">',e+='<div class="mobile-title-2">'+t.title+"</div>",e+="<ul>",$.each(t.content,function(a,t){e+="<li>"+t+"</li>"}),e+="</ul>",e+="</div>"}),$("#mobile-update-log").html(e);var i=$(window).width();if(i>=750){new Swiper(".swiper-container",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}})}}$(document).ready(function(){}),setTimeout(function(){initIndex()},420);