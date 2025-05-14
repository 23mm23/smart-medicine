<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce">
							<el-col v-if="$check_field('get','physician_user') || $check_field('add','physician_user') || $check_field('set','physician_user')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="医师用户" prop="physician_user">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_physician_user(form['physician_user']) }}
							<el-select v-if="(form['drug_information_id'] && $check_field('set','physician_user')) || (!form['drug_information_id'] && $check_field('add','physician_user'))" id="physician_user" v-model="form['physician_user']" :disabled="disabledObj['physician_user_isDisabled']">
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
								<el-col v-if="$check_field('get','drug_name') || $check_field('add','drug_name') || $check_field('set','drug_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="药品名称" prop="drug_name">
												<el-input id="drug_name" v-model="form['drug_name']" placeholder="请输入药品名称"
							  v-if="(form['drug_information_id'] && $check_field('set','drug_name')) || (!form['drug_information_id'] && $check_field('add','drug_name'))" :disabled="disabledObj['drug_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','drug_name')">{{form['drug_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','type_of_drug') || $check_field('add','type_of_drug') || $check_field('set','type_of_drug')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="药品类型" prop="type_of_drug">
												<el-input id="type_of_drug" v-model="form['type_of_drug']" placeholder="请输入药品类型"
							  v-if="(form['drug_information_id'] && $check_field('set','type_of_drug')) || (!form['drug_information_id'] && $check_field('add','type_of_drug'))" :disabled="disabledObj['type_of_drug_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','type_of_drug')">{{form['type_of_drug']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','drug_efficacy') || $check_field('add','drug_efficacy') || $check_field('set','drug_efficacy')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="药品功效" prop="drug_efficacy">
												<el-input id="drug_efficacy" v-model="form['drug_efficacy']" placeholder="请输入药品功效"
							  v-if="(form['drug_information_id'] && $check_field('set','drug_efficacy')) || (!form['drug_information_id'] && $check_field('add','drug_efficacy'))" :disabled="disabledObj['drug_efficacy_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','drug_efficacy')">{{form['drug_efficacy']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','usage_and_dosage') || $check_field('add','usage_and_dosage') || $check_field('set','usage_and_dosage')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="用法用量" prop="usage_and_dosage">
												<el-input id="usage_and_dosage" v-model="form['usage_and_dosage']" placeholder="请输入用法用量"
							  v-if="(form['drug_information_id'] && $check_field('set','usage_and_dosage')) || (!form['drug_information_id'] && $check_field('add','usage_and_dosage'))" :disabled="disabledObj['usage_and_dosage_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','usage_and_dosage')">{{form['usage_and_dosage']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','applicable_diseases') || $check_field('add','applicable_diseases') || $check_field('set','applicable_diseases')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="适用疾病" prop="applicable_diseases">
												<el-input id="applicable_diseases" v-model="form['applicable_diseases']" placeholder="请输入适用疾病"
							  v-if="(form['drug_information_id'] && $check_field('set','applicable_diseases')) || (!form['drug_information_id'] && $check_field('add','applicable_diseases'))" :disabled="disabledObj['applicable_diseases_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','applicable_diseases')">{{form['applicable_diseases']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','precautions') || $check_field('add','precautions') || $check_field('set','precautions')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="注意事项" prop="precautions">
												<el-input id="precautions" v-model="form['precautions']" placeholder="请输入注意事项"
							  v-if="(form['drug_information_id'] && $check_field('set','precautions')) || (!form['drug_information_id'] && $check_field('add','precautions'))" :disabled="disabledObj['precautions_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','precautions')">{{form['precautions']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','pictures_of_medicines') || $check_field('add','pictures_of_medicines') || $check_field('set','pictures_of_medicines')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="药品图片" prop="pictures_of_medicines">
								<el-upload :disabled="disabledObj['pictures_of_medicines_isDisabled']" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_pictures_of_medicines"
						:show-file-list="false" v-if="(form['drug_information_id'] && $check_field('set','pictures_of_medicines')) || (!form['drug_information_id'] && $check_field('add','pictures_of_medicines'))">
						<img id="pictures_of_medicines" v-if="form['pictures_of_medicines']" :src="$fullUrl(form['pictures_of_medicines'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','pictures_of_medicines')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['pictures_of_medicines'])" :preview-src-list="[$fullUrl(form['pictures_of_medicines'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','drug_introduction') || $check_field('add','drug_introduction') || $check_field('set','drug_introduction')" :xs="24" :sm="24" :lg="24" class="el_form_editor_warp">
				<el-form-item label="药品简介" prop="drug_introduction">
					<quill-editor v-model.number="form['drug_introduction']"
						v-if="(form['drug_information_id'] && $check_field('set','drug_introduction')) || (!form['drug_information_id'] && $check_field('add','drug_introduction')) ">
					</quill-editor>
					<div v-else-if="$check_field('get','drug_introduction')" v-html="form['drug_introduction']"></div>
				</el-form-item>
			</el-col>
						
	
	
		
		
	
	
	
	
	</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/drug_information/view','set') || $check_action('/drug_information/view','add') || $check_option('/drug_information/table','examine')">
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
				field: "drug_information_id",
				url_add: "~/api/drug_information/add?",
				url_set: "~/api/drug_information/set?",
				url_get_obj: "~/api/drug_information/get_obj?",
				url_upload: "~/api/drug_information/upload?",

				query: {
					"drug_information_id": 0,
				},

				form: {
								"physician_user": 0, // 医师用户
										"drug_name":  '', // 药品名称
										"type_of_drug":  '', // 药品类型
										"drug_efficacy":  '', // 药品功效
										"usage_and_dosage":  '', // 用法用量
										"applicable_diseases":  '', // 适用疾病
										"precautions":  '', // 注意事项
										"pictures_of_medicines":  '', // 药品图片
										"drug_introduction":  '', // 药品简介
											"drug_information_id": 0, // ID
													},
				disabledObj:{
								"physician_user_isDisabled": false,
										"drug_name_isDisabled": false,
										"type_of_drug_isDisabled": false,
										"drug_efficacy_isDisabled": false,
										"usage_and_dosage_isDisabled": false,
										"applicable_diseases_isDisabled": false,
										"precautions_isDisabled": false,
										"pictures_of_medicines_isDisabled": false,
										"drug_introduction_isDisabled": false,
										},

	
					// 用户列表
				list_user_physician_user: [],
						// 用户组
				group_user_physician_user: "",
						
				
				
				
				
				
				
				
			
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
			 * 上传药品图片
			 * @param {Object} param 图片参数
			 */
			upload_pictures_of_medicines(param){
									this.uploadFile(param.file, "pictures_of_medicines");
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
					bl = this.$check_action('/drug_information/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/drug_information/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/drug_information/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/drug_information/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/drug_information/view','get');
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
