//http://www.cnblogs.com/cgli/archive/2011/05/17/2048869.html
/*8进制加密*/
function EnEight(txt) {
    var monyer = '',
        i = 0,
        s = txt.length;
    for(; i < s; i++)
        monyer += "|" + txt.charCodeAt(i).toString(8);
    return monyer;
}
/*8进制解密*/
function DeEight(txt) {
    var monyer = '',
        s = txt.split("|");
    for(var i = 1, len = s.length; i < len; i++)
        monyer += String.fromCharCode(parseInt(s[i], 8));
    return monyer;
}
/***************************************************************************/
/*10进制加密*/
function Encrypt(txt) {
    var monyer = '';
    var i, s;
    for(i = 0; i < txt.length; i++) {
        s = txt.charCodeAt(i).toString(16);
        if(Decimal1.checked) monyer += "&#" + txt.charCodeAt(i) + ";";
        else if(Decimal2.checked) monyer += "&#" + new Array(7 - String(s).length).join("0") + txt.charCodeAt(i);
        else monyer += txt.charCodeAt(i) + ",";
    }
    return monyer;
}
/*10进制解密*/
function Decrypt() {
    var monyer = '';
    var i;
    if(Decimal1.checked) {
        var s = txt.value.split(";");
        for(i = 0; i < s.length; i++) {
            s[i] = s[i].replace('&#', '');
            monyer += String.fromCharCode(s[i]);
        }
    } else if(Decimal2.checked) {
        var s = txt.value.split("&");
        for(i = 1; i < s.length; i++) {
            s[i] = s[i].replace('#', '');
            monyer += String.fromCharCode(s[i]);
        }
    } else {
        var s = txt.value.split(",");
        for(i = 0; i < s.length; i++)
            monyer += String.fromCharCode(s[i]);
    }
    return monyer;
}
/***************************************************************************/
/*16进制加密*/
function JavaEn() {
    var monyer = new Array();
    var i, s;
    for(i = 0; i < txt.value.length; i++) {
        s = txt.value.charCodeAt(i).toString(16);
        if(hex1.checked) monyer += "\\u" + new Array(5 - String(s).length).join("0") + s;
        else if(hex2.checked) monyer += "&#x" + new Array(5 - String(s).length).join("0") + s + ";";
        else if(hex3.checked) monyer += "\\x" + new Array(5 - String(s).length).join("0") + s;
        else monyer += "\\" + new Array(5 - String(s).length).join("0") + s;
    }
    txt.value = monyer;
}
var p = document.documentElement.outerHTML.length;
/*16进制解密*/
function JavaDe() {
    if(hex1.checked) {
        var monyer = new Array();
        var i;
        var s = txt.value.split("\\");
        for(i = 1; i < s.length; i++) {
            s[i] = s[i].replace('u', '');
            monyer += String.fromCharCode(parseInt(s[i], 16));
        }
    } else if(hex2.checked) {
        var monyer = new Array();
        var i;
        var s = txt.value.split(";");
        for(i = 0; i < s.length; i++) {
            s[i] = s[i].replace('&#x', '');
            monyer += String.fromCharCode(parseInt(s[i], 16));
        }
    } else if(hex3.checked) {
        var monyer = new Array();
        var i;
        var s = txt.value.split("\\");
        for(i = 1; i < s.length; i++) {
            s[i] = s[i].replace('x', '');
            monyer += String.fromCharCode(parseInt(s[i], 16));
        }
    } else {
        var monyer = new Array();
        var i;
        var s = txt.value.split("\\");
        for(i = 1; i < s.length; i++)
            monyer += String.fromCharCode(parseInt(s[i], 16));
    }
    txt.value = monyer;
}
/*任意进制加密*/
function EnChTo(txt, h) {
    var monyer = '',
        i = 0,
        s = txt.length;
    for(; i < s; i++)
        monyer += "　" + txt.charCodeAt(i).toString(h);
    return monyer;
}
/*任意进制解密*/
function DeChTo(txt, h) {
    var monyer = '',
        s = txt.split("　");
    for(var i = 1, len = s.length; i < len; i++)
        monyer += String.fromCharCode(parseInt(s[i], h));
    return monyer;
}

