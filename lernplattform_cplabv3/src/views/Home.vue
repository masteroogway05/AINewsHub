<template>
  <div class="startseite">
    <div class="div">
      <div class="overlap-group">
        <router-link to="/news"><div class="aufgabe">
          <img class="image" alt="Image" src="../assets/image-5.png" />
          <div class="text-wrapper">AUKUS trial advances AI for military operations </div>
          <div class="text-wrapper-2">5 February 2024</div>
          <div class="text-wrapper-3">AUKUS</div>
        </div></router-link>
        <router-link to="/news"><div class="aufgabe-2">
          <img class="image" alt="Image" src="../assets/image-6.png" />
          <div class="text-wrapper">Bank of England Governor: AI won’t lead to mass job losses</div>
          <div class="text-wrapper-2">2 February 2024</div>
          <div class="text-wrapper-3">Bank of England</div>
        </div></router-link>
        <router-link to="/news"><div class="aufgabe-3">
          <img class="image" alt="Image" src="../assets/image-1.png" />
          <div class="text-wrapper">OpenAI rolls out ChatGPT memory to select users</div>
          <div class="text-wrapper-2">14 February 2024</div>
          <div class="text-wrapper-3">OpenAI</div>
        </div></router-link>
        <router-link to="/news"><div class="aufgabe-4">
          <img class="image" alt="Image" src="../assets/image-2.png" />
          <div class="text-wrapper">JumpCloud report reveals SMEs conflicted about AI</div>
          <div class="text-wrapper-2">14 February 2024</div>
          <div class="text-wrapper-3">JumpCloud</div>
        </div></router-link>
        <router-link to="/news"><div class="aufgabe-5">
          <img class="image" alt="Image" src="../assets/image-3.png" />
          <div class="text-wrapper">Fetch.ai and Deutsche Telekom partner to converge AI and blockchain</div>
          <div class="text-wrapper-2">13 February 2024</div>
          <div class="text-wrapper-3">Fetch.ai</div>
        </div></router-link>
        <router-link to="/news"><div class="aufgabe-6">
          <img class="image" alt="Image" src="../assets/image-4.png" />
          <div class="text-wrapper">Telcos to spend $20B on AI network orchestration by 2028</div>
          <div class="text-wrapper-2">12 February 2024</div>
          <div class="text-wrapper-3">Telcos</div>
        </div></router-link>
      </div>
      <header class="header">
        <div class="cart-button">
          <div class="text-wrapper-5">Aktualisieren</div>
        </div>
        <router-link to="/aufträge"><div class="text-wrapper-6">Weitere News</div></router-link>
        
        <div class="text-wrapper-7">Startseite</div>
        <div class="text-wrapper-8">AI-NewsHub</div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: "Startseite",
};
</script>

<style>
.startseite {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.startseite .div {
  background-color: #ffffff;
  height: 1242px;
  position: relative;
  width: 1440px;
}

.startseite .overlap-group {
  background-image: url(../assets/image-15.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 1130px;
  left: 46px;
  position: absolute;
  top: 112px;
  width: 1354px;
}

.startseite .aufgabe {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 159px;
  left: 50px;
  overflow: hidden;
  position: absolute;
  top: 885px;
  width: 608px;
}

.startseite .image {
  height: 131px;
  left: 10px;
  object-fit: cover;
  position: absolute;
  top: 14px;
  width: 209px;
}

.startseite .text-wrapper {
  color: #297bf6;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 230px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 52px;
}

.startseite .text-wrapper-2 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 421px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  text-align: right;
  top: 22px;
  white-space: nowrap;
}

.startseite .text-wrapper-3 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 230px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 22px;
  white-space: nowrap;
}

.startseite .aufgabe-2 {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 159px;
  left: 690px;
  overflow: hidden;
  position: absolute;
  top: 885px;
  width: 608px;
}

.startseite .img {
  height: 131px;
  left: 11px;
  object-fit: cover;
  position: absolute;
  top: 14px;
  width: 209px;
}

.startseite .aufgabe-3 {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 159px;
  left: 50px;
  overflow: hidden;
  position: absolute;
  top: 547px;
  width: 608px;
}

.startseite .aufgabe-4 {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 159px;
  left: 690px;
  overflow: hidden;
  position: absolute;
  top: 547px;
  width: 608px;
}

.startseite .aufgabe-5 {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 159px;
  left: 50px;
  overflow: hidden;
  position: absolute;
  top: 716px;
  width: 608px;
}

.startseite .aufgabe-6 {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 159px;
  left: 690px;
  overflow: hidden;
  position: absolute;
  top: 716px;
  width: 608px;
}

.startseite .text-wrapper-4 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 231px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 22px;
  white-space: nowrap;
}

.startseite .header {
  background-color: transparent;
  height: 112px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.startseite .cart-button {
  background-color: #1000c9;
  border-radius: 8px;
  height: 48px;
  left: 1218px;
  overflow: hidden;
  position: absolute;
  top: 32px;
  width: 126px;
}

.startseite .text-wrapper-5 {
  color: #ffffff;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 21px;
  left: 12px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 12px;
  white-space: nowrap;
}

.startseite .text-wrapper-6 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 21px;
  left: 1080px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 46px;
  white-space: nowrap;
}

.startseite .text-wrapper-7 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 21px;
  left: 982px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 45px;
  white-space: nowrap;
}

.startseite .text-wrapper-8 {
  color: #1000c9;
  font-family: "Newsreader-Medium", Helvetica;
  font-size: 32px;
  font-weight: 500;
  left: 96px;
  letter-spacing: -0.32px;
  line-height: 32px;
  position: absolute;
  top: 40px;
  white-space: nowrap;
}
</style>
