<template>
  <h1 class="title">Our <span>global</span> reach</h1>
  <div class="content">
    <div class="left">
      <ul>
        <li class="lli">
          <div class="first">
            <a href="">30+ Currencies</a>
            <p>We accept payments in more than thirty currencies</p>
          </div>
        </li>
        <li class="lli">
          <div class="second">
            <h3>20M+ API calls</h3>
            <p>API calls per day, peaking at 231 requests per second.</p>
          </div>
        </li>
        <li class="lli">
          <div class="third">
            <h3>500k+ payments daily</h3>
            <p>Average number of payments processed daily</p>
          </div>
        </li>
        <li class="lli">
          <div class="fourth">
            <h3>15+ payment options</h3>
            <ul>
              <li>Debit & Credit cards</li>
              <li>Mobile money</li>
              <li>M-Pesa</li>
              <li>Bank Transfer</li>
              <li>Bank Account</li>
              <li>POS</li>
              <li>VISA QR</li>
              <li>USSD</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="globe-window">
        <div class="globe-track">
          <img src="/world.png" alt="" />
          <img src="/world.png" alt="" />
          
        </div>
      </div>
    </div>
  </div>
   <div class="main">
    <h1>Ready to get started?</h1>
    <p>
      Create an account and instantly start accepting payments, selling your
      beautiful products online and building financial tools.
    </p>
    <button id="mainButton">Contact sales ➣</button>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}
.left,
.title,
.right {
  margin-left: 115px;
}

.title {
  font-size: 70px;
  font-weight: 5000;
  margin-top: 300px;
}
.title span {
  color: #7c3aed;
}
h3,
a {
  font-size: 22px;
  font-weight: 500;
}

.lli {
  position: relative;
  padding-left: 34px;
  list-style: none;
}
.lli::before {
  content: "";
  position: absolute;
  left: 0;
  width: 30px;
  height: 30px;
  background-image: url("/star.png");
  background-size: contain;
  background-repeat: no-repeat;
  top: 0px;
}

.left::before {
  border-left: 2px dotted;
}
.fourth ul {
  columns: 2;
  margin-top: 15px;
}
.content {
  display: flex;
  position: relative;
}
.first,
.second,
.third,
.fourth{
  margin-top: 70px;
}
.right{margin-top:30px;}

p,
ul {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 10;
}
.globe-window {
  border-radius: 50%;
  overflow: hidden;
  height: 600px;
  width: 600px;
  margin-left: 150px;

}
.globe-track {
  display: flex;
  animation: spin 10s linear infinite;
}
.globe-track img {
  height: 700px;
  width: 700px;
  object-fit: fill;
  padding-bottom: 100px;
}

@keyframes spin {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-700px);
  }
}
.main {
  border-radius: 40px;
  color: #1f2937;
  background-color: #f3f4f6;
  padding: 50px 200px 50px 200px;
  box-shadow:
    0 4px 50px 0 rgba(0, 0, 0, 0.2),
    0 6px 50px 0 rgba(0, 0, 0, 0.19);
  margin: 200px 115px 50px 115px;
}
.main h1 {
  font-size: 70px;
  font-weight: 5000;
}
.main p {
  font-size: 22px;
  font-weight: 500;
  margin-top: 20px;
}
#mainButton {
  background: #3b82f6;
  color: white;
  padding: 20px 40px;
  border-radius: 16px;
  transition: 0.3s;
  cursor: pointer;
  font-size: 22px;
  font-weight: 500;
  margin-top: 50px;
}
#mainButton:hover {
  background: #0a125c;
}
</style>
