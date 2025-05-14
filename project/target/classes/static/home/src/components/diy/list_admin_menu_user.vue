<template>
  <div class="list_menu diy_menu">
    <router-link
            to="/user_center/index"
            class="menu_item"
            :class="{ selected: this.$route.path=== '/user_center/index'}"
     >
      <span class="left_span">个人首页</span>
      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
    </router-link>
          <router-link
          to="/physician_user/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/physician_user/table'}"
          v-if="$check_action('/physician_user/table','get')">
        <span class="left_span">医师用户</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
              <router-link
          to="/ordinary_user/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/ordinary_user/table'}"
          v-if="$check_action('/ordinary_user/table','get')">
        <span class="left_span">普通用户</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
              <router-link
          to="/physician_information/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/physician_information/table'}"
          v-if="$check_action('/physician_information/table','get')">
        <span class="left_span">医师信息</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
              <router-link
          to="/appointment_registration/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/appointment_registration/table'}"
          v-if="$check_action('/appointment_registration/table','get')">
        <span class="left_span">预约挂号</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
              <router-link
          to="/prescription_information/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/prescription_information/table'}"
          v-if="$check_action('/prescription_information/table','get')">
        <span class="left_span">开药信息</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
              <router-link
          to="/admission_information/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/admission_information/table'}"
          v-if="$check_action('/admission_information/table','get')">
        <span class="left_span">入院信息</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
              <router-link
          to="/classification_of_diseases/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/classification_of_diseases/table'}"
          v-if="$check_action('/classification_of_diseases/table','get')">
        <span class="left_span">疾病分类</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
              <router-link
          to="/disease_information/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/disease_information/table'}"
          v-if="$check_action('/disease_information/table','get')">
        <span class="left_span">疾病信息</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
              <router-link
          to="/drug_information/table"
          class="menu_item"
          :class="{ selected: this.$route.path=== '/drug_information/table'}"
          v-if="$check_action('/drug_information/table','get')">
        <span class="left_span">药品信息</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
          <router-link
              to="/message/table"
              class="menu_item"
              :class="{ selected: this.$route.path=== '/message/table'}"
              v-if="$check_action('/message/table','get')">
        <span class="left_span">{{$page_title("/message/table") || "用户反馈"}}</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
      </router-link>
  <router-link
              to="/user/collect"
              class="menu_item"
              :class="{ selected: this.$route.path=== '/user/collect'}"
              v-if="$check_action('/collect/list','get')">
        <span class="left_span">收藏</span>
        <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
  </router-link>
	<router-link
	            to="/comment/table"
	            class="menu_item"
	            :class="{ selected: this.$route.path=== '/comment/table'}"
	            v-if="$check_action('/comment/table','get')">
	      <span class="left_span">评论管理</span>
	      <span class="right_span"><b-icon icon="house-fill"></b-icon></span>
	</router-link>
  </div>
</template>

<script>
import mixin from "@/mixins/page.js";
export default {
  mixins: [mixin],
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },

  components: {
  },
};
</script>

<style scoped>
.list_menu {
  flex: 0 0 25%;
  border-bottom: 1px solid #eee;
}
.menu_item {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border: 1px solid #eee;
  border-bottom: none;
  background-color: #fff;
}
.menu_item.selected {
  background-color: #000;
}
.menu_item.selected span {
  color: #fff ;
}
.content {
  flex: 0 0 74%;
}
</style>
