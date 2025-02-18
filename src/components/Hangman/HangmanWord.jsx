const HangmanWord = ({ guessLetters, wordToGuess, result = false }) => {
  return (
    <div className='flex gap-3 text-3xl lg:text-6xl font-bold uppercase'>
      {/* take the word, create individual characters, write with map */}
      {wordToGuess.split('').map((letter, index) => (
        <span className='border-b-8 border-black rounded-md w-[50px] flex justify-center' key={index}>
          <span style={{
            visibility: guessLetters.includes(letter) || result
              ? 'visible'
              : 'hidden',
            color: !guessLetters.includes(letter) && result ? '#BE123C' : '#1C1917'
          }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord