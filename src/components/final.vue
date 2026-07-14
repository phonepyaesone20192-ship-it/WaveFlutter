<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const countries = ref([
  { value: "cameroon", label: "Cameroon", flag: "🇨🇲" },
  { value: "egypt", label: "Egypt", flag: "🇪🇬" },
  { value: "ghana", label: "Ghana", flag: "🇬🇭" },
  { value: "ivory_coast", label: "Ivory Coast", flag: "🇨🇮" },
  { value: "kenya", label: "Kenya", flag: "🇰🇪" },
  { value: "malawi", label: "Malawi", flag: "🇲🇼" },
  { value: "mauritius", label: "Mauritius", flag: "🇲🇺" },
  { value: "nigeria", label: "Nigeria", flag: "🇳🇬" },
  { value: "rest_of_europe", label: "Rest of Europe", flag: "🇪🇺" },
  { value: "rwanda", label: "Rwanda", flag: "🇷🇼" },
  { value: "senegal", label: "Senegal", flag: "🇸🇳" },
  { value: "south_africa", label: "South Africa", flag: "🇿🇦" },
  { value: "tanzania", label: "Tanzania", flag: "🇹🇿" },
  { value: "uganda", label: "Uganda", flag: "🇺🇬" },
  { value: "united_kingdom", label: "United Kingdom", flag: "🇬🇧" },
  { value: "united_states", label: "United States", flag: "🇺🇸" },
  { value: "zambia", label: "Zambia", flag: "🇿🇲" },
]);
const selected = ref(countries.value[0]);
function selectCountry(country) {
  selected.value = country;
  isOpen.value = false;
}
</script>

<template>
 
  <footer>
    <section class="mainList">
      <div class="firstList">
        <ul>
          <li class="listTitle">Products</li>
          <li>Collect Payments</li>
          <li>Send Money</li>
          <li>Store</li>
          <li>Payment Links</li>
          <li>Invoices</li>
          <li>Capital</li>
          <li>Grow</li>
          <li>Card Issuing</li>
          <li>FaaS</li>
          <li>Disha</li>
          <li>Send App</li>
          <li>Tuition</li>
        </ul>
      </div>

      <div class="secondList">
        <ul>
          <li class="listTitle">Resources</li>
          <li>Pricing</li>
          <li>Support</li>
          <li>Blog</li>
          <li>Integrations</li>
          <li>Why you got charged</li>
          <li>Cookie settings</li>
          <li>Payment protection promise</li>
          <li>Dashboard Guide</li>
          <li>White Papers</li>
        </ul>
      </div>

      <div class="thirdList">
        <ul>
          <li class="listTitle">Developers</li>
          <li>API Documentation</li>
          <li>API Reference</li>
          <li>API Status 🟢</li>
        </ul>
      </div>

      <div class="fourthList">
        <ul>
          <li class="listTitle">Company</li>
          <li>Customers</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Covid 19</li>
          <li>2024 Enterprise Report</li>
          <li>Whistleblowing</li>
          <li>Flutterwave MFB</li>
        </ul>
      </div>

      <div class="fifthList">
        <ul>
          <li class="listTitle">Contact</li>
          <li>hi@flutterwavego.com</li>
          <li>X Support</li>
        </ul>
      </div>
    </section>
    <br /><br />
    <hr />
    <br /><br />
    <div class="country">

       <div v-if="!isOpen" class="close">
      <button @click="isOpen = true">
        {{ selected.flag }} {{ selected.label }} ∨
      </button>
    </div>
    
    <div v-else class="panel">
      <div class="trigger" @click="isOpen= false">
      {{ selected.flag }} {{ selected.label }} ∨
    </div>
      <button
        v-for="country in countries"
        :key="country.value"
        @click="selectCountry(country)"
      >
        <span class="rFlag">{{ country.flag }}</span> {{ country.label }}
      </button>
    </div>
    </div>
      
    <button class="footerB">X(formerly Twitter)</button>
    <button class="footerC">Facebook</button>
    <button class="footerC">Instagram</button>
    <button class="footerC">Youtube</button>
    <button class="footerC">Linkedin</button>
    <br /><br /> <br>
    <hr />
    <nav>
      <a href="#">Privacy notice</a>
      <a href="#">Terms of use</a>
      <a href="#">Cookie notice</a>
      <a href="#">Merchant service agreement</a>
      <a href="#">IMS policy</a>
      <a href="#">Send App licenses</a>
      <a href="#">IP infringement policy</a>
      <a href="#">ESG policy</a>
    </nav>
    <br>
    <br>
    <p>
      © Flutterwave Payments, LLC is Registered with FinCEN. NMLS ID# 2391594
    </p>
  </footer>
</template>
<style scoped>

footer {
  margin-top: 200px;
}
.mainList {
  display: flex;
  margin-left: 115px;
  margin-right: 115px;
}
.firstList,
.secondList,
.thirdList,
.fourthList,
.fifthList {
  flex: 1;
}
ul {
  list-style-type: none;
}
.listTitle {
  font-weight: 700;
  color: black;
}
li {
  font-weight: 20;
  color: black;
  margin-top: 15px;
}
hr {
  width: 85%;
  margin-left: 100px;
  margin-right: 100px;
}

.footerB,
.footerC,
.close button,.panel button {
  all: unset;
}
.close button{
  transition:0.2s ease;
}
.country {
  position: absolute;
  margin-left: 115px;
  ;
}

.panel {
  position: absolute;
  top: -300px;      /* panel opens above */
  left: 0;
  width: 700px;
  padding: 20px;
  background: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.trigger {
  margin-top: 100px;
  position: absolute;
  top: 200px;       /* move it back down to where the closed button is */
  grid-column: unset;
  transition:0.2s ease;
}
.panel button{
  font-size: 20px;
   transition:0.2s ease;
}
.trigger:hover,.close button:hover,.panel button:hover{
  color:#3b82f6;
}
.footerB {
  margin-left: 500px;
}
.footerC {
  margin-left: 100px;
}
nav{
  margin-top: 30px;
  margin-left: 115px;
}
a{
  text-decoration: none;
  margin-right: 72px;
  font-weight: 20;
  color: black;
}
p{
  margin-left: 115px;
  color: black;
  font-weight: 20;
}
</style>
