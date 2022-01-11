function animateResultCount(number, target, elem) {
  number = parseInt(number)
  if (number < target) {
    var interval = setInterval(function () {
      let element = document.querySelector(elem)
      if (element) {
        document.querySelector(elem).innerHTML = number
      }

      if (number >= target) {
        clearInterval(interval)
        return
      }
      number++
    }, 70)
  }
}
function animateResultCountFast(number, target, elem) {
  number = parseInt(number)
  if (number < target) {
    var interval = setInterval(function () {
      let element = document.querySelector(elem)
      if (element) {
        document.querySelector(elem).innerHTML = number
      }

      if (number >= target) {
        clearInterval(interval)
        return
      }
      number++
    }, 16)
  }
}
export const IndexScript = () => {
  setTimeout(function () {
    let number1 = document.querySelector('#number1')
    let number2 = document.querySelector('#number2')
    let number3 = document.querySelector('#number3')
    let number4 = document.querySelector('#number4')
    if (number1 && number2 && number3 && number4) {
      animateResultCountFast(
        document.querySelector('#number1').textContent,
        430,
        '#number1'
      )
      animateResultCount(
        document.querySelector('#number2').textContent,
        128,
        '#number2'
      )
      animateResultCount(
        document.querySelector('#number3').textContent,
        5,
        '#number3'
      )
      animateResultCount(
        document.querySelector('#number4').textContent,
        75,
        '#number4'
      )
    }
  }, 3000)
}
