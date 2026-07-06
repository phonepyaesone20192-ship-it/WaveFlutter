<template>
  <div class="endlessOrange">
    <h1 class="title">Endless payment possibilities ♾️  </h1>
    <h1 class="coTitle">for enterprises</h1>
    <div class="box">
      <div class="left">
        <h1>Online Checkout</h1>
        <h2>
          Our online checkout features our smart payment ordering system,
          incredible speed, and beautiful simplicity. It's designed to grow your
          revenue and provide the best payment experience to your customers.
        </h2>
        <div class="button">
          <a href=" ">Get started</a>
        </div>
      </div>
      <div class="middle">
        <img src="/endlessOrangeImage.png" alt="" />
      </div>
      <div class="right">
        <div class="upper">
          <h1>Accept payments</h1>
          <h2>
            Easily receive money from anyone, anywhere in the world via our
            multitude of secure payment methods.
          </h2>
          <div class="link">
            <a href="">Learn more ➣</a>
          </div>
        </div>
        <div class="lower">
          <h1>Transfers(Payout)</h1>
          <h2>
            Make single or bulk transfers to bank accounts from your Flutterwave
            dashboard.
          </h2>
          <div class="link">
            <a href="">Learn more ➣</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.title,
.coTitle {
  margin-left: 110px;
  font-size: 70px;
  max-width: 700px;
  color: #0F766E;
  font-weight: 5000;
}
.title {
  margin-top: 200px;
  /* background-image: url('/honey.webp');
  -webkit-background-clip:text;
  color:rgba(255,255,255,.1); */
  color: darkgray;
  /* text-shadow: 2px 2px 8px #EA580C; */
}
.box {
  display: flex;
}
.left {
  flex: 1.3;
  padding-top: 280px;
}
.left h1 {
  padding: 20px 0px 0px 115px;
  color: black;
}
.left h2 {
  font-weight: 5000;
  padding: 20px 0px 0px 115px;
  max-width: 400px;
  color: darkgray;
  font-size: 20px;
}

.button {
  margin-top: 30px;
}
.button a {
  background: #3b82f6;
  color: #ffff;
  padding: 15px 20px 15px 20px;
  margin-left: 115px;
  border-radius: 10px;
  font-size: 20px;
}
.button a:hover {
  background: #0A125C;
}

.middle {
  flex: 0.3;
  padding-top: 100px;
}
.middle img {
  max-width: 300px;
}
.right {
  flex: 1;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  margin-left: 90px;
}
.upper {
  margin-top: 100px;
}
.upper h1,
.lower h1 {
  color: black;
}
.upper h2,
.lower h2 {
  padding-top: 20px;
  font-weight: 5000;
  max-width: 350px;
  color: darkgray;
  font-size: 20px;
}
.link {
  margin-top: 30px;
}
.link a {
  color: #3b82f6;
  font-weight: 1000;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
}
.lower {
  margin-top: 90px;
}
</style>
