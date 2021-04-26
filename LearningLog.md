Init Firebase and create-react-app for youtube-clone

remove unnecessary files and css rules, except index.css, also add margin: 0;

think in components from outside looking in and top to bottom.

<!--                         Container                          -->

    /***                     Header                             ***\
    /*** burger|icon         search   vids|tools|alerts|profile ***\
    /***                     Header                             ***\
    /***      Sidebar       ***\ /***        Recommended        ***\
    /***       home         ***\ /***                           ***\
    /***      trending      ***\ /***        Trending           ***\
    /***    subscription    ***\ /***                           ***\
    /***      library       ***\ /***        Subscriptions      ***\
    /***                      Footer                            ***\

Did I possibly install 'styled-components' twice? once with MaterialUI and once with styled-components?

4/9/21

- Fix Mobile layout @ 475px - Card Images, Header
  x Fix Card Image aspect ratio, add hover effect.
  x Change cursor to pointer for sidebar background overlay.
- Add different data for Cards

4/19/21

fixed Card Image aspect ration, added random number and round to decimal functions for view counts.
☮ 💯

4/21/21

Should I change my useState's to useRef's so it doesn't reload everything everytime I click...

change mobile search expand to useRef.
