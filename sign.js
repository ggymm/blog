i = function (e, t) {
  return e << t | e >>> 32 - t
}

o = function (e, t) {
  var n, i, o, r, a;
  return o = 2147483648 & e, r = 2147483648 & t, n = 1073741824 & e, i = 1073741824 & t, a = (1073741823 & e) + (1073741823 & t), n & i ? 2147483648 ^ a ^ o ^ r : n | i ? 1073741824 & a ? 3221225472 ^ a ^ o ^ r : 1073741824 ^ a ^ o ^ r : a ^ o ^ r
}

r = function (e, t, n) {
  return e & t | ~e & n
}

a = function (e, t, n) {
  return e & n | t & ~n
}

c = function (e, t, n) {
  return e ^ t ^ n
}

s = function (e, t, n) {
  return t ^ (e | ~n)
}

u = function (e, t, n, a, c, s, u) {
  return e = o(e, o(o(r(t, n, a), c), u)), o(i(e, s), t)
}

l = function (e, t, n, r, c, s, u) {
  return e = o(e, o(o(a(t, n, r), c), u)), o(i(e, s), t)
}

d = function (e, t, n, r, a, s, u) {
  return e = o(e, o(o(c(t, n, r), a), u)), o(i(e, s), t)
}

p = function (e, t, n, r, a, c, u) {
  return e = o(e, o(o(s(t, n, r), a), u)), o(i(e, c), t)
}

f = function (e) {
  var t, n = e.length,
    i = n + 8,
    o = (i - i % 64) / 64,
    r = 16 * (o + 1),
    a = Array(r - 1),
    c = 0,
    s = 0;
  while (s < n) t = (s - s % 4) / 4, c = s % 4 * 8, a[t] = a[t] | e.charCodeAt(s) << c, s++;
  return t = (s - s % 4) / 4, c = s % 4 * 8, a[t] = a[t] | 128 << c, a[r - 2] = n << 3, a[r - 1] = n >>> 29, a
}

g = function (e) {
  var t, n, i = "",
    o = "";
  for (n = 0; n <= 3; n++) t = e >>> 8 * n & 255, o = "0" + t.toString(16), i += o.substr(o.length - 2, 2);
  return i
}

m = function (e) {
  e = e.replace(/\x0d\x0a/g, "\n");
  for (var t = "", n = 0; n < e.length; n++) {
    var i = e.charCodeAt(n);
    i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128))
  }
  return t
};


