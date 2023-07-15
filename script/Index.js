function animateResultCount(number, target, elem, fast) {
  number = parseInt(number)
  if (number < target) {
    var interval = setInterval(
      function () {
        let element = document.querySelector(elem)
        if (element) {
          document.querySelector(elem).innerHTML = number
        }

        if (number >= target) {
          clearInterval(interval)
          return
        }
        number++
      },
      fast ? 7 : 70
    )
  }
}

export const IndexScript = () => {
  setTimeout(function () {
    let number1 = document.querySelector('#number1')
    let number2 = document.querySelector('#number2')
    let number3 = document.querySelector('#number3')
    let number4 = document.querySelector('#number4')
    if (number1 && number2 && number3 && number4) {
      animateResultCount(
        document.querySelector('#number1').textContent,
        786,
        '#number1',
        true
      )
      animateResultCount(
        document.querySelector('#number2').textContent,
        1311,
        '#number2',
        true
      )
      animateResultCount(
        document.querySelector('#number3').textContent,
        5,
        '#number3'
      )
      animateResultCount(
        document.querySelector('#number4').textContent,
        70,
        '#number4'
      )
    }
  }, 3000)
}
