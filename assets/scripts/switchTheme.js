function switchTheme(darkTheme, animated) {
    const switchingClasses = {
      '': [
        // Backgrounds
        ['bg-white', 'bg-jet-black'],
        ['bg-gray-light', 'bg-raisin-black'],

        // Fonts
        ['text-black', 'text-white'],
        ['text-dark-grey', 'text-light-grey'],
  
        // Borders
        ['border-gray-light', 'border-dark'],
  
        // Fills
        ['fill-slate-grey', 'fill-light-grey'],

        // Icons
        ['social-logo-light', 'social-logo-dark'],
        ['social-logo-light-sm', 'social-logo-dark-sm'],
        ['fa-cloud-sun', 'fa-cloud-moon']
      ]
    };
  
    for (let parent in switchingClasses) {
      if (!switchingClasses.hasOwnProperty(parent)) continue;
      
      for (let classSwitch of switchingClasses[parent]) {
        const class1 = classSwitch[darkTheme ? 0 : 1];
        const class2 = classSwitch[darkTheme ? 1 : 0];
        $((parent + ' .' + class1).trim()).each(function() {
          if (animated) {
            $(this).css('transition', '1s');
          } else {
            $(this).css('transition', '');
          }
          if (!$(this).hasClass('ignore-dark-mode')) $(this).removeClass(class1).addClass(class2);
        });
      } 
    }


  }
  
  function darkThemeReady() {
    $('#themeSwitch').prop('checked', darkTheme);
    switchTheme(darkTheme, false);
    
  
    $('#themeSwitch').change(function() {
      darkTheme = !darkTheme;
      localStorage.setItem(darkThemeKey, darkTheme);
      switchTheme(darkTheme, true);
    });
  }
  
  const darkThemeKey = 'DARK_MODE';
  
  let darkTheme = localStorage.getItem(darkThemeKey) || false;
  darkTheme = typeof(darkTheme) === 'string' ? (darkTheme === 'true' ? true : false) : darkTheme;