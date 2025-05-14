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
 * 入院信息：(AdmissionInformation)表实体类
 *
 */
@TableName("`admission_information`")
@Data
@EqualsAndHashCode(callSuper = false)
public class AdmissionInformation implements Serializable {

    // AdmissionInformation编号
    @TableId(value = "admission_information_id", type = IdType.AUTO)
    private Integer admission_information_id;

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
    // 普通用户
    @TableField(value = "`ordinary_user`")
    private Integer ordinary_user;
    // 用户姓名
    @TableField(value = "`user_name`")
    private String user_name;
    // 入院时间
    @TableField(value = "`admission_time`")
    private Timestamp admission_time;
    // 入院原因
    @TableField(value = "`reason_for_admission`")
    private String reason_for_admission;




















			// 来源表
	@TableField(value = "source_table")
	private String source_table;
	
	// 来源ID
	@TableField(value = "source_id")
	private Integer source_id;
	
	// 来源用户ID
	@TableField(value = "source_user_id")
	private Integer source_user_id;
		


	// 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;

}
