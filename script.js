const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  // targets the characters of labels individually & sets that to the innerHTML
  label.innerHTML = label.innerText
    // splits the innerText (each letter) into an array
    .split('')
    // creates a new array & adds the wave transition delay to each letter via the index
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
    // turns the array back into a string
    .join('')
})