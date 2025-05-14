package com.project.demo.controller;

import com.project.demo.entity.PrescriptionInformation;
import com.project.demo.service.PrescriptionInformationService;
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
 * 开药信息：(PrescriptionInformation)表控制层
 *
 */
@RestController
@RequestMapping("/prescription_information")
public class PrescriptionInformationController extends BaseController<PrescriptionInformation, PrescriptionInformationService> {

    /**
     * 开药信息对象
     */
    @Autowired
    public PrescriptionInformationController(PrescriptionInformationService service) {
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
