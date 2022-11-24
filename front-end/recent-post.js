var title_array =["<a href='confident.html'>Tự tin</a>"];
title_array.push("<a href='conmeo.html'>Ngài Tom</a>");
title_array.push("<a href='CVAp1.html'>Ở Chu (Phần 1)</a>");
title_array.push("<a href='cvap2.html'>Ở Chu (Phần 2)</a>");
title_array.push("<a href='daythem.html'>Công việc đầu tiên</a>");
title_array.push("<a href='studyamsp1.html'>Ở Ams P1</a>");
title_array.push("<a href='studyamsp2.html'>Ở Ams P2</a>");




function shuffle(title_array) {
  let currentIndex = title_array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [title_array[currentIndex], title_array[randomIndex]] = [
      title_array[randomIndex], title_array[currentIndex]];
  }

  return title_array;
}

shuffle(title_array);
for (var i = 0; i < title_array.length; i++) {
  var ans =Math.floor(Math.random() * (title_array.length-1));
  document.getElementById(i).innerHTML =title_array[i];
}





