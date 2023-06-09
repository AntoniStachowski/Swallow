export const escapeChar = [
    //{regexLiteral: / /g, replacement: "%20"},
    {regexLiteral: /\\/g, replacement: "%5c"},
    {regexLiteral: /\|/g, replacement: "%7c"},
    {regexLiteral: /%/g, replacement: "%25"},
    {regexLiteral: /&/g, replacement: "%26"},
    {regexLiteral: /\//g, replacement: "%2f"},
    {regexLiteral: /\?/g, replacement: "%3f"},
    {regexLiteral: /#/g, replacement: "%23"},
    {regexLiteral: /;/g, replacement: "%3b"},
    {regexLiteral: /:/g, replacement: "%3a"},
    {regexLiteral: /@/g, replacement: "%40"},
    {regexLiteral: /=/g, replacement: "%3d"},
    {regexLiteral: /\+/g, replacement: "%2b"},
    {regexLiteral: /\$/g, replacement: "%24"},
    {regexLiteral: /</g, replacement: "%3c"},
    {regexLiteral: />/g, replacement: "%3e"},
    {regexLiteral: /`/g, replacement: "%60"},
    {regexLiteral: /\[/g, replacement: "%5b"},
    {regexLiteral: /\]/g, replacement: "%5d"},
    {regexLiteral: /\{/g, replacement: "%7b"},
    {regexLiteral: /\}/g, replacement: "%7d"},
    {regexLiteral: /\^/g, replacement: "%5e"},
    {regexLiteral: /~/g, replacement: "%7e"},
]
    