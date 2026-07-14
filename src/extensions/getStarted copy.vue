<script setup>
  import {ref} from "vue"
  const isOpen = ref(false);
  const selected = ref('🇨🇲 Cameroon')
</script>
<template>
  <div class="content">
    <div class="upper">
      <h1 class="title">
        Beautiful, Smart, Fast and <span class="cTitle"> Secure</span>
      </h1>
      <p>
        Experience 💠WaveFlutter checkout by making a live payment. A live
        payment means that real money will be debited from your account.
      </p>
    </div>
    <div v-if="!isOpen" class="close">
      <button @click="isOpen = true">{{ selected }} ↓</button>
    </div>
    <div v-else class="open">
      <select name="countries" id="countries">
        <option value="cameroon">🇨🇲 Cameroon</option>
        <option value="egypt">🇪🇬 Egypt</option>
        <option value="ghana">🇬🇭 Ghana</option>
        <option value="ivory_coast">🇨🇮 Ivory Coast</option>
        <option value="kenya">🇰🇪 Kenya</option>
        <option value="malawi">🇲🇼 Malawi</option>
        <option value="mauritius">🇲🇺 Mauritius</option>
        <option value="nigeria">🇳🇬 Nigeria</option>
        <option value="rest_of_europe">🇪🇺 Rest of Europe</option>
        <option value="rwanda">🇷🇼 Rwanda</option>
        <option value="senegal">🇸🇳 Senegal</option>
        <option value="south_africa">🇿🇦 South Africa</option>
        <option value="tanzania">🇹🇿 Tanzania</option>
        <option value="uganda">🇺🇬 Uganda</option>
        <option value="united_kingdom">🇬🇧 United Kingdom</option>
        <option value="united_states">🇺🇸 United States</option>
        <option value="zambia">🇿🇲 Zambia</option>
      </select>
    </div>

    <form action="">
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="   First Name"
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="   Last Name"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="   Email Address"
      />
      <div>
        <h5>$10</h5>
      </div>

      <h5 class="NB">NB: THIS IS A FIXED AMOUNT AND A REAL DEBIT.</h5>

      <input type="submit" name="submit" id="submit" placeholder="Submit" />
      <p>
        Read our Privacy Notice for more information about how we process your
        personal data.
      </p>
    </form>
    <div class="box">
      <h2>Ready to get started?</h2>
      <p>
        Create an account and instantly start accepting payments, selling your
        beautiful products online and building financial tools.
      </p>
      <div class="link">
        <a href="">contact sales ➣</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.upper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.upper {
  margin-left: 100px;
}
.title {
  margin-top: 100px;
  font-size: 110px;
  width: 1000px;
}
.cTitle {
  color: #3b82f6;
}
.upper p {
  font-size: 30px;
  font-weight: 2;
  max-width: 900px;
  color: rgb(146, 143, 143);
  margin-top: 50px;
}
.close button,.open select {
  margin-top: 50px;
  margin-left: 730px;
  border: none;
  font-size: 30px;
  appearance: none;
  background: none;
  cursor:pointer;
}
form {
  margin-top: 100px;
  padding: 150px;
  border-radius: 10px;
  background-color: #f9fafb;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.12);
  width: 700px;
  margin-left: 330px;
}
form input {
  font-size: 20px;
  height: 40px;
  border-radius: 10px;
}
#firstName,
#lastName {
  width: 280px;
  margin: 0px 58px 0px 0px;
}
form div {
  border: 1px black solid;
  border-radius: 10px;
  background: #1e3a8a;
  padding: 20px;
  width: 587px;
  margin-top: 30px;
  color: yellow;
}
form div:hover {
  cursor: not-allowed;
}
#email,
#submit,
form p {
  width: 625px;
  margin: 30px 30px 0px 0px;
}
form p {
  font-size: 20px;
}
.NB {
  margin-top: 20px;
  font-weight: 10px;
  color: orangered;
}
.box {
  margin-top: 100px;
  margin-left: 330px;
  padding: 100px;
  background-color: #1e3a8a;
  color: white;
  max-width: 810px;
  border-radius: 30px;
}
.box h2 {
  font-size: 70px;
}
.box p,
.link {
  margin-top: 33px;
  font-size: 22px;
  font-weight: 2;
}
.link a {
  color: white;
  text-decoration: none;
}
</style>
