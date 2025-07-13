package com.example;

import freemarker.template.*;
import java.io.*;
import java.util.*;

public class App {
    public static void main(String[] args) throws Exception {
        //   FreeMarker Configuration
        Configuration cfg = new Configuration(Configuration.VERSION_2_3_32);
        cfg.setDirectoryForTemplateLoading(new File("src/main/resources/templates"));
        cfg.setDefaultEncoding("UTF-8");
        cfg.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);

        //  Loading  template
        Template template = cfg.getTemplate("header.ftl");

       
        Map<String, Object> data = new HashMap<>();
        data.put("title", "Employee Directory");

       
        Writer fileWriter = new FileWriter("output.html");
        template.process(data, fileWriter);
        fileWriter.close();

        System.out.println("Generated: output.html");
    }
}
