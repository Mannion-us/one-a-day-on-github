// var collectionItemTemplate =
// #1
//<!--Matt assisted 'collection fix'-->
 var buildCollectionItemTemplate = function(album) {
     var template =
     '<div class="collection-album-container column fourth">'
   + '  <a href="album.html"><img src=" ' + album.albumArtUrl + ' "/></a>'//takes me to album.html but does not carry 'info'//
   + '  <div class="collection-album-info caption">'
   + '    <p>'
   + '      <a class="album-name" href="album.html"> ' + album.title + ' </a>'
   + '      <br/>'
   + '      <a href="album.html"> ' + album.artist + ' </a>'
   + '      <br/>'
   + '      X songs'
   + '      <br/>'
   + '    </p>'
   + '  </div>'
   + '</div>'
   ;
 
// #2
     return $(template);
 };

//    window.onload = function() {
 $(window).load(function() {
     // #1
//     var collectionContainer = document.getElementsByClassName('album-covers')[0];
     // #3
     var $collectionContainer = $('.album-covers');
     // #2
//     collectionContainer.innerHTML = '';
     // #4
     $collectionContainer.empty(); 
     // #3

//<!--Matt assisted 'collection fix'-->//

      for (var i = 0; i < albums.length; i++) {
        $collectionContainer.append(buildCollectionItemTemplate(albums[i]));
      };

//<!--Matt assisted 'collection fix'-->//

/*
     for (var i = 0; i < 12; i++) {
//         collectionContainer.innerHTML += collectionItemTemplate;
         var $newThumbnail = buildCollectionItemTemplate();
         // #5
         $collectionContainer.append($newThumbnail);
     }
     */
// }
});

var selectedAlbum = function(album) {
    $(this).click(clickHandler);
};
