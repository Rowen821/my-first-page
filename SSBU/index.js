let category = ["all", "dubstep", "techno"];
let content = [
    ["dubstep", "Fire", { url: "https://www.youtube.com/embed/Bz3DKGHSeoI?si=55-ZFvUVYmjntsA5", title: "YouTube video player" }],
    ["dubstep", "Fire2", { url: "https://www.youtube.com/embed/Bz3DKGHSeoI?si=55-ZFvUVYmjntsA5", title: "YouTube video player" }],
    ["techno", "SeizeTheFuture", { url: "https://www.youtube.com/embed/yHGG8gOtfA4?si=1GehORrb5dcN2MkE", title: "YouTube video player" }],
];

window.onload = function() {
  let menu = document.getElementById("menu");
  for (let i = 0; i < category.length; i++) {
    let li = document.createElement("li");
    li.id = category[i];
    li.textContent = category[i];
    if (category[i] === "all") {
      li.classList.add("active"); // 初期表示で"all"にactiveクラスを追加
    }
    menu.appendChild(li);
  }

  // 初期表示で"all"のコンテンツを表示
  displayContent("all");

  // メニューのクリックイベントリスナー
  menu.addEventListener("click", function(event) {
    const clickedCategory = event.target.id;
    displayContent(clickedCategory);
  });
};

function displayContent(clickedCategory) {
  const article = document.getElementById('article');
  article.innerHTML = '';

  let selectedContent;
  if (clickedCategory === 'all') {
    selectedContent = content;
  } else {
    selectedContent = content.filter(item => item[0] === clickedCategory);
  }

  selectedContent.forEach(item => {
    const newSection = document.createElement('section');
        const newP = document.createElement('p');
        newP.textContent = item[1]; // 曲名

        const newIframe = document.createElement('iframe');
        newIframe.width = "560";
        newIframe.height = "315";
        newIframe.src = item[2].url; // YouTubeのURL
        newIframe.title = item[2].title;
        newIframe.frameborder = "0";
        newIframe.allowFullscreen = true;

        newSection.appendChild(newP);
        newSection.appendChild(newIframe);
        article.appendChild(newSection);
  });
}