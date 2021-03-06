package com.example.zara;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

@SpringBootApplication
public class ZaraApplication {

	@Autowired
	private ApplicationContext applicationContext;
	
	
	public static void main(String[] args) {
		SpringApplication.run(ZaraApplication.class, args);
	}
	
	
	// mybatis 초기화 
	@Bean 
	public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception 
	{
	     SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean(); 
	     sessionFactory.setDataSource(dataSource);
	     // mybatis-config 설정 
	     sessionFactory.setConfigLocation(applicationContext.getResource("classpath:mybatis-config.xml"));
	      Resource[] res = new PathMatchingResourcePatternResolver().getResources("classpath:mapper/*Mapper.xml");
	       sessionFactory.setMapperLocations(res);
	       return sessionFactory.getObject(); 
	}

}
