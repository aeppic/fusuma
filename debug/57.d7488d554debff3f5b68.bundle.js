(self.webpackChunkdebug=self.webpackChunkdebug||[]).push([[57],{7057:()=>{!function(n){var e=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))/.source;function t(n){return n=n.replace(/<inner>/g,(function(){return e})),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+n+")")}var a=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,r=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,(function(){return a})),i=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;n.languages.markdown=n.languages.extend("markup",{}),n.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"font-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:n.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+r+i+"(?:"+r+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+r+i+")(?:"+r+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(a),inside:n.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+r+")"+i+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+r+"$"),inside:{"table-header":{pattern:RegExp(a),alias:"important",inside:n.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/``.+?``|`[^`\r\n]+`/,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:t(/(~~?)(?:(?!~)<inner>)+?\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},url:{pattern:t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach((function(e){["url","bold","italic","strike"].forEach((function(t){e!==t&&(n.languages.markdown[e].inside.content.inside[t]=n.languages.markdown[t])}))})),n.hooks.add("after-tokenize",(function(n){"markdown"!==n.language&&"md"!==n.language||function n(e){if(e&&"string"!=typeof e)for(var t=0,a=e.length;t<a;t++){var r=e[t];if("code"===r.type){var i=r.content[1],o=r.content[3];if(i&&o&&"code-language"===i.type&&"code-block"===o.type&&"string"==typeof i.content){var l=i.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),s="language-"+(l=(/[a-z][\w-]*/i.exec(l)||[""])[0].toLowerCase());o.alias?"string"==typeof o.alias?o.alias=[o.alias,s]:o.alias.push(s):o.alias=[s]}}else n(r.content)}}(n.tokens)})),n.hooks.add("wrap",(function(e){if("code-block"===e.type){for(var t="",a=0,r=e.classes.length;a<r;a++){var i=e.classes[a],o=/language-(.+)/.exec(i);if(o){t=o[1];break}}var l=n.languages[t];if(l){var s=e.content.replace(/&lt;/g,"<").replace(/&amp;/g,"&");e.content=n.highlight(s,l,t)}else if(t&&"none"!==t&&n.plugins.autoloader){var d="md-"+(new Date).valueOf()+"-"+Math.floor(1e16*Math.random());e.attributes.id=d,n.plugins.autoloader.loadLanguages(t,(function(){var e=document.getElementById(d);e&&(e.innerHTML=n.highlight(e.textContent,n.languages[t],t))}))}}})),n.languages.md=n.languages.markdown}(Prism)}}]);