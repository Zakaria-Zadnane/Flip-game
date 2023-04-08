document.addEventListener('DOMContentLoaded', () =>
{
    // Card option 
    const cardArray = 
    [
        {
            name : 'fries',
            img : 'src/images/fries.png'
        },
        {
            name : 'cheeseburger',
            img : 'src/images/cheeseburger.png'
        },
        {
            name : 'ice-cream',
            img : 'src/images/ice-cream.png'
        },
        {
            name : 'pizza',
            img : 'src/images/pizza.png'
        },        
        {
            name : 'milkshake',
            img : 'src/images/milkshake.png'
        },
        {
            name : 'hotdog',
            img : 'src/images/hotdog.png'
        },
        {
            name : 'fries',
            img : 'src/images/fries.png'
        },
        {
            name : 'cheeseburger',
            img : 'src/images/cheeseburger.png'
        },
        {
            name : 'ice-cream',
            img : 'src/images/ice-cream.png'
        },
        {
            name : 'pizza',
            img : 'src/images/pizza.png'
        },        
        {
            name : 'milkshake',
            img : 'src/images/milkshake.png'
        },
        {
            name : 'hotdog',
            img : 'src/images/hotdog.png'
        }
    ]
    console.log(cardArray)

    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray)

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardChosen = []
    let cardChosenIds = []
    let cardsWon = []
    function createboard() 
    {
        for (let i = 0; i < cardArray.length; i++) 
        {
            const card =document.createElement('img') 
            card.setAttribute('src','src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }   
    }
    

    function flipCard() 
    {
       let cardId = this.getAttribute('data-id') 
       console.log(cardArray[cardId].name)
       cardChosen.push(cardArray[cardId].name)
       cardChosenIds.push(cardId)
       this.setAttribute('src', cardArray[cardId].img)
       if (cardChosen.length === 2)
        {
            setTimeout(checkForMatch , 500)
        }
        console.log(cardChosenIds)
    }

    function checkForMatch() 
    {
        const cards = document.querySelectorAll('img')
        const optionOnId = cardChosenIds[0]
        const optionTwoId = cardChosenIds[1]

        if ( optionOnId == optionTwoId)
        {
            alert('You have Clicked the same image !')
            cards[optionOnId].setAttribute('src' , 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src' , 'src/images/blank.png')
        }else if (cardChosen[0] === cardChosen[1]) {
            alert('You have found a Match')
            cards[optionOnId].setAttribute('src' , 'src/images/white.png')
            cards[optionTwoId].setAttribute('src' , 'src/images/white.png')
            cards[optionOnId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardChosen)

        }else{
            cards[optionOnId].setAttribute('src' , 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src' , 'src/images/blank.png')
            alert('Sorry, try again !')
        }
        cardChosen = []
        cardChosenIds = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length /2 ) 
        {
            resultDisplay.textContent = 'Congratulation!! You have won'
        }
    }
    createboard()
})