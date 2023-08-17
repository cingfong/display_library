<template>
  <div>
    <header><h1>silk-smooth-scroll</h1></header>
    <div class="silk-setting">
      <p style="justify-content: center; font-size: 20px">Options</p>
      <div class="setting-item-wrap">
        <p>speed</p>
        <input type="number" v-model="setting.speed" />
      </div>
      <div class="setting-item-wrap">
        <p>transform</p>
        <select v-model="setting.transform">
          <option v-for="val in transformList" :key="val">{{ val }}</option>
        </select>
      </div>
      <div class="setting-item-wrap justify-end">
        <p>align</p>
        <input type="checkbox" style="width: 20px" v-model="setting.align" />
      </div>
      <div class="setting-item-wrap">
        <p>alignHeight</p>
        <input type="text" v-model="setting.alignHeight" />
      </div>
      <div class="setting-item-wrap justify-end">
        <p>direction</p>
        <input
          type="checkbox"
          style="width: 20px"
          v-model="setting.direction"
        />
      </div>
      <div
        class="setting-item-wrap"
        v-for="(titleItem, index) in titleList"
        :key="`titleItem-${index}`"
      >
        <p>title{{ index + 1 }}</p>
        <input type="text" style="width: 40px" v-model="titleItem.number" />
        <input type="text" style="width: 100px" v-model="titleItem.text" />
      </div>
      <div class="run" style="margin-top: 5px">
        <div class="button" @click="run">run</div>
      </div>
    </div>
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
      silkList: ["A", "B", "C", "D", "E"],
      setting: {
        speed: 0,
        transform: "linear",
        align: true,
        alignHeight: 300,
        direction: false,
      },
      titleList: [
        { number: "", text: "" },
        { number: 1.1, text: "title first" },
        { number: 1.2, text: "title second" },
        { number: 1.3, text: "title third" },
        { number: 1.4, text: "title fourth" },
      ],
      transformList: ["ease", "ease-in", "ease-out", "ease-in-out", "linear"],
    };
  },
  beforeDestroy() {
    silkSmooth.remove();
  },
  mounted() {
    this.silkInit();
  },
  methods: {
    silkInit() {
      silkSmooth.init({
        titleClassName: "silk-smooth-title",
        speed: this.setting.speed,
        transformFunction: this.setting.transform ?? null,
        align: this.setting.align ?? null,
        alignHeight: this.setting.alignHeight ?? null,
        direction: this.setting.direction ?? null,
        titleList: this.titleList,
      });
    },
    run() {
      silkSmooth.remove();
      this.silkInit();
    },
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
  background: linear-gradient(#7b2328, #171568);
}
.silk-setting {
  position: fixed;
  width: 220px;
  height: 380px;
  background-color: white;
  right: 20px;
  bottom: 20px;
  z-index: 999;
  padding: 5px;
}
.setting-item-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.silk-setting p {
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin: 5px 0px;
}
.silk-setting input {
  width: 100px;
  height: 20px;
  margin: 0px 10px;
}
.silk-setting select {
  width: 100px;
  height: 20px;
  margin: 0px 10px;
}
.run {
  display: flex;
  justify-content: center;
}
.button {
  display: inline-block;
  width: 30px;
  text-align: center;
  background-color: red;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  cursor: pointer;
}
</style>
