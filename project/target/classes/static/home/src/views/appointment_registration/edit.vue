<template>
	<div class="diy_edit page_appointment_registration" id="appointment_registration_edit">
		<div class='warp'>
			<div class='container'>
				<div class='row diy_edit_content_box'>
						<div v-if="$check_field('set','physician_user') || $check_field('add','physician_user') || $check_field('get','physician_user')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								医师用户:
							</span>
						</div>
						<div class="diy_field diy_down">
							<select id="form_physician_user" :disabled="disabledObj['physician_user_isDisabled']" v-model="form['physician_user']" v-if="(form['physician_user'] && $check_field('set','physician_user')) || (!form['physician_user'] && $check_field('add','physician_user'))" >
								<option v-for="o in list_user_physician_user" :value="o['user_id']">
									{{o['nickname'] + '-' + o['username']}}
								</option>
							</select>
							<span v-else-if="$check_field('get','physician_user')">{{ get_user_info("physician_user", form['physician_user']) }}</span>
						</div>
					</div>
							<div v-if="$check_field('set','doctors_name') || $check_field('add','doctors_name') || $check_field('get','doctors_name')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								医师姓名:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_doctors_name" v-model="form['doctors_name']" placeholder="请输入医师姓名" v-if="(form['doctors_name'] && $check_field('set','doctors_name')) || (!form['doctors_name'] && $check_field('add','doctors_name'))"  :disabled="disabledObj['doctors_name_isDisabled']"/>
							<span v-else-if="$check_field('get','doctors_name')">{{ form['doctors_name'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','visit_time') || $check_field('add','visit_time') || $check_field('get','visit_time')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								就诊时间:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_visit_time" v-model="form['visit_time']" placeholder="请输入就诊时间" v-if="(form['visit_time'] && $check_field('set','visit_time')) || (!form['visit_time'] && $check_field('add','visit_time'))"  :disabled="disabledObj['visit_time_isDisabled']"/>
							<span v-else-if="$check_field('get','visit_time')">{{ form['visit_time'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','duration_of_medical_practice') || $check_field('add','duration_of_medical_practice') || $check_field('get','duration_of_medical_practice')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								从医时长:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_duration_of_medical_practice" v-model="form['duration_of_medical_practice']" placeholder="请输入从医时长" v-if="(form['duration_of_medical_practice'] && $check_field('set','duration_of_medical_practice')) || (!form['duration_of_medical_practice'] && $check_field('add','duration_of_medical_practice'))"  :disabled="disabledObj['duration_of_medical_practice_isDisabled']"/>
							<span v-else-if="$check_field('get','duration_of_medical_practice')">{{ form['duration_of_medical_practice'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','ordinary_user') || $check_field('add','ordinary_user') || $check_field('get','ordinary_user')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								普通用户:
							</span>
						</div>
						<div class="diy_field diy_down">
							<select id="form_ordinary_user" :disabled="disabledObj['ordinary_user_isDisabled']" v-model="form['ordinary_user']" v-if="(form['ordinary_user'] && $check_field('set','ordinary_user')) || (!form['ordinary_user'] && $check_field('add','ordinary_user'))" >
								<option v-for="o in list_user_ordinary_user" :value="o['user_id']">
									{{o['nickname'] + '-' + o['username']}}
								</option>
							</select>
							<span v-else-if="$check_field('get','ordinary_user')">{{ get_user_info("ordinary_user", form['ordinary_user']) }}</span>
						</div>
					</div>
							<div v-if="$check_field('set','user_name') || $check_field('add','user_name') || $check_field('get','user_name')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								用户姓名:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_user_name" v-model="form['user_name']" placeholder="请输入用户姓名" v-if="(form['user_name'] && $check_field('set','user_name')) || (!form['user_name'] && $check_field('add','user_name'))"  :disabled="disabledObj['user_name_isDisabled']"/>
							<span v-else-if="$check_field('get','user_name')">{{ form['user_name'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','appointment_time') || $check_field('add','appointment_time') || $check_field('get','appointment_time')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								预约时间:
							</span>
						</div>
								<!-- 日长 -->
						<div class="diy_field diy_datetime">
							<input type="datetime-local" :disabled="disabledObj['appointment_time_isDisabled']" id="form_appointment_time" v-model="form['appointment_time']" placeholder="请输入预约时间" v-if="(form['appointment_time'] && $check_field('set','appointment_time')) || (!form['appointment_time'] && $check_field('add','appointment_time'))" />
							<span v-else-if="$check_field('get','appointment_time')">{{ form['appointment_time'] }}</span>
						</div>
							</div>
							<div v-if="$check_field('set','appointment_remarks') || $check_field('add','appointment_remarks') || $check_field('get','appointment_remarks')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								预约备注:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_appointment_remarks" v-model="form['appointment_remarks']" placeholder="请输入预约备注" v-if="(form['appointment_remarks'] && $check_field('set','appointment_remarks')) || (!form['appointment_remarks'] && $check_field('add','appointment_remarks'))"  :disabled="disabledObj['appointment_remarks_isDisabled']"/>
							<span v-else-if="$check_field('get','appointment_remarks')">{{ form['appointment_remarks'] }}</span>
						</div>
										</div>
	




				</div>
				<div class="diy_edit_submit_box row">
					<div class="col-12">
						<div class="btn_box">
							<button class="btn_submit" @click="submit()">提交</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import mixin from "@/mixins/page.js";
	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				url_get_obj: "~/api/appointment_registration/get_obj?",
				url_add: "~/api/appointment_registration/add?",
				url_set: "~/api/appointment_registration/set?",

				// 登录权限
				oauth: {
					"signIn": true,
					"user_group": []
				},

				// 查询条件
				query: {
						"physician_user": 0,
							"doctors_name": "",
							"visit_time": "",
							"duration_of_medical_practice": "",
							"ordinary_user": 0,
							"user_name": "",
							"appointment_time": "",
							"appointment_remarks": "",
						"appointment_registration_id": 0,
				},

				obj: {
						"physician_user": 0, // 医师用户
							"doctors_name":  '', // 医师姓名
							"visit_time":  '', // 就诊时间
							"duration_of_medical_practice":  '', // 从医时长
							"ordinary_user": 0, // 普通用户
							"user_name":  '', // 用户姓名
							"appointment_time": new Date().getTime(),
							"appointment_remarks":  '', // 预约备注
						"appointment_registration_id": 0,
				},

				// 表单字段
				form: {
						"physician_user": 0, // 医师用户
							"doctors_name":  '', // 医师姓名
							"visit_time":  '', // 就诊时间
							"duration_of_medical_practice":  '', // 从医时长
							"ordinary_user": 0, // 普通用户
							"user_name":  '', // 用户姓名
							"appointment_time": new Date().getTime(),
							"appointment_remarks":  '', // 预约备注
						"appointment_registration_id": 0,
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
											
				// ID字段
				field: "appointment_registration_id",

			}
		},
		methods: {
																																																																						formatDateValue(value) {
		  const date = new Date(value);
		  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
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
					async get_user_session_ordinary_user(){
				var _this = this;
				var json = await this.$get("~/api/user_group/get_obj?name=普通用户");
				if(json.result && json.result.obj){
					var source_table = json.result.obj.source_table;
					var user_id = _this.$store.state.user.user_id;
					if (user_id){
						var url = "~/api/"+source_table+"/get_obj?"
						this.$get(url, {"user_id":_this.$store.state.user.user_id}, function(res) {
							if (res.result && res.result.obj) {
								var arr = []
								for (let key in res.result.obj) {
									arr.push(key)
								}
								var arrForm = []
								for (let key in _this.form) {
									arrForm.push(key)
								}
								_this.form["ordinary_user"] = user_id
								_this.disabledObj['ordinary_user' + '_isDisabled'] = true
								for (var i=0;i<arr.length;i++){
                  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
                    for (var j = 0; j < arrForm.length; j++) {
                      if (arr[i] === arrForm[j]) {
                        if (arr[i] !== "ordinary_user") {
                          _this.form[arrForm[j]] = res.result.obj[arr[i]]
                          _this.disabledObj[arrForm[j] + '_isDisabled'] = true
                          break;
                        }
                      }
                    }
                  }
								}
							}
						});
					}
				}
				else if(json.error){
					console.error(json.error);
				}
			},
	
				
				
				
		  		get_user_info(name,id){
				var obj = null;
  				  if (name == 'physician_user'){
					  obj = this.list_user_physician_user.getObj({"user_id":id});
				  }
          				  if (name == 'ordinary_user'){
					  obj = this.list_user_ordinary_user.getObj({"user_id":id});
				  }
        				var ret = "";
				if(obj){
				  ret = obj.nickname+"-"+obj.username;
				}
				return ret;
			},
			/**
			 * 修改文件
			 * @param { Object } files 上传文件对象
			 * @param { String } str 表单的属性名
			 */
			change_file(files, str) {
				var form = new FormData();
				form.append("file", files[0]);
				this.$post("~/api/appointment_registration/upload?", form, (res) => {
					if (res.result) {
						this.form[str] = res.result.url;
					} else if (res.error) {
						this.$toast(res.error.message);
					}
				});
			},
			
			/**
			 * 修改文件
			 * @param { Object } files 上传文件对象
			 * @param { String } str 表单的属性名
			 */
			change_file_multiple(files, str) {
				let _this = this;
				var form = new FormData();
				for (var i = 0; i < files.length; i++) {
					form.set("file", files[i]);
					_this.$post("~/api/appointment_registration/upload?", form, (res) => {
						if (res.result) {
							if (_this.form[str].length > 0) {
								_this.form[str].push(res.result.url);
							} else {
								_this.form[str] = [res.result.url];
							}
						} else if (res.error) {
							_this.$toast(res.error.message);
						}
					});
				}
			},

			/**
			 * 获取对象后获取缓存表单
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_before(param){
				var form = $.db.get("form");
				// if (form) {
        //   delete(form.examine_state)
        //   delete(form.examine_reply)
        //   this.obj = $.push(this.obj ,form);
				// 	this.form = $.push(this.form ,form);
				// }
				// var arr = []
				// for (let key in form) {
				// 	arr.push(key)
				// }
				// for (var i=0;i<arr.length;i++){
				// 	this.disabledObj[arr[i] + '_isDisabled'] = true
				// }
        if (form) {
          var arr = []
          for (let key in form) {
            arr.push(key)
          }
          var arrForm = []
          for (let key in this.form) {
            arrForm.push(key)
          }
          for (var i=0;i<arr.length;i++){
            if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
              for (var j = 0; j < arrForm.length; j++) {
                if (arrForm[j] === arr[i]) {
                  this.form[arrForm[j]] = form[arr[i]]
                  this.obj[arrForm[j]] = form[arr[i]]
                  this.disabledObj[arrForm[j] + '_isDisabled'] = true
                  break;
                }
              }
			  if(arr[i] === "source_table"){
			  	this.form['source_table'] = form[arr[i]]
			  }
			  if(arr[i] === "source_id"){
			  	this.form['source_id'] = form[arr[i]]
			  }
			  if(arr[i] === "source_user_id"){
			  	this.form['source_user_id'] = form[arr[i]]
			  }
            }
          }
        }
																			        if (this.form["appointment_time"] && JSON.stringify(this.form["appointment_time"]).indexOf("-")===-1) {
          this.form["appointment_time"] = this.$toTime(parseInt(this.form["appointment_time"]), "yyyy-MM-ddThh:mm")
        }
						
        $.db.del("form");
				return param;
			},

			/**
			 * 获取对象后获取缓存表单
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json ,func){
				// var form = $.db.get("form");
				// var obj = Object.assign({} ,form ,this.obj);
				// if (obj) {
        //   delete(obj.examine_state)
        //   delete(obj.examine_reply)
				// 	this.obj = $.push(this.obj ,obj);
				// }
				// if (form) {
        //   delete(form.examine_state)
        //   delete(form.examine_reply)
				// 	this.form = $.push(this.form ,form);
				// }

				if(func){
					func(json);
				}
			},

		},
		created() {
						this.get_list_user_physician_user();
															this.get_user_session_ordinary_user();
					this.get_list_user_ordinary_user();
												},
	}
</script>

<style>
	.diy_compute{
		line-height: 40px;
	}
	.diy_field.diy_img_multiple{
		margin: 0;
	}
	.diy_field.diy_img_multiple div{
		float: left;
		position: relative;
		margin: 0 10px 10px 0;
	}
	.diy_field.diy_img_multiple img{
		height: 100px;
		width: auto;
	}
	.diy_field.diy_img_multiple span{
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
