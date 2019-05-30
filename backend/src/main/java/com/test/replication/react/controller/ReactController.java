package com.test.replication.react.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactController {

	
	@RequestMapping( {"/", "/home"} )
    public String home(Model model) {
           return "forward:/index.html";
    }
}
