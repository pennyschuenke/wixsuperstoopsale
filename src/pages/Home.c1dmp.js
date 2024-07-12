// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

 $w.onReady(function () {
   import wixAnimationsFrontend from 'wix-animations-frontend';

   let timeline = wixAnimationsFrontend.timeline();

// // ...

// timeline.onStart( () => {
//   // handle timeline start
//   console.log("Timeline has started.");
// } );

    

//     // Write your Javascript code here using the Velo framework API

//     // Print hello world:
//     // console.log("Hello world!");

//     // Call functions on page elements, e.g.:
//     // $w("#button1").label = "Click me!";

//     // Click "Run", or Preview your site, to execute your code

// });


$w("#button1").'onClick', function(e) {
  $w(this).toggleClass('liked');
  
  setTimeout(() => {
    $w(e.target).removeClass('liked')
  }, 1000)
});

// /**
// *	Adds an event handler that runs when the element is clicked.
// 	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
// *	 @param {$w.MouseEvent} event
// */

export function imageX1_click(event) {
     let action = $w("#imageX1").clickAction = "expand"


	
}