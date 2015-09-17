function musikDongBang(uri,judul,appid,pley,lop){
  var tulis ='<center style="position:relative; text-transform:capitalize; background-image:url(http://1.bp.blogspot.com/_bBL9ze_JZsw/TT_VysqlknI/AAAAAAAAAMs/OgtZMowV_m4/s1600/black50.png); -moz-border-radius:7px; -webkit-border-radius:7px; -goog-ms-border-radius:7px; border-radius:7px">';
  tulis+='<div style="background:transparent url(http://feedjit.com/images/w2/overlayDark2.png) repeat-x scroll bottom center; padding:5px; text-align:left; color:#aaaaaa">';
  if(pley==null || pley==''){pley='yes'}
  if(lop==null || lop==''){lop='yes'}
  if(judul==null || judul==''){
    var purl=uri.split('/').length-1;
    var artist=window.location.hostname;
    var title=uri.split('/')[purl].split('.mp3')[0];
    judul=title;
  }else{
    var artist=judul.split(' - ')[0];
    if(judul.split(' - ')[1]){var title=judul.split(' - ')[1]}else{var title=judul}
  }
  if(window.location.href.split('/')[0]=='file:'){var buathref=uri}else{var buathref=window.location.href}
  if(appid==null || appid==''){appid='280601502013631'}
  window.appbwtlg=appid;
  var album=uri.split('/')[2];
  tulis+='<center><a href="'+uri+'" target="_blank">'+judul+'</a></center>';
  var srcmp3='http://quran.com/audio/player.swf?soundFile='+uri;
      srcmp3+='&autostart='+pley;
      srcmp3+='&loop='+lop;
      srcmp3+='&bg=0x000000&leftbg=0xAF2910&lefticon=0xF2F2F2&rightbg=0xD67919&rightbghover=0x1BAD07&righticon=0xF2F2F2&righticonhover=0xFFFFFF&text=0xE0E3F4&slider=0x357DCE&track=0xFFFFFF&border=0xFFFFFF&loader=0xAF2910';
  tulis+='<div style="height:20px;"><embed id="embed-music" wmode="transparent" ';
  tulis+='src="'+srcmp3+'" ';
  tulis+='quality="high" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" ';
  tulis+='align="top" width="229" height="20"></embed></div>';
  tulis+='<center class="transparent" style="width:100px; margin:-20px 0 0 60px;"><iframe src="http://www.facebook.com/plugins/like.php?href='+uri+'&layout=button_count&colorscheme=dark&show_faces=false&width=90" style="width:90px; height:20px; background:none; padding:0; margin:0; border:0;"></iframe></center>';
  tulis+='<center><a href="javascript:void(0)" onClick="if(document.getElementById(\'embed-music\').style.display==\'none\'){document.getElementById(\'embed-music\').style.display=\'block\';this.innerHTML=\'Stop\'}else{document.getElementById(\'embed-music\').style.display=\'none\';this.innerHTML=\'Play\'}">Stop</a> · <a href="http://www.facebook.com/connect/prompt_feed.php?api_key='+appid+'&attachment={%22name%22:%22%20'+document.title+'%22,%22href%22:%22'+buathref+'%22,%22media%22:[{%22type%22:%22mp3%22,%22src%22:%22'+uri+'%22,%22artist%22:%22'+artist+'%22,%22title%22:%22'+title+'%22,%22album%22:%22'+album+'%22}]}" onClick="javascript:window.open(this.href,\'musik\',\'width=600,height=300\'); return false; void(0)">Share</a> · <a href="javascript:void(0)" onClick="lagunek()">Next</a></center>';
  tulis+='</div></div>';
  this.bknAnk=function(apa,dimana,isinya,idnya){
    var nyudip=document.createElement(apa);
        nyudip.innerHTML=isinya;
    if(idnya!=null && idnya!=''){nyudip.id=idnya}
    dimana.appendChild(nyudip);
  };
  window.lgnk=function(){
    if(typeof mywapmp3s!='undefined'){
      mywapmp3s=mywapmp3s.sort(function(){return 0.5-Math.random()});
      var ke=Math.floor(Math.random()*mywapmp3s.length);
      if(typeof mywapmp3s[ke]=='undefined'){ke=0}
      musikDongBang(mywapmp3s[ke].uri,mywapmp3s[ke].judul,appbwtlg,'yes','yes');
    }
  };
  if(!document.getElementById('pleyermusik')){
    if(document.getElementById('sittingthere')){
      bknAnk('div',document.getElementById('sittingthere'),tulis,'pleyermusik');
    }else{
      bknAnk('div',document.body,'<div id="pleyermusik">'+tulis+'</div>','sittingthere');
      var dip=document.getElementById('sittingthere');
      dip.style.width='239px'; dip.style.position='fixed'; dip.style.bottom='10px'; dip.style.left='10px';
    }
  }
}
