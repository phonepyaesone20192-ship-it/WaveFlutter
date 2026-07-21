<template>
  <div id="firstPart">
    <div class="left">
      <h1 class="title">Start <span>selling</span> online</h1>
      <p class="coTitle">
        Create a free online store that helps you find customers, accept
        payments from anyone, and grow your business.
      </p>
      <div class="button">
        <router-link>Contact sales</router-link>
      </div>
    </div>
    <div class="right">
      <img src="/online.jpeg" alt="" />
    </div>
  </div>
  <div id="secondPart">
    <h1 class="title">
      Start selling your products globally in just 5 minutes
    </h1>
    <div class="organize">
      <div class="left-column">
        <div class="first">
          <div class="counter">
            <h4>1</h4>
          </div>
          <div class="info">
            <h5>Create a Flutterwave account</h5>
            <p>
              Create a free Flutterwave account if you're a new user or login if
              you're a registered user.
            </p>
          </div>
        </div>
        <div class="second">
          <div class="counter"><h4>2</h4></div>
          <div class="info">
            <h5>Create your store</h5>
            <p>Setup your store, with product photos and specifications.</p>
          </div>
        </div>
        <div class="third">
          <div class="counter"><h4>3</h4></div>
          <div class="info">
            <h5>Start selling</h5>
            <p>Share your store link, start selling and accepting payments.</p>
          </div>
        </div>
        <div class="button">
          <router-link>Start Selling</router-link>
        </div>
      </div>
      <div class="right-image">
        <img src="/browser.jpg" alt="" />
      </div>
    </div>
  </div>
  <div id="thirdPart">
    <h1 class="title">
      Get listed on Africa's fastest growing marketplace -
      <span>Flutterwave Market</span>
    </h1>
    <img src="/market.avif" alt="" class="chairImg" />
    <h4 class="chairIntro">
      Whether you sell physical products like furniture
    </h4>
    <div class="top">
      <div class="left">
        <div class="upper">
          <h4>Or offer creative services like custom art...</h4>
        </div>
        <div class="lower">
          <img src="/art2.jpeg" alt="" />
        </div>
      </div>
      <div class="girl">
        <img src="/art1.jpg" alt="" />
      </div>
    </div>

    <div class="bottom">
      <h4>
        Your Store is listed on Flutterwave Market - where millions of people
        shop every day. Create your Store, get listed on Flutterwave Market and
        start selling!
      </h4>
      <div class="two-button">
        <div class="button">
          <router-link>Start selling </router-link>
        </div>
        <div class="button2">
          <router-link>Explore the market </router-link>
        </div>
      </div>
    </div>
  </div>

  <div id="forthPart">
    <h1>What we offer</h1>
    <h4>
      We provide you with all the commerce tools you need in a single package
    </h4>
    <div class="button2">
      <router-link> Get started with store</router-link>
    </div>
    <ul>
      <li>Sell multiple products & variants</li>
      <li>Manage your store on mobile</li>
      <li>Low stock notification</li>
      <li>Telephone support for customers</li>
      <li>Multiple payment options, with an easy and secure checkout</li>
      <li>Charge delivery fee</li>
      <li>Give customers discounts</li>
    </ul>
  </div>
  <!-- part 5 -->
  <div id="fifthPart">
    <h1>Frequently asked questions</h1>
    <hr />
    <div class="click-to-show" v-if="!isShowing1">
      <button type="button" @click="isShowing1 = !isShowing1">
        What kind of product can I sell?
        <svg viewBox="0 0 24 24" width="24" height="24" class="img1">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
        </svg>
      </button>
    </div>
    <div class="info" v-else>
      <button type="button" @click="isShowing1 = !isShowing1">
        What kind of product can I sell?
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          :class="{ rotated1: isShowing1 }"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
        </svg>
      </button>
      <h4>
        You can sell a wide range of physical products and offer various
        services through your store.
      </h4>
    </div>
    <hr />
    <div class="click-to-show" v-if="!isShowing2">
      <button type="button" @click="isShowing2 = !isShowing2">
        What is the cost for setting up a store?
        <svg viewBox="0 0 24 24" width="24" height="24" class="img2">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
        </svg>
      </button>
    </div>
    <div class="info" v-else>
      <button type="button" @click="isShowing2 = !isShowing2">
        What is the cost for setting up a store?
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          :class="{ rotated2: isShowing2 }"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
        </svg>
      </button>
      <h4>It's totally free to setup a store.</h4>
    </div>
    <hr />
    <div class="click-to-show" v-if="!isShowing3">
      <button type="button" @click="isShowing3 = !isShowing3">
        How long does it take to set up a store?
        <svg viewBox="0 0 24 24" width="24" height="24" class="img3">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
        </svg>
      </button>
    </div>
    <div class="info" v-else>
      <button type="button" @click="isShowing3 = !isShowing3">
        How long does it take to set up a store?
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          :class="{ rotated3: isShowing3 }"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
        </svg>
      </button>
      <h4>You can setup your store and start selling in minutes.</h4>
    </div>
  </div>

  <!--lastPart-->
  <div class="cta-section">
    <div class="cta-card">
      <div class="cta-content">
        <h1>Ready to start selling?</h1>

        <p>
          Create an account and instantly start accepting payments, selling your
          beautiful products online and building financial tools.
        </p>

        <a href="#" class="cta-btn">
          Download app
          <span>&#8250;</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const isShowing1 = ref(false);
const isShowing2 = ref(false);
const isShowing3 = ref(false);
</script>

<style src="./startSelling.css" scoped></style>
