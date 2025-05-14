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
 * 医师用户：(PhysicianUser)表实体类
 *
 */
@TableName("`physician_user`")
@Data
@EqualsAndHashCode(callSuper = false)
public class PhysicianUser implements Serializable {

    // PhysicianUser编号
    @TableId(value = "physician_user_id", type = IdType.AUTO)
    private Integer physician_user_id;

    // 医师姓名
    @TableField(value = "`doctors_name`")
    private String doctors_name;
    // 医师性别
    @TableField(value = "`physician_gender`")
    private String physician_gender;
    // 医师年龄
    @TableField(value = "`physicians_age`")
    private String physicians_age;









    // 用户编号
    @TableField(value = "user_id")
    private Integer userId;











			


	// 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;

}
