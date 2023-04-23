package com.db.example.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;


import java.util.Date;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

@Service
public class securityService {
    @Autowired
    userRepository userRepo;
    @Autowired
    encoder enco;

    @Value("${jwt.secret}")
    private String jwtKey;
    

    // UUSI KÄYTTÄJÄ
    public users register(String username, String password, String defaultview) {
        String encodedPassword = enco.encode(password);
        users user = new users(username, encodedPassword, defaultview);
        userRepo.save(user);
        return user;
    }


    // KIRJAUTUMINEN, KÄYTTÄJÄN OLEMASSAOLON TARKISTUS JA SALASANAN TARKISTUS, PALAUTTAA TOKEN TAI NULL
    public String login(String username, String password) {
        users u = userRepo.findById(username).orElse(null);
        try {
            if (enco.matches(password, u.getPass())) {
                return createJWTToken(u.getUsername());
            }
            else {
                return null;
            }
        }
        catch (Exception e) {
            return null;
        }
    }

        // TOKENIN LUONTI, HUOMAA JWT KEY JOKA TULEE application.properties
    public String createJWTToken(String username){
        Algorithm algo = Algorithm.HMAC256(jwtKey);
        return JWT.create()
            .withSubject(username)
            .withExpiresAt(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24))
            .sign(algo);
    }

    // TOKENIN VALIDOINTI, PALAUTTAA KÄYTTÄJÄNIMEN TAI NULL
    public String validateToken(String token) {
        Algorithm algo = Algorithm.HMAC256(jwtKey);
       JWTVerifier verifier = JWT.require(algo).build();
       try {
           DecodedJWT jwt  = verifier.verify(token);
            return jwt.getSubject();  // palauttaa aiemmin tokeniin koodatun usernamen
       }
       catch (JWTVerificationException e) {
         // virhe kiinni
       }
         return null;
    }

    public String deleteUser(String username) {
        try {
            userRepo.deleteById(username);
            return "User deleted";
        }
        catch (Exception e) {
            //virhe kiinni
        }
        return "User not found";
}

    public String updateDefaultView(String username, String defaultview){
        users u = userRepo.findById(username).orElse(null);
        try {
            u.setdefaultview(defaultview);
            userRepo.save(u);
            return "Default view updated";
        }
        catch (Exception e) {
            //virhe kiinni
        }
        return null;
    }

   

}