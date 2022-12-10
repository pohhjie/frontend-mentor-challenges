/**
 * @file: index.js
 * @author: hong.jie
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#:~:text=The%20Fetch%20API%20provides%20a,resources%20asynchronously%20across%20the%20network.
 */ 
//----------------------------------------------------------------------------


(async function () {

    // URL to fetch advice.
    const url = 'https://api.adviceslip.com/advice';

    // HTML elements
    const elementBtnFetch = document.getElementById('btn_fetch_advice'),
          elementBtnFetchIcon = elementBtnFetch.firstElementChild,
          elementTextAdviceID = document.getElementById('text_advice_id'),
          elementTextAdviceQuote = document.getElementById('text_advice_quote');

    // Flag to determine if the API has generated an AdviceSlip object.
    let isAdviceGenerated = false;


    // Event listener to be triggered when each animation iteration ends.
    elementBtnFetchIcon.addEventListener('animationiteration', (event) => {
        if (isAdviceGenerated) {
            // Remove the animation after it completes.
            elementBtnFetchIcon.classList.remove('animate-spin-dice');
        }
    })

    // Event listener to handle button clicking.
    elementBtnFetch.addEventListener('click', async (event) => {
        // Assume the user has already clicked this button.
        if (elementBtnFetchIcon.classList.contains('animate-spin-dice')) {
            return;
        }

        // Animate the svg icon inside the button. 
        isAdviceGenerated = false;
        elementBtnFetchIcon.classList.add('animate-spin-dice');

        // Call API to generate advice.
        await generateAdvice().catch(error => {
            console.error(error.message);
        }).finally(() => {
            isAdviceGenerated = true;
        });
    });

    // Fetch advice at the start
    await generateAdvice();


    //----------------------------------------------------------------------------
    /**
     * Fetch advice from API call
     * @returns random advice slip as a slip object.
     */
    //----------------------------------------------------------------------------
    async function getRandomAdvice() {
        const response = await fetch(url, {
            method: 'GET',
            // mode: 'cors',   
        });

        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        return data;
    }
    //----------------------------------------------------------------------------



    //----------------------------------------------------------------------------
    /**
     * Fetch advice from API call
     */
    //----------------------------------------------------------------------------
    async function generateAdvice() {
        const adviceData = await getRandomAdvice().catch((error) => {
            error.message;
        });

        elementTextAdviceID.innerText = `Advice #${adviceData.slip.id}`;
        elementTextAdviceQuote.innerText = adviceData.slip.advice;
    }
    //----------------------------------------------------------------------------


}());


