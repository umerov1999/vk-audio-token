(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Mn66:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("E/Ix"),r=n("hhGP");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/method/audio.removeFromPlaylist.mdx"}});var i={_frontmatter:l},d=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(d,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"audioremovefromplaylist"},"audio.removeFromPlaylist"),Object(a.b)("p",null,"Remove audios from the specified playlist"),Object(a.b)("p",null,"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"owner_id"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"User or community id (for example, obtained by users.get)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"playlist_id"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Id of the playlist")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"audios"),Object(a.b)("td",o({parentName:"tr"},{align:null}),'List of one or multiple audio ids, separated with ","')))),Object(a.b)("p",null,"Example (Kate):"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'\n$ownerId = 1;\n$playlistId = 1;\n$audioIds = \'1_12345,1_56789\';\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    "https://api.vk.com/method/audio.removeFromPlaylist?access_token=".TOKEN.\n    "&owner_id=$ownerId&playlist_id=$playlistId&audio_ids=".urlencode($audioIds)."&v=5.95"\n);\n\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),"<?php\n\ninclude __DIR__.'/../../autoloader.php';\n\nuse Vodka2\\VKAudioToken\\SupportedClients;\n\n//Token obtained by example_microg.php script\ndefine('TOKEN', $argv[1]);\ndefine('USER_AGENT', SupportedClients::Kate()->getUserAgent());\n$ch = curl_init();\n\ncurl_setopt($ch,CURLOPT_HTTPHEADER, array('User-Agent: '.USER_AGENT));\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n\n$ownerId = 1;\n$playlistId = 1;\n$audioIds = '1_12345,1_56789';\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    \"https://api.vk.com/method/audio.removeFromPlaylist?access_token=\".TOKEN.\n    \"&owner_id=$ownerId&playlist_id=$playlistId&audio_ids=\".urlencode($audioIds).\"&v=5.95\"\n);\n\necho json_encode(json_decode(curl_exec($ch)), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE).\"\\n\\n\";\n")))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/method/audio.removeFromPlaylist.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-method-audio-remove-from-playlist-mdx-c0c33a24af18cbe176d2.js.map