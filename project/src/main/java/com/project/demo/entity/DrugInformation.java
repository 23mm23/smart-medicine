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
 * 药品信息：(DrugInformation)表实体类
 *
 */
@TableName("`drug_information`")
@Data
@EqualsAndHashCode(callSuper = false)
public class DrugInformation implements Serializable {

    // DrugInformation编号
    @TableId(value = "drug_information_id", type = IdType.AUTO)
    private Integer drug_information_id;

    // 医师用户
    @TableField(value = "`physician_user`")
    private Integer physician_user;
    // 药品名称
    @TableField(value = "`drug_name`")
    private String drug_name;
    // 药品类型
    @TableField(value = "`type_of_drug`")
    private String type_of_drug;
    // 药品功效
    @TableField(value = "`drug_efficacy`")
    private String drug_efficacy;
    // 用法用量
    @TableField(value = "`usage_and_dosage`")
    private String usage_and_dosage;
    // 适用疾病
    @TableField(value = "`applicable_diseases`")
    private String applicable_diseases;
    // 注意事项
    @TableField(value = "`precautions`")
    private String precautions;
    // 药品图片
    @TableField(value = "`pictures_of_medicines`")
    private String pictures_of_medicines;
    // 药品简介
    @TableField(value = "`drug_introduction`")
    private String drug_introduction;



    // 收藏数
    @TableField(value = "collect_len")
    private Integer collect_len;

















			


	// 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;

}
