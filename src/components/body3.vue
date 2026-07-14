<template>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <h1 class="title">Endless payment possibilities for every</h1>
  <h2 class="coTitle">Small Business.</h2>
  <div class="page">
    <div class="left">
      <div class="lUpper">
        <h1>Store</h1>
        <h2>
          Create a free e-commerce website and start selling worldwide with just
          a few clicks.
        </h2>
        <div class="button">
          <router-link to="/StartSelling"> Start selling</router-link>
        </div>
      </div>
      <div class="lLower">
        <img src="/b3l.png" alt="" />
        <br> <br>
        <h3>
          A platform for you, whether you’re a <span class="end1">big business</span> or a <span class="end2">solo artist.</span>
        </h3>
      </div>
    </div>
    <div class="right">
      <div class="rUpper">
        <img src="/b3r.jpg" alt="" />
      </div>
      <div class="rLower">
        <h1>Invoices</h1>
        <h2>
          Generate professional invoices for your customers and get paid from
          anywhere.
        </h2>
        <div class="link"><a href=""> Get started ➣</a></div>
        <div class="rlLower">
          <h1>Payment links</h1>
          <h2>
            Receive one-off or recurring payments from anyone, anywhere, via
            your unique payment link.
          </h2>
          <div class="link"><a href="">Learn more ➣</a></div>
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
  font-size: 70px;
  max-width:800px;
  margin-left: 110px;
  font-weight: 5000;
}

 .title, .coTitle {
  background-image: linear-gradient(
    90deg,
    #111827,
    #1E3A8A,
    #2563EB
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.page {
  display: flex;
  position: relative;
  margin-top: 150px;
}
.left {
  flex: 1;
  margin-left: 110px;
}
.lUpper {
  margin-left: 200px;
  font-size: 20px;
  padding-top: 100px;
  max-width: 350px;
}
.lUpper h1,
.rLower h1 {
  font-weight: 500;
}
.lUpper h2,
.rLower h2 {
  padding-top: 30px;
  font-weight: 500;
  max-width: 400px;
  color: darkgray;
}
.button {
  margin-top: 50px;
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
.lLower {
  margin-top: 330px;
  position: absolute;
  left: 270px;

}

.lLower h3{
  font-weight: 500 ;
  padding-left: 100px;
}

.end1{
  color:#FF0000;
  font-weight: 700;
}
.end2{
  color: #6D28D9;
  font-weight: 700;
}

.right {
  flex: 1;
}
.rUpper img {
  object-fit: cover;
  width: 700px;
  height: 800px;
}

.rLower {
  margin-top: 100px;
  margin-left: 200px;
  font-size: 18px;
    
}
.link {
  margin-top: 50px;
}
.rlLower{
  margin-top: 103px;
}
</style>
