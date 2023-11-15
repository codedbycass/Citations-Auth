var going = document.getElementsByClassName("yes");
var description = document.getElementsByClassName("description"); 
var trash = document.getElementsByClassName("delete");

Array.from(going).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const book = this.parentNode.parentNode.childNodes[3].innerText
        const city = this.parentNode.parentNode.childNodes[5].innerText
        const publisher = this.parentNode.parentNode.childNodes[7].innerText
        const year = this.parentNode.parentNode.childNodes[9].innerText
        const notes = this.parentNode.parentNode.childNodes[11].innerText
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'book': book,
            'city': city,
            'publisher': publisher,
            'year': year,
            'notes': notes
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


// Add description
// Array.from(description).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const book = this.parentNode.parentNode.childNodes[3].innerText
//     const year = this.parentNode.parentNode.childNodes[9].innerText
//     const description = this.parentNode.parentNode.childNodes[11].innerText
//     fetch('messages/tag', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'description' : description,
//         'name': name,
//         'book': book,
//         'year': year
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const book = this.parentNode.parentNode.childNodes[3].innerText
        const city = this.parentNode.parentNode.childNodes[5].innerText
        const publisher = this.parentNode.parentNode.childNodes[7].innerText
        const year = this.parentNode.parentNode.childNodes[9].innerText
        const notes = this.parentNode.parentNode.childNodes[11].innerText
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
            'notes': notes,
            'attending' : true
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
