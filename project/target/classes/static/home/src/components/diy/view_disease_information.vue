<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce">
							<el-col v-if="$check_field('get','physician_user') || $check_field('add','physician_user') || $check_field('set','physician_user')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="医师用户" prop="physician_user">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_physician_user(form['physician_user']) }}
							<el-select v-if="(form['disease_information_id'] && $check_field('set','physician_user')) || (!form['disease_information_id'] && $check_field('add','physician_user'))" id="physician_user" v-model="form['physician_user']" :disabled="disabledObj['physician_user_isDisabled']">
								<el-option v-for="o in list_user_physician_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
							<el-select v-else-if="$check_field('get','physician_user')" id="physician_user" v-model="form['physician_user']" :disabled="true">
								<el-option v-for="o in list_user_physician_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
						</div>
						<el-select v-else id="physician_user" v-model="form['physician_user']" :disabled="disabledObj['physician_user_isDisabled']">
							<el-option v-for="o in list_user_physician_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
																</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','name_of_disease') || $check_field('add','name_of_disease') || $check_field('set','name_of_disease')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="疾病名称" prop="name_of_disease">
												<el-input id="name_of_disease" v-model="form['name_of_disease']" placeholder="请输入疾病名称"
							  v-if="(form['disease_information_id'] && $check_field('set','name_of_disease')) || (!form['disease_information_id'] && $check_field('add','name_of_disease'))" :disabled="disabledObj['name_of_disease_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','name_of_disease')">{{form['name_of_disease']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','classification_of_diseases') || $check_field('add','classification_of_diseases') || $check_field('set','classification_of_diseases')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="疾病分类" prop="classification_of_diseases">
								<el-select id="classification_of_diseases" v-model="form['classification_of_diseases']"						v-if="(form['disease_information_id'] && $check_field('set','classification_of_diseases')) || (!form['disease_information_id'] && $check_field('add','classification_of_diseases'))">
						<el-option v-for="o in list_classification_of_diseases" :key="o['classification_of_diseases']" :label="o['classification_of_diseases']"
							:value="o['classification_of_diseases']">
						</el-option>
					</el-select>
					<div v-else-if="$check_field('get','classification_of_diseases')">{{form['classification_of_diseases']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','disease_symptoms') || $check_field('add','disease_symptoms') || $check_field('set','disease_symptoms')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="疾病症状" prop="disease_symptoms">
												<el-input id="disease_symptoms" v-model="form['disease_symptoms']" placeholder="请输入疾病症状"
							  v-if="(form['disease_information_id'] && $check_field('set','disease_symptoms')) || (!form['disease_information_id'] && $check_field('add','disease_symptoms'))" :disabled="disabledObj['disease_symptoms_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','disease_symptoms')">{{form['disease_symptoms']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','cause_of_disease') || $check_field('add','cause_of_disease') || $check_field('set','cause_of_disease')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="疾病原因" prop="cause_of_disease">
												<el-input id="cause_of_disease" v-model="form['cause_of_disease']" placeholder="请输入疾病原因"
							  v-if="(form['disease_information_id'] && $check_field('set','cause_of_disease')) || (!form['disease_information_id'] && $check_field('add','cause_of_disease'))" :disabled="disabledObj['cause_of_disease_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','cause_of_disease')">{{form['cause_of_disease']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','inspection_department') || $check_field('add','inspection_department') || $check_field('set','inspection_department')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="检查科室" prop="inspection_department">
												<el-input id="inspection_department" v-model="form['inspection_department']" placeholder="请输入检查科室"
							  v-if="(form['disease_information_id'] && $check_field('set','inspection_department')) || (!form['disease_information_id'] && $check_field('add','inspection_department'))" :disabled="disabledObj['inspection_department_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','inspection_department')">{{form['inspection_department']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','cover_image') || $check_field('add','cover_image') || $check_field('set','cover_image')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="封面图片" prop="cover_image">
								<el-upload :disabled="disabledObj['cover_image_isDisabled']" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_cover_image"
						:show-file-list="false" v-if="(form['disease_information_id'] && $check_field('set','cover_image')) || (!form['disease_information_id'] && $check_field('add','cover_image'))">
						<img id="cover_image" v-if="form['cover_image']" :src="$fullUrl(form['cover_image'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','cover_image')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['cover_image'])" :preview-src-list="[$fullUrl(form['cover_image'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','disease_details') || $check_field('add','disease_details') || $check_field('set','disease_details')" :xs="24" :sm="24" :lg="24" class="el_form_editor_warp">
				<el-form-item label="疾病详情" prop="disease_details">
					<quill-editor v-model.number="form['disease_details']"
						v-if="(form['disease_information_id'] && $check_field('set','disease_details')) || (!form['disease_information_id'] && $check_field('add','disease_details')) ">
					</quill-editor>
					<div v-else-if="$check_field('get','disease_details')" v-html="form['disease_details']"></div>
				</el-form-item>
			</el-col>
						
	
	
		
		
	
	
	
	
	</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/disease_information/view','set') || $check_action('/disease_information/view','add') || $check_option('/disease_information/table','examine')">
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button @click="cancel()">取消</el-button>
				</el-form-item>
				<el-form-item v-else>
					<el-button @click="cancel()">返回</el-button>
				</el-form-item>
			</el-col>

		</el-form>
	</el-main>
</template>

<script>
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		data() {
			return {
				field: "disease_information_id",
				url_add: "~/api/disease_information/add?",
				url_set: "~/api/disease_information/set?",
				url_get_obj: "~/api/disease_information/get_obj?",
				url_upload: "~/api/disease_information/upload?",

				query: {
					"disease_information_id": 0,
				},

				form: {
								"physician_user": 0, // 医师用户
										"name_of_disease":  '', // 疾病名称
										"classification_of_diseases":  '', // 疾病分类
										"disease_symptoms":  '', // 疾病症状
										"cause_of_disease":  '', // 疾病原因
										"inspection_department":  '', // 检查科室
										"cover_image":  '', // 封面图片
										"disease_details":  '', // 疾病详情
											"disease_information_id": 0, // ID
													},
				disabledObj:{
								"physician_user_isDisabled": false,
										"name_of_disease_isDisabled": false,
										"classification_of_diseases_isDisabled": false,
										"disease_symptoms_isDisabled": false,
										"cause_of_disease_isDisabled": false,
										"inspection_department_isDisabled": false,
										"cover_image_isDisabled": false,
										"disease_details_isDisabled": false,
										},

	
					// 用户列表
				list_user_physician_user: [],
						// 用户组
				group_user_physician_user: "",
						
										// 疾病分类选项列表
				list_classification_of_diseases: [""],
	
				
				
				
				
				
			
			}
		},
		methods: {

	
	
				/**
			 * 获取医师用户用户列表
			 */
			async get_list_user_physician_user() {
                var json = await this.$get("~/api/user/get_list?user_group=医师用户");
                if(json.result && json.result.list){
                    this.list_user_physician_user = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					/**
			 * 获取医师用户用户组
			 */
			async get_group_user_physician_user() {
							this.form["physician_user"] = this.$store.state.user.user_id;
							var json = await this.$get("~/api/user_group/get_obj?name=医师用户");
				if(json.result && json.result.obj){
					this.group_user_physician_user = json.result.obj;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_session_physician_user(id){
				var _this = this;
				var user_id = {"user_id":id}
				var url = "~/api/"+_this.group_user_physician_user.source_table+"/get_obj?"
				this.$get(url, user_id, function(res) {
					if (res.result && res.result.obj) {
						var arr = []
						for (let key in res.result.obj) {
							arr.push(key)
						}
						var arrForm = []
									for (let key in _this.form) {
							arrForm.push(key)
						}
												_this.form["physician_user"] = id
									_this.disabledObj['physician_user' + '_isDisabled'] = true
						for (var i=0;i<arr.length;i++){
						  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
							for (var j = 0; j < arrForm.length; j++) {
							  if (arr[i] === arrForm[j]) {
								if (arr[i] !== "physician_user") {
			                      _this.form[arrForm[j]] = res.result.obj[arr[i]]
			                      _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								  break;
								} else {
								  _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								}
							  }
							}
						  }
						}
					}
				});
			},
					get_user_physician_user(id){
				var obj = this.list_user_physician_user.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
	
			
				/**
			 * 获取疾病分类列表
			 */
			async get_list_classification_of_diseases() {
				var json = await this.$get("~/api/classification_of_diseases/get_list?");
				if(json.result && json.result.list){
					this.list_classification_of_diseases = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
					
			
	
			
	
			
	
						/**
			 * 上传封面图片
			 * @param {Object} param 图片参数
			 */
			upload_cover_image(param){
									this.uploadFile(param.file, "cover_image");
								},
	
	
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
																						if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							// if(dbKey === "charging_standard"){
							// 	this.form['charging_rules'] = form[dbKey];
							// 	this.disabledObj['charging_rules_isDisabled'] = true;
							// };
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
								this.form[key] = form[dbKey]
							}
							if(dbKey === "source_table"){
								this.form['source_table'] = form[dbKey];
							}
							if(dbKey === "source_id"){
								this.form['source_id'] = form[dbKey];
							}
							if(dbKey === "source_user_id"){
								this.form['source_user_id'] = form[dbKey];
							}
						})
					})
				}
																				$.db.del("form");
				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){

																																								

			},

																																																														async submit(param, func){
				if (!param) {
					param = this.form;
				}
								var pm = this.events("submit_before", Object.assign({}, param)) || param;
				var msg = await this.events("submit_check", pm);
				var ret;
				if (msg) {
					this.$toast(msg, 'danger');
				} else {
																																																																ret = this.events("submit_main", pm, func);
				}
				return ret;
			},
			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
						submit_check(param) {
																																																																																																		return null;
			},

			is_view(){
				// var bl = this.user_group == "管理员";
				var bl = false;

				if(!bl){
					bl = this.$check_action('/disease_information/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/disease_information/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/disease_information/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/disease_information/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/disease_information/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

				return bl;
			},
			/**
			 * 上传文件
			 * @param {Object} param
			 */
			uploadimg(param) {
				this.uploadFile(param.file, "avatar");
			},

		},
		created() {
					this.get_list_user_physician_user();
					this.get_group_user_physician_user();
									this.get_list_classification_of_diseases();
														},
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	
	.img_multiple{
		overflow: hidden;
	}
	.img_multiple .img_block{
		float: left;
		margin-right: 5px;
		margin-bottom: 5px;
		position: relative;
	}
	.img_multiple .img_block img{
		height: 100px;
		width: auto;
	}
	.img_multiple .img_del{
		position: absolute;
		top: 5px;
		right: 5px;
		width: 20px;
		height: 20px;
		background: #0000008a;
		color: #fff;
		line-height: 20px;
		text-align: center;
		border-radius: 100%;
		cursor: pointer;
	}




</style>
