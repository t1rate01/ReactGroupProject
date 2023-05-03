package com.db.example;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;


@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class ExampleApplication {

    public static void main(String[] args) {
        SpringApplication.run(ExampleApplication.class, args);
    }

    // handlerille asetukset, jotta saadaan reactille suora route /shared/ myös toimimaan. 
    @Bean
    public WebMvcConfigurer webMvcConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addResourceHandlers(ResourceHandlerRegistry registry) {
                // uusi handleri joka ohjaa kaikk pyynnöt juureen
                registry.addResourceHandler("/**")
                        // osoitetaan handlerille react projectin sijainti
                        .addResourceLocations("classpath:/static/build/")
                        // Caching ? 
                        .resourceChain(true)
                        .addResolver(new PathResourceResolver() {
                            @Override
                            protected Resource getResource(String resourcePath, Resource location) throws IOException {
                                // Jos pyydetty resurssi on olemassa ja luettavissa, palautetaan se
                                Resource requestedResource = location.createRelative(resourcePath);
                                return requestedResource.exists() && requestedResource.isReadable() ? requestedResource
                                        : new ClassPathResource("/static/build/index.html");
                            } // muuten palautetaan index.html
                        });
            }
        };
    }
}
