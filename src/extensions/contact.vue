<template>
  <main>
    <div class="right">
      <h1 class="title">Contact our <span class="c1" >Sales</span>  team</h1>
    <p>With 💠WaveFlutter you can <span class="c1">Sell online</span>, <span class="c2">process payments</span> , <span id="c3">build financial products</span> , or use <span id="c4">business tools</span>  designed to grow your business.</p>
    <br>
    <p>Please complete the form on the right to <span class="c2">connect</span>  with a member of our team.</p>
    <br>
    <p>Read our <a href="">Privacy Notice</a> for more information about how we process your personal data.</p>
  </div>
    <div class="left"> 
      <form action="">
          <input type="text" name="fullName" id="fullName" placeholder="Full Name">
          <input type="text" name="company" id="company" placeholder="Company Name">
          <input type="email" name="email" id="email" placeholder="Email Address">
          <input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number">
          <select name="countries" id="countries" placeholder="Country your business is registered ">
              <option value="" disabled selected>Country your business is registered</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Ghana">Ghana</option>
              <option value="Ivory Coast">Ivory Coast</option>
              <option value="Kenya">Kenya</option>
              <option value="Malawi">Malawi</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Senegal">Senegal</option>
              <option value="South Africa">South Africa</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Uganda">Uganda</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Zambia">Zambia</option>
              <option value="Rest of Europe">Rest of Europe</option>
        </select>
        <select name="status" id="status" placeholder="Business Registered Status">
          <option value="" disabled selected>Business Registered Status</option>
            <option value="registered">Registered</option>
            <option value="unRegistered">Unregistered</option>
        </select>
        <select name="annual" id="annual" placeholder="Annual Processing Volume In USD">
           <option value="" disabled selected>Annual Processing Volume In USD</option>
            <option value="under1M">Under $1M</option>
            <option value="1M-5M">$1M - $5M</option>
            <option value="5M-25M">$5M - $25M</option>
            <option value="above25M">Above $25M</option>
        </select>
        <input type="text" name="moreAboutBusiness" id="moreAboutBusiness" placeholder="Tell Me More About Your Business">
         <input type="submit" id ="submit" value="Send Message">
      </form>
    </div>
  </main>
</template>
<style scoped>
main{
  margin-left: 115px;
  display:flex;
  margin-top: 100px;
}
.c1{
  color:red;
}
.c2{
  color:green
}
#c3{
  color: blue;
}
#c4{
  color: gold;
}
.title {
  font-size: 70px;
  font-weight: 200px;
  max-width: 500px;
  color: #1f2937;
  line-height: 1.1;
  letter-spacing: -1px;
}

p {
  font-size: 22px;
  font-weight: 10px;
  max-width: 500px;
  margin-top: 30px;
  color: #4b5563;
  line-height: 1.6;
}

.right a {
  color: #1006cb;
  text-decoration: none;
  font-weight: 600;
}

.right a:hover {
  text-decoration: underline;
}

.left form{
  display: flex;
  flex-direction: column;
  width: 600px;
}

input,select{
  margin-top: 20px;
  margin-left: 250px;
  padding: 15px;
  border-radius: 10px;
}

#moreAboutBusiness{
  padding:50px;
}

.left form input,
.left form select {
  border: 2px solid #afb9c7;
}

.left form input:focus,
.left form select:focus {
  outline: none;
  border-color: #4f46e5;
}

#submit {
  background-color: #1006cb;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.5s ease;
}

#submit:hover {
  background-color: #09071c;
}
</style>