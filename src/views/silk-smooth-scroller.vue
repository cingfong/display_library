<template>
  <div>
    <header><h1>silk-smooth-scroll</h1></header>
    <div id="silk-smooth">
      <div
        v-for="(item, index) in silkList"
        :key="index"
        class="container"
        :class="`container${index + 1}`"
      >
        {{ item }}
      </div>
    </div>
    <footer><h1>footer</h1></footer>
  </div>
</template>
<script>
import silkSmooth from "silk-smooth-scroll";

export default {
  data() {
    return {
      silkList: [],
    };
  },
  watch: {
    silkList: function () {
      const _title = [
        {},
        { number: 1.1, text: "title first" },
        { number: 1.2, text: "title second" },
        { number: 1.3, text: "title third" },
        { number: 1.4, text: "title fourth" },
      ];
      setTimeout(() => {
        silkSmooth.init({
          titleClassName: "silk-smooth-title",
          titleList: _title,
        });
      }, 0);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.silkList = ["A", "B", "C", "D", "E"];
    });
  },
};
</script>

<style scoped>
h1 {
  margin: 0px;
  padding: 0px;
  font-size: 40px;
  height: 200px;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  color: white;
  height: 100%;
  font-size: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container1 {
  background: linear-gradient(#f2f3ae, #edd382);
}

.container2 {
  background: linear-gradient(#f5b969, #f9ac5c);
}

.container3 {
  background: linear-gradient(#fc9e4f, #f8713f);
}

.container4 {
  background: linear-gradient(#f65b37, #f4442e);
}

.container5 {
  background: linear-gradient(#7b2328, #020122);
}
</style>
