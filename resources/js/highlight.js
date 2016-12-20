/**
 * extends javascript mode
 */
var hljs = window.hljs = require('highlight.js')

hljs.registerLanguage('mongocustom', function(hljs) {
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*'
  var KEYWORDS = {
    keyword: '',
    literal: 'true false null undefined NaN Infinity',
    built_in: 'ObjectID UTCDateTime ISODate'
  }
  var NUMBER = {
    className: 'number',
    variants: [{
      begin: '\\b(0[bB][01]+)'
    }, {
      begin: '\\b(0[oO][0-7]+)'
    }, {
      begin: hljs.C_NUMBER_RE
    }],
    relevance: 0
  }
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{',
    end: '\\}',
    keywords: KEYWORDS,
    contains: [] // defined later
  }
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`',
    end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  }
  SUBST.contains = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ]
  var PARAMS_CONTAINS = SUBST.contains.concat([
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE
  ])

  return {
    aliases: ['js', 'jsx'],
    keywords: KEYWORDS,
    contains: [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      TEMPLATE_STRING,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBER, { // object attr container
        begin: /[{,]\s*/,
        relevance: 0,
        contains: [{
          begin: IDENT_RE + '\\s*:',
          returnBegin: true,
          relevance: 0,
          contains: [{
            className: 'attr',
            begin: IDENT_RE,
            relevance: 0
          }]
        }]
      }, {
        className: 'function',
        beginKeywords: 'function',
        end: /\{/,
        excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            begin: IDENT_RE
          }), {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: PARAMS_CONTAINS
          }
        ],
        illegal: /\[|%/
      },
      hljs.METHOD_GUARD
    ],
    illegal: /#(?!!)/
  }
})
