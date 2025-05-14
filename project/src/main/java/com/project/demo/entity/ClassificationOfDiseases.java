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
 * 疾病分类：(ClassificationOfDiseases)表实体类
 *
 */
@TableName("`classification_of_diseases`")
@Data
@EqualsAndHashCode(callSuper = false)
public class ClassificationOfDiseases implements Serializable {

    // ClassificationOfDiseases编号
    @TableId(value = "classification_of_diseases_id", type = IdType.AUTO)
    private Integer classification_of_diseases_id;

    // 疾病分类
    @TableField(value = "`classification_of_diseases`")
    private String classification_of_diseases;




















			


	// 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;

}
