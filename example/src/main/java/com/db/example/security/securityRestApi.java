package com.db.example.security;

import java.util.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;





@RestController
public class securityRestApi {
    
    @Autowired
    securityService secService;
    

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestParam String username, @RequestParam String password) {
        users u = secService.register(username, password);
        return new ResponseEntity<>(u.getUsername(), HttpStatus.OK);
    }


    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestHeader("Authorization") String basicAuth) {
        if(basicAuth != null && basicAuth.startsWith("Basic")){
        String credentials = basicAuth.split(" ")[1];   // basic encoodattu stringi alkaa "Basic " ja perässä encoodattu setti
        String user[] = new String(Base64.getDecoder().decode(credentials)).split(":"); // decodaa ja pilkkoo basic stringin joka on muodossa "username:password"
        String token = secService.login(user[0], user[1]);
        try {
            if (token != null) {
                return new ResponseEntity<>(token, HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>("Wrong/Missing username or password", HttpStatus.UNAUTHORIZED);
            }
        }
        catch (Exception e) {
            return new ResponseEntity<>("Wrong/Missing username or password", HttpStatus.UNAUTHORIZED);
        }}
        return new ResponseEntity<>("Wrong/Missing username or password", HttpStatus.UNAUTHORIZED);
    }

   /*  @GetMapping("/users/private")   // TÄMÄ ON OHJE ESIMERKKI
    public ResponseEntity<String> getPrivateData(@RequestHeader("Authorization") String bearer){
        if (bearer != null){
            if (bearer.startsWith("Bearer")){
            String token = bearer.substring(7);  // alkaa "bearer " ja perässä tokeni
            String username = secService.validateToken(token);
            if (username != null){
                return new ResponseEntity<>("Private data for "+username, HttpStatus.OK);
            }
        }}
    return new ResponseEntity<>("Forbidden", HttpStatus.FORBIDDEN);
    } */

    @DeleteMapping("/users/")
    public ResponseEntity<String> deleteUser(@RequestHeader("Authorization") String bearer){
        if (bearer != null){
            if (bearer.startsWith("Bearer")){
                String token = bearer.split(" ")[1];  // toinen tapa pilkkoa
                String username = secService.validateToken(token);
                if (username != null){
                    secService.deleteUser(username);
                    return new ResponseEntity<>("User "+username+" deleted", HttpStatus.OK);
                }
            }}
        return new ResponseEntity<>("Forbidden", HttpStatus.FORBIDDEN);
}

}