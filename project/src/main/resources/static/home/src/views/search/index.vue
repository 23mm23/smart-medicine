<template>
  <div class="page_search search_index">
	<div class="warp">
	  <div class="container">
		<div class="row">
		  <div class="col-12">
			<div class="card_result_search">
			  <div class="title">搜索结果</div>

				<!-- 文章搜索结果 -->
			  <list_result_search
				:list="result_article"
				title="新闻资讯"
				source_table="article"
			  ></list_result_search>


						  <list_result_search
				v-if="$check_action('/physician_user/list', 'get')"
				:list="result_physician_user_doctors_name"
				title="医师用户医师姓名"
				source_table="physician_user"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/ordinary_user/list', 'get')"
				:list="result_ordinary_user_user_name"
				title="普通用户用户姓名"
				source_table="ordinary_user"
			  ></list_result_search>
																		  <list_result_search
				v-if="$check_action('/physician_information/list', 'get')"
				:list="result_physician_information_doctors_name"
				title="医师信息医师姓名"
				source_table="physician_information"
			  ></list_result_search>
														  <list_result_search
				v-if="$check_action('/physician_information/list', 'get')"
				:list="result_physician_information_specializes_in_specific_fields"
				title="医师信息擅长领域"
				source_table="physician_information"
			  ></list_result_search>
																		  <list_result_search
				v-if="$check_action('/appointment_registration/list', 'get')"
				:list="result_appointment_registration_doctors_name"
				title="预约挂号医师姓名"
				source_table="appointment_registration"
			  ></list_result_search>
																	  <list_result_search
				v-if="$check_action('/appointment_registration/list', 'get')"
				:list="result_appointment_registration_user_name"
				title="预约挂号用户姓名"
				source_table="appointment_registration"
			  ></list_result_search>
																		  <list_result_search
				v-if="$check_action('/prescription_information/list', 'get')"
				:list="result_prescription_information_doctors_name"
				title="开药信息医师姓名"
				source_table="prescription_information"
			  ></list_result_search>
											  <list_result_search
				v-if="$check_action('/prescription_information/list', 'get')"
				:list="result_prescription_information_user_name"
				title="开药信息用户姓名"
				source_table="prescription_information"
			  ></list_result_search>
																					  <list_result_search
				v-if="$check_action('/admission_information/list', 'get')"
				:list="result_admission_information_doctors_name"
				title="入院信息医师姓名"
				source_table="admission_information"
			  ></list_result_search>
																	  <list_result_search
				v-if="$check_action('/admission_information/list', 'get')"
				:list="result_admission_information_user_name"
				title="入院信息用户姓名"
				source_table="admission_information"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/classification_of_diseases/list', 'get')"
				:list="result_classification_of_diseases_classification_of_diseases"
				title="疾病分类疾病分类"
				source_table="classification_of_diseases"
			  ></list_result_search>
												  <list_result_search
				v-if="$check_action('/disease_information/list', 'get')"
				:list="result_disease_information_name_of_disease"
				title="疾病信息疾病名称"
				source_table="disease_information"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/disease_information/list', 'get')"
				:list="result_disease_information_classification_of_diseases"
				title="疾病信息疾病分类"
				source_table="disease_information"
			  ></list_result_search>
											  <list_result_search
				v-if="$check_action('/disease_information/list', 'get')"
				:list="result_disease_information_cause_of_disease"
				title="疾病信息疾病原因"
				source_table="disease_information"
			  ></list_result_search>
																					  <list_result_search
				v-if="$check_action('/drug_information/list', 'get')"
				:list="result_drug_information_drug_name"
				title="药品信息药品名称"
				source_table="drug_information"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/drug_information/list', 'get')"
				:list="result_drug_information_type_of_drug"
				title="药品信息药品类型"
				source_table="drug_information"
			  ></list_result_search>
																								</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</template>

<script>
import mixin from "../../mixins/page.js";
import list_result_search from "../../components/diy/list_result_search.vue";

