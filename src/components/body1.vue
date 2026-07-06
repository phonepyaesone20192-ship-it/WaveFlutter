<template>
  <div class="endlessMain">
    <h1 class="title">
      Endless
      <br>
      possibilities
    </h1>
    <h2 class="coTitle">for all</h2>
    <p>
      Empowering businesses of all sizes with seamless payment solutions
      tailored for enterprises, startups, and emerging markets.
    </p>
  </div>

  <div class="endlessImage">
    <div class="upper">
      <div class="left">
        <router-link to="/contact">Contact sales</router-link>
        <img src="/endlessImage-left.jpg" alt=" " />
      </div>
      <div class="right">
        <img src="/endlessImage-right.jpg" alt="" />
        <p>
          Send money home to loved ones, sell online as a small business,
          process global payments as an enterprise, build financial products as
          a startup. With Flutterwave, the question isn't what's possible—it is:
          what isn't?
        </p>
      </div>
    </div>
    <div class="lower">
      <h3>We are trusted by leading businesses across different sectors</h3>
      <div class="images">
        <img src="/uber.svg" alt="" />
        <img src="/wise.svg" alt="" />
        <img src="/piggyvest.svg" alt="" />
        <img src="/mtn.svg" alt="" />
        <img src="/microsoft.svg" alt="" />
        <img src="/chipper.svg" alt="" />
        <img src="/air-peace.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
}
.endlessMain , .endlessOrange{
  max-width: 1200px;
  margin-left: 90px;
  padding: 80px 20px;
  margin-bottom: 0px;
  padding-bottom: 50px;
}
.title {
  color: #0f172a;
  padding: 50px 0px 0px 0px;
  font-size: 70px;
  margin: 0px;
  padding: 0px;
  font-weight: 5000;
}
.coTitle {
  color: #1d4ed8;
  font-size: 70px;
  margin: 0px;
  padding:0px;
  font-weight: 5000;
}
.endlessMain p {
  max-width: 550px;
  font-size: 25px;
  font-weight: 10;
  margin: 0px;
  color: #475569;
}
.endlessImage {
  max-width: 1470px;
  margin: 0 auto;
  margin-top: 0;
  padding-top: 0;
  margin-left: 0px;
  margin-right: 0px;
}
.upper {
  display: flex;
}
.left,
.right {
  flex: 1;
}

.left a {
  background: #3b82f6;
  color: #ffff;
  padding: 15px 20px 15px 20px;
  border-radius: 10px;
  text-decoration: none;
  margin-left: 110px;
}
.left a:hover {
  background: #0A125C;
}
.left img {
  max-width: 120%;
  margin: 150px 50px 0px 0px;
  padding: 0px;
}
.right img {
  max-width: 70%;
  padding: 0px;
  margin: 0px 0px 0px 220px;
}
.right p {
  margin-left: 220px;
  margin-top: 20px;
  font-size: 25px;
  font-weight: 10;
  color:#475569;
}
.lower {
  margin-top: 150px;
  margin-left: 110px;
}
.lower h3 {
  font-weight: 500;
  font-size: 25px;
  color:#475569;
}
.lower img {
  margin-top: 35px;
  display:felx;
  max-width: 130px;
  padding-right:70px;
}

</style>
