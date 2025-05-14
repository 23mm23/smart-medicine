<template>
	<div class="page_user" id="user_address">
		<div class="warp">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-12 col-md-3">
						<div class="card_menu">
							<!-- 左侧边栏 -->
							<list_admin_menu_user></list_admin_menu_user>
						</div>
					</div>
					<div class="col-12 col-md-9">
						<div class="card_addres pl-2">
							<!-- 疾病分类 -->
							<div><span>疾病分类</span></div>
							<view_classification_of_diseases v-if="$check_action('/classification_of_diseases/view','get')"></view_classification_of_diseases>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import list_admin_menu_user from "@/components/diy/list_admin_menu_user.vue";
	import view_classification_of_diseases from "../../components/diy/view_classification_of_diseases.vue";
	export default {
		data() {
			return {
			};
		},
		mounted() {
		},
		methods: {
		},
		components: {
			list_admin_menu_user,
			view_classification_of_diseases,
		},
	};
</script>

<style scoped>
	.container {
		min-height: 800px;
	}
</style>
