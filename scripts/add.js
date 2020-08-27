var articleDiv = document.querySelector("catalog__item");
// клонируем элемент articleDiv
var newArticleDiv = articleDiv.cloneNode(true);
// добавляем в конец элемента body
document.body.appendChild(newArticleDiv);