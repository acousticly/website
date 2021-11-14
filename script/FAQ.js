export const faqfunc = () => {
  const allFaqBox = document.querySelectorAll('.faq-box')
  allFaqBox.forEach((faqBox) => {
    faqBox.addEventListener('click', () => {
      if (faqBox.classList.contains('openFaq')) {
        faqBox.classList.remove('openFaq')
      } else {
        faqBox.classList.add('openFaq')
      }
    })
  })
}
