package com.db.example.SavedViews;
import com.db.example.security.securityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin
@RestController
public class savedViewRest {
    @Autowired
    savedViewService savedViewService;
    @Autowired
    securityService secService;


    @PostMapping("/savedviews")
    public ResponseEntity<String> saveViewPost(@RequestHeader("Authorization") String token, @RequestParam String viewID, @RequestParam String viewstring) {
        String username = secService.validateToken(token);
        if (username == null) {
            return new ResponseEntity<>("Wrong/Missing token", HttpStatus.UNAUTHORIZED);
        }
        savedViewService.saveView(new savedview(viewID, viewstring, username));
        return new ResponseEntity<>("View saved", HttpStatus.OK);
    }

    @GetMapping("/savedviews/{viewID}")
    public ResponseEntity<String> getView(@PathVariable String viewID) {
        savedview view = savedViewService.getView(viewID);
        if (view == null) {
            return new ResponseEntity<>("View not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(view.getViewString(), HttpStatus.OK);
    }

}
