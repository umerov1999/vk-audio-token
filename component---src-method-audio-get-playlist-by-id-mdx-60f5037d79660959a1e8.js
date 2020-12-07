(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{Q2Vc:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return b}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("E/Ix"),r=n("hhGP");n("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/method/audio.getPlaylistById.mdx"}});var o={_frontmatter:c},i=r.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(i,l({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"audiogetplaylistbyid"},"audio.getPlaylistById"),Object(a.b)("p",null,"Get information about playlist by id."),Object(a.b)("p",null,"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"owner_id"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Id of the owner of the playlist")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"playlist_id"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Playlist id")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"access_key"),Object(a.b)("td",l({parentName:"tr"},{align:null}),'May be needed, when owner_id starts with "-"')))),Object(a.b)("p",null,"These fields are returned by audio.searchAlbums method and other methods that return playlists."),Object(a.b)("p",null,"Example (Kate):"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-php"}),'\n$ownerId = -1;\n$albumId = 2;\n$accessKey = "123";\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    "https://api.vk.com/method/audio.getPlaylistById?access_token=".TOKEN.\n    "&owner_id=$ownerId&playlist_id=$albumId&access_key=$accessKey&count=1&v=5.95"\n);\n\n')),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-php"}),"<?php\n\ninclude __DIR__.'/../../autoloader.php';\n\nuse Vodka2\\VKAudioToken\\SupportedClients;\n\n//Token obtained by example_microg.php script\ndefine('TOKEN', $argv[1]);\ndefine('USER_AGENT', SupportedClients::Kate()->getUserAgent());\n$ch = curl_init();\n\ncurl_setopt($ch,CURLOPT_HTTPHEADER, array('User-Agent: '.USER_AGENT));\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n\n$ownerId = -1;\n$albumId = 2;\n$accessKey = \"123\";\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    \"https://api.vk.com/method/audio.getPlaylistById?access_token=\".TOKEN.\n    \"&owner_id=$ownerId&playlist_id=$albumId&access_key=$accessKey&count=1&v=5.95\"\n);\n\necho json_encode(json_decode(curl_exec($ch)), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE).\"\\n\\n\";\n")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/method/audio.getPlaylistById.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-method-audio-get-playlist-by-id-mdx-60f5037d79660959a1e8.js.map