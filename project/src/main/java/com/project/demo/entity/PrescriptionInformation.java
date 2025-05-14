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
 * 开药信息：(PrescriptionInformation)表实体类
 *
 */
@TableName("`prescription_information`")
@Data
@EqualsAndHashCode(callSuper = false)
public class PrescriptionInformation implements Serializable {

    // PrescriptionInformation编号
    @TableId(value = "prescription_information_id", type = IdType.AUTO)
    private Integer prescription_information_id;

    // 医师用户
    @TableField(value = "`physician_user`")
    private Integer physician_user;
    // 医师姓名
    @TableField(value = "`doctors_name`")
    private String doctors_name;
    // 普通用户
    @TableField(value = "`ordinary_user`")
    private Integer ordinary_user;
    // 用户姓名
    @TableField(value = "`user_name`")
    private String user_name;
    // 预约时间
    @TableField(value = "`appointment_time`")
    private Timestamp appointment_time;
    // 开药内容
    @TableField(value = "`drug_content`")
    private String drug_content;
    // 注意事项
    @TableField(value = "`precautions`")
    private String precautions;




















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
