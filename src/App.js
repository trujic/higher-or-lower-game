import React, {useState} from 'react';
import imageOne from './images/1.png'
import imageTwo from './images/2.png'
import imageThree from './images/3.png'
import imageFour from './images/4.png'
import imageFive from './images/5.png'
import imageSix from './images/6.png'
import imageSeven from './images/7.png'
import imageEight from './images/8.png'
import imageNine from './images/9.png'
import imageTen from './images/10.png'
import imageTwelve from './images/12.png'
import imageThirteen from './images/13.png'
import imageFourteen from './images/14.png'
import GameButtons from './components/GameButtons'
import GameTitle from './components/GameTitle'
import FirstCard from './components/FirstCard'
import NextCard from './components/NextCard'
import PreviousCard from './components/PreviousCard'
import Coins from './components/Coins'
import Bet from './components/Bet'
import Answer from './components/Answer'
import NewGame from './components/NewGame'

function App() {
  const [cards, setCards] = useState([{
    image: imageOne,
    value: 1
  },
  {
    image: imageTwo,
    value: 2
  },
  {
    image:imageThree,
    value: 3
  },
  {
    image: imageFour,
    value: 4
  },
  {
    image:imageFive,
    value: 5
  },
  {
    image:imageSix,
    value: 6
  },
  {
    image:imageSeven,
    value: 7
  },
  {
    image:imageEight,
    value: 8
  },
  {
    image:imageNine,
    value: 9
  },
  {
    image:imageTen,
    value: 10
  },
  {
    image:imageTwelve,
    value: 12
  },
  {
    image:imageThirteen,
    value: 13
  },
  {
    image: imageFourteen,
    value: 14
  }
])

  const [start, setStart] = useState(false)
  const [currentCard, setCurrentCard] = useState([])
  const [previousCard, setPreviousCard] = useState([])
  const [nextCard, setNextCard] = useState({})
  const [coins, setCoins] = useState(100)
  const [bet, setBet] = useState(10)
  const [answer, setAnswer] = useState()
  const [card, setCard] = useState([...cards])

  let randomCard = card[Math.floor(Math.random() * card.length)]

  const startGame = () => {
    setStart(true)
    setCurrentCard(randomCard)
    setCard(card.filter(card => randomCard.value !== card.value))
  }

  const gameUpdate = () => {
    let newArray = [...previousCard]
    newArray.push(currentCard)
    setPreviousCard(newArray)
    setAnswer(true)
    setCoins(coins + Number(bet))
  }

  const resetCards = () => {
    setCard(cards)
    let newGameCard = card[Math.floor(Math.random() * card.length)]
    setCard(card.filter(card => newGameCard.value !== card.value))
    setCurrentCard(newGameCard)
    setPreviousCard([])
  }

  const newGame = () => {
    resetCards();
    setCard(cards)
    setCoins(100)
  }

  const restartGame = () => {
    let newArray = [...previousCard]
    newArray.push(currentCard)
    setPreviousCard(newArray)
    setAnswer(false)
    setTimeout(() => {
      resetCards();
      setCard(cards)
      setCoins(coins - Number(bet))
      setAnswer(null)
    }, 2000)
  }

  const checkHigher = () => {
    if (bet > coins) alert("You dont have enough coins")
    else if(bet < 10 || bet === '') {
      alert("Bet must be atleast 10 coins!")
    } else  {
      let next = card[Math.floor(Math.random() * card.length)]
      setCurrentCard(next)
      setCard(card.filter(card => next.value !== card.value))
      if (next.value > currentCard.value) {
        console.log(next.value)
        console.log(currentCard.value)
        gameUpdate();
      } else {
        restartGame();
      }
    }
  }

  const checkLower = () => {
    if (bet > coins) alert("You dont have enough coins")
    else if (bet < 10 || bet === '') alert("Bet must be atleast 10 coins!")
    else {
      let next = card[Math.floor(Math.random() * card.length)]
      setCurrentCard(next)
      setCard(card.filter(card => next.value !== card.value))
      if (next.value < currentCard.value) {
        gameUpdate();
      } else {
        restartGame();
      }
    }
  }

  const handleBet = (e) => {
   setBet(e.target.value);
 }

  const gameScreens = () => {
    if (start === false) {
      return(
        <GameTitle startGame={startGame}/>
      )
    }  else if (card.length > 1) {
      return(
        <div className="game-screen">
            {previousCard ? <PreviousCard previousCard={previousCard}/> : <div className="empty-div"> </div>}
          <div className="playing-cards">
            <FirstCard currentCard={currentCard} />
            <NewGame newGame={newGame}/>
            <NextCard nextCard={nextCard} />
          </div>
            <GameButtons checkHigher={checkHigher} checkLower={checkLower}/>
            <Coins coins={coins}/>
            <Bet bet={bet} handleBet={handleBet}/>
            <Answer answer={answer}/>
        </div>
      )
    } else {
      return (
        <div>
          <h1 className="win-screen">Congratulations! All your guesses were right!</h1>
          <NewGame newGame={newGame} resetCards={resetCards}/>
        </div>
      )
    }
  }
  return(
    gameScreens()
  )
}

export default App;
