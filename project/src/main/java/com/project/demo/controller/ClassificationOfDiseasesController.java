package com.project.demo.controller;

import com.project.demo.entity.ClassificationOfDiseases;
import com.project.demo.service.ClassificationOfDiseasesService;
import com.project.demo.controller.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import javax.persistence.Query;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.*;


/**
 * 疾病分类：(ClassificationOfDiseases)表控制层
 *
 */
@RestController
@RequestMapping("/classification_of_diseases")
public class ClassificationOfDiseasesController extends BaseController<ClassificationOfDiseases, ClassificationOfDiseasesService> {

    /**
     * 疾病分类对象
     */
    @Autowired
    public ClassificationOfDiseasesController(ClassificationOfDiseasesService service) {
        setService(service);
    }



    @PostMapping("/add")
    @Transactional
    public Map<String, Object> add(HttpServletRequest request) throws IOException {
        Map<String,Object> paramMap = service.readBody(request.getReader());
        this.addMap(paramMap);
        return success(1);
    }


}
