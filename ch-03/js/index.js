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

    const elementBtnFetch = document.getElementById('btn_fetch_advice'),
          elementTextAdviceID = document.getElementById('text_advice_id'),
          elementTextAdviceQuote = document.getElementById('text_advice_quote');

    elementBtnFetch.addEventListener('click', async (event) => {
        await generateAdvice().catch(error => {
            console.error(error.message);
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
        const adviceData = await getRandomAdvice().catch(error => {
            error.message;
        });

        elementTextAdviceID.innerText = `Advice #${adviceData.slip.id}`;
        elementTextAdviceQuote.innerText = adviceData.slip.advice;
    }
    //----------------------------------------------------------------------------


}());