export default {
  mixins: [mixin],
  data() {
	return {
	  "query": {
		word: "",
	  },
	  "result_article": [],
						"result_physician_user_doctors_name":[],
															"result_ordinary_user_user_name":[],
																		"result_physician_information_doctors_name":[],
														"result_physician_information_specializes_in_specific_fields":[],
																		"result_appointment_registration_doctors_name":[],
																	"result_appointment_registration_user_name":[],
																		"result_prescription_information_doctors_name":[],
											"result_prescription_information_user_name":[],
																					"result_admission_information_doctors_name":[],
																	"result_admission_information_user_name":[],
															"result_classification_of_diseases_classification_of_diseases":[],
												"result_disease_information_name_of_disease":[],
								"result_disease_information_classification_of_diseases":[],
											"result_disease_information_cause_of_disease":[],
																					"result_drug_information_drug_name":[],
								"result_drug_information_type_of_drug":[],
																						};
  },
  methods: {
	/**
	 * 获取文章
	 */
	get_article() {
	  this.$get("~/api/article/get_list?like=0", { page: 1, size: 10, title: this.query.word }, (json) => {
		if (json.result) {
		  this.result_article = json.result.list;
		}
	  });
	},

				/**
	 * 获取doctors_name
	 */
	get_physician_user_doctors_name(){
		let url = "~/api/physician_user/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "doctors_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_physician_user_doctors_name = json.result.list;
			result_physician_user_doctors_name.map(o => o.title = o['doctors_name'])
	  			this.result_physician_user_doctors_name = result_physician_user_doctors_name
		 	}
		});
	},
													/**
	 * 获取user_name
	 */
	get_ordinary_user_user_name(){
		let url = "~/api/ordinary_user/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_ordinary_user_user_name = json.result.list;
			result_ordinary_user_user_name.map(o => o.title = o['user_name'])
	  			this.result_ordinary_user_user_name = result_ordinary_user_user_name
		 	}
		});
	},
																/**
	 * 获取doctors_name
	 */
	get_physician_information_doctors_name(){
		let url = "~/api/physician_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "doctors_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_physician_information_doctors_name = json.result.list;
			result_physician_information_doctors_name.map(o => o.title = o['doctors_name'])
	  			this.result_physician_information_doctors_name = result_physician_information_doctors_name
		 	}
		});
	},
												/**
	 * 获取specializes_in_specific_fields
	 */
	get_physician_information_specializes_in_specific_fields(){
		let url = "~/api/physician_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "specializes_in_specific_fields": this.query.word }, (json) => {
		  if (json.result) {
			var result_physician_information_specializes_in_specific_fields = json.result.list;
			result_physician_information_specializes_in_specific_fields.map(o => o.title = o['specializes_in_specific_fields'])
	  			this.result_physician_information_specializes_in_specific_fields = result_physician_information_specializes_in_specific_fields
		 	}
		});
	},
																/**
	 * 获取doctors_name
	 */
	get_appointment_registration_doctors_name(){
		let url = "~/api/appointment_registration/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "doctors_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_appointment_registration_doctors_name = json.result.list;
			result_appointment_registration_doctors_name.map(o => o.title = o['doctors_name'])
	  			this.result_appointment_registration_doctors_name = result_appointment_registration_doctors_name
		 	}
		});
	},
															/**
	 * 获取user_name
	 */
	get_appointment_registration_user_name(){
		let url = "~/api/appointment_registration/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_appointment_registration_user_name = json.result.list;
			result_appointment_registration_user_name.map(o => o.title = o['user_name'])
	  			this.result_appointment_registration_user_name = result_appointment_registration_user_name
		 	}
		});
	},
																/**
	 * 获取doctors_name
	 */
	get_prescription_information_doctors_name(){
		let url = "~/api/prescription_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "doctors_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_prescription_information_doctors_name = json.result.list;
			result_prescription_information_doctors_name.map(o => o.title = o['doctors_name'])
	  			this.result_prescription_information_doctors_name = result_prescription_information_doctors_name
		 	}
		});
	},
									/**
	 * 获取user_name
	 */
	get_prescription_information_user_name(){
		let url = "~/api/prescription_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_prescription_information_user_name = json.result.list;
			result_prescription_information_user_name.map(o => o.title = o['user_name'])
	  			this.result_prescription_information_user_name = result_prescription_information_user_name
		 	}
		});
	},
																			/**
	 * 获取doctors_name
	 */
	get_admission_information_doctors_name(){
		let url = "~/api/admission_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "doctors_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_admission_information_doctors_name = json.result.list;
			result_admission_information_doctors_name.map(o => o.title = o['doctors_name'])
	  			this.result_admission_information_doctors_name = result_admission_information_doctors_name
		 	}
		});
	},
															/**
	 * 获取user_name
	 */
	get_admission_information_user_name(){
		let url = "~/api/admission_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "user_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_admission_information_user_name = json.result.list;
			result_admission_information_user_name.map(o => o.title = o['user_name'])
	  			this.result_admission_information_user_name = result_admission_information_user_name
		 	}
		});
	},
													/**
	 * 获取classification_of_diseases
	 */
	get_classification_of_diseases_classification_of_diseases(){
		let url = "~/api/classification_of_diseases/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "classification_of_diseases": this.query.word }, (json) => {
		  if (json.result) {
			var result_classification_of_diseases_classification_of_diseases = json.result.list;
			result_classification_of_diseases_classification_of_diseases.map(o => o.title = o['classification_of_diseases'])
	  			this.result_classification_of_diseases_classification_of_diseases = result_classification_of_diseases_classification_of_diseases
		 	}
		});
	},
										/**
	 * 获取name_of_disease
	 */
	get_disease_information_name_of_disease(){
		let url = "~/api/disease_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "name_of_disease": this.query.word }, (json) => {
		  if (json.result) {
			var result_disease_information_name_of_disease = json.result.list;
			result_disease_information_name_of_disease.map(o => o.title = o['name_of_disease'])
	  			this.result_disease_information_name_of_disease = result_disease_information_name_of_disease
		 	}
		});
	},
						/**
	 * 获取classification_of_diseases
	 */
	get_disease_information_classification_of_diseases(){
		let url = "~/api/disease_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "classification_of_diseases": this.query.word }, (json) => {
		  if (json.result) {
			var result_disease_information_classification_of_diseases = json.result.list;
			result_disease_information_classification_of_diseases.map(o => o.title = o['classification_of_diseases'])
	  			this.result_disease_information_classification_of_diseases = result_disease_information_classification_of_diseases
		 	}
		});
	},
									/**
	 * 获取cause_of_disease
	 */
	get_disease_information_cause_of_disease(){
		let url = "~/api/disease_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "cause_of_disease": this.query.word }, (json) => {
		  if (json.result) {
			var result_disease_information_cause_of_disease = json.result.list;
			result_disease_information_cause_of_disease.map(o => o.title = o['cause_of_disease'])
	  			this.result_disease_information_cause_of_disease = result_disease_information_cause_of_disease
		 	}
		});
	},
																			/**
	 * 获取drug_name
	 */
	get_drug_information_drug_name(){
		let url = "~/api/drug_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "drug_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_drug_information_drug_name = json.result.list;
			result_drug_information_drug_name.map(o => o.title = o['drug_name'])
	  			this.result_drug_information_drug_name = result_drug_information_drug_name
		 	}
		});
	},
						/**
	 * 获取type_of_drug
	 */
	get_drug_information_type_of_drug(){
		let url = "~/api/drug_information/get_list?like=0";
				this.$get(url, { page: 1, size: 10, "type_of_drug": this.query.word }, (json) => {
		  if (json.result) {
			var result_drug_information_type_of_drug = json.result.list;
			result_drug_information_type_of_drug.map(o => o.title = o['type_of_drug'])
	  			this.result_drug_information_type_of_drug = result_drug_information_type_of_drug
		 	}
		});
	},
																					
  },
  components: { list_result_search },
	created(){
    this.query.word = this.$route.query.word || "";
  },
  mounted() {
	this.get_article();
					this.get_physician_user_doctors_name();
														this.get_ordinary_user_user_name();
																	this.get_physician_information_doctors_name();
													this.get_physician_information_specializes_in_specific_fields();
																	this.get_appointment_registration_doctors_name();
																this.get_appointment_registration_user_name();
																	this.get_prescription_information_doctors_name();
										this.get_prescription_information_user_name();
																				this.get_admission_information_doctors_name();
																this.get_admission_information_user_name();
														this.get_classification_of_diseases_classification_of_diseases();
											this.get_disease_information_name_of_disease();
							this.get_disease_information_classification_of_diseases();
										this.get_disease_information_cause_of_disease();
																				this.get_drug_information_drug_name();
							this.get_drug_information_type_of_drug();
																					  },
  watch: {
	$route() {
	  $.push(this.query, this.$route.query);
	  this.get_article();
				  this.get_physician_user_doctors_name();
													  this.get_ordinary_user_user_name();
																  this.get_physician_information_doctors_name();
												  this.get_physician_information_specializes_in_specific_fields();
																  this.get_appointment_registration_doctors_name();
															  this.get_appointment_registration_user_name();
																  this.get_prescription_information_doctors_name();
									  this.get_prescription_information_user_name();
																			  this.get_admission_information_doctors_name();
															  this.get_admission_information_user_name();
													  this.get_classification_of_diseases_classification_of_diseases();
										  this.get_disease_information_name_of_disease();
						  this.get_disease_information_classification_of_diseases();
									  this.get_disease_information_cause_of_disease();
																			  this.get_drug_information_drug_name();
						  this.get_drug_information_type_of_drug();
																						},
  },
};
</script>

<style scoped>
.card_search {
  text-align: center;
}
.card_result_search>.title {
  text-align: center;
  padding: 10px 0;
}
</style>
