var check = document.getElementsByClassName("fa-check");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var ban = document.getElementsByClassName("fa-ban");

Array.from(check).forEach(function(element) {
      element.addEventListener('click', function(){
        // const name = this.parentNode.parentNode.childNodes[1].innerText
        const customer = this.parentNode.parentNode.childNodes[3].innerText
        const coffee = this.parentNode.parentNode.childNodes[5].innerText
        const size = this.parentNode.parentNode.childNodes[7].innerText
        const other = this.parentNode.parentNode.childNodes[9].innerText
        const check = parseFloat(this.parentNode.parentNode.childNodes[9].innerText)
        fetch('orders', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            // 'name': name,
            'customer': customer,
            'coffee': coffee,
            'size': size,
            'other': other,
            'check': check,
            complete: true
          })
        })
        .then(response => {
          console.log(response)
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

// Array.from(thumbDown).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const customer = this.parentNode.parentNode.childNodes[3].innerText
//         const coffee = this.parentNode.parentNode.childNodes[5].innerText
//         const size = this.parentNode.parentNode.childNodes[7].innerText
//         const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[11].innerText)
//         fetch('copmletedDown', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'customer': customer,
//             'coffee': coffee,
//             'size': size,
//             'thumbDown':thumbDown
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });

Array.from(ban).forEach(function(element) {
      element.addEventListener('click', function(){
        const customer = this.parentNode.parentNode.childNodes[3].innerText
        const coffee = this.parentNode.parentNode.childNodes[5].innerText
        const size = this.parentNode.parentNode.childNodes[7].innerText
        const other = this.parentNode.parentNode.childNodes[9].innerText
        fetch('orders', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'customer': customer,
            'coffee': coffee,
            'size': size,
            'other': other

          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
