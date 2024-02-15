<template>
  <div class="news">
    <div class="div">
      <div class="aufgabe">
        <div class="text-wrapper">February 13, 2024</div>
        <div class="text-wrapper-2">OpenAI</div>
        <p class="lorem-ipsum-dolor">
          OpenAI has begun rolling out memory capabilities to a select number of ChatGPT users this week. Memory will allow the conversational agent to recall details from previous chats in order to provide more personalised and contextually relevant responses. 

According to OpenAI, ChatGPT’s memory will improve over time as users interact with it more. For example, ChatGPT could remember a user’s preferred meeting note format, tailor birthday card suggestions based on a user mentioning their child’s interests, or apply a user’s chosen tone and voice when drafting blog posts without needing to be told repeatedly.

Users remain in control of ChatGPT’s memory and can turn it off completely if desired. They can also selectively delete memories or clear all memories through ChatGPT’s settings. OpenAI states that memories evolve based on interactions and are not tied to specific conversations.
        </p>
      </div>
      <div class="page-heading">
        <img class="divider" alt="Divider" src="divider.svg" />
        <div class="frame">
          <div class="div-wrapper">
            <div class="div-wrapper">
              <div class="text-wrapper-3">OpenAI rolls out ChatGPT memory to select users</div>
            </div>
          </div>
        </div>
      </div>
      <div class="navigation">
        <div class="cart-button">
          <div class="frame-2">
            <div class="text-wrapper-4">Aktualisieren</div>
          </div>
        </div>
        <div class="text-wrapper-5">AI-News-Hub</div>
        <div class="text-wrapper-6">Weitere News</div>
        <div class="text-wrapper-7">Startseite</div>
        <router-link to="/aufträge"><div class="text-wrapper-6">Weitere News</div></router-link>
        <router-link to="/"><div class="text-wrapper-7">Startseite</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
};
</script>

<style>
.news {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.news .div {
  background-color: #ffffff;
  height: 1024px;
  position: relative;
  width: 1440px;
}

.news .aufgabe {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 671px;
  left: 96px;
  overflow: hidden;
  position: absolute;
  top: 301px;
  width: 1248px;
}

.news .text-wrapper {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 1019px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  text-align: right;
  top: 22px;
  white-space: nowrap;
}

.news .text-wrapper-2 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 39px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 22px;
  white-space: nowrap;
}

.news .lorem-ipsum-dolor {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 42px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 70px;
  width: 961px;
}

.news .page-heading {
  background-color: #ffffff;
  height: 149px;
  left: 0;
  position: absolute;
  top: 112px;
  width: 1440px;
}

.news .divider {
  height: 2px;
  left: 92px;
  object-fit: cover;
  position: absolute;
  top: 147px;
  width: 1256px;
}

.news .frame {
  align-items: center;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  left: 86px;
  padding: 10px;
  position: absolute;
  top: 46px;
}

.news .div-wrapper {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
}

.news .text-wrapper-3 {
  color: #000000;
  font-family: "Newsreader-Regular", Helvetica;
  font-size: 64px;
  font-weight: 400;
  letter-spacing: -1.28px;
  line-height: 76.8px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.news .navigation {
  height: 112px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.news .cart-button {
  background-color: #1000c9;
  border-radius: 8px;
  height: 48px;
  left: 1218px;
  overflow: hidden;
  position: absolute;
  top: 32px;
  width: 126px;
}

.news .frame-2 {
  align-items: center;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  left: 5px;
  padding: 10px;
  position: relative;
  top: 4px;
}

.news .text-wrapper-4 {
  color: #ffffff;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20.8px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.news .text-wrapper-5 {
  color: #1000c9;
  font-family: "Newsreader-Medium", Helvetica;
  font-size: 32px;
  font-weight: 500;
  left: 91px;
  letter-spacing: -0.32px;
  line-height: 32px;
  position: absolute;
  top: 40px;
  white-space: nowrap;
}

.news .text-wrapper-6 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 21px;
  left: 1077px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 46px;
  white-space: nowrap;
}

.news .text-wrapper-7 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 21px;
  left: 979px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 45px;
  white-space: nowrap;
}

</style>