h = function (e) {
  var t, n, i, r, a, c, s, h, y, b = [],
    v = 7,
    w = 12,
    x = 17,
    _ = 22,
    S = 5,
    C = 9,
    k = 14,
    P = 20,
    I = 4,
    T = 11,
    E = 16,
    A = 23,
    O = 6,
    z = 10,
    L = 15,
    B = 21;
  for (e = m(e), b = f(e), c = 1732584193, s = 4023233417, h = 2562383102, y = 271733878, t = 0; t < b.length; t += 16) {
    n = c,
      i = s,
      r = h,
      a = y,
      c = u(c, s, h, y, b[t + 0], v, 3614090360),
      y = u(y, c, s, h, b[t + 1], w, 3905402710),
      h = u(h, y, c, s, b[t + 2], x, 606105819),
      s = u(s, h, y, c, b[t + 3], _, 3250441966),
      c = u(c, s, h, y, b[t + 4], v, 4118548399),
      y = u(y, c, s, h, b[t + 5], w, 1200080426),
      h = u(h, y, c, s, b[t + 6], x, 2821735955),
      s = u(s, h, y, c, b[t + 7], _, 4249261313),
      c = u(c, s, h, y, b[t + 8], v, 1770035416),
      y = u(y, c, s, h, b[t + 9], w, 2336552879),
      h = u(h, y, c, s, b[t + 10], x, 4294925233),
      s = u(s, h, y, c, b[t + 11], _, 2304563134),
      c = u(c, s, h, y, b[t + 12], v, 1804603682),
      y = u(y, c, s, h, b[t + 13], w, 4254626195),
      h = u(h, y, c, s, b[t + 14], x, 2792965006),
      s = u(s, h, y, c, b[t + 15], _, 1236535329),

      c = l(c, s, h, y, b[t + 1], S, 4129170786),
      y = l(y, c, s, h, b[t + 6], C, 3225465664),
      h = l(h, y, c, s, b[t + 11], k, 643717713),
      s = l(s, h, y, c, b[t + 0], P, 3921069994),
      c = l(c, s, h, y, b[t + 5], S, 3593408605),
      y = l(y, c, s, h, b[t + 10], C, 38016083),
      h = l(h, y, c, s, b[t + 15], k, 3634488961),
      s = l(s, h, y, c, b[t + 4], P, 3889429448),
      c = l(c, s, h, y, b[t + 9], S, 568446438),
      y = l(y, c, s, h, b[t + 14], C, 3275163606),
      h = l(h, y, c, s, b[t + 3], k, 4107603335),
      s = l(s, h, y, c, b[t + 8], P, 1163531501),
      c = l(c, s, h, y, b[t + 13], S, 2850285829),
      y = l(y, c, s, h, b[t + 2], C, 4243563512),
      h = l(h, y, c, s, b[t + 7], k, 1735328473),
      s = l(s, h, y, c, b[t + 12], P, 2368359562),

      c = d(c, s, h, y, b[t + 5], I, 4294588738),
      y = d(y, c, s, h, b[t + 8], T, 2272392833),
      h = d(h, y, c, s, b[t + 11], E, 1839030562),
      s = d(s, h, y, c, b[t + 14], A, 4259657740),
      c = d(c, s, h, y, b[t + 1], I, 2763975236),
      y = d(y, c, s, h, b[t + 4], T, 1272893353),
      h = d(h, y, c, s, b[t + 7], E, 4139469664),
      s = d(s, h, y, c, b[t + 10], A, 3200236656),
      c = d(c, s, h, y, b[t + 13], I, 681279174),
      y = d(y, c, s, h, b[t + 0], T, 3936430074),
      h = d(h, y, c, s, b[t + 3], E, 3572445317),
      s = d(s, h, y, c, b[t + 6], A, 76029189),
      c = d(c, s, h, y, b[t + 9], I, 3654602809),
      y = d(y, c, s, h, b[t + 12], T, 3873151461),
      h = d(h, y, c, s, b[t + 15], E, 530742520),
      s = d(s, h, y, c, b[t + 2], A, 3299628645),

      c = p(c, s, h, y, b[t + 0], O, 4096336452),
      y = p(y, c, s, h, b[t + 7], z, 1126891415),
      h = p(h, y, c, s, b[t + 14], L, 2878612391),
      s = p(s, h, y, c, b[t + 5], B, 4237533241),
      c = p(c, s, h, y, b[t + 12], O, 1700485571),
      y = p(y, c, s, h, b[t + 3], z, 2399980690),
      h = p(h, y, c, s, b[t + 10], L, 4293915773),
      s = p(s, h, y, c, b[t + 1], B, 2240044497),
      c = p(c, s, h, y, b[t + 8], O, 1873313359),
      y = p(y, c, s, h, b[t + 15], z, 4264355552),
      h = p(h, y, c, s, b[t + 6], L, 2734768916),
      s = p(s, h, y, c, b[t + 13], B, 1309151649),
      c = p(c, s, h, y, b[t + 4], O, 4149444226),
      y = p(y, c, s, h, b[t + 11], z, 3174756917),
      h = p(h, y, c, s, b[t + 2], L, 718787259),
      s = p(s, h, y, c, b[t + 9], B, 3951481745),

      c = o(c, n),
      s = o(s, i),
      h = o(h, r),
      y = o(y, a)
  }
  var D = g(c) + g(s) + g(h) + g(y);
  return D.toLowerCase()
}

_ = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = "",
    n = function (e) {
      if (null === e) return "";
      if (e instanceof Array) {
        var t = "";
        return e.forEach((function (e) {
          t.length > 0 && (t += ","), t += JSON.stringify(e)
        })), t
      }
      return e instanceof Object ? JSON.stringify(e) : e.toString()
    };
  return t = Object.keys(e).sort().reduce((function (t, i) {
    return void 0 === e[i] ? t : "".concat(t).concat(i).concat(n(e[i]))
  }), ""), t += "048a9c4943398714b356a696503d2d36", h(t)
}


console.log(_({ "spuId": "1268866", "productSourceName": "", "propertyValueId": "", "sourceName": null }))
