<template>
  <div class="news">
    <div class="div">
      <div v-for="(article, index) in articles" :key="index" class="aufgabe">
        <div class="text-wrapper">{{ formatDate(article.publishedAt) }}</div>
        <div class="text-wrapper-2">{{ article.title }}</div>
        <img :src="article.urlToImage" alt="Article Image" class="image" v-if="article.urlToImage">
        <p class="lorem-ipsum-dolor">
  {{ article.content }} Um weiter zu lesen, drücken Sie hier:
  <a :href="article.url" target="_blank">{{ article.url }}</a>
</p>
      </div>
      <div class="page-heading">
        <img class="divider" alt="Divider" src="divider.svg" />
        <div class="frame">
          <div class="div-wrapper">
            <div class="div-wrapper">
              <div class="text-wrapper-3">Erweiterte Ansicht</div>
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
  data() {
    return {
      articles: [],
      apiKey: '5795fd86e37447b49d185678d64c7364',
    };
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=copilot&apiKey=${this.apiKey}`
        );
        const data = await response.json();
        this.articles = data.articles;
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric'};
      return new Date(dateString).toLocaleDateString('en-US', options);
    },
    limitTitle(title) {
      const words = title.split(' ');
      const limitedTitle = words.slice(0, 3).join(' ');
      return limitedTitle;
    },
  },
};
</script>

<style>

.news .image {
  position: absolute;
  top: 200px;
  left: 42px; /* Adjust the left position based on your design */
  width: 750px; /* Set a fixed width or adjust based on your design */
  height: auto; /* Maintain aspect ratio */
  border-radius: 16px; /* Optional: Add border-radius for a rounded look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow */
}

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
