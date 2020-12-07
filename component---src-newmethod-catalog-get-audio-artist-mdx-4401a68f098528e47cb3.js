(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"/C6Q":function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return o})),n.d(e,"default",(function(){return s}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("E/Ix"),r=n("hhGP");n("qKvR");function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/newmethod/catalog.getAudioArtist.mdx"}});var c={_frontmatter:o},l=r.a;function s(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(a.b)(l,i({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"cataloggetaudioartist"},"catalog.getAudioArtist"),Object(a.b)("p",null,"Get artist page"),Object(a.b)("p",null,"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",i({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",i({parentName:"tr"},{align:null}),"Value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"artist_id"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"Artist id")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",i({parentName:"tr"},{align:null}),"need_blocks (optional)"),Object(a.b)("td",i({parentName:"tr"},{align:null}),"0 — return only section names and ids, 1 — return blocks")))),Object(a.b)("p",null,"Artist ids can be either numbers or strings.\nNumeric ids are returned in the ",Object(a.b)("inlineCode",{parentName:"p"},"id")," field,\nfor example, by catalog.getAudioSearch method in the ",Object(a.b)("inlineCode",{parentName:"p"},"main_artists")," field.\nString id is the last part of an url similar to ",Object(a.b)("inlineCode",{parentName:"p"},"https://vk.com/artist/whitetown"),',\nid is "whitetown" in this example. '),Object(a.b)("p",null,"Example (VK Official):"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-php"}),'\n$artist_id = \'whitetown\';\n\ncurl_setopt(\n    $ch, CURLOPT_URL, "https://api.vk.com/method/catalog.getAudioArtist"\n);\ncurl_setopt($ch, CURLOPT_POSTFIELDS,\n    "v=5.116&https=1&need_blocks=1&artist_id=".urlencode($artist_id)."&lang=en&access_token=".TOKEN\n);\n\n')),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-php"}),"<?php\n\ninclude __DIR__.'/../../autoloader.php';\n\nuse Vodka2\\VKAudioToken\\SupportedClients;\n\n//Credentials obtained by example_vkofficial.php script\ndefine('TOKEN', $argv[1]);\ndefine('USER_AGENT', SupportedClients::VkOfficial()->getUserAgent());\n$ch = curl_init();\n\ncurl_setopt($ch,CURLOPT_HTTPHEADER, array('User-Agent: '.USER_AGENT));\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_POST, 1);\n\n$artist_id = 'whitetown';\n\ncurl_setopt(\n    $ch, CURLOPT_URL, \"https://api.vk.com/method/catalog.getAudioArtist\"\n);\ncurl_setopt($ch, CURLOPT_POSTFIELDS,\n    \"v=5.116&https=1&need_blocks=1&artist_id=\".urlencode($artist_id).\"&lang=en&access_token=\".TOKEN\n);\n\necho json_encode(json_decode(curl_exec($ch)), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE).\"\\n\\n\";\n")))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/newmethod/catalog.getAudioArtist.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-newmethod-catalog-get-audio-artist-mdx-4401a68f098528e47cb3.js.map