var going = document.getElementsByClassName("yes");
var description = document.getElementsByClassName("description"); 
var trash = document.getElementsByClassName("delete");

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const book = this.parentNode.parentNode.childNodes[3].innerText
        const city = this.parentNode.parentNode.childNodes[5].innerText
        const publisher = this.parentNode.parentNode.childNodes[7].innerText
        const year = this.parentNode.parentNode.childNodes[9].innerText
        const currentDate = this.parentNode.parentNode.childNodes[11].innerText
        const blurb = this.parentNode.parentNode.childNodes[13].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'book': book,
            'city': city,
            'publisher': publisher,
            'year': year,
            'currentDate': currentDate,
            'blurb': blurb
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
