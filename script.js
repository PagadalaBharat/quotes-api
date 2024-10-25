function generate() {
  var quotes = {
    "— William Shakespea": '"The earth has music for those who listen."',
    "— Robert Fro ":
      '"In three words I can sum up everything ve learned about life: it goes on."',
    "— David Visco":
      '"To love and be loved is to feel the sun from both sides."',
    "— Dalai La":
      '"Happiness is not something ready-made. It comes from your own actions." ',
    "— Helen Kell": "Life is either a daring adventure or nothing at all.",
    "— Steve Jo": '"The only way to do great work is to love what you do."',
    "— Walt Whitm":
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "— Mahatma Gand": '"You must be the change you wish to see in the world."',
    "— Ralph Waldo Emers":
      '"What lies behind us and what lies before us are tiny matters compared to what lies within us."',
    "— Abraham Lincoln":
      '"The best way to predict your future is to create it."',
  };

  var authors = Object.keys(quotes);

  // console.log(authors);
  author = authors[Math.floor(Math.random() * authors.length)];

  quote = quotes[author];

  document.getElementById("quote").innerHTML=quote
  document.getElementById("author").innerHTML=author

}
