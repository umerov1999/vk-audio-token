(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{AcF2:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("E/Ix"),r=n("hhGP");n("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/method/audio.addToPlaylist.mdx"}});var d={_frontmatter:o},i=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(i,l({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"audioaddtoplaylist"},"audio.addToPlaylist"),Object(a.b)("p",null,"Add audios to the specified playlist"),Object(a.b)("p",null,"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"owner_id"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"User or community id (for example, obtained by users.get)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"playlist_id"),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Id of the playlist")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"audios"),Object(a.b)("td",l({parentName:"tr"},{align:null}),'List of one or multiple audio ids, separated with ","')))),Object(a.b)("p",null,"Example (Kate):"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-php"}),'\n$ownerId = 1;\n$playlistId = 1;\n$audioIds = \'371745461_456289486,-41489995_202246189\';\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    "https://api.vk.com/method/audio.addToPlaylist?access_token=".TOKEN.\n    "&owner_id=$ownerId&playlist_id=$playlistId&audio_ids=".urlencode($audioIds)."&v=5.95"\n);\n\n')),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-php"}),"<?php\n\ninclude __DIR__.'/../../autoloader.php';\n\nuse Vodka2\\VKAudioToken\\SupportedClients;\n\n//Token obtained by example_microg.php script\ndefine('TOKEN', $argv[1]);\ndefine('USER_AGENT', SupportedClients::Kate()->getUserAgent());\n$ch = curl_init();\n\ncurl_setopt($ch,CURLOPT_HTTPHEADER, array('User-Agent: '.USER_AGENT));\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n\n$ownerId = 1;\n$playlistId = 1;\n$audioIds = '371745461_456289486,-41489995_202246189';\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    \"https://api.vk.com/method/audio.addToPlaylist?access_token=\".TOKEN.\n    \"&owner_id=$ownerId&playlist_id=$playlistId&audio_ids=\".urlencode($audioIds).\"&v=5.95\"\n);\n\necho json_encode(json_decode(curl_exec($ch)), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE).\"\\n\\n\";\n")))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/method/audio.addToPlaylist.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-method-audio-add-to-playlist-mdx-769580f0786a82f4abb5.js.map