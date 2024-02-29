<template>
  <div class="startseite">
    <div class="div">
      <div class="overlap-group">
        <router-link to="/news"><div v-for="(article, index) in articles1" :key="index" class="aufgabe">
           <img :src="article.urlToImage" alt="Article Image" class="image" v-if="article.urlToImage">
          <div class="text-wrapper">{{ article.description }}</div>
          <div class="text-wrapper-2">{{ formatDate(article.publishedAt) }}</div>
          <div class="text-wrapper-3">{{ limitTitle(article.title) }}</div>
        </div></router-link>
        <router-link to="/news2"><div v-for="(article, index) in articles2" :key="index" class="aufgabe-2">
           <img :src="article.urlToImage" alt="Article Image" class="image" v-if="article.urlToImage">
          <div class="text-wrapper">{{ article.description }}</div>
          <div class="text-wrapper-2">{{ formatDate(article.publishedAt) }}</div>
          <div class="text-wrapper-3">{{ limitTitle(article.title) }}</div>
        </div></router-link>
        <router-link to="/news3"><div v-for="(article, index) in articles3" :key="index" class="aufgabe-3">
           <img :src="article.urlToImage" alt="Article Image" class="image" v-if="article.urlToImage">
          <div class="text-wrapper">{{ article.description }}</div>
          <div class="text-wrapper-2">{{ formatDate(article.publishedAt) }}</div>
          <div class="text-wrapper-3">{{ limitTitle(article.title) }}</div>
        </div></router-link>
        <router-link to="/news4"><div v-for="(article, index) in articles4" :key="index" class="aufgabe-4">
           <img :src="article.urlToImage" alt="Article Image" class="image" v-if="article.urlToImage">
          <div class="text-wrapper">{{ article.description }}</div>
          <div class="text-wrapper-2">{{ formatDate(article.publishedAt) }}</div>
          <div class="text-wrapper-3">{{ limitTitle(article.title) }}</div>
        </div></router-link>
        <router-link to="/news5"><div v-for="(article, index) in articles5" :key="index" class="aufgabe-5">
           <img :src="article.urlToImage" alt="Article Image" class="image" v-if="article.urlToImage">
          <div class="text-wrapper">{{ article.description }}</div>
          <div class="text-wrapper-2">{{ formatDate(article.publishedAt) }}</div>
          <div class="text-wrapper-3">{{ limitTitle(article.title) }}</div>
        </div></router-link>
        <router-link to="/news6"><div v-for="(article, index) in articles6" :key="index" class="aufgabe-6">
           <img :src="article.urlToImage" alt="Article Image" class="image" v-if="article.urlToImage">
          <div class="text-wrapper">{{ article.description }}</div>
          <div class="text-wrapper-2">{{ formatDate(article.publishedAt) }}</div>
          <div class="text-wrapper-3">{{ limitTitle(article.title) }}</div>
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
  data() {
    return {
      articles1: [],
      articles2: [],
      articles3: [],
      articles4: [],
      articles5: [],
      articles6: [],
      apiKey: 'ca7b858168a8498d9738ff5342b8d7cf',
    };
  },
  mounted() {
    this.fetchNews();
    this.fetchNewsForBlock(2); // Zweiter Block
    this.fetchNewsForBlock(3); // Dritter Block
    this.fetchNewsForBlock(4); // Vierter Block
    this.fetchNewsForBlock(5); // Fünfter Block
    this.fetchNewsForBlock(6); // Sechster Block
  },
  methods: {
    async fetchNews() {
      await this.fetchNewsForBlock(1); // Erster Block
    },
    async fetchNewsForBlock(blockNumber) {
      try {
        const query = this.getQueryForBlock(blockNumber);
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=${this.apiKey}`
        );
        const data = await response.json();
        const articles = `articles${blockNumber}`;
        this[articles] = data.articles.map((article) => ({
          ...article,
          cssClass: article.title.length > 50 ? 'long-title' : 'short-title',
        }));
      } catch (error) {
        console.error(`Error fetching news for block ${blockNumber}:`, error);
      }
    },
    getQueryForBlock(blockNumber) {
      // Hier können Sie die Abfrage je nach Blocknummer anpassen
      switch (blockNumber) {
        case 1:
          return 'ainews';
        case 2:
          return 'ai';
        case 3:
          return 'artificial';
        case 4:
          return 'technology';
        case 5:
          return 'openai';
        case 6:
          return 'gemini';
        default:
          return 'copilot';
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
    getArticleClass(index, blockNumber) {
      const articles = `articles${blockNumber}`;
      return this[articles][index].cssClass;
    },
  },
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
