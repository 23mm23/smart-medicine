<template>
	<div class="diy_list page_disease_information" id="disease_information_list">
		<div class="warp">
			<div class="container diy_list_container">
				<div class="diy_list_title">
					<div class="col">
						<span class="title">疾病信息列表</span>
					</div>
				</div>
				<div class="leis_box"> 
				<div class="iudis_box">
			
				<div class="row diy_list_search">
					<div class="col">
						<!-- 搜索栏 -->
						<div class="view Search">
							<span class="diy_list_search_title">关键字搜索：</span>
																																												<b-form-input size="sm" class="mr-sm-2" placeholder="疾病名称搜索" v-model="query['name_of_disease']" />
																																														<b-form-input size="sm" class="mr-sm-2" placeholder="疾病分类搜索" v-model="query['classification_of_diseases']" />
																																																											<b-form-input size="sm" class="mr-sm-2" placeholder="疾病原因搜索" v-model="query['cause_of_disease']" />
																																																																									<b-button size="sm" @click="search()" >
								<b-icon icon="search"/>
							</b-button>
						</div>
						<!-- /搜索栏 -->
					</div>
				</div>
				<div class="diy_list_select_box">
					<span class="diy_list_select_title">下拉搜索：</span>
						<div class="diy_list_dropdown_box">
						<div class="col">
							<!-- 筛选 -->
							<div class="view sift">
																<b-dropdown text="疾病分类" variant="outline-dark" left>
									<b-dropdown-item @click="filter_set('全部','classification_of_diseases')">全部</b-dropdown-item>
										<b-dropdown-item v-for="(o, i) in list_classification_of_diseases" :key="i" @click="filter_set(o['classification_of_diseases'],'classification_of_diseases')" >
												{{ o['classification_of_diseases'] }}
										</b-dropdown-item>
								</b-dropdown>
																			<!-- 排序 -->
							
								<b-dropdown text="排序" variant="outline-dark" left>
										<b-dropdown-item v-for="(o, i) in list_sort" :key="i" @click="set_sort(o)" >
												{{ o.name }}
										</b-dropdown-item>
								</b-dropdown>
						
							<!--/排序 -->
							</div>
							<!-- /筛选 -->
						</div>
					</div>
				
				</div>
							</div>
				<div class="row diy_list_box">
					<div class="col">
						<!-- 列表 -->
												<list_disease_information :list="list" />
												<!-- /列表 -->
					</div>
				</div>
	</div>
	<!-- 大盒子结尾 -->
				<div class="row diy_list_page_box">
					<div class="col overflow-auto flex_cc">
						<!-- 分页器 -->
<!--						<diy_pager v-model="query['page']" :size="query['size']" :count="count" v-on:toPage="toPage" v-on:toSize="toSize" ></diy_pager>-->
            <b-pagination
                v-model="query.page"
                :total-rows="count"
                :per-page="query.size"
                @change="goToPage"
            />
						<!-- /分页器 -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import list_disease_information from "@/components/diy/list_disease_information.vue";
	import diy_pager from "@/components/diy/diy_pager";
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		components: {
			diy_pager,
			list_disease_information,
		},
		data() {
			return {
				url_get_list: "~/api/disease_information/get_list?like=0",

				// 查询条件
				query: {
					keyword: "",
					page: 1,
					size: 12,
									"name_of_disease": "", // 疾病名称
											"classification_of_diseases": "", // 疾病分类
												"cause_of_disease": "", // 疾病原因
										},
				// 排序内容
				list_sort: [{
						name: "创建时间从高到低",
						value: "create_time desc",
					},
					{
						name: "创建时间从低到高",
						value: "create_time asc",
					},
					{
						name: "更新时间从高到低",
						value: "update_time desc",
					},
					{
						name: "更新时间从低到高",
						value: "update_time asc",
					},
												],

									// 疾病分类列表
				"list_classification_of_diseases": [""],
												
			}
		},
		methods: {
      get_list_before(param) {
      },
			/**
			 * 筛选选择
			 */
			filter_set(o,key) {
			    if (o == "全部") {
			        this.query[key] = "";
			    } else {
			        this.query[key] = o;
			    }
			    this.search();
			},

			/**
			 * 排序
			 */
			set_sort(o) {
			    this.query.orderby = o.value;
			    this.search();
			},
						/**
			 * 获取疾病分类列表
			 */
			async get_list_classification_of_diseases() {
				var json = await this.$get("~/api/classification_of_diseases/get_list?");
				if (json.result) {
					this.list_classification_of_diseases = json.result.list;
				} else if (json.error) {
					console.log(json.error);
				}
			},
									/**
			 * 筛选
			 */
													filter_classification_of_diseases(o) {
				if (o == "全部") {
					this.query["classification_of_diseases"] = "";
				} else {
					this.query["classification_of_diseases"] = o;
				}
				this.search();
			},
																		/**
			 * 重置
			 */
			reset() {
								this.query.name_of_disease = ""
										this.query.classification_of_diseases = ""
											this.query.cause_of_disease = ""
										this.search();
			},

			// 返回条数
			toSize(i){
				this.query.size = i;
				this.first();
			},

			// 返回页数
			toPage(i){
				this.query.page = i;
				this.first();
			},

      goToPage(v){
        this.query.page = v;
        this.goToNew(v)
      },

		},
		computed: {
		},
		created() {
								/**
			 * 获取疾病分类列表
			 */
			this.get_list_classification_of_diseases();
														}
	}
</script>

<style>
.el-date-editor--datetimerange.el-input, .el-date-editor--datetimerange.el-input__inner,.el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner{
	width: 100%;
}
.el-date-editor .el-range-separator{
	width: 11% !important;
}
</style>
