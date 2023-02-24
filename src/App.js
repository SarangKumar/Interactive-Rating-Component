import React, { useState } from 'react';

function App() {

  let nums = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);

  function rate(num, nums) {
    setRating(num)
    const r = document.querySelectorAll('.rating_num')
    r.forEach((t) => t.classList.remove('active'))
    r[num - 1].classList.add('active')
  }

  function change() {
    document.querySelector('.App').classList.add('none')
    document.querySelector('.AppS_main').classList.add('block')
  }


  return (
    <>
      <main>
        <div className="App">

          <img className="star_svg" src="icon-star.svg" alt="star" />
          <h1>How did we do?</h1>

          <p>
            Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!
          </p>

          <div className="rating">
            {nums.map((num, i) => (
              <div className="rating_num" key={i} onClick={() => rate(num, nums)}>{num}</div>
            ))}
          </div>

          <input id='btn' type="submit" value="Submit" onClick={change} />
        </div>
      </main>

      <main className='AppS_main'>
        <div className="AppS">
          <img className="illus" src="illustration-thank-you.svg" alt=" thanks illustration" />

          <div className='rating_display'>You selected {rating} out of 5</div>

          <h1 className='thanks'>Thank you!</h1>

          <p>
            We appreciate you taking the time to give a rating.If you ever need more support, don't hesitate to get in touch!
          </p>
        </div>
      </main>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="/">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;