  <template>
    <div class="upper">
      <h1 class="title">
        Endless payment possibilities for every <span>individual</span>
      </h1>
      <h2 class="coTitle">
        💠WaveFlutter offers a host of seamless products for individuals,ensuring
        smooth transactions and efficient money management.
      </h2>
    </div>
    <div class="cards">
      <div class="card1">
        <h1 class="cardTitle">Send money to loved ones</h1>
        <p class="cardP">
          Experience the convenience and security of Send, enabling you to
          effortlessly and securely transfer funds to your beloved ones residing
          overseas. Begin sharing financial support with the ones who hold
          significance in your life right <a href="">here👆</a>
        </p>
      </div>
      <div class="card2">
        <h1 class="cardTitle">Shop online</h1>
        <p class="cardP">
          Explore a world of possibilities as you Discover, Shop, and have your
          purchases conveniently delivered from your cherished online businesses.
          Embark on a secure shopping journey and relish the joy of acquiring
          great items from amazing small businesses, right
          <a href="">here👆</a>
        </p>
      </div>
      <div class="card3">
        <h1 class="cardTitle">Find events and Buy tickets</h1>
        <p class="cardP">
          Browse upcoming events and secure your ticket on our Afritickets
          platform <a href="">here👆</a>
        </p>
      </div>
    </div>
  </template>

  <style scoped>
  a {
    color: black;
  }

  .title {
    font-weight: 5000;
    font-size: 70px;
    color: black;
    max-width: 1000px;
    margin: 200px 300px 0px 470px;
  }
  .coTitle {
    font-weight: 10;
    margin-top: 50px;
    font-size: 22px;
    margin: 50px 450px 0px 500px;
  }
  .title {
    color: #0f766e;
  }

  .title span {
    color: #14b8a6;
  }

  .coTitle {
    color: #6b7280;
  }
  .cards {
    display: flex;
    margin-top: 60px;
    position: relative;
    margin-left: 115px;
    margin-bottom: 25px;
  
  }
  .card1,
  .card2,
  .card3 {
    border-radius: 10px;
    border: 1px solid rgb(113, 229, 223);
    background-color: white;
    width: 500px;
    height: 220px;
    padding: 20px 100px 50px 50px;
    box-sizing: border-box;
    position: absolute;

  }
 
  .card1 {
    left: 200px;
    z-index: 1;
    box-shadow:  0 30px 100px rgba(0, 0, 0, 0.12),50px -1000px 50px 10px rgb(113, 229, 223) inset;
    transition: 0.5s;
  }
  .card2 {
    left: 480px;
    z-index: 2;
    transition: 0.5s;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.12),50px -1000px 50px 10px rgb(113, 229, 223) inset;
  }
  .card3 {
    left: 730px;
    z-index: 3;
    transition: 0.5s;
    box-shadow:  0 30px 30px rgba(0, 0, 0, 0.12),50px -1000px 50px 10px rgb(113, 229, 223) inset;
  }
  .card1:hover ~ .card2 {
    left: 650px;
  }
  .card1:hover,
  .card2:hover,
  .card3:hover {
    box-shadow:  0 30px 30px rgba(0, 0, 0, 0.12),20px 20px 50px 10px rgb(113, 229, 223) inset;
  }
  .card2:hover ~ .card3 {
    left: 900px;
  }

  .cardTitle {
    font-size: 20px;
    font-weight: 5000;
  }
  .cardP {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 5000;
    padding-bottom: 20px;
  }
  /* part 5 */
.click-to-show button{
  margin-left: 115px;
}
  </style>
