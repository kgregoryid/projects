projects
Project 3 Peer Assessment
Reviewer 1

I did not find any mechanical problems with the code. The code looked correct and I did not find any missing semicolons or commmas. The navigation between the two windos labels were off. The camera was labeled both win1 and win2 but you could switch between windows. The person added the camera gadget code. The code looked good but they forgot to add the code that shows the camera. The user needs to add:
showCamera.addEventListner ('click', function (e) {
Ti.Media.showCamera ({animated:true,
                    autoHide:true,
                    saveToPhotoGallery: true,
                    showControls: true,
                    mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
                    success: function(e) {showPhoto (e)} ,
                    error: function(e) {alert('there was a problem accessing the camera')}
                    })
  });
  
  Ti.Media.showCamera
========