/***************************************************************************/
//加密类似URL的字符
function URLEncode(plaintext) {
    var SAFECHARS = "0123456789" + // Numeric
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + // Alphabetic
        "abcdefghijklmnopqrstuvwxyz" +
        "-_.!~*'()"; // RFC2396 Mark characters
    var HEX = "0123456789ABCDEF";
    var encoded = "";
    for(var i = 0; i < plaintext.length; i++) {
        var ch = plaintext.charAt(i);
        if(ch == " ") {
            encoded += "+"; // x-www-urlencoded, rather than %20
        } else if(SAFECHARS.indexOf(ch) != -1) {
            encoded += ch;
        } else {
            var charCode = ch.charCodeAt(0);
            if(charCode > 255) {
                encoded += "+";
            } else {
                encoded += "%";
                encoded += HEX.charAt((charCode >> 4) & 0xF);
                encoded += HEX.charAt(charCode & 0xF);
            }
        }
    } // for
    return encoded;
};
/***************************************************************************/
//html Encode
function HtmlEncode(i) {
    if(i == 1)
        txt.value = txt.value.replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    if(i == 2)
        txt.value = txt.value.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
}

var hex_chr = "0123456789abcdef";

function rhex(num) {
    str = "";
    for(j = 0; j <= 3; j++)
        str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) + hex_chr.charAt((num >> (j * 8)) & 0x0F);
    return str
}

/***************************************************************************/
//base64
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";

    while(i < len) {
        c1 = str.charCodeAt(i++) & 0xff;

        if(i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break
        }

        c2 = str.charCodeAt(i++);

        if(i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break
        }

        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F)
    }

    return out
}

function base64decode(str) {
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";

    while(i < len) {
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);

        if(c1 == -1)
            break;

        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);

        if(c2 == -1)
            break;

        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

        do {
            c3 = str.charCodeAt(i++) & 0xff;

            if(c3 == 61)
                return out;

            c3 = base64DecodeChars[c3]
        } while (i < len && c3 == -1);

        if(c3 == -1)
            break;

        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

        do {
            c4 = str.charCodeAt(i++) & 0xff;

            if(c4 == 61)
                return out;

            c4 = base64DecodeChars[c4]
        } while (i < len && c4 == -1);

        if(c4 == -1)
            break;

        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }

    return out
}

/***************************************************************************/
//utf8 <->16
function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;

    for(i = 0; i < len; i++) {
        c = str.charCodeAt(i);

        if((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i)
        } else if(c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
        }
    }

    return out
}

function utf8to16(str) {
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = str.length;
    i = 0;

    while(i < len) {
        c = str.charCodeAt(i++);

        switch(c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                out += str.charAt(i - 1);

                break;

            case 12:
            case 13:
                char2 = str.charCodeAt(i++);

                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;

            case 14:
                char2 = str.charCodeAt(i++);

                char3 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break
        }
    }

    return out
}

/***************************************************************************/
//MD5
function str2blks_MD5(str) {
    nblk = ((str.length + 8) >> 6) + 1;
    blks = new Array(nblk * 16);

    for(i = 0; i < nblk * 16; i++)
        blks[i] = 0;

    for(i = 0; i < str.length; i++)
        blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8);

    blks[i >> 2] |= 0x80 << ((i % 4) * 8);
    blks[nblk * 16 - 2] = str.length * 8;
    return blks
}

function add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return(msw << 16) | (lsw & 0xFFFF)
}

function rol(num, cnt) {
    return(num << cnt) | (num >>> (32 - cnt))
}

function cmn(q, a, b, x, s, t) {
    return add(rol(add(add(a, q), add(x, t)), s), b)
}

function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t)
}

function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t)
}

function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t)
}

function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | (~d)), a, b, x, s, t)
}

function calcMD5(str) {
    x = str2blks_MD5(str);
    a = 1732584193;
    b = -271733879;
    c = -1732584194;
    d = 271733878;

    for(i = 0; i < x.length; i += 16) {
        olda = a;
        oldb = b;
        oldc = c;
        oldd = d;
        a = ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = ff(c, d, a, b, x[i + 10], 17, -42063);
        b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = hh(a, b, c, d, x[i + 5], 4, -378558);
        d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = hh(d, a, b, c, x[i + 12], 11, -421815835);

        c = hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = add(a, olda);
        b = add(b, oldb);
        c = add(c, oldc);
        d = add(d, oldd)
    }

    return rhex(a) + rhex(b) + rhex(c) + rhex(d)
}