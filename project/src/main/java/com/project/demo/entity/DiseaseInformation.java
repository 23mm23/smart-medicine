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
 * 疾病信息：(DiseaseInformation)表实体类
 *
 */
@TableName("`disease_information`")
@Data
@EqualsAndHashCode(callSuper = false)
public class DiseaseInformation implements Serializable {

    // DiseaseInformation编号
    @TableId(value = "disease_information_id", type = IdType.AUTO)
    private Integer disease_information_id;

    // 医师用户
    @TableField(value = "`physician_user`")
    private Integer physician_user;
    // 疾病名称
    @TableField(value = "`name_of_disease`")
    private String name_of_disease;
    // 疾病分类
    @TableField(value = "`classification_of_diseases`")
    private String classification_of_diseases;
    // 疾病症状
    @TableField(value = "`disease_symptoms`")
    private String disease_symptoms;
    // 疾病原因
    @TableField(value = "`cause_of_disease`")
    private String cause_of_disease;
    // 检查科室
    @TableField(value = "`inspection_department`")
    private String inspection_department;
    // 封面图片
    @TableField(value = "`cover_image`")
    private String cover_image;
    // 疾病详情
    @TableField(value = "`disease_details`")
    private String disease_details;



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
