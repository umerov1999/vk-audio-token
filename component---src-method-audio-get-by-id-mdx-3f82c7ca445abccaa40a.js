(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{MWtZ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("7ljp"),r=n("hhGP");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/method/audio.getById.mdx"}});var i={_frontmatter:c},l=r.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"audiogetbyid"},"audio.getById"),Object(a.b)("p",null,"Get audios by id"),Object(a.b)("p",null,"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"audios"),Object(a.b)("td",o({parentName:"tr"},{align:null}),'List of one or multiple audio ids, separated with ","')))),Object(a.b)("p",null,"Example (Kate):"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'\n$audioIds = "371745461_456289486,-41489995_202246189";\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    "https://api.vk.com/method/audio.getById?access_token=".TOKEN.\n    "&audios=".urlencode($audioIds).\n    "&v=5.95"\n);\n\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'<?php\n\ninclude __DIR__.\'/../../autoloader.php\';\n\nuse Vodka2\\VKAudioToken\\SupportedClients;\n\n//Token obtained by example_microg.php script\ndefine(\'TOKEN\', $argv[1]);\ndefine(\'USER_AGENT\', SupportedClients::Kate()->getUserAgent());\n$ch = curl_init();\n\ncurl_setopt($ch,CURLOPT_HTTPHEADER, array(\'User-Agent: \'.USER_AGENT));\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n\n$audioIds = "371745461_456289486,-41489995_202246189";\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    "https://api.vk.com/method/audio.getById?access_token=".TOKEN.\n    "&audios=".urlencode($audioIds).\n    "&v=5.95"\n);\n\necho json_encode(json_decode(curl_exec($ch)), JSON_PRETTY_PRINT)."\\n\\n";\n')))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/method/audio.getById.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-method-audio-get-by-id-mdx-3f82c7ca445abccaa40a.js.map