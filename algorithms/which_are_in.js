function inArray(a1, a2) {
  var r = [];

  for (var i = 0; i < a1.length; i++) {
    var s1 = a1[i];

    for (var j = 0; j < a2.length; j++) {
      var s2 = a2[j];

      if (s2.indexOf(s1) != -1 && r.indexOf(s1) == -1) {
        r.push(s1);
      }
    }
  }

  return r.sort();
}
