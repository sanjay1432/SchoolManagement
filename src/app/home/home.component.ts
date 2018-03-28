import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewChecked() {
    let self=this;
    $( document ).ready(function() {
          
      scaleVideoContainer();
      
      initBannerVideoSize('.video-container .poster img');
      initBannerVideoSize('.video-container .filter');
      initBannerVideoSize('.video-container video');
      
      $(window).on('resize', function() {
          scaleVideoContainer();
          scaleBannerVideoSize('.video-container .poster img');
          scaleBannerVideoSize('.video-container .filter');
          scaleBannerVideoSize('.video-container video');
      });
      
      });
      
      function scaleVideoContainer() {
      
      var height = $(window).height() + 5;
      var unitHeight = parseInt(height) + 'px';
      $('.homepage-hero-module').css('height',unitHeight);
      
      }
      
      function initBannerVideoSize(element){
      
      $(element).each(function(){
          $(self).data('height', $(self).height());
          $(self).data('width', $(self).width());
      });
      
      scaleBannerVideoSize(element);
      
      }
      
      function scaleBannerVideoSize(element){
      
      var windowWidth = $(window).width(),
      windowHeight = $(window).height() + 5,
      videoWidth,
      videoHeight;
      
      // console.log(windowHeight);
      
      $(element).each(function(){
          var videoAspectRatio = $(self).data('height')/$(self).data('width');
      
          $(self).width(windowWidth);
      
          if(windowWidth < 1000){
              videoHeight = windowHeight;
              videoWidth = videoHeight / videoAspectRatio;
              $(self).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
      
              $(self).width(videoWidth).height(videoHeight);
          }
      
          $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
      
      });
      }
  }
}
