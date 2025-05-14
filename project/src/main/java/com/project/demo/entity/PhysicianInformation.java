package com.project.demo.entity;

import com.alibaba.fastjson.annotation.JSONField;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.*;

import java.io.Serializable;
import java.sql.Timestamp;


/**
 * 医师信息：(PhysicianInformation)表实体类
 *
 */
@TableName("`physician_information`")
@Data
@EqualsAndHashCode(callSuper = false)
public class PhysicianInformation implements Serializable {

    // PhysicianInformation编号
    @TableId(value = "physician_information_id", type = IdType.AUTO)
    private Integer physician_information_id;

    // 医师用户
    @TableField(value = "`physician_user`")
    private Integer physician_user;
    // 医师姓名
    @TableField(value = "`doctors_name`")
    private String doctors_name;
    // 就诊时间
    @TableField(value = "`visit_time`")
    private String visit_time;
    // 从医时长
    @TableField(value = "`duration_of_medical_practice`")
    private String duration_of_medical_practice;
    // 擅长领域
    @TableField(value = "`specializes_in_specific_fields`")
    private String specializes_in_specific_fields;
    // 个人照片
    @TableField(value = "`personal_photo`")
    private String personal_photo;
    // 个人简介
    @TableField(value = "`personal_profile`")
    private String personal_profile;



    // 收藏数
    @TableField(value = "collect_len")
    private Integer collect_len;
















		// 预约限制次数
	@TableField(value = "appointment_registration_limit_times")
	private String appointment_registration_limit_times;
	
			


	// 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;

}
