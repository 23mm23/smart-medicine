<template>
	<el-main class="bg edit_wrap comtable_e">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">
		<el-row class="row_ce"> 
							<el-col v-if="$check_field('get','physician_user') || $check_field('add','physician_user') || $check_field('set','physician_user')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="医师用户" prop="physician_user">
																<el-select v-if="(form['appointment_registration_id'] && $check_field('set','physician_user')) || (!form['appointment_registration_id'] && $check_field('add','physician_user'))" id="physician_user" v-model="form['physician_user']" :disabled="disabledObj['physician_user_isDisabled']">
							<el-option v-for="o in list_user_physician_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','physician_user')" id="physician_user" v-model="form['physician_user']" :disabled="true">
							<el-option v-for="o in list_user_physician_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','doctors_name') || $check_field('add','doctors_name') || $check_field('set','doctors_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="医师姓名" prop="doctors_name">
															<el-input id="doctors_name" v-model="form['doctors_name']" placeholder="请输入医师姓名"
							  v-if="(form['appointment_registration_id'] && $check_field('set','doctors_name')) || (!form['appointment_registration_id'] && $check_field('add','doctors_name'))" :disabled="disabledObj['doctors_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','doctors_name')">{{form['doctors_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','visit_time') || $check_field('add','visit_time') || $check_field('set','visit_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="就诊时间" prop="visit_time">
															<el-input id="visit_time" v-model="form['visit_time']" placeholder="请输入就诊时间"
							  v-if="(form['appointment_registration_id'] && $check_field('set','visit_time')) || (!form['appointment_registration_id'] && $check_field('add','visit_time'))" :disabled="disabledObj['visit_time_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','visit_time')">{{form['visit_time']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','duration_of_medical_practice') || $check_field('add','duration_of_medical_practice') || $check_field('set','duration_of_medical_practice')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="从医时长" prop="duration_of_medical_practice">
															<el-input id="duration_of_medical_practice" v-model="form['duration_of_medical_practice']" placeholder="请输入从医时长"
							  v-if="(form['appointment_registration_id'] && $check_field('set','duration_of_medical_practice')) || (!form['appointment_registration_id'] && $check_field('add','duration_of_medical_practice'))" :disabled="disabledObj['duration_of_medical_practice_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','duration_of_medical_practice')">{{form['duration_of_medical_practice']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','ordinary_user') || $check_field('add','ordinary_user') || $check_field('set','ordinary_user')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="普通用户" prop="ordinary_user">
																					<div v-if="user_group !== '管理员'">
							{{ get_user_session_ordinary_user(form['ordinary_user']) }}
							<el-select v-if="(form['appointment_registration_id'] && $check_field('set','ordinary_user')) || (!form['appointment_registration_id'] && $check_field('add','ordinary_user'))" id="ordinary_user" v-model="form['ordinary_user']" :disabled="disabledObj['ordinary_user_isDisabled']">
								<el-option v-for="o in list_user_ordinary_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
							<el-select v-else-if="$check_field('get','ordinary_user')" id="ordinary_user" v-model="form['ordinary_user']" :disabled="true">
								<el-option v-for="o in list_user_ordinary_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
						</div>
						<el-select v-else id="ordinary_user" v-model="form['ordinary_user']" :disabled="disabledObj['ordinary_user_isDisabled']">
							<el-option v-for="o in list_user_ordinary_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
																</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','user_name') || $check_field('add','user_name') || $check_field('set','user_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="用户姓名" prop="user_name">
															<el-input id="user_name" v-model="form['user_name']" placeholder="请输入用户姓名"
							  v-if="(form['appointment_registration_id'] && $check_field('set','user_name')) || (!form['appointment_registration_id'] && $check_field('add','user_name'))" :disabled="disabledObj['user_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','user_name')">{{form['user_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','appointment_time') || $check_field('add','appointment_time') || $check_field('set','appointment_time')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="预约时间" prop="appointment_time">
											<el-date-picker :disabled="disabledObj['appointment_time_isDisabled']" v-if="(form['appointment_registration_id'] && $check_field('set','appointment_time')) || (!form['appointment_registration_id'] && $check_field('add','appointment_time'))" id="appointment_time"
						v-model="form['appointment_time']" type="datetime" placeholder="选择日期时间">
					</el-date-picker>
					<div v-else-if="$check_field('get','appointment_time')">{{form['appointment_time']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="$check_field('get','appointment_remarks') || $check_field('add','appointment_remarks') || $check_field('set','appointment_remarks')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
							<el-form-item label="预约备注" prop="appointment_remarks">
															<el-input id="appointment_remarks" v-model="form['appointment_remarks']" placeholder="请输入预约备注"
							  v-if="(form['appointment_registration_id'] && $check_field('set','appointment_remarks')) || (!form['appointment_registration_id'] && $check_field('add','appointment_remarks'))" :disabled="disabledObj['appointment_remarks_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','appointment_remarks')">{{form['appointment_remarks']}}</div>
											</el-form-item>
			</el-col>
						
	
	
		
		
						<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp" v-if="!form['source_user_id'] && 1 > 0">
			  <el-form-item label="开药限次">
				<el-input id="limit_times" v-model="form['prescription_information_limit_times']" placeholder="开药限制次数，0为不限"
						  v-if="$check_option('/appointment_registration/view','can_limits')"
				></el-input>
				<div v-else-if="$check_action('/appointment_registration/view','get')" v-html="form['prescription_information_limit_times']"></div>
			  </el-form-item>
			</el-col>
					<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp" v-if="!form['source_user_id'] && 1 > 0">
			  <el-form-item label="入院限次">
				<el-input id="limit_times" v-model="form['admission_information_limit_times']" placeholder="入院限制次数，0为不限"
						  v-if="$check_option('/appointment_registration/view','can_limits')"
				></el-input>
				<div v-else-if="$check_action('/appointment_registration/view','get')" v-html="form['admission_information_limit_times']"></div>
			  </el-form-item>
			</el-col>
			
	
	
		
		
	
		</el-row>
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item v-if="$check_action('/appointment_registration/view','set') || $check_action('/appointment_registration/view','add') || $check_option('/appointment_registration/table','examine')">
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
				field: "appointment_registration_id",
				url_add: "~/api/appointment_registration/add?",
				url_set: "~/api/appointment_registration/set?",
				url_get_obj: "~/api/appointment_registration/get_obj?",
				url_upload: "~/api/appointment_registration/upload?",

				query: {
					"appointment_registration_id": 0,
				},

				form: {
								"physician_user": 0, // 医师用户
										"doctors_name":  '', // 医师姓名
										"visit_time":  '', // 就诊时间
										"duration_of_medical_practice":  '', // 从医时长
										"ordinary_user": 0, // 普通用户
										"user_name":  '', // 用户姓名
										"appointment_time":  '', // 预约时间
										"appointment_remarks":  '', // 预约备注
											"appointment_registration_id": 0, // ID
													"prescription_information_limit_times": 1, // 开药限制次数
							"admission_information_limit_times": 1, // 入院限制次数
												},
				disabledObj:{
								"physician_user_isDisabled": false,
										"doctors_name_isDisabled": false,
										"visit_time_isDisabled": false,
										"duration_of_medical_practice_isDisabled": false,
										"ordinary_user_isDisabled": false,
										"user_name_isDisabled": false,
										"appointment_time_isDisabled": false,
										"appointment_remarks_isDisabled": false,
										},

	
					// 用户列表
				list_user_physician_user: [],
					
			
			
			
					// 用户列表
				list_user_ordinary_user: [],
						// 用户组
				group_user_ordinary_user: "",
					
			
			
		
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
			 * 获取普通用户用户列表
			 */
			async get_list_user_ordinary_user() {
                var json = await this.$get("~/api/user/get_list?user_group=普通用户");
                if(json.result && json.result.list){
                    this.list_user_ordinary_user = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					/**
			 * 获取普通用户用户组
			 */
			async get_group_user_ordinary_user() {
							this.form["ordinary_user"] = this.user.user_id;
							var json = await this.$get("~/api/user_group/get_obj?name=普通用户");
				if(json.result && json.result.obj){
					this.group_user_ordinary_user = json.result.obj;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_session_ordinary_user(id){
				var _this = this;
				var user_id = {"user_id":id}
				var url = "~/api/"+_this.group_user_ordinary_user.source_table+"/get_obj?"
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
												_this.form["ordinary_user"] = id
									_this.disabledObj['ordinary_user' + '_isDisabled'] = true
						for (var i=0;i<arr.length;i++){
						  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
							for (var j = 0; j < arrForm.length; j++) {
							  if (arr[i] === arrForm[j]) {
								if (arr[i] !== "ordinary_user") {
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
					get_user_ordinary_user(id){
				var obj = this.list_user_ordinary_user.getObj({"user_id":id});
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
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
									// 获取缓存数据附加
				form = $.db.get("form");
									$.push(this.form ,form);
																		
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
							        if (this.form["appointment_time"] && JSON.stringify(this.form["appointment_time"]).indexOf("-")===-1){
            this.form["appointment_time"] = this.$toTime(parseInt(this.form["appointment_time"]),"yyyy-MM-dd hh:mm:ss")
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
																																			if(this.form["appointment_time"]=="0000-00-00 00:00:00"){
				  this.form["appointment_time"] = null;
				}
				if(parseInt(this.form["appointment_time"]) > 9999){
					this.form["appointment_time"] = this.$toTime(parseInt(this.form["appointment_time"]),"yyyy-MM-dd hh:mm:ss")
				}
										

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
					
																																																																									if (!param.appointment_time){
					return "预约时间不能为空";
				}
																											return null;
			},

			is_view(){
				// var bl = this.user_group == "管理员";
				var bl = false;

				if(!bl){
					bl = this.$check_action('/appointment_registration/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/appointment_registration/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/appointment_registration/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/appointment_registration/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/appointment_registration/view','get');
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
														this.get_list_user_ordinary_user();
					this.get_group_user_ordinary_user();
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
