<template>
  <div class="startseite">
    <div class="div">
      <div class="overlap-group">
        <router-link v-for="(article, index) in articles" :key="index" :to="'/news/' + index">
          <div class="newsblock">
            <img :src="article.urlToImage" alt="Article Image" class="image" v-if="article.urlToImage">
            <div class="text-wrapper">{{ article.description }}</div>
            <div class="text-wrapper-2">{{ formatDate(article.publishedAt) }}</div>
            <div class="text-wrapper-3">{{ limitTitle(article.title) }}</div>
          </div>
        </router-link>
      </div>
      <header class="header">
        <div class="cart-button" @click="fetchNews">
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
      articles: [],
      apiKey: 'f7a697a8679341659ea7e9ff0f63a454',
    };
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=ai&apiKey=${this.apiKey}`);
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
.startseite {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.div {
  width: 80%; /* Adjust as needed */
}

.overlap-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.newsblock {
  width: calc(50% - 10px);
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}

.text-wrapper {
  font-size: 14px;
  margin-bottom: 5px;
}

.text-wrapper-2, .text-wrapper-3 {
  font-size: 12px;
  color: #666;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.cart-button, .text-wrapper-6, .text-wrapper-7, .text-wrapper-8 {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cart-button:hover, .text-wrapper-6:hover {
  background-color: #0056b3;
}

.text-wrapper-5 {
  font-size: 14px;
}

.text-wrapper-6, .text-wrapper-7, .text-wrapper-8 {
  font-size: 16px;
}

.router-link-exact-active {
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .newsblock {
    width: 100%;
  }
}
</style>
