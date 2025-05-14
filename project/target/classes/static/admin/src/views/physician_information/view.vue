<template>
	<el-main class="bg edit_wrap comtable_e">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce"> 
							<el-col v-if="$check_field('get','physician_user') || $check_field('add','physician_user') || $check_field('set','physician_user')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="医师用户" prop="physician_user">
																					<div v-if="user_group !== '管理员'">
							{{ get_user_session_physician_user(form['physician_user']) }}
							<el-select v-if="(form['physician_information_id'] && $check_field('set','physician_user')) || (!form['physician_information_id'] && $check_field('add','physician_user'))" id="physician_user" v-model="form['physician_user']" :disabled="disabledObj['physician_user_isDisabled']">
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
								<el-col v-if="$check_field('get','doctors_name') || $check_field('add','doctors_name') || $check_field('set','doctors_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="医师姓名" prop="doctors_name">
															<el-input id="doctors_name" v-model="form['doctors_name']" placeholder="请输入医师姓名"
							  v-if="(form['physician_information_id'] && $check_field('set','doctors_name')) || (!form['physician_information_id'] && $check_field('add','doctors_name'))" :disabled="disabledObj['doctors_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','doctors_name')">{{form['doctors_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','visit_time') || $check_field('add','visit_time') || $check_field('set','visit_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="就诊时间" prop="visit_time">
															<el-input id="visit_time" v-model="form['visit_time']" placeholder="请输入就诊时间"
							  v-if="(form['physician_information_id'] && $check_field('set','visit_time')) || (!form['physician_information_id'] && $check_field('add','visit_time'))" :disabled="disabledObj['visit_time_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','visit_time')">{{form['visit_time']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','duration_of_medical_practice') || $check_field('add','duration_of_medical_practice') || $check_field('set','duration_of_medical_practice')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="从医时长" prop="duration_of_medical_practice">
															<el-input id="duration_of_medical_practice" v-model="form['duration_of_medical_practice']" placeholder="请输入从医时长"
							  v-if="(form['physician_information_id'] && $check_field('set','duration_of_medical_practice')) || (!form['physician_information_id'] && $check_field('add','duration_of_medical_practice'))" :disabled="disabledObj['duration_of_medical_practice_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','duration_of_medical_practice')">{{form['duration_of_medical_practice']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','specializes_in_specific_fields') || $check_field('add','specializes_in_specific_fields') || $check_field('set','specializes_in_specific_fields')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="擅长领域" prop="specializes_in_specific_fields">
															<el-input id="specializes_in_specific_fields" v-model="form['specializes_in_specific_fields']" placeholder="请输入擅长领域"
							  v-if="(form['physician_information_id'] && $check_field('set','specializes_in_specific_fields')) || (!form['physician_information_id'] && $check_field('add','specializes_in_specific_fields'))" :disabled="disabledObj['specializes_in_specific_fields_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','specializes_in_specific_fields')">{{form['specializes_in_specific_fields']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','personal_photo') || $check_field('add','personal_photo') || $check_field('set','personal_photo')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="个人照片" prop="personal_photo">
											<el-upload :disabled="disabledObj['personal_photo_isDisabled']" class="avatar-uploader" drag
						accept="image/gif, image/jpeg, image/png, image/jpg" action="" :http-request="upload_personal_photo"
						:show-file-list="false" v-if="(form['physician_information_id'] && $check_field('set','personal_photo')) || (!form['physician_information_id'] && $check_field('add','personal_photo'))">
						<img id="personal_photo" v-if="form['personal_photo']" :src="$fullUrl(form['personal_photo'])" class="avatar">
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-image v-else-if="$check_field('get','personal_photo')" style="width: 100px; height: 100px"
						:src="$fullUrl(form['personal_photo'])" :preview-src-list="[$fullUrl(form['personal_photo'])]">
						<div slot="error" class="image-slot">
							<img src="../../../public/img/error.png" style="width: 90px; height: 90px" />
						</div>
					</el-image>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','personal_profile') || $check_field('add','personal_profile') || $check_field('set','personal_profile')" :xs="24" :sm="24" :lg="24" class="el_form_editor_warp">
							<el-form-item label="个人简介" prop="personal_profile">
								<quill-editor v-model.number="form['personal_profile']"
						v-if="(form['physician_information_id'] && $check_field('set','personal_profile')) || (!form['physician_information_id'] && $check_field('add','personal_profile')) ">
					</quill-editor>
					<div v-else-if="$check_field('get','personal_profile')" v-html="form['personal_profile']"></div>
				</el-form-item>
			</el-col>
						
	
	
		
		
						<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp" v-if="!form['source_user_id'] && 0 > 0">
			  <el-form-item label="预约限次">
				<el-input id="limit_times" v-model="form['appointment_registration_limit_times']" placeholder="预约限制次数，0为不限"
						  v-if="$check_option('/physician_information/view','can_limits')"
				></el-input>
				<div v-else-if="$check_action('/physician_information/view','get')" v-html="form['appointment_registration_limit_times']"></div>
			  </el-form-item>
			</el-col>
			
	
	
		
		
	
		</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/physician_information/view','set') || $check_action('/physician_information/view','add') || $check_option('/physician_information/table','examine')">
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
				field: "physician_information_id",
				url_add: "~/api/physician_information/add?",
				url_set: "~/api/physician_information/set?",
				url_get_obj: "~/api/physician_information/get_obj?",
				url_upload: "~/api/physician_information/upload?",

				query: {
					"physician_information_id": 0,
				},

				form: {
								"physician_user": 0, // 医师用户
										"doctors_name":  '', // 医师姓名
										"visit_time":  '', // 就诊时间
										"duration_of_medical_practice":  '', // 从医时长
										"specializes_in_specific_fields":  '', // 擅长领域
										"personal_photo":  '', // 个人照片
										"personal_profile":  '', // 个人简介
											"physician_information_id": 0, // ID
													"appointment_registration_limit_times": 0, // 预约限制次数
												},
				disabledObj:{
								"physician_user_isDisabled": false,
										"doctors_name_isDisabled": false,
										"visit_time_isDisabled": false,
										"duration_of_medical_practice_isDisabled": false,
										"specializes_in_specific_fields_isDisabled": false,
										"personal_photo_isDisabled": false,
										"personal_profile_isDisabled": false,
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
							this.form["physician_user"] = this.user.user_id;
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
			 * 上传个人照片
			 * @param {Object} param 图片参数
			 */
			upload_personal_photo(param){
									this.uploadFile(param.file, "personal_photo");
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
					bl = this.$check_action('/physician_information/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/physician_information/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/physician_information/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/physician_information/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/physician_information/view','get');
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
