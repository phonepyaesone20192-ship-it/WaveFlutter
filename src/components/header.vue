<template>
  <header>
    <ul>
      <li class="main"><router-link to="/">💠WaveFlutter</router-link></li>
      <li><a href="">Enterprise</a></li>
      <li><a href="">SME</a></li>
      <li><a href="">Personal</a></li>
      <li><a href="">Resources</a></li>
      <li><a href="">Developers</a></li>
      <li><a href="">Company</a></li>
      <li>
        <div class="sign-in">
          <a href="">Sign in</a>
        </div>
      </li>
    </ul>
  </header>
</template>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  background-color: #3b82f6;
}
li {
  margin: 10px;
  padding: 20px;
  font-size: 20px;
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
.main {
  font-size: 40px;
  padding-right: 150px;
  position: relative;
  top: -15px;
  right: -80px;
  
}

a{
  color: #ffff;
}

.sign-in {
  border-radius: 10px;
  background:#ffffff;
  padding:10px;
  position: relative;
  top:-8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: background 0.3s ease;
  margin-left: 100px;
}
.sign-in:hover{
  background: #0A125C;
}

.sign-in a{
  color:#3b82f6;
  transition: color 0.3s ease;
}
.sign-in:hover a{
  color:#e0f2fe;
}
</style>
