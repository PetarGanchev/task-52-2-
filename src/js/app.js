window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  document.body.addEventListener("click", () => {
    const length = 5;
    let text = 'sampleTextPepe';


    for(let i = 0; i < length; i++) {
      let element = document.createElement('article');

      element.setAttribute('id', 'article' + i);
      document.body.appendChild(element);

      document.getElementById('article' + i).innerHTML = text;
      document.getElementById('article' + i).classList.add('message');
    }

  });
});