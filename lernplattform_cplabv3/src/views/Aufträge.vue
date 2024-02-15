<template>
  <div class="kategorien">
    <div class="div">
      <div class="anleitung">
        <p class="text-wrapper">Google launches Gemini to replace Bard chatbot</p>
        <div class="text-wrapper-2">Google</div>
        <img class="image" alt="Image" src="../assets/image-1.1.png" />
      </div>
      <div class="anleitung-2">
        <p class="p">DeepMind framework offers breakthrough in LLMs’ reasoning</p>
        <div class="text-wrapper-2">Deepmind</div>
        <img class="img" alt="Image" src="../assets/image-2.1.png" />
      </div>
      <div class="anleitung-3">
        <p class="text-wrapper-3">The UK is outpacing the US for AI hiring</p>
        <div class="text-wrapper-2">The UK</div>
        <img class="image-2" alt="Image" src="../assets/image-3.1.png" />
      </div>
      <div class="page-heading">
        <img class="divider" alt="Divider" src="divider.svg" />
        <div class="default-chip">
          <div class="text-wrapper-4">Default</div>
        </div>
        <div class="a-z-chip">
          <div class="text-wrapper-5">A-Z</div>
        </div>
        <div class="list-chip">
          <div class="text-wrapper-6">Kategorie</div>
        </div>
        <div class="text-wrapper-7">Weitere-News</div>
      </div>
      <div class="navigation">
        <div class="cart-button">
          <div class="text-wrapper-8">Aktualisieren</div>
        </div>
        <div class="text-wrapper-9">AI-NewsHub</div>
        <div class="text-wrapper-10">Weitere News</div>
        <router-link to="/"><div class="text-wrapper-11">Startseite</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Kategorien",
};
</script>

<style>
.kategorien {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.kategorien .div {
  background-color: #ffffff;
  height: 1024px;
  position: relative;
  width: 1440px;
}

.kategorien .anleitung {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 444px;
  left: 949px;
  overflow: hidden;
  position: absolute;
  top: 317px;
  width: 395px;
}

.kategorien .text-wrapper {
  color: #1000c9;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 24px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 348px;
  width: 348px;
}

.kategorien .text-wrapper-2 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 24px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 318px;
  white-space: nowrap;
}

.kategorien .image {
  height: 299px;
  left: 0;
  position: absolute;
  top: 0;
  width: 395px;
}

.kategorien .anleitung-2 {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 444px;
  left: 522px;
  overflow: hidden;
  position: absolute;
  top: 317px;
  width: 395px;
}

.kategorien .p {
  color: #1000c9;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 24px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 348px;
  width: 310px;
}

.kategorien .img {
  height: 292px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 395px;
}

.kategorien .anleitung-3 {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 444px;
  left: 95px;
  overflow: hidden;
  position: absolute;
  top: 317px;
  width: 395px;
}

.kategorien .text-wrapper-3 {
  color: #1000c9;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 24px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 348px;
  width: 351px;
}

.kategorien .image-2 {
  height: 291px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 395px;
}

.kategorien .page-heading {
  background-color: #ffffff;
  height: 149px;
  left: 0;
  position: absolute;
  top: 112px;
  width: 1440px;
}

.kategorien .divider {
  height: 2px;
  left: 92px;
  object-fit: cover;
  position: absolute;
  top: 147px;
  width: 1256px;
}

.kategorien .default-chip {
  background-color: #1000c9;
  border-radius: 20px;
  height: 40px;
  left: 1077px;
  overflow: hidden;
  position: absolute;
  top: 76px;
  width: 88px;
}

.kategorien .text-wrapper-4 {
  color: #ffffff;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 21px;
  left: 16px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 8px;
  white-space: nowrap;
}

.kategorien .a-z-chip {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #c2c2c2;
  border-radius: 20px;
  height: 40px;
  left: 1173px;
  overflow: hidden;
  position: absolute;
  top: 76px;
  width: 62px;
}

.kategorien .text-wrapper-5 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 21px;
  left: 16px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 8px;
  white-space: nowrap;
}

.kategorien .list-chip {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #c2c2c2;
  border-radius: 20px;
  height: 40px;
  left: 1243px;
  overflow: hidden;
  position: absolute;
  top: 76px;
  width: 101px;
}

.kategorien .text-wrapper-6 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 21px;
  left: 12px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 8px;
  white-space: nowrap;
}

.kategorien .text-wrapper-7 {
  color: #000000;
  font-family: "Newsreader-Regular", Helvetica;
  font-size: 64px;
  font-weight: 400;
  height: 77px;
  left: 96px;
  letter-spacing: -1.28px;
  line-height: 76.8px;
  position: absolute;
  top: 55px;
  white-space: nowrap;
}

.kategorien .navigation {
  height: 112px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.kategorien .cart-button {
  background-color: #1000c9;
  border-radius: 8px;
  height: 48px;
  left: 1218px;
  overflow: hidden;
  position: absolute;
  top: 32px;
  width: 126px;
}

.kategorien .text-wrapper-8 {
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

.kategorien .text-wrapper-9 {
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

.kategorien .text-wrapper-10 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 21px;
  left: 1081px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 46px;
  white-space: nowrap;
}

.kategorien .text-wrapper-11 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 21px;
  left: 983px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 45px;
  white-space: nowrap;
}
</style>