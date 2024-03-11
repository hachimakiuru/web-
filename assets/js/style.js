$(function(){
  $(".slideshow-fade li").css({"position":"relative","overflow":"hidden"});
  $(".slideshow-fade li").hide().css({"position":"absolute","top":0,"left":0});
  $(".slideshow-fade li:first").addClass("fade").show();
  setInterval(function(){
      var $active = $(".slideshow-fade li.fade");
      var $next = $active.next("li").length?$active.next("li"):$(".slideshow-fade li:first");
      
      // 最初のスライドの場合だけ短い時間でフェードイン/アウトを実行
      if ($active.is(':first-child')) {
          $active.fadeOut(1500).removeClass("fade");
          $next.fadeIn(1500).addClass("fade");
      } else {
          $active.fadeOut(3000).removeClass("fade");
          $next.fadeIn(3000).addClass("fade");
      }
  },  3500);
});

  // section2
  window.addEventListener('scroll', function() {
    var scrollHeight = window.scrollY;
    var messageElement = document.querySelector('.section2_inner_message_before');

    var threshold;

    // ウィンドウの幅が480px以下の場合は閾値を500に、それ以外は470に設定
    if (window.innerWidth <= 480) {
        threshold = 320;
    } else {
        threshold = 470;
    }

    var opacity = (scrollHeight >= threshold) ? 1 : 0;

    messageElement.style.opacity = opacity;
});


//   window.addEventListener('scroll', function() {
//     var scrollHeight = window.scrollY;
//     var messageElement = document.querySelector('.section2_inner_message_before');

//     // console.log(messageElement);
//     // console.log(scrollHeight);


//     var threshold = 470; // スクロールの閾値

//     var opacity = (scrollHeight >= threshold) ? 1 : 0;
//     // console.log(opacity);

//     messageElement.style.opacity = opacity;
// });

// section3
window.addEventListener('scroll', function() {
  var scrollHeight = window.scrollY;
  var messageElement = document.querySelector('.section3_inner_message');
  var threshold;

  // ウィンドウの幅が480px以下の場合は閾値を500に、それ以外は1050に設定
  if (window.innerWidth <= 480) {
      threshold = 350;
  } else {
      threshold = 1050;
  }

  if (scrollHeight >= threshold) {
      messageElement.style.opacity = 1;
  } else {
      messageElement.style.opacity = 0;
  }
});

// window.addEventListener('scroll', function() {
//   var scrollHeight = window.scrollY;
//   var messageElement = document.querySelector('.section3_inner_message');
//   var threshold = 1050; // スクロールの閾値
//   // console.log(scrollHeight )

//   if (scrollHeight >= threshold) {
//       messageElement.style.opacity = 1;
//   } else {
//       messageElement.style.opacity = 0;
//   }
// });

// section4
  // window.addEventListener('scroll', function() {
  //   var scrollHeight = window.scrollY;
  //   var images = this.document.getElementsByClassName('myImage')

  //   if (scrollHeight >= 1600) {
  //     // console.log(images)

  //     images[0].style.opacity = 1
  //     images[1].style.opacity = 1
  //     images[2].style.opacity = 1
  //   } else {
  //     images[0].style.opacity = 0
  //     images[1].style.opacity = 0
  //     images[2].style.opacity = 0
  //   }
  // });

  window.addEventListener('scroll', function() {
    var scrollHeight = window.scrollY;
    var images = this.document.getElementsByClassName('myImage')

    // メディアクエリを使用してウィンドウの幅によって条件を変更
    if (window.matchMedia("(max-width: 480px)").matches) {
        // ウィンドウの幅が480px以下の場合の条件
        if (scrollHeight >= 1900) {
            setImagesOpacity(images, 1);
        } else {
            setImagesOpacity(images, 0);
        }
    } else {
        // ウィンドウの幅が480pxより大きい場合の条件
        if (scrollHeight >= 1750) {
            setImagesOpacity(images, 1);
        } else {
            setImagesOpacity(images, 0);
        }
    }
});

// 画像の透明度を一括で設定する関数
function setImagesOpacity(images, opacity) {
    for (var i = 0; i < images.length; i++) {
        images[i].style.opacity = opacity;
    }
}


 



// lorading
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
  duration: 1000,//時間指定(1000＝1秒)
  strokeWidth: 0.2,//進捗ゲージの太さ
  color: '#555',//進捗ゲージのカラー
  trailWidth: 0.2,//ゲージベースの線の太さ
  trailColor: '#bbb',//ゲージベースの線のカラー
  text: {//テキストの形状を直接指定       
    style: {//天地中央に配置
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',//バーより上に配置
      transform:'translate(-50%,-50%)',
      'font-size':'1rem',
      color: '#fff',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  



// ハンバーガー
document.addEventListener("DOMContentLoaded", function () {
  // メニューが開いているかどうかを判定するための変数
  var menuCheckbox = document.getElementById("hamburger-demo1");

  // メニューの各リンクに対してイベントリスナーを設定
  var menuLinks = document.querySelectorAll(".hamburger-demo-menulist a");
  menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
          // リンクがクリックされたら、メニューが開いている場合にのみ閉じる
          if (menuCheckbox.checked) {
              menuCheckbox.checked = false;
          }
      });
  });
});






