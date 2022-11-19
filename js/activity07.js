function checkNIF(nif) {
  nif = nif.toUpperCase()
  const first_char_value = "XYZ".indexOf(nif[0])
  const letters = "TRWAGMYFPDXBNJZSQVHLCKE"

  // If the first character is an unvalid character, return false
  if (first_char_value == -1 && isNaN(+nif[0]))
    return false
  // If its valid but not a number, replace it with the appropiate number
  else if (isNaN(+nif[0]))
    nif[0] = first_char_value

  // Check if the NIF has an adecuate format
  if (!/^[0-9]{8}[A-Z]$/.test(nif))
    return false

  console.log('Format check passed')
  // Remove the letter at the end and store it in a separate variable
  nif = nif.split('')
  const letter = nif.splice(-1, 1)[0]
  nif = nif.join('')

  // Check if the letter at the end is correct
  return letters[nif%23] === letter
}
