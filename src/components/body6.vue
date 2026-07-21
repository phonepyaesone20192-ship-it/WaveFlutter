<template>
<div class="content">
 
    <h1>
    Well documented and easy-to-use
    <span class="highlight">APIs</span> for
    <span class="highlight">developers</span>
  </h1>

  <p>
    We have done the core payments integrations and abstractions, so your team
    can easily integrate with our APIs and access multiple payment
    functionalities.
  </p>

  <ul>
    <li>Quick transfers</li>
    <li>Initiate one-time and recurring payments</li>
    <li>Payment verification</li>
    <li>Instant virtual cards creation</li>
    <li>Customer verification</li>
  </ul>

  <div class="button"><router-link to="/Api">Read the API docs</router-link></div>
  </div>
</template>
 
<style scoped>
a{
  text-decoration: none;
  color: white;
}
.content{
  margin-top: 300px;
  margin-left: 115px;
}
h1 {
  font-size: 70px;
  font-weight: 5000;
  max-width:900px;
  line-height: 1.05;
  color: #111111; 
}

h1 span {
  color: #7C3AED; 
}

p {
  font-size: 22px;
  line-height: 1.8;
  color: darkgray;
  font-weight: 5000;
}

li {
  font-size: 20px;
  line-height: 2.4;
  color: #232323;
  margin-left:20px;
}
ul {
  list-style-type: none;
}
li {
  position: relative; 
  padding-left:35px;
}

li::before {
  content: '';
  position: absolute;
  left: 0;
  width: 30px;
  height: 30px;
  background-image: url('/star.png'); /* <-- this one */
  background-size: contain;     
  background-repeat: no-repeat;
  top:10px;
}
.button{
      margin:80px 0px 0px 0px;
    }
.button a {
    background: #3b82f6;
    color: #ffff;
    padding: 15px 20px 15px 20px;
    border-radius: 10px;
    font-size: 20px;
  }
.button a:hover {
  background: #0A125C;
}

</style>
